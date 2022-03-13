import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to ='/'>
      <i className='fas fa-code'/>  Parking Space 
      </Link>
    </h1>
    <ul>
      <li><a href="!3">Admin</a></li>
      <li><Link to ="/Register">Register</Link></li>
      <li><Link to="/Login">SignIn</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar