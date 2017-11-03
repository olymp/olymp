import React from 'react';
import { toClass } from 'recompose';
import { EditImage } from 'olymp-cloudinary';
import FormItem from './form-item';

const transform = ({ id, url, crop, width, height, caption, source }) => ({
  id,
  url,
  crop,
  width,
  height,
  caption,
  source,
});

export default {
  rule: ({ type }) => type.name === 'Image',
  form: toClass(({ value, multi, onChange, ...rest }) => (
    <FormItem {...rest}>
      <EditImage
        value={value}
        multi={multi}
        onChange={onChange}
        maxHeight={100}
        maxWidth={250}
      />
    </FormItem>
  )),
};
