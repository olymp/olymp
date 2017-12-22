import React from 'react';
import { Select } from 'antd';
import { toClass } from 'recompose';
import FormItem from './form-item';

export default {
  rule: ({ type, name }) =>
    name !== 'tags' && type.kind === 'LIST' && type.ofType.name === 'String',
  form: toClass(props => (
    <FormItem {...props}>
      <Select {...props} mode="tags" style={{ width: '100%' }} />
    </FormItem>
  )),
};
