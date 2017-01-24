import React, { Component } from 'react';
import { withRouter, Link } from 'olymp';
import { Dropdown, Menu, Icon } from 'antd';
import { resolveFieldValue } from '../../edits';
import Sidebar from '../sidebar';
import { getFilterMenu } from './filter';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

@withRouter
export default class CollectionListSidebar extends Component {
  getLink = ({ id }) => {
    const { collection, location } = this.props;
    const { pathname } = location;

    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: id } };
  }

  resolveFieldValue = (item, field, { defaultFieldName, defaultValue }, fieldProps) => {
    const fieldName = this.resolveFieldName(item, field, defaultFieldName);
    const meta = this.resolveField(fieldName);

    return resolveFieldValue(item[fieldName] || defaultValue, meta, fieldProps);
  }

  resolveFieldName = (item, field, defaultFieldName) => {
    const { collection } = this.props;
    const { specialFields } = collection;

    return (!!specialFields[field] && specialFields[field].field) || defaultFieldName;
  }

  resolveField = (fieldName) => {
    const { collection } = this.props;
    const { fields } = collection;

    return fields.find(x => x.name === fieldName);
  }

  renderMenu = ({ id, state }) => (
    <Menu openKeys={[]}>
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
    const { router, id, collection, isLoading, refetch } = this.props;
    const items = (this.props.items || []).map((item) => {
      const name = this.resolveFieldValue(item, 'name', { defaultFieldName: 'name', defaultValue: item.kurz || item.name || 'Kein Titel' });
      const description = this.resolveFieldValue(item, 'description', {});
      const image = item[this.resolveFieldName(item, 'image', 'bild')];
      const color = (
        collection.specialFields && collection.specialFields.color && !!item[collection.specialFields.color.field] && collection.specialFields.color.arg0
      ) || item[this.resolveFieldName(item, 'color', 'farbe')];

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
      <Menu openKeys={[]}>
        <Menu.Item key="1">Import</Menu.Item>
        <Menu.Item key="2">Export</Menu.Item>
      </Menu>
    );
    const actions = (
      <Dropdown.Button overlay={menu}>
        <Link to={this.getLink({ id: null })}><Icon type="plus" /></Link>
      </Dropdown.Button>
    );

    return (
      <Sidebar
        items={items}
        isLoading={isLoading}
        refetch={refetch}
        activePage={collection.name}
        actions={actions}
        filter={onFilter => getFilterMenu(collection, onFilter)}
        states={states}
      />
    );
  }
}
