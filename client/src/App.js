import React,{Fragment,useEffect} from 'react';
import { Provider} from 'react-redux';
import store from './store';
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar';
import ParkingNavbar from './components/Layout/ParkingNavbar'
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import  Landing  from './components/Layout/Landing';
import OwnerLanding from './components/Layout/OwnerLanding';
import OwnerRegister from './components/auth/OwnerRegister'
import Ownerlogin from './components/auth/Ownerlogin';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Adminlogin from './components/auth/Adminlogin'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { loaduser } from './actions/auth';
import setauthtoken from './utils/setauthtoken';
import Createprofile from './components/profile-forms/Createprofile';
import EditProfile from './components/profile-forms/EditProfile';
//import  Addnewspace  from './components/profile-forms/Addnewspace'
import PrivateRoute from './components/Routing/Privateroute';
  
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
 <Route path='/Ownerlogin' element={<Ownerlogin/>}/>
 <Route path='/Adminlogin' element={<Adminlogin/>}/>
 <Route path='/Register' element={<Register/>}/>
 <Route path="/Login" element={<Login/>}/>
 <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
            <Route
            path="Createprofile"
            element={<PrivateRoute component={Createprofile} />}
          />
           <Route
            path="EditProfile"
            element={<PrivateRoute component={EditProfile} />}
          />
          

 {/* <Route path='/Dashboard' element={<Dashboard/>}/>
 <Route path ='/Createprofile' element={<Createprofile/>}/> */}
 {/* <Route
  path="/Dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
      <Createprofile/>
    </PrivateRoute>}/> */}
</Routes>
</Fragment>
</Router>
</Provider>

);
}
export default App;
 