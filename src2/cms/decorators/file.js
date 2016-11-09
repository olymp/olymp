import React, { Component } from 'react';
import { withApollo, graphql } from 'react-apollo';
import withItem from './item';
import gql from 'graphql-tag';

export const attributes = 'id, height, width, url, type, colors, tags';
export default WrappedComponent => {
  @withApollo
  @graphql(gql`
    query getFileById($id:String!) {
      file(id:$id) {
        ${attributes}
      }
    }
  `, {
    options: ({ id, routeParams }) => ({
      variables: {
        id: id || routeParams.id,
      },
    }),
  })
  @withItem({ name: 'file', attributes })
  class WithFileComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  } return WithFileComponent;
};
