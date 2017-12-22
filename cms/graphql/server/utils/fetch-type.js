import { visit, BREAK } from 'graphql/language';

export default (function (condition) {
  return function (ast) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var currentNode = void 0;
    visit(ast, {
      enter: function enter(node) {
        if (condition.apply(undefined, [node].concat(args))) {
          currentNode = node;
          return BREAK;
        }
        return undefined;
      }
    });
    return currentNode;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3V0aWxzL2ZldGNoLXR5cGUuZXM2Il0sIm5hbWVzIjpbInZpc2l0IiwiQlJFQUsiLCJhc3QiLCJhcmdzIiwiY3VycmVudE5vZGUiLCJlbnRlciIsIm5vZGUiLCJjb25kaXRpb24iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQVQsRUFBZ0JDLEtBQWhCLFFBQTZCLGtCQUE3Qjs7QUFFQSxnQkFBZTtBQUFBLFNBQWEsVUFBQ0MsR0FBRCxFQUFrQjtBQUFBLHNDQUFUQyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDNUMsUUFBSUMsb0JBQUo7QUFDQUosVUFBTUUsR0FBTixFQUFXO0FBQ1RHLFdBRFMsaUJBQ0hDLElBREcsRUFDRztBQUNWLFlBQUlDLDRCQUFVRCxJQUFWLFNBQW1CSCxJQUFuQixFQUFKLEVBQThCO0FBQzVCQyx3QkFBY0UsSUFBZDtBQUNBLGlCQUFPTCxLQUFQO0FBQ0Q7QUFDRCxlQUFPTyxTQUFQO0FBQ0Q7QUFQUSxLQUFYO0FBU0EsV0FBT0osV0FBUDtBQUNELEdBWmM7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3V0aWxzL2ZldGNoLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2aXNpdCwgQlJFQUsgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZGl0aW9uID0+IChhc3QsIC4uLmFyZ3MpID0+IHtcbiAgbGV0IGN1cnJlbnROb2RlO1xuICB2aXNpdChhc3QsIHtcbiAgICBlbnRlcihub2RlKSB7XG4gICAgICBpZiAoY29uZGl0aW9uKG5vZGUsIC4uLmFyZ3MpKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgcmV0dXJuIEJSRUFLO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGN1cnJlbnROb2RlO1xufTtcbiJdfQ==
