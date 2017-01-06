import React, { Component, PropTypes } from 'react';
import { withApollo } from 'react-apollo';
import capitalize from 'lodash/upperFirst';
import gql from 'graphql-tag';
import { Table, Menu, Icon, Affix, Dropdown, Button } from 'antd';
import { withRouter, withCollection, withItems } from '../../decorators';
import { Link } from 'olymp';

@withItems()
@withApollo
@withRouter
export default class CollectionListSidebar extends Component {
  handleClick = (e) => {
    const { location, router, collection } = this.props;
  }

  render() {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items } = this.props;
    return (
      <div>
        <Menu defaultOpenKeys={['p']} mode="inline" onClick={this.handleClick}>
          <div className="p-1" style={{ textAlign: 'center' }}>
            Test
          </div>
          <Menu.SubMenu key="p" title="Veröffentlicht">
            {items && items.map(item =>
              <Menu.Item key={item.id}>
                <Link to={{ ...location, query: { ...location.query, [`@${collection.name}`]: item.id } }}>{item.name}</Link>
              </Menu.Item>)}
          </Menu.SubMenu>
          <Menu.SubMenu key="d" title="Entwurf">
            <Menu.Item key="d0">SubMenuItem</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}
