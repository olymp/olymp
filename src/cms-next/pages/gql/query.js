import { gql, graphql } from 'olymp';

export default graphql(gql`
  query page($id: String) {
    item: page(id: $id) {
      id, slug, order, name, text, parentId, blocks, headings { id, slug, text, children { id, slug, text } }
    }
  }
`, {
  options: ({ id }) => ({
    variables: { id },
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    item: data.item || { },
    data,
  }),
});

export const queryPages = graphql(gql`
  query pageList {
    items: pageList {
      id, slug, order, name, parentId
    }
  }
`, {
  props: ({ ownProps, data }) => ({
    ...ownProps,
    items: data.items || [],
    data,
  }),
});

