import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

export default class DatePickerInt extends Component {
  onChange = (e) => {
    const { onChange } = this.props;
    const value = e ? e.map(e => parseInt(e.format('x'))) : [];
    while (value.length < 2) value.push(null);
    onChange(value);
  }
  getValue = () => {
    const { value } = this.props;
    // 2014-09-14T10:32:27.831Z
    return (value || []).map((value) => {
      if (typeof value === 'string') value = parseInt(moment(value.replace(/"/g, '')).format('x'));
      return value ? moment(value) : null;
    });
  }
  render() {
    return (
      <RangePicker
        {...this.props}
        value={this.getValue()}
        placeholder={['Start', 'Ende']}
        onChange={this.onChange}
      />
    );
  }
}
