import React from 'react';
import './styles/spinner/spinner.css';

export default class Spinner extends React.Component {

  render() {

    return (
      <div className='spinner'>
      <img src='/img/spinner.png' alt='Loading Spinner'/>
      </div>
    )
  }

}