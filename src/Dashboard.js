import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './Requires-Login';
import {fetchStats} from './actions/stats';
import QuestionBox from './Questionbox';

class Dashboard extends Component {


  componentDidMount() {
    this.props.dispatch(fetchStats());
  }
  render() {
    let questionStats;
    if (this.props.questionScoreStats) {
    questionStats = this.props.questionScoreStats.map((entry,index) => {
      return ( <QuestionBox key={index} entry={entry}/>)
    });
  }


    return (
      <div>
        <h1> This Session: </h1>
        <br/>
        <h1>Correct: {this.props.correctInSession} Incorrect: {this.props.incorrectInSession}</h1>
        <br/>
        <h1>Your Total Score: {this.props.totalUserScore}</h1>
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