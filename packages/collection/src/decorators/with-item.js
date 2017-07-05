import React from 'react';
import { graphql } from 'react-apollo';
import { onSuccess, onError } from 'olymp-ui';
import { omit } from 'olymp';
import { Form } from 'antd';
import { lowerFirst } from 'lodash';
import gql from 'graphql-tag';

const ok = props => () => {
  const { form, item, router, query, pathname, mutate, typeName } = props;
  form.validateFields((err, values) => {
    console.log('values bei image leer, warum???', values, omit(values));
    if (err) {
      return onError(err);
    }
    mutate({
      variables: {
        id: item && item.id,
        input: omit(values),
      },
      updateQueries:
        !item || !item.id
          ? {
            [`${typeName.toLowerCase()}List`]: (
                prev,
                { mutationResult }
              ) => ({
                ...prev,
                items: [...prev.items, mutationResult.data.item],
              }),
          }
          : undefined,
    })
      .then(({ data: { item } }) => {
        onSuccess('Gespeichert');
        form.resetFields();
        router.push({
          pathname,
          query: { ...query, [`@${lowerFirst(typeName)}`]: item.id },
        });
      })
      .catch(onError);
  });
};

const del = props => () => {
  const { form, item, router, query, pathname, mutate, typeName } = props;
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
      router.push({
        pathname,
        query: { ...query, [`@${lowerFirst(typeName)}`]: null },
      });
    })
    .catch(onError);
};

export default (WrappedComponent) => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) => {
    const mutation = graphql(gql`
      mutation ${lowerFirst(
        typeName
      )}($id: String, $input: ${typeName}Input, $type: MUTATION_TYPE) {
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
      }
    );
    return Form.create({})(
      query(
        mutation(props =>
          <WrappedComponent
            {...props}
            onSave={ok(props)}
            onDelete={del(props)}
          />
        )
      )
    );
  };

  return props => {
    if (props.typeName && props.fieldNames && props.collection) {
      const name = `${props.typeName}|${props.fieldNames}`;
      const Bound = cache[name] || bound(props);
      cache[name] = Bound;
      return <Bound {...props} />;
    }
    return null;
  };
};
