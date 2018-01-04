'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.attachDirectivesToSchema = attachDirectivesToSchema;

var _graphqlTools = require('graphql-tools');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  translate: function translate(value) {
    return (
      // Translate field value.
      value
    );
  }
};

// Helper to attach directives to the schema.

function attachDirectivesToSchema(info, directives) {
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
          typeDef.resolve = (0, _graphqlTools.chainResolvers)([].concat(_toConsumableArray(typeDef.original), _toConsumableArray(directiveResolvers)));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2hlbWEtYnVpbGRlci9hdHRhY2gtZGlyZWN0aXZlcy5lczYiXSwibmFtZXMiOlsiYXR0YWNoRGlyZWN0aXZlc1RvU2NoZW1hIiwidHJhbnNsYXRlIiwidmFsdWUiLCJpbmZvIiwiZGlyZWN0aXZlcyIsImF0dGFjaFNlbGVjdGlvblNldERpcmVjdGl2ZXMiLCJwYXJlbnRUeXBlIiwic2VsZWN0aW9ucyIsImZvckVhY2giLCJzZWxlY3Rpb24iLCJrZXkiLCJuYW1lIiwidHlwZURlZiIsIl9maWVsZHMiLCJmaWVsZE5vZGVUeXBlIiwidHlwZSIsIm9mVHlwZSIsImRpcmVjdGl2ZVJlc29sdmVycyIsIm1hcCIsImRpcmVjdGl2ZSIsInBhcmFtcyIsImFyZ3VtZW50cyIsInJlZHVjZSIsImFjYyIsImFyZyIsIm9iaiIsImFyZ3MiLCJyZXN0IiwiZmlsdGVyIiwieCIsIm9yaWdpbmFsIiwicmVzb2x2ZSIsImxlbmd0aCIsInNlbGVjdGlvblNldCIsImZpZWxkTm9kZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBU2dCQSx3QixHQUFBQSx3Qjs7QUFUaEI7Ozs7OztrQkFFZTtBQUNiQyxhQUFXO0FBQUE7QUFDVDtBQUNDQztBQUZRO0FBQUE7QUFERSxDOztBQU1mOztBQUNPLFNBQVNGLHdCQUFULENBQWtDRyxJQUFsQyxFQUF3Q0MsVUFBeEMsRUFBb0Q7QUFDekQsV0FBU0MsNEJBQVQsT0FBc0RDLFVBQXRELEVBQWtFO0FBQUEsUUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjs7QUFDaEUsV0FBT0EsV0FBV0MsT0FBWCxDQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDdkMsVUFBTUMsTUFBTUQsVUFBVUUsSUFBVixDQUFlVCxLQUEzQjtBQUNBLFVBQU1VLFVBQVVOLFdBQVdPLE9BQVgsQ0FBbUJILEdBQW5CLENBQWhCLENBRnVDLENBRUU7QUFDekMsVUFBSUUsT0FBSixFQUFhO0FBQ1gsWUFBTUUsZ0JBQWdCRixRQUFRRyxJQUFSLENBQWFDLE1BQWIsSUFBdUJKLFFBQVFHLElBQXJEO0FBQ0EsWUFBTUUscUJBQXFCUixVQUFVTCxVQUFWLENBQ3hCYyxHQUR3QixDQUNwQixVQUFDQyxTQUFELEVBQWU7QUFDbEIsY0FBTVIsT0FBT1EsVUFBVVIsSUFBVixDQUFlVCxLQUE1QjtBQUNBLGNBQU1rQixTQUFTRCxVQUFVRSxTQUFWLENBQW9CQyxNQUFwQixDQUNiLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGdDQUNLRCxHQURMLHNCQUVHQyxJQUFJYixJQUFKLENBQVNULEtBRlosRUFFb0JzQixJQUFJdEIsS0FBSixDQUFVQSxLQUY5QjtBQUFBLFdBRGEsRUFLYixFQUxhLENBQWY7QUFPQSxjQUFJRSxXQUFXTyxJQUFYLENBQUosRUFBc0I7QUFDcEIsbUJBQU8sVUFBQ2MsR0FBRCxFQUFNQyxJQUFOO0FBQUEsZ0RBQWVDLElBQWY7QUFBZUEsb0JBQWY7QUFBQTs7QUFBQSxxQkFDTHZCLFdBQVdPLElBQVgscUJBQWlCYyxHQUFqQixlQUEyQkMsSUFBM0IsRUFBb0NOLE1BQXBDLFVBQWlETyxJQUFqRCxFQURLO0FBQUEsYUFBUDtBQUVEO0FBQ0QsaUJBQU8sSUFBUDtBQUNELFNBZndCLEVBZ0J4QkMsTUFoQndCLENBZ0JqQjtBQUFBLGlCQUFLLENBQUMsQ0FBQ0MsQ0FBUDtBQUFBLFNBaEJpQixDQUEzQjtBQWlCQTtBQUNBLFlBQUksQ0FBQ2pCLFFBQVFrQixRQUFiLEVBQXVCO0FBQ3JCbEIsa0JBQVFrQixRQUFSLEdBQW1CLENBQUNsQixRQUFRbUIsT0FBVCxDQUFuQjtBQUNEO0FBQ0Q7QUFDQSxZQUFJZCxtQkFBbUJlLE1BQW5CLEdBQTRCLENBQWhDLEVBQW1DO0FBQ2pDcEIsa0JBQVFtQixPQUFSLEdBQWtCLCtEQUNibkIsUUFBUWtCLFFBREssc0JBRWJiLGtCQUZhLEdBQWxCO0FBSUQsU0FMRCxNQUtPLElBQUlMLFFBQVFrQixRQUFaLEVBQXNCO0FBQzNCbEIsa0JBQVFtQixPQUFSLEdBQWtCbkIsUUFBUWtCLFFBQVIsQ0FBaUIsQ0FBakIsQ0FBbEI7QUFDRDtBQUNEO0FBQ0EsWUFBSXJCLFVBQVV3QixZQUFkLEVBQTRCO0FBQzFCNUIsdUNBQTZCSSxVQUFVd0IsWUFBdkMsRUFBcURuQixhQUFyRDtBQUNEO0FBQ0Y7QUFDRixLQXhDTSxFQXdDSixFQXhDSSxDQUFQO0FBeUNEOztBQUVELFNBQU9ULDZCQUNMLEVBQUVFLFlBQVlKLEtBQUsrQixVQUFuQixFQURLLEVBRUwvQixLQUFLRyxVQUZBLENBQVA7QUFJRCIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvc2NoZW1hLWJ1aWxkZXIvYXR0YWNoLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFpblJlc29sdmVycyB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRyYW5zbGF0ZTogdmFsdWUgPT5cbiAgICAvLyBUcmFuc2xhdGUgZmllbGQgdmFsdWUuXG4gICAgIHZhbHVlLFxufTtcblxuLy8gSGVscGVyIHRvIGF0dGFjaCBkaXJlY3RpdmVzIHRvIHRoZSBzY2hlbWEuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoRGlyZWN0aXZlc1RvU2NoZW1hKGluZm8sIGRpcmVjdGl2ZXMpIHtcbiAgZnVuY3Rpb24gYXR0YWNoU2VsZWN0aW9uU2V0RGlyZWN0aXZlcyh7IHNlbGVjdGlvbnMgfSwgcGFyZW50VHlwZSkge1xuICAgIHJldHVybiBzZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc2VsZWN0aW9uLm5hbWUudmFsdWU7XG4gICAgICBjb25zdCB0eXBlRGVmID0gcGFyZW50VHlwZS5fZmllbGRzW2tleV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmICh0eXBlRGVmKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTm9kZVR5cGUgPSB0eXBlRGVmLnR5cGUub2ZUeXBlIHx8IHR5cGVEZWYudHlwZTtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlUmVzb2x2ZXJzID0gc2VsZWN0aW9uLmRpcmVjdGl2ZXNcbiAgICAgICAgICAubWFwKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGRpcmVjdGl2ZS5hcmd1bWVudHMucmVkdWNlKFxuICAgICAgICAgICAgICAoYWNjLCBhcmcpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgICAgICAgIFthcmcubmFtZS52YWx1ZV06IGFyZy52YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChvYmosIGFyZ3MsIC4uLnJlc3QpID0+XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlc1tuYW1lXShvYmosIHsgLi4uYXJncywgLi4ucGFyYW1zIH0sIC4uLnJlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKHggPT4gISF4KTtcbiAgICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgcmVzb2x2ZXIuXG4gICAgICAgIGlmICghdHlwZURlZi5vcmlnaW5hbCkge1xuICAgICAgICAgIHR5cGVEZWYub3JpZ2luYWwgPSBbdHlwZURlZi5yZXNvbHZlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGFpbiB0aGUgcmVzb2x2ZXJzIGZvciB0aGUgZGlyZWN0aXZlcy5cbiAgICAgICAgaWYgKGRpcmVjdGl2ZVJlc29sdmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdHlwZURlZi5yZXNvbHZlID0gY2hhaW5SZXNvbHZlcnMoW1xuICAgICAgICAgICAgLi4udHlwZURlZi5vcmlnaW5hbCxcbiAgICAgICAgICAgIC4uLmRpcmVjdGl2ZVJlc29sdmVycyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlRGVmLm9yaWdpbmFsKSB7XG4gICAgICAgICAgdHlwZURlZi5yZXNvbHZlID0gdHlwZURlZi5vcmlnaW5hbFswXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNlIGRvd24gdGhlIHNlbGVjdGlvblNldC5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICBhdHRhY2hTZWxlY3Rpb25TZXREaXJlY3RpdmVzKHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQsIGZpZWxkTm9kZVR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaFNlbGVjdGlvblNldERpcmVjdGl2ZXMoXG4gICAgeyBzZWxlY3Rpb25zOiBpbmZvLmZpZWxkTm9kZXMgfSxcbiAgICBpbmZvLnBhcmVudFR5cGVcbiAgKTtcbn1cbiJdfQ==
