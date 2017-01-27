import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import Glaubensimpuls from '../../components/glaubensimpuls';

@useGenericBlock({
  label: 'Glaubensimpuls',
  category: 'Media',
  editable: false,
  resize: {
    bootstrap: true,
    coverOnResize: true,
    resizeY: false,
  },
  align: true,
})
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { children, style, className, ...rest } = this.props;

    return (
      <GenericBlock {...rest} className={className} style={{ ...style, height: 'auto' }}>
        <Glaubensimpuls {...rest} isBlock style={{ margin: 0 }} />

        {children}
      </GenericBlock>
    );
  }
}
