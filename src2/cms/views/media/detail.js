import React, { Component } from 'react';
import { Modal, Form, Input, Select, Spin } from 'antd';
import moment from 'moment';
import withFile from '../../decorators/file';
import Image from '../../edits/image';

const FormItem = Form.Item;
const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

const ModalForm = Form.create()(
    (props) => {
      const { item, form, onCreate, onCancel, saving } = props;
      const { getFieldDecorator } = form;

      if (!item) {
        return <Modal {...modalSettings} title="Media"><Spin /></Modal>;
      }

      return (
        <Modal {...modalSettings} confirmLoading={saving} title="Media" onCancel={onCancel} onOk={onCreate}>
          <FormItem key="id" label="ID" {...formItemLayout}>
            {getFieldDecorator('id', {
              initialValue: item.id,
            })(
              <Input disabled placeholder="ID" />
            )}
          </FormItem>
          <FormItem key="caption" label="Bezeichnung" {...formItemLayout}>
            {getFieldDecorator('caption', {
              initialValue: item.caption,
            })(
              <Input placeholder="Bezeichnung" />
            )}
          </FormItem>
          <FormItem key="source" label="Quelle" {...formItemLayout}>
            {getFieldDecorator('source', {
              initialValue: item.source,
            })(
              <Input placeholder="Quelle" />
            )}
          </FormItem>
          <FormItem key="tags" label="Tags" {...formItemLayout}>
            {getFieldDecorator('tags', {
              initialValue: item.tags || [],
            })(
              <Select {...props} tags searchPlaceholder="Suche ..." />
            )}
          </FormItem>

          <Image value={{ ...item }} width="100%" />

          <FormItem key="size" label="Größe" {...formItemLayout} style={{ marginTop: '24px', marginBottom: '0' }}>
            <Input disabled placeholder="Größe" defaultValue={`${item.width}x${item.height}`} />
          </FormItem>
          <FormItem key="date" label="Hinzugefügt" {...formItemLayout} style={{ marginBottom: '0' }}>
            <Input disabled placeholder="Hinzugefügt" defaultValue={`${moment(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss')} Uhr`} />
          </FormItem>
          <FormItem key="format" label="Format" {...formItemLayout} style={{ marginBottom: '0' }}>
            <Input disabled placeholder="Format" defaultValue={item.format} />
          </FormItem>
          <FormItem key="bytes" label="Dateigröße" {...formItemLayout} style={{ marginBottom: '0' }}>
            <Input disabled placeholder="Dateigröße" defaultValue={`${item.bytes / 1000} kB`} />
          </FormItem>
        </Modal>
      );
    }
);

@withFile
export default class MediaModal extends Component {
  handleCancel = () => {
    this.props.onClose();
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
        onCreate={this.handleCreate}
      />
    );
  }
}
