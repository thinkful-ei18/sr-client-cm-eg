import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import { loadAuthToken } from './local-storage';
import { setAuth } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuth(token));
}

export default store;