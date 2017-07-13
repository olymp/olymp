import { orderBy, groupBy, lowerFirst } from 'lodash';
export default {
    name: 'tag',
    queries: "\n    tags: [Tag]\n    suggestions(collection: String, field: String): [Tag]\n  ",
    resolvers: {
        queries: {
            tags: function (source, args, _a) {
                var monk = _a.monk;
                return monk
                    .collection('item')
                    .find({}, { tags: 1 })
                    .then(function (array) { return array.map(function (_a) {
                    var tags = _a.tags;
                    return tags;
                }); })
                    .then(function (array) {
                    var grouped = groupBy(array);
                    var result = Object.keys(grouped).reduce(function (result, item) {
                        if (item === 'undefined' || !item || item === 'null') {
                            return result;
                        }
                        result.push({
                            id: item,
                            count: grouped[item].length,
                        });
                        return result;
                    }, []);
                    return orderBy(result, ['count', 'id'], ['desc', 'asc']);
                });
            },
            suggestions: function (source, _a, _b) {
                var collection = _a.collection, _c = _a.field, field = _c === void 0 ? 'tags' : _c;
                var monk = _b.monk;
                return monk
                    .collection('item')
                    .find(collection ? { _type: lowerFirst(collection) } : {}, (_d = {}, _d[field] = 1, _d))
                    .then(function (array) {
                    var grouped = groupBy(array, field);
                    var result = Object.keys(grouped).reduce(function (result, item) {
                        if (item === 'undefined' || !item || item === 'null') {
                            return result;
                        }
                        result.push({ id: item, count: grouped[item].length });
                        return result;
                    }, []);
                    return orderBy(result, ['count', field], ['desc', 'asc']);
                });
                var _d;
            },
        },
    },
    schema: "\n    type Tag {\n      id: String\n      count: Int\n    }\n  ",
};
//# sourceMappingURL=tags.js.map