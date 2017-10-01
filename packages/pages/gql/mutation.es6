import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withPushPathname } from 'olymp-router';
import { onError, onSuccess } from 'olymp-ui';
import { State } from 'slate';
import { omit } from 'lodash';

const ok = (props, mutate) => () => {
  const { form, item, router, query, flatNavigation, pushPathname } = props;
  form.validateFields((err, values) => {
    if (err) {
      return onError(err);
    }
    if (values.blocks && State.isState(values.blocks)) {
      values.blocks = values.blocks.toJSON().document;
    }
    if (values.blocks) {
      values.blocks = omit(values.blocks, '__typename');
    }
    mutate({
      variables: {
        id: item.id,
        input: values,
      },
      updateQueries: !item.id
        ? {
          pageList: (prev, { mutationResult }) => ({
            ...prev,
            items: [...prev.items, mutationResult.data.item],
          }),
        }
        : undefined,
    })
      .then(({ data: { item } }) => {
        onSuccess('Gespeichert', 'Die Seite wurde gespeichert');
        form.resetFields();
        let slug = item.slug;
        let parentId = item.parentId;
        while (parentId) {
          const parent = flatNavigation.find(x => x.id === parentId) || {};
          if (parent.slug) {
            slug = `${parent.slug}${slug}`.replace('//', '/');
          }
          parentId = parent.parentId;
        }
        pushPathname(slug);
      })
      .catch(onError);
  });
};

export default compose(
  withPushPathname,
  graphql(
    gql`
      mutation page($id: String, $input: PageInput) {
        item: page(id: $id, input: $input) {
          id
          slug
          order
          isMega
          name
          type
          binding {
            id
            type
            query
            fields
          }
          aliasId
          href
          sorting
          parentId
          blocks {
            id
            nodes
            extract
            text
            title
            image
            chapters
          }
          state
        }
      }
    `,
    {
      props: ({ ownProps, mutate }) => ({
        ...ownProps,
        save: ok(ownProps, mutate),
        mutate,
      }),
    },
  ),
);

export const reorderPage = graphql(
  gql`
    mutation reorderPage($id: String, $sorting: [String]) {
      item: page(id: $id, input: { sorting: $sorting }) {
        id
        sorting
      }
    }
  `,
  {
    props: ({ ownProps, mutate }) => ({
      ...ownProps,
      reorder: mutate,
    }),
  },
);

export const movePage = graphql(
  gql`
    mutation movePage($id: String, $parentId: String, $sorting: [String]) {
      item: page(id: $parentId, input: { sorting: $sorting }) {
        id
        sorting
      }
      item2: page(id: $id, input: { parentId: $parentId }) {
        id
        parentId
      }
    }
  `,
  {
    props: ({ ownProps, mutate }) => ({
      ...ownProps,
      move: mutate,
    }),
  },
);
