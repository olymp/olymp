import { parse } from 'graphql/language';

export default (ast, node, fieldsToAdd) => {
  const fields = node.fields || node;
  const type = parse(`
    type ___Model {
      ${fieldsToAdd}
    }
  `).definitions[0];
  type.fields.forEach(field => fields.push(field));
};
