import React from 'react';

// styles
import './styles/styles-stats/stats.css';
const randomColor = require('random-color');

export default class QuestionBox extends React.Component {


  render() {
    const color = randomColor(0.60, 0.85).hexString();
    const boxStyle = {
      border: `4px solid ${color}`
    };

    const scoreStyle = {
      backgroundColor: color
    };

    return (
      <div className='question-stats-box' style={boxStyle} data-id={this.props.id}>
        <div className='question-box-question'>
          {this.props.entry.question}
        </div>
        <div className='question-box-score' style={scoreStyle}>
          {this.props.entry.score}
        </div>
      </div>
    )

  }
}