import React from 'react';
import { toClass } from 'recompose';
import { Select } from 'antd';
import FormItem from './form-item';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb',
};

export default {
  rule: ({ type }) => type.kind === 'ENUM' && type.enumValues,
  form: toClass(({ type, '@': at, ...props }) => (
    <FormItem {...props}>
      <Select {...props}>
        {type.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>
            {type.name === 'DOCUMENT_STATE' ? states[x.name] : x.name}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  )),
};
