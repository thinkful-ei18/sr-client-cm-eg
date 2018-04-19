import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion, questionSubmitted } from './actions/questions';
import AnswerForm from './AnswerForm';

import { incrementSessions, resetSession } from './actions/stats';


// styles
import './styles/styles-quiz-page/quizComponent.css';

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  completeSession() {
    this.props.dispatch(incrementSessions());
    this.props.dispatch(resetSession());
    this.props.dispatch(questionSubmitted());
  }

  render() {
    let color = this.props.boolean ? '#5fd37c' : '#d37c5f'


    const answerStyle = {
      backgroundColor: `${color}`
    };

    return (

      <div className='quiz-container'>
        {this.props.questionsAnswered === 10 ? this.completeSession() : null}
        <div className='question'>
          <div className='question-text'><h2>{this.props.question}</h2></div>
        </div>
        <div className='answer-form-component' style={answerStyle} ><AnswerForm /></div>
      </div>

    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  boolean: state.questions.resultBoolean,
  question: state.questions.question ? state.questions.question : null,
  questionsAnswered: state.stats.questionsAnswered,
  showModal: state.stats.showModal
});

export default RequiresLogin()(connect(mapStateToProps)(Quiz));