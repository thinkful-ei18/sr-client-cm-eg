import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../localStorage'


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
  dispatch(authSuccess(decodedToken.user));
  // save auth token from local storage
  saveAuthToken(authToken);
}

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/login`, {
      methods: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      // store jwt from server in localstorage
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        // error 401, password or username incorrect
        const message = err.code === 401 ? 'Incorrect username or password' : 'Something went wrong, please try again'
        dispatch(authFailure(err))
        // reject promise from fetch
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  )
}