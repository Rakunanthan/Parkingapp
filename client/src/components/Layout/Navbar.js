import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to ='/'>
       Parking Space 
      </Link>
    </h1>
    <ul>
      <li><Link to="/Adminlogin"> Admin</Link></li>
      <li><Link to="/OwnerLanding">Parking Owners</Link></li>
      <li><Link to ="/Register">Register</Link></li>
      <li><Link to="/Login">SignIn</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar;