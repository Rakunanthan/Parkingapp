const mongoose=require('mongoose');
const schema=mongoose.schema;
const PostSchema=new Schema({
    user:
    {
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    desc:{
        type:String
    },
    pay:{
        type:Number
    },
    location:{
        type:String  
     },
    adress1:{
        type:String,
        required:true
    },
    adress2:{
        type:String
    },
    Postcode:{
        type:String,
        required:true
    },


});