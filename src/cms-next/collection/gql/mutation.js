
export default graphql(
  gql`mutation cloudinaryRequestDone($id: String, $token: String) { cloudinaryRequestDone(id: $id, token: $token) { ${fieldNames} } }`, {
    props({ ownProps, mutate }) {
      return {
        done({ id, token }) {
          return mutate({
            variables: { id, token },
            updateQueries: {
              fileList: (prev, { mutationResult }) => {
                const newData = mutationResult.data.cloudinaryRequestDone;
                return {
                  items: [...prev.items, newData],
                };
              },
            },
          });
        },
      };
    },
  }
)