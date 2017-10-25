import React from 'react';
import { toClass } from 'recompose';
import { Image } from 'olymp-cloudinary';
import Mediathek from 'olymp-cloudinary/mediathek';
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
  collapse: true,
  rule: ({ type }) => type.name === 'Image',
  full: toClass(({ onChange, multi = false, value }) => (
    <Mediathek
      multi={multi}
      onChange={(value = []) => {
        const v = value.map(transform);
        onChange(multi ? v : v[0]);
      }}
      selected={
        null /* (Array.isArray(value)
        ? value
        : [value]
      ).map(({ id, crop, caption, source }) => ({
        id,
        crop,
        caption,
        source,
      })) */
      }
    />
  )),
  form: toClass(({ value, ...rest }) => (
    <FormItem {...rest}>
      <Image
        value={
          (Array.isArray(value) ? value[0] : value) || {
            width: 600,
            height: 450,
          }
        }
        maxHeight={100}
        maxWidth="100%"
      />
    </FormItem>
  )),
};
