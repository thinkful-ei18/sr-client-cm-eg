import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const QUESTION_REQUEST = 'QUESTION_REQUEST';
export const questionRequest = () => ({
  type: QUESTION_REQUEST,
})

export const QUESTION_ERROR = 'QUESTION_ERROR';
export const questionError = error => ({
  type: QUESTION_ERROR,
  error
})

export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = question => ({
  type: QUESTION_SUCCESS,
  question
})

export const RESULT_REQUEST = 'RESULT_REQUEST';
export const resultRequest = () => ({
  type: QUESTION_REQUEST,
})

export const RESULT_ERROR = 'RESULT_ERROR';
export const resultError = error => ({
  type: QUESTION_ERROR,
  error
})

export const RESULT_SUCCESS = 'RESULT_SUCCESS';
export const resultSuccess = result => ({
  type: QUESTION_SUCCESS,
  result
})

//TODO: write fetch
export const getQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  dispatch(questionRequest());

  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ question }) => dispatch(questionSuccess(question)))
    .catch(err => {
      dispatch(questionError(err))
    })
}

export const answerQuestion = (answer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  dispatch(resultRequest())

  return fetch(`${API_BASE_URL}/questions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      answer
    }),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ result }) => dispatch(resultSuccess(result)))
    .catch(err => {
      dispatch(resultError());
    });
};
