import React, { Component } from 'react';
import { withRouter, withAuth, Link } from 'olymp';
import { Menu } from 'antd';
import capitalize from 'lodash/upperFirst';
import uncapitalize from 'lodash/lowerFirst';

@withAuth
@withRouter
export default class CMSMenu extends Component {
  handleClick = ({ key }) => {
    const { auth } = this.props;

    if (key === 'logout') {
      auth.logout();
    }
  };

  render() {
    const { location, collections } = this.props;
    const { pathname } = location;

    return (
      <Menu style={{ minWidth: 150, borderRadius: '4px', boxShadow: '0 1px 6px rgba(0, 0, 0, .2)' }} onClick={this.handleClick}>
        {Object.keys(collections).map((key) => {
          const wrapper = children => (
            <Menu.SubMenu key={key} title={capitalize(key)}>
              {children}
            </Menu.SubMenu>
          );
          const groupItem = (
            (collections[key] || []).map(({ name, title }) => (
              <Menu.Item key={`/@/${name}`}>
                <Link to={{ pathname, query: { [`@${uncapitalize(name)}`]: null } }}>
                  {capitalize(title || name)}
                </Link>
              </Menu.Item>
            ))
          );

          return collections[key].length === 1 ? groupItem : wrapper(groupItem);
        })}
        <Menu.Divider />
        <Menu.Item key="mediathek">
          <Link to={{ pathname, query: { '@mediathek': null } }}>
            Mediathek
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="users" disabled>Benutzer</Menu.Item>
        <Menu.Item key="analytics" disabled>Statistik</Menu.Item> */}
        <Menu.Item key="pages">
          <Link to={{ pathname, query: { '@pages': null } }}>
            Seiten
          </Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to={{ pathname, query: { '@settings': null } }}>
            Einstellungen
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="user" disabled>Profil</Menu.Item> */}
        <Menu.Divider />
        <Menu.Item key="logout">Abmelden</Menu.Item>
      </Menu>
    );
  }
}