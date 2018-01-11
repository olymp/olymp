import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { lowerFirst, get } from 'lodash';

export default WrappedComponent => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) =>
    graphql(
      gql`
        query ${lowerFirst(typeName)}List($query: ${typeName}Query) {
          items: ${lowerFirst(typeName)}List(query: $query) {
            ${fieldNames}
          }
        }
      `,
      {
        /* eslint-disable */
        options: ({ id, searchTerm, query, ...rest }) => ({
          fetchPolicy: 'cache-and-network',
          variables: searchTerm
            ? {
                query: {
                  name: {
                    contains: searchTerm,
                  },
                  state: {
                    eq: get(query, 'state', 'PUBLISHED'),
                  },
                },
              }
            : {
                query: {
                  state: {
                    eq: get(query, 'state', 'PUBLISHED'),
                  },
                },
              },
        }),
      },
    )(props => (
      <WrappedComponent
        {...props}
        items={props.data.items}
        refetchQuery={() => {
          return {
            query: gql`
              query ${lowerFirst(typeName)}List($query: ${typeName}Query) {
                items: ${lowerFirst(typeName)}List(query: $query) {
                  ${fieldNames}
                }
              }
            `,
          };
        }}
      />
    ));
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
