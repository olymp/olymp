import React from 'react';
import { TreeSelect, Form } from 'antd';
import { getRules } from '../../collection';
import { layout } from 'olymp/ui';

const ParentSelect = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: item ? item[field] : initialValue,
      rules: getRules(rules, label),
    })(
      <TreeSelect
        placeholder={placeholder || label}
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
        {...rest}
      />
    )}
  </Form.Item>
);
ParentSelect.defaultProps = { layout };
export default ParentSelect;


