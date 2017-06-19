import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp-slate';
import './component.less';

const actions = props => [
  {
    type: 'set.text',
    icon: 'picture-o',
    toggle: () => {
      const { setData, getData } = props;
      const current = getData('text');
      const text = window.prompt('Text', current);
      if (text) { setData({ text }); }
    },
    active: false,
  },
  {
    type: 'set.description',
    icon: 'picture-o',
    toggle: () => {
      const { setData, getData } = props;
      const current = getData('description');
      const description = window.prompt('Beschreibung', current);
      if (description) { setData({ description }); }
    },
    active: false,
  },
];

@useGenericBlock({
  category: 'Titel',
  label: 'Titelleiste',
  editable: false,
  props: ['text', 'description'],
  actions,
})
export default class GzBoxSmall extends Component {
  render() {
    const { children, text, description } = this.props;
    return (
      <GenericBlock
        {...this.props}
        className="page-header panel"
        style={{ display: 'block' }}
      >
        <div className="container">
          <h1 className="pull-left gz-simple-header">{text}</h1>
          <ol className="breadcrumb pull-left">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              {description}
            </li>
          </ol>
        </div>
        {children}
      </GenericBlock>
    );
  }
}
