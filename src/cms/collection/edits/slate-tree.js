import React from 'react';
import { Form } from 'antd';
import getRules from '../rules';
import { SlateTreeEdit } from 'olymp-slate';

const SlateTreeInput = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => {
  const inner = form.getFieldDecorator(field, {
    initialValue: item ? item[field] : undefined,
    rules: getRules(rules, label),
  })(<SlateTreeEdit {...rest} />);
  if (label === null) return inner;
  return (
    <Form.Item key={field} label={label} {...label}>
      {inner}
    </Form.Item>
  );
};
export default SlateTreeInput;
