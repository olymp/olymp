import React from 'react';
import { toClass } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import FormItem from './form-item';
import { DetailEdit } from './edits';

export default {
  selector: ({ '@': at }) => at && at.idField,
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ items = [], field, ...props }) => (
    <DetailEdit {...props} typeName={field['@'].idField.type.name} />
  )),
};
