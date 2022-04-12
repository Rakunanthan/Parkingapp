
import React,{Fragment} from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
//import { logout } from '../../actions/auth';
import { LOGOUT } from '../../actions/types';



const Navbar = ({auth: {isAuthenticated,loading}}) => {
  //const navigate=useNavigate();
  function logout()
  {
    window.localStorage.removeItem('token');
     window.location.href='/login';
   }
  const authLinks=(
    <ul>
      <li>
        <Link to ='/Profiles'>
         Spaces
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
const guestLinks=(
  <ul><li>
  <Link to ='/profile'>
   Spaces
  </Link>
</li>
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
export default connect(mapStateToProps)(Navbar);