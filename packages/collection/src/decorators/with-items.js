import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default ({ fieldNames, typeName }) => WrappedComponent => {
  @graphql(
    gql`
    query ${typeName.toLowerCase()}List($query: ${typeName.toLowerCase()}Query) {
      items: ${typeName.toLowerCase()}List(query: $query) {
        ${fieldNames}
      }
    }
  `,
    {
      /* eslint-disable */
      options: ({ query }) => ({
        variables: {
          query,
        },
      }),
    }
  )
  class WithItemsComponent extends Component {
    render() {
      const { data } = this.props;
      return <WrappedComponent {...this.props} items={data.items} />;
    }
  }
  return WithItemComponent;
};
