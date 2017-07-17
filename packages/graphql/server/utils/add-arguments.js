import { parse } from 'graphql/language';

export default (ast, node, argsToAdd) => {
  const args = node.arguments || node;
  const type = parse(`
    type Query {
      func(${argsToAdd}): Boolean
    }
  `).definitions[0].fields[0];
  type.arguments.forEach(field => args.push(field));
};
