const { visit } = require('graphql/language');

const getFunc = (ast, directives, resolvers, throwOnMissing) => (
  node,
  key,
  parent,
  path,
  ancestors,
  method
) => {
  if (node.directives && node.directives.length) {
    let current = node;
    node.directives.forEach((directive) => {
      if (!current) {
        return;
      }
      const directiveName = directive.name.value;
      if (directiveName in directives) {
        const staticFunctions = directives[directiveName].resolveStatic;
        if (staticFunctions[method]) {
          const ret = staticFunctions[method].call(
            {},
            current,
            directive,
            Object.assign({
              key,
              parent,
              path,
              ancestors,
              ast,
              resolvers,
            })
          );
          if (typeof ret !== typeof undefined) {
            current = ret;
          }
        }
      } else if (throwOnMissing) {
        throw new Error(`Unknown directive '${directiveName}'`);
      }
    });
    return current;
  }
  return undefined;
};

export default (ast, directives, resolvers, throwOnMissing = false) => {
  const func = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'enter');
    },
    leave(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'leave');
    },
  });

  const func2 = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'enter2');
    },
    leave(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'leave2');
    },
  });
  Object.keys(directives || {})
    .map(key => directives[key])
    .forEach(
      ({ resolveStatic }) =>
        resolveStatic &&
        resolveStatic.finalize &&
        resolveStatic.finalize.apply({}, ast)
    );
};
