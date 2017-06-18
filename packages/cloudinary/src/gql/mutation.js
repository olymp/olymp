import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp-ui';

const ok = (item, mutate) => {
  mutate({
    variables: {
      id: item.id,
      input: { ...item, __typename: undefined },
      operationType: item.removed ? 'REMOVE' : null,
    },
    updateQueries: item.removed
      ? {
          fileList: (prev, { mutationResult }) => ({
            ...prev,
            items: prev.items.filter(
              item => item.id !== mutationResult.data.item.id
            ),
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
  mutation file($id: String, $input: FileInput, $operationType: OPERATION_TYPE) {
    item: file(id: $id, input: $input, operationType: $operationType) {
      id format version resourceType type createdAt height width bytes tags url caption source removed pages colors
    }
  }
`,
  {
    props: ({ ownProps, mutate }) => ({
      ...ownProps,
      save: item => ok(item, mutate),
      mutate,
    }),
  }
);

export const cloudinaryRequestDone = graphql(
  gql`
  mutation cloudinaryRequestDone($id: String, $token: String) {
    cloudinaryRequestDone(id: $id, token: $token) {
      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed
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
  }
);
