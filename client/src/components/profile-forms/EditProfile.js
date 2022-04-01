import React ,{Fragment, useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createProfile,getCurrentProfile } from '../../actions/profile'
import {Link,useNavigate} from 'react-router-dom'




const EditProfile = ({profile:{profile,loading},createProfile,getCurrentProfile,history}) => {
    const [formData,setFormData] = useState({
        location: '',
        desc:'',
        postcode:'',
        phnno:''
    });

    useEffect(()=>{
        getCurrentProfile();
        setFormData({
            location: loading || !profile.location ? '':profile.loaction,
            desc:loading || !profile.desc ? '':profile.desc,
             postcode:loading || !profile.postcode ? '':profile.postcode,
            phnno:loading || !profile.phnno ? '':profile.phnno
        });
         
    },[loading]);
    const {
        location,
        desc,
        postcode,
        phnno
    }=formData;
    
    const navigate =useNavigate();

    const onSubmit = (e) => {
      e.preventDefault();
      createProfile(formData, navigate? true : false);
    };
  return (
    <Fragment>
        <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Enter your Parking space details
      </p>
    
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
    
        </div>    
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
          <small className="form-text"
            >City & State</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Decription about your space" name="desc" />
          <small className="form-text"
            >Describe your Space</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Mobile number" name="phnno" />
          <small className="form-text"
            >Mobile Number</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Postcode" name="postcode" />
          <small className="form-text"
            >Parking space postcode</small
          >
       </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </Fragment>
  )
  }


EditProfile.propTypes =  {
  createProfile:PropTypes.func.isRequired,
  getCurrentProfile:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    profile:state.profile
});
export default connect(mapStateToProps,{createProfile,getCurrentProfile})(EditProfile);
