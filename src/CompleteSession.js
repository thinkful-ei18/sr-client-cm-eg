import React, {Component} from 'react';
import {incrementSessions, resetSession} from '../src/actions/stats';
import {questionSubmitted} from './actions/questions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class CompleteSession extends Component {
  onClick() {
    this.props.dispatch(incrementSessions());
    this.props.dispatch(resetSession());
    this.props.dispatch(questionSubmitted());
  }
  
  
  render() {

    return (
      <div className='complete-session-modal'>
        <h1>Congrats! You just completed a session!</h1>
        <p> You're making progress understanding Data Science and Algorithms</p>
        <p> Click <Link onClick={() => this.onClick()} to='/dashboard'>here</Link> to see your Stats </p>
      </div>
    )
  }
} 

export default connect()(CompleteSession);