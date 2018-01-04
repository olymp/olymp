'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  rule: function rule(_ref) {
    var type = _ref.type,
        name = _ref.name;
    return name !== 'tags' && type.kind === 'LIST' && type.ofType.name === 'String';
  },
  form: (0, _recompose.toClass)(function (props) {
    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_select2.default, _extends({}, props, { mode: 'tags', style: { width: '100%' } }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtc3RyaW5ncy5lczYiXSwibmFtZXMiOlsicnVsZSIsInR5cGUiLCJuYW1lIiwia2luZCIsIm9mVHlwZSIsImZvcm0iLCJwcm9wcyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxRQUFNO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDSkEsU0FBUyxNQUFULElBQW1CRCxLQUFLRSxJQUFMLEtBQWMsTUFBakMsSUFBMkNGLEtBQUtHLE1BQUwsQ0FBWUYsSUFBWixLQUFxQixRQUQ1RDtBQUFBLEdBRE87QUFHYkcsUUFBTSx3QkFBUTtBQUFBLFdBQ1o7QUFBQTtBQUFjQyxXQUFkO0FBQ0UsbUVBQVlBLEtBQVosSUFBbUIsTUFBSyxNQUF4QixFQUErQixPQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUF0QztBQURGLEtBRFk7QUFBQSxHQUFSO0FBSE8sQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9lZGl0LXN0cmluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgdHlwZSwgbmFtZSB9KSA9PlxuICAgIG5hbWUgIT09ICd0YWdzJyAmJiB0eXBlLmtpbmQgPT09ICdMSVNUJyAmJiB0eXBlLm9mVHlwZS5uYW1lID09PSAnU3RyaW5nJyxcbiAgZm9ybTogdG9DbGFzcyhwcm9wcyA9PiAoXG4gICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICA8U2VsZWN0IHsuLi5wcm9wc30gbW9kZT1cInRhZ3NcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKSksXG59O1xuIl19
