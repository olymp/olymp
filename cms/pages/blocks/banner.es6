import React from 'react';
import { Container } from 'olymp-fela';

const BannerBlock = ({ attributes, className, children }) => (
  <div className={className} {...attributes}>
    <Container>
      <h2>{children}</h2>
    </Container>
  </div>
);

export default {
  type: 'banner',
  isVoid: false,
  kind: 'block',
  label: 'Banner',
  defaultText: 'Titel',
  category: 'Kopf',
  styles: ({ theme }) => ({
    backgroundColor: '#ddd',
    minHeight: 75,
    width: '100%',
    marginBottom: 20,
    paddingY: theme.space3,
  }),
  component: BannerBlock,
};
