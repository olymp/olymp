"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState, type) {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.blocks.some(function (node) {
      return node.type === type || node.type.indexOf(type + "-") === 0;
    });
  } catch (err) {}
  return false;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3V0aWxzL2hhcy1ibG9jay5lczYiXSwibmFtZXMiOlsiZWRpdG9yU3RhdGUiLCJ0eXBlIiwiYmxvY2tzIiwic29tZSIsIm5vZGUiLCJpbmRleE9mIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsV0FBRCxFQUFjQyxJQUFkLEVBQXVCO0FBQ3BDLE1BQUk7QUFDRixRQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPQSxZQUFZRSxNQUFaLENBQW1CQyxJQUFuQixDQUNMO0FBQUEsYUFBUUMsS0FBS0gsSUFBTCxLQUFjQSxJQUFkLElBQXNCRyxLQUFLSCxJQUFMLENBQVVJLE9BQVYsQ0FBcUJKLElBQXJCLFlBQWtDLENBQWhFO0FBQUEsS0FESyxDQUFQO0FBR0QsR0FQRCxDQU9FLE9BQU9LLEdBQVAsRUFBWSxDQUFFO0FBQ2hCLFNBQU8sS0FBUDtBQUNELEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvdXRpbHMvaGFzLWJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGVkaXRvclN0YXRlLCB0eXBlKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFlZGl0b3JTdGF0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBlZGl0b3JTdGF0ZS5ibG9ja3Muc29tZShcbiAgICAgIG5vZGUgPT4gbm9kZS50eXBlID09PSB0eXBlIHx8IG5vZGUudHlwZS5pbmRleE9mKGAke3R5cGV9LWApID09PSAwLFxuICAgICk7XG4gIH0gY2F0Y2ggKGVycikge31cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdfQ==
