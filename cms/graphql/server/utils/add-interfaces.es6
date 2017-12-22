import { parse } from 'graphql/language';
import { get } from 'lodash';

export default (ast, node, interfacesToAdd) => {
  const interfaces = node.interfaces || node;
  const type = parse(`
    type ___Model implements ${interfacesToAdd} {
      id: String
    }
  `).definitions[0];
  type.interfaces.forEach((field) => {
    if (
      interfaces.find(x => get(x, 'name.value') === get(field, 'name.value'))
    ) {
      return;
    }
    interfaces.push(field);
  });
};
