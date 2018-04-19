import React, { Component } from 'react';

// styles
import './styles/style-homepage/homeComponent.css';

export class Home extends Component {
  render() {
    return (
      <div className='homepage-container'>
        <div className='top-clip'>Hi!</div>
        <h1>I am the homepage</h1>
      </div>
    )
  }
}

export default Home;