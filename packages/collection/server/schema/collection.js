var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { get, isArray } from 'lodash';
import { createTypeFetcher } from 'olymp-graphql/server';
import shortId from 'shortid';
import diff from 'deep-diff';
var fetchType = createTypeFetcher(function (node, name) { return get(node, 'kind') === 'ObjectTypeDefinition' && get(node, 'name.value') === name; });
export default {
    name: 'collection',
    onBefore: function (_a) {
        var keys = _a.keys, variables = _a.variables, context = _a.context, resolverAST = _a.resolverAST, ast = _a.ast;
        if (keys[0] === 'RootMutation') {
            var typeName = get(resolverAST, 'returnType.name');
            var type = fetchType(ast, typeName);
            var directive = get(type, 'directives', []).find(function (d) { return get(d, 'name.value') === 'collection'; });
            if (type && directive) {
                var input = variables.input, id = variables.id;
                if (!input)
                    return undefined;
                var user = context && context.user;
                var monk = context && context.monk;
                if (!user)
                    throw new Error('Not authorized');
                if (typeName === 'Page' && !user.isAdmin)
                    throw new Error('Not authorized');
                if (!user.isAdmin && user.orgId !== input.orgId && user.orgId !== input.id)
                    throw new Error('Not authorized');
                if (id) {
                    return monk.collection('item').findOne({ id: id }).then(function (old) { return (__assign({}, variables, { old: old || null })); });
                }
            }
        }
        return undefined;
    },
    onAfter: function (_a) {
        var keys = _a.keys, value = _a.value, variables = _a.variables, context = _a.context, resolverAST = _a.resolverAST, ast = _a.ast;
        if (keys[0] === 'RootMutation') {
            var input = variables.input, old = variables.old;
            var typeName = get(resolverAST, 'returnType.name');
            var type = fetchType(ast, typeName);
            var directive = get(type, 'directives', []).find(function (d) { return get(d, 'name.value') === 'collection'; });
            if (type && directive && old !== undefined && !isArray(value)) {
                if (!old && !value)
                    return;
                var appId = context && context.app && context.app.id;
                var userId = context && context.user && context.user.id;
                var id_1 = shortId.generate();
                context.monk.collection('changelog').insert({
                    id: id_1,
                    type: value._type,
                    targetId: value.id,
                    appId: appId,
                    userId: userId,
                    date: +new Date(),
                    diff: diff(old || {}, value).map(function (x, i) { return (__assign({}, x, { id: "" + id_1 + i })); }),
                });
            }
        }
    },
    queries: "\n    changelog(id: String!): [Changelog]\n  ",
    resolvers: {
        queries: {
            changelog: function (source, _a, _b) {
                var id = _a.id;
                var monk = _b.monk, app = _b.app, user = _b.user;
                if (!user)
                    return;
                return monk.collection('changelog').find({ targetId: id, appId: app.id });
            },
        }
    },
    schema: "\n    enum DOCUMENT_STATE {\n      PUBLISHED\n      DRAFT\n      REMOVED\n    }\n    enum MUTATION_TYPE {\n      UPDATE\n      REPLACE\n      REMOVE\n      INSERT\n    }\n    enum SORT_DIRECTION {\n      ASC,\n      DESC\n    }\n    interface CollectionInterface {\n      id: String\n      name: String\n      tags: [String]\n      state: DOCUMENT_STATE\n      createdAt: DateTime\n      createdBy: User\n      updatedAt: DateTime\n      updatedBy: User\n    }\n    type Changelog {\n      id: String\n      targetId: String\n      type: String\n      user: User @relation\n      date: DateTime\n      diff: [ChangelogDiff]\n    }\n    type ChangelogDiff {\n      id: String\n      kind: String\n      path: [String]\n      lhs: Json\n      rhs: Json\n    }\n  ",
};
//# sourceMappingURL=collection.js.map