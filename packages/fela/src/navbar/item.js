import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from 'olymp-fela';
import Link from './link';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'olymp-icons';

const Icon = createComponent(
  ({ theme, inverse }) => ({
    fill: `${inverse ? theme.light2 : theme.color}`,
    centerY: true,
    right: theme.space3,
  }),
  ({ className, vertically, right }) =>
    !vertically
      ? <FaAngleDown className={className} size={15} />
      : right
        ? <FaAngleLeft className={className} size={15} />
        : <FaAngleRight className={className} size={15} />,
  p => Object.keys(p)
);

const NavItem = createComponent(
  ({ theme, fill, inverse, vertically, right, pages }) => ({
    /* flex start */
    flex: fill && '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: fill ? 'column' : right && vertically && 'row-reverse',
    /* flex end */
    width: vertically && '100%',
    float: !vertically && 'left',
    position: 'relative',
    padding: theme.space3,
    paddingRight: pages && pages.length ? theme.space4 : theme.space3,
    onHover: {
      backgroundColor: inverse && fade('#000000', 10),
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
  ({
    className,
    pathname,
    children,
    title,
    fill,
    inverse,
    vertically,
    right,
    pages,
    onClick,
    onItemMouseEnter,
    ...props
  }) =>
    (<div
      className={className}
      onMouseEnter={
        onItemMouseEnter ? () => onItemMouseEnter(props) : undefined
      }
    >
      <Link to={pathname} onClick={onClick} inverse={inverse}>
        {title}
        {pages &&
          !!pages.length &&
          <Icon vertically={vertically} right={right} inverse={inverse} />}
      </Link>

      {pages &&
        !!pages.length &&
        props.renderNav({
          ...props,
          inverse,
          vertically,
          right,
          pages,
          sub: true,
        })}
      {Children.map(children, child =>
        cloneElement(child, { ...props, inverse, vertically, right, sub: true })
      )}
    </div>),
  p => Object.keys(p)
);
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** title/label */
  title: PropTypes.node.isRequired,
  /** path for react-router or undefined for placeholder */
  to: PropTypes.string,
  /** submenu is mega dropdown menu */
  mega: PropTypes.func,
  /**  */
  onClick: PropTypes.func,
};
NavItem.defaultProps = {
  to: undefined,
  mega: null,
  onClick: undefined,
};
export default NavItem;
