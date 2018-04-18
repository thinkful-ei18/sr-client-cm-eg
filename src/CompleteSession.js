import React, {Component} from 'react';
import {incrementSessions, resetSession} from '../src/actions/stats';
import {connect} from 'react-redux';

export class CompleteSession extends Component {
  componentDidMount() {
    this.props.dispatch(incrementSessions());
    this.props.dispatch(resetSession());
  }
  
  
  render() {

    return (
      <div className='complete-session-modal'>

      </div>
    )
  }
} 

export default connect()(CompleteSession);