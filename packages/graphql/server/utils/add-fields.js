import { parse } from 'graphql/language';
import { get } from 'lodash';

export default (ast, node, fieldsToAdd, { replace = false } = {}) => {
  const fields = node.fields || node;
  const type = parse(`
    type ___Model {
      ${fieldsToAdd}
    }
  `).definitions[0];
  type.fields.forEach((field) => {
    if (
      replace &&
      fields.find(x => get(x, 'name.value') === get(field, 'name.value'))
    ) {
      return;
    }
    fields.push(field);
  });
};
