'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref, field) {
  var _ref$item = _ref.item,
      item = _ref$item === undefined ? {} : _ref$item,
      form = _ref.form,
      auth = _ref.auth;
  var name = field.name;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (field.specialFields.default) {
    // Wenn ein default-Wert existiert
    return field.specialFields.default;
  } else if (name === 'state') {
    // Bei State
    // return 'DRAFT';
    return '';
  } else if (name === 'orgId') {
    return (0, _get3.default)(auth, 'user.orgId');
  } else if (name === 'slug' && form && form.getFieldValue('name')) {
    // Bei Slug
    return '/' + (0, _slugify2.default)(form.getFieldValue('name'), form.getFieldValue('date'));
  }

  return undefined;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1pbml0aWFsLXZhbHVlLmVzNiJdLCJuYW1lcyI6WyJmaWVsZCIsIml0ZW0iLCJmb3JtIiwiYXV0aCIsIm5hbWUiLCJzcGVjaWFsRmllbGRzIiwiZGVmYXVsdCIsImdldEZpZWxkVmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUdlLGdCQUE0QkEsS0FBNUIsRUFBc0M7QUFBQSx1QkFBbkNDLElBQW1DO0FBQUEsTUFBbkNBLElBQW1DLDZCQUE1QixFQUE0QjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFDM0NDLElBRDJDLEdBQ2xDSixLQURrQyxDQUMzQ0ksSUFEMkM7O0FBRW5ELE1BQUlILEtBQUtHLElBQUwsQ0FBSixFQUFnQjtBQUNkO0FBQ0EsV0FBT0gsS0FBS0csSUFBTCxDQUFQO0FBQ0QsR0FIRCxNQUdPLElBQUlKLE1BQU1LLGFBQU4sQ0FBb0JDLE9BQXhCLEVBQWlDO0FBQ3RDO0FBQ0EsV0FBT04sTUFBTUssYUFBTixDQUFvQkMsT0FBM0I7QUFDRCxHQUhNLE1BR0EsSUFBSUYsU0FBUyxPQUFiLEVBQXNCO0FBQzNCO0FBQ0E7QUFDQSxXQUFPLEVBQVA7QUFDRCxHQUpNLE1BSUEsSUFBSUEsU0FBUyxPQUFiLEVBQXNCO0FBQzNCLFdBQU8sbUJBQUlELElBQUosRUFBVSxZQUFWLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUMsU0FBUyxNQUFULElBQW1CRixJQUFuQixJQUEyQkEsS0FBS0ssYUFBTCxDQUFtQixNQUFuQixDQUEvQixFQUEyRDtBQUNoRTtBQUNBLGlCQUFXLHVCQUNUTCxLQUFLSyxhQUFMLENBQW1CLE1BQW5CLENBRFMsRUFFVEwsS0FBS0ssYUFBTCxDQUFtQixNQUFuQixDQUZTLENBQVg7QUFJRDs7QUFFRCxTQUFPQyxTQUFQO0FBQ0QsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi91dGlscy9nZXQtaW5pdGlhbC12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaXRlbSA9IHt9LCBmb3JtLCBhdXRoIH0sIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gZmllbGQ7XG4gIGlmIChpdGVtW25hbWVdKSB7XG4gICAgLy8gV2VubiBJdGVtIHNjaG9uIGV4aXN0aWVydCwgZGVuIHZvcmhhbmRlbmVuIFdlcnQgbmVobWVuXG4gICAgcmV0dXJuIGl0ZW1bbmFtZV07XG4gIH0gZWxzZSBpZiAoZmllbGQuc3BlY2lhbEZpZWxkcy5kZWZhdWx0KSB7XG4gICAgLy8gV2VubiBlaW4gZGVmYXVsdC1XZXJ0IGV4aXN0aWVydFxuICAgIHJldHVybiBmaWVsZC5zcGVjaWFsRmllbGRzLmRlZmF1bHQ7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0YXRlJykge1xuICAgIC8vIEJlaSBTdGF0ZVxuICAgIC8vIHJldHVybiAnRFJBRlQnO1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnb3JnSWQnKSB7XG4gICAgcmV0dXJuIGdldChhdXRoLCAndXNlci5vcmdJZCcpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzbHVnJyAmJiBmb3JtICYmIGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmFtZScpKSB7XG4gICAgLy8gQmVpIFNsdWdcbiAgICByZXR1cm4gYC8ke3NsdWdpZnkoXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoJ25hbWUnKSxcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZSgnZGF0ZScpLFxuICAgICl9YDtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIl19
