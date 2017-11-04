import React from 'react';
import {
  compose,
  toClass,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import Form from './components/form/form-list';
import FormItem from './form-item';
import withCollection from './decorators/with-collection';

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
  withCollection,
);

export default {
  collapse: true,
  rule: ({ innerType }) =>
    innerType.kind === 'LIST' && innerType.ofType.name.indexOf('Nested') === 0,
  form: toClass(
    ({
      value = [],
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => (
      <FormItem {...p}>
        <span data-__field={dataField} data-__meta={dataMeta}>
          {value.length} Einträge
        </span>
      </FormItem>
    ),
  ),
  full: enhance(
    ({ collection, value, name, title, label, id, ...props }) =>
      collection ? (
        <Form
          {...props}
          items={value || []}
          collection={collection}
          label={id}
        />
      ) : null,
  ),
};
