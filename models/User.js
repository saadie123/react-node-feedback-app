const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('users', userSchema);