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
var transform = function (image) {
    var newImage = {
        createdById: null,
        state: !image.state ? 'PUBLISHED' : image.state,
        crop: null,
        createdAt: +new Date(),
        tags: null,
        caption: null,
        source: null,
    };
    Object.keys(image).forEach(function (key) {
        switch (key) {
            case 'originalPath':
                break;
            case 'url':
                break;
            case 'source':
                break;
            case 'status':
                break;
            case 'filename':
                newImage.name = image[key];
                break;
            case 'mimetype':
                newImage.type = image[key];
                break;
            case 'size':
                newImage.bytes = image[key];
                break;
            default:
                newImage[key] = image[key];
        }
    });
    return newImage;
};
var ok = function (item, mutate) {
    mutate({
        variables: {
            id: item.id,
            input: __assign({}, item, { __typename: undefined }),
        },
        updateQueries: !item.id || item.state === 'REMOVED'
            ? {
                fileStackList: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    return (__assign({}, prev, { items: !item.id
                            ? __assign({}, prev.items, { item: item }) : prev.items.filter(function (i) { return i.id !== mutationResult.data.item.id; }) }));
                },
            }
            : undefined,
    })
        .then(function (_a) {
        var item = _a.data.item;
        if (item.state === 'REMOVED') {
            onSuccess('Gelöscht', "Datei '" + item.name + "' wurde gel\u00F6scht");
        }
        else {
            onSuccess('Gespeichert', "Datei '" + item.name + "' wurde gespeichert");
        }
    })
        .catch(onError);
};
export default graphql((_a = ["\n  mutation fileStack($id: String, $input: FileStackInput) {\n    item: fileStack(id: $id, input: $input) {\n      id name type createdAt crop width height bytes tags caption source state createdById\n    }\n  }\n"], _a.raw = ["\n  mutation fileStack($id: String, $input: FileStackInput) {\n    item: fileStack(id: $id, input: $input) {\n      id name type createdAt crop width height bytes tags caption source state createdById\n    }\n  }\n"], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, mutate = _a.mutate;
        return (__assign({}, ownProps, { save: function (item) { return ok(transform(item), mutate); } }));
    },
});
var _a;
//# sourceMappingURL=mutation.js.map