import React from 'react';
import { createComponent } from 'react-fela';
import Container from '../container';

const WithContainer = ({ container, ...rest }) => container ? <Container {...rest} /> : <div {...rest} />;

const Layout = createComponent(() => ({
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
}), 'div', p => Object.keys(p));
Layout.Header = createComponent(() => ({
  flexShrink: 0,
}), WithContainer, p => Object.keys(p));
Layout.Footer = createComponent(() => ({
  flexShrink: 0,
}), WithContainer, p => Object.keys(p));
Layout.Body = createComponent(() => ({
  flex: 1,
}), WithContainer, p => Object.keys(p));

export default Layout;
