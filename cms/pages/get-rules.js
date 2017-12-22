export default (function () {
  var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var label = arguments[1];
  return names.map(function (key) {
    return rules[key];
  }).filter(function (x) {
    return x;
  }).map(function (x) {
    return x({ label: label });
  });
});

var rules = {
  required: function required(_ref) {
    var label = _ref.label;
    return {
      required: true,
      message: "'" + label + "' erforderlich"
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2dldC1ydWxlcy5lczYiXSwibmFtZXMiOlsibmFtZXMiLCJsYWJlbCIsIm1hcCIsInJ1bGVzIiwia2V5IiwiZmlsdGVyIiwieCIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWU7QUFBQSxNQUFDQSxLQUFELHVFQUFTLEVBQVQ7QUFBQSxNQUFhQyxLQUFiO0FBQUEsU0FDYkQsTUFBTUUsR0FBTixDQUFVO0FBQUEsV0FBT0MsTUFBTUMsR0FBTixDQUFQO0FBQUEsR0FBVixFQUE2QkMsTUFBN0IsQ0FBb0M7QUFBQSxXQUFLQyxDQUFMO0FBQUEsR0FBcEMsRUFBNENKLEdBQTVDLENBQWdEO0FBQUEsV0FBS0ksRUFBRSxFQUFFTCxZQUFGLEVBQUYsQ0FBTDtBQUFBLEdBQWhELENBRGE7QUFBQSxDQUFmOztBQUdBLElBQU1FLFFBQVE7QUFDWkksWUFBVTtBQUFBLFFBQUdOLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3hCTSxnQkFBVSxJQURjO0FBRXhCQyxxQkFBYVAsS0FBYjtBQUZ3QixLQUFoQjtBQUFBO0FBREUsQ0FBZCIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9nZXQtcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAobmFtZXMgPSBbXSwgbGFiZWwpID0+XG4gIG5hbWVzLm1hcChrZXkgPT4gcnVsZXNba2V5XSkuZmlsdGVyKHggPT4geCkubWFwKHggPT4geCh7IGxhYmVsIH0pKTtcblxuY29uc3QgcnVsZXMgPSB7XG4gIHJlcXVpcmVkOiAoeyBsYWJlbCB9KSA9PiAoe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGAnJHtsYWJlbH0nIGVyZm9yZGVybGljaGAsXG4gIH0pLFxufTtcbiJdfQ==
