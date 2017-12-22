import React from 'react';
import { createComponent } from 'react-fela';

export default WrappedComponent =>
  createComponent(
    () => ({
      animationName: {
        '0%': {
          opacity: 0.8,
        },
        '50%': {
          opacity: 0.4,
        },
        '100%': {
          opacity: 0.8,
        },
      },
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    }),
    props => <WrappedComponent {...props} />,
    // 'img',
    props => Object.keys(props)
  );
