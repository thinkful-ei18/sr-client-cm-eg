import { QUESTION_SUCCESS, QUESTION_REQUEST, QUESTION_ERROR, QUESTION_SUBMITTED } from "../actions/questions";
import { RESULT_ERROR, RESULT_REQUEST, RESULT_SUCCESS } from '../actions/questions';
import { CLEAR_AUTH } from "../actions/auth";
import { clearAuthToken } from "../localStorage";


const initialState = {
  question: null,
  result: null,
  resultBoolean: null,
  loading: false,
  error: false,
  questionSubmitted: false
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_AUTH:
      clearAuthToken()
      return {
        ...state,
        question: null,
        result: null,
        loading: false,
        error: false,
        correct: 0,
        incorrect: 0
      }
    case QUESTION_SUCCESS:
      return {
        ...state,
        question: action.question,
        loading: false,
        error: false,
        result: null
      }
    case QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case RESULT_SUCCESS:
      return {
        ...state,
        result: action.result,
        resultBoolean: action.boolean,
        loading: false,
        error: false
      }
    case RESULT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case RESULT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case QUESTION_SUBMITTED:
      return {
        ...state,
        questionSubmitted:!state.questionSubmitted
      }
    default: return state;
  }
}

export default questionReducer;