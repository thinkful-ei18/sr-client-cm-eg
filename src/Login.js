import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

import { login } from './actions/auth';

import Input from './Input';
import { required, notEmpty, isTrimmed, length } from './validators';
const usernameLength = length({ min: 5, max: 72 });



export class Login extends Component {

  onSubmit(values) {
    const { username, password } = values;

    console.log(username, password);
    return this.props.dispatch(login(username, password))
      .then(() => {
        if (this.props.loggedIn) {
          this.props.history.push('/dashboard');
        }
      })
  }

  render() {

    return (
      <div>
        <form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <h1>Log in</h1>
          <div className='fieldset-login'>
            <label htmlFor='username'>Username</label>
            <Field
              component={Input}
              type='text'
              name='username'
              validate={[required, notEmpty, isTrimmed, usernameLength]} />
          </div>

          <div className='fieldset-login'>
            <label htmlFor='password'>Password</label>
            <Field
              component={Input}
              type='password'
              name='password'
              validate={[required, notEmpty, isTrimmed]} />
          </div>
          <button type='submit' disabled={this.props.pristine || this.props.submitting}>Login</button>
        </form >
      </div >

    );
  }
}


export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
})

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(connect(mapStateToProps)((Login)));