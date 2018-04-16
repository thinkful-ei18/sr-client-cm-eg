import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from './actions/auth';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav'>
        <NavLink to='/login'>Login</NavLink>
      </nav>
    )
  }
}

export default NavBar;