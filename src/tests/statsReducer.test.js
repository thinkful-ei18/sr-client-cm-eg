import { resetSession, populateStats, setError, closeModal, populateLeaderboard } from "../actions/stats";
import { statsReducer } from '../reducers/statsReducer';
import { questionCorrect, questionIncorrect, increaseQuestionCount } from "../actions/questions";

describe('stats reducer', () => {
  it('should return the intial state when nothing is passed in', () => {
    const state = statsReducer(undefined, { type: '@@test' })
    expect(state).toEqual({
      totalUserScore: null,
      questionAccuracy: [],
      loading: false,
      error: false,
      correct: 0,
      incorrect: 0,
      questionsAnswered: 0,
      questionScoreStats: null,
      sessionsCompleted: 0,
      showModal: false,
      leaderboard: null
    })
  })

  it('should return the state when an unknown action is passed', () => {
    let currentState = {}
    const state = statsReducer(currentState, { type: '@@BAD_TYPE' })
    expect(state).toEqual(currentState);
  })

  it('should increment the correct count', () => {
    let currCount = 0;
    let state;
    state = statsReducer(state, questionCorrect());
    expect(state).toEqual({
      ...state,
      correct: currCount + 1
    })
  })

  it('should increment the correct count', () => {
    let currCount = 1;
    let state;
    state = statsReducer(state, questionIncorrect());
    expect(state).toEqual({
      ...state,
      correct: currCount - 1
    })
  })

  it('should increment the quest count', () => {
    let currCount = 0;
    let state;
    state = statsReducer(state, increaseQuestionCount());
    expect(state).toEqual({
      ...state,
      questionsAnswered: currCount + 1
    })
  })

  it('should reset the session and show the modal', () => {
    let state;
    state = statsReducer(state, resetSession());
    expect(state).toEqual({
      ...state,
      questionsAnswered: 0,
      showModal: true
    })
  })

  it('should close the modal', () => {
    let state;
    state = statsReducer(state, closeModal());
    expect(state).toEqual({
      ...state,
      showModal: false
    })
  })

  // it('should populate the stats', () => {
  //   let stats = { overall: 1, qs: [], sc: 3 }
  //   let state;
  //   state = statsReducer(state, populateStats(stats));
  //   expect(state).toEqual({
  //     ...state,
  //     totalUserScore: stats.overall,
  //     questionScoreStats: stats.qs,
  //     sessionsCompleted: stats.sc
  //   })
  // })

  it('should set the error to action.error', () => {
    let state;
    state = statsReducer(state, setError());
    expect(state).toEqual({
      ...state,
      error: true
    })
  })

  it('should populate the leaderboard', () => {
    let leadersArr = [];
    let state;
    state = statsReducer(state, populateLeaderboard(leadersArr));
    expect(state).toEqual({
      ...state,
      leaderboard: leadersArr
    })
  })


})