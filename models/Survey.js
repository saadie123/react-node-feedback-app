const mongoose = require('mongoose');
const recipientSchema = require('./Recipeint');
const surveySchema = new mongoose.Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [recipientSchema],
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    dateSent: {
        type: Date,
        default: Date.now()
    },
    lastResponded: Date
});

module.exports = mongoose.model('surveys', surveySchema);