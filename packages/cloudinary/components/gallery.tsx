import React from 'react';
import PropTypes from 'prop-types';
import Thumb from './thumb';
import { createComponent } from 'olymp-fela';

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
  ({ justifyContent, ...p }) => Object.keys(p)
);

export const MediaList = ({
  items,
  itemHeight,
  selected,
  onClick,
  onRemove,
  ...rest,
}) =>
  <Thumbs {...rest}>
    {(items || [])
      .map((item, index) =>
        <Thumb
          item={item}
          onClick={e => onClick(item.id, index, e)}
          onRemove={() => onRemove(item.id)}
          isActive={selected.findIndex(({ id }) => id === item.id) >= 0}
          height={itemHeight}
          key={item.id}
        />
      )}
  </Thumbs>;
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  itemHeight: PropTypes.number,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      crop: PropTypes.arrayOf(PropTypes.number),
    })
  ),
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
