import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../item';

const getItemStyle = (draggableStyle, isDragging) => ({
  // change background colour if dragging
  backgroundColor: isDragging ? '#88888878' : undefined,
  borderRadius: 5,
  ...draggableStyle,
});

export default ({ children, id, onClick, ...props }) => (
  <Draggable draggableId={id}>
    {(provided, snapshot) => {
      const onClickNew = onClick
        ? (() => {
            // dragHandleProps might be null
            if (!provided.dragHandleProps) {
              return onClick;
            }
            return event => {
              provided.dragHandleProps.onClick(event);
              onClick(event);
            };
          })()
        : provided.dragHandleProps.onClickDrag;
      return (
        <div>
          <Item
            _ref={provided.innerRef}
            style={getItemStyle(provided.draggableStyle, snapshot.isDragging)}
            {...props}
            {...provided.dragHandleProps}
            onClick={onClickNew}
          >
            {children}
          </Item>
          {provided.placeholder}
        </div>
      );
    }}
  </Draggable>
);
