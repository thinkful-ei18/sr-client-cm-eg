import React from 'react';
import './styles/styles-stats/stats.css';
export default class QuestionBox extends React.Component {

  render() {


    return (
        <div className='question-stats-box' data-id={this.props.id}>
          <div className='score'>
            {this.props.entry.score} 
          </div>
          <div className='question-box-question'>
          {this.props.entry.question}
          </div>
        </div>
    )

  }
}