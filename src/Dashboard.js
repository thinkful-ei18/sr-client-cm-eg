import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import { fetchStats } from './actions/stats';
import QuestionBox from './Questionbox';



class Dashboard extends Component {


  componentDidMount() {
    this.props.dispatch(fetchStats());
  }
  render() {
    let questionStats;
    if (this.props.questionScoreStats) {
      questionStats = this.props.questionScoreStats.map((entry, index) => {
        return (<QuestionBox key={index} entry={entry} />)
      });
    }


    return (
      <div className='stats-page'>
        <h1> This Session: </h1>
        <div className='session-info-stats-page'>
          <p>Correct: {this.props.correctInSession} Incorrect: {this.props.incorrectInSession}</p>
          <p>Your Total Score: {this.props.totalUserScore}</p>
        </div>
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
  questionScoreStats: state.stats.questionScoreStats
})

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));