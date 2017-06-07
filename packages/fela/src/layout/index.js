import React from 'react';
import { styled } from 'olymp';
import Container from '../container';

const WithContainer = ({ container, ...rest }) => container ? <Container {...rest} /> : <div {...rest} />;

const Layout = styled(() => ({
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
}), 'div', p => p);
Layout.Header = styled(() => ({
  flexShrink: 0,
}), WithContainer, p => p);
Layout.Footer = styled(() => ({
  flexShrink: 0,
}), WithContainer, p => p);
Layout.Body = styled(() => ({
  flex: 1,
}), WithContainer, p => p);

export default Layout;
