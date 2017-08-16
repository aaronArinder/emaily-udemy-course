const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');

//User is our model class; the relation to mongodb's collection

const User = mongoose.model('users');

//one argument means we're trying to fetch something out of mongoose; two arguments
// (eg models/User.js's use) means we're tryingn to load something into it.

//serialize: turn a mongoose model instance into an id
//deserialize: take an id and turn it back into a model instance

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //using the mongoose model to see whether we already have a record
      //for the user. This query returns a promise; it's async.
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          //record already exists

          //done() takes two arguments; response to whether there was an error,
          //then the user record, existing User, which tells passport that we're
          //finished and found that particular user
          done(null, existingUser);
        } else {
          //make a new record--none exists yet
          new User({
            googleID: profile.id,
            name: profile.displayName
          })
            .save()
            //without the save method, the new User won't persist in the database,
            // but only in the javascript
            .then(user => done(null, user));
        }
      });
    }
  )
);
