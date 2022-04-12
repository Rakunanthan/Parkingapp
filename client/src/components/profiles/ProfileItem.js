import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({profile:{
    user:{_id,name,avatar},
    location,
    desc,
    postcode,
    phnno

}}) => {
  return (
    <div className='profile bg-light'>
        <img src={avatar} alt="" className='round-img'/>
        <div>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <p>{desc}</p>
            <h4>{postcode}</h4>
            <h4>{phnno}</h4>
            <Link to ={`/profile/${_id}`}className='btn btn-primary'>
                view spaces
            </Link>
       </div>     
    </div>
  )
}

ProfileItem.propTypes = {
    profile:PropTypes.object.isRequired
}

export default ProfileItem