import React, { Component } from 'react';
import { cn, NavLink, withRouter } from 'olymp';
import { Icon } from 'antd';
import './navbar.less';

@withRouter
export default class Navbar extends Component {
  getMenu = (page, isSubmenu) => {
    const { router, location } = this.props;
    const { query, pathname } = location;
    const navigation = !!query && query.navigation

    let matches = [];
    page.children.forEach((e) => {
      matches = matches.concat(e.children.filter(child => child.id === navigation));
    });
    const visible = navigation === page.id || !!matches.length;

    const submenu = page.children && page.children.length ? (
      <ul className="dropdown-menu">
        {page.children.map(child => this.getMenu(child, true))}
      </ul>
    ) : null;

    return (
      <li className={cn(isSubmenu ? 'dropdown-item' : 'nav-item', page.path === location.pathname ? 'active' : null, visible ? 'focus' : null)} key={page.id}>
        {page.blocks ? (
          <NavLink to={page.path} className="nav-link">
            {page.name}
          </NavLink>
        ) : (
          <span
            onClick={() => router.push({ pathname, query: { navigation: page.id } })}
            className="nav-link"
          >
            {page.name}
          </span>
        )}
        {submenu}
      </li>
    );
  }

  // RAAH: brand/navbar-collapse col-md-..., Kontakt => Kontakt/Impressum, a.active => li.active, navbar-toggler-left
  render() {
    const { readOnly, router, brand, fill, pages, location } = this.props;
    const { query, pathname } = location;
    const navigation = !!query && query.navigation !== undefined; // null/page.id => true, undefined => false

    return (
      <nav className="navbar navbar-inverse navbar-toggleable-sm">
        {brand ? <NavLink to="/" className="navbar-brand">{brand}</NavLink> : null}

        <button
          onClick={() => router.push({ pathname, query: { navigation: navigation ? undefined : null } })}
          className="navbar-toggler hidden-md-up"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse${!navigation ? ' hidden-sm-down' : ''}`}>
          <ul className={cn('navbar-nav', fill ? 'nav-fill' : null)} style={{ width: fill ? '100%': 'auto'}}>
            {pages.map(page => this.getMenu(page))}
            {!readOnly ? (
              <li className="nav-item">
                <NavLink to={{ ...location, query: { '@new-page': null } }} className="nav-link">
                  <Icon type="plus-circle" />
                </NavLink>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}
