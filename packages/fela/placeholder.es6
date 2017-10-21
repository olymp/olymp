import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import { withAmp } from 'olymp-utils';
import { createComponent } from 'react-fela';

const Placeholder = createComponent(
  ({ width, height, theme, circle, onClick }) => ({
    width,
    height,
    backgroundColor: theme.dark1,
    borderRadius: circle ? '50%' : 0,
    cursor: onClick ? 'pointer' : undefined,
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
    getContext({
      theme: PropTypes.object,
    })(({ className, theme, onClick, amp }) => (
      <div className={className} onClick={onClick}>
        {!amp &&
          typeof theme.get().logoWhite === 'string' && (
            <img src={theme.get().logoWhite} alt="placeholder" />
          )}
        {!amp &&
          typeof theme.get().logoWhite === 'function' &&
          theme.get().logoWhite()}
      </div>
    )),
  ),
  ['onClick', 'amp'],
);
Placeholder.displayName = 'Placeholder';
Placeholder.propTypes = {
  circle: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
Placeholder.defaultProps = {
  circle: false,

  width: undefined,
  height: undefined,
};
export default Placeholder;
