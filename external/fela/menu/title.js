'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.inverted ? theme.light2 : theme.dark2,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    marginTop: theme.space2,
    marginBottom: theme.space1,
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-in-out'
  };
}, function (_ref2) {
  var extra = _ref2.extra,
      children = _ref2.children,
      p = _objectWithoutProperties(_ref2, ['extra', 'children']);

  return _react2.default.createElement(
    'div',
    p,
    children,
    !!extra && _react2.default.createElement(
      _image2.default,
      { extra: true },
      extra
    )
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS90aXRsZS5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvciIsImludmVydGVkIiwibGlnaHQyIiwiZGFyazIiLCJlbGxpcHNpcyIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImZvbnRTaXplU21hbGwiLCJtYXJnaW5Ub3AiLCJzcGFjZTIiLCJtYXJnaW5Cb3R0b20iLCJzcGFjZTEiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4R3JvdyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImNvbGxhcHNlZCIsInRyYW5zaXRpb24iLCJleHRyYSIsImNoaWxkcmVuIiwicCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2tCQUVlLGdDQUNiO0FBQUEsTUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsV0FBT0QsTUFBTUUsUUFBTixHQUFpQkYsTUFBTUcsTUFBdkIsR0FBZ0NILE1BQU1JLEtBRC9CO0FBRWRDLGNBQVUsSUFGSTtBQUdkQyxtQkFBZSxXQUhEO0FBSWRDLGNBQVVQLE1BQU1RLGFBSkY7QUFLZEMsZUFBV1QsTUFBTVUsTUFMSDtBQU1kQyxrQkFBY1gsTUFBTVksTUFOTjtBQU9kQyxXQUFPLE1BUE87QUFRZEMsYUFBUyxNQVJLO0FBU2RDLGNBQVUsQ0FUSTtBQVVkQyxvQkFBZ0IsZUFWRjtBQVdkQyxhQUFTakIsTUFBTWtCLFNBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FYakI7QUFZZEMsZ0JBQVk7QUFaRSxHQUFoQjtBQUFBLENBRGEsRUFlYjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLFFBQVYsU0FBVUEsUUFBVjtBQUFBLE1BQXVCQyxDQUF2Qjs7QUFBQSxTQUNFO0FBQUE7QUFBU0EsS0FBVDtBQUNHRCxZQURIO0FBRUcsS0FBQyxDQUFDRCxLQUFGLElBQVc7QUFBQTtBQUFBLFFBQU8sV0FBUDtBQUFjQTtBQUFkO0FBRmQsR0FERjtBQUFBLENBZmEsRUFxQmI7QUFBQSxTQUFLRyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBckJhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L3RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazIsXG4gICAgZWxsaXBzaXM6IHRydWUsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplU21hbGwsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZTIsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjZTEsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEdyb3c6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBvcGFjaXR5OiB0aGVtZS5jb2xsYXBzZWQgPyAwIDogMSxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCcsXG4gIH0pLFxuICAoeyBleHRyYSwgY2hpbGRyZW4sIC4uLnAgfSkgPT4gKFxuICAgIDxkaXYgey4uLnB9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgeyEhZXh0cmEgJiYgPEltYWdlIGV4dHJhPntleHRyYX08L0ltYWdlPn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
