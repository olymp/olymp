import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default ({ children, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
);
