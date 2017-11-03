import React from 'react';
import { toClass } from 'recompose';
import FormItem from './form-item';
import { DetailEdit } from './edits';

export default {
  rule: ({ '@': at, type }) =>
    (at && at.idField && at.idField.type.kind === 'LIST') ||
    (type.kind === 'LIST' &&
      type.ofType.kind === 'OBJECT' &&
      type.ofType.name.indexOf('Nested') === -1),
  form: toClass(({ '@': at, type, value, onChange, ...props }) => (
    <FormItem {...props}>
      <DetailEdit
        mode="tags"
        onChange={onChange}
        typeName={at.idField ? at.idField.type.name : type.ofType.name}
      />
    </FormItem>
  )),
};
