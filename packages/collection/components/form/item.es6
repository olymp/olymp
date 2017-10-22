import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { toLabel } from 'olymp-utils';
import { getEditor, getValidationRules, getInitialValue } from './utils';
import { createComponent } from 'react-fela';
import { FaAngleRight } from 'olymp-icons';

const Div = createComponent(
  ({ isActive }) => ({
    borderBottom: '1px solid #eeeeee',
    paddingY: 5,
    marginBottom: 0,
    paddingX: 8,
    cursor: 'pointer',
    backgroundColor: isActive ? '#f3f3f3' : undefined,
    onHover: {
      backgroundColor: '#f3f3f3',
    },
    '> div.ant-form-item.ant-row.ant-form-item.ant-form-item-no-colon': {
      marginBottom: 0,
    },
  }),
  'div',
  ['onClick'],
);

export default props => {
  const {
    field,
    clean,
    itemStyle,
    style,
    form,
    item,
    wrap,
    setActiveField,
    activeField,
    isActiveField,
    isActive,
  } = props;
  const { getFieldValue, getFieldError, getFieldDecorator } = form;

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
      field['@'] && field['@'].endField && field['@'].endField.name,
    ) || []),
  ].join('\n');
  let initialValue = getInitialValue(props, field);

  const isDateRange = !!field['@'].start && !!field['@'].endField;
  if (isDateRange) {
    const start = item[field.name];
    const end = item[field['@'].endField.name];

    initialValue = [start, end];
  }
  const editor = getEditor({
    field,
    form,
    setActiveField,
    activeField,
    isActiveField,
  });

  if (!editor) {
    return null;
  }

  if (isActiveField) {
    return getFieldDecorator(field.name, {
      initialValue,
      rules: getValidationRules(field),
      valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
    })(editor);
  }

  if (typeof editor === 'string') {
    return (
      <Div isActive={isActive} onClick={x => setActiveField(field.name)}>
        <Form.Item
          label={!clean && label}
          extra={!isBool && extra}
          validateStatus={errors ? 'error' : ''}
          help={errors}
          hasFeedback
          style={{ ...itemStyle, ...style }}
          {...defaultLayout}
        >
          {editor}
          <FaAngleRight
            size={18}
            color={isActive ? true : undefined}
            style={{
              position: 'absolute',
              right: -3,
              top: 7,
            }}
          />
        </Form.Item>
      </Div>
    );
  }

  return (
    <Div isActive={isActive} onClick={x => setActiveField(null)}>
      <Form.Item
        label={!clean && label}
        extra={!isBool && extra}
        validateStatus={errors ? 'error' : ''}
        help={errors}
        hasFeedback
        style={{ ...itemStyle, ...style }}
        {...defaultLayout}
      >
        {getFieldDecorator(field.name, {
          initialValue,
          rules: getValidationRules(field),
          valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
        })(editor)}
      </Form.Item>
    </Div>
  );
};
