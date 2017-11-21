import React from 'react';
import Title from './title';
import Item from './item';
import Divider from './divider';

const List = ({ children, className, attributes = {}, _ref, style, title }) => (
  <div className={className} ref={_ref} style={style} {...attributes}>
    {title && <Title>{title}</Title>}
    {children}
  </div>
);

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
