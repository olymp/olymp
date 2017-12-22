import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Nav } from 'olymp-fela';
import PrefetchLink from './prefetch-link';

const toggleComponent = ({ toggled, onToggle, ...props }) => (
  <Link updateQuery={{ toggled: toggled ? undefined : null }} {...props} />
);

const fromPages = items =>
  items.map(item => {
    if (item.name === 'Leistungen') {
      const childs = fromPages(item.children);
      return (
        <Nav.Mega
          pathname={item.pathname || undefined}
          renderLabel={PrefetchLink}
          title={item.name}
          key={item.id}
          columns={childs.length}
        >
          {childs}
        </Nav.Mega>
      );
    }
    if (item.children && item.children.length) {
      return (
        <Nav.Menu
          pathname={item.pathname || undefined}
          renderLabel={PrefetchLink}
          title={item.name}
          key={item.id}
        >
          {fromPages(item.children)}
        </Nav.Menu>
      );
    }
    return (
      <Nav.Item
        pathname={item.pathname}
        key={item.id}
        renderLabel={PrefetchLink}
      >
        {item.name}
      </Nav.Item>
    );
  });

const PrefetchItem = props => (
  <Nav.Item
    {...props}
    renderLabel={props.pathname ? PrefetchLink : undefined}
  />
);

const CmsNav = connect(({ location }) => ({
  toggled: location.query.toggled !== undefined,
  renderItemLink: PrefetchLink,
  toggleComponent,
}))(({ children }) => <Nav>{children}</Nav>);
CmsNav.fromPages = fromPages;
CmsNav.PrefetchItem = PrefetchItem;
CmsNav.Item = Nav.Item;
CmsNav.Menu = Nav.Menu;
CmsNav.Right = Nav.Right;
export default CmsNav;
