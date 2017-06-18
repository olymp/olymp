import React from 'react';
import { graphql } from 'react-apollo';
import { onSuccess, onError } from 'olymp-ui';
import { Form } from 'antd';
import gql from 'graphql-tag';

const ok = props => () => {
  const { form, item, router, query, pathname, mutate, typeName } = props;
  form.validateFields((err, values) => {
    if (err) { return onError(err); }
    mutate({
      variables: {
        id: item && item.id,
        input: values,
      },
      updateQueries: !item || !item.id
        ? {
          pageList: (prev, { mutationResult }) => ({
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
          query: { ...query, [`@${typeName}`]: item.id },
        });
      })
      .catch(onError);
  });
};

export default (WrappedComponent) => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) => {
    const mutation = graphql(gql`
      mutation ${typeName.toLowerCase()}($id: String, $input: ${typeName}Input) {
        item: ${typeName.toLowerCase()}(id: $id, input: $input) {
          ${fieldNames}
        }
      }
    `);
    const query = graphql(
      gql`
      query ${typeName.toLowerCase()}($id: String!) {
        item: ${typeName.toLowerCase()}(query: { id: {eq: $id} }) {
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
        mutation(props => <WrappedComponent {...props} onSave={ok(props)} />)
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
