// @flow
import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Plugin } from 'ory-editor-core';
import draggable from './draggable';

const Container = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    '> p': {
      color: theme.dark2,
    },
  }),
  ({ plugin, ...p }) => {
    const Draggable = draggable(plugin.name);

    return <Draggable {...p} />;
  },
  p => Object.keys(p)
);

export default class Item extends Component {
  state = { tooltipVisible: false };
  props: { plugin: Plugin, insert: any };

  onMouseEnter = () => {
    this.setState({ tooltipVisible: true });
  };

  onMouseLeave = () => {
    this.setState({ tooltipVisible: false });
  };

  render() {
    const { plugin, insert } = this.props;

    if (!plugin.text) {
      return null;
    }

    return (
      <Container plugin={plugin} insert={insert}>
        <h4>
          {plugin.text}
        </h4>
        <p>
          {plugin.description}
        </p>
      </Container>
    );
  }
}
