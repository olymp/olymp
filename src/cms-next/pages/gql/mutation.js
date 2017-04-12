import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp/ui';

const ok = (props, mutate) => () => {
  const { form, item } = props;
  form.validateFields((err, values) => {
    if (err) return onError(err);
    mutate({
      variables: {
        id: item.id,
        input: values,
      },
    }).then(({ name }) => {
      onSuccess('Gespeichert', `Das Profil wurde gespeichert`);
    }).catch(onError);
  });
}

export default graphql(gql`
  mutation page($id: String, $input: PageInput) {
    item: page(id: $id, input: $input) {
      id, slug, order, name, text, parentId, blocks, headings { id, slug, text, children { id, slug, text } }
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    save: ok(ownProps, mutate),
    mutate,
  }),
});
