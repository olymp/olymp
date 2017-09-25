import React from 'react';
import { Form } from 'antd';
import { toLabel } from 'olymp-utils';
import { getEditor, getValidationRules, getInitialValue } from './utils';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default (props) => {
  const { field, clean, itemStyle, style, form, item } = props;
  const { getFieldValue, getFieldError, getFieldDecorator } = form;

  const title = field['@'] && field['@'].label ? field['@'].label.arg0 : toLabel(field.name);
  const label = title.replace('-Ids', '').replace('-Id', '');
  const hint = field['@'] && field['@'].hint && field['@'].hint.arg0 ? field['@'].hint : {};
  const value = getFieldValue(field.name);
  const extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;
  const isBool = field.type.name === 'Boolean';
  const errors = [
    ...(getFieldError(field.name) || []),
    ...(getFieldError(field['@'] && field['@'].endField && field['@'].endField.name) || []),
  ].join('\n');
  let initialValue = getInitialValue(props, field);

  const isDateRange = !!field['@'].start && !!field['@'].endField;
  if (isDateRange) {
    const start = item[field.name];
    const end = item[field['@'].endField.name];

    initialValue = [start, end];
  }

  const editor = getEditor({ field });

  if (!editor) {
    return null;
  }

  return (
    <Form.Item
      label={!clean && label}
      extra={!isBool && extra}
      validateStatus={errors ? 'error' : ''}
      help={errors}
      hasFeedback
      style={{ ...itemStyle, ...style }}
      {...(field.type.name === 'Blocks' || clean ? formItemLayout0 : formItemLayout)}
    >
      {getFieldDecorator(field.name, {
        initialValue,
        rules: getValidationRules(field),
        valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
      })(editor)}
    </Form.Item>
  );
};
