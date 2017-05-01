import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp/ui';

/* const ok = (props, mutate) => () => {
  const { form, item, router } = props;
  form.validateFields((err, values) => {
    if (err) return onError(err);
    mutate({
      variables: {
        id: item.id,
        input: values,
      },
      updateQueries: !item.id ? {
        pageList: (prev, { mutationResult }) => ({
          ...prev,
          items: [...prev.items, mutationResult.data.item],
        }),
      } : undefined,
    }).then(({ data: { item } }) => {
      onSuccess('Gespeichert', 'Die Seite wurde gespeichert');
      form.resetFields();
    }).catch(onError);
  });
} */

export default graphql(gql`
  mutation file($id: String, $input: FileInput) {
    item: file(id: $id, input: $input) {
      id format version resourceType type createdAt height width bytes tags url caption source removed pages colors
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    save: mutate, // ok(ownProps, mutate),
    // mutate,
  }),
});
