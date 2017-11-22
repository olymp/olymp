import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../item';

const getItemStyle = (draggableStyle, isDragging) => ({
  // change background colour if dragging
  backgroundColor: isDragging ? '#88888878' : undefined,
  borderRadius: 5,
  ...draggableStyle,
});

export default ({ children, id, ...props }) => (
  <Draggable draggableId={id}>
    {(provided, snapshot) => (
      <div>
        <Item
          _ref={provided.innerRef}
          style={getItemStyle(provided.draggableStyle, snapshot.isDragging)}
          attributes={provided.dragHandleProps}
          {...props}
        >
          {children}
        </Item>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
);
