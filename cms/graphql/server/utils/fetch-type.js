'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

exports.default = function (condition) {
  return function (ast) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var currentNode = void 0;
    (0, _language.visit)(ast, {
      enter: function enter(node) {
        if (condition.apply(undefined, [node].concat(args))) {
          currentNode = node;
          return _language.BREAK;
        }
        return undefined;
      }
    });
    return currentNode;
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9mZXRjaC10eXBlLmVzNiJdLCJuYW1lcyI6WyJhc3QiLCJhcmdzIiwiY3VycmVudE5vZGUiLCJlbnRlciIsIm5vZGUiLCJjb25kaXRpb24iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZTtBQUFBLFNBQWEsVUFBQ0EsR0FBRCxFQUFrQjtBQUFBLHNDQUFUQyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDNUMsUUFBSUMsb0JBQUo7QUFDQSx5QkFBTUYsR0FBTixFQUFXO0FBQ1RHLFdBRFMsaUJBQ0hDLElBREcsRUFDRztBQUNWLFlBQUlDLDRCQUFVRCxJQUFWLFNBQW1CSCxJQUFuQixFQUFKLEVBQThCO0FBQzVCQyx3QkFBY0UsSUFBZDtBQUNBO0FBQ0Q7QUFDRCxlQUFPRSxTQUFQO0FBQ0Q7QUFQUSxLQUFYO0FBU0EsV0FBT0osV0FBUDtBQUNELEdBWmM7QUFBQSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9mZXRjaC10eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmlzaXQsIEJSRUFLIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmRpdGlvbiA9PiAoYXN0LCAuLi5hcmdzKSA9PiB7XG4gIGxldCBjdXJyZW50Tm9kZTtcbiAgdmlzaXQoYXN0LCB7XG4gICAgZW50ZXIobm9kZSkge1xuICAgICAgaWYgKGNvbmRpdGlvbihub2RlLCAuLi5hcmdzKSkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIHJldHVybiBCUkVBSztcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBjdXJyZW50Tm9kZTtcbn07XG4iXX0=
