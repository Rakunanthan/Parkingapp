const express =require('express');
const connectDB =require('./config/db')
const app=express();

//connect db
connectDB(); 

//Init middle ware
app.use(express.json({extended:false}));
app.get('/',(req,res)=> res.send('api running') );

//Define routes 
app.use('/api/users',require('./routes/api/users'));
app.use('/api/post',require('./routes/api/post'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/auth',require('./routes/api/auth'));


const PORT =process.env.PORT ||3001;
app.listen(PORT,()=>console.log(`Server started ${PORT}`));  