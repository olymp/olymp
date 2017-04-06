import React, { Component } from 'react';
import { Menu } from 'antd';
import capitalize from 'lodash/upperFirst';
import uncapitalize from 'lodash/lowerFirst';
import { Link } from 'olymp';

const wrapper = children => (
  <Menu.SubMenu key={key} title={capitalize(key)}>
    {children}
  </Menu.SubMenu>
);

export default class CmsAction extends Component {
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
        <Menu.Item key="edit">
          <Link to={{ pathname, query: { '@page': null } }}>
            Bearbeiten
          </Link>
        </Menu.Item>
        <Menu.Divider />
        {Object.keys(collections).map((key) => collections[key].length === 1 ? (
            (collections[key] || []).map(({ name, title }) => (
              <Menu.Item key={`/@/${name}`}>
                <Link to={{ pathname, query: { [`@${uncapitalize(name)}`]: null } }}>
                  {capitalize(title || name)}
                </Link>
              </Menu.Item>
            ))
          ) : wrapper(groupItem)
        )}
        <Menu.Divider />
        <Menu.Item key="mediathek">
          <Link to={{ pathname, query: { '@mediathek': null } }}>
            Mediathek
          </Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to={{ pathname, query: { '@users': null } }}>
            Benutzer
          </Link>
        </Menu.Item>
        <Menu.Item key="analytics" disabled>Statistik</Menu.Item>
        <Menu.Item key="settings">
          <Link to={{ pathname, query: { '@settings': null } }}>
            Einstellungen
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={{ pathname, query: { 'profile': null } }}>
            Profil
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">Abmelden</Menu.Item>
      </Menu>
    );
  }
}
