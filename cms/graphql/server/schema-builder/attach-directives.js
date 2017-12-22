var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { chainResolvers } from 'graphql-tools';

export default {
  translate: function translate(value) {
    return (
      // Translate field value.
      value
    );
  }
};

// Helper to attach directives to the schema.
export function attachDirectivesToSchema(info, directives) {
  function attachSelectionSetDirectives(_ref, parentType) {
    var selections = _ref.selections;

    return selections.forEach(function (selection) {
      var key = selection.name.value;
      var typeDef = parentType._fields[key]; // eslint-disable-line
      if (typeDef) {
        var fieldNodeType = typeDef.type.ofType || typeDef.type;
        var directiveResolvers = selection.directives.map(function (directive) {
          var name = directive.name.value;
          var params = directive.arguments.reduce(function (acc, arg) {
            return _extends({}, acc, _defineProperty({}, arg.name.value, arg.value.value));
          }, {});
          if (directives[name]) {
            return function (obj, args) {
              for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }

              return directives[name].apply(directives, [obj, _extends({}, args, params)].concat(rest));
            };
          }
          return null;
        }).filter(function (x) {
          return !!x;
        });
        // Keep track of the original resolver.
        if (!typeDef.original) {
          typeDef.original = [typeDef.resolve];
        }
        // Chain the resolvers for the directives.
        if (directiveResolvers.length > 0) {
          typeDef.resolve = chainResolvers([].concat(_toConsumableArray(typeDef.original), _toConsumableArray(directiveResolvers)));
        } else if (typeDef.original) {
          typeDef.resolve = typeDef.original[0];
        }
        // Recurse down the selectionSet.
        if (selection.selectionSet) {
          attachSelectionSetDirectives(selection.selectionSet, fieldNodeType);
        }
      }
    }, {});
  }

  return attachSelectionSetDirectives({ selections: info.fieldNodes }, info.parentType);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjaGVtYS1idWlsZGVyL2F0dGFjaC1kaXJlY3RpdmVzLmVzNiJdLCJuYW1lcyI6WyJjaGFpblJlc29sdmVycyIsInRyYW5zbGF0ZSIsInZhbHVlIiwiYXR0YWNoRGlyZWN0aXZlc1RvU2NoZW1hIiwiaW5mbyIsImRpcmVjdGl2ZXMiLCJhdHRhY2hTZWxlY3Rpb25TZXREaXJlY3RpdmVzIiwicGFyZW50VHlwZSIsInNlbGVjdGlvbnMiLCJmb3JFYWNoIiwic2VsZWN0aW9uIiwia2V5IiwibmFtZSIsInR5cGVEZWYiLCJfZmllbGRzIiwiZmllbGROb2RlVHlwZSIsInR5cGUiLCJvZlR5cGUiLCJkaXJlY3RpdmVSZXNvbHZlcnMiLCJtYXAiLCJkaXJlY3RpdmUiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJyZWR1Y2UiLCJhY2MiLCJhcmciLCJvYmoiLCJhcmdzIiwicmVzdCIsImZpbHRlciIsIngiLCJvcmlnaW5hbCIsInJlc29sdmUiLCJsZW5ndGgiLCJzZWxlY3Rpb25TZXQiLCJmaWVsZE5vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxjQUFULFFBQStCLGVBQS9COztBQUVBLGVBQWU7QUFDYkMsYUFBVztBQUFBO0FBQ1Q7QUFDQ0M7QUFGUTtBQUFBO0FBREUsQ0FBZjs7QUFNQTtBQUNBLE9BQU8sU0FBU0Msd0JBQVQsQ0FBa0NDLElBQWxDLEVBQXdDQyxVQUF4QyxFQUFvRDtBQUN6RCxXQUFTQyw0QkFBVCxPQUFzREMsVUFBdEQsRUFBa0U7QUFBQSxRQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCOztBQUNoRSxXQUFPQSxXQUFXQyxPQUFYLENBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUN2QyxVQUFNQyxNQUFNRCxVQUFVRSxJQUFWLENBQWVWLEtBQTNCO0FBQ0EsVUFBTVcsVUFBVU4sV0FBV08sT0FBWCxDQUFtQkgsR0FBbkIsQ0FBaEIsQ0FGdUMsQ0FFRTtBQUN6QyxVQUFJRSxPQUFKLEVBQWE7QUFDWCxZQUFNRSxnQkFBZ0JGLFFBQVFHLElBQVIsQ0FBYUMsTUFBYixJQUF1QkosUUFBUUcsSUFBckQ7QUFDQSxZQUFNRSxxQkFBcUJSLFVBQVVMLFVBQVYsQ0FDeEJjLEdBRHdCLENBQ3BCLFVBQUNDLFNBQUQsRUFBZTtBQUNsQixjQUFNUixPQUFPUSxVQUFVUixJQUFWLENBQWVWLEtBQTVCO0FBQ0EsY0FBTW1CLFNBQVNELFVBQVVFLFNBQVYsQ0FBb0JDLE1BQXBCLENBQ2IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsZ0NBQ0tELEdBREwsc0JBRUdDLElBQUliLElBQUosQ0FBU1YsS0FGWixFQUVvQnVCLElBQUl2QixLQUFKLENBQVVBLEtBRjlCO0FBQUEsV0FEYSxFQUtiLEVBTGEsQ0FBZjtBQU9BLGNBQUlHLFdBQVdPLElBQVgsQ0FBSixFQUFzQjtBQUNwQixtQkFBTyxVQUFDYyxHQUFELEVBQU1DLElBQU47QUFBQSxnREFBZUMsSUFBZjtBQUFlQSxvQkFBZjtBQUFBOztBQUFBLHFCQUNMdkIsV0FBV08sSUFBWCxxQkFBaUJjLEdBQWpCLGVBQTJCQyxJQUEzQixFQUFvQ04sTUFBcEMsVUFBaURPLElBQWpELEVBREs7QUFBQSxhQUFQO0FBRUQ7QUFDRCxpQkFBTyxJQUFQO0FBQ0QsU0Fmd0IsRUFnQnhCQyxNQWhCd0IsQ0FnQmpCO0FBQUEsaUJBQUssQ0FBQyxDQUFDQyxDQUFQO0FBQUEsU0FoQmlCLENBQTNCO0FBaUJBO0FBQ0EsWUFBSSxDQUFDakIsUUFBUWtCLFFBQWIsRUFBdUI7QUFDckJsQixrQkFBUWtCLFFBQVIsR0FBbUIsQ0FBQ2xCLFFBQVFtQixPQUFULENBQW5CO0FBQ0Q7QUFDRDtBQUNBLFlBQUlkLG1CQUFtQmUsTUFBbkIsR0FBNEIsQ0FBaEMsRUFBbUM7QUFDakNwQixrQkFBUW1CLE9BQVIsR0FBa0JoQyw0Q0FDYmEsUUFBUWtCLFFBREssc0JBRWJiLGtCQUZhLEdBQWxCO0FBSUQsU0FMRCxNQUtPLElBQUlMLFFBQVFrQixRQUFaLEVBQXNCO0FBQzNCbEIsa0JBQVFtQixPQUFSLEdBQWtCbkIsUUFBUWtCLFFBQVIsQ0FBaUIsQ0FBakIsQ0FBbEI7QUFDRDtBQUNEO0FBQ0EsWUFBSXJCLFVBQVV3QixZQUFkLEVBQTRCO0FBQzFCNUIsdUNBQTZCSSxVQUFVd0IsWUFBdkMsRUFBcURuQixhQUFyRDtBQUNEO0FBQ0Y7QUFDRixLQXhDTSxFQXdDSixFQXhDSSxDQUFQO0FBeUNEOztBQUVELFNBQU9ULDZCQUNMLEVBQUVFLFlBQVlKLEtBQUsrQixVQUFuQixFQURLLEVBRUwvQixLQUFLRyxVQUZBLENBQVA7QUFJRCIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci9zY2hlbWEtYnVpbGRlci9hdHRhY2gtZGlyZWN0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYWluUmVzb2x2ZXJzIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHJhbnNsYXRlOiB2YWx1ZSA9PlxuICAgIC8vIFRyYW5zbGF0ZSBmaWVsZCB2YWx1ZS5cbiAgICAgdmFsdWUsXG59O1xuXG4vLyBIZWxwZXIgdG8gYXR0YWNoIGRpcmVjdGl2ZXMgdG8gdGhlIHNjaGVtYS5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hEaXJlY3RpdmVzVG9TY2hlbWEoaW5mbywgZGlyZWN0aXZlcykge1xuICBmdW5jdGlvbiBhdHRhY2hTZWxlY3Rpb25TZXREaXJlY3RpdmVzKHsgc2VsZWN0aW9ucyB9LCBwYXJlbnRUeXBlKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZWxlY3Rpb24ubmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IHR5cGVEZWYgPSBwYXJlbnRUeXBlLl9maWVsZHNba2V5XTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKHR5cGVEZWYpIHtcbiAgICAgICAgY29uc3QgZmllbGROb2RlVHlwZSA9IHR5cGVEZWYudHlwZS5vZlR5cGUgfHwgdHlwZURlZi50eXBlO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVSZXNvbHZlcnMgPSBzZWxlY3Rpb24uZGlyZWN0aXZlc1xuICAgICAgICAgIC5tYXAoKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZGlyZWN0aXZlLmFyZ3VtZW50cy5yZWR1Y2UoXG4gICAgICAgICAgICAgIChhY2MsIGFyZykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgICAgICAgW2FyZy5uYW1lLnZhbHVlXTogYXJnLnZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlc1tuYW1lXSkge1xuICAgICAgICAgICAgICByZXR1cm4gKG9iaiwgYXJncywgLi4ucmVzdCkgPT5cbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzW25hbWVdKG9iaiwgeyAuLi5hcmdzLCAuLi5wYXJhbXMgfSwgLi4ucmVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoeCA9PiAhIXgpO1xuICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCByZXNvbHZlci5cbiAgICAgICAgaWYgKCF0eXBlRGVmLm9yaWdpbmFsKSB7XG4gICAgICAgICAgdHlwZURlZi5vcmlnaW5hbCA9IFt0eXBlRGVmLnJlc29sdmVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoYWluIHRoZSByZXNvbHZlcnMgZm9yIHRoZSBkaXJlY3RpdmVzLlxuICAgICAgICBpZiAoZGlyZWN0aXZlUmVzb2x2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0eXBlRGVmLnJlc29sdmUgPSBjaGFpblJlc29sdmVycyhbXG4gICAgICAgICAgICAuLi50eXBlRGVmLm9yaWdpbmFsLFxuICAgICAgICAgICAgLi4uZGlyZWN0aXZlUmVzb2x2ZXJzLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVEZWYub3JpZ2luYWwpIHtcbiAgICAgICAgICB0eXBlRGVmLnJlc29sdmUgPSB0eXBlRGVmLm9yaWdpbmFsWzBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlY3Vyc2UgZG93biB0aGUgc2VsZWN0aW9uU2V0LlxuICAgICAgICBpZiAoc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgIGF0dGFjaFNlbGVjdGlvblNldERpcmVjdGl2ZXMoc2VsZWN0aW9uLnNlbGVjdGlvblNldCwgZmllbGROb2RlVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gYXR0YWNoU2VsZWN0aW9uU2V0RGlyZWN0aXZlcyhcbiAgICB7IHNlbGVjdGlvbnM6IGluZm8uZmllbGROb2RlcyB9LFxuICAgIGluZm8ucGFyZW50VHlwZVxuICApO1xufVxuIl19
