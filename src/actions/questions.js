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

export const QUESTION_INCORRECT = 'QUESTION_INCORRECT';
export const questionIncorrect = () => ({
  type: QUESTION_INCORRECT,
})

export const QUESTION_CORRECT = 'QUESTION_CORRECT';
export const questionCorrect = () => ({
  type: QUESTION_CORRECT,
})

export const RESULT_REQUEST = 'RESULT_REQUEST';
export const resultRequest = () => ({
  type: RESULT_REQUEST,
})

export const RESULT_ERROR = 'RESULT_ERROR';
export const resultError = error => ({
  type: RESULT_ERROR,
  error
})

export const RESULT_SUCCESS = 'RESULT_SUCCESS';
export const resultSuccess = (result, boolean) => ({
  type: RESULT_SUCCESS,
  result,
  boolean
})

export const INCREASE_QUESTION_COUNT = 'INCREASE_QUESTION_COUNT'
export const increaseQuestionCount = () => ({
  type: INCREASE_QUESTION_COUNT
})

export const QUESTION_SUBMITTED = 'QUESTION_SUBMITTED';
export const questionSubmitted = () => ({
  type:QUESTION_SUBMITTED
})


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
      userAnswer: answer
    }),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ result }) => {
      if (result.boolean === true) {
        dispatch(questionCorrect())
      } else {
        dispatch(questionIncorrect())
      }
      dispatch(resultSuccess(result.text, result.boolean))
    })
    .catch(err => {
      dispatch(resultError());
    });
};
