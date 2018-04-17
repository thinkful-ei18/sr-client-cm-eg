import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken } from '../localStorage'

import axios from 'axios';


// set auth token in state
export const SET_AUTH = 'SET_AUTH';
export const setAuth = authToken => ({
  type: SET_AUTH,
  authToken
});

// clear auth token from state
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH,
});

// define loading state while making request to server 
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

// define current user in state upon success
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

// record error upon auth failure
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const authFailure = error => ({
  type: AUTH_FAILURE,
  error
})

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuth(authToken));
  dispatch(authSuccess(decodedToken));
  // save auth token from local storage
  saveAuthToken(authToken);
}

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  axios({
    url: `${API_BASE_URL}/auth`,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    data: JSON.stringify({
      username,
      password
    })
  })
    .then((response) => storeAuthInfo(response.data.authToken, dispatch))
    .catch(err => {
      console.log(err);
      // error 401, password or username incorrect
      const message = err.code === 401 ? 'Incorrect username or password' : 'Something went wrong, please try again'
      dispatch(authFailure(err))
    })
}

export const signup = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};