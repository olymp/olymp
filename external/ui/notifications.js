import 'antd/lib/message/style';
import _message3 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export var onError = function onError(err) {
  var description = void 0;
  if (err && err.message) {
    description = err.message;
    _message.error(description, 20);
  } else if (err && (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
    Object.keys(err).forEach(function (key) {
      return _message2.error(err[key].errors.map(function (e) {
        return e.message;
      }).join('\n'));
    }, 20);
  }
};
export var onSuccess = function onSuccess(text, description) {
  _message3.success(description || text);
};
export var layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export var onEnterFocus = function onEnterFocus(ref) {
  return function (e) {
    if (e.key === 'Enter') {
      return ref() && ref().refs && ref().refs.input.focus();
    }
    return false;
  };
};
export var onEnterOk = function onEnterOk(onOk) {
  return function (e) {
    if (e.key === 'Enter') {
      onOk();
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL25vdGlmaWNhdGlvbnMuZXM2Il0sIm5hbWVzIjpbIm9uRXJyb3IiLCJkZXNjcmlwdGlvbiIsImVyciIsIm1lc3NhZ2UiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXJyb3JzIiwibWFwIiwiZSIsImpvaW4iLCJvblN1Y2Nlc3MiLCJ0ZXh0Iiwic3VjY2VzcyIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkVudGVyRm9jdXMiLCJyZWYiLCJyZWZzIiwiaW5wdXQiLCJmb2N1cyIsIm9uRW50ZXJPayIsIm9uT2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE9BQU8sSUFBTUEsVUFBVSxTQUFWQSxPQUFVLE1BQU87QUFDNUIsTUFBSUMsb0JBQUo7QUFDQSxNQUFJQyxPQUFPQSxJQUFJQyxPQUFmLEVBQXdCO0FBQ3RCRixrQkFBY0MsSUFBSUMsT0FBbEI7QUFDQSxhQUFRQyxLQUFSLENBQWNILFdBQWQsRUFBMkIsRUFBM0I7QUFDRCxHQUhELE1BR08sSUFBSUMsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBMUIsRUFBb0M7QUFDekNHLFdBQU9DLElBQVAsQ0FBWUosR0FBWixFQUFpQkssT0FBakIsQ0FDRTtBQUFBLGFBQU8sVUFBUUgsS0FBUixDQUFjRixJQUFJTSxHQUFKLEVBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLENBQW9CO0FBQUEsZUFBS0MsRUFBRVIsT0FBUDtBQUFBLE9BQXBCLEVBQW9DUyxJQUFwQyxDQUF5QyxJQUF6QyxDQUFkLENBQVA7QUFBQSxLQURGLEVBRUUsRUFGRjtBQUlEO0FBQ0YsQ0FYTTtBQVlQLE9BQU8sSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT2IsV0FBUCxFQUF1QjtBQUM5QyxZQUFRYyxPQUFSLENBQWdCZCxlQUFlYSxJQUEvQjtBQUNELENBRk07QUFHUCxPQUFPLElBQU1FLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLENBQVIsRUFBWixFQUF5QkMsWUFBWSxFQUFFRCxNQUFNLEVBQVIsRUFBckMsRUFBZjtBQUNQLE9BQU8sSUFBTUUsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBTyxhQUFLO0FBQ3RDLFFBQUlULEVBQUVILEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCLGFBQU9hLFNBQVNBLE1BQU1DLElBQWYsSUFBdUJELE1BQU1DLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsRUFBOUI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBTDJCO0FBQUEsQ0FBckI7QUFNUCxPQUFPLElBQU1DLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVEsYUFBSztBQUNwQyxRQUFJZCxFQUFFSCxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQmtCO0FBQ0Q7QUFDRixHQUp3QjtBQUFBLENBQWxCIiwiZmlsZSI6InBhY2thZ2VzL3VpL25vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBjb25zdCBvbkVycm9yID0gZXJyID0+IHtcbiAgbGV0IGRlc2NyaXB0aW9uO1xuICBpZiAoZXJyICYmIGVyci5tZXNzYWdlKSB7XG4gICAgZGVzY3JpcHRpb24gPSBlcnIubWVzc2FnZTtcbiAgICBtZXNzYWdlLmVycm9yKGRlc2NyaXB0aW9uLCAyMCk7XG4gIH0gZWxzZSBpZiAoZXJyICYmIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMoZXJyKS5mb3JFYWNoKFxuICAgICAga2V5ID0+IG1lc3NhZ2UuZXJyb3IoZXJyW2tleV0uZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkuam9pbignXFxuJykpLFxuICAgICAgMjAsXG4gICAgKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBvblN1Y2Nlc3MgPSAodGV4dCwgZGVzY3JpcHRpb24pID0+IHtcbiAgbWVzc2FnZS5zdWNjZXNzKGRlc2NyaXB0aW9uIHx8IHRleHQpO1xufTtcbmV4cG9ydCBjb25zdCBsYXlvdXQgPSB7IGxhYmVsQ29sOiB7IHNwYW46IDcgfSwgd3JhcHBlckNvbDogeyBzcGFuOiAxNyB9IH07XG5leHBvcnQgY29uc3Qgb25FbnRlckZvY3VzID0gcmVmID0+IGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICByZXR1cm4gcmVmKCkgJiYgcmVmKCkucmVmcyAmJiByZWYoKS5yZWZzLmlucHV0LmZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBvbkVudGVyT2sgPSBvbk9rID0+IGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBvbk9rKCk7XG4gIH1cbn07XG4iXX0=
