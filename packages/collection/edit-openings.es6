import React from 'react';
import { toClass } from 'recompose';
import { TimeRangesEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  selector: ({ type }) =>
    type.kind === 'LIST' && type.ofType.name === 'TimeRange',
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(p => <TimeRangesEditor {...p} />),
};
