function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

var Header = createComponent(function () {
  return {
    flex: 'none'
  };
}, WithContainer, function (_ref) {
  var affix = _ref.affix,
      p = _objectWithoutProperties(_ref, ['affix']);

  return Object.keys(p);
});
Header.displayName = 'Layout.Header';
Header.propTypes = {
  container: PropTypes.bool
};
Header.defaultProps = {
  container: false
};

export default Header;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2hlYWRlci5lczYiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiV2l0aENvbnRhaW5lciIsIkhlYWRlciIsImZsZXgiLCJhZmZpeCIsInAiLCJPYmplY3QiLCJrZXlzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJjb250YWluZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixrQkFBMUI7O0FBRUEsSUFBTUMsU0FBU0YsZ0JBQ2I7QUFBQSxTQUFPO0FBQ0xHLFVBQU07QUFERCxHQUFQO0FBQUEsQ0FEYSxFQUliRixhQUphLEVBS2I7QUFBQSxNQUFHRyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFhQyxDQUFiOztBQUFBLFNBQXFCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBckI7QUFBQSxDQUxhLENBQWY7QUFPQUgsT0FBT00sV0FBUCxHQUFxQixlQUFyQjtBQUNBTixPQUFPTyxTQUFQLEdBQW1CO0FBQ2pCQyxhQUFXWCxVQUFVWTtBQURKLENBQW5CO0FBR0FULE9BQU9VLFlBQVAsR0FBc0I7QUFDcEJGLGFBQVc7QUFEUyxDQUF0Qjs7QUFJQSxlQUFlUixNQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGF5b3V0L2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBXaXRoQ29udGFpbmVyIGZyb20gJy4vd2l0aC1jb250YWluZXInO1xuXG5jb25zdCBIZWFkZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgZmxleDogJ25vbmUnLFxuICB9KSxcbiAgV2l0aENvbnRhaW5lcixcbiAgKHsgYWZmaXgsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG5IZWFkZXIuZGlzcGxheU5hbWUgPSAnTGF5b3V0LkhlYWRlcic7XG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxufTtcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=
