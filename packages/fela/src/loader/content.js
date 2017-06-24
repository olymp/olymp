import React, { Children } from 'react';
import { connect } from 'react-fela';

const mapStylesToProps = ({ height, width }) => renderer => ({
  container: renderer.renderRule(({ color }) => ({
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
    animationName: renderer.renderKeyframe(() => ({
      '0%': {
        backgroundPosition: '100% 0',
      },
      '100%': {
        backgroundPosition: '-100% 0',
      },
    })),
  })),
});

const component = ({ styles, isLoading, children }) => {
  if (isLoading) {
    return <div className={styles.container} />;
  }
  if (children) return Children.only(children);
  return null;
};
export default connect(mapStylesToProps)(component);
