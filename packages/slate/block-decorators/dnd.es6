import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { debounce } from 'lodash';

const source = {
  beginDrag({ node }) {
    return {
      id: node.key,
    };
  },

  isDragging(props, monitor) {
    return props.id == monitor.getItem().id;
  },
};

const move = debounce(
  (props, item, isOver) => {
    console.log('DROP');
  },
  100,
  { trailing: true, leading: true },
);
const target = {
  /* canDrop() {
    return false;
  },

  hover(props, monitor) {
    move(props, monitor.getItem(), monitor.isOver({ shallow: true }));
  },*/
  drop(props, monitor) {
    console.log(props);
    const { editor, node } = props;
    const { id: draggedId } = monitor.getItem();
    const { key: overId } = node;

    if (draggedId == overId || draggedId == props.parent) {
      return;
    }
    if (!monitor.isOver({ shallow: true })) {
      return;
    }

    if (draggedId && overId) {
      const state = editor.getState();
      const parent = state.document.getParent(node.key);
      const index = parent.nodes.indexOf(node);
      // props.move(draggedId, overId, props.parent);
      const transform = state
        .transform()
        .moveNodeByKey(draggedId, parent.key, index || 0)
        .apply();
      editor.onChange(transform);
    }
  },
};

export default (WrappedComponent) => {
  @DropTarget('ITEM', target, connect => ({
    connectDropTarget: connect.dropTarget(),
  }))
  @DragSource('ITEM', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }))
  class Item extends Component {
    static propTypes = {
      id: PropTypes.any.isRequired,
      parent: PropTypes.any,
      item: PropTypes.object,
      move: PropTypes.func,
      find: PropTypes.func,
    };

    render() {
      const {
        connectDropTarget,
        connectDragPreview,
        connectDragSource,
        parent,
        move,
        find,
        editor,
      } = this.props;

      const readOnly = !!(!editor || editor.props.readOnly);
      if (readOnly) {
        return <WrappedComponent {...this.props} />;
      }
      return connectDropTarget(
        connectDragPreview(
          <div>
            {connectDragSource(
              <div
                contentEditable={false}
                style={{
                  cursor: 'move',
                  position: 'absolute',
                  background: 'black',
                  width: 9,
                  height: 9,
                  zIndex: 100,
                }}
              />,
            )}
            <WrappedComponent {...this.props} />
          </div>,
        ),
      );
    }
  }
  return Item;
};
