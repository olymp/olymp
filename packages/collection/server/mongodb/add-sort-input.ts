import { parse } from 'graphql/language';
import { addDefinition } from 'olymp-graphql/server';

export default (ast, node) => {
  const getSort = (field) => {
    if (!field.name) {
      return null;
    }
    return `${field.name.value}: SORT_DIRECTION`;
  };
  addDefinition(
    ast,
    parse(`
    input ${node.name.value}Sort {
      skipSort: Boolean
      ${node.fields.map(getSort).filter(x => x).join('\n')}
    }
  `).definitions[0]
  );
};
