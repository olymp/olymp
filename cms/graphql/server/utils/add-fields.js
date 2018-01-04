'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _language = require('graphql/language');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ast, node, fieldsToAdd) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace;

  var fields = node.fields || node;
  var type = (0, _language.parse)('\n    type ___Model {\n      ' + fieldsToAdd + '\n    }\n  ').definitions[0];
  type.fields.forEach(function (field) {
    var has = fields.findIndex(function (x) {
      return (0, _get3.default)(x, 'name.value') === (0, _get3.default)(field, 'name.value');
    });
    console.log(has, (0, _get3.default)(field, 'name.value'));
    if (has >= 0) {
      fields[has] = field;
    } else {
      fields.push(field);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtZmllbGRzLmVzNiJdLCJuYW1lcyI6WyJhc3QiLCJub2RlIiwiZmllbGRzVG9BZGQiLCJyZXBsYWNlIiwiZmllbGRzIiwidHlwZSIsImRlZmluaXRpb25zIiwiZm9yRWFjaCIsImZpZWxkIiwiaGFzIiwiZmluZEluZGV4IiwieCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7a0JBR2UsVUFBQ0EsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLFdBQVosRUFBc0Q7QUFBQSxpRkFBUCxFQUFPO0FBQUEsMEJBQTNCQyxPQUEyQjtBQUFBLE1BQTNCQSxPQUEyQixnQ0FBakIsS0FBaUI7O0FBQ25FLE1BQU1DLFNBQVNILEtBQUtHLE1BQUwsSUFBZUgsSUFBOUI7QUFDQSxNQUFNSSxPQUFPLHVEQUVQSCxXQUZPLGtCQUlWSSxXQUpVLENBSUUsQ0FKRixDQUFiO0FBS0FELE9BQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFvQixVQUFDQyxLQUFELEVBQVc7QUFDN0IsUUFBTUMsTUFBTUwsT0FBT00sU0FBUCxDQUFpQjtBQUFBLGFBQUssbUJBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLG1CQUFJSCxLQUFKLEVBQVcsWUFBWCxDQUE5QjtBQUFBLEtBQWpCLENBQVo7QUFDQUksWUFBUUMsR0FBUixDQUFZSixHQUFaLEVBQWlCLG1CQUFJRCxLQUFKLEVBQVcsWUFBWCxDQUFqQjtBQUNBLFFBQ0VDLE9BQU8sQ0FEVCxFQUVFO0FBQ0FMLGFBQU9LLEdBQVAsSUFBY0QsS0FBZDtBQUNELEtBSkQsTUFJTztBQUNMSixhQUFPVSxJQUFQLENBQVlOLEtBQVo7QUFDRDtBQUNGLEdBVkQ7QUFXRCxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtZmllbGRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhc3QsIG5vZGUsIGZpZWxkc1RvQWRkLCB7IHJlcGxhY2UgPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgY29uc3QgZmllbGRzID0gbm9kZS5maWVsZHMgfHwgbm9kZTtcbiAgY29uc3QgdHlwZSA9IHBhcnNlKGBcbiAgICB0eXBlIF9fX01vZGVsIHtcbiAgICAgICR7ZmllbGRzVG9BZGR9XG4gICAgfVxuICBgKS5kZWZpbml0aW9uc1swXTtcbiAgdHlwZS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBoYXMgPSBmaWVsZHMuZmluZEluZGV4KHggPT4gZ2V0KHgsICduYW1lLnZhbHVlJykgPT09IGdldChmaWVsZCwgJ25hbWUudmFsdWUnKSk7XG4gICAgY29uc29sZS5sb2coaGFzLCBnZXQoZmllbGQsICduYW1lLnZhbHVlJykgKTtcbiAgICBpZiAoXG4gICAgICBoYXMgPj0gMFxuICAgICkge1xuICAgICAgZmllbGRzW2hhc10gPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4iXX0=
