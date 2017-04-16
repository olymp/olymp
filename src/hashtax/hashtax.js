import React, { Component, createElement, PropTypes } from 'react';
import { throttle, interpolate } from './utils';
import { textToAst, astToReact } from './processors';
import connect from './connect';

export default options => {
  const createTemplate = (text) => {
    const ast = textToAst(text);
    const component = ({ children, value, ...props }) => {
      return (
        <div>
          {ast.map(toReact({ ...props, value, arg0: value, content: children }))}
        </div>
      )
    };
    component.propTypes = {};
    interpolate(text, v => component.propTypes[v] = PropTypes.string);
    return component;
  };

  const components = options.components ? Object.keys(options.components).reduce((store, key) => {
    store[key] = typeof options.components[key] === 'string'
      ? connect(createTemplate(options.components[key]))
      : connect(options.components[key]);
    return store;
  }, {}) : {};
  const decorators = options.decorators || {};
  const fallback = options.fallback;
  let toReact = astToReact({ components, decorators, fallback });

  class Hashtax extends Component {
    static propTypes = {
      type: PropTypes.string,
      throttle: PropTypes.number,
      value: PropTypes.string,
    };
    static defaultProps = {
      type: 'div',
      throttle: null,
      value: '',
    }
    // Allow throttling for better performance
    shouldComponentUpdate(newProps) {
      const newThrottle = newProps.throttle;
      const oldThrottle = this.props.throttle;
      if (newThrottle) {
        if (!this.throttler || newThrottle !== oldThrottle) {
          this.throttler = throttle(newThrottle);
        }
        this.throttler(() => {
          if (this.unmounting) return;
          this.forceUpdate();
        });
        return false;
      }
      delete this.throttler;
      return true;
    }
    //
    componentWillUnmount() {
      this.unmounting = true;
    }
    render() {
      const { value, className, style, type, throttle, ...context } = this.props;
      if (!value) return null;

      // value to AST
      const ast = textToAst(value);
      // AST to React components
      return createElement(type, { className, style }, ast.map(toReact(context)));
    }
  }
  Hashtax.render = (value, context) => textToAst(value).map(toReact(context));
  Hashtax.components = components;
  Hashtax.decorators = decorators;
  Hashtax.addComponent = (key, component) => {
    components[key] = typeof component === 'string'
      ? connect(createTemplate(component))
      : connect(component);
    toReact = astToReact({ components, decorators, templates, fallback });
  };
  Hashtax.addDecorator = (key, decorator) => {
    decorators[key] = decorator;
    toReact = astToReact({ components, decorators, templates, fallback });
  };
  return Hashtax;
}
