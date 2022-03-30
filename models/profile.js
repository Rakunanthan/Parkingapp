const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  desc: {
    type: String
  },
  adress: {
    type: String
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
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);