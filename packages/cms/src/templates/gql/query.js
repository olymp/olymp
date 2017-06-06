import { graphql, gql } from 'olymp';

export const queryTemplate = graphql(gql`
  query template($id: String) {
    item: template(id: $id) {
      id name text
    }
  }
`, {
  options: ({ id }) => ({ variables: { id }}),
  props: ({ ownProps, data }) => ({ ...ownProps, data, item: data.item || {} }),
});

export const queryTemplates = graphql(gql`
  query templateList {
    items: templateList {
      id name text
    }
  }
`, {
  props: ({ ownProps, data }) => ({ ...ownProps, data, items: data.items || [] }),
});

export const withTemplates = graphql(gql`
  query templateList {
    items: templateList {
      id name text
    }
  }
`, {
  props: ({ ownProps, data }) => ({ ...ownProps, templateData: data, templates: (data.items || []).reduce((store, item) => {
    store[item.name] = item.text;
    return store;
  }, {}) || {} }),
});
