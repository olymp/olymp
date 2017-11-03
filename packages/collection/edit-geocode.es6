import React from 'react';
import { toClass } from 'recompose';
import GeocodeEditor from 'olymp-google/edits/geocode';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Geocode',
  form: toClass(({ type, ...props }) => (
    <FormItem {...props}>
      <GeocodeEditor {...props} />
    </FormItem>
  )),
};
