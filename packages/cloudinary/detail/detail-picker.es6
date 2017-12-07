import React from 'react';
import { Form, Input } from 'antd';
import Menu from 'olymp-fela/menu';
import Crop from '../components/crop';
import getImageInfo from './info';
import { FormForFullLayout } from './utils';

export default ({ form, item }) => {
  form.getFieldDecorator(`${item.id}.id`, { initialValue: item.id });
  form.getFieldDecorator(`${item.id}.url`, { initialValue: item.url });
  form.getFieldDecorator(`${item.id}.width`, { initialValue: item.width });
  form.getFieldDecorator(`${item.id}.height`, { initialValue: item.height });

  return (
    <Form>
      <Form.Item {...FormForFullLayout}>
        {form.getFieldDecorator(`${item.id}.crop`, {
          initialValue: item.crop,
        })(<Crop url={item.url} height={item.height} width={item.width} />)}
      </Form.Item>

      <Menu.List title="Bild">
        {form.getFieldDecorator(`${item.id}.source`, {
          initialValue: item.source,
        })(
          <Form.Item label="Quelle" {...FormForFullLayout}>
            <Input placeholder="Quelle" />
          </Form.Item>,
        )}
        <Form.Item key="caption" label="Bezeichnung" {...FormForFullLayout}>
          {form.getFieldDecorator(`${item.id}.caption`, {
            initialValue: item.caption,
          })(<Input.TextArea rows={3} placeholder="Bezeichnung" />)}
        </Form.Item>
      </Menu.List>

      {getImageInfo(item)}
    </Form>
  );
};
