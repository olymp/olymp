import React from 'react';
import { Switch, Form } from 'antd';
import { layout } from 'olymp-ui';
import { getRules } from 'olymp-utils';
import { get } from 'lodash';

const Toggle = ({
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
    })(<Switch {...rest} />)}
  </Form.Item>
);
Toggle.defaultProps = { layout };
export default Toggle;
