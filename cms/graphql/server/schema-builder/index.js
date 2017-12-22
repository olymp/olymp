import _isFunction from 'lodash/isFunction';
import _isPlainObject from 'lodash/isPlainObject';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { parse } from 'graphql/language';
import { buildASTSchema } from 'graphql/utilities';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import applyDirectivesToAST from './apply-directives';


export default (function (_ref) {
  var typeDefs = _ref.typeDefs,
      resolvers = _ref.resolvers,
      directives = _ref.directives,
      onBefore = _ref.onBefore,
      onAfter = _ref.onAfter;

  var ast = parse(typeDefs);
  if (directives) {
    applyDirectivesToAST(ast, directives, resolvers);
  }
  var builtSchema = buildASTSchema(ast);

  // Wrap resolvers for onAfter, onBefore
  var recurse = function recurse(obj) {
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return Object.keys(obj).reduce(function (store, key) {
      var keys = [].concat(_toConsumableArray(currentKeys), [key]);
      if (_isPlainObject(obj[key]) && typeof obj[key].name === 'string') {
        store[key] = obj[key];
      } else if (_isPlainObject(obj[key])) {
        store[key] = recurse(obj[key], keys);
      } else if (_isFunction(obj[key])) {
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
  addResolveFunctionsToSchema(builtSchema, recurse(resolvers));
  // console.log(resolvers);
  return builtSchema;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjaGVtYS1idWlsZGVyL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJwYXJzZSIsImJ1aWxkQVNUU2NoZW1hIiwiYWRkUmVzb2x2ZUZ1bmN0aW9uc1RvU2NoZW1hIiwiYXBwbHlEaXJlY3RpdmVzVG9BU1QiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImRpcmVjdGl2ZXMiLCJvbkJlZm9yZSIsIm9uQWZ0ZXIiLCJhc3QiLCJidWlsdFNjaGVtYSIsInJlY3Vyc2UiLCJvYmoiLCJjdXJyZW50S2V5cyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJzdG9yZSIsImtleSIsIm5hbWUiLCJmbiIsInNvdXJjZSIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJyZXNvbHZlckFTVCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZvckVhY2giLCJob29rIiwidGhlbiIsIm5ld1ZhcmlhYmxlcyIsInZhbHVlIiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsS0FBVCxRQUFzQixrQkFBdEI7QUFDQSxTQUFTQyxjQUFULFFBQStCLG1CQUEvQjtBQUNBLFNBQVNDLDJCQUFULFFBQTRDLGVBQTVDO0FBQ0EsT0FBT0Msb0JBQVAsTUFBaUMsb0JBQWpDOzs7QUFHQSxnQkFBZSxnQkFBNEQ7QUFBQSxNQUF6REMsUUFBeUQsUUFBekRBLFFBQXlEO0FBQUEsTUFBL0NDLFNBQStDLFFBQS9DQSxTQUErQztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUN6RSxNQUFNQyxNQUFNVCxNQUFNSSxRQUFOLENBQVo7QUFDQSxNQUFJRSxVQUFKLEVBQWdCO0FBQ2RILHlCQUFxQk0sR0FBckIsRUFBMEJILFVBQTFCLEVBQXNDRCxTQUF0QztBQUNEO0FBQ0QsTUFBTUssY0FBY1QsZUFBZVEsR0FBZixDQUFwQjs7QUFFQTtBQUNBLE1BQU1FLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQTJCO0FBQUEsUUFBckJDLFdBQXFCLHVFQUFQLEVBQU87O0FBQ3pDLFdBQU9DLE9BQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksTUFBakIsQ0FBd0IsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQzdDLFVBQU1ILG9DQUFXRixXQUFYLElBQXdCSyxHQUF4QixFQUFOO0FBQ0EsVUFBSSxlQUFjTixJQUFJTSxHQUFKLENBQWQsS0FBMkIsT0FBT04sSUFBSU0sR0FBSixFQUFTQyxJQUFoQixLQUF5QixRQUF4RCxFQUFrRTtBQUNoRUYsY0FBTUMsR0FBTixJQUFhTixJQUFJTSxHQUFKLENBQWI7QUFDRCxPQUZELE1BRU8sSUFBSSxlQUFjTixJQUFJTSxHQUFKLENBQWQsQ0FBSixFQUE2QjtBQUNsQ0QsY0FBTUMsR0FBTixJQUFhUCxRQUFRQyxJQUFJTSxHQUFKLENBQVIsRUFBa0JILElBQWxCLENBQWI7QUFDRCxPQUZNLE1BRUEsSUFBSSxZQUFXSCxJQUFJTSxHQUFKLENBQVgsQ0FBSixFQUEwQjtBQUMvQixZQUFNRSxLQUFLUixJQUFJTSxHQUFKLENBQVg7QUFDQUQsY0FBTUMsR0FBTixJQUFhLFVBQUNHLE1BQUQsRUFBU0MsU0FBVCxFQUFvQkMsT0FBcEIsRUFBNkJDLFdBQTdCLEVBQTZDO0FBQ3hELGNBQUlDLFVBQVVDLFFBQVFDLE9BQVIsQ0FBZ0JMLFNBQWhCLENBQWQ7QUFDQWYsbUJBQVNxQixPQUFULENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUN6Qkosc0JBQVVBLFFBQVFLLElBQVIsQ0FBYSxVQUFDQyxZQUFELEVBQWtCO0FBQ3ZDVCwwQkFBWVMsZ0JBQWdCVCxTQUE1QjtBQUNBLHFCQUFPTyxLQUFLLEVBQUVkLFVBQUYsRUFBUU0sY0FBUixFQUFnQkMsb0JBQWhCLEVBQTJCQyxnQkFBM0IsRUFBb0NDLHdCQUFwQyxFQUFpRGYsUUFBakQsRUFBTCxDQUFQO0FBQ0QsYUFIUyxDQUFWO0FBSUQsV0FMRDtBQU1BZ0Isb0JBQVVBLFFBQVFLLElBQVIsQ0FBYSxVQUFDQyxZQUFELEVBQWtCO0FBQ3ZDVCx3QkFBWVMsZ0JBQWdCVCxTQUE1QjtBQUNBLG1CQUFPRixHQUFHQyxNQUFILEVBQVdDLFNBQVgsRUFBc0JDLE9BQXRCLEVBQStCQyxXQUEvQixDQUFQO0FBQ0QsV0FIUyxDQUFWO0FBSUEsY0FBSVEsY0FBSjtBQUNBeEIsa0JBQVFvQixPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN4Qkosc0JBQVVBLFFBQVFLLElBQVIsQ0FBYSxVQUFDRyxRQUFELEVBQWM7QUFDbkNELHNCQUFRQyxZQUFZRCxLQUFwQjtBQUNBLHFCQUFPSCxLQUFLLEVBQUVkLFVBQUYsRUFBUU0sY0FBUixFQUFnQlcsWUFBaEIsRUFBdUJWLG9CQUF2QixFQUFrQ0MsZ0JBQWxDLEVBQTJDQyx3QkFBM0MsRUFBd0RmLFFBQXhELEVBQUwsQ0FBUDtBQUNELGFBSFMsQ0FBVjtBQUlELFdBTEQ7QUFNQSxpQkFBT2dCLFFBQVFLLElBQVIsQ0FBYTtBQUFBLG1CQUFZRyxZQUFZRCxLQUF4QjtBQUFBLFdBQWIsQ0FBUDtBQUNELFNBcEJEO0FBcUJELE9BdkJNLE1BdUJBO0FBQ0xmLGNBQU1DLEdBQU4sSUFBYU4sSUFBSU0sR0FBSixDQUFiO0FBQ0QsT0FBQyxPQUFPRCxLQUFQO0FBQ0gsS0FoQ00sRUFnQ0osRUFoQ0ksQ0FBUDtBQWlDRCxHQWxDRDtBQW1DQWYsOEJBQTRCUSxXQUE1QixFQUF5Q0MsUUFBUU4sU0FBUixDQUF6QztBQUNBO0FBQ0EsU0FBT0ssV0FBUDtBQUNELENBOUNEIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjaGVtYS1idWlsZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IGJ1aWxkQVNUU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC91dGlsaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVzb2x2ZUZ1bmN0aW9uc1RvU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgYXBwbHlEaXJlY3RpdmVzVG9BU1QgZnJvbSAnLi9hcHBseS1kaXJlY3RpdmVzJztcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGlzRnVuY3Rpb24sIGdldCwga2V5cyBhcyBfa2V5cywgdmFsdWVzIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdHlwZURlZnMsIHJlc29sdmVycywgZGlyZWN0aXZlcywgb25CZWZvcmUsIG9uQWZ0ZXIgfSkgPT4ge1xuICBjb25zdCBhc3QgPSBwYXJzZSh0eXBlRGVmcyk7XG4gIGlmIChkaXJlY3RpdmVzKSB7XG4gICAgYXBwbHlEaXJlY3RpdmVzVG9BU1QoYXN0LCBkaXJlY3RpdmVzLCByZXNvbHZlcnMpO1xuICB9XG4gIGNvbnN0IGJ1aWx0U2NoZW1hID0gYnVpbGRBU1RTY2hlbWEoYXN0KTtcblxuICAvLyBXcmFwIHJlc29sdmVycyBmb3Igb25BZnRlciwgb25CZWZvcmVcbiAgY29uc3QgcmVjdXJzZSA9IChvYmosIGN1cnJlbnRLZXlzID0gW10pID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbLi4uY3VycmVudEtleXMsIGtleV07XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvYmpba2V5XSkgJiYgdHlwZW9mIG9ialtrZXldLm5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChvYmpba2V5XSkpIHtcbiAgICAgICAgc3RvcmVba2V5XSA9IHJlY3Vyc2Uob2JqW2tleV0sIGtleXMpO1xuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkge1xuICAgICAgICBjb25zdCBmbiA9IG9ialtrZXldO1xuICAgICAgICBzdG9yZVtrZXldID0gKHNvdXJjZSwgdmFyaWFibGVzLCBjb250ZXh0LCByZXNvbHZlckFTVCkgPT4ge1xuICAgICAgICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHZhcmlhYmxlcyk7XG4gICAgICAgICAgb25CZWZvcmUuZm9yRWFjaCgoaG9vaykgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigobmV3VmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhcmlhYmxlcyA9IG5ld1ZhcmlhYmxlcyB8fCB2YXJpYWJsZXM7XG4gICAgICAgICAgICAgIHJldHVybiBob29rKHsga2V5cywgc291cmNlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHJlc29sdmVyQVNULCBhc3QgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKChuZXdWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IG5ld1ZhcmlhYmxlcyB8fCB2YXJpYWJsZXM7XG4gICAgICAgICAgICByZXR1cm4gZm4oc291cmNlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHJlc29sdmVyQVNUKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgb25BZnRlci5mb3JFYWNoKChob29rKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlIHx8IHZhbHVlO1xuICAgICAgICAgICAgICByZXR1cm4gaG9vayh7IGtleXMsIHNvdXJjZSwgdmFsdWUsIHZhcmlhYmxlcywgY29udGV4dCwgcmVzb2x2ZXJBU1QsIGFzdCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4obmV3VmFsdWUgPT4gbmV3VmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmVba2V5XSA9IG9ialtrZXldO1xuICAgICAgfSByZXR1cm4gc3RvcmU7XG4gICAgfSwge30pO1xuICB9O1xuICBhZGRSZXNvbHZlRnVuY3Rpb25zVG9TY2hlbWEoYnVpbHRTY2hlbWEsIHJlY3Vyc2UocmVzb2x2ZXJzKSk7XG4gIC8vIGNvbnNvbGUubG9nKHJlc29sdmVycyk7XG4gIHJldHVybiBidWlsdFNjaGVtYTtcbn07XG4iXX0=
