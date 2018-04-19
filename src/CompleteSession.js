import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import './styles/styles-quiz-page/modalComponent.css';
import { closeModal } from './actions/stats';

export class CompleteSession extends Component {
  onClick() {
    console.log('closed');
    this.props.dispatch(closeModal());
  }


  render() {

    return (
      <div className='complete-session-modal'>
        <h1>Congrats! You just completed a session!</h1>
        <p> You're making progress understanding Data Science and Algorithms</p>
        <p> Click <Link to='/dashboard'>here</Link> to see your Stats </p>
        <button onClick={() => this.onClick()}>- Hide this -</button>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  showModal: state.stats.showModal
})

export default connect(mapStateToProps)(CompleteSession);