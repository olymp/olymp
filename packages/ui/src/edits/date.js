import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class DatePickerInt extends Component {
  onChange = e => {
    const { onChange } = this.props;
    const value = !e ? null : +e;
    onChange(value);
  };
  getValue = () => {
    let { value } = this.props;
    // 2014-09-14T10:32:27.831Z
    if (typeof value === 'string') value = +moment(value.replace(/"/g, ''));
    return value ? moment(value) : undefined;
  };
  render() {
    return (
      <DatePicker
        {...this.props}
        value={this.getValue()}
        onChange={this.onChange}
      />
    );
  }
}
