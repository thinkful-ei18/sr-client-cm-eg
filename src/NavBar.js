import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { clearAuth } from './actions/auth';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav'>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
      </nav>
    )
  }
}

export default NavBar;