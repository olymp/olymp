import React, { Component } from 'react';
import { withItem, withCollection, withRouter } from 'olymp';
import { Spin, Button } from 'antd';
import { Form } from './form';
import { createComponent } from 'react-fela';
import './detail.less';

@withItem({})
@withRouter
export default class MainDetail extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { save, onClose, refetch, query, typeName, id, location, router } = this.props;
    const { pathname } = location;
    const form = this.form;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      save(values, { commit: false }).then((obj) => {
        if (!id) {
          router.push({ pathname, query: { [`@${typeName.toLowerCase()}`]: obj[typeName.toLowerCase()].id } });
        }

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
