'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

require('antd/lib/badge/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return {
    '> .ant-badge-status-default': {
      backgroundColor: color || theme.color
    },
    '> .ant-badge-status-text': {
      marginLeft: 4
    }
  };
}, _badge2.default, function (_ref2) {
  var color = _ref2.color,
      p = _objectWithoutProperties(_ref2, ['color']);

  return Object.keys(p);
});
exports.Badge = Badge;
Badge.defaultProps = {
  status: 'default'
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2JhZGdlLmVzNiJdLCJuYW1lcyI6WyJCYWRnZSIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwicCIsIk9iamVjdCIsImtleXMiLCJkZWZhdWx0UHJvcHMiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFFTyxJQUFNQSxRQUFRLGdDQUNuQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFNBQXVCO0FBQ3JCLG1DQUErQjtBQUM3QkMsdUJBQWlCRCxTQUFTRCxNQUFNQztBQURILEtBRFY7QUFJckIsZ0NBQTRCO0FBQzFCRSxrQkFBWTtBQURjO0FBSlAsR0FBdkI7QUFBQSxDQURtQixtQkFVbkI7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFhRyxDQUFiOztBQUFBLFNBQXFCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBckI7QUFBQSxDQVZtQixDQUFkOztBQVlQTCxNQUFNUSxZQUFOLEdBQXFCO0FBQ25CQyxVQUFRO0FBRFcsQ0FBckIiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvYmFkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UgYXMgQW50QmFkZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgY29uc3QgQmFkZ2UgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xvciB9KSA9PiAoe1xuICAgICc+IC5hbnQtYmFkZ2Utc3RhdHVzLWRlZmF1bHQnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIHx8IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJz4gLmFudC1iYWRnZS1zdGF0dXMtdGV4dCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDQsXG4gICAgfSxcbiAgfSksXG4gIEFudEJhZGdlLFxuICAoeyBjb2xvciwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5CYWRnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0YXR1czogJ2RlZmF1bHQnLFxufTtcbiJdfQ==
