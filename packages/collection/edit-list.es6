import React from 'react';
import {
  compose,
  toClass,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { createComponent, Modal } from 'olymp-fela';
import { Button } from 'antd';
import Form from './components/form/form-list';
import FormItem from './form-item';
import withCollection from './decorators/with-collection';

const Footer = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
  }),
  ({ onClose, className }) => (
    <div className={className}>
      <Button type="primary" onClick={onClose}>
        Übernehmen
      </Button>
    </div>
  ),
  p => Object.keys(p),
);

const Component = ({ value, collection, id, ...props }) => (
  <Form {...props} items={value || []} collection={collection} label={id} />
);

const enhance = compose(
  toClass,
  withProps(({ type }) => ({
    typeName: type.ofType.name,
  })),
  withHandlers({
    onChangeItem: ({ onChange, value }) => (index, nestedValue) => {
      nestedValue = { ...(value[index] || {}), ...nestedValue };
      onChange((value || []).map((x, i) => (i === index ? nestedValue : x)));
    },
  }),
  withState('activeField', 'setActiveField'),
  withState('isOpen', 'setOpen', false),
  withCollection,
);

export default {
  collapse: true,
  rule: ({ type }) =>
    type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0,
  form: enhance(
    ({
      value = [],
      isOpen,
      setOpen,
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => (
      <FormItem {...p}>
        <Button
          onClick={() => setOpen(true)}
          data-__field={dataField}
          data-__meta={dataMeta}
        >
          {value.length} Einträge
        </Button>

        <Modal
          footer={<Footer onClose={() => setOpen(false)} />}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <Component value={value} {...p} />
        </Modal>
      </FormItem>
    ),
  ),
  full: enhance(
    ({ collection, name, title, label, ...props }) =>
      collection ? <Component collection={collection} {...props} /> : null,
  ),
};
