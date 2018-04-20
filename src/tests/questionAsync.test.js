import { questionRequest, resultSuccess, resultRequest, resultError, questionError, questionSuccess, questionSubmitted, getQuestion, answerQuestion } from "../actions/questions";
import { API_BASE_URL } from '../config';

describe('fetchBoard', () => {
  it('Should dispatch questionRequest and questionSuccess', () => {
    const question = 'question';

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return question;
        }
      })
    );

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => {
      return { auth: { authToken: '123' } }
    })
    return getQuestion()(dispatch, getState).then(() => {

      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/questions`, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer 123`
        }, method: 'GET'
      });

      expect(dispatch.mock.calls).toEqual([[{ "type": "QUESTION_REQUEST" }], [{ "question": undefined, "type": "QUESTION_SUCCESS" }]]);
    });
  });

  it('Should dispatch resultRequest, questionIncorrect, and resultSuccess', () => {
    const result = {
      result: {
        text: 'Incorrect',
        boolean: false
      }
    }
    const answer = 'what';

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return result;
        }
      })
    );

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => {
      return { auth: { authToken: '123' } }
    })
    return answerQuestion(answer)(dispatch, getState).then(() => {

      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/questions`, {
        body: JSON.stringify({
          userAnswer: answer
        }),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer 123`
        },
        method: 'POST'
      });

      expect(dispatch.mock.calls).toEqual([[{ "type": "RESULT_REQUEST" }], [{ "type": "QUESTION_INCORRECT" }], [{ "boolean": false, "result": "Incorrect", "type": "RESULT_SUCCESS" }]]);
    });
  });
});