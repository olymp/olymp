import React, { Component } from 'react';
import { Input, Button, Tabs } from 'antd';
import { Form, FormItem } from 'olymp';

export default class CollectionDetailForm extends Component {
  render() {
    const { schema, onCreate, className, style, form, item } = this.props;

    return (
      <div className={className} style={style}>
        {!!schema.header && schema.header.map(field => (
          <FormItem
            {...form}
            item={item}
            field={field}
            editor={<Input className="naked-area" autosize={{ minRows: 1, maxRows: 2 }} type="textarea" placeholder={(!!field['@'].label && field['@'].label.arg0) || 'Titel'} style={{ textAlign: 'center' }} />}
            clean
            key={field.name}
          />
        ))}

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
            <Form {...form} fields={schema.tabs[0]} item={item} />
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
