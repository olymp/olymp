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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9nZXQtcnVsZXMuZXM2Il0sIm5hbWVzIjpbIm5hbWVzIiwibGFiZWwiLCJtYXAiLCJydWxlcyIsImtleSIsImZpbHRlciIsIngiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZTtBQUFBLE1BQUNBLEtBQUQsdUVBQVMsRUFBVDtBQUFBLE1BQWFDLEtBQWI7QUFBQSxTQUNiRCxNQUFNRSxHQUFOLENBQVU7QUFBQSxXQUFPQyxNQUFNQyxHQUFOLENBQVA7QUFBQSxHQUFWLEVBQTZCQyxNQUE3QixDQUFvQztBQUFBLFdBQUtDLENBQUw7QUFBQSxHQUFwQyxFQUE0Q0osR0FBNUMsQ0FBZ0Q7QUFBQSxXQUFLSSxFQUFFLEVBQUVMLFlBQUYsRUFBRixDQUFMO0FBQUEsR0FBaEQsQ0FEYTtBQUFBLEM7O0FBR2YsSUFBTUUsUUFBUTtBQUNaSSxZQUFVO0FBQUEsUUFBR04sS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDeEJNLGdCQUFVLElBRGM7QUFFeEJDLHFCQUFhUCxLQUFiO0FBRndCLEtBQWhCO0FBQUE7QUFERSxDQUFkIiwiZmlsZSI6ImNtcy9wYWdlcy9nZXQtcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAobmFtZXMgPSBbXSwgbGFiZWwpID0+XG4gIG5hbWVzLm1hcChrZXkgPT4gcnVsZXNba2V5XSkuZmlsdGVyKHggPT4geCkubWFwKHggPT4geCh7IGxhYmVsIH0pKTtcblxuY29uc3QgcnVsZXMgPSB7XG4gIHJlcXVpcmVkOiAoeyBsYWJlbCB9KSA9PiAoe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGAnJHtsYWJlbH0nIGVyZm9yZGVybGljaGAsXG4gIH0pLFxufTtcbiJdfQ==
