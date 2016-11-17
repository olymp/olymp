import React, { Component } from 'react';
import { Modal, Form, Input, Select, Spin } from 'antd';
import withFile from '../../decorators/file';

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
          <FormItem key="tags" label="Tags" {...formItemLayout}>
            {getFieldDecorator('tags', {
              initialValue: item.tags || [],
            })(
              <Select {...props} tags searchPlaceholder="Suche ..." />
            )}
          </FormItem>
          <img
            src={item.url}
            style={{
              maxWidth: '100%',
              maxHeight: '520px',
              margin: '0 auto',
            }}
          />
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
