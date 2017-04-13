import React, { Component } from 'react';
import Footer from './footer';
import MenuController from './header';
import Logo from './logo';
import sortBy from 'lodash/sortBy';
import { Affix } from 'antd';
import { Link, NavLink, styled } from 'olymp';

export const Header = styled(({ sticky }) => ({
  backgroundColor: 'white',
  boxShadow: sticky && '0 3px 11px 0 rgba(0,0,0,.06)',
}), 'nav', p => p);

export const Container = styled(({ }) => ({
  display: 'flex',
  position: 'relative',
  minHeight: '100vh',
  flexDirection: 'column',
  '> :not(:first-child):not(:last-child)': {
    flex: 1,
  },
}), ({ className, children, innerRef }) => <div className={className} children={children} ref={innerRef} />, p => p);

export default class Layout extends Component {
  static defaultProps = {
    pages: [],
  }
  render() {
    const { pages, color, title, text, location, links, children, ...rest } = this.props;
    const nav = pages.map(x => x.children)[0];

    return (
      <Container className="frontend" innerRef={node => { if (node) this.container = node }}>
        <Header className="container navbar-collapse">
          <Link to="/" className="navbar-brand">
            <Logo color={color} title={title} text={text} />
          </Link>
          <MenuController renderMenu={this.renderNav} items={nav} className="nav navbar-nav pull-right sf-menu l_tinynav1 sf-js-enabled" location={location}>
            {links && links.map(({ href, color }) => <li className="nav-item" key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="item active">
                <Logo icon color={color} />
              </a>
            </li>)}
          </MenuController>
        </Header>
        {children}
        <Footer {...this.props} />
      </Container>
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

