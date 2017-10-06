import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import Thumb from './thumb';

const Thumbs = createComponent(
  ({ justifyContent }) => ({
    padding: '.5rem',
    hasFlex: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: justifyContent || 'space-between',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
    },
  }),
  'div',
  ({ justifyContent, ...p }) => Object.keys(p),
);

export const MediaList = ({ items, itemHeight, selectedIds, onClick, onRemove, ...rest }) => (
  <Thumbs {...rest}>
    {(items || []).map(item => (
      <Thumb
        item={item}
        onClick={e => onClick(item.id, e)}
        onRemove={() => onRemove(item.id)}
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
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
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
