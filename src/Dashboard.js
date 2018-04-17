import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';

class Dashboard extends Component {
  render() {
    return (
      <h1>Dashboard</h1>
    )
  }
}

export const mapStateToProps = (state, props) => ({

})

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));