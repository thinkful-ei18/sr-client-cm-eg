import { QUESTION_CORRECT, QUESTION_INCORRECT, INCREASE_QUESTION_COUNT } from "../actions/questions";
import { RESET_SESSION } from '../actions/stats';



const initialState = {
  totalUserScore: null,
  questionAccuracy: [],
  loading: false,
  error: false,
  correct: 0,
  incorrect: 0,
  questionsAnswered: 0
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_CORRECT:
      return {
        ...state,
        loading: false,
        error: false,
        correct: state.correct + 1
      }
    case QUESTION_INCORRECT:
      return {
        ...state,
        loading: false,
        error: false,
        incorrect: state.incorrect + 1
      }
    case INCREASE_QUESTION_COUNT:
      return {
        ...state,
        loading: false,
        error: false,
        questionsAnswered: state.questionsAnswered + 1
      }
    case RESET_SESSION:
      return {
        ...state,
        loading: false,
        error: false,
        questionsAnswered: 0
      }

    default: return state;

  }
}

export default statsReducer;