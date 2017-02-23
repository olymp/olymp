import React, { Component } from 'react';
import { Form } from 'antd';
import toLabel from '../../to-label';
import FieldEditor from './editor';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default class FormItem extends Component {
  render() {
    const { field, clean, itemStyle, style, ...rest } = this.props;
    const { item, getFieldValue, getFieldError } = this.props;

    const title = field['@'] && field['@'].label ? field['@'].label.arg0 : toLabel(field.name);
    const label = title.replace('-Ids', '').replace('-Id', '');
    const hint = field['@'] && field['@'].hint && field['@'].hint.arg0 ? field['@'].hint : {};
    const value = getFieldValue(field.name);
    const extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;
    const isBool = field.type.name === 'Boolean';
    const errors = [
      ...(getFieldError(field.name) || []),
      ...(getFieldError(field['@'] && field['@'].endField && field['@'].endField.name) || [])
    ].join('\n');

    return (
      <Form.Item
        label={!clean && label}
        extra={!isBool && extra}
        validateStatus={errors ? 'error' : ''}
        help={errors}
        hasFeedback
        style={{ ...itemStyle, ...style }}
        {...(field.type.name === 'Json' || clean ? formItemLayout0 : formItemLayout)}
      >
        <FieldEditor
          field={field}
          label={isBool ? extra : !!clean && label}
          {...rest}
        />
      </Form.Item>
    );
  }
}
