import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from '../../utils/utils';
import Link from './link';
import Arrow from './arrow';

const StyledItem = createComponent(
  ({ theme, fill, colored, vertically, right, pages }) => ({
    hasFlex: {
      flex: fill && '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: fill ? 'column' : right && vertically && 'row-reverse',
    },
    width: vertically && '100%',
    float: !vertically && 'left',
    position: 'relative',
    padding: theme.space3,
    paddingRight: pages && pages.length ? theme.space4 : theme.space3,
    onHover: {
      backgroundColor: colored && fade('#000000', 10),
      '> div': {
        display: 'block',
      },
    },
    ifMini: {
      float: 'none',
      display: 'block',
      width: '100%',
    },
  }),
  ({ className, onMouseEnter, children }) =>
    <div className={className} onMouseEnter={onMouseEnter}>
      {children}
    </div>,
  p => Object.keys(p)
);

/**
 * navbar-item-component
 */
const Item = ({
  pathname,
  children,
  label,
  fill,
  colored,
  vertically,
  right,
  pages,
  onClick,
  onMouseEnter,
  ...props
}) => {
  let direction = 'down';
  if (!vertically) {
    direction = right ? 'left' : 'right';
  }

  return (
    <StyledItem
      fill={fill}
      colored={colored}
      vertically={vertically}
      right={right}
      pages={pages}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(props) : undefined}
    >
      <Link to={pathname} onClick={onClick} colored={colored}>
        {label}
        {!!Children.count(children) &&
          <Arrow direction={direction} isLight={!!colored} />}
      </Link>

      {Children.map(children, child =>
        cloneElement(child, { ...props, colored, vertically, right, sub: true })
      )}
    </StyledItem>
  );
};
Item.propTypes = {
  children: PropTypes.node,
  /** nav-item label */
  label: PropTypes.string.isRequired,
  /** aligns nav-item right */
  right: PropTypes.bool,
  /** navbar background-color. primary-color if colored is set true */
  colored: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
};
Item.defaultProps = {
  children: undefined,
  right: false,
  colored: undefined,
  onClick: () => {},
  onMouseEnter: () => {},
};
export default Item;
