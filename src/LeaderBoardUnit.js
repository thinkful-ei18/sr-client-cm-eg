import React from 'react';

// styles
import './styles/styles-stats/leaderboard.css'

export default class LeaderBoard extends React.Component {

  render() {

    return (
      <div className='leaderboard-unit'>
        <div className='leaderboard-name-box leaderboard-entry username-leaderboard'>
          <p>Username: {this.props.user.username}</p>
        </div>
        <div className='leaderboard-score-box leaderboard-entry score-leaderboard' >
          <p>Total Score: {this.props.user.score}</p>
        </div>
        <div className='leaderboard-sessions-box leaderboard-entry sessions-leaderboard'>
          <p>Completed Sessions: {this.props.user.completedSessions}</p>
        </div>
      </div>
    )

  }
}