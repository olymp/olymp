var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import fetch from 'isomorphic-fetch';
import shortId from 'shortid';
var transform = function (image, user) { return (__assign({}, image, { createdById: user.id })); };
export default function (schema, _a) {
    var adapter = (_a === void 0 ? {} : _a).adapter;
    schema.addSchema({
        name: 'fileStack',
        query: "\n      fileStack(id: String): FileStack\n      fileStackList(tags: [String]): [FileStack]\n    ",
        mutation: "\n      fileStack(id: String, input: FileStackInput): FileStack\n    ",
        resolvers: {
            FileStack: {
                createdBy: function (source, args, _a) {
                    var monk = _a.monk;
                    return monk.collection('user').findOne({ id: source.createdById });
                },
            },
            queries: {
                fileStack: function (source, args, _a) {
                    var monk = _a.monk;
                    return monk.collection('file').findOne({ id: args.id });
                },
                fileStackList: function (source, _a, _b) {
                    var tags = _a.tags;
                    var monk = _b.monk;
                    return monk.collection('file').findOne({ tags: tags });
                },
            },
            mutations: {
                fileStack: function (source, _a, _b) {
                    var id = _a.id, input = _a.input;
                    var monk = _b.monk, user = _b.user;
                    if (!id) {
                        id = shortId.generate();
                    }
                    var item;
                    return fetch("https://www.filestackapi.com/api/file/" + input.handle + "/metadata?width=true&height=true")
                        .then(function (response) { return response.json(); })
                        .then(function (json) {
                        item = transform(__assign({ id: id }, input, json), user);
                        return monk
                            .collection('file')
                            .updateOne({ id: id }, item, { upsert: true });
                    })
                        .then(function () { return item; });
                },
            },
        },
        schema: "\n      type FileStack @input {\n        id: String\n        handle: String\n        name: String\n        type: String\n        crop: [Int]\n        width: Int\n        height: Int\n        bytes: Int\n        tags: [String]\n        caption: String\n        source: String\n        state: DOCUMENT_STATE\n        createdAt: String\n        createdById: String\n        createdBy: User\n      }\n    ",
    });
};
//# sourceMappingURL=gql.js.map