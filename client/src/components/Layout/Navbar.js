<<<<<<< HEAD
import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({auth: {isAuthenticated,loading},logout}) => {
  const authLinks=(
    <ul>
       <li><Link to ="/Dashboard">
       <i className='fas fa-user'></i>{' '}
       <span className='hide-sm'>Dashboard</span>
         </Link></li>
      <li>
        <a onClick={logout} href='#!'>
      <i className='fas fa-sign-out-alt' />{' '}
    <span className='hide-sm'>Logout</span>
    </a>
    </li>
    </ul>
  );
const guestLinks=(
  <ul>
      <li><Link to="/Adminlogin"> Admin</Link></li>
      <li><Link to="/OwnerLanding">Parking Owners</Link></li>
      <li><Link to ="/Register">Register</Link></li>
      <li><Link to="/Login">SignIn</Link></li>
    </ul>

)
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to ='/'>
       Parking Space 
      </Link>
    </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
  </nav>
  )
}

Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps =state=>({
  auth:state.auth
})

=======
import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({auth: {isAuthenticated,loading},logout}) => {
  const authLinks=(
    <ul><li><a onClick={logout} href="#!">
      <i className='fas fa-sign-out-alt'></i>{' '}
    <span className='hide-sm'>Logout</span></a>
    </li></ul>
  );
const guestLinks=(
  <ul>
      <li><Link to="/Adminlogin"> Admin</Link></li>
      <li><Link to="/OwnerLanding">Parking Owners</Link></li>
      <li><Link to ="/Register">Register</Link></li>
      <li><Link to="/Login">SignIn</Link></li>
    </ul>

)
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to ='/'>
       Parking Space 
      </Link>
    </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
  </nav>
  )
}

Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps =state=>({
  auth:state.auth
})

>>>>>>> bb42394725417005e497b9e5cf62b95c5b2ba248
export default connect(mapStateToProps,{logout}) (Navbar);