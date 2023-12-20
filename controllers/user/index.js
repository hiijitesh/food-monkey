require("dotenv").config();
const bcrypt = require("bcrypt");
const validator = require("../../utils/validator");
const { generateToken } = require("../../utils/auth");

const { UserModel, RefreshTokenModel } = require("../../models");

const controllers = {
    userSignup: async (req, res) => {
        const { phone, password, name, email } = req.body;

        if (!name || !password || !phone) {
            res.status(400).json({ error: "Empty Name/Phone/Password." });
            return;
        }

        if (
            !validator.validateName(name) ||
            !validator.validatePhoneNumber(phone) ||
            !validator.validatePassword(password)
        ) {
            res.status(400).json({ error: "Invalid Name/Phone/Password." });
            return;
        }

        if (email && !validator.validateEmail(email)) {
            res.status(400).json({ error: "Invalid Email." });
            return;
        }

        // check user already have signup
        try {
            const existingUser = await UserModel.findOne({ where: { phone } });

            if (existingUser && existingUser.name != "NULL") {
                res.status(400).json({
                    error: "already existing user found with this phone.",
                });
                return;
            }

            // user is new, hash the password
            hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                name: name,
                phone: phone,
                password: hashedPassword,
            };
            // since email is optional so we can add if email if it does exist
            if (email) {
                newUser.email = email;
            }
            // update username of user else create new user
            if (existingUser && existingUser.name == "NULL") {
                await UserModel.update(newUser, { where: { id: existingUser.id } });
            } else {
                createdUser = await UserModel.create(newUser);
            }

            return res.status(201).json({ message: "User created successfully", user: createdUser });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "User signup failed." });
            return;
        }
    },

    // user Login function
    userLogin: async (req, res) => {
        const { phone, password } = req.body;

        // check phone or password is missing/empty
        if (!phone || !password) {
            res.status(400).json({
                error: "Phone and Password is required for Login.",
            });
            return;
        }

        // find user in DB using phone number
        try {
            const user = await UserModel.findOne({ where: { phone } });

            if (!user) {
                res.status(400).json({ error: "No user found." });
                return;
            }

            // compare the user entered password and DB password of the user
            const matchPassword = await bcrypt.compare(password, user.password);

            if (!matchPassword) {
                res.status(400).json({ error: "Wrong password." });
                return;
            }

            const access_token = generateToken(user, "access");
            const refresh_token = generateToken(user, "refresh");
            await RefreshTokenModel.create({ token: refresh_token, userId: phone });

            return res.status(200).json({
                message: "Login successful",
                access_token,
                refresh_token,
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Login failed. Try again!", message: error.message });
            return;
        }
    },

    // user by id
    getUserById: async (req, res) => {
        const { phone } = req.params;

        if (!phone) {
            res.status(400).json({
                error: "Phone is required for Login.",
            });
            return;
        }
        try {
            const user = await UserModel.findOne({ where: { phone }, attributes: { exclude: ["password"] } });
            return res.status(200).json({
                message: "user fetch successful",
                user,
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "No user found.", message: error.message });
            return;
        }
    },

    // get all user
    getAllUsers: async (req, res) => {
        try {
            const user = await UserModel.findAll({ attributes: { exclude: ["password"] } });
            return res.status(200).json({
                message: "user fetch successful",
                user,
            });
        } catch (error) {
            res.status(500).json({ error: "No user found.", message: error.message });
            return;
        }
    },

    // This endpoint is used to get the access token.
    getAccessToken: async (req, res) => {
        const refresh_token = req.body.refresh_token;

        if (!refresh_token) {
            res.status(400).json({ error: "Refresh token is missing." });
            return;
        }

        try {
            const currentRefreshToken = await RefreshTokenModel.findOne({
                where: { token: refresh_token },
            });

            if (!currentRefreshToken) {
                res.status(400).json({ error: "Invalid refresh token." });
                return;
            }

            const new_access_token = generateToken(currentRefreshToken, "access");

            return res.status(200).json({
                message: "New access token generation success.",
                new_access_token,
                refresh_token,
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({
                error: "Access token generation failed. Try again!",
                message: error.message,
            });
            return;
        }
    },

    // This end point is used for userLogout
    userLogout: async (req, res) => {
        const refresh_token = req.body.refresh_token;

        if (!refresh_token) {
            res.status(400).json({ error: "Refresh token is missing." });
            return;
        }

        try {
            const currentRefreshToken = await RefreshTokenModel.findOne({
                where: { token: refresh_token },
            });

            if (!currentRefreshToken) {
                res.status(400).json({ error: "Invalid refresh token." });
                return;
            }

            await currentRefreshToken.destroy();

            res.status(200).json({ message: "Logout successful" });
            return;
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Logout failed. Try again", message: error.message });
            return;
        }
    },

    // since email is optional so we can add email later on
    addUserEmail: async (req, res) => {
        const email = req.body.email;

        if (!email || !validator.validateEmail(email)) {
            res.status(400).json({ error: "Invalid email address." });
            return;
        }
        try {
            const existingUser = await UserModel.findOne({
                where: { phone: req.user.phone },
            });

            if (!existingUser) {
                res.status(400).json({ error: "No user found." });
                return;
            }

            await UserModel.update({ email }, { where: { phone: existingUser.phone } });

            return res.status(201).json({ message: "Email added successfully." });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Adding the email failed. Try again", message: error.message });
            return;
        }
    },
    // since email is optional so we can add email later on
    addProfilePhoto: async (req, res) => {
        const link = req.body.link;

        if (!link) {
            res.status(400).json({ error: "Invalid link" });
            return;
        }
        try {
            const existingUser = await UserModel.findOne({
                where: { phone: req.user.phone },
            });

            if (!existingUser) {
                res.status(400).json({ error: "No user found." });
                return;
            }

            await UserModel.update({ profileImage: link }, { where: { phone: existingUser.phone } });

            return res.status(201).json({ message: "Profile Image added successfully." });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Adding the Profile Image failed. Try again", message: error.message });
            return;
        }
    },
};

module.exports = controllers;
