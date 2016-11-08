import React, { Component } from 'react';
import { FormGroup, Label, Input, Col, Button } from 'reactstrap';
import Check from '../check';

const ADD = 1, CONNECT = 2;
export default class Rangebar extends React.Component {
  days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  constructor(props) {
    super();
    this.state = this.fromValue(props.value);
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.state = this.fromValue(props.value);
    }
  }

  fromValue = (value = []) => {
    return this.days.reduce((prev, prop, index) => {
      if (!value[index]) {
        prev[prop] = null;
      } else {
        const curValue = value[index] || '';
        let [split0, split1] = (curValue || '').trim().split(',');
        let [from0, to0] = (split0 || '').trim().split('-');
        let [from1, to1] = (split1 || '').trim().split('-');
        prev[prop] = {
          [ADD]: curValue.indexOf(',') !== -1,
          from0,
          to0,
          from1,
          to1
        };
      } return prev;
    }, {})
  }

  toValue = (state) => {
    const value = this.days.reduce((prev, prop) => {
      if (!state[prop]) {
        prev.push(null);
      } else if (state[prop][ADD]) {
        prev.push(`${state[prop].from0 || ''}-${state[prop].to0 || ''}, ${state[prop].from1 || ''}-${state[prop].to1 || ''}`);
      } else {
        prev.push(`${state[prop].from0 || ''}-${state[prop].to0 || ''}`);
      } return prev;
    }, []);
    return value;
  }

  onChangeActive = (day, active) => {
    const newState = this.state;
    newState[day] = active === undefined && this.state[day] ? null : { };
    const value = this.toValue(newState);
    this.props.onChange(value);
  }
  onChangeAdd = (day, active) => {
    const newState = this.state;
    newState[day][ADD] = active === undefined ? !this.state[day][ADD] : active;
    const value = this.toValue(newState);
    this.props.onChange(value);
  }
  onChangeValue = (day, index, value) => {
    let name;
    switch (index) {
      case 1:
        name = 'to0';
        break;
      case 3:
        name = 'from1';
        break;
      case 4:
        name = 'to1';
        break;
      default:
        name = 'from0';
        break;
    }
    if (!name) return;
    const newState = this.state;
    newState[day][name] = value;
    const prop = this.toValue(newState);
    this.props.onChange(prop);
  }
  renderTime = (day, index, value) => {
    return (
      <Col key={index} sm={2}>
        <Input value={value} onChange={v => this.onChangeValue(day, index, v.target.value)} type="text" placeholder={index % 2 ? 'Bis' : 'Von'} />
      </Col>
    );
  }
  renderConnector = day => {
    return (
      <Label key={'connector'} check sm={1} className="text-xs-center" onClick={() => this.onChangeAdd(day)}>
        und
      </Label>
    );
  }
  renderAdd = day => {
    return (
      <Label key={'add'} check sm={1} className="text-xs-center p-a-0">
        <a href="javascript:;" className="btn btn-primary" onClick={() => this.onChangeAdd(day)}>
          +
        </a>
      </Label>
    );
  }
  renderSegment = day => (value, index) => {
    if (value === CONNECT) {
      return this.renderConnector(day);
    } else if (value === ADD) {
      return this.renderAdd(day);
    } else {
      return this.renderTime(day, index, value);
    }
  }
  renderDay = (day) => {
    const value = this.state[day];
    let inputs = [];
    if (!value) inputs = [];
    else if (value[ADD]) inputs = [value.from0, value.to0, CONNECT, value.from1, value.to1];
    else inputs = [value.from0, value.to0, ADD];

    return (
      <FormGroup key={day} check row>
        <Label check sm={3}>
          <Check value={inputs.length > 0} className="m-l-0" onChange={v => this.onChangeAdd(day, v)} /> {day}
        </Label>
        {inputs.map(this.renderSegment(day))}
      </FormGroup>
    )
  }
  render() {
    return (
      <div>
        {this.days.map(this.renderDay)}
      </div>
    );
  }
}
