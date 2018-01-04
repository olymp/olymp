'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympRouter = require('olymp-router');

var _reactFela = require('react-fela');

var _withContainer = require('./with-container');

var _withContainer2 = _interopRequireDefault(_withContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Body = (0, _reactFela.createComponent)(function (_ref) {
  var affix = _ref.affix;
  return _extends({}, !affix ? {
    hasFlex: {
      flex: '1 1 auto'
    }
  } : {
    hasFlex: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column'
    },
    height: '100%',
    overflowY: 'auto',
    ifSmallDown: {
      '-webkit-overflow-scrolling': 'touch',
      overflowY: 'scroll'
    }
  });
}, function (props) {
  return _react2.default.createElement(
    _olympRouter.ScrollToTop,
    null,
    _react2.default.createElement(_withContainer2.default, props)
  );
}, function (_ref2) {
  var affix = _ref2.affix,
      p = _objectWithoutProperties(_ref2, ['affix']);

  return Object.keys(p);
});
Body.displayName = 'Layout.Body';
Body.propTypes = {
  container: _propTypes2.default.bool,
  affix: _propTypes2.default.bool
};
Body.defaultProps = {
  container: false,
  affix: false
};

exports.default = Body;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGF5b3V0L2JvZHkuZXM2Il0sIm5hbWVzIjpbIkJvZHkiLCJhZmZpeCIsImhhc0ZsZXgiLCJmbGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJpZlNtYWxsRG93biIsInByb3BzIiwicCIsIk9iamVjdCIsImtleXMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImNvbnRhaW5lciIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0NBQ1g7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDTSxDQUFDQSxLQUFELEdBQ0E7QUFDQUMsYUFBUztBQUNQQyxZQUFNO0FBREM7QUFEVCxHQURBLEdBTUE7QUFDQUQsYUFBUztBQUNQQyxZQUFNLFVBREM7QUFFUEMsZUFBUyxNQUZGO0FBR1BDLHFCQUFlO0FBSFIsS0FEVDtBQU1BQyxZQUFRLE1BTlI7QUFPQUMsZUFBVyxNQVBYO0FBUUFDLGlCQUFhO0FBQ1gsb0NBQThCLE9BRG5CO0FBRVhELGlCQUFXO0FBRkE7QUFSYixHQVBOO0FBQUEsQ0FEVyxFQXNCWDtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsMkRBQW1CRSxLQUFuQjtBQURGLEdBREY7QUFBQSxDQXRCVyxFQTJCWDtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQWFTLENBQWI7O0FBQUEsU0FBcUJDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFyQjtBQUFBLENBM0JXLENBQWI7QUE2QkFWLEtBQUthLFdBQUwsR0FBbUIsYUFBbkI7QUFDQWIsS0FBS2MsU0FBTCxHQUFpQjtBQUNmQyxhQUFXLG9CQUFVQyxJQUROO0FBRWZmLFNBQU8sb0JBQVVlO0FBRkYsQ0FBakI7QUFJQWhCLEtBQUtpQixZQUFMLEdBQW9CO0FBQ2xCRixhQUFXLEtBRE87QUFFbEJkLFNBQU87QUFGVyxDQUFwQjs7a0JBS2VELEkiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9sYXlvdXQvYm9keS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Ub3AgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgV2l0aENvbnRhaW5lciBmcm9tICcuL3dpdGgtY29udGFpbmVyJztcblxuY29uc3QgQm9keSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgYWZmaXggfSkgPT4gKHtcbiAgICAuLi4oIWFmZml4XG4gICAgICA/IHtcbiAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIGlmU21hbGxEb3duOiB7XG4gICAgICAgICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJyxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gIH0pLFxuICBwcm9wcyA9PiAoXG4gICAgPFNjcm9sbFRvVG9wPlxuICAgICAgPFdpdGhDb250YWluZXIgey4uLnByb3BzfSAvPlxuICAgIDwvU2Nyb2xsVG9Ub3A+XG4gICksXG4gICh7IGFmZml4LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbkJvZHkuZGlzcGxheU5hbWUgPSAnTGF5b3V0LkJvZHknO1xuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFmZml4OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Cb2R5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgYWZmaXg6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdfQ==
