import React from 'react';
import { toClass } from 'recompose';
import { Switch } from 'antd';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Boolean',
  form: toClass(({ type, ...props }) => (
    <FormItem {...props}>
      <Switch {...props} checked={props.value} />
    </FormItem>
  )),
};
