import React from 'react';
import { Input as AntInput, Form, Select } from 'antd';
import getRules from '../rules';
import { layout } from 'olymp/ui';

const StateInput = ({ item, field, label, layout, initialValue, rules, placeholder, form, ...rest }) => {
  return (
    <Form.Item key={field} label={label} {...layout}>
      {form.getFieldDecorator(field, {
        initialValue: item ? item[field] : undefined,
        rules: getRules(rules),
      })(
        <Select style={{ width: '100%' }} {...rest}>
          <Select.Option value="PUBLISHED">Veröffentlicht</Select.Option>
          <Select.Option value="DRAFT">Entwurf</Select.Option>
          <Select.Option value="Archived">Archiviert</Select.Option>
          <Select.Option value="DELETED">Gelöscht</Select.Option>
        </Select>
      )}
    </Form.Item>
  );
};
StateInput.defaultProps = { layout };
export default StateInput;
