import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withPushPathname } from 'olymp-router';
import { onError, onSuccess } from 'olymp-ui';
import { omit } from 'olymp-utils';
import { page, pageList } from './query';

const mutateGql = gql`
  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {
    page(id: $id, input: $input, type: $type) {
      id
      slug
      description
      order
      isMega
      name
      type
      binding {
        type
        query
        fields
      }
      aliasId
      href
      sorting
      parentId
      blocks {
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
`;
// const fields = mutateGql.definitions[0].selectionSet.selections[0].selectionSet.selections.map(x => x.name.value,);

const ok = (props, mutate) => () => {
  const {
    form, item, flatNavigation, pushPathname
  } = props;
  form.validateFields((err, input) => {
    if (err) {
      return onError(err);
    }
    const { id } = item;
    mutate({
      variables: {
        id,
        type: 'UPDATE',
        input: omit(input),
      },
      /* optimisticResponse: {
        __typename: 'Mutation',
        page: {
          __typename: 'Page',
          ...(id ? values : fields.reduce((result, key) => ({ ...result, [key]: result[key] || null }), values)),
        },
      }, */
      refetchQueries: [
        {
          query: page,
          variables: { id },
        },
        {
          query: pageList,
        },
      ],
    })
      .then(({ data: { page } }) => {
        onSuccess('Gespeichert', 'Die Seite wurde gespeichert');
        form.resetFields();
        let { slug, parentId } = page;
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

export const mutatePage = compose(
  withPushPathname,
  graphql(mutateGql, {
    props: ({ ownProps, mutate }) => ({
      ...ownProps,
      save: ok(ownProps, mutate),
      mutate,
    }),
  }),
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
