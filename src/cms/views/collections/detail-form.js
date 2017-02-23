import React, { Component } from 'react';
import { Input, Button, Tabs } from 'antd';
import { Form, FormItem } from 'olymp';

export default class CollectionDetailForm extends Component {
  render() {
    const { schema, onCreate, className, style, form, item } = this.props;

    return (
      <div className={className} style={style}>
        <Form
          {...form}
          fields={schema.header}
          item={item}
          editorClassName="naked-area"
          editorStyle={{ textAlign: 'center' }}
          clean
        />

        <Form
          {...form}
          fields={schema.bar}
          item={item}
          itemStyle={{ minWidth: '20%', maxWidth: `${100 - (20 * schema.bar.length)}%` }}
          editorClassName="inline-edit"
          style={{ borderBottom: '1px solid #e9e9e9' }}
          inline
          clean
        >
          <div style={{ float: 'right', width: '20%', textAlign: 'right' }} key="save">
            <Button style={{ border: 0, backgroundColor: '#FFFFFF' }} icon="save" onClick={onCreate}>Speichern</Button>
          </div>
        </Form>

        <div className="ant-form-content pt-1">
          {Object.keys(schema.tabs).length === 1 ? (
            <Form {...form} fields={schema.tabs.Allgemein} item={item} />
          ) : (
            <Tabs tabPosition="right">
              {Object.keys(schema.tabs).map(key => (
                <Tabs.TabPane tab={key} key={key}>
                  <Form {...form} fields={schema.tabs[key]} item={item} />
                </Tabs.TabPane>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    );
  }
}
