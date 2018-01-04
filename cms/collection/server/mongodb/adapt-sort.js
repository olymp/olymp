'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj) {
  if (obj.skipSort) {
    return {};
  }
  delete obj.skipSort;
  Object.keys(obj).forEach(function (key) {
    obj[key] = obj[key] === 'DESC' ? -1 : 1;
  });
  return obj;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9tb25nb2RiL2FkYXB0LXNvcnQuZXM2Il0sIm5hbWVzIjpbIm9iaiIsInNraXBTb3J0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxHQUFELEVBQVM7QUFDdEIsTUFBSUEsSUFBSUMsUUFBUixFQUFrQjtBQUNoQixXQUFPLEVBQVA7QUFDRDtBQUNELFNBQU9ELElBQUlDLFFBQVg7QUFDQUMsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQVM7QUFDaENMLFFBQUlLLEdBQUosSUFBV0wsSUFBSUssR0FBSixNQUFhLE1BQWIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQixDQUF0QztBQUNELEdBRkQ7QUFHQSxTQUFPTCxHQUFQO0FBQ0QsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9zZXJ2ZXIvbW9uZ29kYi9hZGFwdC1zb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKG9iaikgPT4ge1xuICBpZiAob2JqLnNraXBTb3J0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGRlbGV0ZSBvYmouc2tpcFNvcnQ7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgb2JqW2tleV0gPSBvYmpba2V5XSA9PT0gJ0RFU0MnID8gLTEgOiAxO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn07XG4iXX0=
