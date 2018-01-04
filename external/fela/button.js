'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _faPencil = require('olymp-icons/lib/fa-pencil');

var _faPencil2 = _interopRequireDefault(_faPencil);

var _olympRouter = require('olymp-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 30 : _ref$size;
  return {
    borderRadius: '50%',
    backgroundColor: theme.color,
    width: size,
    height: size,
    color: theme.light,
    '> svg': {
      fill: theme.light,
      stroke: theme.light
    },
    '> *': {
      center: true
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      to = _ref2.to,
      updateQuery = _ref2.updateQuery;
  return _react2.default.createElement(
    _olympRouter.Link,
    { updateQuery: updateQuery, to: to },
    _react2.default.createElement(
      'div',
      { className: className },
      children
    )
  );
}, ['className', 'to', 'updateQuery']);

var _ref3 = _react2.default.createElement(_faPencil2.default, { size: 12 });

Button.Edit = function (props) {
  return _react2.default.createElement(
    Button,
    props,
    _ref3
  );
};

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvYnV0dG9uLmVzNiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0aGVtZSIsInNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibGlnaHQiLCJmaWxsIiwic3Ryb2tlIiwiY2VudGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0byIsInVwZGF0ZVF1ZXJ5IiwiRWRpdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSx1QkFBVUMsSUFBVjtBQUFBLE1BQVVBLElBQVYsNkJBQWlCLEVBQWpCO0FBQUEsU0FBMkI7QUFDekJDLGtCQUFjLEtBRFc7QUFFekJDLHFCQUFpQkgsTUFBTUksS0FGRTtBQUd6QkMsV0FBT0osSUFIa0I7QUFJekJLLFlBQVFMLElBSmlCO0FBS3pCRyxXQUFPSixNQUFNTyxLQUxZO0FBTXpCLGFBQVM7QUFDUEMsWUFBTVIsTUFBTU8sS0FETDtBQUVQRSxjQUFRVCxNQUFNTztBQUZQLEtBTmdCO0FBVXpCLFdBQU87QUFDTEcsY0FBUTtBQURIO0FBVmtCLEdBQTNCO0FBQUEsQ0FEYSxFQWViO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxTQUFjQSxRQUFkO0FBQUEsTUFBd0JDLEVBQXhCLFNBQXdCQSxFQUF4QjtBQUFBLE1BQTRCQyxXQUE1QixTQUE0QkEsV0FBNUI7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFNLGFBQWFBLFdBQW5CLEVBQWdDLElBQUlELEVBQXBDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV0YsU0FBaEI7QUFBNEJDO0FBQTVCO0FBREYsR0FERjtBQUFBLENBZmEsRUFvQmIsQ0FBQyxXQUFELEVBQWMsSUFBZCxFQUFvQixhQUFwQixDQXBCYSxDQUFmOztZQXlCSSxvREFBVSxNQUFNLEVBQWhCLEc7O0FBRkpiLE9BQU9nQixJQUFQLEdBQWM7QUFBQSxTQUNaO0FBQUMsVUFBRDtBQUFZQyxTQUFaO0FBQUE7QUFBQSxHQURZO0FBQUEsQ0FBZDs7a0JBTWVqQixNIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFQZW5jaWwgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcblxuY29uc3QgQnV0dG9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDMwIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIHdpZHRoOiBzaXplLFxuICAgIGhlaWdodDogc2l6ZSxcbiAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgJz4gc3ZnJzoge1xuICAgICAgZmlsbDogdGhlbWUubGlnaHQsXG4gICAgICBzdHJva2U6IHRoZW1lLmxpZ2h0LFxuICAgIH0sXG4gICAgJz4gKic6IHtcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgdG8sIHVwZGF0ZVF1ZXJ5IH0pID0+IChcbiAgICA8TGluayB1cGRhdGVRdWVyeT17dXBkYXRlUXVlcnl9IHRvPXt0b30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9MaW5rPlxuICApLFxuICBbJ2NsYXNzTmFtZScsICd0bycsICd1cGRhdGVRdWVyeSddLFxuKTtcblxuQnV0dG9uLkVkaXQgPSBwcm9wcyA9PiAoXG4gIDxCdXR0b24gey4uLnByb3BzfT5cbiAgICA8RmFQZW5jaWwgc2l6ZT17MTJ9IC8+XG4gIDwvQnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19
