import React from 'react';
import { toClass } from 'recompose';
import { SlateWriter } from 'olymp-slate';
import FormItem from './form-item';

export default {
  selector: ({ type }) => type.name === 'Blocks',
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ children, onChange, value, binding, label }) => (
    <SlateWriter
      onChange={onChange}
      value={value}
      binding={binding}
      placeholder={label || 'Hier Text eingeben!'}
      style={{ padding: 20 }}
    >
      {children}
    </SlateWriter>
  )),
};
