import React from 'react';
import Form from 'olymp-ui/form';
import { SplitView, Sidebar } from 'olymp-ui';
import { compose, withState, withPropsOnChange } from 'recompose';
import { createComponent } from 'olymp-fela';
import { toLabel } from 'olymp-utils';
import DefaultEdits from '../../default-edits';
import { getValidationRules, getInitialValue } from './utils';

const getDefaultEdit = type => {
  const find = Object.keys(DefaultEdits).find(key =>
    DefaultEdits[key].selector(type),
  );
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
    const schemaWithEdits = {};
    schema.forEach(field => {
      const edit = getDefaultEdit(field) || {};
      const title =
        field['@'] && field['@'].label
          ? field['@'].label.arg0
          : toLabel(field.name);
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
    if (
      activeField &&
      schemaWithEdits[activeField] &&
      schemaWithEdits[activeField].full
    ) {
      const { full: Com, fieldDecorator, ...restFields } = schemaWithEdits[
        activeField
      ];
      console.log(rest, restFields);
      moreChildren.push(
        fieldDecorator()(
          <Com
            {...rest}
            {...restFields}
            key={activeField}
            activeField={activeField}
            form={form}
            field={schemaWithEdits[activeField].type}
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
            {Object.keys(schemaWithEdits).map(key => {
              const field = schemaWithEdits[key];
              const {
                form: Com,
                fieldDecorator,
                ...restFields
              } = schemaWithEdits[key];
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
            })}
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
