"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var label = arguments[1];
  return names.map(function (key) {
    return rules[key];
  }).filter(function (x) {
    return x;
  }).map(function (x) {
    return x({ label: label });
  });
};

var rules = {
  required: function required(_ref) {
    var label = _ref.label;
    return {
      required: true,
      message: "'" + label + "' erforderlich"
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL3J1bGVzLmVzNiJdLCJuYW1lcyI6WyJuYW1lcyIsImxhYmVsIiwibWFwIiwicnVsZXMiLCJrZXkiLCJmaWx0ZXIiLCJ4IiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWU7QUFBQSxNQUFDQSxLQUFELHVFQUFTLEVBQVQ7QUFBQSxNQUFhQyxLQUFiO0FBQUEsU0FDYkQsTUFBTUUsR0FBTixDQUFVO0FBQUEsV0FBT0MsTUFBTUMsR0FBTixDQUFQO0FBQUEsR0FBVixFQUE2QkMsTUFBN0IsQ0FBb0M7QUFBQSxXQUFLQyxDQUFMO0FBQUEsR0FBcEMsRUFBNENKLEdBQTVDLENBQWdEO0FBQUEsV0FBS0ksRUFBRSxFQUFFTCxZQUFGLEVBQUYsQ0FBTDtBQUFBLEdBQWhELENBRGE7QUFBQSxDOztBQUdmLElBQU1FLFFBQVE7QUFDWkksWUFBVTtBQUFBLFFBQUdOLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3hCTSxnQkFBVSxJQURjO0FBRXhCQyxxQkFBYVAsS0FBYjtBQUZ3QixLQUFoQjtBQUFBO0FBREUsQ0FBZCIsImZpbGUiOiJleHRlcm5hbC91aS9ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChuYW1lcyA9IFtdLCBsYWJlbCkgPT5cbiAgbmFtZXMubWFwKGtleSA9PiBydWxlc1trZXldKS5maWx0ZXIoeCA9PiB4KS5tYXAoeCA9PiB4KHsgbGFiZWwgfSkpO1xuXG5jb25zdCBydWxlcyA9IHtcbiAgcmVxdWlyZWQ6ICh7IGxhYmVsIH0pID0+ICh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWVzc2FnZTogYCcke2xhYmVsfScgZXJmb3JkZXJsaWNoYCxcbiAgfSksXG59O1xuIl19
