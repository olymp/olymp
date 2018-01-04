"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState, type) {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.marks.some(function (mark) {
      return mark.type === type;
    });
  } catch (err) {}
  return false;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3V0aWxzL2hhcy1tYXJrLmVzNiJdLCJuYW1lcyI6WyJlZGl0b3JTdGF0ZSIsInR5cGUiLCJtYXJrcyIsInNvbWUiLCJtYXJrIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsV0FBRCxFQUFjQyxJQUFkLEVBQXVCO0FBQ3BDLE1BQUk7QUFDRixRQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPQSxZQUFZRSxLQUFaLENBQWtCQyxJQUFsQixDQUF1QjtBQUFBLGFBQVFDLEtBQUtILElBQUwsS0FBY0EsSUFBdEI7QUFBQSxLQUF2QixDQUFQO0FBQ0QsR0FMRCxDQUtFLE9BQU9JLEdBQVAsRUFBWSxDQUFFO0FBQ2hCLFNBQU8sS0FBUDtBQUNELEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvdXRpbHMvaGFzLW1hcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZWRpdG9yU3RhdGUsIHR5cGUpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWVkaXRvclN0YXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGVkaXRvclN0YXRlLm1hcmtzLnNvbWUobWFyayA9PiBtYXJrLnR5cGUgPT09IHR5cGUpO1xuICB9IGNhdGNoIChlcnIpIHt9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iXX0=
