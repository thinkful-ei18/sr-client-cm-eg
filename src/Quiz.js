import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { getQuestion } from './actions/questions';
import AnswerForm from './AnswerForm';
import CompleteSession from './CompleteSession';


// styles
import './styles/styles-quiz-page/quizComponent.css';

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestion());
  }

  render() {
    let color = this.props.boolean ? 'green' : 'red'


    const answerStyle = {
      backgroundColor: `${color}`
    };


    return (

      <div className='quiz-container'>
        {this.props.questionsAnswered === 10 ? <CompleteSession /> : ''}
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
  questionsAnswered: state.stats.questionsAnswered
});

export default RequiresLogin()(connect(mapStateToProps)(Quiz));