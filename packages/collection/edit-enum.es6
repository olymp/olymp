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
  rule: ({ type }) => type.kind === 'ENUM' && type.enumValues,
  form: toClass(({ type, '@': at, ...props }) => {
    const translation = {};
    if (type.name === 'NEWS_ART') {
      get(type, 'description', '')
        .split('@')
        .filter(x => x)
        .map(x => x.replace('\n', '').split('("'))
        .forEach(x => {
          if (x[0] && x[1]) {
            translation[x[0]] = x[1].replace('")', '');
          }
        });
    }

    return (
      <FormItem {...props}>
        <Select {...props}>
          {type.enumValues.map(x => {
            const name = translation[x.name] || x.name;

            return (
              <Select.Option key={x.name} value={x.name}>
                {type.name === 'DOCUMENT_STATE' ? states[x.name] : name}
              </Select.Option>
            );
          })}
        </Select>
      </FormItem>
    );
  }),
};
