import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class DatePickerInt extends Component {
  onChange = (e) => {
    const { onChange } = this.props;
    const value = !e ? null : parseInt(e.format('x'));
    onChange(value);
  }
  getValue = () => {
    let { value } = this.props;
    // 2014-09-14T10:32:27.831Z
    if (typeof value === 'string') value = parseInt(moment(value.replace(/"/g, '')).format('x'));
    return value ? moment(value) : undefined;
  }
  render() {
    return <DatePicker {...this.props} value={this.getValue()} onChange={this.onChange} />;
  }
}
