import { gql, graphql } from 'olymp-utils';

const isNew = props => props.pathname === '__new';

const queryOne = gql`
  query page($id: String) {
    item: page(id: $id) {
      id
      slug
      isMega
      description
      order
      type
      name
      binding {
        id
        type
        query
        fields
      }
      parentId
      sorting
      aliasId
      href
      blocks
      state
    }
  }
`;
export default graphql(queryOne, {
  options: ({ id, pageId, pathname }) => ({
    variables: { id: pageId || id },
    fetchPolicy: pathname === '/__new' ? 'cache-only' : undefined,
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    item: (ownProps.pathname === '/__new' ? {} : data.item) || {},
    data,
  }),
});

export const prefetchPage = (client, id) =>
  client.query({
    query: queryOne,
    variables: { id },
  });

export const queryPages = graphql(
  gql`
    query pageList {
      items: pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {
        id
        slug
        isMega
        order
        type
        name
        binding {
          id
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
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      items: data.items || [],
      data,
    }),
  },
);
