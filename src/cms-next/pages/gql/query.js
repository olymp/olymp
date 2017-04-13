import { gql, graphql } from 'olymp';

const isNew = (props) => props.query['@page'] === 'new';
const getId = (id, query) => query['@page'] && query['@page'] !== 'new' ? query['@page'] : id;
export default graphql(gql`
  query page($id: String) {
    item: page(id: $id) {
      id slug order name text binding parentId sorting aliasId href blocks state headings { id slug text children { id slug text } }
    }
  }
`, {
  options: ({ id, pageId, query }) => ({
    variables: { id: pageId || getId(id, query) },
    fetchPolicy: isNew({ query }) ? 'cache-only' : undefined,
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    item: (isNew(ownProps) ? {} : data.item) || {},
    data,
  }),
});

export const queryPages = graphql(gql`
  query pageList {
    items: pageList {
      id slug order name binding parentId sorting aliasId href
    }
  }
`, {
  props: ({ ownProps, data }) => ({
    ...ownProps,
    items: data.items || [],
    data,
  }),
});

