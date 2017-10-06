import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { debounce } from 'lodash';
import { Input, Icon } from 'antd';

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    // debounce the passed in dispatch method
    this.changed = debounce(this.props.onChange, 300);
  }

  handleChange = (e) => {
    // React event weirdness requires storing
    // the synthetic event
    const val = e.target.value;
    this.setState({ value: val }, () => {
      this.changed(val);
    });
  };

  componentWillReceiveProps({ value }) {
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  render() {
    const { className, children, placeholder } = this.props;
    const { value } = this.state;
    const suffix = value ? (
      <Icon type="close-circle" onClick={() => this.handleChange({ target: { value: null } })} />
    ) : null;
    return (
      <div className={className}>
        {children}
        <Input
          placeholder={placeholder || 'Filter ...'}
          suffix={suffix}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default createComponent(
  () => ({
    padding: 6,
    borderTop: '1px solid #eee',
    backgroundColor: 'rgba(233, 233, 233, 0.47)',
  }),
  FilterComponent,
  p => Object.keys(p),
);
