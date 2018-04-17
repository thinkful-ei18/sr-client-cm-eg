import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Login from './Login';
import SignUp from './Signup';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}

export default App;