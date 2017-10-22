import React from 'react';
import { toClass } from 'recompose';
import FormItem from './form-item';
import { FormListEdit } from './edits';

export default {
  selector: ({ type }) =>
    type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0,
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ type, ...props }) => (
    <FormListEdit {...props} typeName={type.ofType.name} type={type} />
  )),
};
