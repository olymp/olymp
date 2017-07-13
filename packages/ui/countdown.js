var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { number, func } from 'prop-types';
var CountdownTimer = (function (_super) {
    __extends(CountdownTimer, _super);
    function CountdownTimer(props) {
        var _this = _super.call(this, props) || this;
        _this.tick = function () {
            var currentTime = Date.now();
            var dt = _this.state.prevTime ? currentTime - _this.state.prevTime : 0;
            var interval = _this.props.interval;
            var timeRemainingInInterval = interval - dt % interval;
            var timeout = timeRemainingInInterval;
            if (timeRemainingInInterval < interval / 2.0) {
                timeout += interval;
            }
            var timeRemaining = Math.max(_this.state.timeRemaining - dt, 0);
            var countdownComplete = _this.state.prevTime && timeRemaining <= 0;
            if (_this.isMounted()) {
                if (_this.state.timeoutId) {
                    clearTimeout(_this.state.timeoutId);
                }
                _this.setState({
                    timeoutId: countdownComplete ? null : setTimeout(_this.tick, timeout),
                    prevTime: currentTime,
                    timeRemaining: timeRemaining,
                });
            }
            if (countdownComplete) {
                if (_this.props.completeCallback) {
                    _this.props.completeCallback();
                }
                return;
            }
            if (_this.props.tickCallback) {
                _this.props.tickCallback(timeRemaining);
            }
        };
        _this.getFormattedTime = function (milliseconds) {
            if (_this.props.formatFunc) {
                return _this.props.formatFunc(milliseconds);
            }
            var totalSeconds = Math.round(milliseconds / 1000);
            var seconds = parseInt(totalSeconds % 60, 10);
            var minutes = parseInt(totalSeconds / 60, 10) % 60;
            var hours = parseInt(totalSeconds / 3600, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            hours = hours < 10 ? "0" + hours : hours;
            return hours + ":" + minutes + ":" + seconds;
        };
        _this.state = {
            timeRemaining: _this.props.initialTimeRemaining,
            timeoutId: null,
            prevTime: null,
        };
        return _this;
    }
    CountdownTimer.prototype.componentDidMount = function () {
        this.tick();
    };
    CountdownTimer.prototype.componentWillReceiveProps = function (newProps) {
        if (this.state.timeoutId) {
            clearTimeout(this.state.timeoutId);
        }
        this.setState({
            prevTime: null,
            timeRemaining: newProps.initialTimeRemaining,
        });
    };
    CountdownTimer.prototype.componentDidUpdate = function () {
        if (!this.state.prevTime && this.state.timeRemaining > 0) {
            this.tick();
        }
    };
    CountdownTimer.prototype.componentWillUnmount = function () {
        clearTimeout(this.state.timeoutId);
    };
    CountdownTimer.prototype.render = function () {
        var timeRemaining = this.state.timeRemaining;
        return (React.createElement("div", { className: "timer" }, this.getFormattedTime(timeRemaining)));
    };
    CountdownTimer.propTypes = {
        initialTimeRemaining: number.isRequired,
        interval: number,
        formatFunc: func,
        tickCallback: func,
        completeCallback: func,
    };
    CountdownTimer.defaultProps = {
        interval: 1000,
        formatFunc: null,
        tickCallback: null,
        completeCallback: null,
    };
    return CountdownTimer;
}(Component));
export default CountdownTimer;
//# sourceMappingURL=countdown.js.map