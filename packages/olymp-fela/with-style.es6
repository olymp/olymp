import React from 'react';
import { createComponent } from 'react-fela';

export default (styles, props = p => Object.keys(p), propName) => WrappedComponent => {
  if (!propName && typeof props === 'string') {
    propName = props;
    props = null;
  }
  if (!propName) {
    propName = 'className';
  }
  return createComponent(
    typeof styles === 'function' ? styles : () => styles,
    ({ className, ...rest }) => {
      rest[propName] = className
      return (
        <WrappedComponent {...rest} />
      )
    },
    props
  );
};
