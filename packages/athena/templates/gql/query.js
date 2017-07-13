var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { graphql, gql } from 'olymp-utils';
export var queryTemplate = graphql((_a = ["\n  query template($id: String) {\n    item: template(id: $id) {\n      id name text\n    }\n  }\n"], _a.raw = ["\n  query template($id: String) {\n    item: template(id: $id) {\n      id name text\n    }\n  }\n"], gql(_a)), {
    options: function (_a) {
        var id = _a.id;
        return ({ variables: { id: id } });
    },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, item: data.item || {} }));
    },
});
export var queryTemplates = graphql((_b = ["\n  query templateList {\n    items: templateList {\n      id name text\n    }\n  }\n"], _b.raw = ["\n  query templateList {\n    items: templateList {\n      id name text\n    }\n  }\n"], gql(_b)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, items: data.items || [] }));
    },
});
export var withTemplates = graphql((_c = ["\n  query templateList {\n    items: templateList {\n      id name text\n    }\n  }\n"], _c.raw = ["\n  query templateList {\n    items: templateList {\n      id name text\n    }\n  }\n"], gql(_c)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { templateData: data, templates: (data.items || []).reduce(function (store, item) {
                store[item.name] = item.text;
                return store;
            }, {}) || {} }));
    },
});
var _a, _b, _c;
//# sourceMappingURL=query.js.map