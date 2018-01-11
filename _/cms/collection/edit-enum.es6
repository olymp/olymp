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
  rule: ({ innerType }) => innerType.kind === 'ENUM' && innerType.enumValues,
  form: toClass(({ innerType, specialFields, ...props }) => (
    <FormItem {...props}>
      <Select {...props} value={props.value || innerType.enumValues[0].name}>
        {innerType.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>
            {innerType.name === 'DOCUMENT_STATE' ? states[x.name] : x.label}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  )),
};
