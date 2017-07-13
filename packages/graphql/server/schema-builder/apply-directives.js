var visit = require('graphql/language').visit;
var getFunc = function (ast, directives, resolvers, throwOnMissing) { return function (node, key, parent, path, ancestors, method) {
    if (node.directives && node.directives.length) {
        var current_1 = node;
        node.directives.forEach(function (directive) {
            if (!current_1) {
                return;
            }
            var directiveName = directive.name.value;
            if (directiveName in directives) {
                var staticFunctions = directives[directiveName].resolveStatic;
                if (staticFunctions[method]) {
                    var ret = staticFunctions[method].call({}, current_1, directive, Object.assign({
                        key: key,
                        parent: parent,
                        path: path,
                        ancestors: ancestors,
                        ast: ast,
                        resolvers: resolvers,
                    }));
                    if (typeof ret !== typeof undefined) {
                        current_1 = ret;
                    }
                }
            }
            else if (throwOnMissing) {
                throw new Error("Unknown directive '" + directiveName + "'");
            }
        });
        return current_1;
    }
    return undefined;
}; };
export default function (ast, directives, resolvers, throwOnMissing) {
    if (throwOnMissing === void 0) { throwOnMissing = false; }
    var func = getFunc(ast, directives, resolvers, throwOnMissing);
    visit(ast, {
        enter: function (node, key, parent, path, ancestors) {
            return func(node, key, parent, path, ancestors, 'enter');
        },
        leave: function (node, key, parent, path, ancestors) {
            return func(node, key, parent, path, ancestors, 'leave');
        },
    });
    var func2 = getFunc(ast, directives, resolvers, throwOnMissing);
    visit(ast, {
        enter: function (node, key, parent, path, ancestors) {
            return func2(node, key, parent, path, ancestors, 'enter2');
        },
        leave: function (node, key, parent, path, ancestors) {
            return func2(node, key, parent, path, ancestors, 'leave2');
        },
    });
    Object.keys(directives || {})
        .map(function (key) { return directives[key]; })
        .forEach(function (_a) {
        var resolveStatic = _a.resolveStatic;
        return resolveStatic &&
            resolveStatic.finalize &&
            resolveStatic.finalize.apply({}, ast);
    });
};
//# sourceMappingURL=apply-directives.js.map