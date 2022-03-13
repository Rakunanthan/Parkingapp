import React,{Fragment} from 'react';

import Navbar from './components/Layout/Navbar';
import './App.css';
import  Landing  from './components/Layout/Landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = ()=> {
return (
 <Router>
 <Fragment>
  <Navbar/>
  <Routes>
 <Route path='/' element={<Landing/>}/>
 <Route path='/register' element={<Register/>}/>
 <Route path="/login" element={<Login/>}/>
</Routes>
</Fragment>
</Router>

);
}
export default App;
 