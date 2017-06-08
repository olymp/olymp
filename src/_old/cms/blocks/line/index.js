import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp-slate';


@useGenericBlock({
  label: 'Linie',
  category: 'Template',
  editable: false,
  align: true,
})
export default class LineBlock extends Component {

  render() {
    const { children, ...rest } = this.props;

    return (
      <GenericBlock {...rest}>
        <hr />
      </GenericBlock>
    );
  }
}
