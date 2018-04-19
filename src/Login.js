import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { login } from './actions/auth';

import Input from './Input';
import { required, notEmpty, isTrimmed, length } from './validators';

// styles
import './styles/styles-login-signup/loginComponent.css';

const usernameLength = length({ min: 5, max: 72 });


export class Login extends Component {

  onSubmit(values) {
    const { username, password } = values;

    this.props.dispatch(login(username, password))
  }


  render() {

    return (
      <div className='login-form-container'>
        {this.props.loggedIn ? (<Redirect to='/dashboard' />) : ''}
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
        {this.props.error}
      </div >

    );
  }
}


export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser,
  error: state.auth.error
})

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(withRouter(connect(mapStateToProps)((Login))));