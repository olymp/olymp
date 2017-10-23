import React from 'react';
import { toClass } from 'recompose';
import { DetailEdit } from './edits';
import FormItem from './form-item';

export default {
  rule: ({ '@': at }) => at && at.idField && at.idField.type.kind !== 'LIST',
  form: toClass(({ '@': at, ...props }) => (
    <FormItem {...props}>
      <DetailEdit {...props} typeName={at.idField.type.name} />
    </FormItem>
  )),
};
