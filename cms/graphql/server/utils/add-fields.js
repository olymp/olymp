import _get from 'lodash/get';
import { parse } from 'graphql/language';


export default (function (ast, node, fieldsToAdd) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace;

  var fields = node.fields || node;
  var type = parse('\n    type ___Model {\n      ' + fieldsToAdd + '\n    }\n  ').definitions[0];
  type.fields.forEach(function (field) {
    var has = fields.findIndex(function (x) {
      return _get(x, 'name.value') === _get(field, 'name.value');
    });
    console.log(has, _get(field, 'name.value'));
    if (has >= 0) {
      fields[has] = field;
    } else {
      fields.push(field);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3V0aWxzL2FkZC1maWVsZHMuZXM2Il0sIm5hbWVzIjpbInBhcnNlIiwiYXN0Iiwibm9kZSIsImZpZWxkc1RvQWRkIiwicmVwbGFjZSIsImZpZWxkcyIsInR5cGUiLCJkZWZpbml0aW9ucyIsImZvckVhY2giLCJmaWVsZCIsImhhcyIsImZpbmRJbmRleCIsIngiLCJjb25zb2xlIiwibG9nIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLEtBQVQsUUFBc0Isa0JBQXRCOzs7QUFHQSxnQkFBZSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWUMsV0FBWixFQUFzRDtBQUFBLGlGQUFQLEVBQU87QUFBQSwwQkFBM0JDLE9BQTJCO0FBQUEsTUFBM0JBLE9BQTJCLGdDQUFqQixLQUFpQjs7QUFDbkUsTUFBTUMsU0FBU0gsS0FBS0csTUFBTCxJQUFlSCxJQUE5QjtBQUNBLE1BQU1JLE9BQU9OLHdDQUVQRyxXQUZPLGtCQUlWSSxXQUpVLENBSUUsQ0FKRixDQUFiO0FBS0FELE9BQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFvQixVQUFDQyxLQUFELEVBQVc7QUFDN0IsUUFBTUMsTUFBTUwsT0FBT00sU0FBUCxDQUFpQjtBQUFBLGFBQUssS0FBSUMsQ0FBSixFQUFPLFlBQVAsTUFBeUIsS0FBSUgsS0FBSixFQUFXLFlBQVgsQ0FBOUI7QUFBQSxLQUFqQixDQUFaO0FBQ0FJLFlBQVFDLEdBQVIsQ0FBWUosR0FBWixFQUFpQixLQUFJRCxLQUFKLEVBQVcsWUFBWCxDQUFqQjtBQUNBLFFBQ0VDLE9BQU8sQ0FEVCxFQUVFO0FBQ0FMLGFBQU9LLEdBQVAsSUFBY0QsS0FBZDtBQUNELEtBSkQsTUFJTztBQUNMSixhQUFPVSxJQUFQLENBQVlOLEtBQVo7QUFDRDtBQUNGLEdBVkQ7QUFXRCxDQWxCRCIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtZmllbGRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhc3QsIG5vZGUsIGZpZWxkc1RvQWRkLCB7IHJlcGxhY2UgPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgY29uc3QgZmllbGRzID0gbm9kZS5maWVsZHMgfHwgbm9kZTtcbiAgY29uc3QgdHlwZSA9IHBhcnNlKGBcbiAgICB0eXBlIF9fX01vZGVsIHtcbiAgICAgICR7ZmllbGRzVG9BZGR9XG4gICAgfVxuICBgKS5kZWZpbml0aW9uc1swXTtcbiAgdHlwZS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBoYXMgPSBmaWVsZHMuZmluZEluZGV4KHggPT4gZ2V0KHgsICduYW1lLnZhbHVlJykgPT09IGdldChmaWVsZCwgJ25hbWUudmFsdWUnKSk7XG4gICAgY29uc29sZS5sb2coaGFzLCBnZXQoZmllbGQsICduYW1lLnZhbHVlJykgKTtcbiAgICBpZiAoXG4gICAgICBoYXMgPj0gMFxuICAgICkge1xuICAgICAgZmllbGRzW2hhc10gPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4iXX0=
