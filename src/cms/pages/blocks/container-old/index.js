import React, { Component } from 'react';
import { useGenericBlock } from 'olymp/slate';
import { Container } from 'olymp-fela';

@useGenericBlock({
  label: 'Container',
  category: 'Template',
  resize: {
    coverOnResize: true,
    width: '100%',
    stepX: '10%',
  },
})
export default class ContainerBlock extends Component {
  render() {
    const { attributes, children } = this.props;
    return (
      <Container {...attributes}>
        {children}
      </Container>
    );
  }
}
