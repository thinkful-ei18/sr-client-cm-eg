import React, { Component } from 'react';
import { Field, reduxForm, reset, focus } from 'redux-form';
import Input from './Input';
import { required, notEmpty } from './validators'
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { answerQuestion, getQuestion, increaseQuestionCount } from './actions/questions';

// styles
import './styles/styles-quiz-page/answerFormComponent.css';

class AnswerForm extends Component {
  onSubmit(values) {
    console.log(values);
    const { answer } = values;

    return this.props.dispatch(answerQuestion(answer))
      .then(() => this.props.dispatch(reset('answer')))
      .then(() => this.props.dispatch(increaseQuestionCount()))
  }

  nextQuestion() {
    this.props.dispatch(getQuestion());
  }


  render() {
    let nextQuestion;

    if (this.props.answer === null) {
      nextQuestion = null;
    } else {
      nextQuestion = <div className='next-question-button'>
        <button type='button' onClick={() => this.nextQuestion()}>Next question</button>
      </div>
    }

    if (this.props.questionCount === 10) {
      console.log('10');
      //TODO: dispatch POST stats to backend, notify user they have completed a session, reset questionsAnswered to zero
      // dispatch(sendStats(correct, incorrect)) POST session info to backend
      // dispatch(resetSession())
    }

    return (
      <div className='answer-form-wrapper'>
        <form className='answer-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className='fieldset-answer'>
            <label htmlFor='answer'>Answer</label>
            <Field
              component={Input}
              type='text'
              name='answer'
              placeholder='answer'
              validate={[required, notEmpty]} />
          </div>
          <button type='submit' disabled={this.props.pristine || this.props.submitting} className='answer-button'>Answer</button>
        </form>
        <div className='result'>
          {this.props.answer}
        </div>
        <div className='next-question'>{nextQuestion}</div>
        <div className='session-stats'><p>Questions answered: {this.props.questionCount}</p></div>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  answer: state.questions.result,
  questionCount: state.stats.questionsAnswered
})

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer')),
})(RequiresLogin()(connect(mapStateToProps)((AnswerForm))));