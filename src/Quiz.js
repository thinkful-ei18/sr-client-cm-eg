import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion, questionSubmitted } from './actions/questions';
import AnswerForm from './AnswerForm';
import CompleteSession from './CompleteSession';
import { incrementSessions, resetSession } from './actions/stats';


// styles
import './styles/styles-quiz-page/quizComponent.css';

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  completeSession() {
    console.log('10');
    this.props.dispatch(incrementSessions());
    this.props.dispatch(resetSession());
    this.props.dispatch(questionSubmitted());
    console.log('dispatched');
  }

  render() {
    let color = this.props.boolean ? 'green' : 'red'


    const answerStyle = {
      backgroundColor: `${color}`
    };

    return (

      <div className='quiz-container'>
        {this.props.showModal ? <CompleteSession /> : null}
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