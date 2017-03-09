import React, { Component } from 'react';
import Footer from './footer';
import MenuController from './header';
import Logo from './logo';
import sortBy from 'lodash/sortBy';
import { Affix } from 'antd';
import { Link, NavLink } from 'olymp';

export default props => (
  <div className="frontend">
    <div className="frontend-container">
      <Header {...props} />
      {props.children}
    </div>
    <Footer {...props} />
  </div>
);

class Header extends Component {
  render() {
    const { pages, color, title, text, location, links, ...rest } = this.props;
    const nav = {};
    Object.keys(pages).forEach((key) => {
      const page = pages[key];
      if (!nav[page.menu || 'main']) nav[page.menu || 'main'] = [];
      nav[page.menu || 'main'].push(page);
    });

    return (
      <Affix className="gz-navigation">
        <nav className="container navbar-collapse">
          <Link to="/" className="navbar-brand">
            <Logo color={color} title={title} text={text} />
          </Link>
          <MenuController renderMenu={this.renderNav} items={nav.main} className="nav navbar-nav pull-right sf-menu l_tinynav1 sf-js-enabled" location={location}>
            {links && links.map(({ href, color }) => <li className="nav-item" key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="item active">
                <Logo icon color={color} />
              </a>
            </li>)}
          </MenuController>
        </nav>
      </Affix>
    );
  }

  renderNav = (props) => {
    if (props.page && props.page.slug === '/zentrum') {
      const groups = sortBy(this.props.einrichtungen, ['kurz', 'name']).reduce((state, item) => {
        if (!state[item.art || 'PRAXIS']) state[item.art || 'PRAXIS'] = [];
        if (item.slug) state[item.art || 'PRAXIS'].push(item);
        return state;
      }, {});
      return (
        <div className="dropdown-menu sf-mega" style={{ width: '700px' }}>
          <div className="col-md-3">
            <h6>{props.page.name}</h6>
            <ul className="list-unstyled">
              {props.page.children.map(item => (
                <li style={{ position: 'relative' }} key={item.id}>
                  <NavLink to={item.slug || '/'} className="item" activeClassName="active">
                    {item.kurz || item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {Object.keys(groups).map(groupKey => (
            <div key={groupKey} className="col-md-3">
              <h6>{groupKey.charAt(0) + groupKey.substr(1).toLowerCase()}</h6>
              <ul className="list-unstyled">
                {groups[groupKey].map(item => (
                  <li style={{ position: 'relative' }} key={item.id}>
                    <NavLink to={item.slug || '/'} className="item" activeClassName="active">
                      {item.kurz || item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  }
}

