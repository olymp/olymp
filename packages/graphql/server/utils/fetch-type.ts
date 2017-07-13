import { visit, BREAK } from 'graphql/language';

export default condition => (ast, ...args) => {
  let currentNode;
  visit(ast, {
    enter(node) {
      if (condition(node, ...args)) {
        currentNode = node;
        return BREAK;
      }
      return undefined;
    },
  });
  return currentNode;
};
