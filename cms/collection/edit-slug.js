'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Slug';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var form = _ref2.form,
        value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        p = _objectWithoutProperties(_ref2, ['form', 'value', 'onChange', 'data-__field', 'data-__meta']);

    var slug = (0, _slugify2.default)(form.getFieldValue('name'));
    return _react2.default.createElement(
      _formItem2.default,
      _extends({ form: form }, p),
      _react2.default.createElement(_input2.default, {
        value: value || slug && '/' + slug,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtc2x1Zy5lczYiXSwibmFtZXMiOlsicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwidmFsdWUiLCJvbkNoYW5nZSIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwicCIsInNsdWciLCJnZXRGaWVsZFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE1BQXRDO0FBQUEsR0FETztBQUViQyxRQUFNLHdCQUNKLGlCQU9NO0FBQUEsUUFOSkEsSUFNSSxTQU5KQSxJQU1JO0FBQUEsUUFMSkMsS0FLSSxTQUxKQSxLQUtJO0FBQUEsUUFKSkMsUUFJSSxTQUpKQSxRQUlJO0FBQUEsUUFIWUMsU0FHWixTQUhKLGNBR0k7QUFBQSxRQUZXQyxRQUVYLFNBRkosYUFFSTtBQUFBLFFBRERDLENBQ0MsaUVBSEosY0FHSSxFQUZKLGFBRUk7O0FBQ0osUUFBTUMsT0FBTyx1QkFBUU4sS0FBS08sYUFBTCxDQUFtQixNQUFuQixDQUFSLENBQWI7QUFDQSxXQUNFO0FBQUE7QUFBQSxpQkFBVSxNQUFNUCxJQUFoQixJQUEwQkssQ0FBMUI7QUFDRTtBQUNFLGVBQU9KLFNBQVVLLGNBQVlBLElBRC9CO0FBRUUsa0JBQVVKLFFBRlo7QUFHRSxjQUFLLE1BSFA7QUFJRSx3QkFBY0MsU0FKaEI7QUFLRSx1QkFBYUM7QUFMZjtBQURGLEtBREY7QUFXRCxHQXJCRztBQUZPLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vZWRpdC1zbHVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT4gaW5uZXJUeXBlLm5hbWUgPT09ICdTbHVnJyxcbiAgZm9ybTogdG9DbGFzcyhcbiAgICAoe1xuICAgICAgZm9ybSxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICAuLi5wXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkoZm9ybS5nZXRGaWVsZFZhbHVlKCduYW1lJykpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1JdGVtIGZvcm09e2Zvcm19IHsuLi5wfT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAoc2x1ZyAmJiBgLyR7c2x1Z31gKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgICAgZGF0YS1fX21ldGE9e2RhdGFNZXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICApO1xuICAgIH0sXG4gICksXG59O1xuIl19
