import { gql, graphql } from 'olymp';

export const queryMedias = graphql(gql`
  query fileList {
    items: fileList {
      id, url, tags, colors, width, height, createdAt, caption, source, format
    }
  }
`, {
  props: ({ ownProps, data }) => ({
    ...ownProps,
    items: data.items || [],
    data,
  }),
});

