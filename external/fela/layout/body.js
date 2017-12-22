var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ScrollToTop } from 'olymp-router';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

var Body = createComponent(function (_ref) {
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
  return React.createElement(
    ScrollToTop,
    null,
    React.createElement(WithContainer, props)
  );
}, function (_ref2) {
  var affix = _ref2.affix,
      p = _objectWithoutProperties(_ref2, ['affix']);

  return Object.keys(p);
});
Body.displayName = 'Layout.Body';
Body.propTypes = {
  container: PropTypes.bool,
  affix: PropTypes.bool
};
Body.defaultProps = {
  container: false,
  affix: false
};

export default Body;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2JvZHkuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiU2Nyb2xsVG9Ub3AiLCJjcmVhdGVDb21wb25lbnQiLCJXaXRoQ29udGFpbmVyIiwiQm9keSIsImFmZml4IiwiaGFzRmxleCIsImZsZXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsIm92ZXJmbG93WSIsImlmU21hbGxEb3duIiwicHJvcHMiLCJwIiwiT2JqZWN0Iiwia2V5cyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiY29udGFpbmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixjQUE1QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGtCQUExQjs7QUFFQSxJQUFNQyxPQUFPRixnQkFDWDtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUNNLENBQUNBLEtBQUQsR0FDQTtBQUNBQyxhQUFTO0FBQ1BDLFlBQU07QUFEQztBQURULEdBREEsR0FNQTtBQUNBRCxhQUFTO0FBQ1BDLFlBQU0sVUFEQztBQUVQQyxlQUFTLE1BRkY7QUFHUEMscUJBQWU7QUFIUixLQURUO0FBTUFDLFlBQVEsTUFOUjtBQU9BQyxlQUFXLE1BUFg7QUFRQUMsaUJBQWE7QUFDWCxvQ0FBOEIsT0FEbkI7QUFFWEQsaUJBQVc7QUFGQTtBQVJiLEdBUE47QUFBQSxDQURXLEVBc0JYO0FBQUEsU0FDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHdCQUFDLGFBQUQsRUFBbUJFLEtBQW5CO0FBREYsR0FERjtBQUFBLENBdEJXLEVBMkJYO0FBQUEsTUFBR1IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBYVMsQ0FBYjs7QUFBQSxTQUFxQkMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQXJCO0FBQUEsQ0EzQlcsQ0FBYjtBQTZCQVYsS0FBS2EsV0FBTCxHQUFtQixhQUFuQjtBQUNBYixLQUFLYyxTQUFMLEdBQWlCO0FBQ2ZDLGFBQVduQixVQUFVb0IsSUFETjtBQUVmZixTQUFPTCxVQUFVb0I7QUFGRixDQUFqQjtBQUlBaEIsS0FBS2lCLFlBQUwsR0FBb0I7QUFDbEJGLGFBQVcsS0FETztBQUVsQmQsU0FBTztBQUZXLENBQXBCOztBQUtBLGVBQWVELElBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9sYXlvdXQvYm9keS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Ub3AgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgV2l0aENvbnRhaW5lciBmcm9tICcuL3dpdGgtY29udGFpbmVyJztcblxuY29uc3QgQm9keSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgYWZmaXggfSkgPT4gKHtcbiAgICAuLi4oIWFmZml4XG4gICAgICA/IHtcbiAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIGlmU21hbGxEb3duOiB7XG4gICAgICAgICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJyxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gIH0pLFxuICBwcm9wcyA9PiAoXG4gICAgPFNjcm9sbFRvVG9wPlxuICAgICAgPFdpdGhDb250YWluZXIgey4uLnByb3BzfSAvPlxuICAgIDwvU2Nyb2xsVG9Ub3A+XG4gICksXG4gICh7IGFmZml4LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbkJvZHkuZGlzcGxheU5hbWUgPSAnTGF5b3V0LkJvZHknO1xuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFmZml4OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Cb2R5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgYWZmaXg6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdfQ==
