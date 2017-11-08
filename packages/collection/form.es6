import React from 'react';
import Form from 'olymp-ui/form';
import { Sidebar } from 'olymp-ui';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { createComponent, Container } from 'olymp-fela';
import { Prompt } from 'olymp-router';
import { get } from 'lodash';
import { Popconfirm } from 'antd';
import DefaultEdits from './default-edits';
import { getValidationRules, getInitialValue, getFormSchema } from './utils';

const Items = ({ schema, form, item, value, ...rest }) =>
  Object.keys(schema).map(key => {
    const field = schema[key];
    const { form: Com, fieldDecorator, ...restFields } = schema[key];
    if (!Com) {
      return null;
    }

    const rule = [];
    if (get(field, 'type.kind') === 'NON_NULL') {
      rule.push('required');
    }

    return fieldDecorator()(
      <Com
        {...rest}
        {...restFields}
        form={form}
        field={field}
        item={item}
        rule={rule}
        key={field.name}
      />,
    );
  });

const getDefaultEdit = type => {
  const find =
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].rule(type)) ||
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].isDefault);
  if (find) {
    return DefaultEdits[find];
  }
  return null;
};

const Div = createComponent(
  ({ theme }) => ({
    '> div': {
      height: '100%',
      padding: 0,
    },
  }),
  'div',
);

const Buttons = createComponent(
  () => ({
    '> button': {
      margin: 5,
    },
  }),
  'div',
);

const enhance = compose(
  withPropsOnChange(['collection'], ({ collection, form, ...props }) => {
    const schema = getFormSchema(collection.fields);
    const { getFieldDecorator } = form;
    const schemaWithEdits = {};
    schema.forEach(field => {
      const edit = getDefaultEdit(field) || {};
      const title = get(field, 'specialFields.label');
      const label = title.replace('-Ids', '').replace('-Id', '');
      schemaWithEdits[field.name] = {
        ...field,
        ...edit,
        title,
        label,
        fieldDecorator: () =>
          getFieldDecorator(field.name, {
            rules: getValidationRules(field),
            // valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
            initialValue: getInitialValue(props, field),
          }),
      };
    });
    return {
      schemaWithEdits,
      schema,
    };
  }),
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    expand: ({ setCollapsed }) => () => setCollapsed(false),
    collapse: ({ setCollapsed }) => () => setCollapsed(true),
  }),
);

const FormComponent = enhance(
  ({
    schema,
    schemaWithEdits,
    inline,
    vertical,
    children,
    item,
    className,
    validateFields,
    form,
    collection,
    setTab,
    tab,
    expand,
    collapse,
    onSave,
    onDelete,
    collapsed,
    header = true,
    ...rest
  }) => (
    <Div>
      <Container size="small">
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <Sidebar
          isOpen
          width="100%"
          borderLess
          title={header ? form.getFieldValue('name') || 'Bearbeiten' : null}
          leftButtons={
            header && (
              <Popconfirm
                placement="bottom"
                title="Wirklich löschen?"
                onConfirm={onDelete}
                okText="Ja"
                cancelText="Nein"
              >
                <Sidebar.Button shape="circle" icon="delete" />
              </Popconfirm>
            )
          }
          rightButtons={
            header && (
              <Sidebar.Button onClick={onSave} shape="circle" icon="save" />
            )
          }
        >
          <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
            <Items schema={schemaWithEdits} form={form} item={item} {...rest} />
          </Form>
          <Buttons>{children}</Buttons>
        </Sidebar>
      </Container>
    </Div>
  ),
);
FormComponent.displayName = 'FormComponent';
export default FormComponent;
