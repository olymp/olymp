import React from 'react';
import { toClass } from 'recompose';
import { Input } from 'antd';
import FormItem from './form-item';

export default {
  rule: ({ type }) => ['Markdown'].indexOf(type.name) !== -1,
  form: toClass(({ value, onChange, ...p }) => (
    <FormItem {...p}>
      <Input.TextArea value={value} autosize onChange={onChange} type="text" />
    </FormItem>
  )),
};
