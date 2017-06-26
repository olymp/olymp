import React from 'react';
import { Input as AntInput, Form } from 'antd';
import { layout, getRules } from 'olymp-ui';
import { get } from 'lodash';

const Component = ({ onChange, value, ...rest }) => {
  const newChange = (x) => {
    console.log(x);
    try {
      onChange(JSON.parse(x));
    } catch (err) {}
  };
  const newValue = value ? JSON.stringify(value) : '';
  return <AntInput value={newValue} onChange={newChange} {...rest} />;
};

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
    })(<Component placeholder={placeholder} label={label} />)}
  </Form.Item>);
Input.defaultProps = { layout };
export default Input;
