import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion } from './actions/questions';
import AnswerForm from './AnswerForm';

// styles
import './styles/styles-quiz-page/quizComponent.css';

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  render() {
    return (
      <div className='quiz-container'>
        <div className='question'><h1>{this.props.question}</h1></div>
        <div className='answer-form'><AnswerForm /></div>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  question: state.questions.question ? state.questions.question : null
});

export default RequiresLogin()(connect(mapStateToProps)(Quiz));