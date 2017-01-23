import React, { Component } from 'react';
import { withItem, withCollection } from 'olymp';
import { Spin, Button } from 'antd';
import { Form } from './form';
import { createComponent } from 'react-fela';
import './detail.less';

@withItem({})
export default class MainDetail extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { save, onClose, refetch, query } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      save(values, { commit: false }).then(() => {
        if (refetch) refetch(query);
      });
    });
  }

  render() {
    const { item } = this.props;

    if (!item || this.props.loading) return <Spin size="large" />;

    return (
      <div className="container olymp-container">
        <Form
          {...this.props}
          ref={form => this.form = form}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
