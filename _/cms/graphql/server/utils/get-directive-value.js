'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (node, directiveName, argumentName) {
  var directive = node.directives.find(function (_ref) {
    var name = _ref.name;
    return name && name.value === directiveName;
  });
  if (directive && directive.arguments) {
    var argument = directive.arguments.find(function (_ref2) {
      var name = _ref2.name;
      return name && name.value === argumentName;
    });
    return (0, _get3.default)(argument, 'value.value');
  }
  return undefined;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9nZXQtZGlyZWN0aXZlLXZhbHVlLmVzNiJdLCJuYW1lcyI6WyJub2RlIiwiZGlyZWN0aXZlTmFtZSIsImFyZ3VtZW50TmFtZSIsImRpcmVjdGl2ZSIsImRpcmVjdGl2ZXMiLCJmaW5kIiwibmFtZSIsInZhbHVlIiwiYXJndW1lbnRzIiwiYXJndW1lbnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFFZSxVQUFDQSxJQUFELEVBQU9DLGFBQVAsRUFBc0JDLFlBQXRCLEVBQXVDO0FBQ3BELE1BQU1DLFlBQVlILEtBQUtJLFVBQUwsQ0FBZ0JDLElBQWhCLENBQ2hCO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FBY0EsUUFBUUEsS0FBS0MsS0FBTCxLQUFlTixhQUFyQztBQUFBLEdBRGdCLENBQWxCO0FBR0EsTUFBSUUsYUFBYUEsVUFBVUssU0FBM0IsRUFBc0M7QUFDcEMsUUFBTUMsV0FBV04sVUFBVUssU0FBVixDQUFvQkgsSUFBcEIsQ0FDZjtBQUFBLFVBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLGFBQWNBLFFBQVFBLEtBQUtDLEtBQUwsS0FBZUwsWUFBckM7QUFBQSxLQURlLENBQWpCO0FBR0EsV0FBTyxtQkFBSU8sUUFBSixFQUFjLGFBQWQsQ0FBUDtBQUNEO0FBQ0QsU0FBT0MsU0FBUDtBQUNELEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3V0aWxzL2dldC1kaXJlY3RpdmUtdmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAobm9kZSwgZGlyZWN0aXZlTmFtZSwgYXJndW1lbnROYW1lKSA9PiB7XG4gIGNvbnN0IGRpcmVjdGl2ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKFxuICAgICh7IG5hbWUgfSkgPT4gbmFtZSAmJiBuYW1lLnZhbHVlID09PSBkaXJlY3RpdmVOYW1lXG4gICk7XG4gIGlmIChkaXJlY3RpdmUgJiYgZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgIGNvbnN0IGFyZ3VtZW50ID0gZGlyZWN0aXZlLmFyZ3VtZW50cy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lICYmIG5hbWUudmFsdWUgPT09IGFyZ3VtZW50TmFtZVxuICAgICk7XG4gICAgcmV0dXJuIGdldChhcmd1bWVudCwgJ3ZhbHVlLnZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iXX0=
