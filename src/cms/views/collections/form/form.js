import React from 'react';
import { Form, Input, Tabs, Menu, Icon } from 'antd';
import getInitialValue from './initial-value';
import getFormEditor from './form-editor';
import getValidationRules from './get-validation-rules';
import toLabel from './to-label';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default Form.create()(
  (props) => {
    const { schema, form, onCreate, className, style } = props;
    const { getFieldDecorator } = form;
    const renderForm = fields => (
      <Form horizontal>
        {fields.map((field) => {
          const getFieldEditor = (field, label) => {
            const editor = getFormEditor(field, label);

            if (!editor) return null;

            return getFieldDecorator(field.name, {
              initialValue: getInitialValue(props, field),
              rules: getValidationRules(field),
              valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value'
            })(editor);
          };

          const title = field['@'].label ? field['@'].label.arg0 : toLabel(field.name);
          const content = getFieldEditor(field);

          if (!content) return null;

          const value = content.props.value || content.props.checked;
          const label = title.replace('-Ids', '').replace('-Id', '');
          const hint = field['@'].hint && field['@'].hint.arg0 ? field['@'].hint : {};
          const extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;

          return (
            <Form.Item key={field.name} label={label} extra={field.type.name !== 'Boolean' && extra} {...(field.type.name === 'Json' ? formItemLayout0 : formItemLayout)}>
              {field.type.name === 'Boolean' ? getFieldEditor(field, extra) : content}
            </Form.Item>
          );
        })}
      </Form>
    );

    const firstTab = !!schema && Object.keys(schema.tabs)[0];
    return (
      <div className={className} style={style}>
        <Form horizontal>
          {!!schema.header && schema.header.map(field => <Form.Item key={field.name} label="Name" extra={field['@'].hint && field['@'].hint.arg0} {...formItemLayout0}>
            {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field), rules: getValidationRules(field) })(
              <Input className="naked-area" autosize={{ minRows: 1, maxRows: 2 }} type="textarea" placeholder={(!!field['@'].label && field['@'].label.arg0) || 'Titel'} style={{ textAlign: 'center' }} />
            )}
          </Form.Item>)}
          <Menu mode="horizontal">
            {!!schema.bar && schema.bar.map(field => {
              const title = field['@'].label ? field['@'].label.arg0 : toLabel(field.name);
              const label = title.replace('-Ids', '').replace('-Id', '');
              const editor = getFormEditor(field, label);

              return (
                <Menu.Item style={{ minWidth: '20%', maxWidth: `${100 - (20 * schema.bar.length)}%` }} key={field.name}>
                  {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field), rules: getValidationRules(field) })(editor)}
                </Menu.Item>
              );
            })}
            <Menu.Item style={{ float: 'right', width: '20%' }} key="save">
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
