'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }'], ['query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }']);

var _antd = require('antd');

var _whatwgFetch = require('whatwg-fetch');

var _whatwgFetch2 = _interopRequireDefault(_whatwgFetch);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var files = _ref.files,
      onImageChange = _ref.onImageChange,
      client = _ref.client,
      refetch = _ref.refetch;

  var key = { key: true };
  var cloudinary = void 0;
  _antd.notification.info({ message: 'Upload', description: 'Datei(en) werden hochgeladen ...', key: key, duration: 0 });
  return client.query({
    query: (0, _graphqlTag2.default)(_templateObject),
    forceFetch: true
  }).then(function (_ref2) {
    var data = _ref2.data;

    cloudinary = data.cloudinaryRequest;
    var body = new FormData();
    body.append('api_key', cloudinary.apiKey);
    body.append('signature', cloudinary.signature);
    body.append('timestamp', cloudinary.timestamp);
    [].slice.call(files).forEach(function (file) {
      return body.attach('file', file);
    });
    return (0, _whatwgFetch2.default)(cloudinary.url, {
      method: 'POST',
      body: body
    });
  }).then(function (_ref3) {
    var body = _ref3.body;

    body.id = body.public_id;
    _antd.notification.close(key);
    if (refetch) refetch({ token: cloudinary.signature });
    if (onImageChange) onImageChange(body);
  }).catch(function (err) {
    _antd.notification.close(key);
    console.error(err);
  });
};