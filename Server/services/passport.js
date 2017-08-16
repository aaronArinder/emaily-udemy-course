const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');

//User is our model class; the relation to mongodb's collection
const User = mongoose.model('users');
//one argument means we're trying to fetch something out of mongoose; two arguments
// (eg models/User.js's use) means we're tryingn to load something into it.

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //using the mongoose model to see whether we already have a record
      //for the user. This query returns a promise; it's async.
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          //record already exists
        } else {
          //make a new record--none exists yet
          new User({
            googleID: profile.id,
            name: profile.displayName
          }).save();
          //without the save method, the new User won't persist in the database,
          // but only in the javascript
        }
      });
    }
  )
);
