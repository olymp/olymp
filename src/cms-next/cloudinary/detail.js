import React, { Component } from 'react';
import { Prompt } from 'olymp';
import { TagsEditor } from 'olymp/edits';
import { Sidebar } from 'olymp/ui';
import { Button, Form, Icon, Input, Spin } from 'antd';
import moment from 'moment';
import Crop from './crop';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

@Form.create()
class MediaDetail extends Component {
  render() {
    const { item, form } = this.props;
    const { getFieldDecorator } = form;

    return !item ? (
      <Spin size="large" />
    ) : (
      <div>
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />

        <Crop url={item.url} width={item.width} height={item.height} />

        <div style={{ padding: '1rem' }}>
          <Form.Item key="id" label="ID" {...FormItemLayout}>
            {getFieldDecorator('id', {
              initialValue: item.id,
            })(
              <Input disabled placeholder="ID" />
            )}
          </Form.Item>
          <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
            {getFieldDecorator('caption', {
              initialValue: item.caption,
            })(
              <Input placeholder="Bezeichnung" />
            )}
          </Form.Item>
          <Form.Item key="source" label="Quelle" {...FormItemLayout}>
            {getFieldDecorator('source', {
              initialValue: item.source,
            })(
              <Input placeholder="Quelle" />
            )}
          </Form.Item>
          <Form.Item key="tags" label="Tags" {...FormItemLayout}>
            {getFieldDecorator('tags', {
              initialValue: item.tags || [],
            })(
              <TagsEditor {...this.props} tags searchPlaceholder="Suche ..." style={{ width: '100%' }} />
            )}
          </Form.Item>

          <Form.Item key="size" label="Größe" {...FormItemLayout}>
            <Input disabled placeholder="Größe" defaultValue={`${item.width}x${item.height}`} />
          </Form.Item>
          <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
            <Input disabled placeholder="Hinzugefügt" defaultValue={`${moment(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss')} Uhr`} />
          </Form.Item>
          <Form.Item key="format" label="Format" {...FormItemLayout}>
            <Input disabled placeholder="Format" defaultValue={item.format} />
          </Form.Item>
          { item.format === 'pdf' ? (
            <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
              <Input disabled placeholder="Seiten" defaultValue={item.pages} />
            </Form.Item>
          ) : undefined }
          <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
            <Input disabled placeholder="Dateigröße" defaultValue={`${item.bytes / 1000} kB`} />
          </Form.Item>
        </div>
      </div>
    );
  }
}
export default MediaDetail;
