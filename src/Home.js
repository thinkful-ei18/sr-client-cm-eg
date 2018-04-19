import React, { Component } from 'react';

// styles
import './styles/style-homepage/homeComponent.css';
import Login from './Login';

export class Home extends Component {
  render() {
    return (
      <div className='homepage-container'>

        <header>
          <div className="header-top-diagonal"></div>
          <h1>Ready to learn?</h1>
          <p>Welcome to DSAwesome, our quiz app uses a Spaced Repition Algorithm to help you get the most out of your studying.</p>
        </header>
        <div className='top-end'></div>

        <section>
        </section>
      </div>
    )
  }
}

export default Home;