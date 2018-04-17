import { QUESTION_SUCCESS, QUESTION_REQUEST, QUESTION_ERROR } from "../actions/questions";


const initialState = {
  question: null,
  loading: false,
  error: false
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_SUCCESS:
      return {
        ...state,
        question: action.question,
        loading: false,
        error: false
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
    default: return state;
  }
}

export default questionReducer;