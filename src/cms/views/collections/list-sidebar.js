import React, { Component } from 'react';
import { withRouter, Link } from 'olymp';
import { Dropdown, Menu, Icon, Button } from 'antd';
import { FieldValue, collectionToCsvDownload } from 'olymp/cms-core';
import Sidebar from '../sidebar';
import { getFilterMenu } from './filter';

const states = {
  ALL: 'Alle',
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

@withRouter
export default class CollectionListSidebar extends Component {
  getLink = ({ id }) => {
    const { typeName, location } = this.props;
    const { pathname } = location;

    return { pathname, query: { ...location.query, [`@${typeName.toLowerCase()}`]: id } };
  }

  resolveFieldValue = (item, field, { defaultFieldName, defaultValue }, fieldProps) => {
    const fieldName = this.resolveFieldName(item, field, defaultFieldName);
    const meta = this.resolveField(fieldName);

    // Wenn Feld ein Range ist
    const startField = this.resolveFieldName(item, 'start');
    const endField = this.resolveFieldName(item, 'end');
    if (startField && endField && fieldName === startField) {
      const start =!!item[startField] && (
        <FieldValue value={item[startField]} meta={meta} fieldProps={fieldProps} />
      );
      const end = !!item[endField] && (
        <FieldValue value={item[endField]} meta={meta} fieldProps={fieldProps} />
      );

      if (start && end) {
        return <span>{start} bis<br />{end}</span>;
      } else if (start) {
        return <span>Ab {start}</span>;
      } if (end) {
        return <span>Bis {end}</span>;
      }
    }

    return (
      <FieldValue value={item[fieldName] || defaultValue} meta={meta} fieldProps={fieldProps} />
    );
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
    <Menu>
      <Menu.Item>
        <Link to={this.getLink({ id })}>Bearbeiten</Link>
      </Menu.Item>
      {/* <Menu.Item disabled>
        Kopieren
      </Menu.Item>
      <Menu.Item disabled>
        {state !== 'REMOVED'
          ? 'Löschen'
          : 'Wiederherstellen'
        }
      </Menu.Item> */}
    </Menu>
  )

  render() {
    const { router, id, collection, isLoading, refetch, typeName } = this.props;
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
        extra: <Link to={this.getLink({ id })}><Icon type="edit" /></Link>, // <Dropdown overlay={this.renderMenu(item)}><Icon type="edit" /></Dropdown>,
        isActive: item.id === id,
        onClick: () => router.push(this.getLink(item)),
      };
    });

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <a href="javascript:;" onClick={() => router.push(this.getLink({ id: null }))}>Hinzufügen</a>
        </Menu.Item>
        {/* <Menu.Item key="2" disabled>Import</Menu.Item> */}
        <Menu.Item key="3">
          <a href="javascript:;" onClick={() => collectionToCsvDownload(collection, this.props.items)}>Export</a>
        </Menu.Item>
      </Menu>
    );
    const actions = (
      <Dropdown overlay={menu}>
        <Button shape="circle" size="large" onClick={() => router.push(this.getLink({ id: null }))}>
          <Icon type="plus" />
        </Button>
      </Dropdown>
    );

    return (
      <Sidebar
        items={items}
        isLoading={isLoading}
        refetch={refetch}
        activePage={typeName}
        actions={actions}
        filter={onFilter => getFilterMenu(collection, onFilter)}
        states={states}
      />
    );
  }
}
