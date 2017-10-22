import React from 'react';
import Form from 'olymp-ui/form';
import { SplitView, Sidebar } from 'olymp-ui';
import { compose, withState } from 'recompose';
import { createComponent } from 'olymp-fela';
import FormItem from './item';

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
);

const FormComponent = enhance(
  ({
    schema,
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
    activeField,
    ...rest
  }) => {
    const moreChildren = [];
    if (activeField) {
      moreChildren.push(
        schema
          .filter(x => x.name === activeField)
          .map(field => (
            <FormItem
              {...rest}
              activeField={activeField}
              isActiveField
              form={form}
              field={field}
              item={item}
              key={field.name}
              wrap={false}
            />
          )),
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
            <Sidebar.Button
              onClick={() => router.push(this.getLink({ id: null }))}
              shape="circle"
              icon="save"
            />
          }
        >
          <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
            {schema.map(field => (
              <FormItem
                {...rest}
                isActive={activeField === field.name}
                activeField={activeField}
                form={form}
                field={field}
                item={item}
                key={field.name}
              />
            ))}
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
