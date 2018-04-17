import React, { Component } from 'react';
import { Field, reduxForm, reset, focus } from 'redux-form';
import Input from './Input';
import { required, notEmpty } from './validators'
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { answerQuestion, getQuestion } from './actions/questions';

class AnswerForm extends Component {
  onSubmit(values) {
    console.log(values);
    const { answer } = values;

    return this.props.dispatch(answerQuestion(answer))
      .then(() => this.props.dispatch(reset('answer')))
  }

  nextQuestion() {
    this.props.dispatch(getQuestion());
  }


  render() {
    let nextQuestion;

    console.log(this.props.answer);
    if (this.props.answer === null) {
      nextQuestion = <h1>hi</h1>
    } else {
      nextQuestion = <div className='next-question-button'>
        <button type='button' onClick={() => this.nextQuestion()}>Next question</button>
      </div>
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
              validate={[required, notEmpty]} />
          </div>
          <button type='submit' disabled={this.props.pristine || this.props.submitting}>Answer</button>
        </form>
        <div className='answer'>
          {this.props.answer}
        </div>
        {nextQuestion}
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  answer: state.questions.result
})

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer')),
})(connect(mapStateToProps)((AnswerForm)));