const { visit } = require('graphql/language');

const getFunc = (ast, directives, resolvers, hooks, throwOnMissing) => (node, key, parent, path, ancestors, method) => {
  if (node.directives && node.directives.length) {
    let current = node;
    node.directives.forEach((directive) => {
      if (!current) return;
      const directiveName = directive.name.value;
      if (directiveName in directives) {
        const staticFunctions = directives[directiveName].resolveStatic;
        if (staticFunctions[method]) {
          const ret = staticFunctions[method].call({}, current, directive, Object.assign({
            key, parent, path, ancestors, ast, resolvers,
          }));
          if (typeof ret !== typeof undefined) current = ret;
        }
      } else if (throwOnMissing) throw new Error(`Unknown directive '${directiveName}'`);
    });
    return current;
  } return undefined;
};

module.exports = (ast, directives, resolvers, hooks, throwOnMissing = true) => {
  Object.keys(directives).forEach((key) => {
    const directiveHooks = directives[key] && directives[key].hooks;
    if (directiveHooks && directiveHooks.before) hooks.before.push(directiveHooks.before);
    if (directiveHooks && directiveHooks.after) hooks.after.push(directiveHooks.after);
  });

  const func = getFunc(ast, directives, resolvers, hooks, throwOnMissing);
  const transformedAST = visit(ast, {
    enter(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'enter');
    },
    leave(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'leave');
    },
  });

  const func2 = getFunc(transformedAST, directives, resolvers, hooks, throwOnMissing);
  const transformedAST2 = visit(transformedAST, {
    enter(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'enter2');
    },
    leave(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'leave2');
    },
  });
  Object.keys(directives || {}).map(key => directives[key]).forEach(({ resolveStatic }) =>
    resolveStatic.finalize && resolveStatic.finalize.apply({}, transformedAST2));
  return transformedAST2;
};
