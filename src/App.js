import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Login from './Login';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>hi there</h1>
        <NavBar />
        <Route exact path='/login' component={Login} />
      </div>
    )
  }
}

export default App;