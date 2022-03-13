import React from 'react'
import { Link } from 'react-router-dom';

 const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Book your space</h1>
          <p className="lead">
            Car parks and Priavte space UK wide.Book Instantly and save.
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

export default Landing;