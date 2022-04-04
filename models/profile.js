const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String,
    required:true
  },
  desc: {
    type: String,
    required:true
  },
  adress: {
    type: String,
    
  },
  postcode: {
    type: String,
    required: true
  },
  phnno: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default:Date.now
  }
  
});

module.exports = mongoose.model('profile', ProfileSchema);