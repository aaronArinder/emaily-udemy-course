const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  //route handler with code from google

  app.get('/auth/google/callback', passport.authenticate('google'));
};
