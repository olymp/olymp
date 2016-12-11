const { visit } = require('graphql/language');

const getFunc = (ast, directives, resolvers, context, throwOnMissing) => (node, key, parent, path, ancestors, method) => {
  if (node.directives && node.directives.length) {
    let current = node;
    node.directives.forEach((directive) => {
      if (!current) return;
      const directiveName = directive.name.value;
      if (directiveName in directives) {
        const staticFunctions = directives[directiveName].resolveStatic;
        if (staticFunctions[method]) {
          const ret = staticFunctions[method].call(context, current, directive, {
            key, parent, path, ancestors, resolvers, ast,
          });
          if (typeof ret !== typeof undefined) current = ret;
        }
      } else if (throwOnMissing) throw new Error(`Unknown directive '${directiveName}'`);
    });
    return current;
  } return undefined;
};

export default (ast, directives, resolvers = {}, context = {}, throwOnMissing = true) => {
  const func = getFunc(ast, directives, resolvers, context, throwOnMissing);
  const transformedAST = visit(ast, {
    enter(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'enter');
    },
    leave(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'leave');
    },
  });
  const func2 = getFunc(transformedAST, directives, resolvers, context, throwOnMissing);
  const transformedAST2 = visit(transformedAST, {
    enter(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'enter2');
    },
    leave(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'leave2');
    },
  });
  Object.keys(directives || {}).map(key => directives[key]).forEach(({ resolveStatic }) =>
    resolveStatic.finalize && resolveStatic.finalize.apply(context, transformedAST2));
  return transformedAST2;
};
