import { graphql, gql } from 'olymp-utils';
export var mutateTemplate = graphql((_a = ["\n  mutation template($id: String, $input: TemplateInput) {\n    item: template(id: $id, input: $input) {\n      id name text\n    }\n  }\n"], _a.raw = ["\n  mutation template($id: String, $input: TemplateInput) {\n    item: template(id: $id, input: $input) {\n      id name text\n    }\n  }\n"], gql(_a)));
var _a;
//# sourceMappingURL=mutation.js.map