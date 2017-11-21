import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-fela';
import { compose, getContext, withPropsOnChange } from 'recompose';

const enhance = compose(
  getContext({
    theme: PropTypes.object,
  }),
  withPropsOnChange(
    ['theme', 'inverted', 'color', 'collapsed'],
    ({ theme, inverted, color = '#F4F5F7', collapsed = false }) => ({
      theme: {
        color:
          (color === true && theme.get().color) || theme.get()[color] || color,
        collapsed,
        inverted: inverted === undefined ? color === true : inverted,
      },
    }),
  ),
);
export default enhance(({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
));
