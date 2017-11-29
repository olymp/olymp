import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { Table } from 'antd';
import { compose, withPropsOnChange } from 'recompose';
import isAfter from 'date-fns/isAfter';
import { getPrintableValue } from '../utils';

const StyledTable = createComponent(
  () => ({
    '& td': {
      minWidth: 50,
      maxWidth: 200,
    },
  }),
  p => <Table {...p} />,
  p => Object.keys(p),
);

const sortValue = (item, collection) => {
  if (item.name === (collection.specialFields.imageField || 'image' || 'bild'))
    return 50;

  if (item.name === (collection.specialFields.nameField || 'name')) return 40;

  if (
    item.name ===
    (collection.specialFields.descriptionField ||
      'description' ||
      'beschreibung')
  )
    return 30;

  if (item.name === (collection.specialFields.colorField || 'color' || 'farbe'))
    return 20;

  return parseInt(item.specialFields.table, 10) || 10;
};

const enhance = compose(
  withPropsOnChange(['collection'], ({ collection }) => ({
    columns: collection.fields
      .filter(
        x =>
          x.specialFields.table ||
          x.name === (collection.specialFields.nameField || 'name') ||
          x.name ===
            (collection.specialFields.descriptionField ||
              'description' ||
              'beschreibung') ||
          x.name ===
            (collection.specialFields.imageField || 'image' || 'bild') ||
          x.name ===
            (collection.specialFields.colorField || 'color' || 'farbe'),
      )
      .sort((a, b) => sortValue(b, collection) - sortValue(a, collection))
      .map(field => ({
        key: field.name,
        title: field.specialFields.label,
        dataIndex: field.name,
        sorter:
          (field.innerType.name === 'String' &&
            ((a, b) => {
              const nameA = (a[field.name] || '').toUpperCase();
              const nameB = (b[field.name] || '').toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              return 0;
            })) ||
          (field.innerType.name === 'Int' &&
            ((a, b) => b[field.name] - a[field.name])) ||
          (field.innerType.name === 'Date' &&
            ((a, b) => (isAfter(a[field.name], b[field.name]) ? 1 : -1))) ||
          (field.innerType.name === 'Bool' &&
            ((a, b) => (a[field.name] && !b[field.name] ? 1 : -1))),
        render: value => getPrintableValue(value, field),
      })),
  })),
  withPropsOnChange(['items'], ({ items }) => ({
    data: items.map((item, i) => ({
      key: i,
      ...item,
    })),
  })),
);

@enhance
export default class CollectionView extends Component {
  render() {
    const { columns, data, typeName, updateQuery } = this.props;

    return (
      <StyledTable
        columns={columns}
        dataSource={data}
        onRowClick={item =>
          updateQuery({ [`@${typeName.toLowerCase()}`]: item.id })
        }
      />
    );
  }
}
