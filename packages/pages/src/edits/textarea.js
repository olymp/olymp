import React from 'react';
import { Input as AntInput, Form } from 'antd';
import { layout, getRules } from 'olymp-ui';
import { get } from 'lodash';

const Input = ({
  item,
  field,
  label,
  layout,
  initialValue,
  rules,
  placeholder,
  form,
  ...rest
}) =>
  (<Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: get(item, field),
      rules: getRules(rules, label),
    })(<AntInput.TextArea placeholder={placeholder || label} {...rest} />)}
  </Form.Item>);
Input.defaultProps = { layout, rows: 2 };
export default Input;
