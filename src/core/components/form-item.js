import React, { Component } from 'react';
import { Form } from 'antd';
import toLabel from '../to-label';
import FieldEditor from './field-editor';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default class FormItem extends Component {
  render() {
    const { field, clean, itemStyle, style, ...rest } = this.props;
    const { item, getFieldValue } = this.props;

    const title = field['@'] && field['@'].label ? field['@'].label.arg0 : toLabel(field.name);
    const label = title.replace('-Ids', '').replace('-Id', '');
    const hint = field['@'] && field['@'].hint && field['@'].hint.arg0 ? field['@'].hint : {};
    const isBool = field.type.name === 'Boolean';
    const content = <FieldEditor field={field} label={!!clean && label} {...rest} />;

    if (!content) return null;

    const value = getFieldValue(field.name);
    const extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;

    return (
      <Form.Item
        label={!clean && label}
        extra='test'
        style={{ ...itemStyle, ...style }}
        {...(field.type.name === 'Json' || clean ? formItemLayout0 : formItemLayout)}
      >
        {isBool ? <FieldEditor field={field} label={extra} {...rest} /> : content}
      </Form.Item>
    );
  }
}
