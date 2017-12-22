function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

var Layout = createComponent(function (_ref) {
  var fullHeight = _ref.fullHeight,
      affix = _ref.affix;
  return {};
}, function (_ref2) {
  var children = _ref2.children,
      affix = _ref2.affix,
      rest = _objectWithoutProperties(_ref2, ['children', 'affix']);

  return React.createElement(
    'div',
    rest,
    Children.map(children, function (child) {
      return child && cloneElement(child, { affix: affix });
    })
  );
}, function (_ref3) {
  var fullHeight = _ref3.fullHeight,
      p = _objectWithoutProperties(_ref3, ['fullHeight']);

  return Object.keys(p);
});
Layout.displayName = 'Layout';
Layout.propTypes = {
  fullHeight: PropTypes.bool,
  affix: PropTypes.bool
};
Layout.defaultProps = {
  fullHeight: false,
  affix: false
};

export default Layout;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2xheW91dC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIkxheW91dCIsImZ1bGxIZWlnaHQiLCJhZmZpeCIsImNoaWxkcmVuIiwicmVzdCIsIm1hcCIsImNoaWxkIiwicCIsIk9iamVjdCIsImtleXMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsU0FBU0QsZ0JBQ2I7QUFBQSxNQUFHRSxVQUFILFFBQUdBLFVBQUg7QUFBQSxNQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxTQUE0QixFQUE1QjtBQUFBLENBRGEsRUFFYjtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFELEtBQWIsU0FBYUEsS0FBYjtBQUFBLE1BQXVCRSxJQUF2Qjs7QUFBQSxTQUNFO0FBQUE7QUFBU0EsUUFBVDtBQUNHUixhQUFTUyxHQUFULENBQWFGLFFBQWIsRUFBdUI7QUFBQSxhQUFTRyxTQUFTVCxhQUFhUyxLQUFiLEVBQW9CLEVBQUVKLFlBQUYsRUFBcEIsQ0FBbEI7QUFBQSxLQUF2QjtBQURILEdBREY7QUFBQSxDQUZhLEVBT2I7QUFBQSxNQUFHRCxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFrQk0sQ0FBbEI7O0FBQUEsU0FBMEJDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUExQjtBQUFBLENBUGEsQ0FBZjtBQVNBUCxPQUFPVSxXQUFQLEdBQXFCLFFBQXJCO0FBQ0FWLE9BQU9XLFNBQVAsR0FBbUI7QUFDakJWLGNBQVlILFVBQVVjLElBREw7QUFFakJWLFNBQU9KLFVBQVVjO0FBRkEsQ0FBbkI7QUFJQVosT0FBT2EsWUFBUCxHQUFzQjtBQUNwQlosY0FBWSxLQURRO0FBRXBCQyxTQUFPO0FBRmEsQ0FBdEI7O0FBS0EsZUFBZUYsTUFBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2xheW91dC9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgTGF5b3V0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBmdWxsSGVpZ2h0LCBhZmZpeCB9KSA9PiAoe30pLFxuICAoeyBjaGlsZHJlbiwgYWZmaXgsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgey4uLnJlc3R9PlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gY2hpbGQgJiYgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGFmZml4IH0pKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgKHsgZnVsbEhlaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5MYXlvdXQuZGlzcGxheU5hbWUgPSAnTGF5b3V0JztcbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGZ1bGxIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBhZmZpeDogUHJvcFR5cGVzLmJvb2wsXG59O1xuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZnVsbEhlaWdodDogZmFsc2UsXG4gIGFmZml4OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ==
