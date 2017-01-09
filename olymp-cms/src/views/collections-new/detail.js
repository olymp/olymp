import React, { Component } from 'react';
import { withItem, withCollection } from 'olymp';
import { Form } from './form';
import './detail.less';

@withCollection
@withItem({})
export default class MainDetail extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { save, onClose } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      save(values, { commit: false }).then(onClose);
    });
  }

  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <Form
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    );
  }
}
