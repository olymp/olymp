import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default (WrappedComponent) => {
  const cache = {};
  const bound = ({ typeName, fieldNames }) =>
    graphql(
      gql`
    query ${typeName.toLowerCase()}List {
      items: ${typeName.toLowerCase()}List {
        ${fieldNames}
      }
    }
  `,
      {
        /* eslint-disable */
        options: ({ id }) => ({
          variables: {},
        }),
      }
    )(props => <WrappedComponent {...props} />);
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
