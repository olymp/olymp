import React from 'react';
import { InputNumber, Form } from 'antd';
import { layout } from 'olymp-ui';
import { get } from 'lodash';
import getRules from '../get-rules';

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
}) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: get(item, field),
      rules: getRules(rules, label),
    })(<InputNumber placeholder={placeholder || label} {...rest} />)}
  </Form.Item>
);
Input.defaultProps = { layout };
export default Input;
