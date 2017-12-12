import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'olymp-router';
import cn from 'classnames';

// Based on http://w3bits.com/labs/css-responsive-nav/
// Nav styles
const styles = ({ theme }) => ({
  '> ul': {
    display: 'none',
  },
  '& ul': {
    // margin: `0 -0.5em`,
    margin: 0,
    padding: 0,
  },
  '> #tm:checked + .o-nav-menu': {
    display: 'block',
  },
  '& input[type="checkbox"]': {
    display: 'none',
  },
  '& ul span.drop-icon': {
    display: 'none',
  },
  '& ul.sub-menu': {
    backgroundColor: theme.light,
    boxShadow: theme.boxShadow,
    display: 'none',
    '& a:hover': {},
    '& li:last-child': {
      borderWidth: 0,
    },
    '& a': {
      padding: theme.padding1,
    },
  },
  '& li': {
    position: 'relative',
    display: 'block',
    '& label.drop-icon': {
      position: 'absolute',
      right: '1.5em',
      top: '1.25em',
    },
  },
  '& .toggle': {
    position: 'relative',
    display: 'block',
    padding: '1em 1.5em',
    '& span.drop-icon': {
      borderRadius: '50%',
      width: '1em',
      height: '1em',
      textAlign: 'center',
    },
    '& .drop-icon': {
      position: 'absolute',
      right: '1.5em',
      top: '1.25em',
    },
  },
  '& a': {
    position: 'relative',
    display: 'block',
    padding: '1em 0.5em',
    transition: 'all .125s ease-in-out',
    onHover: {},
  },
  '& li.brand > a': {
    padding: 0,
  },
  '& input[type="checkbox"]:checked + ul.sub-menu': {
    display: 'block',
  },
  '& label.drop-icon': {
    borderRadius: '50%',
    width: '1em',
    height: '1em',
    textAlign: 'center',
  },
  '& .drop-icon': {
    lineHeight: 1,
  },
  ifSmallDown: {
    '& li': {
      width: '33.333%',
    },
    '& ul.sub-menu li': {
      width: 'auto',
    },
  },
  ifMediumUp: {
    '> ul': {
      display: 'block',
      overflow: 'visible',
    },
    '& .toggle': {
      display: 'none',
    },
    '& label.drop-icon': {
      display: 'none',
    },
    '& ul span.drop-icon': {
      display: 'inline-block',
    },
    '& li': {
      float: 'left',
      borderWidth: '0 1px 0 0',
    },
    '& li.right': {
      float: 'right',
      '> ul': {
        left: 'initial',
        right: 0,
        '> li > ul.sub-menu': {
          top: 0,
          left: 'initial',
          right: '100%',
        },
      },
    },
    '& li:hover > ul': {
      display: 'block',
    },
    '& ul.sub-menu': {
      borderWidth: 0,
      margin: 0,
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '15em',
      zIndex: 3000,
      display: 'none',
      '> li > ul.sub-menu': {
        top: 0,
        left: '100%',
      },
      '& li': {
        float: 'none',
        borderWidth: '0 0 1px',
      },
    },
    '& input[type="checkbox"]:checked + .sub-menu': {
      display: 'none',
    },
  },
});

// Root navigation
const Nav = createComponent(styles, ({ className, children }) => (
  <nav className={cn(className, 'o-nav')}>
    <label htmlFor="tm" className="toggle">
      Navigation <span className="drop-icon">▾</span>
    </label>
    <input type="checkbox" id="tm" />
    <ul className="o-nav-menu clearfix">{children}</ul>
  </nav>
));

// Item Label (MenuItem + Item)
export const ItemLabel = ({ renderLabel: Render, ...props }) => {
  if (props.href) {
    return <a href={props.href} onClick={props.onClick}>{props.children}</a>;
  } else if (props.to) {
    return <Link to={props.to} onClick={props.onClick}>{props.children}</Link>;
  } else if (Render && typeof renderLabel === 'function') {
    return Render(props);
  } else if (Render) {
    return <Render {...props} />;
  }
  return <a onClick={props.onClick}>{props.children}</a>;
};

// List Item
export const Item = ({ className, style, children, level = 0, ...rest }) => (
  <li
    className={cn('o-nav-item', `o-nav-item-lvl-${level}`, className)}
    style={style}
  >
    <ItemLabel {...rest}>{children}</ItemLabel>
  </li>
);

// Menu Item (Submenu)
export const MenuItem = ({
  className,
  style,
  children,
  title,
  level = 0,
  ...rest
}) => (
  <li className={cn('o-nav-item', 'o-nav-subitem', `o-nav-item-lvl-${level}`, className)} style={style}>
    <ItemLabel {...rest}>
      {title}
      <span className="drop-icon">▾</span>
      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm2">
        ▾
      </label>
    </ItemLabel>
    <input type="checkbox" className="sm2" />
    <ul className="sub-menu">
      {Children.map(children, child =>
        cloneElement(child, { level: level + 1 }),
      )}
    </ul>
  </li>
);

// Menu Item (Submenu)
export const Right = ({ children, ...rest }) =>
  Children.map(children, (child, i) =>
    cloneElement(child, { ...rest, className: 'right', key: i }),
  ).reverse();

Nav.Item = Item;
Nav.Menu = MenuItem;
Nav.Right = Right;
Nav.Example = () => (
  <Nav>
    <Nav.Item href="#">Sample</Nav.Item>
    <Nav.Menu title="2-level DD">
      <Nav.Item href="#">Sample 2.1</Nav.Item>
      <Nav.Menu title="Item 2.2">
        <Nav.Item href="#">Sample 2.2.1</Nav.Item>
        <Nav.Item href="#">Sample 2.2.2</Nav.Item>
        <Nav.Item href="#">Sample 2.2.3</Nav.Item>
      </Nav.Menu>
      <Nav.Item href="#">Sample 3.4</Nav.Item>
    </Nav.Menu>
    <Nav.Right>
      <Nav.Item href="#">Right</Nav.Item>
      <Nav.Menu title="Right 2">
        <Nav.Item href="#">Sample 2.2.1</Nav.Item>
        <Nav.Item href="#">Sample 2.2.2</Nav.Item>
        <Nav.Item href="#">Sample 2.2.3</Nav.Item>
      </Nav.Menu>
    </Nav.Right>
  </Nav>
);

export default Nav;
