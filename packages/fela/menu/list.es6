import React, { Children, cloneElement } from 'react';
import Title from './title';
import Item from './item';
import Divider from './divider';

const List = ({
  children,
  className,
  attributes = {},
  innerRef,
  style,
  ...p
}) => (
  <div className={className} ref={innerRef} style={style} {...attributes}>
    {Children.map(children, child => (child ? cloneElement(child, p) : child))}
  </div>
);

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
