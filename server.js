const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./services/passport');

const app = express();

const authRoutes = require('./routes/authRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

mongoose.connect(keys.mongoDbURL);
mongoose.Promise = global.Promise;

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use('/auth',authRoutes);
app.use('/api/surveys',surveyRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});