import React from 'react';
import Form from 'olymp-ui/form';
import { SplitView, Sidebar, List } from 'olymp-ui';
import { compose, withState, withPropsOnChange } from 'recompose';
import { createComponent } from 'olymp-fela';
import { toLabel } from 'olymp-utils';
import DefaultEdits from '../../default-edits';
import { getValidationRules, getInitialValue } from './utils';

const Items = ({ schema, activeField, form, item, ...rest }) =>
  Object.keys(schema).map(key => {
    const field = schema[key];
    const { form: Com, fieldDecorator, ...restFields } = schema[key];
    if (!Com) {
      return null;
    }
    return fieldDecorator()(
      <Com
        {...rest}
        {...restFields}
        isActive={activeField === field.name}
        activeField={activeField}
        form={form}
        field={field}
        item={item}
        key={field.name}
      />,
    );
  });

const getDefaultEdit = type => {
  const find =
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].selector(type)) ||
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].isDefault);
  if (find) {
    return DefaultEdits[find];
  }
  return null;
};

const Buttons = createComponent(
  () => ({
    '> button': {
      margin: 5,
    },
  }),
  'div',
);

const enhance = compose(
  withState('tab', 'setTab'),
  withState('activeField', 'setActiveField'),
  withPropsOnChange(['schema'], ({ schema, form, ...props }) => {
    const { getFieldDecorator } = form;
    const schemaWithEdits = {
      full: {},
      etc: {},
    };
    schema.forEach(field => {
      const edit = getDefaultEdit(field) || {};
      const title =
        field['@'] && field['@'].label
          ? field['@'].label.arg0
          : toLabel(field.name);
      const label = title.replace('-Ids', '').replace('-Id', '');
      schemaWithEdits[edit.full ? 'full' : 'etc'][field.name] = {
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
    };
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
    collapsed,
    onSave,
    activeField,
    ...rest
  }) => {
    const moreChildren = [];
    if (activeField && schemaWithEdits.full[activeField]) {
      const { full: Com, fieldDecorator, ...restFields } = schemaWithEdits.full[
        activeField
      ];
      moreChildren.push(
        fieldDecorator()(
          <Com
            {...rest}
            {...restFields}
            key={activeField}
            activeField={activeField}
            form={form}
            field={schemaWithEdits.full[activeField].type}
            item={item}
          />,
        ),
      );
    }
    return (
      <SplitView>
        <Sidebar
          isOpen
          padding={0}
          width={400}
          title={form.getFieldValue('name') || 'Bearbeiten'}
          rightButtons={
            <Sidebar.Button onClick={onSave} shape="circle" icon="save" />
          }
        >
          <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
            <List.Title>Unterpunkte</List.Title>
            <Items
              schema={schemaWithEdits.full}
              activeField={activeField}
              form={form}
              item={item}
              {...rest}
            />
            <List.Title>Eingabe</List.Title>
            <Items
              schema={schemaWithEdits.etc}
              activeField={activeField}
              form={form}
              item={item}
              {...rest}
            />
          </Form>
          <Buttons>{children}</Buttons>
        </Sidebar>
        {children}
        {moreChildren}
      </SplitView>
    );
  },
);
FormComponent.displayName = 'FormComponent';
export default FormComponent;
