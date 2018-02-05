import React from 'react';
import { createComponent } from 'react-fela';

export default (styles, props = p => Object.keys(p)) => WrappedComponent => {
  return createComponent(
    typeof styles === 'function' ? styles : () => styles,
    p => <WrappedComponent {...p} />,
    props
  );
};
