'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _recompose = require('recompose');

var _gql = require('../gql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)(_gql.mutateFile, _form2.default.create(), (0, _recompose.withHandlers)({
  save: function save(_ref) {
    var form = _ref.form,
        items = _ref.items,
        _save = _ref.save,
        onChange = _ref.onChange;
    return function () {
      form.validateFields(function (err, values) {
        if (err) {
          return console.error(err);
        }
        if (onChange) {
          return onChange(items.map(function (item) {
            return values[item.id];
          }));
        }
        Promise.all(items.map(function (item) {
          return _save(values[item.id], !item.removed && values[item.id].removed);
        })).then(function (x) {
          return form.resetFields();
        });
      });
    };
  }
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC93aXRoLWZpbGUtZm9ybS5lczYiXSwibmFtZXMiOlsiY3JlYXRlIiwic2F2ZSIsImZvcm0iLCJpdGVtcyIsIm9uQ2hhbmdlIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJtYXAiLCJpdGVtIiwiaWQiLCJQcm9taXNlIiwiYWxsIiwicmVtb3ZlZCIsInRoZW4iLCJyZXNldEZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7a0JBRWUseUNBRWIsZUFBS0EsTUFBTCxFQUZhLEVBR2IsNkJBQWE7QUFDWEMsUUFBTTtBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFFBQWdCRixLQUFoQixRQUFnQkEsSUFBaEI7QUFBQSxRQUFzQkcsUUFBdEIsUUFBc0JBLFFBQXRCO0FBQUEsV0FBcUMsWUFBTTtBQUMvQ0YsV0FBS0csY0FBTCxDQUFvQixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbkMsWUFBSUQsR0FBSixFQUFTO0FBQ1AsaUJBQU9FLFFBQVFDLEtBQVIsQ0FBY0gsR0FBZCxDQUFQO0FBQ0Q7QUFDRCxZQUFJRixRQUFKLEVBQWM7QUFDWixpQkFBT0EsU0FBU0QsTUFBTU8sR0FBTixDQUFVO0FBQUEsbUJBQVFILE9BQU9JLEtBQUtDLEVBQVosQ0FBUjtBQUFBLFdBQVYsQ0FBVCxDQUFQO0FBQ0Q7QUFDREMsZ0JBQVFDLEdBQVIsQ0FDRVgsTUFBTU8sR0FBTixDQUFVO0FBQUEsaUJBQ1JULE1BQUtNLE9BQU9JLEtBQUtDLEVBQVosQ0FBTCxFQUFzQixDQUFDRCxLQUFLSSxPQUFOLElBQWlCUixPQUFPSSxLQUFLQyxFQUFaLEVBQWdCRyxPQUF2RCxDQURRO0FBQUEsU0FBVixDQURGLEVBSUVDLElBSkYsQ0FJTztBQUFBLGlCQUFLZCxLQUFLZSxXQUFMLEVBQUw7QUFBQSxTQUpQO0FBS0QsT0FaRDtBQWFELEtBZEs7QUFBQTtBQURLLENBQWIsQ0FIYSxDIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L2RldGFpbC93aXRoLWZpbGUtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBtdXRhdGVGaWxlIH0gZnJvbSAnLi4vZ3FsJztcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgbXV0YXRlRmlsZSxcbiAgRm9ybS5jcmVhdGUoKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBzYXZlOiAoeyBmb3JtLCBpdGVtcywgc2F2ZSwgb25DaGFuZ2UgfSkgPT4gKCkgPT4ge1xuICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKGl0ZW1zLm1hcChpdGVtID0+IHZhbHVlc1tpdGVtLmlkXSkpO1xuICAgICAgICB9XG4gICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+XG4gICAgICAgICAgICBzYXZlKHZhbHVlc1tpdGVtLmlkXSwgIWl0ZW0ucmVtb3ZlZCAmJiB2YWx1ZXNbaXRlbS5pZF0ucmVtb3ZlZCksXG4gICAgICAgICAgKSxcbiAgICAgICAgKS50aGVuKHggPT4gZm9ybS5yZXNldEZpZWxkcygpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pLFxuKTtcbiJdfQ==
