const validateName = (name) => {
  const nameValidatorRegex = /^[a-zA-Z ]{2,30}$/;
  return nameValidatorRegex.test(name);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const validatePhoneNumber = (phone) => {
  const phoneValidatorRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneValidatorRegex.test(phone);
};

const validateEmail = (email) => {
  const emailValidatorRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailValidatorRegex.test(email);
};

module.exports = {
  validateName,
  validatePassword,
  validatePhoneNumber,
  validateEmail,
};
