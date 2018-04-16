import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

import Input from './Input';
import { required, notEmpty, isTrimmed } from './validators';



export class LoginForm extends Component {
  // TODO: write on submit
  render() {

    return (
      <div>
        <form>
          <h1>Log in</h1>
          <div className='fieldset-login'>
            <label htmlFor='username'>Username</label>
            <Field
              component={Input}
              type='text'
              name='username'
              validate={[required, notEmpty, isTrimmed]} />
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
})(connect(mapStateToProps)((LoginForm)));