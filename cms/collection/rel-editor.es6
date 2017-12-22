import React, { Component } from 'react';
import { Select } from 'antd';
import withItems from './with-items';
import withCollection from './with-collection';

@withCollection
@withItems
export default class DetailEditor extends Component {
  render() {
    const {
      data,
      collection,
      items,
      children,
      value,
      onChange,
      mode,
      ...rest
    } = this.props;

    return items && items.length ? (
      <Select
        value={value}
        onChange={val =>
          mode === 'tags' && Array.isArray(val)
            ? onChange(val.map(id => items.find(i => i.id === id)))
            : onChange(val)}
        mode={mode}
        {...rest}
        style={{ width: '100%' }}
      >
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
