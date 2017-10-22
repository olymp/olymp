import React from 'react';
import { toClass } from 'recompose';
import { Input } from 'antd';
import FormItem from './form-item';

export default {
  isDefault: true,
  selector: ({ type }) =>
    ['Slug', 'Email', 'PhoneNumber', 'Website'].indexOf(type.name) !== -1,
  form: toClass(({ value, onChange, ...p }) => (
    <FormItem {...p}>
      <Input value={value} onChange={onChange} type="text" />
    </FormItem>
  )),
};
