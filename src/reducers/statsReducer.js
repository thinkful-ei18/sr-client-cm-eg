import { QUESTION_CORRECT, QUESTION_INCORRECT, INCREASE_QUESTION_COUNT } from "../actions/questions";
import { POPULATE_STATS, RESET_SESSION, SET_ERROR, CLOSE_MODAL } from '../actions/stats';



const initialState = {
  totalUserScore: null,
  questionAccuracy: [],
  loading: false,
  error: false,
  correct: 0,
  incorrect: 0,
  questionsAnswered: 0,
  questionScoreStats: null,
  sessionsCompleted: 0,
  showModal: false
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
        questionsAnswered: 0,
        showModal: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    case POPULATE_STATS:
      return {
        ...state,
        totalUserScore: action.stats.overallScore,
        questionScoreStats: action.stats.questionStats,
        sessionsCompleted: action.stats.sessionsCompleted
      }
    case SET_ERROR:
      return {
        ...state,
        error: true
      }

    default: return state;

  }
}

export default statsReducer;