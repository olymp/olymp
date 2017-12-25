import React from 'react';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { graphql } from 'react-apollo';
import { message } from 'antd';
import { omit as omit2 } from 'olymp-apollo';
import { lowerFirst } from 'lodash';
import gql from 'graphql-tag';

const ok = props => () => {
  const { form, item, updateQuery, mutate, typeName } = props;
  form.validateFields((err, values) => {
    if (err) {
      return message.error(err);
    }

    if (values.start && Array.isArray(values.start)) {
      values.end = values.start[1];
      values.start = values.start[0];
    }

    mutate({
      variables: {
        id: item && item.id,
        input: omit2(values),
      },
      refetchQueries: [
        `${lowerFirst(typeName)}List`,
        `${lowerFirst(typeName)}`,
      ],
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
        message.success('Gespeichert');
        form.resetFields();
        updateQuery({ [`@${lowerFirst(typeName)}`]: item.id });
      })
      .catch(err => message.error(err));
  });
};

const clone = props => () => {
  const { form, item, router, updateQuery, mutate, typeName } = props;
  const cloneItem = omit2(item);
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
      message.success('Kopiert');
      form.resetFields();
      updateQuery({ [`@${lowerFirst(typeName)}`]: item.id });
    })
    .catch(err => message.error(err));
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
      message.success('Gelöscht');
      form.resetFields();
      updateQuery({ [`@${lowerFirst(typeName)}`]: null });
    })
    .catch(err => message.error(err));
};

export default WrappedComponent => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) => {
    const mutation = graphql(gql`
    mutation ${lowerFirst(typeName)}($id: String, $input: ${
      typeName
    }Input, $type: MUTATION_TYPE) {
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
