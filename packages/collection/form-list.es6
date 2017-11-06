import React from 'react';
import Form from 'olymp-ui/form';
import { SplitView, Sidebar, List } from 'olymp-ui';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { Prompt } from 'olymp-router';
import { Collapse } from 'antd';
import { toLabel } from 'olymp-utils';
import DefaultEdits from './default-edits';
import { getValidationRules, getInitialValue, getFormSchema } from './utils';

const getHeader = title => (
  <div>
    {title}
    <i className="fa fa-close pull-right" />
  </div>
);

const Items = ({ index, schema, activeField, form, item, ...rest }) =>
  Object.keys(schema).map(key => {
    const field = schema[key];
    const { form: Com, fieldDecorator, ...restFields } = schema[key];
    if (!Com) {
      return null;
    }
    return fieldDecorator(index)(
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

const getDefaultEdit = field => {
  const find =
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].rule(field)) ||
    Object.keys(DefaultEdits).find(key => DefaultEdits[key].isDefault);
  if (find) {
    return DefaultEdits[find];
  }
  return null;
};

const enhance = compose(
  Form.create(),
  withPropsOnChange(['collection'], ({ collection, form, items }) => {
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
        fieldDecorator: index =>
          getFieldDecorator(`${index}.${field.name}`, {
            rules: getValidationRules(field),
            // valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
            initialValue: getInitialValue({ item: items[index], form }, field),
          }),
      };
    });
    return {
      schemaWithEdits,
      schema,
    };
  }),
  withState('collapsed', 'setCollapsed', true),
  withState('activeField', 'setActiveField'),
  withState('activeItem', 'setActiveItem'),
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
    items,
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
    activeItem,
    setActiveItem,
    collapsed,
    header = true,
    ...rest
  }) => {
    const moreChildren = [];
    if (
      activeField &&
      activeItem &&
      schemaWithEdits.full[activeField] &&
      items[activeItem]
    ) {
      const { full: Com, fieldDecorator, ...restFields } = schemaWithEdits.full[
        activeField
      ];
      collapsed =
        collapsed !== false && schemaWithEdits.full[activeField].collapse;
      moreChildren.push(
        fieldDecorator(activeItem)(
          <Com
            {...rest}
            {...restFields}
            key={activeField + activeItem}
            activeField={activeField}
            form={form}
            field={schemaWithEdits.full[activeField].type}
            item={items[activeItem]}
          />,
        ),
      );
    } else {
      collapsed = false;
    }

    return (
      <SplitView>
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <Sidebar
          isOpen
          padding={0}
          borderLess
          darkened={collapsed}
          width={collapsed ? 64 : 400}
          onMouseEnter={expand}
          onMouseLeave={collapse}
          title={header ? form.getFieldValue('name') || 'Bearbeiten' : null}
          rightButtons={
            header && (
              <Sidebar.Button onClick={onSave} shape="circle" icon="save" />
            )
          }
        >
          <Collapse
            accordion
            activeKeys={[activeItem]}
            onChange={setActiveItem}
          >
            {(items || []).map((item, i) => (
              <Collapse.Panel
                header={getHeader(item.name || `Eintrag ${i}`, i)}
                key={i}
              >
                <Form
                  layout={(vertical && 'vertical') || (inline && 'inline')}
                  key={activeItem}
                >
                  <List.Title>Unterpunkte</List.Title>
                  <Items
                    index={i}
                    schema={schemaWithEdits.full}
                    activeField={activeField}
                    form={form}
                    item={item}
                    {...rest}
                  />
                  <List.Title>Eingabe</List.Title>
                  <Items
                    index={i}
                    schema={schemaWithEdits.etc}
                    activeField={activeField}
                    form={form}
                    item={item}
                    {...rest}
                  />
                </Form>
              </Collapse.Panel>
            ))}
          </Collapse>
        </Sidebar>
        {children}
        {moreChildren}
      </SplitView>
    );
  },
);
FormComponent.displayName = 'FormComponent';
export default FormComponent;
