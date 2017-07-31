import React, { Component } from 'react';
import { Select } from 'antd';
import { metricsObj, dimensionsObj } from '../../definitions';

// Muss Klasse sein, sonst klappt der getFieldDecorator nicht!!!
export default class MetricSelet extends Component {
  render() {
    const { isDimension, ...rest } = this.props;
    const obj = isDimension ? dimensionsObj : metricsObj;

    const categories = {};
    Object.keys(obj).forEach(key => {
      const { category } = obj[key];

      if (!categories[category]) {
        categories[category] = [];
      }

      categories[category].push({
        ...obj[key],
        key,
      });
    });

    return (
      <Select
        mode="multiple"
        placeholder={isDimension ? 'Dimensionen' : 'Messwerte'}
        filterOption={(val, { props }) =>
          props.children.toLowerCase().includes(val.toLowerCase())}
        style={{ width: '100%' }}
        {...rest}
      >
        {Object.keys(categories).map(category =>
          <Select.OptGroup label={category} key={category}>
            {categories[category].map(x =>
              <Select.Option value={x.key} key={x.key}>
                {x.label}
              </Select.Option>
            )}
          </Select.OptGroup>
        )}
      </Select>
    );
  }
}
