import React, { Component } from 'react';
import { withItem } from 'olymp';
import { Modal, Form, Input, Spin } from 'antd';

const FormItem = Form.Item;
const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

const PageForm = Form.create()(
  (props) => {
    const { item, form, onCreate, onCancel, saving } = props;
    const { getFieldDecorator } = form;

    if (!item) return <Modal {...modalSettings} title="Bearbeiten" onCancel={onCancel} onOk={onCreate}><Spin /></Modal>;

    return (
      <Modal {...modalSettings} confirmLoading={saving} title="Bearbeiten" onCancel={onCancel} onOk={onCreate}>
        <FormItem key="name" label="Name" {...formItemLayout}>
          {getFieldDecorator('name', { initialValue: item.name })(
            <Input />
          )}
        </FormItem>
        <FormItem key="parentId" label="Übergeordnet" {...formItemLayout}>
          {getFieldDecorator('parentId', { initialValue: item.parentId })(
            <Input />
          )}
        </FormItem>
        <FormItem key="slug" label="Slug" {...formItemLayout}>
          {getFieldDecorator('slug', { initialValue: item.slug })(
            <Input />
          )}
        </FormItem>
      </Modal>
    );
  }
);


@withItem({ name: 'page' })
export default class PageSettings extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      this.props.save(values, { commit: false }).then(this.props.onClose);
    });
  }

  render() {
    return (
      <PageForm
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    );
  }
}
