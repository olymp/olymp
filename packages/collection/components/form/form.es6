import React from 'react';
import { Form, Tabs } from 'antd';
import { SplitView, Sidebar } from 'olymp-ui';
import { withState, withProps, compose } from 'recompose';
import { withJsonState } from 'olymp-slate';
import { createComponent } from 'react-fela';
import Navigator from 'olymp-slate/navigator';
import FormItem from './item';

const TabPane = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
    padding: 10,
  }),
  Tabs.TabPane,
  p => Object.keys(p),
);

const Horizontal = createComponent(
  () => ({
    display: 'flex',
    '> .form-images': {
      flex: 1,
      margin: 10,
      '& .ant-form-item-label': {
        display: 'none',
      },
    },
    '> .form-rest': {
      margin: 10,
      flex: 1,
    },
  }),
  'div',
);

const Div = createComponent(
  () => ({
    padding: 20,
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
  withProps(({ form, schema, item }) => {
    if (item) {
      form.getFieldDecorator('blocks', { initialValue: item.blocks });
      return {
        onChange: (blocks) => {
          form.setFieldsValue({ blocks });
        },
        value: form.getFieldValue('blocks'),
      };
    }
    return {
      onChange: () => {},
      value: null,
    };
  }),
  withJsonState(),
);

const FormComponent = enhance(
  withState(
    'tab',
    'setTab',
  )(
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
      onChange,
      value,
      base64,
      ...rest
    }) => {
      if (schema.blocks.length) {
        return (
          <SplitView>
            <Sidebar isOpen padding={0}>
              <Tabs
                activeKey={tab || ''}
                onTabClick={setTab}
                size="small"
                tabBarStyle={{ marginBottom: 0 }}
              >
                <TabPane tab="Formular" key="">
                  <Form layout={(vertical && 'vertical') || (inline && 'inline')}>
                    {schema.images.map(field => (
                      <FormItem {...rest} form={form} field={field} item={item} key={field.name} />
                    ))}
                    {schema.rest.map(field => (
                      <FormItem {...rest} form={form} field={field} item={item} key={field.name} />
                    ))}
                  </Form>
                </TabPane>
                <TabPane tab="Editor" key="tree">
                  <Navigator value={value} onChange={onChange} base64={base64} />
                </TabPane>
              </Tabs>
              <Buttons>{children}</Buttons>
            </Sidebar>
            <Div>
              {schema.blocks.map(field => (
                <FormItem
                  {...rest}
                  form={form}
                  field={field}
                  item={item}
                  key={field.name}
                  value={value}
                  onChange={onChange}
                  wrap={false}
                />
              ))}
            </Div>
          </SplitView>
        );
      }
      return (
        <Horizontal className={className}>
          <Form layout={(vertical && 'vertical') || (inline && 'inline')} className="form-rest">
            {schema.rest.map(field => (
              <FormItem {...rest} form={form} field={field} item={item} key={field.name} />
            ))}
            <Buttons>{children}</Buttons>
          </Form>
          <Form className="form-images" layout={(vertical && 'vertical') || (inline && 'inline')}>
            {schema.images.map(field => (
              <FormItem {...rest} form={form} field={field} item={item} key={field.name} />
            ))}
          </Form>
        </Horizontal>
      );
    },
  ),
);
FormComponent.displayName = 'FormComponent';
export default FormComponent;
