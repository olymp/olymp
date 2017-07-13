var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { intersection } from 'lodash';
import { adaptQuery } from 'olymp-collection/server';
import { parseURI, getImageById, getImages, getSignedRequest, updateImage, } from './cloudinary';
export default function (uri) {
    var config = parseURI(uri);
    var invalidationTokens = [];
    return {
        name: 'file',
        queries: "\n      cloudinaryRequest: CloudinaryRequest\n    ",
        mutations: "\n      cloudinaryRequestDone(id: String, token: String): File\n    ",
        resolvers: {
            queries: {
                file: function (source, args, _a) {
                    var monk = _a.monk, app = _a.app;
                    return monk.collection('item').findOne({ id: args.id }).then(function (item) {
                        if (item) {
                            return item;
                        }
                        return getImageById(config, args.id).then(function (image) {
                            monk
                                .collection('item')
                                .update({ id: args.id }, __assign({}, image, { _type: 'file', _appId: app.id }), { upsert: true })
                                .catch(function (err) { return console.error(err); });
                            return image;
                        });
                    });
                },
                fileList: function (source, _a, _b) {
                    var query = _a.query;
                    var monk = _b.monk, app = _b.app;
                    var mongoQuery = adaptQuery(query);
                    var tags = mongoQuery.tags && mongoQuery.tags.$in;
                    var getFiltered = function (items) {
                        return tags
                            ? items.filter(function (item) { return intersection(tags, item.tags).length > 0; })
                            : items;
                    };
                    return getImages(config).then(function (images) {
                        var filtered = getFiltered(images.filter(function (x) { return !x.removed; }));
                        Promise.all(filtered.map(function (item) {
                            return monk
                                .collection('item')
                                .update({ id: item.id }, __assign({}, item, { _type: 'file', _appId: app.id }), { upsert: true });
                        })).catch(function (err) { return console.error(err); });
                        return filtered;
                    });
                },
                cloudinaryRequest: function () {
                    return getSignedRequest(config).then(function (signed) {
                        invalidationTokens.push(signed.signature);
                        return signed;
                    });
                },
            },
            mutations: {
                file: function (source, args) {
                    if (args.operationType && args.operationType === 'REMOVE') {
                        return updateImage(args.id, args.input.tags, args.input.source, args.input.caption, config, true);
                    }
                    return updateImage(args.id, args.input.tags, args.input.source, args.input.caption, config);
                },
                cloudinaryRequestDone: function (source, args) {
                    if (args.token && invalidationTokens.indexOf(args.token) !== -1) {
                        invalidationTokens.splice(invalidationTokens.indexOf(args.token), 1);
                        return getImageById(config, args.id).then(function (image) { return image; });
                    }
                    throw new Error('Invalid');
                },
            },
        },
        schema: "\n      type Image {\n        id: String\n        url: String\n        crop: [Int]\n        width: Int\n        height: Int\n        caption: String\n        source: String\n        tags: [String]\n      }\n      type File @collection {\n        id: String\n        format: String\n        version: Int\n        resourceType: String\n        type: String\n        createdAt: String\n        height: Int\n        width: Int\n        bytes: Int\n        url: String\n        caption: String\n        source: String\n        removed: Boolean\n        pages: Int\n        colors: [String]\n        tags: [String]\n      }\n      type CloudinaryRequest {\n        url: String\n        signature: String\n        timestamp: String\n        apiKey: String\n      }\n    ",
    };
};
export var uploadTest = function (config) {
    if (config === void 0) { config = {}; }
    return function (req, res) {
        res.send("\n    <form action=\"" + (config.endpoint ||
            '/upload') + "\" method=\"post\" enctype=\"multipart/form-data\">\n      <link href=\"http://hayageek.github.io/jQuery-Upload-File/4.0.10/uploadfile.css\" rel=\"stylesheet\">\n      <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\n      <script src=\"http://hayageek.github.io/jQuery-Upload-File/4.0.10/jquery.uploadfile.min.js\"></script>\n      <div id=\"fileuploader\">Upload</div>\n      <script>\n        $(document).ready(function()\n        {\n          $.ajax({\n            type: \"POST\",\n            dataType: 'json',\n            url: \"/graphql\",\n            data: JSON.stringify({\n              query: \"query { cloudinaryRequest { signature, apiKey, timestamp } }\",\n              variables: \"\"\n            }),\n            success: function(data) {\n              document.SIGNATURE = data.data.cloudinaryRequest.signature;\n              document.TIMESTAMP = data.data.cloudinaryRequest.timestamp;\n              document.APIKEY = data.data.cloudinaryRequest.apiKey;\n            },\n            contentType: \"application/json\"\n          });\n          $(\"#fileuploader\").uploadFile({\n            url: \"https://api.cloudinary.com/v1_1/djyenzorc/auto/upload\",\n            fileName:\"file\",\n            dynamicFormData: function(x, y) {\n              var data = {};\n              data.api_key = document.APIKEY;\n              data.timestamp = document.TIMESTAMP;\n              data.signature = document.SIGNATURE;\n              return data;\n            }\n          });\n        });\n      </script>\n      Datei:\n      <br>\n      <input type=\"file\" name=\"file\" value=\"\">\n      <br>\n      <br>\n      <input type=\"submit\" value=\"Absenden\">\n    </form>\n  ");
    };
};
//# sourceMappingURL=graphql.js.map