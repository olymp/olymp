import React from 'react';
import { styled } from 'olymp';
import Container from '../container';

const WithContainer = ({ container, ...rest }) => container ? <Container {...rest} /> : <div {...rest} />;

const Layout = styled(() => ({
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
}), 'div', p => p);
Layout.Header = WithContainer;
Layout.Footer = WithContainer;
Layout.Body = styled(() => ({
  flex: 1,
}), WithContainer, p => p);

export default Layout;
