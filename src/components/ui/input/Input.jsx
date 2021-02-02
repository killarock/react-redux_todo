import React, { Component } from 'react';
import classnames from 'classnames';

export default class Input extends Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = { value };
  }

  handleInputChange = e => {
    const { value } = e.target;
    this.props.onInputChange(value);
    this.setState({ value });
  };

  render() {
    const divClasses = classnames({
      'form-group': true,
      'has-error': !error
    });

    const { value, error } = this.props;
    const helpBlock = error ? <span className="help-block">{error}</span> : null;

    return (
      <div className={divClasses}>
        <input className="form-control" type="text" value={value} onChange={this.handleInputChange} placeholder="Введите текст" />
        {helpBlock}
      </div>
    );
  }
}
