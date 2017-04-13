import React from 'react';
import { Input as AntInput, Form } from 'antd';
import getRules from '../rules';
import { layout } from 'olymp/ui';
import Slate from './hashtax-edit';

const HashtaxInput = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => {
  const inner = form.getFieldDecorator(field, {
    initialValue: item ? item[field] : undefined,
    rules: getRules(rules, label),
  })(<Slate placeholder={placeholder || label} {...rest} />);
  if (label === null) return inner;
  return (
    <Form.Item key={field} label={label} {...label}>
      {inner}
    </Form.Item>
  );
};
HashtaxInput.defaultProps = { layout };
export default HashtaxInput;
