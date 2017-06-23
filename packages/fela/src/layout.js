import React from 'react';
import { createComponent } from 'react-fela';
import Container from './container';

const WithContainer = ({ container, fullSize, affix, ...rest }) =>
  container ? <Container {...rest} /> : <div {...rest} />;

const Layout = createComponent(
  ({ fullHeight }) => ({
    display: 'flex',
    height: '100%',
    minHeight: fullHeight ? '100vh' : '100%',
    flexDirection: 'column',
  }),
  'div',
  ({ fullHeight, ...p }) => Object.keys(p)
);

Layout.Header = createComponent(
  () => ({
    flexShrink: 0,
  }),
  WithContainer,
  p => Object.keys(p)
);

Layout.Footer = createComponent(
  () => ({
    flexShrink: 0,
  }),
  WithContainer,
  p => Object.keys(p)
);

Layout.Body = createComponent(
  ({ affix }) => ({
    flex: 1,
    overflowY: affix && 'auto',
  }),
  WithContainer,
  ({ affix, ...p }) => Object.keys(p)
);

export default Layout;
