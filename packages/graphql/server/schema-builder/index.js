import { parse } from 'graphql/language';
import { buildASTSchema } from 'graphql/utilities';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import applyDirectivesToAST from './apply-directives';
import { isPlainObject, isFunction } from 'lodash';
export default function (_a) {
    var typeDefs = _a.typeDefs, resolvers = _a.resolvers, directives = _a.directives, onBefore = _a.onBefore, onAfter = _a.onAfter;
    var ast = parse(typeDefs);
    if (directives) {
        applyDirectivesToAST(ast, directives, resolvers);
    }
    var builtSchema = buildASTSchema(ast);
    var recurse = function (obj, currentKeys) {
        if (currentKeys === void 0) { currentKeys = []; }
        return Object.keys(obj).reduce(function (store, key) {
            var keys = currentKeys.concat([key]);
            if (isPlainObject(obj[key]) && typeof obj[key].name === 'string') {
                store[key] = obj[key];
            }
            else if (isPlainObject(obj[key])) {
                store[key] = recurse(obj[key], keys);
            }
            else if (isFunction(obj[key])) {
                var fn_1 = obj[key];
                store[key] = function (source, variables, context, resolverAST) {
                    var promise = Promise.resolve(variables);
                    onBefore.forEach(function (hook) {
                        promise = promise.then(function (newVariables) {
                            variables = newVariables || variables;
                            return hook({ keys: keys, source: source, variables: variables, context: context, resolverAST: resolverAST, ast: ast });
                        });
                    });
                    promise = promise.then(function (newVariables) {
                        variables = newVariables || variables;
                        return fn_1(source, variables, context, resolverAST);
                    });
                    var value;
                    onAfter.forEach(function (hook) {
                        promise = promise.then(function (newValue) {
                            value = newValue || value;
                            return hook({ keys: keys, source: source, value: value, variables: variables, context: context, resolverAST: resolverAST, ast: ast });
                        });
                    });
                    return promise.then(function (newValue) { return newValue || value; });
                };
            }
            else {
                store[key] = obj[key];
            }
            return store;
        }, {});
    };
    addResolveFunctionsToSchema(builtSchema, recurse(resolvers));
    return builtSchema;
};
//# sourceMappingURL=index.js.map