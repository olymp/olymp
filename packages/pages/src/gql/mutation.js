import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp-ui';

const ok = (props, mutate) => () => {
  const { form, item, router, query, flatNavigation } = props;
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
      let slug = item.slug;
      let parentId = item.parentId;
      while (parentId) {
        const parent = flatNavigation.find(x => x.id === parentId) || { };
        if (parent.slug) {
          slug = `${parent.slug}${slug}`.replace('//', '/');
        } parentId = parent.parentId;
      }
      router.push({ pathname: slug, query });
    }).catch(onError);
  });
};

export default graphql(gql`
  mutation page($id: String, $input: PageInput) {
    item: page(id: $id, input: $input) {
      id slug order name type binding aliasId href sorting parentId blocks state headings { id slug text children { id slug text } }
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    save: ok(ownProps, mutate),
    mutate,
  }),
});

export const reorderPage = graphql(gql`
  mutation reorderPage($id: String, $sorting: String) {
    item: page(id: $id, input: { sorting: $sorting }) {
      id sorting
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    reorder: mutate,
  }),
});

export const movePage = graphql(gql`
  mutation movePage($id: String, $parentId: String, $sorting: String) {
    item: page(id: $parentId, input: { sorting: $sorting }) {
      id sorting
    }
    item2: page(id: $id, input: { parentId: $parentId }) {
      id parentId
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    move: mutate,
  }),
});
