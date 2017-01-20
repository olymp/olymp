import React, { Component } from 'react';
import { withItems } from 'olymp';
import { Select } from 'antd';

@withItems()
export default class DetailEditor extends Component {
  render() {
    const { data, collection, items, children, ...rest } = this.props;

    return (
      <Select {...rest}>
        {items && items.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
      </Select>
    );
  }
}
