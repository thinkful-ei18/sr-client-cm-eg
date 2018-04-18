import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { clearAuth } from './actions/auth';
import { connect } from 'react-redux';

// styles
import './styles/styles-navbar/navbar.css'
class NavBar extends Component {
  render() {
    let NavBar;

    if (this.props.loggedIn) {
      NavBar = <div className='navbar-logged-in'>
        <NavLink to='/quiz'>Quiz</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/' onClick={() => {
          this.props.dispatch(clearAuth())
        }}>Logout</NavLink>
      </div>
    } else if (!this.props.loggedIn) {
      NavBar = <div className='navbar-logged-out'>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>

      </div>
    }
    return (
      <nav className='nav'>
        <NavLink to='/' className='home'>Home</NavLink>
        {NavBar}
      </nav>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
});

export default (connect(mapStateToProps)(NavBar));