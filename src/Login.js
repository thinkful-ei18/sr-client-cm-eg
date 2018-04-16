import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from './actions/auth'
import { connect } from 'react-redux';



export class LoginForm extends Component {
  render() {

    return (
      <div>
        <form>
          <h1>Log in</h1>
          <div className='fieldset-log'>
            <label htmlFor='username'>Username</label>
            <Field
              component={Input}
              type='text'
              name='username'
              validate={[required, notEmpty, isTrimmed]} />
          </div>

          <div className='fieldset-log'>
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


export default LoginForm;