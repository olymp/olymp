import React, { Component } from 'react';
import { Select } from 'antd';
import withItems from '../decorators/with-items';
import withCollection from '../decorators/with-collection';

@withCollection
@withItems
export default class DetailEditor extends Component {
  render() {
    const { data, collection, items, children, value, ...rest } = this.props;

    return items && items.length ? (
      <Select value={value} {...rest}>
        {items.map(item => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    ) : (
      <Select {...rest} disabled />
    );
  }
}
