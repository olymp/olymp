import React from 'react';
import { toClass } from 'recompose';
import { EditImage } from 'olymp-cloudinary';
import FormItem from './form-item';

export default {
  selector: ({ type }) => type.name === 'Image',
  form: toClass(p => (
    <FormItem {...p}>
      <EditImage {...p} style={{ maxWith: '100%' }} width="100%" />
    </FormItem>
  )),
};
