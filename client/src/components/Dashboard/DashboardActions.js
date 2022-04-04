import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/EditProfile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit your Space
      </Link>
      <Link to='/Addnewspace' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Register another Space
      </Link>
      
    </div>
  );
};

export default DashboardActions;