import React, { Component } from 'react';
import { createComponent, border } from 'olymp-fela';
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

  componentWillReceiveProps({ value }) {
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  handleChange = e => {
    // React event weirdness requires storing
    // the synthetic event
    const val = e.target.value;
    this.setState({ value: val }, () => {
      this.changed(val);
    });
  };

  render() {
    const { className, children, placeholder } = this.props;
    const { value } = this.state;
    const suffix = value ? (
      <Icon
        type="close-circle"
        onClick={() => this.handleChange({ target: { value: null } })}
      />
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
  ({ theme }) => ({
    padding: theme.space2,
    borderBottom: border(theme, theme.dark5),
    backgroundColor: theme.dark5,
  }),
  p => <FilterComponent {...p} />,
  p => Object.keys(p),
);
