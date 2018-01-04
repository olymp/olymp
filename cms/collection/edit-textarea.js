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
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return ['Markdown'].indexOf(innerType.name) !== -1;
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
      _react2.default.createElement(_input2.default.TextArea, {
        value: value,
        autosize: true,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtdGV4dGFyZWEuZXM2Il0sIm5hbWVzIjpbInJ1bGUiLCJpbm5lclR5cGUiLCJpbmRleE9mIiwibmFtZSIsImZvcm0iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7OztrQkFFZTtBQUNiQSxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FBbUIsQ0FBQyxVQUFELEVBQWFDLE9BQWIsQ0FBcUJELFVBQVVFLElBQS9CLE1BQXlDLENBQUMsQ0FBN0Q7QUFBQSxHQURPO0FBRWJDLFFBQU0sd0JBQ0o7QUFBQSxRQUNFQyxLQURGLFNBQ0VBLEtBREY7QUFBQSxRQUVFQyxRQUZGLFNBRUVBLFFBRkY7QUFBQSxRQUdrQkMsU0FIbEIsU0FHRSxjQUhGO0FBQUEsUUFJaUJDLFFBSmpCLFNBSUUsYUFKRjtBQUFBLFFBS0tDLENBTEwseURBR0UsY0FIRixFQUlFLGFBSkY7O0FBQUEsV0FPRTtBQUFBO0FBQWNBLE9BQWQ7QUFDRSxvREFBTyxRQUFQO0FBQ0UsZUFBT0osS0FEVDtBQUVFLHNCQUZGO0FBR0Usa0JBQVVDLFFBSFo7QUFJRSxjQUFLLE1BSlA7QUFLRSx3QkFBY0MsU0FMaEI7QUFNRSx1QkFBYUM7QUFOZjtBQURGLEtBUEY7QUFBQSxHQURJO0FBRk8sQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9lZGl0LXRleHRhcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IFsnTWFya2Rvd24nXS5pbmRleE9mKGlubmVyVHlwZS5uYW1lKSAhPT0gLTEsXG4gIGZvcm06IHRvQ2xhc3MoXG4gICAgKHtcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICAuLi5wXG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5wfT5cbiAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGF1dG9zaXplXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH1cbiAgICAgICAgICBkYXRhLV9fbWV0YT17ZGF0YU1ldGF9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICksXG4gICksXG59O1xuIl19
