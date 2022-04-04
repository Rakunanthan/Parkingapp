const express = require('express');
// const axios = require('axios');
// const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const normalize = require('normalize-url');
//const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
// const Post = require('../../models/');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/',[
  auth,[
  check('postcode', 'Postcode is required').notEmpty(),
  check('phnno', 'Phone number is required').notEmpty(),
  // check('date','Date is Required').notEmpty(),
  ],], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
 location,desc,adress,postcode,phnno,date
    }=req.body;
     
     const profileFields={};
     profileFields.user=req.user.id;
     if(location) profileFields.location=location;
     if(desc) profileFields.desc=desc;
     if(adress) profileFields.adress=adress;
     if(postcode) profileFields.postcode=postcode;
     if(phnno) profileFields.phnno=phnno;
     //if(date) profileFields.date=date;


  




    try {
        let profile = await Profile.findOne({user:req.user.id});  
      // Using upsert option (creates new doc if no match is found):
      if(profile){
          //update profile
      let profile = await Profile.findOneAndUpdate(
         
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    }

      profile=new Profile(profileFields);
      await profile.save();

}catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }  
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get(
  '/user/:user_id',
//   checkObjectId('user_id'),
  async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user:req.params.user_id
      }).populate('user', ['name', 'avatar']);

      if (!profile) return res.status(400).json({ msg: 'Profile not found' });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
    // await Promise.all([
    //   Post.deleteMany({ user: req.user.id }),
      Profile.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id })
    // ]);

    res.json({ msg: 'User deleted' }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports=router;