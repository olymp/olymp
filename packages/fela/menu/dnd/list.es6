import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../list';
import Item from './item';

const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? '#88888878' : undefined,
  borderRadius: 5,
});

const list = ({ children, onDragEnd, ...props }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <List
          _ref={provided.innerRef}
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

list.Item = Item;
export default list;
