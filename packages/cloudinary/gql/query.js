var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { gql, graphql } from 'olymp-utils';
export default graphql((_a = ["\n  query file($id: String) {\n    item: file(id: $id) {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes\n    }\n  }\n"], _a.raw = ["\n  query file($id: String) {\n    item: file(id: $id) {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes\n    }\n  }\n"], gql(_a)), {
    options: function (_a) {
        var id = _a.id, mediaId = _a.mediaId, query = _a.query;
        return ({
            variables: { id: mediaId },
        });
    },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { item: data.item, data: data }));
    },
});
export var queryMedias = graphql((_b = ["\n  query fileList {\n    items: fileList {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed\n    }\n  }\n"], _b.raw = ["\n  query fileList {\n    items: fileList {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed\n    }\n  }\n"], gql(_b)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { items: data.items || [], data: data }));
    },
});
export var cloudinaryRequest = graphql((_c = ["\n  query cloudinaryRequest {\n    cloudinaryRequest {\n      apiKey, url, signature, timestamp\n    }\n  }\n"], _c.raw = ["\n  query cloudinaryRequest {\n    cloudinaryRequest {\n      apiKey, url, signature, timestamp\n    }\n  }\n"], gql(_c)), {
    options: function () { return ({
        fetchPolicy: 'network-only',
    }); },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { refetchKey: data.refetch, data: data }));
    },
});
var _a, _b, _c;
//# sourceMappingURL=query.js.map