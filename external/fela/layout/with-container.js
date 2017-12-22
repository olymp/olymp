function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Container from '../container';

export default (function (_ref) {
  var container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['container']);

  return container ? React.createElement(Container, rest) : React.createElement('div', rest);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L3dpdGgtY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsInJlc3QiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7O0FBRUEsZ0JBQWU7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFpQkMsSUFBakI7O0FBQUEsU0FDYkQsWUFBWSxvQkFBQyxTQUFELEVBQWVDLElBQWYsQ0FBWixHQUFzQywyQkFBU0EsSUFBVCxDQUR6QjtBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9sYXlvdXQvd2l0aC1jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb250YWluZXIsIC4uLnJlc3QgfSkgPT5cbiAgY29udGFpbmVyID8gPENvbnRhaW5lciB7Li4ucmVzdH0gLz4gOiA8ZGl2IHsuLi5yZXN0fSAvPjtcbiJdfQ==
