'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

exports.default = function (ast, node, argsToAdd) {
  var args = node.arguments || node;
  var type = (0, _language.parse)('\n    type Query {\n      func(' + argsToAdd + '): Boolean\n    }\n  ').definitions[0].fields[0];
  type.arguments.forEach(function (field) {
    return args.push(field);
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtYXJndW1lbnRzLmVzNiJdLCJuYW1lcyI6WyJhc3QiLCJub2RlIiwiYXJnc1RvQWRkIiwiYXJncyIsImFyZ3VtZW50cyIsInR5cGUiLCJkZWZpbml0aW9ucyIsImZpZWxkcyIsImZvckVhY2giLCJwdXNoIiwiZmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZSxVQUFDQSxHQUFELEVBQU1DLElBQU4sRUFBWUMsU0FBWixFQUEwQjtBQUN2QyxNQUFNQyxPQUFPRixLQUFLRyxTQUFMLElBQWtCSCxJQUEvQjtBQUNBLE1BQU1JLE9BQU8seURBRUZILFNBRkUsNEJBSVZJLFdBSlUsQ0FJRSxDQUpGLEVBSUtDLE1BSkwsQ0FJWSxDQUpaLENBQWI7QUFLQUYsT0FBS0QsU0FBTCxDQUFlSSxPQUFmLENBQXVCO0FBQUEsV0FBU0wsS0FBS00sSUFBTCxDQUFVQyxLQUFWLENBQVQ7QUFBQSxHQUF2QjtBQUNELEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3V0aWxzL2FkZC1hcmd1bWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXN0LCBub2RlLCBhcmdzVG9BZGQpID0+IHtcbiAgY29uc3QgYXJncyA9IG5vZGUuYXJndW1lbnRzIHx8IG5vZGU7XG4gIGNvbnN0IHR5cGUgPSBwYXJzZShgXG4gICAgdHlwZSBRdWVyeSB7XG4gICAgICBmdW5jKCR7YXJnc1RvQWRkfSk6IEJvb2xlYW5cbiAgICB9XG4gIGApLmRlZmluaXRpb25zWzBdLmZpZWxkc1swXTtcbiAgdHlwZS5hcmd1bWVudHMuZm9yRWFjaChmaWVsZCA9PiBhcmdzLnB1c2goZmllbGQpKTtcbn07XG4iXX0=
