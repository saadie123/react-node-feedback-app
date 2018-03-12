const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null ,user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        let user = await User.findById(id);
        done(null, user);
    } catch (error) {
        console.log(error);        
    }
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let oldUser = await User.findOne({googleId: profile.id});
        if (!oldUser) {
            let user = new User({
                googleId: profile.id,
                name: profile.displayName
            });
            let newUser = await user.save();
            done(null, newUser);
        } else {
            done(null, oldUser);
        }
    } catch (error) {
        console.log(error);
    }
}));