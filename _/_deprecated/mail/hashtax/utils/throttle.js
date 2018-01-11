export default (function (limit) {
  if (!limit) limit = 1000;
  var _callback = null;
  return function (callback) {
    _callback = callback;
    setTimeout(function () {
      if (_callback === callback) {
        callback();
      }
    }, limit);
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC91dGlscy90aHJvdHRsZS5lczYiXSwibmFtZXMiOlsibGltaXQiLCJfY2FsbGJhY2siLCJjYWxsYmFjayIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFlLFVBQUNBLEtBQUQsRUFBVztBQUN4QixNQUFJLENBQUNBLEtBQUwsRUFBWUEsUUFBUSxJQUFSO0FBQ1osTUFBSUMsWUFBWSxJQUFoQjtBQUNBLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ25CRCxnQkFBWUMsUUFBWjtBQUNBQyxlQUFXLFlBQU07QUFDZixVQUFJRixjQUFjQyxRQUFsQixFQUE0QjtBQUMxQkE7QUFDRDtBQUNGLEtBSkQsRUFJR0YsS0FKSDtBQUtELEdBUEQ7QUFRRCxDQVhEIiwiZmlsZSI6InBhY2thZ2VzL21haWwvaGFzaHRheC91dGlscy90aHJvdHRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChsaW1pdCkgPT4ge1xuICBpZiAoIWxpbWl0KSBsaW1pdCA9IDEwMDA7XG4gIHZhciBfY2FsbGJhY2sgPSBudWxsO1xuICByZXR1cm4gKGNhbGxiYWNrKSA9PiB7XG4gICAgX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoX2NhbGxiYWNrID09PSBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIGxpbWl0KTtcbiAgfVxufVxuIl19
