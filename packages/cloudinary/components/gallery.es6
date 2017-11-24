import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import Thumb from './thumb';

const Thumbs = createComponent(
  ({ justifyContent }) => ({
    padding: '.5rem 0',
    borderTop: '1px solid #eee',
    maxHeight: 100,
    maxWidth: '100%',
    overflowY: 'hidden',
    overflowX: 'scroll',
    hasFlex: {
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: justifyContent || 'space-between',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
    },
  }),
  'div',
  ({ justifyContent, ...p }) => Object.keys(p),
);

export const MediaList = ({
  items,
  itemHeight,
  selectedIds,
  onClick,
  onRemove,
  ...rest
}) => (
  <Thumbs {...rest}>
    {(items || []).map(item => (
      <Thumb
        item={item}
        onClick={() => onClick(item)}
        onRemove={() => onRemove(item)}
        isActive={selectedIds.indexOf(item.id) !== -1}
        height={itemHeight}
        key={item.id}
      />
    ))}
  </Thumbs>
);
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  itemHeight: PropTypes.number,
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};
MediaList.defaultProps = {
  items: [],
  itemHeight: 80,
  selectedIds: [],
  onClick: () => {},
  onRemove: () => {},
};
export default MediaList;
