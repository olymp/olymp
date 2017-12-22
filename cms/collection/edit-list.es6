import React, { Component } from 'react';
import {
  compose,
  toClass,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { Modal, SectionHeading, Sidebar } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import { FaPlus } from 'olymp-icons';
import { Form, Button } from 'antd';
import { get } from 'lodash';
import DetailForm from './form';
import FormItem from './form-item';
import withCollection from './with-collection';

const enhance = compose(
  Form.create(),
  withState('isOpen', 'setOpen', false),
  withState('activeIndex', 'setActiveIndex'),
  withProps(({ type }) => ({
    typeName: type.ofType.name,
  })),
  withHandlers({
    onChangeItem: ({ onChange, value, form, activeIndex }) => () => {
      form.validateFields((err, values) => {
        if (err) {
          console.log(err);
        } else if (activeIndex === undefined) {
          onChange([...(value || []), values]);
        } else {
          const newValues = [...(value || [])];
          newValues[activeIndex] = values;
          onChange(newValues);
        }
      });
    },
  }),
  withCollection,
);

@enhance
class EditList extends Component {
  componentWillReceiveProps({ activeIndex, form: { resetFields } }) {
    if (this.props.activeIndex !== activeIndex) {
      resetFields();
    }
  }

  render() {
    const {
      value = [],
      isOpen,
      setOpen,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      collection,
      label,
      name,
      activeIndex,
      setActiveIndex,
      form,
      onChange,
      onChangeItem,
      ...props
    } = this.props;

    return (
      <FormItem {...props}>
        <Button
          onClick={() => setOpen(true)}
          data-__field={dataField}
          data-__meta={dataMeta}
        >
          {value.length} Einträge
        </Button>

        <Modal width={800} open={isOpen} onClose={() => setOpen(false)}>
          <Sidebar
            menu={
              <Menu>
                <Menu.Item icon={<FaPlus />} onClick={() => setActiveIndex()}>
                  Hinzufügen
                </Menu.Item>
                <Menu.Divider />
                {value.map((v, i) => (
                  <Menu.Item
                    key={v[get(collection, 'specialFields.nameField', 'name')]}
                    onClick={() => setActiveIndex(i)}
                  >
                    {v[get(collection, 'specialFields.nameField', 'name')]}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            {activeIndex === undefined ? (
              <SectionHeading>{label || 'Item'} anlegen</SectionHeading>
            ) : (
              <SectionHeading description={`${label || 'Item'} bearbeiten`}>
                Bearbeiten
              </SectionHeading>
            )}

            <DetailForm
              form={form}
              item={value[activeIndex]}
              collection={collection}
              embedded
              onSave={onChangeItem}
              onDelete={
                activeIndex !== undefined &&
                (() => {
                  onChange(value.filter((x, i) => i !== activeIndex));
                  if (!activeIndex) {
                    setActiveIndex(activeIndex - 1);
                  } else {
                    setActiveIndex();
                  }
                })
              }
              onClose={() => setOpen(false)}
            />
          </Sidebar>
        </Modal>
      </FormItem>
    );
  }
}

export default {
  collapse: true,
  rule: ({ type }) =>
    type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0,
  form: toClass(({ form, ...props }) => <EditList {...props} />),
};
