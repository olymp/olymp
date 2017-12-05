import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

const emptyArray = [];
export const page = gql`
  query Document($id: ID!) {
    page: Document(id: $id) {
      id
      kind
      slug
      description
      order
      type
      name
      parent{id}
      nodes
      extract
      state
      image
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
  query allDocuments {
    pageList: allDocuments(filter:{state_in: [PUBLISHED, DRAFT]}) {
      id
      kind
      slug
      order
      type
      name
      parent {id}
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
