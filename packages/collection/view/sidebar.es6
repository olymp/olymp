import React, { Component } from 'react';
import { createUpdateQuery } from 'olymp-router';
import { Collapse } from 'antd';
import { Image } from 'olymp-cloudinary';
import { get, sortBy } from 'lodash';
import { compose, withState, withPropsOnChange } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { createComponent } from 'olymp-fela';
import { connect } from 'react-redux';
import { getPrintableValue } from '../utils';

const Span = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    whiteSpace: 'nowrap',
    ellipsis: true,
  }),
  'div',
  [],
);

const enhance = compose(
  connect(null, dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  })),
  withState('sortBy', 'setSortBy'),
  withPropsOnChange(['collection'], ({ collection }) => ({
    sort: collection.fields
      .filter(
        x =>
          x.name.toLowerCase().indexOf('id') === -1 &&
          (x.type.name === 'String' ||
            x.type.name === 'Date' ||
            x.type.name === 'DateTime' ||
            x.type.kind === 'ENUM'),
      )
      .map(item => ({
        name: item.name,
        label: get(item, 'specialFields.label'),
      })),
  })),
  withPropsOnChange(['sortBy', 'items'], ({ sortBy: sort, items }) => ({
    items: sort ? sortBy(items, [sort]) : items,
  })),
  withPropsOnChange(
    ['collection', 'items', 'typeName', 'id'],
    ({ collection, items = [], updateQuery, typeName, id }) => ({
      items: items.map(item => (
        <List.Item
          image={
            item[collection.specialFields.imageField] && (
              <Image
                value={item[collection.specialFields.imageField]}
                width={37}
                height={37}
              />
            )
          }
          description={getPrintableValue(
            item[collection.specialFields.descriptionField],
            collection.fields.find(
              field => field.name === collection.specialFields.descriptionField,
            ),
          )}
          color={item[collection.specialFields.colorField]}
          active={item.id === id}
          label={item[collection.specialFields.nameField] || 'Kein Titel'}
          nowrap
          onClick={() =>
            updateQuery({ [`@${typeName.toLowerCase()}`]: item.id })}
          key={item.id}
        />
      )),
    }),
  ),
);

@enhance
export default class CollectionListSidebar extends Component {
  render() {
    const {
      collection,
      onSearch,
      searchText,
      expand,
      setSortBy,
      sort,
      items,
      updateQuery,
      typeName,
    } = this.props;

    return (
      <Sidebar
        width={350}
        onMouseEnter={expand}
        header={
          <List.Filter
            placeholder="Filter ..."
            onChange={onSearch}
            value={searchText}
            sort={sort}
            onSort={setSortBy}
          />
        }
        rightButtons={
          <Sidebar.Button
            onClick={() =>
              updateQuery({ [`@${typeName.toLowerCase()}`]: 'new' })}
            shape="circle"
            icon="plus"
          />
        }
        isOpen
        borderLess
        padding={0}
        title={get(collection, 'specialFields.label', collection.name)}
      >
        <Collapse
          accordion
          defaultActiveKey="PUBLISHED"
          onChange={state => updateQuery({ state })}
        >
          <Collapse.Panel header="Veröffentlicht" key="PUBLISHED">
            {items.length ? (
              items
            ) : (
              <Span>Kein veröffentlichtes Item vorhanden!</Span>
            )}
          </Collapse.Panel>
          <Collapse.Panel header="Ablage" key="DRAFT">
            {items.length ? (
              items
            ) : (
              <Span>Kein archiviertes Item vorhanden!</Span>
            )}
          </Collapse.Panel>
          <Collapse.Panel header="Papierkorb" key="REMOVED">
            {items.length ? (
              items
            ) : (
              <Span>Kein gelöschtes Item vorhanden!</Span>
            )}
          </Collapse.Panel>
        </Collapse>
      </Sidebar>
    );
  }
}
