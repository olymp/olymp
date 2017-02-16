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
    const item = items && items.length ? items[0] : {};

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      saveCollectionItem({ ...item, ...values });
    });
  }

  render() {
    const { items, collection, fieldNames, collectionLoading } = this.props;

    const content = collectionLoading || !fieldNames || !collection || !items ? (
      <div style={{ minHeight: 400 }}>
        <Spin size="large" />
      </div>
    ) : (
      <Form
        {...this.props}
        item={items && items.length ? items[0] : {}}
        schema={{ tabs: { default: collection.fields.filter(field => field.name !== 'id') } }}
        ref={form => this.form = form}
        onCreate={this.handleCreate}
      />
    );

    return (
      <Modal>
        <Sidebar activePage="Einstellungen" isLoading={collectionLoading} />

        <div className="container olymp-container" style={{ position: 'relative' }}>
          <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>Globale Einstellungen</h1>
          {content}
        </div>
      </Modal>
    );
  }
}
