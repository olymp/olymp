import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import Thumb from './thumb';

const Thumbs = styled(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  padding: '.5rem',
}), 'div', p => p);

export const MediaList = ({ items, itemHeight, selected, onClick, onRemove, ...rest }) => (
  <Thumbs>
    {(items || []).map((item, index) => (
      <Thumb
        item={item}
        onClick={() => onClick(item.id, index)}
        onRemove={() => onRemove(item.id)}
        isActive={selected.findIndex(x => x === item.id) >= 0}
        height={itemHeight}
        key={item.id}
      />
    ))}
  </Thumbs>
);
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  itemHeight: PropTypes.number,
  selected: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};
MediaList.defaultProps = {
  items: [],
  itemHeight: 80,
  selected: [],
  onClick: () => {},
  onRemove: () => {},
};
export default MediaList;
