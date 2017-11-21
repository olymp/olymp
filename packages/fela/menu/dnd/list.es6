import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../list';
import Item from './item';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : undefined,
});

const list = ({ children, ...props }) => (
  <DragDropContext onDragEnd={() => null}>
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
