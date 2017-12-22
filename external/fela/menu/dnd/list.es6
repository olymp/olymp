import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from '../list';
import Context from './context';
import Item from './item';

const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? '#88888878' : undefined,
  borderRadius: 5,
});

const list = ({ children, group = 'dnd', ...props }) => (
  <Droppable droppableId={group}>
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
);

list.Item = Item;
list.Context = Context;
export default list;
