'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

require('antd/lib/spin/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref3 = _react2.default.createElement(_spin2.default, null);

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      loading = _ref.loading;
  return loading && {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: theme.dark3,
    '> div': {
      center: true
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      loading = _ref2.loading,
      p = _objectWithoutProperties(_ref2, ['className', 'loading']);

  return _react2.default.createElement(
    'div',
    { className: className },
    loading && _ref3
  );
}, ['loading']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvbG9hZGVyLmVzNiJdLCJuYW1lcyI6WyJ0aGVtZSIsImxvYWRpbmciLCJjb250ZW50IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXJrMyIsImNlbnRlciIsImNsYXNzTmFtZSIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7OztZQW1Ca0IsbUQ7O2tCQWpCSCxnQ0FDYjtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLFNBQ0VBLFdBQVc7QUFDVEMsYUFBUyxJQURBO0FBRVRDLGNBQVUsVUFGRDtBQUdUQyxTQUFLLENBSEk7QUFJVEMsV0FBTyxDQUpFO0FBS1RDLFlBQVEsQ0FMQztBQU1UQyxVQUFNLENBTkc7QUFPVEMsWUFBUSxDQVBDO0FBUVRDLHFCQUFpQlQsTUFBTVUsS0FSZDtBQVNULGFBQVM7QUFDUEMsY0FBUTtBQUREO0FBVEEsR0FEYjtBQUFBLENBRGEsRUFlYjtBQUFBLE1BQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNYLE9BQWQsU0FBY0EsT0FBZDtBQUFBLE1BQTBCWSxDQUExQjs7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdELFNBQWhCO0FBQ0dYO0FBREgsR0FERjtBQUFBLENBZmEsRUFtQmIsQ0FBQyxTQUFELENBbkJhLEMiLCJmaWxlIjoiY21zL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxvYWRpbmcgfSkgPT5cbiAgICBsb2FkaW5nICYmIHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICAgICc+IGRpdic6IHtcbiAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIC4uLnAgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtsb2FkaW5nICYmIDxTcGluIC8+fVxuICAgIDwvZGl2PixcbiAgWydsb2FkaW5nJ11cbik7XG4iXX0=
