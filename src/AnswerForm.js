import React, { Component } from 'react';
import { Field, reduxForm, reset, focus } from 'redux-form';
import Input from './Input';
import { required, notEmpty } from './validators'
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { answerQuestion, questionSubmitted, getQuestion, increaseQuestionCount } from './actions/questions';

// styles
import './styles/styles-quiz-page/answerFormComponent.css';


class AnswerForm extends Component {
  onSubmit(values) {
    console.log(values);
    const { answer } = values;

    return this.props.dispatch(answerQuestion(answer))
      .then(() => this.props.dispatch(reset('answer')))
      .then(() => {
        this.props.dispatch(increaseQuestionCount())
        this.props.dispatch(questionSubmitted());
        this.focusMethod('.question-button');
      })
  }

  nextQuestion() {
    // TODO: focus input
    this.props.dispatch(getQuestion());
    this.props.dispatch(questionSubmitted());
    this.focusMethod('.form-input-focus');
  }

  focusMethod = function getFocus(classname) {
    console.log('this ran');
    setTimeout(document.querySelector(classname).focus(), 500);
  }


  render() {
    let nextQuestion;

    if (this.props.answer === null) {
      nextQuestion = null;
    } else {
      nextQuestion = <div className='next-question-button'>
        <button className='question-button' type='button' onClick={() => this.nextQuestion()}>Next question</button>
      </div>
    }

    return (
      <div>
        <div className='answer-form-wrapper'>
          <form className='answer-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <div className='fieldset-answer'>
              <label htmlFor='answer'>Answer</label>
              <Field
                questionSubmitted={this.props.questionSubmitted}
                component={Input}
                type='text'
                name='answer'
                placeholder='answer...'
                focus
                validate={[required, notEmpty]} />
            </div>
            <button type='submit' disabled={this.props.pristine || this.props.submitting} className='answer-button'>Answer</button>
          </form>
        </div>
        <div className='result'>
          {this.props.answer}
          <div className='next-question'>{nextQuestion}</div>
        </div>
        <div className='session-stats'><p>Session progress: {this.props.questionCount} / 10</p></div>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  answer: state.questions.result,
  questionCount: state.stats.questionsAnswered,
  questionSubmitted: state.questions.questionSubmitted
})

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer')),
})(RequiresLogin()(connect(mapStateToProps)((AnswerForm))));