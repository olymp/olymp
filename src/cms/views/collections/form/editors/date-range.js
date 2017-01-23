import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

export default class DatePickerInt extends Component {
  onChange = (e) => {
    const { onChange } = this.props;
    const value = (e || []).map(e => parseInt(e.format('x')));
    onChange(value);
  }
  getValue = () => {
    let { value } = this.props;
    // 2014-09-14T10:32:27.831Z
    return (value || []).map(value => {
      if (typeof value === 'string') value = parseInt(moment(value.replace(/"/g, '')).format('x'));
      return value ? moment(value) : undefined;
    });
  }
  render() {
    return (
      <RangePicker
        showTime={this.props.showTime}
        format="YYYY-MM-DD HH:mm:ss"
        placeholder={['Start', 'Ende']}
        onChange={this.onChange}
      />
    )
    return <DatePicker {...this.props} value={this.getValue()} onChange={this.onChange} />;
  }
}
