const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middleware/validation');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();


router.post('/register', validateRegistration, authController.registerLocal);
router.post('/login', validateLogin, authController.loginLocal);
router.post('/logout', authController.logout);


router.get('/me', verifyToken, authController.getCurrentUser);


router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: `${process.env.CLIENT_URL}/login?error=google_auth_failed`,
    session: false 
  }),
  authController.socialAuthSuccess
);


router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get('/github/callback',
  passport.authenticate('github', { 
    failureRedirect: `${process.env.CLIENT_URL}/login?error=github_auth_failed`,
    session: false 
  }),
  authController.socialAuthSuccess
);


router.get('/microsoft',
  passport.authenticate('microsoft', { scope: ['user.read'] })
);

router.get('/microsoft/callback',
  passport.authenticate('microsoft', { 
    failureRedirect: `${process.env.CLIENT_URL}/login?error=microsoft_auth_failed`,
    session: false 
  }),
  authController.socialAuthSuccess
);

module.exports = router;
