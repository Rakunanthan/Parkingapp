
import React ,{Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
 import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
 import Spinner from '../Layout/Spinner'
 import {getCurrentProfile } from '../../actions/profile'
 import DashboardActions from './DashboardActions'

 
 const Dashboard = ({getCurrentProfile,auth:{user},profile:{profile,loading}}) => {
   useEffect(()=>{
     getCurrentProfile();
   },[]);
   return loading && profile ===null ? <Spinner/> :
   <div style={{
     "margin-top":"100px"

   }}>
   
   
   <Fragment>
     <h1 className='large text-primary'>Dashboard </h1>
     <p className='lead'>
       <i className='fas fa-user'></i> welcome {user && user.name}
     </p>
    {profile !==null ? (<Fragment>
      <DashboardActions/>
    </Fragment>) : (<Fragment>
     <p>Still You have not created any parking space</p>
     
     <Link to="/Createprofile" className="btn btn-primary my-1">
            Register your Parking Space
          </Link>
   </Fragment>)
 }
 </Fragment>
 </div>
 }

 
 Dashboard.propTypes = {
   getCurrentProfile: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired
 }

 const mapStateToProps =state=>
 ({
   auth:state.auth,
   profile:state.profile
 });
 
 export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);  

