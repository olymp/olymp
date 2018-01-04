'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  bold: function bold(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes;
    return _react2.default.createElement(
      'strong',
      attributes,
      children
    );
  },
  code: function code(_ref2) {
    var children = _ref2.children,
        attributes = _ref2.attributes;
    return _react2.default.createElement(
      'code',
      attributes,
      children
    );
  },
  italic: function italic(_ref3) {
    var children = _ref3.children,
        attributes = _ref3.attributes;
    return _react2.default.createElement(
      'em',
      attributes,
      children
    );
  },
  underlined: function underlined(_ref4) {
    var children = _ref4.children,
        attributes = _ref4.attributes;
    return _react2.default.createElement(
      'u',
      attributes,
      children
    );
  }
  // center: ({ children, attributes }) => <center {...attributes}>{children}</center>,
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL21hcmtzLmVzNiJdLCJuYW1lcyI6WyJib2xkIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwiY29kZSIsIml0YWxpYyIsInVuZGVybGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsUUFBYUEsVUFBYjtBQUFBLFdBQThCO0FBQUE7QUFBWUEsZ0JBQVo7QUFBeUJEO0FBQXpCLEtBQTlCO0FBQUEsR0FETztBQUViRSxRQUFNO0FBQUEsUUFBR0YsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYUMsVUFBYixTQUFhQSxVQUFiO0FBQUEsV0FBOEI7QUFBQTtBQUFVQSxnQkFBVjtBQUF1QkQ7QUFBdkIsS0FBOUI7QUFBQSxHQUZPO0FBR2JHLFVBQVE7QUFBQSxRQUFHSCxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFNBQWFBLFVBQWI7QUFBQSxXQUE4QjtBQUFBO0FBQVFBLGdCQUFSO0FBQXFCRDtBQUFyQixLQUE5QjtBQUFBLEdBSEs7QUFJYkksY0FBWTtBQUFBLFFBQUdKLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsU0FBYUEsVUFBYjtBQUFBLFdBQThCO0FBQUE7QUFBT0EsZ0JBQVA7QUFBb0JEO0FBQXBCLEtBQTlCO0FBQUE7QUFDWjtBQUxhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvZGVmYXVsdHMvbWFya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvbGQ6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IDxzdHJvbmcgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L3N0cm9uZz4sXG4gIGNvZGU6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IDxjb2RlIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9jb2RlPixcbiAgaXRhbGljOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcyB9KSA9PiA8ZW0gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2VtPixcbiAgdW5kZXJsaW5lZDogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMgfSkgPT4gPHUgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L3U+LFxuICAvLyBjZW50ZXI6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IDxjZW50ZXIgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2NlbnRlcj4sXG59O1xuIl19
