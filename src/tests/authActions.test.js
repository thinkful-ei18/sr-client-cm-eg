
import { setAuth, clearAuth, authRequest, authFailure, toggleLogoutModal, authSuccess, AUTH_SUCCESS } from '../actions/auth';
import { SET_AUTH, CLEAR_AUTH, AUTH_REQUEST, AUTH_FAILURE, TOGGLE_LOGOUT_MODAL } from '../actions/auth';

describe('auth actions', () => {
  it('should return the setAuth() action', () => {
    const authToken = 'testAuthToken';
    const action = setAuth(authToken)
    expect(action.type).toEqual(SET_AUTH);
    expect(action.authToken).toEqual(authToken);
  })

  it('should return the clearAuth() action', () => {
    const action = clearAuth()
    expect(action.type).toEqual(CLEAR_AUTH);
  })

  it('should return the authSuccess() action', () => {
    const action = authSuccess()
    expect(action.type).toEqual(AUTH_SUCCESS);
  })

  it('should return the authRequest() action', () => {
    const action = authRequest()
    expect(action.type).toEqual(AUTH_REQUEST);
  })

  it('should return the authFailure() action', () => {
    const action = authFailure()
    expect(action.type).toEqual(AUTH_FAILURE);
  })

  it('should return the toggleLogoutModal() action', () => {
    const action = toggleLogoutModal()
    expect(action.type).toEqual(TOGGLE_LOGOUT_MODAL);
  })
})
