const express =require('express');
const app=express();

app.get('/',(req,res)=> res.send('api running') );
const PORT =process.env.PORT ||3001;
app.listen(PORT,()=>console.log(`Server started ${PORT}`));