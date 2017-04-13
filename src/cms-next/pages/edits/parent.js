import React from 'react';
import { TreeSelect, Form } from 'antd';
import { getRules } from '../../collection';
import { layout } from 'olymp/ui';

const ParentSelect = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator('parentId', {
      initialValue: item ? item[field] : undefined,
      rules: getRules(rules, label),
    })(
      <TreeSelect
        placeholder={placeholder || label}
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        {...rest}
      />
    )}
  </Form.Item>
);
ParentSelect.defaultProps = { layout };
export default ParentSelect;


