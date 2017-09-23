import React from 'react';
import { createComponent, Container } from 'olymp-fela';

const Header = createComponent(
  ({ theme }) => ({
    backgroundColor: '#ddd',
    minHeight: 75,
    width: '100%',
    marginBottom: 20,
    paddingY: theme.space3,
  }),
  'div',
  p => Object.keys(p),
);

const BannerBlock = ({ attributes, className, children }) => (
  <Header className={className} {...attributes}>
    <Container>
      <h2>{children}</h2>
    </Container>
  </Header>
);

export default {
  key: 'Pages.Template.Banner',
  label: 'Banner',
  category: 'Text',
  editable: true,
  component: BannerBlock,
};
