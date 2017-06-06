import React from 'react';
import { Input as AntInput, Form, Select, Icon } from 'antd';
import getRules from '../rules';
import { layout } from 'olymp-ui';

const PageTypeInput = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => {
  return (
    <Form.Item key={field} label={label} {...layout}>
      {form.getFieldDecorator(field, {
        initialValue: item ? item[field] : undefined,
        rules: getRules(rules, label),
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
};
PageTypeInput.defaultProps = { layout };
export default PageTypeInput;
