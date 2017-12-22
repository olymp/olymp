import React from 'react';
import { toClass } from 'recompose';
import { get } from 'lodash';
import DetailEdit from './rel-editor';
import FormItem from './form-item';

export default {
  rule: ({ specialFields }) =>
    get(specialFields, 'idField.type.kind', 'LIST') !== 'LIST',
  form: toClass(({ specialFields, ...props }) => (
    <FormItem {...props}>
      <DetailEdit
        {...props}
        typeName={get(specialFields, 'idField.type.name')}
      />
    </FormItem>
  )),
};
