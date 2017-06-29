import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const Layout = createComponent(
  ({ fullHeight, affix }) => ({
    display: 'flex',
    height: '100%',
    // minHeight: fullHeight || affix ? '100vh' : '100%',
    maxHeight: affix && 1, // workaround for affix
    flexDirection: 'column',
  }),
  ({ children, affix, ...rest }) =>
    (<div {...rest}>
      {Children.map(children, child => cloneElement(child, { affix }))}
    </div>),
  ({ fullHeight, ...p }) => Object.keys(p)
);
Layout.displayName = 'Layout';
Layout.propTypes = {
  fullHeight: PropTypes.bool,
  affix: PropTypes.bool,
};
Layout.defaultProps = {
  fullHeight: false,
  affix: false,
};

export default Layout;
