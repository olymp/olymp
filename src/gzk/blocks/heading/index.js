import React from 'react';
import { createComponent, Container } from 'olymp-fela';

const Header = createComponent(({ theme }) => ({
  width: '100%',
  backgroundColor: '#ffa210',
  color: theme.light,
  borderBottomRightRadius: 75,
  paddingY: theme.space4,
}), ({ className, children }) => (
  <div className={className}>
    <Container>
      <h1>{children}</h1>
      <h5>Home / Magazin</h5>
    </Container>
  </div>
), p => Object.keys(p));

export default {
  label: 'Überschrift',
  category: 'Template',
  editable: true,
  component: ({ children, ...props }) => (
    <Header>
      Gesundheitsmagazin
    </Header>
  ),
};
