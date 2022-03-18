import React,{Fragment,useEffect} from 'react';
import { Provider} from 'react-redux';
import store from './store';
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar';
import ParkingNavbar from './components/Layout/ParkingNavbar'
import './App.css';
import  Landing  from './components/Layout/Landing';
import OwnerLanding from './components/Layout/OwnerLanding';
import OwnerRegister from './components/auth/OwnerRegister'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Adminlogin from './components/auth/Adminlogin'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { loaduser } from './actions/auth';
import setauthtoken from './utils/setauthtoken';

if(localStorage.token)
     {
        setauthtoken(localStorage.token);
    }
const App = ()=> {
    useEffect(()=>
    {
        store.dispatch(loaduser());
    },[])
return (
    <Provider store={store}>
 <Router>
 <Fragment>
  <Navbar/>
  <Alert/>
  <Routes>
 <Route path='/' element={<Landing/>}/>
 <Route path='/ParkingNavbar' element={<ParkingNavbar/>}/>
 <Route path='/OwnerLanding' element={<OwnerLanding/>}/>
 <Route path='/OwnerRegister' element={<OwnerRegister/>}/>
 <Route path='/Adminlogin' element={<Adminlogin/>}/>
 <Route path='/Register' element={<Register/>}/>
 <Route path="/Login" element={<Login/>}/>
</Routes>
</Fragment>
</Router>
</Provider>

);
}
export default App;
 