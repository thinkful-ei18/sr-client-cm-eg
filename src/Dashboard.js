import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { fetchStats, fetchLeaderboard } from './actions/stats';
import QuestionBox from './Questionbox';
import LeaderBoardUnit from './LeaderBoardUnit';



class Dashboard extends Component {


  componentDidMount() {
    this.props.dispatch(fetchStats());
    this.props.dispatch(fetchLeaderboard());
  }
  render() {
    let questionStats;
    if (this.props.questionScoreStats) {
      questionStats = this.props.questionScoreStats.map((entry, index) => {
        return (<QuestionBox key={index} entry={entry} />)
      });
    }
    let leaderBoard;
    if (this.props.leaderboard) { 
      leaderBoard = this.props.leaderboard.map(user => {
        return <LeaderBoardUnit user={user} key={user.id}/>
      })
    }


    return (
      <div className='stats-page'>
        <h1> Your Session: </h1>
        <p className='user-stats-greeting'>
        Hi {this.props.userName ? this.props.userName : ''}!
        </p>
        <div className='session-info-stats-page'>
          <p>Correct: {this.props.correctInSession} Incorrect: {this.props.incorrectInSession}</p>
          <p>Your Total Score: {this.props.totalUserScore}</p>
        </div>
        <section className='leaderboard-container'>
          <div className='leaderboard-header'>
            Users Leaderboard
          </div>
          <p className='leaderboard-subheader'>
            See How You're Doing Compared to Others
          </p>
          <div className='leaderboard-list-container'>
            {leaderBoard}
          </div>
        </section>
        <section className='question-score-container'>
          <div className='question-score-header'>
            Score by Questions:
          </div>

          <div className='questions-container'>
            {questionStats}
          </div>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  correctInSession: state.stats.correct,
  incorrectInSession: state.stats.incorrect,
  totalUserScore: state.stats.totalUserScore,
  questionScoreStats: state.stats.questionScoreStats,
  authToken: state.auth.authToken,
  leaderboard:state.stats.leaderboard,
  userName: state.auth.currentUser.firstname
})

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));