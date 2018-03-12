const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');
require('./services/passport');

const app = express();

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoDbURL);
mongoose.Promise = global.Promise;

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});