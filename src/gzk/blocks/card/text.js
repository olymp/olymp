import React, { Component } from 'react';
import { cn } from 'olymp';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp/slate';
import { Image } from 'olymp/cms';

@useGenericBlock({
  category: 'Karte',
  label: 'Text',
  editable: true,
  props: ['title'],
  actions: props => [
    {
      icon: 'heading',
      type: 'set-title',
      toggle: () => {
        const { setData, getData } = props;
        const title = window.prompt('Titel', getData('title'));
        setData({ title });
      },
    },
  ],
})
export default class GzCard extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <GenericBlock
        {...this.props}
        className="gz-big-element col-md-4"
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        {title ? <h2 contentEditable={false}>{title}</h2> : null}
        <div className={cn('gz-panel')}>{children}</div>
      </GenericBlock>
    );
  }
}
