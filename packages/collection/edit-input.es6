import React from 'react';
import { toClass } from 'recompose';
import { Input } from 'antd';
import FormItem from './form-item';

export default {
  isDefault: true,
  selector: ({ type }) =>
    ['Slug', 'Email', 'PhoneNumber', 'Website'].indexOf(type.name) !== -1,
  form: toClass(p => (
    <FormItem {...p}>
      <Input {...p} type="text" />
    </FormItem>
  )),
};
