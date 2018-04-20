import { questionRequest, resultSuccess, resultRequest, resultError, questionError, questionSuccess, questionSubmitted, getQuestion } from "../actions/questions";
import { API_BASE_URL } from '../config';

describe('fetchBoard', () => {
  it('Should dispatch questionSuccess', () => {
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
});