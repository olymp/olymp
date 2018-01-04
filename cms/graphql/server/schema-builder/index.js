'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _language = require('graphql/language');

var _utilities = require('graphql/utilities');

var _graphqlTools = require('graphql-tools');

var _applyDirectives = require('./apply-directives');

var _applyDirectives2 = _interopRequireDefault(_applyDirectives);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (_ref) {
  var typeDefs = _ref.typeDefs,
      resolvers = _ref.resolvers,
      directives = _ref.directives,
      onBefore = _ref.onBefore,
      onAfter = _ref.onAfter;

  var ast = (0, _language.parse)(typeDefs);
  if (directives) {
    (0, _applyDirectives2.default)(ast, directives, resolvers);
  }
  var builtSchema = (0, _utilities.buildASTSchema)(ast);

  // Wrap resolvers for onAfter, onBefore
  var recurse = function recurse(obj) {
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return Object.keys(obj).reduce(function (store, key) {
      var keys = [].concat(_toConsumableArray(currentKeys), [key]);
      if ((0, _isPlainObject3.default)(obj[key]) && typeof obj[key].name === 'string') {
        store[key] = obj[key];
      } else if ((0, _isPlainObject3.default)(obj[key])) {
        store[key] = recurse(obj[key], keys);
      } else if ((0, _isFunction3.default)(obj[key])) {
        var fn = obj[key];
        store[key] = function (source, variables, context, resolverAST) {
          var promise = Promise.resolve(variables);
          onBefore.forEach(function (hook) {
            promise = promise.then(function (newVariables) {
              variables = newVariables || variables;
              return hook({ keys: keys, source: source, variables: variables, context: context, resolverAST: resolverAST, ast: ast });
            });
          });
          promise = promise.then(function (newVariables) {
            variables = newVariables || variables;
            return fn(source, variables, context, resolverAST);
          });
          var value = void 0;
          onAfter.forEach(function (hook) {
            promise = promise.then(function (newValue) {
              value = newValue || value;
              return hook({ keys: keys, source: source, value: value, variables: variables, context: context, resolverAST: resolverAST, ast: ast });
            });
          });
          return promise.then(function (newValue) {
            return newValue || value;
          });
        };
      } else {
        store[key] = obj[key];
      }return store;
    }, {});
  };
  (0, _graphqlTools.addResolveFunctionsToSchema)(builtSchema, recurse(resolvers));
  // console.log(resolvers);
  return builtSchema;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2hlbWEtYnVpbGRlci9pbmRleC5lczYiXSwibmFtZXMiOlsidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJkaXJlY3RpdmVzIiwib25CZWZvcmUiLCJvbkFmdGVyIiwiYXN0IiwiYnVpbHRTY2hlbWEiLCJyZWN1cnNlIiwib2JqIiwiY3VycmVudEtleXMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwic3RvcmUiLCJrZXkiLCJuYW1lIiwiZm4iLCJzb3VyY2UiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwicmVzb2x2ZXJBU1QiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmb3JFYWNoIiwiaG9vayIsInRoZW4iLCJuZXdWYXJpYWJsZXMiLCJ2YWx1ZSIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztrQkFHZSxnQkFBNEQ7QUFBQSxNQUF6REEsUUFBeUQsUUFBekRBLFFBQXlEO0FBQUEsTUFBL0NDLFNBQStDLFFBQS9DQSxTQUErQztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUN6RSxNQUFNQyxNQUFNLHFCQUFNTCxRQUFOLENBQVo7QUFDQSxNQUFJRSxVQUFKLEVBQWdCO0FBQ2QsbUNBQXFCRyxHQUFyQixFQUEwQkgsVUFBMUIsRUFBc0NELFNBQXRDO0FBQ0Q7QUFDRCxNQUFNSyxjQUFjLCtCQUFlRCxHQUFmLENBQXBCOztBQUVBO0FBQ0EsTUFBTUUsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBMkI7QUFBQSxRQUFyQkMsV0FBcUIsdUVBQVAsRUFBTzs7QUFDekMsV0FBT0MsT0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxNQUFqQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDN0MsVUFBTUgsb0NBQVdGLFdBQVgsSUFBd0JLLEdBQXhCLEVBQU47QUFDQSxVQUFJLDZCQUFjTixJQUFJTSxHQUFKLENBQWQsS0FBMkIsT0FBT04sSUFBSU0sR0FBSixFQUFTQyxJQUFoQixLQUF5QixRQUF4RCxFQUFrRTtBQUNoRUYsY0FBTUMsR0FBTixJQUFhTixJQUFJTSxHQUFKLENBQWI7QUFDRCxPQUZELE1BRU8sSUFBSSw2QkFBY04sSUFBSU0sR0FBSixDQUFkLENBQUosRUFBNkI7QUFDbENELGNBQU1DLEdBQU4sSUFBYVAsUUFBUUMsSUFBSU0sR0FBSixDQUFSLEVBQWtCSCxJQUFsQixDQUFiO0FBQ0QsT0FGTSxNQUVBLElBQUksMEJBQVdILElBQUlNLEdBQUosQ0FBWCxDQUFKLEVBQTBCO0FBQy9CLFlBQU1FLEtBQUtSLElBQUlNLEdBQUosQ0FBWDtBQUNBRCxjQUFNQyxHQUFOLElBQWEsVUFBQ0csTUFBRCxFQUFTQyxTQUFULEVBQW9CQyxPQUFwQixFQUE2QkMsV0FBN0IsRUFBNkM7QUFDeEQsY0FBSUMsVUFBVUMsUUFBUUMsT0FBUixDQUFnQkwsU0FBaEIsQ0FBZDtBQUNBZixtQkFBU3FCLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCSixzQkFBVUEsUUFBUUssSUFBUixDQUFhLFVBQUNDLFlBQUQsRUFBa0I7QUFDdkNULDBCQUFZUyxnQkFBZ0JULFNBQTVCO0FBQ0EscUJBQU9PLEtBQUssRUFBRWQsVUFBRixFQUFRTSxjQUFSLEVBQWdCQyxvQkFBaEIsRUFBMkJDLGdCQUEzQixFQUFvQ0Msd0JBQXBDLEVBQWlEZixRQUFqRCxFQUFMLENBQVA7QUFDRCxhQUhTLENBQVY7QUFJRCxXQUxEO0FBTUFnQixvQkFBVUEsUUFBUUssSUFBUixDQUFhLFVBQUNDLFlBQUQsRUFBa0I7QUFDdkNULHdCQUFZUyxnQkFBZ0JULFNBQTVCO0FBQ0EsbUJBQU9GLEdBQUdDLE1BQUgsRUFBV0MsU0FBWCxFQUFzQkMsT0FBdEIsRUFBK0JDLFdBQS9CLENBQVA7QUFDRCxXQUhTLENBQVY7QUFJQSxjQUFJUSxjQUFKO0FBQ0F4QixrQkFBUW9CLE9BQVIsQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCSixzQkFBVUEsUUFBUUssSUFBUixDQUFhLFVBQUNHLFFBQUQsRUFBYztBQUNuQ0Qsc0JBQVFDLFlBQVlELEtBQXBCO0FBQ0EscUJBQU9ILEtBQUssRUFBRWQsVUFBRixFQUFRTSxjQUFSLEVBQWdCVyxZQUFoQixFQUF1QlYsb0JBQXZCLEVBQWtDQyxnQkFBbEMsRUFBMkNDLHdCQUEzQyxFQUF3RGYsUUFBeEQsRUFBTCxDQUFQO0FBQ0QsYUFIUyxDQUFWO0FBSUQsV0FMRDtBQU1BLGlCQUFPZ0IsUUFBUUssSUFBUixDQUFhO0FBQUEsbUJBQVlHLFlBQVlELEtBQXhCO0FBQUEsV0FBYixDQUFQO0FBQ0QsU0FwQkQ7QUFxQkQsT0F2Qk0sTUF1QkE7QUFDTGYsY0FBTUMsR0FBTixJQUFhTixJQUFJTSxHQUFKLENBQWI7QUFDRCxPQUFDLE9BQU9ELEtBQVA7QUFDSCxLQWhDTSxFQWdDSixFQWhDSSxDQUFQO0FBaUNELEdBbENEO0FBbUNBLGlEQUE0QlAsV0FBNUIsRUFBeUNDLFFBQVFOLFNBQVIsQ0FBekM7QUFDQTtBQUNBLFNBQU9LLFdBQVA7QUFDRCxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9zY2hlbWEtYnVpbGRlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBidWlsZEFTVFNjaGVtYSB9IGZyb20gJ2dyYXBocWwvdXRpbGl0aWVzJztcbmltcG9ydCB7IGFkZFJlc29sdmVGdW5jdGlvbnNUb1NjaGVtYSB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuaW1wb3J0IGFwcGx5RGlyZWN0aXZlc1RvQVNUIGZyb20gJy4vYXBwbHktZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBpc0Z1bmN0aW9uLCBnZXQsIGtleXMgYXMgX2tleXMsIHZhbHVlcyB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHR5cGVEZWZzLCByZXNvbHZlcnMsIGRpcmVjdGl2ZXMsIG9uQmVmb3JlLCBvbkFmdGVyIH0pID0+IHtcbiAgY29uc3QgYXN0ID0gcGFyc2UodHlwZURlZnMpO1xuICBpZiAoZGlyZWN0aXZlcykge1xuICAgIGFwcGx5RGlyZWN0aXZlc1RvQVNUKGFzdCwgZGlyZWN0aXZlcywgcmVzb2x2ZXJzKTtcbiAgfVxuICBjb25zdCBidWlsdFNjaGVtYSA9IGJ1aWxkQVNUU2NoZW1hKGFzdCk7XG5cbiAgLy8gV3JhcCByZXNvbHZlcnMgZm9yIG9uQWZ0ZXIsIG9uQmVmb3JlXG4gIGNvbnN0IHJlY3Vyc2UgPSAob2JqLCBjdXJyZW50S2V5cyA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChzdG9yZSwga2V5KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gWy4uLmN1cnJlbnRLZXlzLCBrZXldO1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pICYmIHR5cGVvZiBvYmpba2V5XS5uYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBzdG9yZVtrZXldID0gb2JqW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHN0b3JlW2tleV0gPSByZWN1cnNlKG9ialtrZXldLCBrZXlzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZm4gPSBvYmpba2V5XTtcbiAgICAgICAgc3RvcmVba2V5XSA9IChzb3VyY2UsIHZhcmlhYmxlcywgY29udGV4dCwgcmVzb2x2ZXJBU1QpID0+IHtcbiAgICAgICAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh2YXJpYWJsZXMpO1xuICAgICAgICAgIG9uQmVmb3JlLmZvckVhY2goKGhvb2spID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oKG5ld1ZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBuZXdWYXJpYWJsZXMgfHwgdmFyaWFibGVzO1xuICAgICAgICAgICAgICByZXR1cm4gaG9vayh7IGtleXMsIHNvdXJjZSwgdmFyaWFibGVzLCBjb250ZXh0LCByZXNvbHZlckFTVCwgYXN0IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigobmV3VmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSBuZXdWYXJpYWJsZXMgfHwgdmFyaWFibGVzO1xuICAgICAgICAgICAgcmV0dXJuIGZuKHNvdXJjZSwgdmFyaWFibGVzLCBjb250ZXh0LCByZXNvbHZlckFTVCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIG9uQWZ0ZXIuZm9yRWFjaCgoaG9vaykgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGhvb2soeyBrZXlzLCBzb3VyY2UsIHZhbHVlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHJlc29sdmVyQVNULCBhc3QgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKG5ld1ZhbHVlID0+IG5ld1ZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH0gcmV0dXJuIHN0b3JlO1xuICAgIH0sIHt9KTtcbiAgfTtcbiAgYWRkUmVzb2x2ZUZ1bmN0aW9uc1RvU2NoZW1hKGJ1aWx0U2NoZW1hLCByZWN1cnNlKHJlc29sdmVycykpO1xuICAvLyBjb25zb2xlLmxvZyhyZXNvbHZlcnMpO1xuICByZXR1cm4gYnVpbHRTY2hlbWE7XG59O1xuIl19
