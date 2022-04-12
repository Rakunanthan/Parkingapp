import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Layout/Spinner';
import ProfileItem from './ProfileItem'
import { getprofiles } from '../../actions/profile';

const Profiles = ({getProfiles,profile:{profiles,loading}})=> {
    useEffect(()=>{
        getProfiles();
    },[]);

  return (
    <Fragment>
        {loading ? <Spinner/>: <Fragment>
            <h1 className='large text-primary'>Spaces</h1>
            <p  className ="lead">
               <i className='fab fa-connectdevelop'></i>Browse a spaces </p>
               <div className='profiles'>
                   {profiles.length > 0 ? (
                       profiles.map(profile=> (
                       <ProfileItem key={profile._id} profile={profile} />
                   ))):(
                   <h4>No Spaces found...</h4>)}
               </div>
               </Fragment>}
    </Fragment>
  )
}

Profiles.propTypes = {
    getprofiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
    profile:state.profile
});

export default connect(mapStateToProps,{getprofiles})(Profiles);