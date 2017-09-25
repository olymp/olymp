import React, { Component } from 'react';
import PropTypes from 'prop-types';
import useBlockBase from '../block-decorators/base';
import { createComponent } from 'olymp-fela';

export default (types) => {
  const blockTypes = Object.keys(types).reduce((result, key) => {
    if (!types[key]) {
      return result;
    }
    let { component, styles, editable, kind, slate, isVoid, ...rest } = types[key];
    const newKey = types[key].key || key;
    isVoid = isVoid !== undefined ? isVoid : editable !== true;
    if (styles && typeof styles === 'object') {
      component = createComponent(() => styles, component, p => Object.keys(p));
    }
    if (styles && typeof styles === 'function') {
      component = createComponent(styles, component, p => Object.keys(p));
    }
    result[newKey] = useBlockBase({
      ...slate,
      ...rest,
      isVoid,
      kind,
      type: key,
      key: newKey,
    })(component);
    return result;
  }, {});
  return WrappedComponent =>
    class UseBlockTypes extends Component {
      static childContextTypes = {
        blockTypes: PropTypes.object,
      };
      getChildContext() {
        return {
          blockTypes: blockTypes || this.props.blockTypes,
        };
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
};
