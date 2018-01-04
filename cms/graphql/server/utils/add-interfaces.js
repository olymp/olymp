'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _language = require('graphql/language');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ast, node, interfacesToAdd) {
  var interfaces = node.interfaces || node;
  var type = (0, _language.parse)('\n    type ___Model implements ' + interfacesToAdd + ' {\n      id: String\n    }\n  ').definitions[0];
  type.interfaces.forEach(function (field) {
    if (interfaces.find(function (x) {
      return (0, _get3.default)(x, 'name.value') === (0, _get3.default)(field, 'name.value');
    })) {
      return;
    }
    interfaces.push(field);
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtaW50ZXJmYWNlcy5lczYiXSwibmFtZXMiOlsiYXN0Iiwibm9kZSIsImludGVyZmFjZXNUb0FkZCIsImludGVyZmFjZXMiLCJ0eXBlIiwiZGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZmllbGQiLCJmaW5kIiwieCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFHZSxVQUFDQSxHQUFELEVBQU1DLElBQU4sRUFBWUMsZUFBWixFQUFnQztBQUM3QyxNQUFNQyxhQUFhRixLQUFLRSxVQUFMLElBQW1CRixJQUF0QztBQUNBLE1BQU1HLE9BQU8seURBQ2dCRixlQURoQixzQ0FJVkcsV0FKVSxDQUlFLENBSkYsQ0FBYjtBQUtBRCxPQUFLRCxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFDQyxLQUFELEVBQVc7QUFDakMsUUFDRUosV0FBV0ssSUFBWCxDQUFnQjtBQUFBLGFBQUssbUJBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLG1CQUFJRixLQUFKLEVBQVcsWUFBWCxDQUE5QjtBQUFBLEtBQWhCLENBREYsRUFFRTtBQUNBO0FBQ0Q7QUFDREosZUFBV08sSUFBWCxDQUFnQkgsS0FBaEI7QUFDRCxHQVBEO0FBUUQsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvdXRpbHMvYWRkLWludGVyZmFjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGFzdCwgbm9kZSwgaW50ZXJmYWNlc1RvQWRkKSA9PiB7XG4gIGNvbnN0IGludGVyZmFjZXMgPSBub2RlLmludGVyZmFjZXMgfHwgbm9kZTtcbiAgY29uc3QgdHlwZSA9IHBhcnNlKGBcbiAgICB0eXBlIF9fX01vZGVsIGltcGxlbWVudHMgJHtpbnRlcmZhY2VzVG9BZGR9IHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICB9XG4gIGApLmRlZmluaXRpb25zWzBdO1xuICB0eXBlLmludGVyZmFjZXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoXG4gICAgICBpbnRlcmZhY2VzLmZpbmQoeCA9PiBnZXQoeCwgJ25hbWUudmFsdWUnKSA9PT0gZ2V0KGZpZWxkLCAnbmFtZS52YWx1ZScpKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnRlcmZhY2VzLnB1c2goZmllbGQpO1xuICB9KTtcbn07XG4iXX0=
