import { questionRequest, resultSuccess, resultRequest, resultError, questionError, questionSuccess, questionSubmitted } from "../actions/questions";
import { questionReducer } from '../reducers/questionReducer';

describe('questionReducer', () => {

  it('should set the initial state when nothing is passed in', () => {
    const state = questionReducer(undefined, { type: '@@TEST' });
    expect(state).toEqual({
      question: null,
      result: null,
      resultBoolean: null,
      loading: false,
      error: false,
      questionSubmitted: false
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = questionReducer(currentState, { type: '@@UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('should set the question', () => {
    let question = 'que?'
    let state;
    state = questionReducer(state, questionSuccess(question))
    expect(state).toEqual({
      ...state,
      question: question
    })
  })

  it('should set the loading to true', () => {
    let state;
    state = questionReducer(state, questionRequest())
    expect(state).toEqual({
      ...state,
      loading: true
    })
  })

  it('should set the error to action.err', () => {
    let state;
    const err = 'oops';
    state = questionReducer(state, questionError(err))
    expect(state).toEqual({
      ...state,
      error: err
    })
  })

  it('should set the result', () => {
    let result = 'huzzah';
    const boolean = true;
    let state;
    state = questionReducer(state, resultSuccess(result, boolean))
    expect(state).toEqual({
      ...state,
      result: result,
      resultBoolean: boolean
    })
  })

  it('should set the loading to true', () => {
    let state;
    state = questionReducer(state, resultRequest())
    expect(state).toEqual({
      ...state,
      loading: true
    })
  })

  it('should set the error to action.err', () => {
    let state;
    const err = 'oops';
    state = questionReducer(state, resultError(err))
    expect(state).toEqual({
      ...state,
      error: err
    })
  })

  it('should toggel the question submitted', () => {
    const testFalse = false;
    let state;
    state = questionReducer(state, questionSubmitted())
    expect(state).toEqual({
      ...state,
      questionSubmitted: !testFalse
    })
  })

})