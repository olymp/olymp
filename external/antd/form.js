'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var layout = exports.layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

var onEnterFocus = exports.onEnterFocus = function onEnterFocus(ref) {
  return function (e) {
    if (e.key === 'Enter') {
      return ref() && ref().refs && ref().refs.input.focus();
    }
    return false;
  };
};

var onEnterOk = exports.onEnterOk = function onEnterOk(onOk) {
  return function (e) {
    if (e.key === 'Enter') {
      onOk();
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2FudGQvZm9ybS5lczYiXSwibmFtZXMiOlsibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsIm9uRW50ZXJGb2N1cyIsImUiLCJrZXkiLCJyZWYiLCJyZWZzIiwiaW5wdXQiLCJmb2N1cyIsIm9uRW50ZXJPayIsIm9uT2siXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsMEJBQVMsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLENBQVIsRUFBWixFQUF5QkMsWUFBWSxFQUFFRCxNQUFNLEVBQVIsRUFBckMsRUFBZjs7QUFFQSxJQUFNRSxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FBTyxhQUFLO0FBQ3RDLFFBQUlDLEVBQUVDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCLGFBQU9DLFNBQVNBLE1BQU1DLElBQWYsSUFBdUJELE1BQU1DLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsRUFBOUI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBTDJCO0FBQUEsQ0FBckI7O0FBT0EsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVEsYUFBSztBQUNwQyxRQUFJTixFQUFFQyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQk07QUFDRDtBQUNGLEdBSndCO0FBQUEsQ0FBbEIiLCJmaWxlIjoiZXh0ZXJuYWwvYW50ZC9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxheW91dCA9IHsgbGFiZWxDb2w6IHsgc3BhbjogNyB9LCB3cmFwcGVyQ29sOiB7IHNwYW46IDE3IH0gfTtcblxuZXhwb3J0IGNvbnN0IG9uRW50ZXJGb2N1cyA9IHJlZiA9PiBlID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgcmV0dXJuIHJlZigpICYmIHJlZigpLnJlZnMgJiYgcmVmKCkucmVmcy5pbnB1dC5mb2N1cygpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkVudGVyT2sgPSBvbk9rID0+IGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBvbk9rKCk7XG4gIH1cbn07XG4iXX0=
