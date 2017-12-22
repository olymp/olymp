import React, { Component } from 'react';
import { number, func } from 'prop-types';

export default class CountdownTimer extends Component {
  static propTypes = {
    initialTimeRemaining: number.isRequired,
    interval: number,
    formatFunc: func,
    tickCallback: func,
    completeCallback: func,
  };
  static defaultProps = {
    interval: 1000,
    formatFunc: null,
    tickCallback: null,
    completeCallback: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null,
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }
    this.setState({
      prevTime: null,
      timeRemaining: newProps.initialTimeRemaining,
    });
  }

  componentDidUpdate() {
    if (!this.state.prevTime && this.state.timeRemaining > 0) {
      this.tick();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }

  tick = () => {
    const currentTime = Date.now();
    const dt = this.state.prevTime ? currentTime - this.state.prevTime : 0;
    const interval = this.props.interval;

    // correct for small variations in actual timeout time
    const timeRemainingInInterval = interval - dt % interval;
    let timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < interval / 2.0) {
      timeout += interval;
    }

    const timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    const countdownComplete = this.state.prevTime && timeRemaining <= 0;

    if (this.isMounted()) {
      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }
      this.setState({
        timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
        prevTime: currentTime,
        timeRemaining,
      });
    }

    if (countdownComplete) {
      if (this.props.completeCallback) {
        this.props.completeCallback();
      }
      return;
    }

    if (this.props.tickCallback) {
      this.props.tickCallback(timeRemaining);
    }
  };

  getFormattedTime = (milliseconds) => {
    if (this.props.formatFunc) {
      return this.props.formatFunc(milliseconds);
    }

    const totalSeconds = Math.round(milliseconds / 1000);

    let seconds = parseInt(totalSeconds % 60, 10);
    let minutes = parseInt(totalSeconds / 60, 10) % 60;
    let hours = parseInt(totalSeconds / 3600, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    return `${hours}:${minutes}:${seconds}`;
  };

  render() {
    const timeRemaining = this.state.timeRemaining;

    return (
      <div className="timer">
        {this.getFormattedTime(timeRemaining)}
      </div>
    );
  }
}
