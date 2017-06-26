import { gql, graphql } from 'olymp';

const isNew = props => props.query['@page'] === 'new';
const getId = (id, query) =>
  query['@page'] && query['@page'] !== 'new' ? query['@page'] : id;

export default graphql(
  gql`
  query page($id: String) {
    item: page(id: $id) {
      id slug order type name binding { id type query fields } parentId sorting aliasId href blocks state
    }
  }
`,
  {
    options: ({ id, pageId, query }) => ({
      variables: { id: pageId || getId(id, query) },
      fetchPolicy: isNew({ query }) ? 'cache-only' : undefined,
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      item: (isNew(ownProps) ? {} : data.item) || {},
      data,
    }),
  }
);

export const queryPages = graphql(
  gql`
  query pageList {
    items: pageList(query: {state: {in: [PUBLISHED, DRAFT]}}) {
      id slug order type name binding { id type query fields } parentId sorting state
    }
  }
`,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      items: data.items || [],
      data,
    }),
  }
);
