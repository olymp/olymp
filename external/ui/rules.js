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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3J1bGVzLmVzNiJdLCJuYW1lcyI6WyJuYW1lcyIsImxhYmVsIiwibWFwIiwicnVsZXMiLCJrZXkiLCJmaWx0ZXIiLCJ4IiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZTtBQUFBLE1BQUNBLEtBQUQsdUVBQVMsRUFBVDtBQUFBLE1BQWFDLEtBQWI7QUFBQSxTQUNiRCxNQUFNRSxHQUFOLENBQVU7QUFBQSxXQUFPQyxNQUFNQyxHQUFOLENBQVA7QUFBQSxHQUFWLEVBQTZCQyxNQUE3QixDQUFvQztBQUFBLFdBQUtDLENBQUw7QUFBQSxHQUFwQyxFQUE0Q0osR0FBNUMsQ0FBZ0Q7QUFBQSxXQUFLSSxFQUFFLEVBQUVMLFlBQUYsRUFBRixDQUFMO0FBQUEsR0FBaEQsQ0FEYTtBQUFBLENBQWY7O0FBR0EsSUFBTUUsUUFBUTtBQUNaSSxZQUFVO0FBQUEsUUFBR04sS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDeEJNLGdCQUFVLElBRGM7QUFFeEJDLHFCQUFhUCxLQUFiO0FBRndCLEtBQWhCO0FBQUE7QUFERSxDQUFkIiwiZmlsZSI6InBhY2thZ2VzL3VpL3J1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKG5hbWVzID0gW10sIGxhYmVsKSA9PlxuICBuYW1lcy5tYXAoa2V5ID0+IHJ1bGVzW2tleV0pLmZpbHRlcih4ID0+IHgpLm1hcCh4ID0+IHgoeyBsYWJlbCB9KSk7XG5cbmNvbnN0IHJ1bGVzID0ge1xuICByZXF1aXJlZDogKHsgbGFiZWwgfSkgPT4gKHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtZXNzYWdlOiBgJyR7bGFiZWx9JyBlcmZvcmRlcmxpY2hgLFxuICB9KSxcbn07XG4iXX0=
