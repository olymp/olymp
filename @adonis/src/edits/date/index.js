import React from "react";
import moment from "moment";
import Input from "../masked-input";

import DayPicker, {DateUtils} from "react-day-picker";
import LocaleUtils from "react-day-picker/moment";
import "moment/locale/de";

import "./style.less";

export default class DateEdit extends React.Component {
  static defaultProps = {
    value: undefined,
    anchor: undefined
  };

  constructor(props) {
    super();

    const {value} = props;
    this.state = {
      focused: false,
      input: value ? moment(value).format("L") : ''
    };
  }

  componentWillReceiveProps(props) {
    if (!this.state.focused) {
      const {value} = props;
      this.setState({input: value ? moment(value).format("L") : ''});
    }
  }

  handleInputChange = e => {
    const input = e.target.value;
    const {value, anchor, updateValue} = this.props;

    if (moment(input, "L", true).isValid()) {
      const date = moment(input, "L", true).startOf('day');
      if (value || anchor) {
        const time = moment(value || anchor);
        date.add(time.hours(), 'hours');
        date.add(time.minutes(), 'minutes');
      }
      updateValue(date.toDate());
      this.refs.daypicker.showMonth(date.toDate());
    }
    this.setState({input});
  };

  handleDayClick = (e, day) => {
    const {value, anchor, updateValue} = this.props;
    if (day) {
      const date = moment(day).startOf('day');
      if (value || anchor) {
        const time = moment(value || anchor);
        date.add(time.hours(), 'hours');
        date.add(time.minutes(), 'minutes');
      }
      updateValue(date.toDate());
      this.setState({input: date.format("L")});
    }
  };

  handleRemoveClick = () => {
    const {updateValue} = this.props;

    updateValue(null);
    this.setState({input: null});
  };

  focus = () => {
    this.setState({focused: true});
  };

  blur = () => {
    this.setState({focused: false});
  };

  mouseDown = event => {
    event.stopPropagation();
    event.preventDefault();
    this.refs.input.focus();
  };

  selectAll = () => {
    this.refs.input.select();
  };

  render() {
    const {focused, input} = this.state;
    const {value, className, style, anchor, placeholder} = this.props;
    const selectedDay = value || anchor || new Date();

    const boxStyle = {
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 2,
      border: '1px solid rgba(34,36,38,.15)',
      borderRadius: '.28571429rem'
    };

    return (
      <div style={style} className={className}>
        <div className="ui icon input" style={{width: '100%'}}>
          <Input
            ref="input"
            pattern="11.11.1111"
            type="text"
            value={ input }
            placeholder={placeholder || "Datum"}
            onClick={ this.selectAll }
            onBlur={ this.blur }
            onFocus={ this.focus }
            onChange={ this.handleInputChange }
          />
          <i className="circular remove link icon" onClick={this.handleRemoveClick}></i>
        </div>

        {focused ? <div style={boxStyle} tabIndex="-1" onMouseDown={this.mouseDown}>
          <DayPicker
            tabIndex="-1"
            localeUtils={ LocaleUtils }
            locale="de"
            ref="daypicker"
            initialMonth={ selectedDay }
            modifiers={{
                selected: day => selectedDay ? DateUtils.isSameDay(selectedDay, day) : false
              }}
            onDayClick={ this.handleDayClick }
          />
        </div> : null}

      </div>
    );
  }
}
