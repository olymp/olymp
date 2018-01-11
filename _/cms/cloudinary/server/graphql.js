'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadTest = undefined;

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _flatMap2 = require('lodash/flatMap');

var _flatMap3 = _interopRequireDefault(_flatMap2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _server = require('olymp-collection/server');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _cloudinary = require('./cloudinary');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (uri) {
  var config = (0, _cloudinary.parseURI)(uri);

  var invalidationTokens = [];
  return {
    name: 'file',
    queries: '\n      cloudinaryRequest: CloudinaryRequest\n      fileTags(folder: String): [String]\n    ',
    mutations: '\n      cloudinaryRequestDone(id: String, token: String, folder: String, tags: [String]): File\n    ',
    resolvers: {
      queries: {
        file: function file(source, args, _ref) {
          var db = _ref.db,
              app = _ref.app;
          return db.collection('item').findOne({ id: args.id });
        },

        fileList: function fileList(source, _ref2, _ref3) {
          var query = _ref2.query;
          var db = _ref3.db,
              app = _ref3.app,
              user = _ref3.user;

          var mongoQuery = (0, _server.adaptQuery)(query);
          /* if (!user) {
            return [];
          } */
          // mongoQuery._appId = { $in: user._appIds };
          mongoQuery._type = 'file';
          mongoQuery.state = { $ne: 'REMOVED' };
          return db.collection('item').find(mongoQuery).toArray();
        },
        fileTags: function fileTags(source, _ref4, _ref5) {
          var folder = _ref4.folder;
          var db = _ref5.db,
              user = _ref5.user;

          if (!user) {
            return [];
          }
          var mongoQuery = {
            // _appId: { $in: user._appIds },
            _type: 'file'
          };
          if (folder) {
            mongoQuery.folder = folder;
          }
          return db.collection('item').find(mongoQuery).toArray().then(function (items) {
            return (0, _sortBy3.default)((0, _uniq3.default)((0, _flatMap3.default)(items, function (item) {
              return item.tags;
            })), function (x) {
              return x;
            }).filter(function (x) {
              return x;
            });
          });
        },
        cloudinaryRequest: function cloudinaryRequest() {
          var signed = (0, _cloudinary.getSignedRequest)(config);
          invalidationTokens.push(signed.signature);
          return signed;
        }
      },
      mutations: {
        file: function file(source, args, _ref6) {
          var db = _ref6.db,
              app = _ref6.app;

          if (args.operationType === 'REMOVE') {
            args.input.state = 'REMOVED';
          }
          return db.collection('item').findOne({ id: args.input.id }).then(function (item) {
            return (
              /* setTimeout(() => {
                if (args.operationType && args.operationType === 'REMOVE') {
                  return updateImage(
                    item.publicId,
                    args.input.tags,
                    args.input.source,
                    args.input.caption,
                    config,
                    true,
                  );
                }
                 return updateImage(
                  item.publicId,
                  args.input.tags,
                  args.input.source,
                  args.input.caption,
                  config,
                );
              }, 10); */
              db.collection('item').updateOne({ id: args.input.id }, { $set: args.input }, { upsert: true }).then(function () {
                return db.collection('item').findOne({ id: args.input.id });
              })
            );
          });
        },
        cloudinaryRequestDone: function cloudinaryRequestDone(source, _ref7, _ref8) {
          var token = _ref7.token,
              id = _ref7.id,
              folder = _ref7.folder,
              tags = _ref7.tags;
          var db = _ref8.db,
              app = _ref8.app;

          if (token && invalidationTokens.indexOf(token) !== -1) {
            invalidationTokens.splice(invalidationTokens.indexOf(token), 1);
            return (0, _cloudinary.getImageById)(config, id).then(function (image) {
              return db.collection('item').update({ publicId: id }, _extends({}, image, {
                id: _shortid2.default.generate(),
                _type: 'file',
                _appId: app.id,
                tags: tags,
                folder: folder || null
              }), { upsert: true });
            }).then(function (x) {
              return db.collection('item').findOne({ publicId: id });
            });
          }
          throw new Error('Invalid');
        }
      }
    },
    schema: '\n      type Image {\n        id: String\n        mime: String\n        handle: String\n        originalHandle: String\n        url: String\n        crop: [Int]\n        width: Int\n        height: Int\n        caption: String\n        source: String\n        tags: [String]\n      }\n      type File @collection {\n        id: String\n        publicId: String\n        format: String\n        version: Int\n        resourceType: String\n        type: String\n        createdAt: String\n        height: Int\n        width: Int\n        bytes: Int\n        url: String\n        caption: String\n        source: String\n        removed: Boolean\n        pages: Int\n        colors: [String]\n        tags: [String]\n        folder: String\n      }\n      type CloudinaryRequest {\n        url: String\n        signature: String\n        folder: String\n        timestamp: String\n        apiKey: String\n      }\n    '
  };
};

var uploadTest = exports.uploadTest = function uploadTest() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (req, res) {
    res.send('\n    <form action="' + (config.endpoint || '/upload') + '" method="post" enctype="multipart/form-data">\n      <link href="http://hayageek.github.io/jQuery-Upload-File/4.0.10/uploadfile.css" rel="stylesheet">\n      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>\n      <script src="http://hayageek.github.io/jQuery-Upload-File/4.0.10/jquery.uploadfile.min.js"></script>\n      <div id="fileuploader">Upload</div>\n      <script>\n        $(document).ready(function()\n        {\n          $.ajax({\n            type: "POST",\n            dataType: \'json\',\n            url: "/graphql",\n            data: JSON.stringify({\n              query: "query { cloudinaryRequest { signature, apiKey, timestamp } }",\n              variables: ""\n            }),\n            success: function(data) {\n              document.SIGNATURE = data.data.cloudinaryRequest.signature;\n              document.TIMESTAMP = data.data.cloudinaryRequest.timestamp;\n              document.APIKEY = data.data.cloudinaryRequest.apiKey;\n            },\n            contentType: "application/json"\n          });\n          $("#fileuploader").uploadFile({\n            url: "https://api.cloudinary.com/v1_1/djyenzorc/auto/upload",\n            fileName:"file",\n            dynamicFormData: function(x, y) {\n              var data = {};\n              data.api_key = document.APIKEY;\n              data.timestamp = document.TIMESTAMP;\n              data.signature = document.SIGNATURE;\n              return data;\n            }\n          });\n        });\n      </script>\n      Datei:\n      <br>\n      <input type="file" name="file" value="">\n      <br>\n      <br>\n      <input type="submit" value="Absenden">\n    </form>\n  ');
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3NlcnZlci9ncmFwaHFsLmVzNiJdLCJuYW1lcyI6WyJjb25maWciLCJ1cmkiLCJpbnZhbGlkYXRpb25Ub2tlbnMiLCJuYW1lIiwicXVlcmllcyIsIm11dGF0aW9ucyIsInJlc29sdmVycyIsImZpbGUiLCJzb3VyY2UiLCJhcmdzIiwiZGIiLCJhcHAiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImlkIiwiZmlsZUxpc3QiLCJxdWVyeSIsInVzZXIiLCJtb25nb1F1ZXJ5IiwiX3R5cGUiLCJzdGF0ZSIsIiRuZSIsImZpbmQiLCJ0b0FycmF5IiwiZmlsZVRhZ3MiLCJmb2xkZXIiLCJ0aGVuIiwiaXRlbXMiLCJpdGVtIiwidGFncyIsIngiLCJmaWx0ZXIiLCJjbG91ZGluYXJ5UmVxdWVzdCIsInNpZ25lZCIsInB1c2giLCJzaWduYXR1cmUiLCJvcGVyYXRpb25UeXBlIiwiaW5wdXQiLCJ1cGRhdGVPbmUiLCIkc2V0IiwidXBzZXJ0IiwiY2xvdWRpbmFyeVJlcXVlc3REb25lIiwidG9rZW4iLCJpbmRleE9mIiwic3BsaWNlIiwidXBkYXRlIiwicHVibGljSWQiLCJpbWFnZSIsImdlbmVyYXRlIiwiX2FwcElkIiwiRXJyb3IiLCJzY2hlbWEiLCJ1cGxvYWRUZXN0IiwicmVxIiwicmVzIiwic2VuZCIsImVuZHBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7O2tCQUVlLGVBQU87QUFDcEIsTUFBTUEsU0FBUywwQkFBU0MsR0FBVCxDQUFmOztBQUVBLE1BQU1DLHFCQUFxQixFQUEzQjtBQUNBLFNBQU87QUFDTEMsVUFBTSxNQUREO0FBRUxDLDJHQUZLO0FBTUxDLHFIQU5LO0FBU0xDLGVBQVc7QUFDVEYsZUFBUztBQUNQRyxjQUFNLGNBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLGNBQWlCQyxFQUFqQixRQUFpQkEsRUFBakI7QUFBQSxjQUFxQkMsR0FBckIsUUFBcUJBLEdBQXJC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VUFBQ3FELEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZEQSxRQUFJQyxJQUFKLDJCQUNrQnZELE9BQU93RCxRQUFQLElBQ2QsU0FGSjtBQThDRCxHQS9DeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9zZXJ2ZXIvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkYXB0UXVlcnkgfSBmcm9tICdvbHltcC1jb2xsZWN0aW9uL3NlcnZlcic7XG5pbXBvcnQgU2hvcnRJZCBmcm9tICdzaG9ydGlkJztcbmltcG9ydCB7IGZsYXRNYXAsIHVuaXEsIHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwYXJzZVVSSSwgZ2V0SW1hZ2VCeUlkLCBnZXRTaWduZWRSZXF1ZXN0IH0gZnJvbSAnLi9jbG91ZGluYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgdXJpID0+IHtcbiAgY29uc3QgY29uZmlnID0gcGFyc2VVUkkodXJpKTtcblxuICBjb25zdCBpbnZhbGlkYXRpb25Ub2tlbnMgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnZmlsZScsXG4gICAgcXVlcmllczogYFxuICAgICAgY2xvdWRpbmFyeVJlcXVlc3Q6IENsb3VkaW5hcnlSZXF1ZXN0XG4gICAgICBmaWxlVGFncyhmb2xkZXI6IFN0cmluZyk6IFtTdHJpbmddXG4gICAgYCxcbiAgICBtdXRhdGlvbnM6IGBcbiAgICAgIGNsb3VkaW5hcnlSZXF1ZXN0RG9uZShpZDogU3RyaW5nLCB0b2tlbjogU3RyaW5nLCBmb2xkZXI6IFN0cmluZywgdGFnczogW1N0cmluZ10pOiBGaWxlXG4gICAgYCxcbiAgICByZXNvbHZlcnM6IHtcbiAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgZmlsZTogKHNvdXJjZSwgYXJncywgeyBkYiwgYXBwIH0pID0+XG4gICAgICAgICAgZGIuY29sbGVjdGlvbignaXRlbScpLmZpbmRPbmUoeyBpZDogYXJncy5pZCB9KSxcblxuICAgICAgICBmaWxlTGlzdDogKHNvdXJjZSwgeyBxdWVyeSB9LCB7IGRiLCBhcHAsIHVzZXIgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vbmdvUXVlcnkgPSBhZGFwdFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAvKiBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9ICovXG4gICAgICAgICAgLy8gbW9uZ29RdWVyeS5fYXBwSWQgPSB7ICRpbjogdXNlci5fYXBwSWRzIH07XG4gICAgICAgICAgbW9uZ29RdWVyeS5fdHlwZSA9ICdmaWxlJztcbiAgICAgICAgICBtb25nb1F1ZXJ5LnN0YXRlID0geyAkbmU6ICdSRU1PVkVEJyB9O1xuICAgICAgICAgIHJldHVybiBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgLmZpbmQobW9uZ29RdWVyeSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVUYWdzOiAoc291cmNlLCB7IGZvbGRlciB9LCB7IGRiLCB1c2VyIH0pID0+IHtcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbW9uZ29RdWVyeSA9IHtcbiAgICAgICAgICAgIC8vIF9hcHBJZDogeyAkaW46IHVzZXIuX2FwcElkcyB9LFxuICAgICAgICAgICAgX3R5cGU6ICdmaWxlJyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChmb2xkZXIpIHtcbiAgICAgICAgICAgIG1vbmdvUXVlcnkuZm9sZGVyID0gZm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgIC5maW5kKG1vbmdvUXVlcnkpXG4gICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgICAudGhlbihpdGVtcyA9PlxuICAgICAgICAgICAgICBzb3J0QnkodW5pcShmbGF0TWFwKGl0ZW1zLCBpdGVtID0+IGl0ZW0udGFncykpLCB4ID0+IHgpLmZpbHRlcihcbiAgICAgICAgICAgICAgICB4ID0+IHgsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBjbG91ZGluYXJ5UmVxdWVzdDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNpZ25lZCA9IGdldFNpZ25lZFJlcXVlc3QoY29uZmlnKTtcbiAgICAgICAgICBpbnZhbGlkYXRpb25Ub2tlbnMucHVzaChzaWduZWQuc2lnbmF0dXJlKTtcbiAgICAgICAgICByZXR1cm4gc2lnbmVkO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG11dGF0aW9uczoge1xuICAgICAgICBmaWxlOiAoc291cmNlLCBhcmdzLCB7IGRiLCBhcHAgfSkgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLm9wZXJhdGlvblR5cGUgPT09ICdSRU1PVkUnKSB7XG4gICAgICAgICAgICBhcmdzLmlucHV0LnN0YXRlID0gJ1JFTU9WRUQnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgIC5maW5kT25lKHsgaWQ6IGFyZ3MuaW5wdXQuaWQgfSlcbiAgICAgICAgICAgIC50aGVuKGl0ZW0gPT5cbiAgICAgICAgICAgICAgLyogc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3Mub3BlcmF0aW9uVHlwZSAmJiBhcmdzLm9wZXJhdGlvblR5cGUgPT09ICdSRU1PVkUnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlSW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVibGljSWQsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaW5wdXQudGFncyxcbiAgICAgICAgICAgICAgICAgICAgYXJncy5pbnB1dC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaW5wdXQuY2FwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlSW1hZ2UoXG4gICAgICAgICAgICAgICAgICBpdGVtLnB1YmxpY0lkLFxuICAgICAgICAgICAgICAgICAgYXJncy5pbnB1dC50YWdzLFxuICAgICAgICAgICAgICAgICAgYXJncy5pbnB1dC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBhcmdzLmlucHV0LmNhcHRpb24sXG4gICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSwgMTApOyAqL1xuICAgICAgICAgICAgICBkYlxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgICAgICAudXBkYXRlT25lKFxuICAgICAgICAgICAgICAgICAgeyBpZDogYXJncy5pbnB1dC5pZCB9LFxuICAgICAgICAgICAgICAgICAgeyAkc2V0OiBhcmdzLmlucHV0IH0sXG4gICAgICAgICAgICAgICAgICB7IHVwc2VydDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbignaXRlbScpLmZpbmRPbmUoeyBpZDogYXJncy5pbnB1dC5pZCB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvdWRpbmFyeVJlcXVlc3REb25lOiAoXG4gICAgICAgICAgc291cmNlLFxuICAgICAgICAgIHsgdG9rZW4sIGlkLCBmb2xkZXIsIHRhZ3MgfSxcbiAgICAgICAgICB7IGRiLCBhcHAgfSxcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgaWYgKHRva2VuICYmIGludmFsaWRhdGlvblRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGludmFsaWRhdGlvblRva2Vucy5zcGxpY2UoaW52YWxpZGF0aW9uVG9rZW5zLmluZGV4T2YodG9rZW4pLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRJbWFnZUJ5SWQoY29uZmlnLCBpZClcbiAgICAgICAgICAgICAgLnRoZW4oaW1hZ2UgPT5cbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdpdGVtJykudXBkYXRlKFxuICAgICAgICAgICAgICAgICAgeyBwdWJsaWNJZDogaWQgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBTaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIF90eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgICAgIF9hcHBJZDogYXBwLmlkLFxuICAgICAgICAgICAgICAgICAgICB0YWdzLFxuICAgICAgICAgICAgICAgICAgICBmb2xkZXI6IGZvbGRlciB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgdXBzZXJ0OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudGhlbih4ID0+IGRiLmNvbGxlY3Rpb24oJ2l0ZW0nKS5maW5kT25lKHsgcHVibGljSWQ6IGlkIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkJyk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2NoZW1hOiBgXG4gICAgICB0eXBlIEltYWdlIHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICBtaW1lOiBTdHJpbmdcbiAgICAgICAgaGFuZGxlOiBTdHJpbmdcbiAgICAgICAgb3JpZ2luYWxIYW5kbGU6IFN0cmluZ1xuICAgICAgICB1cmw6IFN0cmluZ1xuICAgICAgICBjcm9wOiBbSW50XVxuICAgICAgICB3aWR0aDogSW50XG4gICAgICAgIGhlaWdodDogSW50XG4gICAgICAgIGNhcHRpb246IFN0cmluZ1xuICAgICAgICBzb3VyY2U6IFN0cmluZ1xuICAgICAgICB0YWdzOiBbU3RyaW5nXVxuICAgICAgfVxuICAgICAgdHlwZSBGaWxlIEBjb2xsZWN0aW9uIHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICBwdWJsaWNJZDogU3RyaW5nXG4gICAgICAgIGZvcm1hdDogU3RyaW5nXG4gICAgICAgIHZlcnNpb246IEludFxuICAgICAgICByZXNvdXJjZVR5cGU6IFN0cmluZ1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgY3JlYXRlZEF0OiBTdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBJbnRcbiAgICAgICAgd2lkdGg6IEludFxuICAgICAgICBieXRlczogSW50XG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgICAgIGNhcHRpb246IFN0cmluZ1xuICAgICAgICBzb3VyY2U6IFN0cmluZ1xuICAgICAgICByZW1vdmVkOiBCb29sZWFuXG4gICAgICAgIHBhZ2VzOiBJbnRcbiAgICAgICAgY29sb3JzOiBbU3RyaW5nXVxuICAgICAgICB0YWdzOiBbU3RyaW5nXVxuICAgICAgICBmb2xkZXI6IFN0cmluZ1xuICAgICAgfVxuICAgICAgdHlwZSBDbG91ZGluYXJ5UmVxdWVzdCB7XG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgICAgIHNpZ25hdHVyZTogU3RyaW5nXG4gICAgICAgIGZvbGRlcjogU3RyaW5nXG4gICAgICAgIHRpbWVzdGFtcDogU3RyaW5nXG4gICAgICAgIGFwaUtleTogU3RyaW5nXG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRUZXN0ID0gKGNvbmZpZyA9IHt9KSA9PiAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoYFxuICAgIDxmb3JtIGFjdGlvbj1cIiR7Y29uZmlnLmVuZHBvaW50IHx8XG4gICAgICAnL3VwbG9hZCd9XCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICA8bGluayBocmVmPVwiaHR0cDovL2hheWFnZWVrLmdpdGh1Yi5pby9qUXVlcnktVXBsb2FkLUZpbGUvNC4wLjEwL3VwbG9hZGZpbGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuOS4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL2hheWFnZWVrLmdpdGh1Yi5pby9qUXVlcnktVXBsb2FkLUZpbGUvNC4wLjEwL2pxdWVyeS51cGxvYWRmaWxlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGRpdiBpZD1cImZpbGV1cGxvYWRlclwiPlVwbG9hZDwvZGl2PlxuICAgICAgPHNjcmlwdD5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHVybDogXCIvZ3JhcGhxbFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBxdWVyeTogXCJxdWVyeSB7IGNsb3VkaW5hcnlSZXF1ZXN0IHsgc2lnbmF0dXJlLCBhcGlLZXksIHRpbWVzdGFtcCB9IH1cIixcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiBcIlwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuU0lHTkFUVVJFID0gZGF0YS5kYXRhLmNsb3VkaW5hcnlSZXF1ZXN0LnNpZ25hdHVyZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuVElNRVNUQU1QID0gZGF0YS5kYXRhLmNsb3VkaW5hcnlSZXF1ZXN0LnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuQVBJS0VZID0gZGF0YS5kYXRhLmNsb3VkaW5hcnlSZXF1ZXN0LmFwaUtleTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKFwiI2ZpbGV1cGxvYWRlclwiKS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2RqeWVuem9yYy9hdXRvL3VwbG9hZFwiLFxuICAgICAgICAgICAgZmlsZU5hbWU6XCJmaWxlXCIsXG4gICAgICAgICAgICBkeW5hbWljRm9ybURhdGE6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgZGF0YS5hcGlfa2V5ID0gZG9jdW1lbnQuQVBJS0VZO1xuICAgICAgICAgICAgICBkYXRhLnRpbWVzdGFtcCA9IGRvY3VtZW50LlRJTUVTVEFNUDtcbiAgICAgICAgICAgICAgZGF0YS5zaWduYXR1cmUgPSBkb2N1bWVudC5TSUdOQVRVUkU7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIDwvc2NyaXB0PlxuICAgICAgRGF0ZWk6XG4gICAgICA8YnI+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIHZhbHVlPVwiXCI+XG4gICAgICA8YnI+XG4gICAgICA8YnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWJzZW5kZW5cIj5cbiAgICA8L2Zvcm0+XG4gIGApO1xufTtcbiJdfQ==
