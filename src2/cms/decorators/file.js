import React, { Component } from 'react';
import { withItem, gql, withApollo, graphql } from 'olymp';

export const attributes = 'id, height, width, url, type, colors, tags, caption, source, createdAt, format, bytes';
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
