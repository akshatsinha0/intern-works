const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'No account found with this email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      return done(null, user);
    }

    
    user = await User.findOne({ email: profile.emails[0].value });
    if (user) {
      user.googleId = profile.id;
      await user.save();
      return done(null, user);
    }

    
    user = new User({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      provider: 'google'
    });
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ githubId: profile.id });
    
    if (user) {
      return done(null, user);
    }

    
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
    if (email) {
      user = await User.findOne({ email });
      if (user) {
        user.githubId = profile.id;
        await user.save();
        return done(null, user);
      }
    }

    
    user = new User({
      githubId: profile.id,
      name: profile.displayName || profile.username,
      email: email,
      provider: 'github'
    });
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));


passport.use(new MicrosoftStrategy({
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
  callbackURL: "/auth/microsoft/callback",
  scope: ['user.read']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ microsoftId: profile.id });
    
    if (user) {
      return done(null, user);
    }

    
    user = await User.findOne({ email: profile.emails[0].value });
    if (user) {
      user.microsoftId = profile.id;
      await user.save();
      return done(null, user);
    }

    
    user = new User({
      microsoftId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      provider: 'microsoft'
    });
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));

module.exports = passport;
