//TODO: write fetch for GET & POST
//TODO: write actions
import { API_BASE_URL } from '../config';
import axios from 'axios';

export const RESET_SESSION = 'RESET_SESSION';
export const resetSession = () => ({
  type: RESET_SESSION
})


export const POPULATE_STATS = 'POPULATE_STATS';
export const populateStats = (stats) => ({
  type: POPULATE_STATS,
  stats
})

export const SET_ERROR = 'SET_ERROR';
export const setError = err => ({
  type: SET_ERROR,
  err
})

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const POPULATE_LEADERBOARD = 'POPULATE_LEADERBOARD';
export const populateLeaderboard = leadersArr => ({
  type:POPULATE_LEADERBOARD,
  leadersArr
})


//================================== Async Actions ====================>


export const incrementSessions = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  axios({
    url: `${API_BASE_URL}/stats`,
    method: 'POST',
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
  axios({
    url: `${API_BASE_URL}/stats`,
    method: 'GET',

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
    .then(response => {
      dispatch(populateStats(response.data));
    })
}

export const fetchLeaderboard = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  axios({
    url: `${API_BASE_URL}/users`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
    .then(response => {
      dispatch(populateLeaderboard(response.data));
    })
}