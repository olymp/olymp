import React from 'react';
import { Form, Select } from 'antd';
import { layout } from 'olymp-fela/antd';
import getRules from '../get-rules';

const PageTypeInput = ({
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
      initialValue: item && item[field] ? item[field] : 'PAGE',
      rules: getRules(rules, label)
    })(
      <Select style={{ width: '100%' }} {...rest}>
        <Select.Option value="PAGE">Seite</Select.Option>
        <Select.Option value="MENU">Menü</Select.Option>
        <Select.Option value="PLACEHOLDER">Platzhalter</Select.Option>
        <Select.Option value="ALIAS">Alias</Select.Option>
        <Select.Option value="LINK">Externer Link</Select.Option>
      </Select>
    )}
  </Form.Item>
);
PageTypeInput.defaultProps = { layout };
export default PageTypeInput;
