<<<<<<< HEAD
import React ,{Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
 import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
 import Spinner from '../Layout/Spinner'
 import {getCurrentProfile } from '../../actions/profile'

 
 const Dashboard = ({getCurrentProfile,auth:{user},profile:{profile,loading}}) => {
   useEffect(()=>{
     getCurrentProfile();
   },[]);
   return loading && profile ===null ? <Spinner/> : <Fragment>
     <h1 className='large text-primary'>Dashboard </h1>
     <p className='lead'>
       <i className='fas fa-user'></i> welcome {user && user.name}
     </p>
    {profile !==null ? <Fragment>has</Fragment>: <Fragment>
     <p>Still not have created parking space</p>
     <Link to ='/createprofile' className='btn-btn-primary my-1'/>
     create profile
   </Fragment>
 }
 </Fragment>
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
=======
import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = ({getCurrentProfile,auth,profile})=> {
   useEffect(()=>{
       getCurrentProfile();
   },[]);

  return (
    <div>dashboard</div>
  )
}

Dashboard.propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired
}
const mapStateProps=state=>({
    auth:state.auth,
    profile:state.profile
})

export default connect(mapStateProps,{getCurrentProfile})(Dashboard)
>>>>>>> bb42394725417005e497b9e5cf62b95c5b2ba248
