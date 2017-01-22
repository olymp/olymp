import React, { Component } from 'react';
import { withRouter, Link } from 'olymp';
import { Dropdown, Menu, Icon } from 'antd';
import Sidebar from '../sidebar';

const states = {
  PUBLISHED: 'Öffentlich',
  REMOVED: 'Papierkorb',
};

@withRouter
export default class MediaListSidebar extends Component {
  getLink = ({ id }) => {
    const { location } = this.props;
    const { pathname } = location;

    return { pathname, query: { ...location.query, ['@media']: id } };
  }

  renderMenu = ({ id, state }) => (
    <Menu>
      <Menu.Item>
        <Link to={this.getLink({ id })}>Bearbeiten</Link>
      </Menu.Item>
      <Menu.Item disabled>
        Kopieren
      </Menu.Item>
      <Menu.Item disabled>
        {state !== 'REMOVED'
          ? 'Löschen'
          : 'Wiederherstellen'
        }
      </Menu.Item>
    </Menu>
  )

  render() {
    const { router, id, isLoading, refetch } = this.props;

    const items = (this.props.items || []).map(({ name, description, image }) => {
      return {
        name,
        description,
        image,
        isActive: false,
        onClick: () => {},
      };
    });

    const menu = (
      <Menu>
        <Menu.Item key="1">Import</Menu.Item>
        <Menu.Item key="2">Export</Menu.Item>
      </Menu>
    );
    const actions = (
      <Dropdown.Button overlay={menu}>
        <Icon type="plus" />
      </Dropdown.Button>
    );

    return (
      <Sidebar
        items={items}
        isLoading={isLoading}
        refetch={refetch}
        activePage="media"
        actions={actions}
        filter={undefined}
        states={states}
      />
    );
  }
}
