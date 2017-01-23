import React, { Component } from 'react';
import { Modal, Form, Input, Select, Spin, Button } from 'antd';
import moment from 'moment';
import withFile from '../../decorators/file';
import Image from '../../edits/image';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

const ModalForm = Form.create()(
    (props) => {
      const { item, form, onCreate, onCancel, onDelete, saving } = props;
      const { getFieldDecorator } = form;

      if (!item) {
        return <Spin style={{ minHeight: 400 }} />;
      }

      return (
        <div>
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
              <Select {...props} tags searchPlaceholder="Suche ..." />
            )}
          </Form.Item>

          <Image value={{ ...item }} width="100%" readOnly />

          <Form.Item key="size" label="Größe" {...FormItemLayout} style={{ marginTop: '24px', marginBottom: '0' }}>
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
      );
    }
);

@withFile
export default class MediaModal extends Component {
  handleCancel = () => {
    this.props.onClose();
  };

  handleDelete = () => {
    const { id, remove, onClose } = this.props;

    Modal.confirm({
      title: 'Diese Datei wirklich löschen?',
      content: 'Wollen Sie diese Datei wirklich löschen?',
      onOk() {
        remove({ id }).then(onClose);
      },
      onCancel() {},
    });
  };

  handleCreate = () => {
    const { save, onClose } = this.props;

    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      save(values, { commit: false }).then(onClose);
    });
  };

  render() {
    return (
      <ModalForm
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onDelete={this.handleDelete}
        onCreate={this.handleCreate}
      />
    );
  }
}
