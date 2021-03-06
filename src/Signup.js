import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup, login } from './actions/auth';
import Input from './Input';

import { required, notEmpty, length, matches, isTrimmed } from './validators';

// styles
import './styles/styles-login-signup/signupComponent.css';

const passwordLength = length({ min: 6, max: 72 });
const passwordMatches = matches('password');

export class SignUp extends Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName }
    return this.props.dispatch(signup(user))
      .then(() => this.props.dispatch(login(username, password)))
  };


  render() {
    return (
      <div className='signup-form-wrapper'>
        {this.props.loggedIn ? (<Redirect to='/quiz' />) : ''}
        <h1>Signup</h1>
        <form className='signup-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className='fieldset-sign'>
            <label htmlFor='firstName'>First Name</label>
            <Field
              component={Input}
              type='text'
              name='firstName'
              focus
              // placeholder="First Name"
              validate={[required, notEmpty]} />
          </div>
          <div className='fieldset-sign'>
            <label htmlFor='lastName'>Last Name</label>
            <Field
              component={Input}
              type='text'
              name='lastName'
              // placeholder="Last Name"
              validate={[required, notEmpty]} />
          </div>
          <div className='fieldset-sign'>
            <label htmlFor='username'>Username</label>
            <Field
              component={Input}
              type='text'
              name='username'
              // placeholder="Username"
              validate={[required, notEmpty, isTrimmed]} />
          </div>
          <div className='fieldset-sign'>
            <label htmlFor='password'>Password</label>
            <Field
              component={Input}
              type='password'
              name='password'
              // placeholder="Password"
              validate={[required, notEmpty, isTrimmed, passwordLength]} />
          </div>
          <div className='fieldset-sign'>
            <label htmlFor='confirmPassword'>Confim Password</label>
            <Field
              component={Input}
              type='password'
              name='confirmPassword'
              // placeholder="Confirm Password"
              validate={[required, notEmpty, isTrimmed, passwordMatches, passwordLength]} />
          </div>
          <button type='submit' disabled={this.props.pristine || this.props.submitting}>Register</button>
        </form>
        <p>Already have an account? Login <Link to='/login'>here</Link></p>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
})

export default reduxForm({
  form: 'signup'
})(withRouter(connect(mapStateToProps)((SignUp))));