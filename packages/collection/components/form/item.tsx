import React from 'react';
import { Form } from 'antd';
import { withAuth } from 'olymp-auth';
import { toLabel } from 'olymp';
import { getEditor, getValidationRules, getInitialValue } from './utils';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

export default withAuth((props) => {
  const { field, clean, itemStyle, style, form } = props;
  const { getFieldValue, getFieldError } = form;

  const title =
    field['@'] && field['@'].label
      ? field['@'].label.arg0
      : toLabel(field.name);
  const label = title.replace('-Ids', '').replace('-Id', '');
  const hint =
    field['@'] && field['@'].hint && field['@'].hint.arg0
      ? field['@'].hint
      : {};
  const value = getFieldValue(field.name);
  const extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;
  const isBool = field.type.name === 'Boolean';
  const errors = [
    ...(getFieldError(field.name) || []),
    ...(getFieldError(
      field['@'] && field['@'].endField && field['@'].endField.name
    ) || []),
  ].join('\n');

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
      {...(field.type.name === 'Blocks' || clean
        ? formItemLayout0
        : formItemLayout) }
    >
      {form.getFieldDecorator(field.name, {
        initialValue: getInitialValue(props, field),
        rules: getValidationRules(field),
        valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
      })(editor)}
    </Form.Item>
  );
});

/*
const isDateRange = !!field['@'].start && !!field['@'].endField;
if (isDateRange) {
  const start = this.state.start || item[field.name];
  const end = this.state.end || item[field['@'].endField.name];

  return (
    <div>
      {this.fieldToEditor({
        onChange: (e) => {
          setFieldsValue({
            [field.name]: e[0],
            [field['@'].endField.name]: e[1],
          });
          this.setState({ start: e[0], end: e[1] });
        },
        value: [start, end],
      })}
      {getFieldDecorator(field.name, {
        initialValue: start,
        rules,
      })(<DateEditor style={{ display: 'none' }} />)}
      {getFieldDecorator(field['@'].endField.name, {
        initialValue: end,
        rules: getValidationRules(field['@'].endField),
      })(<DateEditor style={{ display: 'none' }} />)}
    </div>
  );
}*/
