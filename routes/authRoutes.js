const express = require('express');
const passport = require('passport');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const login = require('../middlewares/login');

const router = express.Router();

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
});

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.post('/stripe', login, async (req, res) => {
    try {
        let charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Payment for emaily application',
            source: req.body.id
        });
        req.user.credits += 5;
        let user = await req.user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;