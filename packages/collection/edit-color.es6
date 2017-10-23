import React from 'react';
import { toClass } from 'recompose';
import { ColorEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Color',
  form: toClass(({ type, ...props }) => (
    <FormItem {...props}>
      <ColorEditor {...props} />
    </FormItem>
  )),
};
