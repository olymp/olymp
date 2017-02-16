import React, { Component } from 'react';
import { withItems, withForm } from 'olymp';
import { Spin, Button, Tabs } from 'antd';
import { Form } from 'olymp';
import Modal from '../modal';
import Sidebar from '../sidebar';

@withItems()
@withForm
export default class SettingView extends Component {
  handleCreate = () => {
    const { saveCollectionItem, items, form } = this.props;
    const item = items && items.length ? items[0] : {};

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      saveCollectionItem({ ...item, ...values });
    });
  }

  render() {
    const { items, collection, fieldNames, collectionLoading, form } = this.props;

    const tabs = {};
    if (collection && collection.fields) {
      collection.fields.forEach((field) => {
        const key = field['@'] && field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';

        if (!tabs[key]) tabs[key] = [];
        tabs[key].push(field);
      });
    }

    const content = collectionLoading || !fieldNames || !collection || !items ? (
      <div style={{ minHeight: 400 }}>
        <Spin size="large" />
      </div>
    ) : (
      <div>
        <Tabs tabPosition="right" className="mt-2">
          {Object.keys(tabs).map(key => (
            <Tabs.TabPane tab={key} key={key}>
              <Form {...form} vertical fields={tabs[key]} item={items && items.length ? items[0] : {}} />
              <Button type="primary" onClick={this.handleCreate} style={{ float: 'right' }}>Speichern</Button>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    );

    return (
      <Modal>
        <Sidebar activePage="Einstellungen" isLoading={collectionLoading} />

        <div className="container olymp-container p-1" style={{ position: 'relative' }}>
          <h1 style={{ textAlign: 'center' }}>Globale Einstellungen</h1>
          {content}
        </div>
      </Modal>
    );
  }
}
