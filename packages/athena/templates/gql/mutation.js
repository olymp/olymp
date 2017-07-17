import { graphql, gql } from 'olymp-utils';

export const mutateTemplate = graphql(gql`
  mutation template($id: String, $input: TemplateInput) {
    item: template(id: $id, input: $input) {
      id name text
    }
  }
`);
