'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

var icons = _interopRequireWildcard(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var fill = _ref.fill,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['fill', 'type']);

  var icon = icons[type];

  return _react2.default.createElement('span', _extends({ dangerouslySetInnerHTML: { __html: icon(fill) } }, props));
};

Icon.propTypes = {
  fill: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
  fill: 'white'
};

exports.default = Icon;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9JY29uLmVzNiJdLCJuYW1lcyI6WyJpY29ucyIsIkljb24iLCJmaWxsIiwidHlwZSIsInByb3BzIiwiaWNvbiIsIl9faHRtbCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiT2JqZWN0Iiwia2V5cyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEs7Ozs7Ozs7O0FBRVosSUFBTUMsT0FBTyxTQUFQQSxJQUFPLE9BQThCO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6QyxNQUFNQyxPQUFPTCxNQUFNRyxJQUFOLENBQWI7O0FBRUEsU0FBTyxpREFBTSx5QkFBeUIsRUFBRUcsUUFBUUQsS0FBS0gsSUFBTCxDQUFWLEVBQS9CLElBQTJERSxLQUEzRCxFQUFQO0FBQ0QsQ0FKRDs7QUFNQUgsS0FBS00sU0FBTCxHQUFpQjtBQUNmTCxRQUFNLG9CQUFVTSxNQUREO0FBRWZMLFFBQU0sb0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQU9DLElBQVAsQ0FBWVgsS0FBWixDQUFoQjtBQUZTLENBQWpCO0FBSUFDLEtBQUtXLFlBQUwsR0FBb0I7QUFDbEJWLFFBQU07QUFEWSxDQUFwQjs7a0JBSWVELEkiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC9jb21wb25lbnRzL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4uL2ljb25zJztcblxuY29uc3QgSWNvbiA9ICh7IGZpbGwsIHR5cGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgaWNvbiA9IGljb25zW3R5cGVdO1xuXG4gIHJldHVybiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGljb24oZmlsbCkgfX0gey4uLnByb3BzfSAvPjtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoaWNvbnMpKSxcbn07XG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsbDogJ3doaXRlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0=
