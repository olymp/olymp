import React, { Component } from 'react';
import { gql, graphql, withRouter, Link } from 'olymp';
import { Dropdown, Menu, Icon } from 'antd';
import Sidebar from '../sidebar';

const states = {
  PUBLISHED: 'Öffentlich',
  REMOVED: 'Papierkorb',
};
const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';

@withRouter
@graphql(gql`
  query fileList {
    items: fileList {
      ${attributes}
    }
  }
`)
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
    const { router, id, isLoading, refetch, data } = this.props;

    const items = (data.items || []).map((item) => {
      const name = item.caption;
      const description = !!item.source && `© ${item.source}`;
      const image = item;
      const color = undefined;

      return {
        name,
        description,
        image,
        color,
        extra: <Dropdown overlay={this.renderMenu(item)}><Icon type="edit" /></Dropdown>,
        isActive: item.id === id,
        onClick: () => router.push(this.getLink(item)),
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
