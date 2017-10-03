import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from 'olymp-fela';
import cn from 'classnames';
import Link from './link';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'olymp-icons';

const Icon = createComponent(
  ({ theme, inverse }) => ({
    fill: `${inverse ? theme.light2 : theme.color}`,
    // centerY: true,
    // right: theme.space2,
  }),
  ({ className, vertically, right }) =>
    (!vertically ? (
      <FaAngleDown className={className} size={15} />
    ) : right ? (
      <FaAngleLeft className={className} size={15} />
    ) : (
      <FaAngleRight className={className} size={15} />
    )),
  p => Object.keys(p),
);

const NavItem = createComponent(
  ({ theme, fill, inverse, vertically, right, pages }) => ({
    hasFlex: {
      flex: fill && '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: fill ? 'column' : right && vertically && 'row-reverse',
    },
    width: vertically && '100%',
    float: !vertically && 'left',
    position: 'relative',
    paddingY: theme.space2,
    paddingX: theme.space2,
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
      paddingX: theme.space1,
    },
  }),
  ({
    className,
    pathname,
    children,
    title,
    inverse,
    vertically,
    right,
    pages,
    onClick,
    level,
    renderItem,
    mega,
    renderNav,
    isMega,
    renderItemWrapper: Wrapper,
    renderItemLink,
  }) => (
    <Wrapper className={cn(className, 'o-nav-item', `o-nav-item-lvl-${level}`)}>
      <Link to={pathname} onClick={onClick} inverse={inverse} renderItemLink={renderItemLink}>
        {title}
        {pages &&
        !!pages.length && <Icon vertically={vertically} right={right} inverse={inverse} />}
      </Link>

      {pages &&
        !!pages.length &&
        renderNav({
          inverse,
          vertically,
          right,
          renderItem,
          renderNav,
          renderItemLink,
          mega,
          isMega,
          renderItemWrapper: Wrapper,
          level: level + 1,
          pages,
          sub: true,
        })}
      {Children.map(children, child =>
        cloneElement(child, {
          inverse,
          vertically,
          right,
          sub: true,
          renderItem,
          renderItemWrapper: Wrapper,
          renderItemLink,
          mega,
          isMega,
          renderNav,
          level: level + 1,
        }),
      )}
    </Wrapper>
  ),
  p => Object.keys(p),
);
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** title/label */
  title: PropTypes.node.isRequired,
  /** path for router or undefined for placeholder */
  to: PropTypes.string,
  /** submenu is mega dropdown menu */
  mega: PropTypes.func,
  /**  */
  onClick: PropTypes.func,
};
NavItem.defaultProps = {
  level: 0,
  to: undefined,
  mega: null,
  onClick: undefined,
  renderItemWrapper: props => <div {...props} />,
};
export default NavItem;
