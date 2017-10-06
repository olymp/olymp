import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { onError, onSuccess } from 'olymp-ui';

const ok = (item, mutate) => {
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
          items: prev.items.filter(item => item.id !== mutationResult.data.item.id),
        }),
      }
      : undefined,
  })
    .then(({ data: { item } }) => {
      if (item.removed) {
        onSuccess('Gelöscht', `Datei '${item.id}' wurde gelöscht`);
      } else {
        onSuccess('Gespeichert', `Datei '${item.id}' wurde gespeichert`);
      }
    })
    .catch(onError);
};

export default graphql(
  gql`
    mutation file($id: String, $input: FileInput, $operationType: MUTATION_TYPE) {
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
      save: item => ok(item, mutate),
      mutate,
    }),
  },
);

export const cloudinaryRequestDone = graphql(
  gql`
    mutation cloudinaryRequestDone($id: String, $token: String) {
      cloudinaryRequestDone(id: $id, token: $token) {
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
        done({ id, token }) {
          return mutate({
            variables: { id, token },
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
