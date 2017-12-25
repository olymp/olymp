import React from 'react';
import { Select, Form } from 'antd';
import { get } from 'lodash';
import getRules from '../get-rules';
import layout from '../layout';

const TagSelect = ({
  item,
  field,
  label,
  layout,
  initialValue,
  rules,
  placeholder,
  form,
  options,
  ...rest
}) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: get(item, field || '', []) || [],
      rules: getRules(rules, label),
    })(
      <Select
        style={{ width: '100%' }}
        mode="multiple"
        placeholder={placeholder || label}
        {...rest}
      >
        {options.map(value => (
          <Select.Option key={value}>{value}</Select.Option>
        ))}
      </Select>,
    )}
  </Form.Item>
);
TagSelect.defaultProps = { layout };
export default TagSelect;
