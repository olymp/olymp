import React from 'react';
import { toClass } from 'recompose';
import { DateEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) =>
    innerType.name === 'Date' || innerType.name === 'DateTime',
  form: toClass(({ innerType, ...props }) => (
    <FormItem {...props}>
      <DateEditor
        {...props}
        format={
          innerType.name === 'DateTime' ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'
        }
        showTime={innerType.name === 'DateTime' ? { format: 'HH:mm' } : null}
      />
    </FormItem>
  )),
};
