import React from 'react';
import { toClass } from 'recompose';
import FormItem from './form-item';
import { DetailEdit } from './edits';

export default {
  rule: ({ '@': at, type, ...rest }) =>
    console.log(type, rest) ||
    (at && at.idField && at.idField.type.kind === 'LIST') ||
    (type.kind === 'LIST' &&
      type.ofType.kind === 'OBJECT' &&
      type.ofType.name.indexOf('Nested') === -1),
  form: toClass(
    ({
      '@': at,
      type,
      value,
      onChange,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...props
    }) => (
      <FormItem {...props}>
        <DetailEdit
          mode="tags"
          onChange={onChange}
          typeName={at.idField ? at.idField.type.name : type.ofType.name}
          data-__field={dataField}
          data-__meta={dataMeta}
        />
      </FormItem>
    ),
  ),
};
