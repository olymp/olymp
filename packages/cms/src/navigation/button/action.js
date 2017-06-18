import React, { Component } from 'react';
import { Menu } from 'antd';
import capitalize from 'lodash/upperFirst';
import uncapitalize from 'lodash/lowerFirst';
import { Link } from 'olymp';

const wrapper = children =>
  (<Menu.SubMenu key={key} title={capitalize(key)}>
    {children}
  </Menu.SubMenu>);

export default class CmsAction extends Component {
  handleClick = ({ key }) => {
    const { auth } = this.props;

    if (key === 'logout') {
      auth.logout();
    }
  };

  render() {
    const { location, collections, query, pathname } = this.props;

    return (
      <Menu
        style={{
          minWidth: 150,
          borderRadius: '4px',
          boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
        }}
        onClick={this.handleClick}
      >
        {Object.keys(collections).map(
          key =>
            collections[key].length === 1
              ? (collections[key] || []).map(({ name, title }) =>
                (<Menu.Item key={`/@/${name}`}>
                  <Link
                    to={{
                      pathname,
                      query: { [`@${uncapitalize(name)}`]: null },
                    }}
                  >
                    {capitalize(title || name)}
                  </Link>
                </Menu.Item>)
                )
              : wrapper(groupItem)
        )}
        <Menu.Divider />
        <Menu.Item key="media">
          <Link to={{ pathname, query: { '@media': null } }}>
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
          <Link to={{ pathname, query: { profile: null } }}>
            Profil
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.SubMenu title="Gerät">
          <Menu.Item key="device">
            <Link
              to={{ pathname, query: { ...query, '@deviceWidth': undefined } }}
            >
              Standart
            </Link>
          </Menu.Item>
          <Menu.Item key="device-768">
            <Link to={{ pathname, query: { ...query, '@deviceWidth': 768 } }}>
              Tablet
            </Link>
          </Menu.Item>
          <Menu.Item key="device-375">
            <Link to={{ pathname, query: { ...query, '@deviceWidth': 375 } }}>
              Smartphone
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.Item key="logout">Abmelden</Menu.Item>
      </Menu>
    );
  }
}
