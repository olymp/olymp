import React, { Component } from 'react';
import { withItem, gql, withApollo, graphql } from 'olymp';

export const fieldNames =
  'id, height, width, url, type, colors, tags, caption, source, createdAt, format, bytes, pages';
export default (WrappedComponent) => {
  @withApollo
  @graphql(
    gql`
    query getFileById($id:String!) {
      file(id:$id) {
        ${fieldNames}
      }
    }
  `,
    {
      options: ({ id, routeParams }) => ({
        variables: {
          id: id || routeParams.id,
        },
      }),
    }
  )
  @withItem({ typeName: 'file', fieldNames })
  class WithFileComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithFileComponent;
};
