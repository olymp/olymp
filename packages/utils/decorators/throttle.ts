import React, { Component } from 'react';
import capitalize from 'lodash/upperFirst';

export default ({
  prop,
  onThrottle,
  throttleProp,
  getInitialValue,
  initialValue,
  cooldown,
  handleUpdate,
}) => (WrappedComponent) => {
  class WithStateComponent extends Component {
    constructor(props) {
      super(props);
      let def;
      if (getInitialValue) {
        def = getInitialValue(props);
      } else if (initialValue) {
        def = initialValue;
      } else if (props[prop]) {
        def = props[prop];
      }
      this.state = { [prop]: def };
      if (throttleProp) { this.state[throttleProp] = def; }
    }
    throttled = () => {
      if (throttleProp) {
        this.setState({ [throttleProp]: this.state[prop] });
      }
      if (onThrottle) {
        onThrottle({ ...this.props, ...this.state });
      }
    };
    shouldComponentUpdate(newProps, newState) {
      if (!handleUpdate) { return true; }
      if (newState[prop] !== this.state[prop]) {
        return true;
      }
      return false;
    }
    componentWillReceiveProps(newProps) {
      if (newProps[prop] !== this.props[prop]) {
        const newState = {
          [prop]: newProps[prop],
        };
        if (throttleProp) { newState[throttleProp] = newProps[prop]; }
        return this.setState(newState);
      }
    }
    set = (v) => {
      this.setState({ [prop]: v });
      setTimeout(() => {
        if (this.state[prop] === v) {
          this.throttled();
        }
      }, cooldown || 500);
    };
    render() {
      const state = { ...this.state, [`set${capitalize(prop)}`]: this.set };
      return <WrappedComponent {...this.props} {...state} />;
    }
  }
  return WithStateComponent;
};
