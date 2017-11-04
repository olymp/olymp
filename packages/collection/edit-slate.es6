import React from 'react';
import { toClass } from 'recompose';
import { SlateWriter } from 'olymp-slate';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Blocks',
  form: toClass(
    ({ 'data-__field': dataField, 'data-__meta': dataMeta, ...p }) => (
      <FormItem {...p}>
        <span data-__field={dataField} data-__meta={dataMeta}>
          Bearbeiten
        </span>
      </FormItem>
    ),
  ),
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
