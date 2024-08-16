const express = require('express');
const router = express.Router();
const passport = require('passport');

// Route for Google authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Callback route for Google authentication
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/'
}), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/authsuccess');
});

// Route for Facebook authentication
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

// Callback route for Facebook authentication
router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/'
}), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/authsuccess');
});

module.exports = router;
