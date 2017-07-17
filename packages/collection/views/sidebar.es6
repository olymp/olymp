import React, { Component } from 'react';
import { Link, withRouter } from 'olymp-router';
import { Dropdown, Menu, Icon, Button, Tabs } from 'antd';
import { Image } from 'olymp-cloudinary';
import { FieldValue } from '../components';
import { Sidebar, List } from 'olymp-ui';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Ablage',
  REMOVED: 'Papierkorb',
};

@withRouter
export default class CollectionListSidebar extends Component {
  getLink = ({ id }) => {
    const { typeName, location } = this.props;
    const { pathname } = location;

    return {
      pathname,
      query: { ...location.query, [`@${typeName.toLowerCase()}`]: id },
    };
  };

  resolveFieldValue = (
    item,
    field,
    { defaultFieldName, defaultValue },
    fieldProps
  ) => {
    const fieldName = this.resolveFieldName(item, field, defaultFieldName);
    const meta = this.resolveField(fieldName);

    // Wenn Feld ein Range ist
    const startField = this.resolveFieldName(item, 'start');
    const endField = this.resolveFieldName(item, 'end');
    if (startField && endField && fieldName === startField) {
      const start =
        !!item[startField] &&
        <FieldValue
          value={item[startField]}
          meta={meta}
          fieldProps={fieldProps}
        />;
      const end =
        !!item[endField] &&
        <FieldValue
          value={item[endField]}
          meta={meta}
          fieldProps={fieldProps}
        />;

      if (start && end) {
        return (
          <span>
            {start} bis<br />
            {end}
          </span>
        );
      } else if (start) {
        return (
          <span>
            Ab {start}
          </span>
        );
      }
      if (end) {
        return (
          <span>
            Bis {end}
          </span>
        );
      }
    }

    return (
      <FieldValue
        value={item[fieldName] || defaultValue}
        meta={meta}
        fieldProps={fieldProps}
      />
    );
  };

  resolveFieldName = (item, field, defaultFieldName) => {
    const { collection } = this.props;
    const { specialFields } = collection;

    return (
      (!!specialFields[field] && specialFields[field].field) || defaultFieldName
    );
  };

  resolveField = fieldName => {
    const { collection } = this.props;
    const { fields } = collection;

    return fields.find(x => x.name === fieldName);
  };

  renderMenu = ({ id, state }) =>
    <Menu>
      <Menu.Item>
        <Link to={this.getLink({ id })}>Bearbeiten</Link>
      </Menu.Item>
      <Menu.Item disabled>Kopieren</Menu.Item>
      <Menu.Item disabled>
        {state !== 'REMOVED' ? 'Löschen' : 'Wiederherstellen'}
      </Menu.Item>
    </Menu>;

  render() {
    const {
      router,
      id,
      pathname,
      query,
      collection,
      onSearch,
      searchText,
      onClose,
    } = this.props;
    const items = (this.props.items || []).map(item => {
      const name = this.resolveFieldValue(item, 'name', {
        defaultFieldName: 'name',
        defaultValue: item.kurz || item.name || 'Kein Titel',
      });
      const description = this.resolveFieldValue(item, 'description', {});
      const image = item[this.resolveFieldName(item, 'image', 'bild')];
      const color =
        (collection.specialFields &&
          collection.specialFields.color &&
          !!item[collection.specialFields.color.field] &&
          collection.specialFields.color.arg0) ||
        item[this.resolveFieldName(item, 'color', 'color')];

      return {
        id: item.id,
        name,
        description,
        image,
        color,
        extra: (
          <Dropdown overlay={this.renderMenu(item)}>
            <Icon type="edit" />
          </Dropdown>
        ),
        isActive: item.id === id,
        onClick: () => router.push(this.getLink(item)),
      };
    });

    const childs = items.map(item =>
      <List.Item
        image={
          (item.image || item.bild) &&
          <Image value={item.image || item.bild} width={37} height={37} />
        }
        active={item.id === id}
        label={item.name}
        onClick={item.onClick}
        key={item.id}
      />
    );
    return (
      <Sidebar
        header={
          <List.Filter
            placeholder="Filter ..."
            onChange={onSearch}
            value={searchText}
          />
        }
        leftButtons={
          onClose &&
          <Button.Group>
            <Sidebar.Button onClick={onClose} shape="circle" icon="close" />
          </Button.Group>
        }
        rightButtons={
          <Sidebar.Button
            onClick={() => router.push(this.getLink({ id: null }))}
            shape="circle"
            icon="plus"
          />
        }
        isOpen
        padding={0}
        title={collection.name}
        subtitle={`${collection.name} sichten und verwalten`}
      >
        {!searchText
          ? <Tabs
              size="small"
              defaultActiveKey={query.state || 'PUBLISHED'}
              onChange={state =>
                router.push({ pathname, query: { ...query, state } })}
            >
              {Object.keys(states).map(key =>
                <Tabs.TabPane tab={states[key]} key={key}>
                  {childs}
                </Tabs.TabPane>
              )}
            </Tabs>
          : childs}
      </Sidebar>
    );
  }
}
