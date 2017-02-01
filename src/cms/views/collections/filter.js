import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import upperFirst from 'lodash/upperFirst';

const getMenuItem = (field) => {
  if (['Date', 'DateTime'].includes(field.type.name)) {
    return (
      <Menu.SubMenu key={field.name} title={upperFirst(field.name)}>
        <Menu.Item key={`${field.name}-eq`}>Gleich</Menu.Item>
        <Menu.Item key={`${field.name}-ne`}>Nicht gleich</Menu.Item>
        <Menu.Item key={`${field.name}-gt`}>Größer als</Menu.Item>
        <Menu.Item key={`${field.name}-gte`}>Größer gleich</Menu.Item>
        <Menu.Item key={`${field.name}-lt`}>Kleiner als</Menu.Item>
        <Menu.Item key={`${field.name}-lte`}>Kleiner gleich</Menu.Item>
        <Menu.Item key={`${field.name}-day`}>Tag</Menu.Item>
        <Menu.Item key={`${field.name}-year`}>Jahr</Menu.Item>
        <Menu.Item key={`${field.name}-month`}>Monat</Menu.Item>
        <Menu.Item key={`${field.name}-between`}>Zwischen</Menu.Item>
        <Menu.Item key={`${field.name}-null`}>Leer</Menu.Item>
      </Menu.SubMenu>
    );
  }
  if (['Int'].includes(field.type.name)) {
    return (
      <Menu.SubMenu key={field.name} title={upperFirst(field.name)}>
        <Menu.Item key={`${field.name}-eq`}>Gleich</Menu.Item>
        <Menu.Item key={`${field.name}-ne`}>Nicht gleich</Menu.Item>
        <Menu.Item key={`${field.name}-gt`}>Größer als</Menu.Item>
        <Menu.Item key={`${field.name}-gte`}>Größer gleich</Menu.Item>
        <Menu.Item key={`${field.name}-lt`}>Kleiner als</Menu.Item>
        <Menu.Item key={`${field.name}-lte`}>Kleiner gleich</Menu.Item>
        <Menu.Item key={`${field.name}-in`}>Einer von</Menu.Item>
        <Menu.Item key={`${field.name}-nin`}>Keiner von</Menu.Item>
        <Menu.Item key={`${field.name}-between`}>Zwischen</Menu.Item>
        <Menu.Item key={`${field.name}-null`}>Leer</Menu.Item>
      </Menu.SubMenu>
    );
  }
  if (['Float'].includes(field.type.name)) {
    return (
      <Menu.SubMenu key={field.name} title={upperFirst(field.name)}>
        <Menu.Item key={`${field.name}-eq`}>Gleich</Menu.Item>
        <Menu.Item key={`${field.name}-ne`}>Nicht gleich</Menu.Item>
        <Menu.Item key={`${field.name}-gt`}>Größer als</Menu.Item>
        <Menu.Item key={`${field.name}-gte`}>Größer gleich</Menu.Item>
        <Menu.Item key={`${field.name}-lt`}>Kleiner als</Menu.Item>
        <Menu.Item key={`${field.name}-lte`}>Kleiner gleich</Menu.Item>
        <Menu.Item key={`${field.name}-in`}>Einer von</Menu.Item>
        <Menu.Item key={`${field.name}-nin`}>Keiner von</Menu.Item>
        <Menu.Item key={`${field.name}-between`}>Zwischen</Menu.Item>
        <Menu.Item key={`${field.name}-null`}>Leer</Menu.Item>
      </Menu.SubMenu>
    );
  }
  if (['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(field.type.name)) {
    return (
      <Menu.SubMenu key={field.name} title={upperFirst(field.name)}>
        <Menu.Item key={`${field.name}-eq`}>Gleich</Menu.Item>
        <Menu.Item key={`${field.name}-ne`}>Nicht gleich</Menu.Item>
        <Menu.Item key={`${field.name}-in`}>Einer von</Menu.Item>
        <Menu.Item key={`${field.name}-nin`}>Keiner von</Menu.Item>
        <Menu.Item key={`${field.name}-startsWith`}>Beginnt mit</Menu.Item>
        <Menu.Item key={`${field.name}-contains`}>Enthält</Menu.Item>
        <Menu.Item key={`${field.name}-null`}>Leer</Menu.Item>
      </Menu.SubMenu>
    );
  }
  if (field.type && field.type.kind === 'EnumTypeDefinition') {
    return (
      <Menu.SubMenu key={field.name} title={upperFirst(field.name)}>
        <Menu.Item key={`${field.name}-eq`}>Gleich</Menu.Item>
        <Menu.Item key={`${field.name}-ne`}>Nicht gleich</Menu.Item>
        <Menu.Item key={`${field.name}-in`}>Einer von</Menu.Item>
        <Menu.Item key={`${field.name}-nin`}>Keiner von</Menu.Item>
        <Menu.Item key={`${field.name}-null`}>Leer</Menu.Item>
      </Menu.SubMenu>
    );
  }
  return null;
};

export const handleFilterClick = (collection, onFilter, key) => {
  if (!onFilter || !key) return;
  const field = key.indexOf('-') !== -1 && collection.fields.find(x => x.name === key.split('-')[0]);
  if (field) {
    const type = key.split('-')[1];
    let value = prompt('Wert', '');
    if (value) {
      if (['Float', 'Date', 'DateTime'].includes(field.type.name)) value = parseFloat(value);
      if (['Int'].includes(field.type.name)) value = parseInt(value);
      const query = { [field.name]: { [type]: value } };
      onFilter(query, field);
    }
  }
};

export const getFilterMenu = (collection, onFilter) => (
  <Menu onClick={e => handleFilterClick(collection, onFilter, e.key)}>
    {collection && collection.fields.filter(({ name }) => name !== 'id').map(getMenuItem)}
  </Menu>
  );

export default class FilterComponent extends Component {
  render() {
    const { collection, onFilter, style, className } = this.props;

    return (
      <Dropdown overlay={getFilterMenu(collection, onFilter)}>
        <Button style={style} className={className}>Filter</Button>
      </Dropdown>
    );
  }
}
