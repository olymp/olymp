'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = (0, _reactFela.createComponent)(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      theme = _ref.theme,
      circle = _ref.circle;
  return {
    width: width,
    height: height,
    backgroundColor: theme.dark5,
    borderRadius: circle ? '50%' : 0,
    '> img': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%'
    },
    '> svg': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%'
    },
    onHover: {
      '> img': {
        opacity: 0.8
      },
      '> svg': {
        opacity: 0.8
      }
    }
  };
}, (0, _recompose.getContext)({
  amp: _propTypes2.default.bool
})((0, _reactFela.withTheme)(function (_ref2) {
  var className = _ref2.className,
      theme = _ref2.theme,
      amp = _ref2.amp;
  return _react2.default.createElement(
    'div',
    { className: className },
    !amp && typeof theme.logo === 'string' && _react2.default.createElement('img', { src: theme.logo, alt: 'placeholder' }),
    !amp && typeof theme.logo === 'function' && theme.logo()
  );
})), ['onClick', 'amp']);
Image.displayName = 'Placeholder';
Image.propTypes = {
  circle: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
Image.defaultProps = {
  circle: false,
  width: undefined,
  height: undefined
};
exports.default = Image;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvcGxhY2Vob2xkZXIuZXM2Il0sIm5hbWVzIjpbIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGVtZSIsImNpcmNsZSIsImJhY2tncm91bmRDb2xvciIsImRhcms1IiwiYm9yZGVyUmFkaXVzIiwib3BhY2l0eSIsImNlbnRlciIsInRyYW5zaXRpb24iLCJtYXhXaWR0aCIsIm9uSG92ZXIiLCJhbXAiLCJib29sIiwiY2xhc3NOYW1lIiwibG9nbyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLGdDQUNaO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsTUFBa0JDLEtBQWxCLFFBQWtCQSxLQUFsQjtBQUFBLE1BQXlCQyxNQUF6QixRQUF5QkEsTUFBekI7QUFBQSxTQUF1QztBQUNyQ0gsZ0JBRHFDO0FBRXJDQyxrQkFGcUM7QUFHckNHLHFCQUFpQkYsTUFBTUcsS0FIYztBQUlyQ0Msa0JBQWNILFNBQVMsS0FBVCxHQUFpQixDQUpNO0FBS3JDLGFBQVM7QUFDUEksZUFBUyxHQURGO0FBRVBDLGNBQVEsSUFGRDtBQUdQQyxrQkFBWSwwQkFITDtBQUlQQyxnQkFBVTtBQUpILEtBTDRCO0FBV3JDLGFBQVM7QUFDUEgsZUFBUyxHQURGO0FBRVBDLGNBQVEsSUFGRDtBQUdQQyxrQkFBWSwwQkFITDtBQUlQQyxnQkFBVTtBQUpILEtBWDRCO0FBaUJyQ0MsYUFBUztBQUNQLGVBQVM7QUFDUEosaUJBQVM7QUFERixPQURGO0FBSVAsZUFBUztBQUNQQSxpQkFBUztBQURGO0FBSkY7QUFqQjRCLEdBQXZDO0FBQUEsQ0FEWSxFQTJCWiwyQkFBVztBQUNUSyxPQUFLLG9CQUFVQztBQUROLENBQVgsRUFHRSwwQkFBVTtBQUFBLE1BQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNaLEtBQWQsU0FBY0EsS0FBZDtBQUFBLE1BQXFCVSxHQUFyQixTQUFxQkEsR0FBckI7QUFBQSxTQUNSO0FBQUE7QUFBQSxNQUFLLFdBQVdFLFNBQWhCO0FBQ0csS0FBQ0YsR0FBRCxJQUNDLE9BQU9WLE1BQU1hLElBQWIsS0FBc0IsUUFEdkIsSUFFRyx1Q0FBSyxLQUFLYixNQUFNYSxJQUFoQixFQUFzQixLQUFJLGFBQTFCLEdBSE47QUFLRyxLQUFDSCxHQUFELElBQVEsT0FBT1YsTUFBTWEsSUFBYixLQUFzQixVQUE5QixJQUE0Q2IsTUFBTWEsSUFBTjtBQUwvQyxHQURRO0FBQUEsQ0FBVixDQUhGLENBM0JZLEVBd0NaLENBQUMsU0FBRCxFQUFZLEtBQVosQ0F4Q1ksQ0FBZDtBQTBDQWhCLE1BQU1pQixXQUFOLEdBQW9CLGFBQXBCO0FBQ0FqQixNQUFNa0IsU0FBTixHQUFrQjtBQUNoQmQsVUFBUSxvQkFBVVUsSUFERjtBQUVoQmIsU0FBTyxvQkFBVWtCLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsTUFBWCxFQUFtQixvQkFBVUMsTUFBN0IsQ0FBcEIsQ0FGUztBQUdoQm5CLFVBQVEsb0JBQVVpQixTQUFWLENBQW9CLENBQUMsb0JBQVVDLE1BQVgsRUFBbUIsb0JBQVVDLE1BQTdCLENBQXBCO0FBSFEsQ0FBbEI7QUFLQXJCLE1BQU1zQixZQUFOLEdBQXFCO0FBQ25CbEIsVUFBUSxLQURXO0FBRW5CSCxTQUFPc0IsU0FGWTtBQUduQnJCLFVBQVFxQjtBQUhXLENBQXJCO2tCQUtldkIsSyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2ltYWdlL3BsYWNlaG9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgd2l0aFRoZW1lIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IEltYWdlID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB3aWR0aCwgaGVpZ2h0LCB0aGVtZSwgY2lyY2xlIH0pID0+ICh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gICAgYm9yZGVyUmFkaXVzOiBjaXJjbGUgPyAnNTAlJyA6IDAsXG4gICAgJz4gaW1nJzoge1xuICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC41cyBlYXNlLWluLW91dCcsXG4gICAgICBtYXhXaWR0aDogJzMzJScsXG4gICAgfSxcbiAgICAnPiBzdmcnOiB7XG4gICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0JyxcbiAgICAgIG1heFdpZHRoOiAnMzMlJyxcbiAgICB9LFxuICAgIG9uSG92ZXI6IHtcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgfSxcbiAgICAgICc+IHN2Zyc6IHtcbiAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgZ2V0Q29udGV4dCh7XG4gICAgYW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSkoXG4gICAgd2l0aFRoZW1lKCh7IGNsYXNzTmFtZSwgdGhlbWUsIGFtcCB9KSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgeyFhbXAgJiZcbiAgICAgICAgICB0eXBlb2YgdGhlbWUubG9nbyA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgICAgICAgPGltZyBzcmM9e3RoZW1lLmxvZ299IGFsdD1cInBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICB7IWFtcCAmJiB0eXBlb2YgdGhlbWUubG9nbyA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGVtZS5sb2dvKCl9XG4gICAgICA8L2Rpdj5cbiAgICApKSxcbiAgKSxcbiAgWydvbkNsaWNrJywgJ2FtcCddLFxuKTtcbkltYWdlLmRpc3BsYXlOYW1lID0gJ1BsYWNlaG9sZGVyJztcbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgY2lyY2xlOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaXJjbGU6IGZhbHNlLFxuICB3aWR0aDogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiJdfQ==
