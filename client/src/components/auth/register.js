import axios from 'axios';
import React,{Fragment,useState} from 'react'

const Register = () => {
  const [FormData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const {name,email,password,password2}=FormData;

  const onChange =e =>setFormData({...FormData,[e.target.name]:e.target.value})
  const onSubmit= async e =>{
    e.preventDefault();
    if(password !==password2){
         alert("PAsswords donot match");
    }
    else{
      const newUser={
        name,email,password
      }
      try {
        const config ={
          Headers:{
            'content-type':'application/json'
          }
        }
        const body =JSON.stringify(newUser); 
        const res =await axios.post('/api/users',body,config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data); 
        
      }
    }
  }
  return (
    <Fragment>
      <h1 className="large text-primary">
        Sign Up
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" name='name' placeholder="Name" value={name}  onChange={ e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" name='email' placeholder="Email Address" value={email} onChange={ e => onChange(e)} required/>
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div> 
        <div className="form-group">
          <input type="password" name='password' placeholder="Password" minlength="6"value={password} onChange={ e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="password"name='password2' placeholder="Confirm Password" minlength="6" value={password2} onChange={ e => onChange(e)} required />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  )
}

export default Register