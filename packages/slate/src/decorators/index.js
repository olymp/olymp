import React, { Component } from 'react';
import useBlockBase from '../block-decorators/base';
import { createComponent } from 'olymp-fela';

export default WrappedComponent =>
  class WithBlockTypes extends Component {
    static contextTypes = {
      blockTypes: React.PropTypes.object,
    };
    render() {
      return (
        <WrappedComponent
          blockTypes={this.context.blockTypes}
          {...this.props}
        />
      );
    }
  };

export const useBlockTypes = (types) => {
  const blockTypes = Object.keys(types).reduce((result, key) => {
    let { component, styles, editable, slate, ...rest } = types[key];
    const newKey = types[key].key || key;
    const isVoid = editable !== true;
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
      key: newKey,
      isAtomic: true,
    })(component);
    return result;
  }, {});
  return WrappedComponent =>
    class UseBlockTypes extends Component {
      static childContextTypes = {
        blockTypes: React.PropTypes.object,
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
