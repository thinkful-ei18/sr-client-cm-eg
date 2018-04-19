import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Route, withRouter } from 'react-router-dom'

import Login from './Login';
import SignUp from './Signup';
import NavBar from './NavBar';
import Quiz from './Quiz';
import Home from './Home';
import Dashboard from './Dashboard';
import Spinner from './Spinner';
import LogoutModal from './LogoutModal';

class App extends Component {
  render() {
    const spinner = this.props.questionLoading || this.props.authLoading || this.props.statsLoading ? <Spinner/> : '';
    const logoutModal = this.props.logoutModal ? <LogoutModal/> : '';
    return (
      <div>
        <NavBar />
        {spinner}
        {logoutModal}
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/quiz' component={Quiz} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  questionLoading: state.questions.loading,
  authLoading: state.auth.loading,
  statsLoading: state.stats.loading,
  logoutModal: state.auth.logoutModal
})



export default withRouter(connect(mapStateToProps)(App));