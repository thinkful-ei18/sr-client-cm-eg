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