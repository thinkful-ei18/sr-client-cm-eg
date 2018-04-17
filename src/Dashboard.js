import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';

class Dashboard extends Component {
  render() {
    return (
      <h1>Correct: {this.props.correctInSession} Incorrect: {this.props.incorrectInSession}</h1>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  correctInSession: state.stats.correct,
  incorrectInSession: state.stats.incorrect
})

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));