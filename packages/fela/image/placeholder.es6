import React from 'react';
import PropTypes from 'prop-types';
import { withAmp } from 'olymp-utils';
import { createComponent, withTheme } from 'react-fela';

const Image = createComponent(
  ({ width, height, theme, circle }) => ({
    width,
    height,
    backgroundColor: theme.dark5,
    borderRadius: circle ? '50%' : 0,
    '> img': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%',
    },
    '> svg': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%',
    },
    onHover: {
      '> img': {
        opacity: 0.8,
      },
      '> svg': {
        opacity: 0.8,
      },
    },
  }),
  withAmp(
    withTheme(({ className, theme, amp }) => (
      <div className={className}>
        {!amp &&
          typeof theme.logo === 'string' && (
            <img src={theme.logo} alt="placeholder" />
          )}
        {!amp && typeof theme.logo === 'function' && theme.logo()}
      </div>
    )),
  ),
  ['onClick', 'amp'],
);
Image.displayName = 'Placeholder';
Image.propTypes = {
  circle: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Image.defaultProps = {
  circle: false,
  width: undefined,
  height: undefined,
};
export default Image;
