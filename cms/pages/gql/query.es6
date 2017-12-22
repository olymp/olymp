import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

const emptyArray = [];
export const page = gql`
  query page($id: String) {
    page(id: $id) {
      id
      slug
      isMega
      description
      order
      type
      name
      binding {
        type
        query
        fields
      }
      parentId
      sorting
      aliasId
      href
      blocks {
        nodes
        extract
        image {
          url
          width
          height
          caption
        }
        title
      }
      state
    }
  }
`;
export const queryPage = graphql(page, {
  options: ({ id, pageId, pathname }) => ({
    variables: { id: pageId || id },
    fetchPolicy: pathname === '/__new' ? 'cache-only' : undefined,
  }),
  props: ({ ownProps, data }) => {
    const newPage = {
      state: 'PUBLISHED',
      parentId: get(ownProps, 'query.@parentId'),
    };

    return {
      ...ownProps,
      isLoading: data.loading,
      item:
        (ownProps.pathname === '/__new' || ownProps.pathname === '__new'
          ? newPage
          : data.page) || newPage,
      data,
    };
  },
});

export const prefetchPage = (client, id) =>
  client.query({
    query: page,
    variables: { id },
  });

export const pageList = gql`
  query pageList {
    pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {
      id
      slug
      isMega
      order
      type
      name
      binding {
        type
        query
        fields
      }
      parentId
      aliasId
      sorting
      state
    }
  }
`;
export const queryPages = graphql(pageList, {
  props: ({ ownProps, data }) => ({
    ...ownProps,
    pageList: data.pageList || emptyArray,
    data,
  }),
});
