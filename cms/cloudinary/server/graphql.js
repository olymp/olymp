import _sortBy from 'lodash/sortBy';
import _uniq from 'lodash/uniq';
import _flatMap from 'lodash/flatMap';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { adaptQuery } from 'olymp-collection/server';
import ShortId from 'shortid';

import { parseURI, getImageById, getSignedRequest } from './cloudinary';

export default (function (uri) {
  var config = parseURI(uri);

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

          var mongoQuery = adaptQuery(query);
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
            return _sortBy(_uniq(_flatMap(items, function (item) {
              return item.tags;
            })), function (x) {
              return x;
            }).filter(function (x) {
              return x;
            });
          });
        },
        cloudinaryRequest: function cloudinaryRequest() {
          var signed = getSignedRequest(config);
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
            return getImageById(config, id).then(function (image) {
              return db.collection('item').update({ publicId: id }, _extends({}, image, {
                id: ShortId.generate(),
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
});

export var uploadTest = function uploadTest() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (req, res) {
    res.send('\n    <form action="' + (config.endpoint || '/upload') + '" method="post" enctype="multipart/form-data">\n      <link href="http://hayageek.github.io/jQuery-Upload-File/4.0.10/uploadfile.css" rel="stylesheet">\n      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>\n      <script src="http://hayageek.github.io/jQuery-Upload-File/4.0.10/jquery.uploadfile.min.js"></script>\n      <div id="fileuploader">Upload</div>\n      <script>\n        $(document).ready(function()\n        {\n          $.ajax({\n            type: "POST",\n            dataType: \'json\',\n            url: "/graphql",\n            data: JSON.stringify({\n              query: "query { cloudinaryRequest { signature, apiKey, timestamp } }",\n              variables: ""\n            }),\n            success: function(data) {\n              document.SIGNATURE = data.data.cloudinaryRequest.signature;\n              document.TIMESTAMP = data.data.cloudinaryRequest.timestamp;\n              document.APIKEY = data.data.cloudinaryRequest.apiKey;\n            },\n            contentType: "application/json"\n          });\n          $("#fileuploader").uploadFile({\n            url: "https://api.cloudinary.com/v1_1/djyenzorc/auto/upload",\n            fileName:"file",\n            dynamicFormData: function(x, y) {\n              var data = {};\n              data.api_key = document.APIKEY;\n              data.timestamp = document.TIMESTAMP;\n              data.signature = document.SIGNATURE;\n              return data;\n            }\n          });\n        });\n      </script>\n      Datei:\n      <br>\n      <input type="file" name="file" value="">\n      <br>\n      <br>\n      <input type="submit" value="Absenden">\n    </form>\n  ');
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvc2VydmVyL2dyYXBocWwuZXM2Il0sIm5hbWVzIjpbImFkYXB0UXVlcnkiLCJTaG9ydElkIiwicGFyc2VVUkkiLCJnZXRJbWFnZUJ5SWQiLCJnZXRTaWduZWRSZXF1ZXN0IiwiY29uZmlnIiwidXJpIiwiaW52YWxpZGF0aW9uVG9rZW5zIiwibmFtZSIsInF1ZXJpZXMiLCJtdXRhdGlvbnMiLCJyZXNvbHZlcnMiLCJmaWxlIiwic291cmNlIiwiYXJncyIsImRiIiwiYXBwIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJpZCIsImZpbGVMaXN0IiwicXVlcnkiLCJ1c2VyIiwibW9uZ29RdWVyeSIsIl90eXBlIiwic3RhdGUiLCIkbmUiLCJmaW5kIiwidG9BcnJheSIsImZpbGVUYWdzIiwiZm9sZGVyIiwidGhlbiIsIml0ZW1zIiwiaXRlbSIsInRhZ3MiLCJ4IiwiZmlsdGVyIiwiY2xvdWRpbmFyeVJlcXVlc3QiLCJzaWduZWQiLCJwdXNoIiwic2lnbmF0dXJlIiwib3BlcmF0aW9uVHlwZSIsImlucHV0IiwidXBkYXRlT25lIiwiJHNldCIsInVwc2VydCIsImNsb3VkaW5hcnlSZXF1ZXN0RG9uZSIsInRva2VuIiwiaW5kZXhPZiIsInNwbGljZSIsInVwZGF0ZSIsInB1YmxpY0lkIiwiaW1hZ2UiLCJnZW5lcmF0ZSIsIl9hcHBJZCIsIkVycm9yIiwic2NoZW1hIiwidXBsb2FkVGVzdCIsInJlcSIsInJlcyIsInNlbmQiLCJlbmRwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxRQUEyQix5QkFBM0I7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFNBQXBCOztBQUVBLFNBQVNDLFFBQVQsRUFBbUJDLFlBQW5CLEVBQWlDQyxnQkFBakMsUUFBeUQsY0FBekQ7O0FBRUEsZ0JBQWUsZUFBTztBQUNwQixNQUFNQyxTQUFTSCxTQUFTSSxHQUFULENBQWY7O0FBRUEsTUFBTUMscUJBQXFCLEVBQTNCO0FBQ0EsU0FBTztB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RDtBQUNELGdCQUFNLElBQUlvQyxLQUFKLENBQVUsU0FBVixDQUFOO0FBQ0Q7QUFsRVE7QUE3Q0YsS0FUTjtBQTJITEM7QUEzSEssR0FBUDtBQXNLRCxDQTFLRDs7QUE0S0EsT0FBTyxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFDcEQsTUFBRCx1RUFBVSxFQUFWO0FBQUEsU0FBaUIsVUFBQ3FELEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZEQSxRQUFJQyxJQUFKLDJCQUNrQnZELE9BQU93RCxRQUFQLElBQ2QsU0FGSjtBQThDRCxHQS9DeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L3NlcnZlci9ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRhcHRRdWVyeSB9IGZyb20gJ29seW1wLWNvbGxlY3Rpb24vc2VydmVyJztcbmltcG9ydCBTaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IHsgZmxhdE1hcCwgdW5pcSwgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHBhcnNlVVJJLCBnZXRJbWFnZUJ5SWQsIGdldFNpZ25lZFJlcXVlc3QgfSBmcm9tICcuL2Nsb3VkaW5hcnknO1xuXG5leHBvcnQgZGVmYXVsdCB1cmkgPT4ge1xuICBjb25zdCBjb25maWcgPSBwYXJzZVVSSSh1cmkpO1xuXG4gIGNvbnN0IGludmFsaWRhdGlvblRva2VucyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdmaWxlJyxcbiAgICBxdWVyaWVzOiBgXG4gICAgICBjbG91ZGluYXJ5UmVxdWVzdDogQ2xvdWRpbmFyeVJlcXVlc3RcbiAgICAgIGZpbGVUYWdzKGZvbGRlcjogU3RyaW5nKTogW1N0cmluZ11cbiAgICBgLFxuICAgIG11dGF0aW9uczogYFxuICAgICAgY2xvdWRpbmFyeVJlcXVlc3REb25lKGlkOiBTdHJpbmcsIHRva2VuOiBTdHJpbmcsIGZvbGRlcjogU3RyaW5nLCB0YWdzOiBbU3RyaW5nXSk6IEZpbGVcbiAgICBgLFxuICAgIHJlc29sdmVyczoge1xuICAgICAgcXVlcmllczoge1xuICAgICAgICBmaWxlOiAoc291cmNlLCBhcmdzLCB7IGRiLCBhcHAgfSkgPT5cbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdpdGVtJykuZmluZE9uZSh7IGlkOiBhcmdzLmlkIH0pLFxuXG4gICAgICAgIGZpbGVMaXN0OiAoc291cmNlLCB7IHF1ZXJ5IH0sIHsgZGIsIGFwcCwgdXNlciB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbW9uZ29RdWVyeSA9IGFkYXB0UXVlcnkocXVlcnkpO1xuICAgICAgICAgIC8qIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0gKi9cbiAgICAgICAgICAvLyBtb25nb1F1ZXJ5Ll9hcHBJZCA9IHsgJGluOiB1c2VyLl9hcHBJZHMgfTtcbiAgICAgICAgICBtb25nb1F1ZXJ5Ll90eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgIG1vbmdvUXVlcnkuc3RhdGUgPSB7ICRuZTogJ1JFTU9WRUQnIH07XG4gICAgICAgICAgcmV0dXJuIGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbignaXRlbScpXG4gICAgICAgICAgICAuZmluZChtb25nb1F1ZXJ5KVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZVRhZ3M6IChzb3VyY2UsIHsgZm9sZGVyIH0sIHsgZGIsIHVzZXIgfSkgPT4ge1xuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtb25nb1F1ZXJ5ID0ge1xuICAgICAgICAgICAgLy8gX2FwcElkOiB7ICRpbjogdXNlci5fYXBwSWRzIH0sXG4gICAgICAgICAgICBfdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGZvbGRlcikge1xuICAgICAgICAgICAgbW9uZ29RdWVyeS5mb2xkZXIgPSBmb2xkZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgLmZpbmQobW9uZ29RdWVyeSlcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+XG4gICAgICAgICAgICAgIHNvcnRCeSh1bmlxKGZsYXRNYXAoaXRlbXMsIGl0ZW0gPT4gaXRlbS50YWdzKSksIHggPT4geCkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHggPT4geCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3VkaW5hcnlSZXF1ZXN0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2lnbmVkID0gZ2V0U2lnbmVkUmVxdWVzdChjb25maWcpO1xuICAgICAgICAgIGludmFsaWRhdGlvblRva2Vucy5wdXNoKHNpZ25lZC5zaWduYXR1cmUpO1xuICAgICAgICAgIHJldHVybiBzaWduZWQ7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbXV0YXRpb25zOiB7XG4gICAgICAgIGZpbGU6IChzb3VyY2UsIGFyZ3MsIHsgZGIsIGFwcCB9KSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mub3BlcmF0aW9uVHlwZSA9PT0gJ1JFTU9WRScpIHtcbiAgICAgICAgICAgIGFyZ3MuaW5wdXQuc3RhdGUgPSAnUkVNT1ZFRCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgLmZpbmRPbmUoeyBpZDogYXJncy5pbnB1dC5pZCB9KVxuICAgICAgICAgICAgLnRoZW4oaXRlbSA9PlxuICAgICAgICAgICAgICAvKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5vcGVyYXRpb25UeXBlICYmIGFyZ3Mub3BlcmF0aW9uVHlwZSA9PT0gJ1JFTU9WRScpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wdWJsaWNJZCxcbiAgICAgICAgICAgICAgICAgICAgYXJncy5pbnB1dC50YWdzLFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmlucHV0LnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgYXJncy5pbnB1dC5jYXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVJbWFnZShcbiAgICAgICAgICAgICAgICAgIGl0ZW0ucHVibGljSWQsXG4gICAgICAgICAgICAgICAgICBhcmdzLmlucHV0LnRhZ3MsXG4gICAgICAgICAgICAgICAgICBhcmdzLmlucHV0LnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGFyZ3MuaW5wdXQuY2FwdGlvbixcbiAgICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LCAxMCk7ICovXG4gICAgICAgICAgICAgIGRiXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgICAgIC51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgICB7IGlkOiBhcmdzLmlucHV0LmlkIH0sXG4gICAgICAgICAgICAgICAgICB7ICRzZXQ6IGFyZ3MuaW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgIHsgdXBzZXJ0OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdpdGVtJykuZmluZE9uZSh7IGlkOiBhcmdzLmlucHV0LmlkIH0pLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBjbG91ZGluYXJ5UmVxdWVzdERvbmU6IChcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgeyB0b2tlbiwgaWQsIGZvbGRlciwgdGFncyB9LFxuICAgICAgICAgIHsgZGIsIGFwcCB9LFxuICAgICAgICApID0+IHtcbiAgICAgICAgICBpZiAodG9rZW4gJiYgaW52YWxpZGF0aW9uVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMSkge1xuICAgICAgICAgICAgaW52YWxpZGF0aW9uVG9rZW5zLnNwbGljZShpbnZhbGlkYXRpb25Ub2tlbnMuaW5kZXhPZih0b2tlbiksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQnlJZChjb25maWcsIGlkKVxuICAgICAgICAgICAgICAudGhlbihpbWFnZSA9PlxuICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ2l0ZW0nKS51cGRhdGUoXG4gICAgICAgICAgICAgICAgICB7IHB1YmxpY0lkOiBpZCB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgX3R5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgX2FwcElkOiBhcHAuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MsXG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcjogZm9sZGVyIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50aGVuKHggPT4gZGIuY29sbGVjdGlvbignaXRlbScpLmZpbmRPbmUoeyBwdWJsaWNJZDogaWQgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQnKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzY2hlbWE6IGBcbiAgICAgIHR5cGUgSW1hZ2Uge1xuICAgICAgICBpZDogU3RyaW5nXG4gICAgICAgIG1pbWU6IFN0cmluZ1xuICAgICAgICBoYW5kbGU6IFN0cmluZ1xuICAgICAgICBvcmlnaW5hbEhhbmRsZTogU3RyaW5nXG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgICAgIGNyb3A6IFtJbnRdXG4gICAgICAgIHdpZHRoOiBJbnRcbiAgICAgICAgaGVpZ2h0OiBJbnRcbiAgICAgICAgY2FwdGlvbjogU3RyaW5nXG4gICAgICAgIHNvdXJjZTogU3RyaW5nXG4gICAgICAgIHRhZ3M6IFtTdHJpbmddXG4gICAgICB9XG4gICAgICB0eXBlIEZpbGUgQGNvbGxlY3Rpb24ge1xuICAgICAgICBpZDogU3RyaW5nXG4gICAgICAgIHB1YmxpY0lkOiBTdHJpbmdcbiAgICAgICAgZm9ybWF0OiBTdHJpbmdcbiAgICAgICAgdmVyc2lvbjogSW50XG4gICAgICAgIHJlc291cmNlVHlwZTogU3RyaW5nXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICBjcmVhdGVkQXQ6IFN0cmluZ1xuICAgICAgICBoZWlnaHQ6IEludFxuICAgICAgICB3aWR0aDogSW50XG4gICAgICAgIGJ5dGVzOiBJbnRcbiAgICAgICAgdXJsOiBTdHJpbmdcbiAgICAgICAgY2FwdGlvbjogU3RyaW5nXG4gICAgICAgIHNvdXJjZTogU3RyaW5nXG4gICAgICAgIHJlbW92ZWQ6IEJvb2xlYW5cbiAgICAgICAgcGFnZXM6IEludFxuICAgICAgICBjb2xvcnM6IFtTdHJpbmddXG4gICAgICAgIHRhZ3M6IFtTdHJpbmddXG4gICAgICAgIGZvbGRlcjogU3RyaW5nXG4gICAgICB9XG4gICAgICB0eXBlIENsb3VkaW5hcnlSZXF1ZXN0IHtcbiAgICAgICAgdXJsOiBTdHJpbmdcbiAgICAgICAgc2lnbmF0dXJlOiBTdHJpbmdcbiAgICAgICAgZm9sZGVyOiBTdHJpbmdcbiAgICAgICAgdGltZXN0YW1wOiBTdHJpbmdcbiAgICAgICAgYXBpS2V5OiBTdHJpbmdcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVwbG9hZFRlc3QgPSAoY29uZmlnID0ge30pID0+IChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZChgXG4gICAgPGZvcm0gYWN0aW9uPVwiJHtjb25maWcuZW5kcG9pbnQgfHxcbiAgICAgICcvdXBsb2FkJ31cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwOi8vaGF5YWdlZWsuZ2l0aHViLmlvL2pRdWVyeS1VcGxvYWQtRmlsZS80LjAuMTAvdXBsb2FkZmlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS45LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwOi8vaGF5YWdlZWsuZ2l0aHViLmlvL2pRdWVyeS1VcGxvYWQtRmlsZS80LjAuMTAvanF1ZXJ5LnVwbG9hZGZpbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8ZGl2IGlkPVwiZmlsZXVwbG9hZGVyXCI+VXBsb2FkPC9kaXY+XG4gICAgICA8c2NyaXB0PlxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgdXJsOiBcIi9ncmFwaHFsXCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBcInF1ZXJ5IHsgY2xvdWRpbmFyeVJlcXVlc3QgeyBzaWduYXR1cmUsIGFwaUtleSwgdGltZXN0YW1wIH0gfVwiLFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IFwiXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5TSUdOQVRVUkUgPSBkYXRhLmRhdGEuY2xvdWRpbmFyeVJlcXVlc3Quc2lnbmF0dXJlO1xuICAgICAgICAgICAgICBkb2N1bWVudC5USU1FU1RBTVAgPSBkYXRhLmRhdGEuY2xvdWRpbmFyeVJlcXVlc3QudGltZXN0YW1wO1xuICAgICAgICAgICAgICBkb2N1bWVudC5BUElLRVkgPSBkYXRhLmRhdGEuY2xvdWRpbmFyeVJlcXVlc3QuYXBpS2V5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIjZmlsZXVwbG9hZGVyXCIpLnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZGp5ZW56b3JjL2F1dG8vdXBsb2FkXCIsXG4gICAgICAgICAgICBmaWxlTmFtZTpcImZpbGVcIixcbiAgICAgICAgICAgIGR5bmFtaWNGb3JtRGF0YTogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICBkYXRhLmFwaV9rZXkgPSBkb2N1bWVudC5BUElLRVk7XG4gICAgICAgICAgICAgIGRhdGEudGltZXN0YW1wID0gZG9jdW1lbnQuVElNRVNUQU1QO1xuICAgICAgICAgICAgICBkYXRhLnNpZ25hdHVyZSA9IGRvY3VtZW50LlNJR05BVFVSRTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgPC9zY3JpcHQ+XG4gICAgICBEYXRlaTpcbiAgICAgIDxicj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgdmFsdWU9XCJcIj5cbiAgICAgIDxicj5cbiAgICAgIDxicj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBYnNlbmRlblwiPlxuICAgIDwvZm9ybT5cbiAgYCk7XG59O1xuIl19
