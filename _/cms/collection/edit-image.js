'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympCloudinary = require('olymp-cloudinary');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Image';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var value = _ref2.value,
        multi = _ref2.multi,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        rest = _objectWithoutProperties(_ref2, ['value', 'multi', 'onChange', 'data-__field', 'data-__meta']);

    return _react2.default.createElement(
      _formItem2.default,
      rest,
      _react2.default.createElement(_olympCloudinary.EditImage, {
        value: value,
        multi: multi,
        onChange: onChange,
        maxHeight: 100,
        maxWidth: 250,
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtaW1hZ2UuZXM2Il0sIm5hbWVzIjpbInJ1bGUiLCJpbm5lclR5cGUiLCJuYW1lIiwiZm9ybSIsInZhbHVlIiwibXVsdGkiLCJvbkNoYW5nZSIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE9BQXRDO0FBQUEsR0FETztBQUViQyxRQUFNLHdCQUNKO0FBQUEsUUFDRUMsS0FERixTQUNFQSxLQURGO0FBQUEsUUFFRUMsS0FGRixTQUVFQSxLQUZGO0FBQUEsUUFHRUMsUUFIRixTQUdFQSxRQUhGO0FBQUEsUUFJa0JDLFNBSmxCLFNBSUUsY0FKRjtBQUFBLFFBS2lCQyxRQUxqQixTQUtFLGFBTEY7QUFBQSxRQU1LQyxJQU5MLGtFQUlFLGNBSkYsRUFLRSxhQUxGOztBQUFBLFdBUUU7QUFBQTtBQUFjQSxVQUFkO0FBQ0U7QUFDRSxlQUFPTCxLQURUO0FBRUUsZUFBT0MsS0FGVDtBQUdFLGtCQUFVQyxRQUhaO0FBSUUsbUJBQVcsR0FKYjtBQUtFLGtCQUFVLEdBTFo7QUFNRSx3QkFBY0MsU0FOaEI7QUFPRSx1QkFBYUM7QUFQZjtBQURGLEtBUkY7QUFBQSxHQURJO0FBRk8sQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9lZGl0LWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgRWRpdEltYWdlIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PiBpbm5lclR5cGUubmFtZSA9PT0gJ0ltYWdlJyxcbiAgZm9ybTogdG9DbGFzcyhcbiAgICAoe1xuICAgICAgdmFsdWUsXG4gICAgICBtdWx0aSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgLi4ucmVzdFxuICAgIH0pID0+IChcbiAgICAgIDxGb3JtSXRlbSB7Li4ucmVzdH0+XG4gICAgICAgIDxFZGl0SW1hZ2VcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgbXVsdGk9e211bHRpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBtYXhIZWlnaHQ9ezEwMH1cbiAgICAgICAgICBtYXhXaWR0aD17MjUwfVxuICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKSxcbiAgKSxcbn07XG4iXX0=
