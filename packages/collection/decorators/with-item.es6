import React from 'react';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { graphql } from 'react-apollo';
import { onSuccess, onError } from 'olymp-ui';
import { State } from 'slate';
import { omit } from 'olymp-utils';
import { lowerFirst } from 'lodash';
import gql from 'graphql-tag';

const ok = props => () => {
  const { form, item, updateQuery, mutate, typeName } = props;
  form.validateFields((err, values) => {
    if (err) {
      return onError(err);
    }
    if (values.blocks && State.isState(values.blocks)) {
      values.blocks = values.blocks.toJSON().document;
    }
    if (values.text && State.isState(values.text)) {
      values.text = values.text.toJSON().document;
    }
    if (values.start && Array.isArray(values.start)) {
      values.end = values.start[1];
      values.start = values.start[0];
    }
    mutate({
      variables: {
        id: item && item.id,
        input: omit(values),
      },
      refetchQueries: [`${lowerFirst(typeName)}List`],
      /* updateQueries:
        !item || !item.id
          ? {
            [`${typeName.toLowerCase()}List`]: (prev, { mutationResult }) => ({
              ...prev,
              items: [mutationResult.data.item, ...prev.items],
            }),
          }
          : undefined, */
    })
      .then(({ data: { item } }) => {
        onSuccess('Gespeichert');
        form.resetFields();
        updateQuery({ [`@${lowerFirst(typeName)}`]: item.id });
      })
      .catch(onError);
  });
};

const clone = props => () => {
  const { form, item, router, updateQuery, mutate, typeName } = props;
  const cloneItem = omit(item);
  delete cloneItem.id;
  mutate({
    variables: {
      input: cloneItem,
    },
    updateQueries: {
      [`${typeName.toLowerCase()}List`]: (prev, { mutationResult }) => ({
        ...prev,
        items: [mutationResult.data.item, ...prev.items],
      }),
    },
  })
    .then(({ data: { item } }) => {
      onSuccess('Kopiert');
      form.resetFields();
      updateQuery({ [`@${lowerFirst(typeName)}`]: item.id });
    })
    .catch(onError);
};

const del = props => () => {
  const { form, item, router, updateQuery, mutate, typeName } = props;
  return mutate({
    variables: {
      id: item && item.id,
      type: 'REMOVE',
    },
    updateQueries: {
      [`${typeName.toLowerCase()}List`]: prev => ({
        ...prev,
        items: prev.items.filter(x => x.id !== item.id),
      }),
    },
  })
    .then(({ data }) => {
      onSuccess('Gelöscht');
      form.resetFields();
      updateQuery({ [`@${lowerFirst(typeName)}`]: null });
    })
    .catch(onError);
};

export default (WrappedComponent) => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) => {
    const mutation = graphql(gql`
    mutation ${lowerFirst(typeName)}($id: String, $input: ${typeName}Input, $type: MUTATION_TYPE) {
      item: ${lowerFirst(typeName)}(id: $id, input: $input, type: $type) {
        ${fieldNames}
      }
    }
  `);
    const query = graphql(
      gql`
      query ${lowerFirst(typeName)}($id: String!) {
        item: ${lowerFirst(typeName)}(query: { id: {eq: $id} }) {
          ${fieldNames}
        }
      }
    `,
      {
        /* eslint-disable */
        props: ({ ownProps, data }) => ({
          ...ownProps,
          item: data.item,
        }),
        options: ({ id }) => ({
          fetchPolicy: !id ? 'cache-only' : undefined,
          variables: {
            id,
          },
        }),
      },
    );
    return query(
      mutation(props => (
        <WrappedComponent
          {...props}
          x={props.form}
          onSave={ok(props)}
          onClone={clone(props)}
          onDelete={del(props)}
        />
      )),
    );
  };

  return connect(null, dispatcher => ({
    updateQuery: createUpdateQuery(dispatcher),
  }))(props => {
    if (props.typeName && props.fieldNames && props.collection) {
      const name = `${props.typeName}|${props.fieldNames}`;
      const Bound = cache[name] || bound(props);
      cache[name] = Bound;
      return <Bound {...props} />;
    }
    return null;
  });
};
