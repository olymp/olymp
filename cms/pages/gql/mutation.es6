import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withPushPathname } from 'olymp-router';
import { omit } from 'olymp-apollo';
import { message } from 'antd';
import { pageList } from './query';

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
        image {
          url
          width
          height
          caption
        }
        toc
      }
      state
    }
  }
`;
// const fields = mutateGql.definitions[0].selectionSet.selections[0].selectionSet.selections.map(x => x.name.value,);

const ok = (props, mutate) => () => {
  const { form, item, flatNavigation, pushPathname } = props;
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
      refetchQueries: [
        {
          query: pageList,
        },
      ],
      optimisticResponse: {
        __typename: 'Mutation',
        page: {
          __typename: 'Page',
          ...input,
        },
      },
    })
      .then(({ data: { page } }) => {
        message.success('Die Seite wurde gespeichert');
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
      .catch(err => message.error(err.message));
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
    mutation reorderPage($ids: [String], $parentId: String) {
      reorderPages(ids: $ids, parentId: $parentId) {
        id
        order
        parentId
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

/*


      update: (store, { data: { absence } }) => {
        const variables = {
          start: +startOfMonth(absence.start),
          end: +endOfMonth(absence.start),
        };
        const data = store.readQuery({
          query: gqlList,
          variables,
        });
        if (!id) {
          data.absenceList.push(absence);
        } else {
          const index = data.absenceList.findIndex(x => x.id === input.id);
          if (index >= 0) {
            data.absenceList[index] = { ...data.absenceList[index], ...absence };
          }
        }
        store.writeQuery({
          query: gqlList,
          data,
          variables,
        });
      },

*/
