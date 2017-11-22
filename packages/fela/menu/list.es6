import React from 'react';
import Title from './title';
import Item from './item';
import Divider from './divider';

const List = ({
  children,
  className,
  _ref,
  innerRef,
  ref,
  style,
  extra,
  title,
  rest,
}) => (
  <div
    className={className}
    ref={_ref || innerRef || ref}
    style={style}
    {...rest}
  >
    {title && <Title extra={extra}>{title}</Title>}
    {children}
  </div>
);

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
