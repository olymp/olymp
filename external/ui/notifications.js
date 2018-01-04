'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onEnterOk = exports.onEnterFocus = exports.layout = exports.onSuccess = exports.onError = undefined;

var _message4 = require('antd/lib/message');

var _message5 = _interopRequireDefault(_message4);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

require('antd/lib/message/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onError = exports.onError = function onError(err) {
  var description = void 0;
  if (err && err.message) {
    description = err.message;
    _message5.default.error(description, 20);
  } else if (err && (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
    Object.keys(err).forEach(function (key) {
      return _message5.default.error(err[key].errors.map(function (e) {
        return e.message;
      }).join('\n'));
    }, 20);
  }
};
var onSuccess = exports.onSuccess = function onSuccess(text, description) {
  _message5.default.success(description || text);
};
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL25vdGlmaWNhdGlvbnMuZXM2Il0sIm5hbWVzIjpbIm9uRXJyb3IiLCJkZXNjcmlwdGlvbiIsImVyciIsIm1lc3NhZ2UiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXJyb3JzIiwibWFwIiwiZSIsImpvaW4iLCJvblN1Y2Nlc3MiLCJ0ZXh0Iiwic3VjY2VzcyIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkVudGVyRm9jdXMiLCJyZWYiLCJyZWZzIiwiaW5wdXQiLCJmb2N1cyIsIm9uRW50ZXJPayIsIm9uT2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsNEJBQVUsU0FBVkEsT0FBVSxNQUFPO0FBQzVCLE1BQUlDLG9CQUFKO0FBQ0EsTUFBSUMsT0FBT0EsSUFBSUMsT0FBZixFQUF3QjtBQUN0QkYsa0JBQWNDLElBQUlDLE9BQWxCO0FBQ0Esc0JBQVFDLEtBQVIsQ0FBY0gsV0FBZCxFQUEyQixFQUEzQjtBQUNELEdBSEQsTUFHTyxJQUFJQyxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUExQixFQUFvQztBQUN6Q0csV0FBT0MsSUFBUCxDQUFZSixHQUFaLEVBQWlCSyxPQUFqQixDQUNFO0FBQUEsYUFBTyxrQkFBUUgsS0FBUixDQUFjRixJQUFJTSxHQUFKLEVBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLENBQW9CO0FBQUEsZUFBS0MsRUFBRVIsT0FBUDtBQUFBLE9BQXBCLEVBQW9DUyxJQUFwQyxDQUF5QyxJQUF6QyxDQUFkLENBQVA7QUFBQSxLQURGLEVBRUUsRUFGRjtBQUlEO0FBQ0YsQ0FYTTtBQVlBLElBQU1DLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPYixXQUFQLEVBQXVCO0FBQzlDLG9CQUFRYyxPQUFSLENBQWdCZCxlQUFlYSxJQUEvQjtBQUNELENBRk07QUFHQSxJQUFNRSwwQkFBUyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sQ0FBUixFQUFaLEVBQXlCQyxZQUFZLEVBQUVELE1BQU0sRUFBUixFQUFyQyxFQUFmO0FBQ0EsSUFBTUUsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU8sYUFBSztBQUN0QyxRQUFJVCxFQUFFSCxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQixhQUFPYSxTQUFTQSxNQUFNQyxJQUFmLElBQXVCRCxNQUFNQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLEVBQTlCO0FBQ0Q7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQUwyQjtBQUFBLENBQXJCO0FBTUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVEsYUFBSztBQUNwQyxRQUFJZCxFQUFFSCxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQmtCO0FBQ0Q7QUFDRixHQUp3QjtBQUFBLENBQWxCIiwiZmlsZSI6ImV4dGVybmFsL3VpL25vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBjb25zdCBvbkVycm9yID0gZXJyID0+IHtcbiAgbGV0IGRlc2NyaXB0aW9uO1xuICBpZiAoZXJyICYmIGVyci5tZXNzYWdlKSB7XG4gICAgZGVzY3JpcHRpb24gPSBlcnIubWVzc2FnZTtcbiAgICBtZXNzYWdlLmVycm9yKGRlc2NyaXB0aW9uLCAyMCk7XG4gIH0gZWxzZSBpZiAoZXJyICYmIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMoZXJyKS5mb3JFYWNoKFxuICAgICAga2V5ID0+IG1lc3NhZ2UuZXJyb3IoZXJyW2tleV0uZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkuam9pbignXFxuJykpLFxuICAgICAgMjAsXG4gICAgKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBvblN1Y2Nlc3MgPSAodGV4dCwgZGVzY3JpcHRpb24pID0+IHtcbiAgbWVzc2FnZS5zdWNjZXNzKGRlc2NyaXB0aW9uIHx8IHRleHQpO1xufTtcbmV4cG9ydCBjb25zdCBsYXlvdXQgPSB7IGxhYmVsQ29sOiB7IHNwYW46IDcgfSwgd3JhcHBlckNvbDogeyBzcGFuOiAxNyB9IH07XG5leHBvcnQgY29uc3Qgb25FbnRlckZvY3VzID0gcmVmID0+IGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICByZXR1cm4gcmVmKCkgJiYgcmVmKCkucmVmcyAmJiByZWYoKS5yZWZzLmlucHV0LmZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBvbkVudGVyT2sgPSBvbk9rID0+IGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBvbk9rKCk7XG4gIH1cbn07XG4iXX0=
