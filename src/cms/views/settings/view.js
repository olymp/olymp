import React, { Component } from 'react';
import { withItems } from 'olymp';
import { Spin } from 'antd';
import { Form } from '../collections/form';
import Modal from '../modal';
import Sidebar from '../sidebar';

@withItems()
export default class SettingView extends Component {
  handleCreate = () => {
    const { saveCollectionItem, items } = this.props;
    const form = this.form;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const item = items && items.length ? items[0] : {};

      console.log(item, values);

      saveCollectionItem({ ...item, ...values });
    });
  }

  render() {
    const { items, collection, fieldNames, collectionLoading } = this.props;

    console.log(this.props);

    const content = collectionLoading || !fieldNames || !collection ? (
      <div style={{ minHeight: 400 }}>
        <Spin size="large" />
      </div>
    ) : (
      <Form
        {...this.props}
        item={items && items.length ? items[0] : {}}
        schema={{ tabs: { test: collection.fields } }}
        ref={form => this.form = form}
        onCreate={this.handleCreate}
      />
    );

    return (
      <Modal>
        <Sidebar activePage="Einstellungen" isLoading={collectionLoading} />

        <div className="container olymp-container">
          <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>Globale Einstellungen</h1>
          {content}
        </div>
      </Modal>
    );
  }
}
