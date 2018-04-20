import { questionRequest, QUESTION_REQUEST, questionError, QUESTION_ERROR, questionSuccess, QUESTION_SUCCESS, questionIncorrect, QUESTION_INCORRECT, questionCorrect, QUESTION_CORRECT, resultRequest, RESULT_REQUEST, resultError, RESULT_ERROR, resultSuccess, RESULT_SUCCESS, increaseQuestionCount, INCREASE_QUESTION_COUNT, questionSubmitted, QUESTION_SUBMITTED } from "../actions/questions";



describe('question actions', () => {
  it('should return the questionRequest() action', () => {
    const action = questionRequest()
    expect(action.type).toEqual(QUESTION_REQUEST);
  })

  it('should return the questionError() action', () => {
    const action = questionError()
    expect(action.type).toEqual(QUESTION_ERROR);
  })

  it('should return the questionSuccess() action', () => {
    const question = 'test question';
    const action = questionSuccess(question)
    expect(action.type).toEqual(QUESTION_SUCCESS);
    expect(action.question).toEqual(question)
  })

  it('should return the questionIncorrect() action', () => {
    const action = questionIncorrect()
    expect(action.type).toEqual(QUESTION_INCORRECT);
  })

  it('should return the questionCorrect() action', () => {
    const action = questionCorrect()
    expect(action.type).toEqual(QUESTION_CORRECT);
  })

  it('should return the resultRequest() action', () => {
    const action = resultRequest()
    expect(action.type).toEqual(RESULT_REQUEST);
  })

  it('should return the resultError() action', () => {
    const err = 'oops';
    const action = resultError(err)
    expect(action.type).toEqual(RESULT_ERROR);
    expect(action.error).toEqual(err);
  })

  it('should return the resultSuccess() action', () => {
    const result = 'yay!';
    const boolean = true;
    const action = resultSuccess(result, boolean)
    expect(action.type).toEqual(RESULT_SUCCESS);
    expect(action.result).toEqual(result);
    expect(action.boolean).toEqual(boolean);
  })

  it('should return the increaseQuestionCount() action', () => {
    const action = increaseQuestionCount()
    expect(action.type).toEqual(INCREASE_QUESTION_COUNT);
  })

  it('should return the increaseSubmitted() action', () => {
    const action = questionSubmitted()
    expect(action.type).toEqual(QUESTION_SUBMITTED);
  })
})