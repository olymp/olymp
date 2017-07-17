import React, { createElement, isValidElement } from 'react';

const defaultComponent = ({ componentName, children, className, style }) =>
  (<div style={style} className={className}>
    <b>
      Type not found: {componentName}
    </b>
    {children}
  </div>);
export default ({ components, decorators, fallback }) => {
  fallback = fallback || defaultComponent;
  const cache = {};
  // object to react component
  const create = (name, props, children, decos) => {
    const key = `${name}@${decos.map(x => x.raw).join('|')}`;
    let component = cache[key] || components[name] || fallback;
    const needFallback = !components[name];
    if (needFallback) { props.componentName = name; }
    if (!cache[key]) {
      // cache wrapped component to prevent unmounting/remounting
      decos.forEach(({ type, args }) => {
        if (decorators[type]) { component = decorators[type](component, args); }
      });

      cache[key] = component;
    }
    return createElement(component, props, children);
  };
  // prepare node converted from string by processLines
  const compile = (context = {}) => (node, key) => {
    const type = node.type || 'text';
    const children = node.children || [];
    const decos = node.decorators || [];
    const props = node.args ? { ...context, ...node.args } : { ...context };
    if (key !== undefined) { props.key = key; }
    if (node.text) { props.text = node.text; }
    return create(type, props, children.map(compile(context)), decos);
  };
  return compile;
};
