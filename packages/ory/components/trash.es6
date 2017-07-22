// @flow
import React from 'react';
import { DropTarget as dropTarget } from 'react-dnd';
import { Editor } from 'ory-editor-core/lib';
import { connect } from 'react-redux';
import { createComponent } from 'react-fela';
import { removeCell } from 'ory-editor-core/lib/actions/cell/core';
import throttle from 'lodash.throttle';
import {
  isEditMode,
  isLayoutMode,
  isPreviewMode,
  isInsertMode,
  isResizeMode,
} from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import { Button } from 'antd';
import Provider from './provider';

const target = {
  hover: throttle(
    (props: any, monitor: any) => {
      const item = monitor.getItem();
      if (monitor.isOver({ shallow: true })) {
        item.clearHover();
      }
    },
    200,
    { trailing: false }
  ),

  drop(props: { removeCell(id: string): void }, monitor: any) {
    const item = monitor.getItem();
    if (monitor.didDrop() || !monitor.isOver({ shallow: true })) {
      // If the item drop occurred deeper down the tree, don't do anything
      return;
    }

    props.removeCell(item.id);
  },
};

const connectMonitor = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(),
  isOverCurrent: monitor.isOver({ shallow: true }),
});

const Raw = createComponent(
  ({ theme, isLayoutMode }) => ({
    position: 'fixed',
    bottom: isLayoutMode ? 16 : -64,
    zIndex: 100,
    left: '50%',
    transition: 'bottom 200ms ease',
    padding: 8,
  }),
  ({ className, connectDropTarget, isOverCurrent }: Object) =>
    connectDropTarget(
      <div className={className}>
        <Button
          shape="circle"
          icon="delete"
          size="large"
          type={isOverCurrent ? 'primary' : 'default'}
        />
      </div>
    ),
  p => Object.keys(p)
);

const types = ({ editor }: { editor: Editor }) =>
  [
    ...Object.keys(editor.plugins.plugins.layout),
    ...Object.keys(editor.plugins.plugins.content),
  ].map(
    (p: string) =>
      editor.plugins.plugins.content[p].name ||
      editor.plugins.plugins.layout[p].name
  );

const mapDispatchToProps = {
  removeCell,
};

const mapStateToProps = createStructuredSelector({
  isEditMode,
  isLayoutMode,
  isPreviewMode,
  isInsertMode,
  isResizeMode,
});

const Decorated = connect(mapStateToProps, mapDispatchToProps)(
  dropTarget(types, target, connectMonitor)(Raw)
);

const Trash = (props: any) =>
  <Provider {...props}>
    <Decorated {...props} />
  </Provider>;

export default Trash;
