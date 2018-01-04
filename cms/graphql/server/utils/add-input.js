'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upperFirst2 = require('lodash/upperFirst');

var _upperFirst3 = _interopRequireDefault(_upperFirst2);

var _language = require('graphql/language');

var _fetchType = require('./fetch-type');

var _fetchType2 = _interopRequireDefault(_fetchType);

var _addDefinition = require('./add-definition');

var _addDefinition2 = _interopRequireDefault(_addDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetch = (0, _fetchType2.default)(function (node, value) {
  return node.kind.endsWith('TypeDefinition') && node.name && node.name.value === value;
});

var transformASTTypeToInput = function transformASTTypeToInput(type, _ref) {
  var newName = _ref.newName,
      ast = _ref.ast,
      _ref$exclude = _ref.exclude,
      exclude = _ref$exclude === undefined ? [] : _ref$exclude,
      _ref$optional = _ref.optional,
      optional = _ref$optional === undefined ? [] : _ref$optional;
  var generatedInputHistory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var definitions = ast.definitions || ast;
  return (0, _language.visit)(type, {
    enter: function enter(node /* , key, parent, path, ancestors*/) {
      var copy = Object.assign({}, node);
      copy.directives = [];
      switch (copy.kind) {
        case _language.Kind.OBJECT_TYPE_DEFINITION:
          copy.kind = _language.Kind.INPUT_OBJECT_TYPE_DEFINITION;
          copy.name = Object.assign({}, copy.name);
          copy.name.value = newName;
          break;
        case _language.Kind.FIELD_DEFINITION:
          if (exclude.indexOf(node.name.value) !== -1) {
            return null;
          } // Delete this node
          copy.kind = _language.Kind.INPUT_VALUE_DEFINITION;
          var fieldName = copy.name.value;
          var typeName = null;
          (0, _language.visit)(copy, _defineProperty({}, _language.Kind.NAMED_TYPE, function (typeNode) {
            typeName = typeNode.name.value;
          }));
          var fieldType = fetch(ast, typeName);
          if (fieldType && fieldType.kind === _language.Kind.OBJECT_TYPE_DEFINITION) {
            var inputName = (0, _upperFirst3.default)(fieldType.name.value) + 'Input';
            if (generatedInputHistory.indexOf(inputName) === -1) {
              generatedInputHistory.push(inputName);
              if (!fetch(ast, inputName) && fieldType.name.value !== type.name.value) {
                var newInput = transformASTTypeToInput(fieldType, { newName: inputName, ast: ast }, generatedInputHistory);
                definitions.push(newInput);
              }
            }
            copy = (0, _language.visit)(copy, _defineProperty({}, _language.Kind.NAMED_TYPE, function (typeNode) {
              var newNode = Object.assign({}, typeNode);
              newNode.name = Object.assign({}, newNode.name);
              newNode.name.value = inputName;
              return newNode;
            }));
            if (optional.indexOf(fieldName) !== -1) {
              while (copy.type.kind === _language.Kind.NON_NULL_TYPE) {
                copy.type = Object.assign({}, copy.type.type);
              }
            }
          }
          break;
      }
      return copy;
    }
  });
};

exports.default = function (ast, node) {
  var input = transformASTTypeToInput(node, {
    newName: node.name.value + 'Input',
    ast: ast.definitions
  });
  (0, _addDefinition2.default)(ast.definitions, input);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtaW5wdXQuZXM2Il0sIm5hbWVzIjpbImZldGNoIiwibm9kZSIsInZhbHVlIiwia2luZCIsImVuZHNXaXRoIiwibmFtZSIsInRyYW5zZm9ybUFTVFR5cGVUb0lucHV0IiwidHlwZSIsIm5ld05hbWUiLCJhc3QiLCJleGNsdWRlIiwib3B0aW9uYWwiLCJnZW5lcmF0ZWRJbnB1dEhpc3RvcnkiLCJkZWZpbml0aW9ucyIsImVudGVyIiwiY29weSIsIk9iamVjdCIsImFzc2lnbiIsImRpcmVjdGl2ZXMiLCJPQkpFQ1RfVFlQRV9ERUZJTklUSU9OIiwiSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTiIsIkZJRUxEX0RFRklOSVRJT04iLCJpbmRleE9mIiwiSU5QVVRfVkFMVUVfREVGSU5JVElPTiIsImZpZWxkTmFtZSIsInR5cGVOYW1lIiwiTkFNRURfVFlQRSIsInR5cGVOb2RlIiwiZmllbGRUeXBlIiwiaW5wdXROYW1lIiwicHVzaCIsIm5ld0lucHV0IiwibmV3Tm9kZSIsIk5PTl9OVUxMX1RZUEUiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSx5QkFDWixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxTQUNFRCxLQUFLRSxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsZ0JBQW5CLEtBQ0FILEtBQUtJLElBREwsSUFFQUosS0FBS0ksSUFBTCxDQUFVSCxLQUFWLEtBQW9CQSxLQUh0QjtBQUFBLENBRFksQ0FBZDs7QUFPQSxJQUFNSSwwQkFBMEIsU0FBMUJBLHVCQUEwQixDQUM5QkMsSUFEOEIsUUFJM0I7QUFBQSxNQUZEQyxPQUVDLFFBRkRBLE9BRUM7QUFBQSxNQUZRQyxHQUVSLFFBRlFBLEdBRVI7QUFBQSwwQkFGYUMsT0FFYjtBQUFBLE1BRmFBLE9BRWIsZ0NBRnVCLEVBRXZCO0FBQUEsMkJBRjJCQyxRQUUzQjtBQUFBLE1BRjJCQSxRQUUzQixpQ0FGc0MsRUFFdEM7QUFBQSxNQURIQyxxQkFDRyx1RUFEcUIsRUFDckI7O0FBQ0gsTUFBTUMsY0FBY0osSUFBSUksV0FBSixJQUFtQkosR0FBdkM7QUFDQSxTQUFPLHFCQUFNRixJQUFOLEVBQVk7QUFDakJPLFNBRGlCLGlCQUNYYixJQURXLENBQ04sbUNBRE0sRUFDK0I7QUFDOUMsVUFBSWMsT0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JoQixJQUFsQixDQUFYO0FBQ0FjLFdBQUtHLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxjQUFRSCxLQUFLWixJQUFiO0FBQ0UsYUFBSyxlQUFLZ0Isc0JBQVY7QUFDRUosZUFBS1osSUFBTCxHQUFZLGVBQUtpQiw0QkFBakI7QUFDQUwsZUFBS1YsSUFBTCxHQUFZVyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsS0FBS1YsSUFBdkIsQ0FBWjtBQUNBVSxlQUFLVixJQUFMLENBQVVILEtBQVYsR0FBa0JNLE9BQWxCO0FBQ0E7QUFDRixhQUFLLGVBQUthLGdCQUFWO0FBQ0UsY0FBSVgsUUFBUVksT0FBUixDQUFnQnJCLEtBQUtJLElBQUwsQ0FBVUgsS0FBMUIsTUFBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQyxtQkFBTyxJQUFQO0FBQ0QsV0FISCxDQUdJO0FBQ0ZhLGVBQUtaLElBQUwsR0FBWSxlQUFLb0Isc0JBQWpCO0FBQ0EsY0FBTUMsWUFBWVQsS0FBS1YsSUFBTCxDQUFVSCxLQUE1QjtBQUNBLGNBQUl1QixXQUFXLElBQWY7QUFDQSwrQkFBTVYsSUFBTixzQkFDRyxlQUFLVyxVQURSLFlBQ29CQyxRQURwQixFQUM4QjtBQUMxQkYsdUJBQVdFLFNBQVN0QixJQUFULENBQWNILEtBQXpCO0FBQ0QsV0FISDtBQUtBLGNBQU0wQixZQUFZNUIsTUFBTVMsR0FBTixFQUFXZ0IsUUFBWCxDQUFsQjtBQUNBLGNBQUlHLGFBQWFBLFVBQVV6QixJQUFWLEtBQW1CLGVBQUtnQixzQkFBekMsRUFBaUU7QUFDL0QsZ0JBQU1VLFlBQWUsMEJBQVdELFVBQVV2QixJQUFWLENBQWVILEtBQTFCLENBQWYsVUFBTjtBQUNBLGdCQUFJVSxzQkFBc0JVLE9BQXRCLENBQThCTyxTQUE5QixNQUE2QyxDQUFDLENBQWxELEVBQXFEO0FBQ25EakIsb0NBQXNCa0IsSUFBdEIsQ0FBMkJELFNBQTNCO0FBQ0Esa0JBQ0UsQ0FBQzdCLE1BQU1TLEdBQU4sRUFBV29CLFNBQVgsQ0FBRCxJQUNBRCxVQUFVdkIsSUFBVixDQUFlSCxLQUFmLEtBQXlCSyxLQUFLRixJQUFMLENBQVVILEtBRnJDLEVBR0U7QUFDQSxvQkFBTTZCLFdBQVd6Qix3QkFDZnNCLFNBRGUsRUFFZixFQUFFcEIsU0FBU3FCLFNBQVgsRUFBc0JwQixRQUF0QixFQUZlLEVBR2ZHLHFCQUhlLENBQWpCO0FBS0FDLDRCQUFZaUIsSUFBWixDQUFpQkMsUUFBakI7QUFDRDtBQUNGO0FBQ0RoQixtQkFBTyxxQkFBTUEsSUFBTixzQkFDSixlQUFLVyxVQURELFlBQ2FDLFFBRGIsRUFDdUI7QUFDMUIsa0JBQU1LLFVBQVVoQixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlUsUUFBbEIsQ0FBaEI7QUFDQUssc0JBQVEzQixJQUFSLEdBQWVXLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZSxRQUFRM0IsSUFBMUIsQ0FBZjtBQUNBMkIsc0JBQVEzQixJQUFSLENBQWFILEtBQWIsR0FBcUIyQixTQUFyQjtBQUNBLHFCQUFPRyxPQUFQO0FBQ0QsYUFOSSxFQUFQO0FBUUEsZ0JBQUlyQixTQUFTVyxPQUFULENBQWlCRSxTQUFqQixNQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3RDLHFCQUFPVCxLQUFLUixJQUFMLENBQVVKLElBQVYsS0FBbUIsZUFBSzhCLGFBQS9CLEVBQThDO0FBQzVDbEIscUJBQUtSLElBQUwsR0FBWVMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLEtBQUtSLElBQUwsQ0FBVUEsSUFBNUIsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNEO0FBakRKO0FBbURBLGFBQU9RLElBQVA7QUFDRDtBQXhEZ0IsR0FBWixDQUFQO0FBMERELENBaEVEOztrQkFrRWUsVUFBQ04sR0FBRCxFQUFNUixJQUFOLEVBQWU7QUFDNUIsTUFBTWlDLFFBQVE1Qix3QkFBd0JMLElBQXhCLEVBQThCO0FBQzFDTyxhQUFZUCxLQUFLSSxJQUFMLENBQVVILEtBQXRCLFVBRDBDO0FBRTFDTyxTQUFLQSxJQUFJSTtBQUZpQyxHQUE5QixDQUFkO0FBSUEsK0JBQWNKLElBQUlJLFdBQWxCLEVBQStCcUIsS0FBL0I7QUFDRCxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci91dGlscy9hZGQtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHZpc2l0LCBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgY3JlYXRlVHlwZUZldGNoZXIgZnJvbSAnLi9mZXRjaC10eXBlJztcbmltcG9ydCBhZGREZWZpbml0aW9uIGZyb20gJy4vYWRkLWRlZmluaXRpb24nO1xuXG5jb25zdCBmZXRjaCA9IGNyZWF0ZVR5cGVGZXRjaGVyKFxuICAobm9kZSwgdmFsdWUpID0+XG4gICAgbm9kZS5raW5kLmVuZHNXaXRoKCdUeXBlRGVmaW5pdGlvbicpICYmXG4gICAgbm9kZS5uYW1lICYmXG4gICAgbm9kZS5uYW1lLnZhbHVlID09PSB2YWx1ZVxuKTtcblxuY29uc3QgdHJhbnNmb3JtQVNUVHlwZVRvSW5wdXQgPSAoXG4gIHR5cGUsXG4gIHsgbmV3TmFtZSwgYXN0LCBleGNsdWRlID0gW10sIG9wdGlvbmFsID0gW10gfSxcbiAgZ2VuZXJhdGVkSW5wdXRIaXN0b3J5ID0gW11cbikgPT4ge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGFzdC5kZWZpbml0aW9ucyB8fCBhc3Q7XG4gIHJldHVybiB2aXNpdCh0eXBlLCB7XG4gICAgZW50ZXIobm9kZSAvKiAsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMqLykge1xuICAgICAgbGV0IGNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlKTtcbiAgICAgIGNvcHkuZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgc3dpdGNoIChjb3B5LmtpbmQpIHtcbiAgICAgICAgY2FzZSBLaW5kLk9CSkVDVF9UWVBFX0RFRklOSVRJT046XG4gICAgICAgICAgY29weS5raW5kID0gS2luZC5JTlBVVF9PQkpFQ1RfVFlQRV9ERUZJTklUSU9OO1xuICAgICAgICAgIGNvcHkubmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvcHkubmFtZSk7XG4gICAgICAgICAgY29weS5uYW1lLnZhbHVlID0gbmV3TmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLaW5kLkZJRUxEX0RFRklOSVRJT046XG4gICAgICAgICAgaWYgKGV4Y2x1ZGUuaW5kZXhPZihub2RlLm5hbWUudmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSAvLyBEZWxldGUgdGhpcyBub2RlXG4gICAgICAgICAgY29weS5raW5kID0gS2luZC5JTlBVVF9WQUxVRV9ERUZJTklUSU9OO1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvcHkubmFtZS52YWx1ZTtcbiAgICAgICAgICBsZXQgdHlwZU5hbWUgPSBudWxsO1xuICAgICAgICAgIHZpc2l0KGNvcHksIHtcbiAgICAgICAgICAgIFtLaW5kLk5BTUVEX1RZUEVdKHR5cGVOb2RlKSB7XG4gICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZmllbGRUeXBlID0gZmV0Y2goYXN0LCB0eXBlTmFtZSk7XG4gICAgICAgICAgaWYgKGZpZWxkVHlwZSAmJiBmaWVsZFR5cGUua2luZCA9PT0gS2luZC5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBgJHt1cHBlckZpcnN0KGZpZWxkVHlwZS5uYW1lLnZhbHVlKX1JbnB1dGA7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVkSW5wdXRIaXN0b3J5LmluZGV4T2YoaW5wdXROYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgZ2VuZXJhdGVkSW5wdXRIaXN0b3J5LnB1c2goaW5wdXROYW1lKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFmZXRjaChhc3QsIGlucHV0TmFtZSkgJiZcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGUubmFtZS52YWx1ZSAhPT0gdHlwZS5uYW1lLnZhbHVlXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0gdHJhbnNmb3JtQVNUVHlwZVRvSW5wdXQoXG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGUsXG4gICAgICAgICAgICAgICAgICB7IG5ld05hbWU6IGlucHV0TmFtZSwgYXN0IH0sXG4gICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRJbnB1dEhpc3RvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2gobmV3SW5wdXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3B5ID0gdmlzaXQoY29weSwge1xuICAgICAgICAgICAgICBbS2luZC5OQU1FRF9UWVBFXSh0eXBlTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBPYmplY3QuYXNzaWduKHt9LCB0eXBlTm9kZSk7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5uYW1lID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3Tm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLm5hbWUudmFsdWUgPSBpbnB1dE5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25hbC5pbmRleE9mKGZpZWxkTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIHdoaWxlIChjb3B5LnR5cGUua2luZCA9PT0gS2luZC5OT05fTlVMTF9UWVBFKSB7XG4gICAgICAgICAgICAgICAgY29weS50eXBlID0gT2JqZWN0LmFzc2lnbih7fSwgY29weS50eXBlLnR5cGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoYXN0LCBub2RlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gdHJhbnNmb3JtQVNUVHlwZVRvSW5wdXQobm9kZSwge1xuICAgIG5ld05hbWU6IGAke25vZGUubmFtZS52YWx1ZX1JbnB1dGAsXG4gICAgYXN0OiBhc3QuZGVmaW5pdGlvbnMsXG4gIH0pO1xuICBhZGREZWZpbml0aW9uKGFzdC5kZWZpbml0aW9ucywgaW5wdXQpO1xufTtcbiJdfQ==
