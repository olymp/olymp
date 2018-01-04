'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BannerBlock = function BannerBlock(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    _extends({ className: className }, attributes),
    _react2.default.createElement(
      _olympFela.Container,
      null,
      _react2.default.createElement(
        'h2',
        null,
        children
      )
    )
  );
};

exports.default = {
  type: 'banner',
  isVoid: false,
  kind: 'block',
  label: 'Banner',
  defaultText: 'Titel',
  category: 'Kopf',
  styles: function styles(_ref2) {
    var theme = _ref2.theme;
    return {
      backgroundColor: '#ddd',
      minHeight: 75,
      width: '100%',
      marginBottom: 20,
      paddingY: theme.space3
    };
  },
  component: BannerBlock
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvYmFubmVyLmVzNiJdLCJuYW1lcyI6WyJCYW5uZXJCbG9jayIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJkZWZhdWx0VGV4dCIsImNhdGVnb3J5Iiwic3R5bGVzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdZIiwic3BhY2UzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsU0FDbEI7QUFBQTtBQUFBLGVBQUssV0FBV0QsU0FBaEIsSUFBK0JELFVBQS9CO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtFO0FBQUw7QUFERjtBQURGLEdBRGtCO0FBQUEsQ0FBcEI7O2tCQVFlO0FBQ2JDLFFBQU0sUUFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sUUFKTTtBQUtiQyxlQUFhLE9BTEE7QUFNYkMsWUFBVSxNQU5HO0FBT2JDLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsdUJBQWlCLE1BREs7QUFFdEJDLGlCQUFXLEVBRlc7QUFHdEJDLGFBQU8sTUFIZTtBQUl0QkMsb0JBQWMsRUFKUTtBQUt0QkMsZ0JBQVVMLE1BQU1NO0FBTE0sS0FBaEI7QUFBQSxHQVBLO0FBY2JDLGFBQVdsQjtBQWRFLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9iYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IEJhbm5lckJsb2NrID0gKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgyPntjaGlsZHJlbn08L2gyPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2Jhbm5lcicsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnQmFubmVyJyxcbiAgZGVmYXVsdFRleHQ6ICdUaXRlbCcsXG4gIGNhdGVnb3J5OiAnS29wZicsXG4gIHN0eWxlczogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkJyxcbiAgICBtaW5IZWlnaHQ6IDc1LFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UzLFxuICB9KSxcbiAgY29tcG9uZW50OiBCYW5uZXJCbG9jayxcbn07XG4iXX0=
