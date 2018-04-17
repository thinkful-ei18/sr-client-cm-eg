import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion } from './actions/questions';
import AnswerForm from './AnswerForm';

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h1>{this.props.question}</h1>
        <AnswerForm />
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  question: state.questions.question ? state.questions.question : null
});

export default RequiresLogin()(connect(mapStateToProps)(Quiz));