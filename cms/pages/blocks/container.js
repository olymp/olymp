'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'container',
  isVoid: false,
  kind: 'block',
  label: 'Container',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return ['paragraph'];
  },
  component: function component(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
      _olympFela.Container,
      _extends({}, attributes, { className: className }),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJkZWZhdWx0Tm9kZXMiLCJjb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZTtBQUNiQSxRQUFNLFdBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLFdBSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGdCQUFjO0FBQUEsV0FBTSxDQUFDLFdBQUQsQ0FBTjtBQUFBLEdBTkQ7QUFPYkMsYUFBVztBQUFBLFFBQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLFFBQWVDLFNBQWYsUUFBZUEsU0FBZjtBQUFBLFFBQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxXQUNUO0FBQUE7QUFBQSxtQkFBZUYsVUFBZixJQUEyQixXQUFXQyxTQUF0QztBQUNHQztBQURILEtBRFM7QUFBQTtBQVBFLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2NvbnRhaW5lcicsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnQ29udGFpbmVyJyxcbiAgY2F0ZWdvcnk6ICdMYXlvdXQnLFxuICBkZWZhdWx0Tm9kZXM6ICgpID0+IFsncGFyYWdyYXBoJ10sXG4gIGNvbXBvbmVudDogKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPENvbnRhaW5lciB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApLFxufTtcbiJdfQ==
