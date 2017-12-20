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
    const has = fields.findIndex(x => get(x, 'name.value') === get(field, 'name.value'));
    console.log(has, get(field, 'name.value') );
    if (
      has >= 0
    ) {
      fields[has] = field;
    } else {
      fields.push(field);
    }
  });
};

