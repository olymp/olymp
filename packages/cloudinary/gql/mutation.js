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
var ok = function (item, mutate) {
    mutate({
        variables: {
            id: item.id,
            input: __assign({}, item, { __typename: undefined }),
            operationType: item.removed ? 'REMOVE' : null,
        },
        updateQueries: item.removed
            ? {
                fileList: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    return (__assign({}, prev, { items: prev.items.filter(function (item) { return item.id !== mutationResult.data.item.id; }) }));
                },
            }
            : undefined,
    })
        .then(function (_a) {
        var item = _a.data.item;
        if (item.removed) {
            onSuccess('Gelöscht', "Datei '" + item.id + "' wurde gel\u00F6scht");
        }
        else {
            onSuccess('Gespeichert', "Datei '" + item.id + "' wurde gespeichert");
        }
    })
        .catch(onError);
};
export default graphql((_a = ["\n  mutation file($id: String, $input: FileInput, $operationType: MUTATION_TYPE) {\n    item: file(id: $id, input: $input, type: $operationType) {\n      id format version resourceType type createdAt height width bytes tags url caption source removed pages colors\n    }\n  }\n"], _a.raw = ["\n  mutation file($id: String, $input: FileInput, $operationType: MUTATION_TYPE) {\n    item: file(id: $id, input: $input, type: $operationType) {\n      id format version resourceType type createdAt height width bytes tags url caption source removed pages colors\n    }\n  }\n"], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return (__assign({}, ownProps, { save: function (item) { return ok(item, mutate); }, mutate: mutate }));
    },
});
export var cloudinaryRequestDone = graphql((_b = ["\n  mutation cloudinaryRequestDone($id: String, $token: String) {\n    cloudinaryRequestDone(id: $id, token: $token) {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed\n    }\n  }\n"], _b.raw = ["\n  mutation cloudinaryRequestDone($id: String, $token: String) {\n    cloudinaryRequestDone(id: $id, token: $token) {\n      id, url, tags, colors, width, height, createdAt, caption, source, format, bytes, removed\n    }\n  }\n"], gql(_b)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return {
            done: function (_a) {
                var id = _a.id, token = _a.token;
                return mutate({
                    variables: { id: id, token: token },
                    updateQueries: {
                        fileList: function (prev, _a) {
                            var mutationResult = _a.mutationResult;
                            var newData = mutationResult.data.cloudinaryRequestDone;
                            return __assign({}, prev, { items: [newData].concat(prev.items) });
                        },
                    },
                });
            },
        };
    },
});
var _a, _b;
//# sourceMappingURL=mutation.js.map