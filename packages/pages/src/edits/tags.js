import React from 'react';
import { Select, Form } from 'antd';
import { layout, getRules } from 'olymp-ui';

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
}) =>
  (<Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: item
        ? (item[field] || '')
            .split(',')
            .filter(i => options.findIndex(option => option.id === i) >= 0)
        : undefined,
      rules: getRules(rules, label),
    })(
      <Select mode="multiple" placeholder={placeholder || label} {...rest}>
        {options.map(option =>
          (<Select.Option value={option.id} key={option.id}>
            {option.name}
          </Select.Option>)
        )}
      </Select>
    )}
  </Form.Item>);
TagSelect.defaultProps = { layout };
export default TagSelect;
