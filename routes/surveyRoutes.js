const express = require('express');

const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/mailer');
const Survey = require('../models/Survey');
const checkCredits = require('../middlewares/checkCredits');
const login = require('../middlewares/login');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Thank you for your feedback. Have a nice day!");
})

router.post('/', login, checkCredits, async (req, res) => {
    const survey = new Survey({
        title: req.body.title,
        body: req.body.body,
        subject: req.body.subject,
        recipients: req.body.recipients.split(',').map(email => ({email:email.trim()})),
        _user: req.user.id
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
        await mailer.send();
        await survey.save();
        req.user.credites -= 1;
        const user = await req.user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(422).send(error);
    }
});

module.exports = router;