import React from 'react';
import { toClass } from 'recompose';
import { EditImage } from 'olymp-cloudinary';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) => innerType.name === 'Image',
  form: toClass(
    ({
      value,
      multi,
      onChange,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...rest
    }) => (
      <FormItem {...rest}>
        <EditImage
          value={value}
          multi={multi}
          onChange={onChange}
          maxHeight={100}
          maxWidth={250}
          data-__field={dataField}
          data-__meta={dataMeta}
        />
      </FormItem>
    ),
  ),
};
