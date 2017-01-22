import React, { Component } from 'react';
import { withRouter, resolveFieldValue, Link } from 'olymp';
import { Dropdown, Menu, Icon, Button } from 'antd';
import Sidebar from '../sidebar';

@withRouter
export default class CollectionListSidebar extends Component {
  getLink = ({ id }) => {
    const { collection, location } = this.props;
    const { pathname } = location;

    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: id } };
  }

  resolveFieldValue = (item, field, { defaultFieldName, defaultValue }, fieldProps) => {
    const { collection } = this.props;
    const { specialFields, fields } = collection;

    const fieldName = (!!specialFields[field] && specialFields[field].field) || defaultFieldName;
    const value = item[fieldName] ? item[fieldName] : defaultValue;
    const meta = fields.find(x => x.name === fieldName);

    return resolveFieldValue(value, meta, fieldProps);
  }

  resolveColor = (item) => {
    const { collection } = this.props;
    const { specialFields, fields } = collection;

    const colorFieldName = (!!specialFields.color && specialFields.color.field) || 'farbe';
    const colorFieldType = fields.find(x => x.name === colorFieldName);
    return colorFieldType && colorFieldType.type.name !== 'Color' && specialFields.color && item[colorFieldName] ?
        specialFields.color.arg0 :
          item[colorFieldName];
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
    const { router, id, collection, isLoading, refetch } = this.props;
    const items = (this.props.items || []).map((item) => {
      const name = this.resolveFieldValue(item, 'name', { defaultFieldName: 'name', defaultValue: item.kurz || item.name || 'Kein Titel' });
      const image = this.resolveFieldValue(item, 'image', { defaultFieldName: 'bild' }, { width: 60, ratio: 1, style: { float: 'left' } });
      const description = this.resolveFieldValue(item, 'description', {});
      const color = this.resolveColor(item);

      return {
        name,
        image,
        description,
        color,
        menu: <Dropdown overlay={this.renderMenu(item)}><Icon type="edit" /></Dropdown>,
        isActive: item.id === id,
        onClick: () => router.push(this.getLink(item)),
      };
    });

    const menu = (
      <Menu onClick={() => console.log('Click')}>
        <Menu.Item key="1">Import</Menu.Item>
        <Menu.Item key="2">Export</Menu.Item>
      </Menu>
    );
    return (
      <Sidebar collection={collection} items={items} isLoading={isLoading} refetch={refetch} activePage={collection.name}>
        <Dropdown.Button overlay={menu} type="primary">
          <Link to={this.getLink({ id: null })}><Icon type="plus" /></Link>
        </Dropdown.Button>
      </Sidebar>
    );
  }
}
