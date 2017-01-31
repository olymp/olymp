import React from 'react';
import { Form, Input, Tabs, Menu, Icon } from 'antd';
import { SlugEditor } from './editors';
import getInitialValue from './initial-value';
import getFormEditor from './form-editor';
import toLabel from './to-label';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default Form.create()(
  (props) => {
    const { schema, form, onCreate, item, className, style } = props;
    const { getFieldDecorator } = form;
    const renderForm = fields => (
      <Form horizontal>
        {fields.map((field) => {
          const title = field.description && field.description.indexOf('title:') !== -1 ? field.description.split('title:')[1].split('\n')[0] : toLabel(field.name);
          const editor = getFormEditor(field, name);
          if (!editor) return null;
          return (
            <Form.Item key={field.name} label={title.replace('-Ids', '').replace('-Id', '')} {...(field.type.name === 'Json' ? formItemLayout0 : formItemLayout)}>
              {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field), valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value' })(editor)}
            </Form.Item>
          );
        })}
      </Form>
    );

    const firstTab = Object.keys(schema.tabs)[0];
    return (
      <div className={className} style={style}>
        <Form horizontal>
          {schema.header.map(field => <Form.Item key={field.name} label="Name" {...formItemLayout0}>
            {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field) })(
              <Input className="naked-area" autosize={{ minRows: 1, maxRows: 2 }} type="textarea" placeholder="Titel ..." style={{ textAlign: 'center' }} />
            )}
          </Form.Item>)}
          <Menu mode="horizontal">
            {schema.bar.map(field => <Menu.Item style={{ width: 200 }} key={field.name}>
              {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field) })(
                getFormEditor(field)
              )}
            </Menu.Item>)}
            <Menu.Item style={{ float: 'right' }} key="save">
              <span onClick={onCreate}><Icon type="save" /> Speichern</span>
            </Menu.Item>
          </Menu>
        </Form>

        <div className="ant-form-content">
          {Object.keys(schema.tabs).length === 1 ? renderForm(schema.tabs[firstTab]) : (
            <Tabs defaultActiveKey={firstTab} animated={false} tabPosition="right">
              {Object.keys(schema.tabs).map(key => (
                <Tabs.TabPane tab={key} key={key}>
                  {renderForm(schema.tabs[key])}
                </Tabs.TabPane>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    );
  }
);
