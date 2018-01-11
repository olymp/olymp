import React, { Component } from 'react';
import TimeRange from './time-range';
import { Grid } from 'olymp-fela';
import moment from 'moment';

export default class TimeRanges extends Component {
  onChange = i => v => {
    const value = this.props.value || [];
    const { onChange } = this.props;
    const newValue = [...value];
    while (newValue.length < 7) {
      newValue.push([]);
    }
    onChange(newValue.map((x, index) => (index === i ? v : x)));
  };

  render() {
    const { style, className } = this.props;
    const value = this.props.value || [];
    const newValue = [...value];
    while (newValue.length < 7) {
      newValue.push([]);
    }
    const days = moment.weekdaysMin();
    days.push(days.splice(0, 1)[0]);
    return (
      <div style={style} className={className}>
        {newValue.map((v, i) => (
          <Grid style={{ marginBottom: '10px' }} key={i}>
            <Grid.Item medium={1}>&nbsp;&nbsp;{days[i]}.</Grid.Item>
            <Grid.Item medium={11}>
              <TimeRange value={v} onChange={this.onChange(i)} />
            </Grid.Item>
          </Grid>
        ))}
      </div>
    );
  }
}
