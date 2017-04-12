import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp/ui';

const ok = (props, mutate) => () => {
  const { form, item, router } = props;
  form.validateFields((err, values) => {
    if (err) return onError(err);
    mutate({
      variables: {
        id: item.id,
        input: values,
      },
      // refetchQueries: ['pageList'],
      /*update: (proxy, mutationResult) => {
        const query = gql`{
          pageList {
            id, slug, order, name, parentId
          }
        }`;
        const data = proxy.readQuery({ query });
        data.pageList.push(mutationResult.data.item);
        proxy.writeQuery({ query, data });
        console.log('UPDATE', proxy, mutationResult);
      },*/
      updateQueries: !item.id ? {
        pageList: (prev, { mutationResult }) => ({
          ...prev,
          items: [...prev.items, mutationResult.data.item],
        }),
      } : undefined,
    }).then(({ data: { item } }) => {
      onSuccess('Gespeichert', 'Die Seite wurde gespeichert');
      form.resetFields();
      router.push({ pathname: item.slug });
    }).catch(onError);
  });
}

export default graphql(gql`
  mutation page($id: String, $input: PageInput) {
    item: page(id: $id, input: $input) {
      id, slug, order, name, text, parentId, blocks, state,headings { id, slug, text, children { id, slug, text } }
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    save: ok(ownProps, mutate),
    mutate,
  }),
});
