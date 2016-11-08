import React, { Component, PropTypes } from 'react';
import moment from "moment";

function getNumbers(string, index) {
  const regex = /(\d{1,5})/g;
  index || (index = 1); // default to the first capturing group
  var matches = [];
  var match;
  while (match = regex.exec(string)) {
    if(match[index]){
      matches.push(parseInt(match[index]));
    }
  }
  return matches;
}

class TimeEdit extends Component {
  static defaultProps = {
    value: undefined,
    anchor: undefined
  }

  constructor(props) {
    super();

    const { value } = props;
    this.state = {
      focused: false,
      input: value ? moment(value).format("HH:mm") : ''
    };
  }

  componentWillReceiveProps(props){
    if(!this.state.focused) {
      const { value } = props;
      this.setState({input: value ? moment(value).format("HH:mm") : ''});
    }
  }

  getOptions = (value, anchor, noNest) =>{
    const options = [];

    var matches = getNumbers(value);
    if (matches.length) {
      if (/^(\d{1,5}) ([01]?[0-9]|2[0-3]):([01]?[0-9]|2[0-3])/g.test(value)) {
        options.push({
          days: matches[0],
          hours: matches[1],
          minutes: matches[2],
        });
      } else if (/^([01]?[0-9]|2[0-3]):([01]?[0-9]|2[0-3])/g.test(value)) {
        options.push({
          days: 0,
          hours: matches[0],
          minutes: matches[1],
        });
      } else {
        // If 0001 -> 00:01
        if(value.indexOf(':') === -1 & value.length === 4 && !noNest) {
          this.getOptions(value.substr(0, 2) + ':' + value.substr(2), anchor, true).forEach(x=>options.push(x));
        }
        if (anchor) {
          var anchored = moment(anchor).add(matches[0], 'minutes');
          options.push({
            days: 0,
            hours: anchored.hours(),
            minutes: anchored.minutes()
          });
        }
        if(matches[0] < 24) {
          options.push({
            days: 0,
            hours: matches[0],
            minutes: 0,
          });
        }
        options.push({
          days: 0,
          hours: 0,
          minutes: matches[0],
        });
      }
    }
    return options;
  }

  onChange = e =>{
    const {anchor, value, updateValue} = this.props;

    const input = e.target.value;
    const options = this.getOptions(input, anchor);

    if(options.length) {
      const time = moment(value || anchor || undefined).startOf('day');
      time.add(options[0].days, 'days');
      time.add(options[0].hours, 'hours');
      time.add(options[0].minutes, 'minutes');
      updateValue(time.toDate());
    }

    this.setState({
      input,
      options
    });
    return;

    // Mit Anker
    // 1 12:15 -> 1 Tag und 12:15 Uhr
    // 1 -> 1 Tag / 1 Minute / 01:00 Uhr
    // 1,5 -> 1 Stunde und 30 Minuten
    // 45 -> 45 Minuten / xx:45 Uhr

    // Ohne Anker
    // 12:15 -> 12:15 Uhr
    // 1 -> 01:00
    if (moment(value, "HH:mm", true).isValid()) {
      const time = moment(value, "HH:mm", true);
      previous.hours(time.hours());
      previous.minutes(time.minutes());
      this.props.updateValue(previous.toDate());
    } else if (moment(value, "HHmm", true).isValid()) {
      const time = moment(value, "HHmm", true);
      previous.hours(time.hours());
      previous.minutes(time.minutes());
      this.props.updateValue(previous.toDate());
    }
    this.setState({
      input: value,
      options: options
    });
  }

  selectAll = (inputProps) => {
    this.refs.input.select();
  }

  focus = () => {
    this.setState({focused: true});
  }

  blur = () => {
    const {value} = this.props;
    this.setState({
      focused: false,
      input: value ? moment(value).format("HH:mm") : ''
    });
  }

  onRenderListHeader = (allCount, shownCount, staticCount) => {
    if (allCount - staticCount < 20) return null;
    const allItems = `${allCount - staticCount} ${
      (allCount - staticCount) === 1 ? 'Eintrag' : 'Einträge'
    }`;
    return allCount === shownCount ?
      `${allItems} gefunden` :
      `${shownCount - staticCount} von ${allItems}`;
  }

  render() {
    const {input} = this.state;
    const {value} = this.props;
    const valueAsTime = value ? moment(value).format('HH:mm') : null;


    const times = [];
    if(!input){
      const hours = [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
      const minutes = [0, 30];
      hours.forEach(h => {
        if(h > 7 && h < 21) {
          minutes.forEach(m => times.push(('0' + h).slice(-2) + ':' + ('0' + m).slice(-2)));
        } else {
          times.push(('0' + h).slice(-2) + ':00');
        }
      });
    } else {
      var num = parseInt(input.split(':')[0]);
      if (num !== NaN) {
        const minutes = [0, 15, 30, 45];
        minutes.forEach(m => times.push(('0' + num).slice(-2) + ':' + ('0' + m).slice(-2)));
      }
    }
    if (valueAsTime && times.indexOf(valueAsTime) === -1) times.push(valueAsTime);

    return (
      <div style={this.props.style}>
        <input placeholder="Zeit" ref="input" onClick={ this.selectAll } type='text' value={input} onChange={this.onChange} onBlur={ this.blur } onFocus={ this.focus }/>
      </div>
    );
  }
}

export default TimeEdit;
