const { visit } = require('graphql/language');

export default (ast, directives, resolvers = {}, context = {}, throwOnMissing = true) => {
  const transformedAST = visit(ast, {
    enter(node, key, parent, path, ancestors) {
      if (node.directives && node.directives.length) {
        let current = node;
        node.directives.forEach((directive) => {
          if (!current) return;
          const directiveName = directive.name.value;
          if (directiveName in directives) {
            const staticFunctions = directives[directiveName].resolveStatic;
            if (staticFunctions.enter) {
              const ret = staticFunctions.enter.call(context, current, directive, {
                key, parent, path, ancestors, resolvers, ast,
              });
              if (typeof ret !== typeof undefined) current = ret;
            }
          } else if (throwOnMissing) throw new Error(`Unknown directive '${directiveName}'`);
        });
        return current;
      } return undefined;
    },
    leave(node, key, parent, path, ancestors) {
      if (node.directives && node.directives.length) {
        let current = node;
        node.directives.forEach((directive) => {
          if (!current) return;
          const directiveName = directive.name.value;
          if (directiveName in directives) {
            const staticFunctions = directives[directiveName].resolveStatic;
            if (staticFunctions.leave) {
              const ret = staticFunctions.leave.call(context, current, directive, {
                key, parent, path, ancestors, resolvers, ast,
              });
              if (typeof ret !== typeof undefined) current = ret;
            }
          }
        });
        return current;
      } return undefined;
    },
  });
  Object.keys(directives || {}).map(key => directives[key]).forEach(({ resolveStatic }) =>
    resolveStatic.finalize && resolveStatic.finalize.apply(context, transformedAST));
  return transformedAST;
};
