import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import Glaubensimpuls from './index';

@useGenericBlock({
  label: 'Glaubensimpuls',
  category: 'Media',
  editable: false,
  resize: { ratio: 1, coverOnResize: true },
})
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { children, style, ...rest } = this.props;

    return (
      <GenericBlock {...rest} style={{ ...style, height: 'auto' }}>
        <Glaubensimpuls {...rest} style={{ margin: 0, ...style }} />

        {children}
      </GenericBlock>
    );
  }
}
