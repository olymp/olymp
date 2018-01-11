import React from 'react';
import { toClass } from 'recompose';
import { Input } from 'antd';
import FormItem from './form-item';

export default {
  isDefault: true,
  rule: ({ innerType }) =>
    ['Slug', 'Email', 'PhoneNumber', 'Website'].indexOf(innerType.name) !== -1,
  form: toClass(
    ({
      value,
      onChange,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => (
      <FormItem {...p}>
        <Input
          value={value}
          onChange={onChange}
          type="text"
          data-__field={dataField}
          data-__meta={dataMeta}
        />
      </FormItem>
    ),
  ),
};
