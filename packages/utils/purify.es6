import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import shallowEqual from './shallow-equal';

export default (Wrapped, types) => {
  if (types) {
    Wrapped.propTypes = types;
  }
  const propTypes = Object.keys(Wrapped.propTypes || {}).map(x => x);

  class FinalComponent extends Component {
    static contextTypes = {
      ...Wrapped.contextTypes,
      theme: PropTypes.object,
    };
    static propTypes = types;
    constructor(props, context) {
      super(props);
      this.filteredProps = getPropTypes(propTypes, props);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const filteredProps = getPropTypes(propTypes, this.props);
      const shouldUpdate =
        !shallowEqual(this.filteredProps, filteredProps) ||
        !shallowEqual(this.context, nextContext);
      if (!shouldUpdate) {
        return false;
      }
      this.filteredProps = filteredProps;
      return true;
    }
    render() {
      return <Wrapped {...this.filteredProps} />;
    }
  }
  return FinalComponent;
};

const getPropTypes = (propTypes, props) => {
  const newProps = {};
  Object.keys(props).forEach((key) => {
    if (propTypes.indexOf(key) !== -1) {
      newProps[key] = props[key];
    }
  });
  return newProps;
};
export const pureStyled = (styles, Wrapped, types) => {
  if (types) {
    Wrapped.propTypes = types;
  }
  const propTypes = Object.keys(Wrapped.propTypes || {}).map(x => x);
  const Styled = createComponent(styles, Wrapped, propTypes);

  class FinalComponent extends Component {
    static contextTypes = {
      ...Wrapped.contextTypes,
      theme: PropTypes.object,
    };
    static propTypes = types;
    constructor(props, context) {
      super(props);
      this.filteredProps = getPropTypes(propTypes, props);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const filteredProps = getPropTypes(propTypes, this.props);
      const shouldUpdate =
        !shallowEqual(this.filteredProps, filteredProps) ||
        !shallowEqual(this.context, nextContext);
      if (!shouldUpdate) {
        return false;
      }
      this.filteredProps = filteredProps;
      return true;
    }
    render() {
      return <Styled {...this.filteredProps} />;
    }
  }
  return FinalComponent;
};
