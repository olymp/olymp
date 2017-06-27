import React, { Children } from 'react';
import { createComponent } from 'react-fela';

export const ContentLoaderStyles = {
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  // background: '#f6f7f8',
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  backgroundSize: '200% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 0',
    },
    '100%': {
      backgroundPosition: '-100% 0',
    },
  },
};

export default createComponent(
  ({ height, width }) => ({
    height: height || '100%',
    // minHeight: 96,
    width: width || '100%',
    ...ContentLoaderStyles,
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
  props => Object.keys(props)
);
