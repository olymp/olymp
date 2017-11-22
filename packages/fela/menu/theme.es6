import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext, withPropsOnChange } from 'recompose';

const enhance = compose(
  getContext({
    theme: PropTypes.object,
  }),
  withPropsOnChange(
    ['theme', 'inverted', 'color', 'collapsed', 'width'],
    ({
      theme,
      inverted,
      color = '#F4F5F7',
      collapsed = false,
      width = 240,
    }) => ({
      theme: {
        // inverted: inverted === undefined ? color === true : inverted,
        inverted,
        collapsed,
        width,
      },
      color:
        (color === true && theme.get().color) || theme.get()[color] || color,
    }),
  ),
);
export default enhance;
