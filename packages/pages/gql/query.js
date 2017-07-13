var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { gql, graphql } from 'olymp-utils';
var isNew = function (props) { return props.query['@page'] === 'new'; };
var getId = function (id, query) {
    return query['@page'] && query['@page'] !== 'new' ? query['@page'] : id;
};
var queryOne = (_a = ["\n  query page($id: String) {\n    item: page(id: $id) {\n      id\n      slug\n      description\n      order\n      type\n      name\n      binding {\n        id\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks\n      state\n    }\n  }\n"], _a.raw = ["\n  query page($id: String) {\n    item: page(id: $id) {\n      id\n      slug\n      description\n      order\n      type\n      name\n      binding {\n        id\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks\n      state\n    }\n  }\n"], gql(_a));
export default graphql(queryOne, {
    options: function (_a) {
        var id = _a.id, pageId = _a.pageId, query = _a.query;
        return ({
            variables: { id: pageId || getId(id, query) },
            fetchPolicy: isNew({ query: query }) ? 'cache-only' : undefined,
        });
    },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { item: (isNew(ownProps) ? {} : data.item) || {}, data: data }));
    },
});
export var prefetchPage = function (client, id) {
    return client.query({
        query: queryOne,
        variables: { id: id },
    });
};
export var queryPages = graphql((_b = ["\n    query pageList {\n      items: pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n        id\n        slug\n        order\n        type\n        name\n        binding {\n          id\n          type\n          query\n          fields\n        }\n        parentId\n        sorting\n        state\n      }\n    }\n  "], _b.raw = ["\n    query pageList {\n      items: pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n        id\n        slug\n        order\n        type\n        name\n        binding {\n          id\n          type\n          query\n          fields\n        }\n        parentId\n        sorting\n        state\n      }\n    }\n  "], gql(_b)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { items: data.items || [], data: data }));
    },
});
var _a, _b;
//# sourceMappingURL=query.js.map