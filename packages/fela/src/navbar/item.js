import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from 'olymp-fela';
import { Link, Placeholder } from './link';
import { FaAngleDown, FaAngleRight } from 'olymp-icons';

const Icon = createComponent(
  ({ theme }) => ({
    marginLeft: theme.space1,
    marginBottom: -2,
  }),
  ({ className, right }) =>
    right
      ? <FaAngleRight className={className} size={15} />
      : <FaAngleDown className={className} size={15} />,
  p => Object.keys(p)
);

const NavItem = createComponent(
  ({ fill, inverse, vertically, right }) => ({
    float: !vertically && 'left',
    position: 'relative',
    flex: fill && '1 1',
    textAlign: fill ? 'center' : right && vertically && 'right',
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
      {pathname
        ? <Link to={pathname} inverse={inverse}>
          {title}
          {pages && !!pages.length && <Icon right={vertically} />}
        </Link>
        : <Placeholder onClick={onClick} inverse={inverse}>
          {title}
          {pages && !!pages.length && <Icon right={vertically} />}
        </Placeholder>}

      {pages &&
        !!pages.length &&
        props.renderNav({ ...props, inverse, vertically, pages, sub: true })}

      {Children.map(children, child =>
        cloneElement(child, { ...props, sub: true })
      )}
    </div>),
  p => Object.keys(p)
);
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** title/label */
  title: PropTypes.node.isRequired,
  /** path for react-router or undefined for placeholder */
  pathname: PropTypes.string,
  /** submenu is mega dropdown menu */
  mega: PropTypes.bool,
  /**  */
  onClick: PropTypes.func,
};
NavItem.defaultProps = {
  pathname: undefined,
  mega: false,
  onClick: () => {},
};
export default NavItem;
