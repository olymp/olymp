import React from 'react';
import { toClass } from 'recompose';
import { DateEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) =>
    innerType.name === 'Date' || innerType.name === 'DateTime',
  form: toClass(({ type, ...props }) => (
    <FormItem {...props}>
      <DateEditor
        {...props}
        format={type.name === 'DateTime' ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'}
        showTime={type.name === 'DateTime' ? { format: 'HH:mm' } : null}
      />
    </FormItem>
  )),
};
