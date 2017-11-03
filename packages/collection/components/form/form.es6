import React from 'react';
import Form from 'olymp-ui/form';
import { SplitView, Sidebar, List } from 'olymp-ui';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { Container, createComponent } from 'olymp-fela';
import { toLabel } from 'olymp-utils';
import DefaultEdits from '../../default-edits';
import FormItem from '../../form-item';
import { getValidationRules, getInitialValue, getFormSchema } from './utils';

const Items = ({ schema, activeField, form, item, value, ...rest }) =>
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
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].rule(type)) ||
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
  withPropsOnChange(['collection'], ({ collection, form, ...props }) => {
    const schema = getFormSchema(collection.fields);
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
    activeField,
    setActiveField,
    collapsed,
    header = true,
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
          title={header ? form.getFieldValue('name') || 'Bearbeiten' : null}
          rightButtons={
            header && (
              <Sidebar.Button onClick={onSave} shape="circle" icon="save" />
            )
          }
        >
          <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
            <Container size="small">
              <Items
                schema={schemaWithEdits.full}
                setActiveField={setActiveField}
                activeField={activeField}
                form={form}
                item={item}
                {...rest}
              />
              <Items
                schema={schemaWithEdits.etc}
                activeField={activeField}
                form={form}
                item={item}
                {...rest}
              />
            </Container>
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
