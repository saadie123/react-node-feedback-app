const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/callback', passport.authenticate('google'),(req,res)=>{
    res.redirect('/surveys');
});

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');    
})

module.exports = router;