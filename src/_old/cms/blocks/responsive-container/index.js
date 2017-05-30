import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import { createComponent } from 'react-fela';

const bootstrap = {
  '@media (max-width: 768px)': {
    width: '540px',
    maxWidth: '100%',
  },
  '@media (max-width: 992px)': {
    width: '720px',
    maxWidth: '100%',
  },
  '@media (max-width: 1200px)': {
    width: '960px',
    maxWidth: '100%',
  },
  '@media (max-width: 6000px)': {
    width: '1140px',
    maxWidth: '100%',
  },
  marginLeft: 'auto!important',
  marginRight: 'auto!important',
  paddingLeft: '15px',
  paddingRight: '15px',
};
const text = {
  '@media (max-width: 6000px)': {
    width: '600px',
    maxWidth: '100%',
  },
  '> p': {
    hyphens: 'auto',
    textAlign: 'justify',
  },
  marginLeft: 'auto!important',
  marginRight: 'auto!important',
};

const Styled = createComponent(() => text, props => <GenericBlock {...props} />, props => props);

@useGenericBlock({
  label: 'Responsive Container',
  category: 'Template',
})
export default class ContainerBlock extends Component {
  render() {
    return (
      <Styled {...this.props} />
    );
  }
}
