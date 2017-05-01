import { gql, graphql } from 'olymp';

export default graphql(gql`
  query file($id: String) {
    item: file(id: $id) {
      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes
    }
  }
`, {
  options: ({ id, mediaId, query }) => ({
    variables: { id: mediaId }
  }),
  props: ({ ownProps, data }) => ({
    ...ownProps,
    item: data.item,
    data,
  }),
});

export const queryMedias = graphql(gql`
  query fileList {
    items: fileList {
      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed
    }
  }
`, {
  props: ({ ownProps, data }) => ({
    ...ownProps,
    items: data.items || [],
    data,
  }),
});

