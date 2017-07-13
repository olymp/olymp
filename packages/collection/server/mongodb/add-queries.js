var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { get, set, lowerFirst } from 'lodash';
import { addFields } from 'olymp-graphql/server';
import adaptQuery from './adapt-query';
import shortId from 'shortid';
export default function (ast, node, resolvers, typeName, isGeneric) {
    var name = node.name.value;
    var table = lowerFirst(typeName || name);
    var Query = ast.definitions.find(function (x) { return get(x, 'name.value') === 'RootQuery'; });
    if (Query) {
        addFields(ast, Query, table + "(id: String, query: " + name + "Query, sort: " + name + "Sort): " + name, { replace: false });
        if (!get(resolvers, "RootQuery." + table)) {
            set(resolvers, "RootQuery." + table, function (source, _a, _b) {
                var id = _a.id, query = _a.query;
                var monk = _b.monk, app = _b.app;
                var x = id ? { id: id } : adaptQuery(query);
                var q = isGeneric ? __assign({}, x, { _appId: app.id }) : __assign({}, x, { _type: table, _appId: app.id });
                return monk.collection('item').findOne(q);
            });
        }
        addFields(ast, Query, table + "List(query: " + name + "Query, sort: " + name + "Sort, limit: Int, skip: Int): [" + name + "]", { replace: false });
        if (!get(resolvers, "RootQuery." + table + "List")) {
            set(resolvers, "RootQuery." + table + "List", function (source, _a, _b) {
                var query = _a.query, sort = _a.sort;
                var monk = _b.monk, app = _b.app;
                return monk
                    .collection('item')
                    .find(isGeneric ? __assign({}, adaptQuery(query), { _appId: app.id }) : __assign({}, adaptQuery(query), { _type: table, _appId: app.id }), { rawCursor: true })
                    .then(function (cursor) {
                    var obj = sort || { name: 'ASC' };
                    var sorting = Object.keys(obj).reduce(function (store, key) {
                        store[key] = obj[key] === 'DESC' ? -1 : 1;
                        return store;
                    }, {});
                    return cursor.sort(sorting).toArray();
                });
            });
        }
    }
    var Mutation = ast.definitions.find(function (x) { return get(x, 'name.value') === 'RootMutation'; });
    if (Mutation) {
        addFields(ast, Mutation, table + "(id: String, type: MUTATION_TYPE, input: " + name + "Input): " + name, { replace: false });
        if (!get(resolvers, "RootMutation." + table)) {
            set(resolvers, "RootMutation." + table, function (source, _a, _b) {
                var id = _a.id, input = _a.input, type = _a.type;
                var monk = _b.monk, app = _b.app;
                var promise;
                if (!id) {
                    id = shortId.generate();
                    promise = monk
                        .collection('item')
                        .insert(__assign({}, input, { _type: table, _appId: app.id, id: id }));
                }
                else if (type === 'REMOVE') {
                    promise = monk
                        .collection('item')
                        .update({ _type: table, id: id }, __assign({}, input, { state: 'REMOVED' }));
                }
                else if (type === 'REPLACE') {
                    promise = monk
                        .collection('item')
                        .update({ _type: table, id: id }, __assign({}, input, { _type: table, _appId: app.id, id: id }));
                }
                else {
                    promise = monk
                        .collection('item')
                        .update({ _type: table, id: id }, { $set: __assign({}, input) });
                }
                return promise.then(function () { return monk.collection('item').findOne({ id: id, _type: table }); });
            });
        }
    }
};
//# sourceMappingURL=add-queries.js.map