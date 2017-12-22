import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export var onError = function onError(err) {
  var description = void 0;
  if (err && err.message) {
    description = err.message;
  } else if (err && (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
    description = Object.keys(err).map(function (key) {
      return err[key].errors.map(function (e) {
        return e.message;
      }).join('\n');
    }).join('\n');
  }
  _message.error(description);
};

export var onSuccess = function onSuccess(m) {
  _message2.success(m);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL21lc3NhZ2UuZXM2Il0sIm5hbWVzIjpbIm9uRXJyb3IiLCJkZXNjcmlwdGlvbiIsImVyciIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZXJyb3JzIiwiZSIsImpvaW4iLCJlcnJvciIsIm9uU3VjY2VzcyIsInN1Y2Nlc3MiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsT0FBTyxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsTUFBTztBQUM1QixNQUFJQyxvQkFBSjtBQUNBLE1BQUlDLE9BQU9BLElBQUlDLE9BQWYsRUFBd0I7QUFDdEJGLGtCQUFjQyxJQUFJQyxPQUFsQjtBQUNELEdBRkQsTUFFTyxJQUFJRCxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUExQixFQUFvQztBQUN6Q0Qsa0JBQWNHLE9BQU9DLElBQVAsQ0FBWUgsR0FBWixFQUNYSSxHQURXLENBQ1A7QUFBQSxhQUFPSixJQUFJSyxHQUFKLEVBQVNDLE1BQVQsQ0FBZ0JGLEdBQWhCLENBQW9CO0FBQUEsZUFBS0csRUFBRU4sT0FBUDtBQUFBLE9BQXBCLEVBQW9DTyxJQUFwQyxDQUF5QyxJQUF6QyxDQUFQO0FBQUEsS0FETyxFQUVYQSxJQUZXLENBRU4sSUFGTSxDQUFkO0FBR0Q7QUFDRCxXQUFRQyxLQUFSLENBQWNWLFdBQWQ7QUFDRCxDQVZNOztBQVlQLE9BQU8sSUFBTVcsWUFBWSxTQUFaQSxTQUFZLElBQUs7QUFDNUIsWUFBUUMsT0FBUixDQUFnQkMsQ0FBaEI7QUFDRCxDQUZNIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL21lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBjb25zdCBvbkVycm9yID0gZXJyID0+IHtcbiAgbGV0IGRlc2NyaXB0aW9uO1xuICBpZiAoZXJyICYmIGVyci5tZXNzYWdlKSB7XG4gICAgZGVzY3JpcHRpb24gPSBlcnIubWVzc2FnZTtcbiAgfSBlbHNlIGlmIChlcnIgJiYgdHlwZW9mIGVyciA9PT0gJ29iamVjdCcpIHtcbiAgICBkZXNjcmlwdGlvbiA9IE9iamVjdC5rZXlzKGVycilcbiAgICAgIC5tYXAoa2V5ID0+IGVycltrZXldLmVycm9ycy5tYXAoZSA9PiBlLm1lc3NhZ2UpLmpvaW4oJ1xcbicpKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICB9XG4gIG1lc3NhZ2UuZXJyb3IoZGVzY3JpcHRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uU3VjY2VzcyA9IG0gPT4ge1xuICBtZXNzYWdlLnN1Y2Nlc3MobSk7XG59O1xuIl19
