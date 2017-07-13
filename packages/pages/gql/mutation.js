var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { gql, graphql } from 'olymp-utils';
import { onError, onSuccess } from 'olymp-ui';
var ok = function (props, mutate) { return function () {
    var form = props.form, item = props.item, router = props.router, query = props.query, flatNavigation = props.flatNavigation;
    form.validateFields(function (err, values) {
        if (err) {
            return onError(err);
        }
        mutate({
            variables: {
                id: item.id,
                input: values,
            },
            updateQueries: !item.id
                ? {
                    pageList: function (prev, _a) {
                        var mutationResult = _a.mutationResult;
                        return (__assign({}, prev, { items: prev.items.concat([mutationResult.data.item]) }));
                    },
                }
                : undefined,
        })
            .then(function (_a) {
            var item = _a.data.item;
            onSuccess('Gespeichert', 'Die Seite wurde gespeichert');
            form.resetFields();
            var slug = item.slug;
            var parentId = item.parentId;
            while (parentId) {
                var parent_1 = flatNavigation.find(function (x) { return x.id === parentId; }) || {};
                if (parent_1.slug) {
                    slug = ("" + parent_1.slug + slug).replace('//', '/');
                }
                parentId = parent_1.parentId;
            }
            router.push({ pathname: slug, query: __assign({}, query, { '@page': item.id }) });
        })
            .catch(onError);
    });
}; };
export default graphql((_a = ["\n    mutation page($id: String, $input: PageInput) {\n      item: page(id: $id, input: $input) {\n        id\n        slug\n        order\n        name\n        type\n        binding {\n          id\n          type\n          query\n          fields\n        }\n        aliasId\n        href\n        sorting\n        parentId\n        blocks\n        state\n      }\n    }\n  "], _a.raw = ["\n    mutation page($id: String, $input: PageInput) {\n      item: page(id: $id, input: $input) {\n        id\n        slug\n        order\n        name\n        type\n        binding {\n          id\n          type\n          query\n          fields\n        }\n        aliasId\n        href\n        sorting\n        parentId\n        blocks\n        state\n      }\n    }\n  "], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return (__assign({}, ownProps, { save: ok(ownProps, mutate), mutate: mutate }));
    },
});
export var reorderPage = graphql((_b = ["\n    mutation reorderPage($id: String, $sorting: [String]) {\n      item: page(id: $id, input: { sorting: $sorting }) {\n        id\n        sorting\n      }\n    }\n  "], _b.raw = ["\n    mutation reorderPage($id: String, $sorting: [String]) {\n      item: page(id: $id, input: { sorting: $sorting }) {\n        id\n        sorting\n      }\n    }\n  "], gql(_b)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return (__assign({}, ownProps, { reorder: mutate }));
    },
});
export var movePage = graphql((_c = ["\n    mutation movePage($id: String, $parentId: String, $sorting: [String]) {\n      item: page(id: $parentId, input: { sorting: $sorting }) {\n        id\n        sorting\n      }\n      item2: page(id: $id, input: { parentId: $parentId }) {\n        id\n        parentId\n      }\n    }\n  "], _c.raw = ["\n    mutation movePage($id: String, $parentId: String, $sorting: [String]) {\n      item: page(id: $parentId, input: { sorting: $sorting }) {\n        id\n        sorting\n      }\n      item2: page(id: $id, input: { parentId: $parentId }) {\n        id\n        parentId\n      }\n    }\n  "], gql(_c)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return (__assign({}, ownProps, { move: mutate }));
    },
});
var _a, _b, _c;
//# sourceMappingURL=mutation.js.map