const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  facebookId: { type: String },
  email: { type: String, required: true },
  name: { type: String },
  password: { type: String }, // Optional if using email/password login
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
