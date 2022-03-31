import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Navigate to ='/Dashboard'/> 
    }
return (
<section className="landing">
<div className="dark-overlay">
<div className="landing-inner">
<h1 className="x-large">Book your space</h1>
<p className="lead">
Car parks and Private space UK wide.Book Instantly and save.
</p>
<div className="buttons">
<Link to="/Register" className="btn btn-primary">Register </Link>
<Link to="/Login" className="btn btn">SignIn</Link>
</div>
</div>
</div>
</section>
)
}
Landing.propTypes={
isAuthenticated:PropTypes.bool
}
const mapStateToProps =state=>
 ({
isAuthenticated:state.auth.isAuthenticated
 })

export default connect(mapStateToProps)(Landing);