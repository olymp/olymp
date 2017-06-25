import React, { Children } from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ height, width }) => ({
    height: height || '100%',
    width: width || '100%',
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    // background: '#f6f7f8',
    background:
      'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    backgroundSize: '200% 100%',
    minHeight: '96px',
    animationName: {
      '0%': {
        backgroundPosition: '100% 0',
      },
      '100%': {
        backgroundPosition: '-100% 0',
      },
    },
  }),
  ({ className, isLoading, children }) => {
    if (isLoading) {
      return <div className={className} />;
    }
    if (children) {
      return Children.only(children);
    }
    return null;
  },
  // 'img',
  props => Object.keys(props)
);
