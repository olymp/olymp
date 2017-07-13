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
var fetchType = createTypeFetcher(function (node, name) { return get(node, 'kind') === 'ObjectTypeDefinition' && get(node, 'name.value') === name; });
export default {
    name: 'algolia',
    queries: "\n    algolia(text: String!): Algolia\n  ",
    onAfter: function (_a) {
        var keys = _a.keys, value = _a.value, context = _a.context, resolverAST = _a.resolverAST, ast = _a.ast;
        if (!context || !context.algolia)
            return;
        if (keys[0] === 'RootMutation' && value) {
            var typeName = get(resolverAST, 'returnType.name');
            var type = fetchType(ast, typeName);
            var directive = get(type, 'directives', []).find(function (d) { return get(d, 'name.value') === 'collection'; });
            if (type && directive) {
                var index_1 = context.algolia.initIndex(context.app.id);
                var asArray = isArray(value) ? value : [value];
                index_1.deleteObjects(asArray.filter(function (x) { return x.state !== 'PUBLISHED'; }).map(function (x) { return x.id; }), function (err) {
                    console.log('OK', err);
                });
                index_1.addObjects(asArray.filter(function (x) { return x.state === 'PUBLISHED'; }).map(function (x) { return (__assign({}, x, { objectID: x.id })); }), function (err) {
                    console.log('OK', err);
                });
            }
        }
    },
    resolvers: {
        queries: {
            algolia: function (source, _a, _b) {
                var text = _a.text;
                var monk = _b.monk, app = _b.app, algolia = _b.algolia;
                var index = algolia.initIndex(app.id);
                return new Promise(function (resolve, reject) {
                    index.search(text, function (err, content) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        content.id = text;
                        resolve(content);
                    });
                });
            },
        },
    },
    schema: "\n    type Algolia {\n      id: String\n      nbHits: Int\n      page: Int\n      nbPages: Int\n      hitsPerPage: Int\n      processingTimeMS: Int\n      exhaustiveNbHits: Boolean\n      query: String,\n      params: String\n      hits: [AlgoliaHit]\n    }\n    type AlgoliaHit {\n      id: String\n      image: Image\n      _type: String\n      name: String\n      tags: [String]\n      state: DOCUMENT_STATE\n      createdAt: DateTime\n      createdBy: User\n      updatedAt: DateTime\n      updatedBy: User\n    }\n  ",
};
//# sourceMappingURL=algolia.js.map