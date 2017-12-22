import 'antd/lib/badge/style';
import _Badge from 'antd/lib/badge';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';

import { createComponent } from 'olymp-fela';

var Badge = createComponent(function (_ref) {
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
}, _Badge, function (_ref2) {
  var color = _ref2.color,
      p = _objectWithoutProperties(_ref2, ['color']);

  return Object.keys(p);
});
export { Badge };
Badge.defaultProps = {
  status: 'default'
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2JhZGdlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUNvbXBvbmVudCIsIkJhZGdlIiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkxlZnQiLCJwIiwiT2JqZWN0Iiwia2V5cyIsImRlZmF1bHRQcm9wcyIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQzs7QUFFQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVPLElBQU1DLFFBQVFELGdCQUNuQjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFNBQXVCO0FBQ3JCLG1DQUErQjtBQUM3QkMsdUJBQWlCRCxTQUFTRCxNQUFNQztBQURILEtBRFY7QUFJckIsZ0NBQTRCO0FBQzFCRSxrQkFBWTtBQURjO0FBSlAsR0FBdkI7QUFBQSxDQURtQixVQVVuQjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQWFHLENBQWI7O0FBQUEsU0FBcUJDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFyQjtBQUFBLENBVm1CLENBQWQ7O0FBWVBMLE1BQU1RLFlBQU4sR0FBcUI7QUFDbkJDLFVBQVE7QUFEVyxDQUFyQiIsImZpbGUiOiJwYWNrYWdlcy91aS9iYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSBhcyBBbnRCYWRnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBCYWRnZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGNvbG9yIH0pID0+ICh7XG4gICAgJz4gLmFudC1iYWRnZS1zdGF0dXMtZGVmYXVsdCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IgfHwgdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnPiAuYW50LWJhZGdlLXN0YXR1cy10ZXh0Jzoge1xuICAgICAgbWFyZ2luTGVmdDogNCxcbiAgICB9LFxuICB9KSxcbiAgQW50QmFkZ2UsXG4gICh7IGNvbG9yLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbkJhZGdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiAnZGVmYXVsdCcsXG59O1xuIl19
