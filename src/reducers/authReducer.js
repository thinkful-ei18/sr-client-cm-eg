import { AUTH_SUCCESS, SET_AUTH, CLEAR_AUTH, AUTH_REQUEST, AUTH_FAILURE } from '../actions/auth';
import { clearAuthToken } from '../localStorage'
import { loadAuthToken } from '../localStorage';
import jwtDecode from 'jwt-decode';


const authToken = loadAuthToken() !== null ? loadAuthToken() : null;
const initialState = {
  currentUser: authToken !== null ? jwtDecode(authToken) : null,
  authToken: null,
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
        loading: false,
        error: false
      }
    case SET_AUTH:
      return {
        ...state,
        authToken: action.authToken,
        loading: false,
        error: false
      }
    case CLEAR_AUTH:
      clearAuthToken()
      return {
        ...state,
        authToken: null,
        currentUser: null,
        loading: false,
        error: false
      }
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: return state;
  }
}

export default authReducer;