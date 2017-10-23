import React from 'react';
import { toClass } from 'recompose';
import FormItem from './form-item';
import { DetailEdit } from './edits';

export default {
  rule: ({ '@': at }) => at && at.idField && at.idField.type.kind === 'LIST',
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ '@': at, type, ...props }) => (
    <DetailEdit {...props} typeName={at.idField.type.name} />
  )),
};
