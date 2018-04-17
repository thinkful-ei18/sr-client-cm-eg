import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion } from './actions/questions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  render() {
    return (
      <h1>{this.props.question}</h1>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  question: state.questions.question ? state.questions.question : null
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));