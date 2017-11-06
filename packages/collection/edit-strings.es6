import React from 'react';
import { Select } from 'antd';
import FormItem from './form-item';

export default {
  rule: ({ type, name }) =>
    name !== 'tags' && type.kind === 'LIST' && type.ofType.name === 'String',
  form: props => (
    <FormItem {...props}>
      <Select {...props} mode="tags" style={{ width: '100%' }} />
    </FormItem>
  ),
};
