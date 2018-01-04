'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactFela = require('react-fela');

var _image = require('../image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ImageContainer = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      isActive = _ref.isActive;
  return {
    position: 'relative',
    margin: '.5rem',
    padding: 1,
    cursor: 'pointer',
    display: 'inline-block',
    // outline: isActive ? `3px solid ${theme.color}` : 'none',
    // transform: isActive ? 'scale(1.15)' : 'none',
    transition: 'all .1s ease-in-out',
    backgroundColor: isActive ? theme.color : 'transparent',
    border: isActive ? '1px solid ' + theme.color : '1px solid #ddd',
    // boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, ${isActive ? 0.4 : 0.2})`,
    '> div': {
      opacity: isActive ? 0.8 : 1
    },
    ':hover': {
      // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)',
      transform: 'scale(1.025)',
      transition: 'all .1s ease-in-out'
    }
  };
}, 'div', function (_ref2) {
  var height = _ref2.height,
      isActive = _ref2.isActive,
      p = _objectWithoutProperties(_ref2, ['height', 'isActive']);

  return Object.keys(p);
});

var ImageLabel = (0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1
    // boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  };
}, 'span', function (p) {
  return Object.keys(p);
});

var CheckLabel = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(40%, -40%) scale(0.667)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1,
    width: 32,
    height: 32,
    '> *': {
      center: true
    }
  };
}, 'span', function (p) {
  return Object.keys(p);
});

var CloseLabel = (0, _reactFela.createComponent)(function (_ref5) {
  var theme = _ref5.theme;
  return {
    ':hover': {
      transform: 'translate(40%, -40%) scale(0.75)',
      transition: 'all .15s ease-in-out'
    }
  };
}, CheckLabel, function (p) {
  return Object.keys(p);
});

var _ref7 = _react2.default.createElement(
  ImageLabel,
  null,
  _react2.default.createElement(_icon2.default, { type: 'file-pdf' })
);

var _ref8 = _react2.default.createElement(_icon2.default, { type: 'close' });

var _ref9 = _react2.default.createElement(
  CheckLabel,
  null,
  _react2.default.createElement(_icon2.default, { type: 'check' })
);

var Thumb = function Thumb(_ref6) {
  var item = _ref6.item,
      width = _ref6.width,
      height = _ref6.height,
      onClick = _ref6.onClick,
      onRemove = _ref6.onRemove,
      isActive = _ref6.isActive;
  return item ? _react2.default.createElement(
    ImageContainer,
    { isActive: isActive },
    height ? _react2.default.createElement(_image2.default, { value: item, height: height, maxWidth: 300, onClick: onClick }) : null,
    width ? _react2.default.createElement(_image2.default, {
      value: _extends({}, item, { width: width, height: item.height / item.width * width }),
      width: '100%',
      onClick: onClick
    }) : null,
    item.format === 'pdf' ? _ref7 : undefined,
    isActive ? onRemove ? _react2.default.createElement(
      CloseLabel,
      { onClick: onRemove },
      _ref8
    ) : _ref9 : undefined
  ) : null;
};
Thumb.propTypes = {
  item: _propTypes.object,
  onClick: _propTypes.func,
  onRemove: _propTypes.func,
  height: _propTypes.number,
  isActive: _propTypes.bool
};
exports.default = Thumb;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvdGh1bWIuZXM2Il0sIm5hbWVzIjpbIkltYWdlQ29udGFpbmVyIiwidGhlbWUiLCJpc0FjdGl2ZSIsInBvc2l0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImN1cnNvciIsImRpc3BsYXkiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiaGVpZ2h0IiwicCIsIk9iamVjdCIsImtleXMiLCJJbWFnZUxhYmVsIiwidG9wIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJDaGVja0xhYmVsIiwid2lkdGgiLCJjZW50ZXIiLCJDbG9zZUxhYmVsIiwiVGh1bWIiLCJpdGVtIiwib25DbGljayIsIm9uUmVtb3ZlIiwiZm9ybWF0IiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLGdDQUNyQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLFNBQTBCO0FBQ3hCQyxjQUFVLFVBRGM7QUFFeEJDLFlBQVEsT0FGZ0I7QUFHeEJDLGFBQVMsQ0FIZTtBQUl4QkMsWUFBUSxTQUpnQjtBQUt4QkMsYUFBUyxjQUxlO0FBTXhCO0FBQ0E7QUFDQUMsZ0JBQVkscUJBUlk7QUFTeEJDLHFCQUFpQlAsV0FBV0QsTUFBTVMsS0FBakIsR0FBeUIsYUFUbEI7QUFVeEJDLFlBQVFULDBCQUF3QkQsTUFBTVMsS0FBOUIsR0FBd0MsZ0JBVnhCO0FBV3hCO0FBQ0EsYUFBUztBQUNQRSxlQUFTVixXQUFXLEdBQVgsR0FBaUI7QUFEbkIsS0FaZTtBQWV4QixjQUFVO0FBQ1I7QUFDQVcsaUJBQVcsY0FGSDtBQUdSTCxrQkFB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SztBQUhYLE1BREQsR0FNRyxJQVZOO0FBV0dELFNBQUtHLE1BQUwsS0FBZ0IsS0FBaEIsV0FLQ0MsU0FoQko7QUFrQkdoQyxlQUNDOEIsV0FDRTtBQUFDLGdCQUFEO0FBQUEsUUFBWSxTQUFTQSxRQUFyQjtBQUFBO0FBQUEsS0FERixRQURELEdBV0NFO0FBN0JKLEdBREYsR0FpQ0ksSUFsQ1E7QUFBQSxDQUFkO0FBbUNBTCxNQUFNTSxTQUFOLEdBQWtCO0FBQ2hCTCx5QkFEZ0I7QUFFaEJDLDBCQUZnQjtBQUdoQkMsMkJBSGdCO0FBSWhCbEIsMkJBSmdCO0FBS2hCWjtBQUxnQixDQUFsQjtrQkFPZTJCLEsiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvY29tcG9uZW50cy90aHVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYmplY3QsIGZ1bmMsIG51bWJlciwgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1hZ2UnO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGlzQWN0aXZlIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luOiAnLjVyZW0nLFxuICAgIHBhZGRpbmc6IDEsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgLy8gb3V0bGluZTogaXNBY3RpdmUgPyBgM3B4IHNvbGlkICR7dGhlbWUuY29sb3J9YCA6ICdub25lJyxcbiAgICAvLyB0cmFuc2Zvcm06IGlzQWN0aXZlID8gJ3NjYWxlKDEuMTUpJyA6ICdub25lJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIC4xcyBlYXNlLWluLW91dCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IGlzQWN0aXZlID8gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAgOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgIC8vIGJveFNoYWRvdzogYDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAke2lzQWN0aXZlID8gMC40IDogMC4yfSlgLFxuICAgICc+IGRpdic6IHtcbiAgICAgIG9wYWNpdHk6IGlzQWN0aXZlID8gMC44IDogMSxcbiAgICB9LFxuICAgICc6aG92ZXInOiB7XG4gICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAyNSknLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMXMgZWFzZS1pbi1vdXQnLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgaGVpZ2h0LCBpc0FjdGl2ZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IEltYWdlTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICByaWdodDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDUwJSwgLTUwJSknLFxuICAgIHRyYW5zaXRpb246ICdhbGwgLjE1cyBlYXNlLWluLW91dCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBjb2xvcjogJyNGRkYnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogMjUsXG4gICAgcGFkZGluZzogNSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIC8vIGJveFNoYWRvdzogXCIwcHggMHB4IDEycHggMHB4IHJnYmEoMCwwLDAsMC43NSlcIixcbiAgfSksXG4gICdzcGFuJyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IENoZWNrTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg0MCUsIC00MCUpIHNjYWxlKDAuNjY3KScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAuMTVzIGVhc2UtaW4tb3V0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGNvbG9yOiAnI0ZGRicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAyNSxcbiAgICBwYWRkaW5nOiA1LFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgd2lkdGg6IDMyLFxuICAgIGhlaWdodDogMzIsXG4gICAgJz4gKic6IHtcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICB9LFxuICB9KSxcbiAgJ3NwYW4nLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgQ2xvc2VMYWJlbCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDQwJSwgLTQwJSkgc2NhbGUoMC43NSknLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMTVzIGVhc2UtaW4tb3V0JyxcbiAgICB9LFxuICB9KSxcbiAgQ2hlY2tMYWJlbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFRodW1iID0gKHsgaXRlbSwgd2lkdGgsIGhlaWdodCwgb25DbGljaywgb25SZW1vdmUsIGlzQWN0aXZlIH0pID0+XG4gIGl0ZW0gPyAoXG4gICAgPEltYWdlQ29udGFpbmVyIGlzQWN0aXZlPXtpc0FjdGl2ZX0+XG4gICAgICB7aGVpZ2h0ID8gKFxuICAgICAgICA8SW1hZ2UgdmFsdWU9e2l0ZW19IGhlaWdodD17aGVpZ2h0fSBtYXhXaWR0aD17MzAwfSBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7d2lkdGggPyAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHZhbHVlPXt7IC4uLml0ZW0sIHdpZHRoLCBoZWlnaHQ6IGl0ZW0uaGVpZ2h0IC8gaXRlbS53aWR0aCAqIHdpZHRoIH19XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aXRlbS5mb3JtYXQgPT09ICdwZGYnID8gKFxuICAgICAgICA8SW1hZ2VMYWJlbD5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwiZmlsZS1wZGZcIiAvPlxuICAgICAgICA8L0ltYWdlTGFiZWw+XG4gICAgICApIDogKFxuICAgICAgICB1bmRlZmluZWRcbiAgICAgICl9XG4gICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgIG9uUmVtb3ZlID8gKFxuICAgICAgICAgIDxDbG9zZUxhYmVsIG9uQ2xpY2s9e29uUmVtb3ZlfT5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgPC9DbG9zZUxhYmVsPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDaGVja0xhYmVsPlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImNoZWNrXCIgLz5cbiAgICAgICAgICA8L0NoZWNrTGFiZWw+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIHVuZGVmaW5lZFxuICAgICAgKX1cbiAgICA8L0ltYWdlQ29udGFpbmVyPlxuICApIDogbnVsbDtcblRodW1iLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogb2JqZWN0LFxuICBvbkNsaWNrOiBmdW5jLFxuICBvblJlbW92ZTogZnVuYyxcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIGlzQWN0aXZlOiBib29sLFxufTtcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xuIl19
