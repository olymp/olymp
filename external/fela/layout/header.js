'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _withContainer = require('./with-container');

var _withContainer2 = _interopRequireDefault(_withContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = (0, _reactFela.createComponent)(function () {
  return {
    flex: 'none'
  };
}, _withContainer2.default, function (_ref) {
  var affix = _ref.affix,
      p = _objectWithoutProperties(_ref, ['affix']);

  return Object.keys(p);
});
Header.displayName = 'Layout.Header';
Header.propTypes = {
  container: _propTypes2.default.bool
};
Header.defaultProps = {
  container: false
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGF5b3V0L2hlYWRlci5lczYiXSwibmFtZXMiOlsiSGVhZGVyIiwiZmxleCIsImFmZml4IiwicCIsIk9iamVjdCIsImtleXMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImNvbnRhaW5lciIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxnQ0FDYjtBQUFBLFNBQU87QUFDTEMsVUFBTTtBQURELEdBQVA7QUFBQSxDQURhLDJCQUtiO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBYUMsQ0FBYjs7QUFBQSxTQUFxQkMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQXJCO0FBQUEsQ0FMYSxDQUFmO0FBT0FILE9BQU9NLFdBQVAsR0FBcUIsZUFBckI7QUFDQU4sT0FBT08sU0FBUCxHQUFtQjtBQUNqQkMsYUFBVyxvQkFBVUM7QUFESixDQUFuQjtBQUdBVCxPQUFPVSxZQUFQLEdBQXNCO0FBQ3BCRixhQUFXO0FBRFMsQ0FBdEI7O2tCQUllUixNIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbGF5b3V0L2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBXaXRoQ29udGFpbmVyIGZyb20gJy4vd2l0aC1jb250YWluZXInO1xuXG5jb25zdCBIZWFkZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgZmxleDogJ25vbmUnLFxuICB9KSxcbiAgV2l0aENvbnRhaW5lcixcbiAgKHsgYWZmaXgsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG5IZWFkZXIuZGlzcGxheU5hbWUgPSAnTGF5b3V0LkhlYWRlcic7XG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxufTtcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=
