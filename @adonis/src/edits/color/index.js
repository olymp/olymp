import React, {Component, PropTypes} from 'react';

export default class ColorEdit extends Component {
  render() {
    return (
      <input
        className="form-control"
        type="color"
        style={{ height: '38px' }}
        value={this.props.value ? this.props.value : ''}
        onChange={v => this.props.updateValue(v.target.value)}
        width="100%"
      />
    );
  }
};
