import React, { Component } from 'react';
import { withItems } from 'olymp-core/decorators';
import { Select } from 'antd';

@withItems()
export default class DetailEditor extends Component {
  render() {
    const { data, collection, items, children, value, ...rest } = this.props;

    return items && items.length ? (
      <Select value={value} {...rest}>
        {items.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
      </Select>
    ) : <Select {...rest} disabled />;
  }
}
