const express =require('express');
const router =express.Router();
const auth=require('../../middleware/auth');
const User=require('../../models/User')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const { check,validationResult } = require("express-validator/check");

router.get('/',auth,async (req,res) =>{
    try{
       const user =await User.findById(req.user.id).select('-password');
       res.json(user);
    }
    catch (err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});


//Route: Post api/auth
//Desc: Authenticate user &token
//acess :Public
router.post('/',[
   
    check('email','Please enter the mail').not().isEmpty(),
    check('password','Password is required').exists()
],
async(req,res) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
       return res.status(400).json({errrors:errors.array()});
    }
    const {email,password} =req.body;

    try{
        let user=await User.findOne({email});
        if(! user){
            res.status(400).json ({errors:[{msg:'Invalid credentials '}]})
        }

     const  isMatch= await bcrypt.compare(password,user.password);

     if(!isMatch)
     {
         return res.status(400).json({errors:[{msg:"Invalis credentials "}]})
     }

    
            
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


module.exports =router;