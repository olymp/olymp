import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { message } from 'antd';

const ok = (item, mutate, remove) => {
  mutate({
    variables: {
      id: item.id,
      input: { ...item, __typename: undefined },
      operationType: item.removed ? 'REMOVE' : 'UPDATE',
    },
    updateQueries: item.removed
      ? {
          fileList: (prev, { mutationResult }) => ({
            ...prev,
            items: prev.items.filter(
              item => item.id !== mutationResult.data.item.id,
            ),
          }),
        }
      : undefined,
  })
    .then(({ data: { item: newItem } }) => {
      if (remove) {
        message.success(`Datei '${newItem.id}' wurde gelöscht`);
      } else {
        message.success(`Datei '${newItem.id}' wurde gespeichert`);
      }
    })
    .catch(err => message.error(err.message));
};

export default graphql(
  gql`
    mutation file(
      $id: String
      $input: FileInput
      $operationType: MUTATION_TYPE
    ) {
      item: file(id: $id, input: $input, type: $operationType) {
        id
        publicId
        format
        version
        resourceType
        type
        createdAt
        height
        width
        bytes
        tags
        url
        caption
        source
        removed
        folder
        pages
        colors
      }
    }
  `,
  {
    props: ({ ownProps, mutate }) => ({
      ...ownProps,
      save: (item, remove) => ok(item, mutate, remove),
      mutate,
    }),
  },
);

export const cloudinaryRequestDone = graphql(
  gql`
    mutation cloudinaryRequestDone(
      $id: String
      $token: String
      $folder: String
      $tags: [String]
    ) {
      cloudinaryRequestDone(
        id: $id
        token: $token
        folder: $folder
        tags: $tags
      ) {
        id
        publicId
        url
        tags
        colors
        width
        height
        createdAt
        caption
        folder
        source
        format
        bytes
        removed
      }
    }
  `,
  {
    props({ ownProps, mutate }) {
      return {
        done({ id, token, folder, tags }) {
          return mutate({
            variables: { id, token, folder, tags },
            updateQueries: {
              fileList: (prev, { mutationResult }) => {
                const newData = mutationResult.data.cloudinaryRequestDone;
                return {
                  ...prev,
                  items: [newData, ...prev.items],
                };
              },
            },
          });
        },
      };
    },
  },
);
