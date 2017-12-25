import React from 'react';
import { Form, Select, Icon } from 'antd';
import getRules from '../get-rules';
import layout from '../layout';

const StateInput = ({
  item,
  field,
  label,
  layout,
  initialValue,
  rules = ['required'],
  placeholder,
  form,
  ...rest
}) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: item ? item[field] : undefined,
      rules: getRules(rules, label),
    })(
      <Select style={{ width: '100%' }} {...rest}>
        <Select.Option value="DRAFT">
          <b style={{ color: 'blue' }}>
            <Icon type="inbox" />
          </b>{' '}
          Ablage
        </Select.Option>
        <Select.Option value="PUBLISHED">
          <b style={{ color: 'green' }}>
            <Icon type="check" />
          </b>{' '}
          Veröffentlicht
        </Select.Option>
        <Select.Option value="REMOVED">
          <b style={{ color: 'red' }}>
            <Icon type="delete" />
          </b>{' '}
          Gelöscht
        </Select.Option>
      </Select>,
    )}
  </Form.Item>
);
StateInput.defaultProps = { layout };
export default StateInput;
