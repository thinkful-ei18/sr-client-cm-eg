//TODO: write fetch for GET & POST
//TODO: write actions
import {API_BASE_URL} from '../config';
import axios from 'axios';

export const RESET_SESSION = 'RESET_SESSION';
export const resetSession = () => ({
  type: RESET_SESSION
})


export const POPULATE_STATS = 'POPULATE_STATS';
export const populateStats = (stats) => ({
  type:POPULATE_STATS,
  stats
})

export const SET_ERROR = 'SET_ERROR';
export const setError = err => ({
  type: SET_ERROR,
  err
})



//================================== Async Actions ====================>


export const incrementSessions = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  axios({
    url:`${API_BASE_URL}/stats`,
    method:'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
  .then(response => {
  })
  .catch(err => {
    dispatch(setError(err));
  })
};

export const fetchStats = () => dispatch => {

  const authToken = localStorage.getItem('authToken');
  setTimeout(axios({
    url:`${API_BASE_URL}/stats`,
    method:'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
  .then(response => {
    dispatch(populateStats(response.data));
  }), 300);
}