import React from 'react';
import { TreeSelect, Form } from 'antd';
import { layout, getRules } from 'olymp-ui';
import { withPropsOnChange } from 'recompose';

const NullableTree = withPropsOnChange(['onChange'], ({ onChange }) => ({
  onChange: x => onChange(x || null),
}))(TreeSelect);

const ParentSelect = ({
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
      initialValue: item ? item[field] : initialValue,
      rules: getRules(rules, label),
    })(
      <NullableTree
        placeholder={placeholder || label}
        style={{ width: '100%' }}
        allowClear
        onChange={x => console.log(x)}
        dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
        {...rest}
      />,
    )}
  </Form.Item>
);
ParentSelect.defaultProps = { layout };
export default ParentSelect;
