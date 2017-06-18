import React, { Component } from 'react';
import { createComponent } from 'react-fela';

export const purify = (Wrapped, types) => {
  if (types) Wrapped.propTypes = types;
  const propTypes = Object.keys(Wrapped.propTypes || {}).map(x => x);

  class FinalComponent extends Component {
    static contextTypes = {
      ...Wrapped.contextTypes,
      theme: React.PropTypes.object,
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
      if (!shouldUpdate) return false;
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
  Object.keys(props).forEach(key => {
    if (propTypes.indexOf(key) !== -1) newProps[key] = props[key];
  });
  return newProps;
};
export const pureStyled = (styles, Wrapped, types) => {
  if (types) Wrapped.propTypes = types;
  const propTypes = Object.keys(Wrapped.propTypes || {}).map(x => x);
  const Styled = createComponent(styles, Wrapped, propTypes);

  class FinalComponent extends Component {
    static contextTypes = {
      ...Wrapped.contextTypes,
      theme: React.PropTypes.object,
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
      if (!shouldUpdate) return false;
      this.filteredProps = filteredProps;
      return true;
    }
    render() {
      return <Styled {...this.filteredProps} />;
    }
  }
  return FinalComponent;
};

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}
