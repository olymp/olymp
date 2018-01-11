'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  isDefault: true,
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return ['Slug', 'Email', 'PhoneNumber', 'Website'].indexOf(innerType.name) !== -1;
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        p = _objectWithoutProperties(_ref2, ['value', 'onChange', 'data-__field', 'data-__meta']);

    return _react2.default.createElement(
      _formItem2.default,
      p,
      _react2.default.createElement(_input2.default, {
        value: value,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtaW5wdXQuZXM2Il0sIm5hbWVzIjpbImlzRGVmYXVsdCIsInJ1bGUiLCJpbm5lclR5cGUiLCJpbmRleE9mIiwibmFtZSIsImZvcm0iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7OztrQkFFZTtBQUNiQSxhQUFXLElBREU7QUFFYkMsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQ0osQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixhQUFsQixFQUFpQyxTQUFqQyxFQUE0Q0MsT0FBNUMsQ0FBb0RELFVBQVVFLElBQTlELE1BQXdFLENBQUMsQ0FEckU7QUFBQSxHQUZPO0FBSWJDLFFBQU0sd0JBQ0o7QUFBQSxRQUNFQyxLQURGLFNBQ0VBLEtBREY7QUFBQSxRQUVFQyxRQUZGLFNBRUVBLFFBRkY7QUFBQSxRQUdrQkMsU0FIbEIsU0FHRSxjQUhGO0FBQUEsUUFJaUJDLFFBSmpCLFNBSUUsYUFKRjtBQUFBLFFBS0tDLENBTEwseURBR0UsY0FIRixFQUlFLGFBSkY7O0FBQUEsV0FPRTtBQUFBO0FBQWNBLE9BQWQ7QUFDRTtBQUNFLGVBQU9KLEtBRFQ7QUFFRSxrQkFBVUMsUUFGWjtBQUdFLGNBQUssTUFIUDtBQUlFLHdCQUFjQyxTQUpoQjtBQUtFLHVCQUFhQztBQUxmO0FBREYsS0FQRjtBQUFBLEdBREk7QUFKTyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0RlZmF1bHQ6IHRydWUsXG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PlxuICAgIFsnU2x1ZycsICdFbWFpbCcsICdQaG9uZU51bWJlcicsICdXZWJzaXRlJ10uaW5kZXhPZihpbm5lclR5cGUubmFtZSkgIT09IC0xLFxuICBmb3JtOiB0b0NsYXNzKFxuICAgICh7XG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgLi4ucFxuICAgIH0pID0+IChcbiAgICAgIDxGb3JtSXRlbSB7Li4ucH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKSxcbiAgKSxcbn07XG4iXX0=
