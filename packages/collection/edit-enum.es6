import React from 'react';
import { toClass } from 'recompose';
import { Select } from 'antd';
import { get } from 'lodash';
import FormItem from './form-item';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb',
};

export default {
  rule: ({ innerType }) => innerType.kind === 'ENUM' && innerType.enumValues,
  form: toClass(({ innerType, specialFields, ...props }) => {
    const translation = {};
    // todo: gehört eigentlich in get-special-fields!!!
    get(innerType, 'description', '')
      .split('@')
      .filter(x => x)
      .map(x => x.replace('\n', '').split('("'))
      .forEach(x => {
        if (x[0] && x[1]) {
          translation[x[0]] = x[1].replace('")', '');
        }
      });

    return (
      <FormItem {...props}>
        <Select {...props} value={props.value || innerType.enumValues[0].name}>
          {innerType.enumValues.map(x => {
            const name = translation[x.name] || x.name;

            return (
              <Select.Option key={x.name} value={x.name}>
                {innerType.name === 'DOCUMENT_STATE' ? states[x.name] : name}
              </Select.Option>
            );
          })}
        </Select>
      </FormItem>
    );
  }),
};
