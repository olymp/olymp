export default (function (editorState, type) {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.blocks.some(function (node) {
      return node.type === type || node.type.indexOf(type + "-") === 0;
    });
  } catch (err) {}
  return false;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3V0aWxzL2hhcy1ibG9jay5lczYiXSwibmFtZXMiOlsiZWRpdG9yU3RhdGUiLCJ0eXBlIiwiYmxvY2tzIiwic29tZSIsIm5vZGUiLCJpbmRleE9mIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZSxVQUFDQSxXQUFELEVBQWNDLElBQWQsRUFBdUI7QUFDcEMsTUFBSTtBQUNGLFFBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQixhQUFPLElBQVA7QUFDRDtBQUNELFdBQU9BLFlBQVlFLE1BQVosQ0FBbUJDLElBQW5CLENBQ0w7QUFBQSxhQUFRQyxLQUFLSCxJQUFMLEtBQWNBLElBQWQsSUFBc0JHLEtBQUtILElBQUwsQ0FBVUksT0FBVixDQUFxQkosSUFBckIsWUFBa0MsQ0FBaEU7QUFBQSxLQURLLENBQVA7QUFHRCxHQVBELENBT0UsT0FBT0ssR0FBUCxFQUFZLENBQUU7QUFDaEIsU0FBTyxLQUFQO0FBQ0QsQ0FWRCIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS91dGlscy9oYXMtYmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZWRpdG9yU3RhdGUsIHR5cGUpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWVkaXRvclN0YXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGVkaXRvclN0YXRlLmJsb2Nrcy5zb21lKFxuICAgICAgbm9kZSA9PiBub2RlLnR5cGUgPT09IHR5cGUgfHwgbm9kZS50eXBlLmluZGV4T2YoYCR7dHlwZX0tYCkgPT09IDAsXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuICByZXR1cm4gZmFsc2U7XG59O1xuIl19