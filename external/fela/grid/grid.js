function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

var Grid = createComponent(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height,
      marginX = _ref.marginX;
  return {
    height: height,
    minWidth: '100%',
    marginX: marginX || '-' + theme.space2,
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      size = _ref2.size,
      height = _ref2.height,
      marginX = _ref2.marginX,
      padding = _ref2.padding,
      rest = _objectWithoutProperties(_ref2, ['children', 'size', 'height', 'marginX', 'padding']);

  return React.createElement(
    'div',
    rest,
    Children.map(children, function (child) {
      return child ? cloneElement(child, { gridSize: size }) : child;
    })
  );
}, function (p) {
  return Object.keys(p);
});
Grid.propTypes = {
  /** Defines the number of columns of the grid system */
  size: PropTypes.number
};
Grid.defaultProps = {
  size: 12
};
Grid.displayName = 'Grid';

export default Grid;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvZ3JpZC9ncmlkLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiR3JpZCIsInRoZW1lIiwiaGVpZ2h0IiwibWFyZ2luWCIsIm1pbldpZHRoIiwic3BhY2UyIiwib25BZnRlciIsImNvbnRlbnQiLCJjbGVhciIsImRpc3BsYXkiLCJ2aXNpYmlsaXR5IiwiY2hpbGRyZW4iLCJzaXplIiwicGFkZGluZyIsInJlc3QiLCJtYXAiLCJjaGlsZCIsImdyaWRTaXplIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsWUFBMUIsUUFBOEMsT0FBOUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxJQUFNQyxPQUFPRCxnQkFDWDtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLE1BQWtCQyxPQUFsQixRQUFrQkEsT0FBbEI7QUFBQSxTQUFpQztBQUMvQkQsa0JBRCtCO0FBRS9CRSxjQUFVLE1BRnFCO0FBRy9CRCxhQUFTQSxpQkFBZUYsTUFBTUksTUFIQztBQUkvQkMsYUFBUztBQUNQQyxlQUFTLElBREY7QUFFUEMsYUFBTyxNQUZBO0FBR1BDLGVBQVMsT0FIRjtBQUlQQyxrQkFBWSxRQUpMO0FBS1BSLGNBQVE7QUFMRDtBQUpzQixHQUFqQztBQUFBLENBRFcsRUFhWDtBQUFBLE1BQUdTLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLE1BQW1CVixNQUFuQixTQUFtQkEsTUFBbkI7QUFBQSxNQUEyQkMsT0FBM0IsU0FBMkJBLE9BQTNCO0FBQUEsTUFBb0NVLE9BQXBDLFNBQW9DQSxPQUFwQztBQUFBLE1BQWdEQyxJQUFoRDs7QUFBQSxTQUNFO0FBQUE7QUFBU0EsUUFBVDtBQUNHbEIsYUFBU21CLEdBQVQsQ0FBYUosUUFBYixFQUF1QjtBQUFBLGFBQVVLLFFBQVFuQixhQUFhbUIsS0FBYixFQUFvQixFQUFFQyxVQUFVTCxJQUFaLEVBQXBCLENBQVIsR0FBa0RJLEtBQTVEO0FBQUEsS0FBdkI7QUFESCxHQURGO0FBQUEsQ0FiVyxFQWtCWDtBQUFBLFNBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FsQlcsQ0FBYjtBQW9CQXBCLEtBQUtxQixTQUFMLEdBQWlCO0FBQ2Y7QUFDQVQsUUFBTWQsVUFBVXdCO0FBRkQsQ0FBakI7QUFJQXRCLEtBQUt1QixZQUFMLEdBQW9CO0FBQ2xCWCxRQUFNO0FBRFksQ0FBcEI7QUFHQVosS0FBS3dCLFdBQUwsR0FBbUIsTUFBbkI7O0FBRUEsZUFBZXhCLElBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9ncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgR3JpZCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGhlaWdodCwgbWFyZ2luWCB9KSA9PiAoe1xuICAgIGhlaWdodCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblg6IG1hcmdpblggfHwgYC0ke3RoZW1lLnNwYWNlMn1gLFxuICAgIG9uQWZ0ZXI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBzaXplLCBoZWlnaHQsIG1hcmdpblgsIHBhZGRpbmcsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgey4uLnJlc3R9PlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gKGNoaWxkID8gY2xvbmVFbGVtZW50KGNoaWxkLCB7IGdyaWRTaXplOiBzaXplIH0pIDogY2hpbGQpKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgLyoqIERlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBncmlkIHN5c3RlbSAqL1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAxMixcbn07XG5HcmlkLmRpc3BsYXlOYW1lID0gJ0dyaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIl19
