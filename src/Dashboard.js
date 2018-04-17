import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';

class Dashboard extends Component {
  render() {
    return (
      <h1>hi im the dashboard</h1>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));