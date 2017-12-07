import React from 'react';
import Form from 'olymp-ui/form';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { Container, Sidebar } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import { withRouter, Prompt } from 'olymp-router';
import { FaPencil, FaTrashO, FaSave, FaTimes } from 'olymp-icons';
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

const enhance = compose(
  withRouter,
  withPropsOnChange(
    ['collection', 'query'],
    ({ collection, form, query, ...props }) => {
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
              initialValue: query[field.name] || getInitialValue(props, field),
            }),
        };
      });
      return {
        schemaWithEdits,
        schema,
      };
    },
  ),
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
    onClose,
    collapsed,
    embedded,
    ...rest
  }) => (
    <Sidebar
      right
      collapsed
      menu={
        <Menu
          header={<Menu.Item icon={<FaPencil />} large />}
          headerColor
          headerInverted
        >
          <AntMenu.Tooltip onClick={onSave} icon={<FaSave />}>
            Speichern
          </AntMenu.Tooltip>
          {!!onDelete && (
            <Popconfirm
              placement="left"
              title="Wirklich löschen?"
              onConfirm={onDelete}
              okText="Ja"
              cancelText="Nein"
            >
              <AntMenu.Tooltip icon={<FaTrashO />}>Löschen</AntMenu.Tooltip>
            </Popconfirm>
          )}
          {!!onClose && (
            <AntMenu.Tooltip icon={<FaTimes />} onClick={onClose}>
              Schließen
            </AntMenu.Tooltip>
          )}
        </Menu>
      }
    >
      <Container size="small">
        {!!embedded && (
          <Prompt
            when={form.isFieldsTouched()}
            message={() => 'Änderungen verwerfen?'}
          />
        )}

        {embedded ? (
          <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
            <Items schema={schemaWithEdits} form={form} item={item} {...rest} />
          </Form>
        ) : (
          <Items schema={schemaWithEdits} form={form} item={item} {...rest} />
        )}
      </Container>
    </Sidebar>
  ),
);
FormComponent.displayName = 'FormComponent';
export default FormComponent;
