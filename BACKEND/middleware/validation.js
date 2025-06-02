const validator = require('validator');

const validateRegistration = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];

  
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  
  if (!email || !validator.isEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match');
  }

  
  if (password && !validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0
  })) {
    errors.push('Password must contain at least one uppercase letter, one lowercase letter, and one number');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email || !validator.isEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  if (!password || password.length < 1) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

module.exports = {
  validateRegistration,
  validateLogin
};
