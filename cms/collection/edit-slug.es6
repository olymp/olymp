import React from 'react';
import { toClass } from 'recompose';
import { Input } from 'antd';
import slugify from 'slugify';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Slug',
  form: toClass(
    ({
      form,
      value,
      onChange,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => {
      const slug = slugify(form.getFieldValue('name'));
      return (
        <FormItem form={form} {...p}>
          <Input
            value={value || (slug && `/${slug}`)}
            onChange={onChange}
            type="text"
            data-__field={dataField}
            data-__meta={dataMeta}
          />
        </FormItem>
      );
    },
  ),
};
