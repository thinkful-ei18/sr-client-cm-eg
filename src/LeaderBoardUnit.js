import React from 'react';

// styles
import './styles/styles-stats/leaderboard.css'

export default class LeaderBoard extends React.Component {

  render() {

    return (
      <div className='leaderboard-unit'>
        <div className='leaderboard-name-box leaderboard-entry'>
          <p>Username</p>
          {this.props.user.username}
        </div>
        <div className='leaderboard-score-box leaderboard-entry' >
          <p>Total Score</p>
          {this.props.user.score}
        </div>
        <div className='leaderboard-sessions-box leaderboard-entry'>
          <p>Completed Sessions</p>
          {this.props.user.completedSessions}
        </div>
      </div>
    )

  }
}