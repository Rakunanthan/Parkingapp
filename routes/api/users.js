const express=require('express');
const router=express.Router();
const {check,validationResult}=require('express-validator');
const gravatar = require('gravatar');

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');

const User=require('../../models/User')

//@route POST   api/users
//@desc  tEST ROUTE
//@acess Public

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please enter the mail').not().isEmpty(),
    check('password','please enter the password').isLength({min:6})
],
async(req,res) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
       return res.status(400).json({errrors:errors.array()});
    }
    const {name,email,password} =req.body;

    try{
        let user=await User.findOne({email});
        if(user){
            res.status(400).json ({errors:[{msg:'User aldready exists'}]})
        }

        const avatar=gravatar.url(email,{
            s:'200',
            r:"pg",
            d:"mm"
        })
         user =new User({
             name,
             email,
             avatar,
             password
         }); 
         const salt=await bcrypt.genSalt(10);

         user.password =await bcrypt.hash(password,salt);

         await user.save();
        const payload ={
            user:{
                id:user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err,token)=>{
                if(err) throw err;
                res.json({token});
            });
        
    }catch(err){
        console.log(err.message);
        res.status(500).send('server error');
    }
});
module.exports=router; 