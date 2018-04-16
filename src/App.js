import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Login from './Login';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/login' component={Login} />
      </div>
    )
  }
}

export default App;