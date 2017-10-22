import React from 'react';
import { toClass } from 'recompose';
import FormItem from './form-item';
import { DetailEdit } from './edits';

export default {
  selector: ({ '@': at }) => at && at.idField,
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ items = [], '@': at, type, ...props }) => (
    <DetailEdit {...props} typeName={at.idField.type.name} />
  )),
};
