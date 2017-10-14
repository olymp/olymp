import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default graphql(
  gql`
    query file($id: String) {
      item: file(id: $id) {
        id
        publicId
        url
        tags
        folder
        colors
        width
        height
        createdAt
        caption
        source
        format
        bytes
      }
    }
  `,
  {
    options: ({ id, mediaId, query }) => ({
      variables: { id: mediaId },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      item: data.item,
      data,
    }),
  },
);

export const queryMedias = graphql(
  gql`
    query fileList {
      items: fileList {
        id
        publicId
        url
        tags
        folder
        colors
        width
        height
        createdAt
        caption
        source
        format
        bytes
        removed
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
export const queryTags = graphql(
  gql`
    query fileTags($folder: String) {
      fileTags(folder: $folder)
    }
  `,
  {
    options: ({ folder }) => ({
      variables: {
        folder: folder
          ? folder
              .split('/')
              .filter((x, i) => i !== 0)
              .join('/')
          : undefined,
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      fileTags: data.fileTags || [],
      data,
    }),
  },
);

export const cloudinaryRequest = graphql(
  gql`
    query cloudinaryRequest {
      cloudinaryRequest {
        apiKey
        url
        signature
        timestamp
        folder
      }
    }
  `,
  {
    options: () => ({
      fetchPolicy: 'network-only',
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      refetchKey: data.refetch,
      cloudinaryRequest: data.cloudinaryRequest,
    }),
  },
);
