const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./services/passport');


mongoose.connect(keys.mongoDbURL);
mongoose.Promise = global.Promise;

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/auth/google',authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});