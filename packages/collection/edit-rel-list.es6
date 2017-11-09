import React from 'react';
import { toClass } from 'recompose';
import { get } from 'lodash';
import FormItem from './form-item';
import DetailEdit from './rel-editor';

export default {
  rule: ({ specialFields, type }) =>
    get(specialFields, 'idField.type.kind') === 'LIST' ||
    (type.kind === 'LIST' &&
      type.ofType.kind === 'OBJECT' &&
      type.ofType.name.indexOf('Nested') === -1),
  form: toClass(
    ({
      specialFields,
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
          value={(value || []).map(item => item.id)}
          onChange={onChange}
          typeName={
            specialFields.idField
              ? specialFields.idField.type.name
              : type.ofType.name
          }
          data-__field={dataField}
          data-__meta={dataMeta}
        />
      </FormItem>
    ),
  ),
};
