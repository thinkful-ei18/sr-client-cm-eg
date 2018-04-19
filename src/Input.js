import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
    if (this.props.singleInput) {
      this.input.focus();
    }
  }


  componentDidMount() {
    this.input.focus()
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className='form-error'>{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <input
          className={this.props.className|| 'form-input-focus'}
          disabled={this.props.questionSubmitted ? true : false}
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}