import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

export default Form.create()(
  (props) => {
    const { form } = props;
    const { getFieldDecorator } = form;

    return (
      <div style={{ borderBottom: '1px solid #DDD', padding: '1rem 0', marginBottom: '1rem' }}>
        <Form.Item key="source" label="Quelle" {...FormItemLayout}>
          {getFieldDecorator('source', {
            initialValue: 'item.source',
          })(
            <Input placeholder="Quelle" />
          )}
        </Form.Item>
        <Form.Item key="tags" label="Tags" {...FormItemLayout}>
          {getFieldDecorator('tags', {
            initialValue: [],
          })(
            <Select {...props} tags searchPlaceholder="Suche ..." />
          )}
        </Form.Item>

        <Button>Speichern</Button>
        <Button>Alle löschen</Button>
      </div>
    );
  }
);
