import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default (WrappedComponent) => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) =>
    graphql(
      gql`
        query ${typeName.toLowerCase()}List($query: ${typeName}Query) {
          items: ${typeName.toLowerCase()}List(query: $query) {
            ${fieldNames}
          }
        }
      `,
      {
        /* eslint-disable */
        options: ({ id, searchTerm }) => ({
          variables: {
            query: searchTerm
              ? {
                  name: {
                    contains: searchTerm,
                  },
                }
              : null,
          },
        }),
      }
    )(props => <WrappedComponent {...props} items={props.data.items} />);
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
