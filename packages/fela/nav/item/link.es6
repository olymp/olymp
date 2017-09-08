import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'olymp-router';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';

const Inner = createComponent(
  ({ theme, colored }) => ({
    cursor: 'pointer',
    onHover: {
      color:
        colored && tinycolor(colored || theme.color).isDark()
          ? theme.light
          : theme.dark,
      textDecoration: `underline solid ${colored &&
      tinycolor(colored || theme.color).isDark()
        ? theme.light
        : theme.dark}`,
    },
    '&.active': {
      textDecoration: `underline solid ${colored &&
      tinycolor(colored || theme.color).isDark()
        ? theme.light
        : theme.dark}`,
    },
  }),
  ({ colored, onClick, ...rest }) =>
    onClick ? <span onClick={onClick} {...rest} /> : <NavLink {...rest} />,
  p => Object.keys(p)
);

const Link = createComponent(
  ({ theme, colored }) => ({
    color:
      colored && tinycolor(colored || theme.color).isDark()
        ? theme.light2
        : theme.dark2,
    display: 'block',
    fontFamily: theme.fontFamily,
    textDecoration: 'none',
    ellipsis: true,
  }),
  ({ to, onClick, ...rest }) =>
    to || onClick
      ? <Inner to={to} onClick={onClick} {...rest} />
      : <span {...rest} />,
  p => Object.keys(p)
);
Link.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};
Link.defaultProps = {
  to: undefined,
  onClick: undefined,
};
export default Link;
