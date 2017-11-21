import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './list';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : undefined,
});
const getItemStyle = (draggableStyle, isDragging) => ({
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : undefined,
  ...draggableStyle,
});

const list = ({ children, ...props }) => (
  <DragDropContext onDragEnd={this.onDragEnd}>
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <List
          innerRef={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...props}
        >
          {children}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  </DragDropContext>
);

list.Item = ({ children, ...props }) => (
  <Draggable droppableId="droppable">
    {(provided, snapshot) => (
      <List.Item
        innerRef={provided.innerRef}
        style={getItemStyle(provided.draggableStyle, snapshot.isDragging)}
        attributes={provided.dragHandleProps}
        {...props}
      >
        {children}
        {provided.placeholder}
      </List.Item>
    )}
  </Draggable>
);
list.Title = List.Title;
export default list;
