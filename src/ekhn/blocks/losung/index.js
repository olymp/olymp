import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Losung from '../../components/losung';

@useGenericBlock({
  label: 'Losung',
  category: 'EKHN',
  editable: false,
  align: true,
})
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { children, style, className, ...rest } = this.props;

    return (
      <GenericBlock {...rest} className={className} style={{ ...style, height: 'auto' }}>
        <Losung {...rest} isBlock />

        {children}
      </GenericBlock>
    );
  }
}
