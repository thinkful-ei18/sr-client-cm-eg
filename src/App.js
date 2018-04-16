import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Login from './Login';
import SignUp from './Signup';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    )
  }
}

export default App;