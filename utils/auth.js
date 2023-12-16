require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    let decoded = {};

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, paramdecoded) => {
        if (err) {
            return;
        }
        decoded = paramdecoded;
    });
    return decoded;
};

const isAuthenticated = (req, res, next) => {
    const authorizationToken = req.headers.authorization;

    let token;
    if (authorizationToken) {
        token = authorizationToken.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({
            error: "Please provide valid token",
        });
    }

    const decoded = verifyToken(token);

    if (Object.keys(decoded).length === 0) {
        return res.status(401).json({
            message: "Unauthorized Access",
        });
    }

    req.userInfo = decoded;
    next();
};

// This function is used for generating or signing JWT token.
const generateToken = (user, token_type) => {
    let token;
    if (token_type === "access") {
        token = jwt.sign({ phone: user.phone, id: user.id }, process.env.ACCESS_TOKEN, {
            expiresIn: "24h",
        });
    } else if (token_type === "refresh") {
        token = jwt.sign({ phone: user.phone }, process.env.REFRESH_TOKEN, {
            expiresIn: "30days",
        });
    }
    return token;
};
module.exports = { isAuthenticated, generateToken };
