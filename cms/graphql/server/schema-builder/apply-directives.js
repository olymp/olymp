var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('graphql/language'),
    visit = _require.visit;

var getFunc = function getFunc(ast, directives, resolvers, throwOnMissing) {
  return function (node, key, parent, path, ancestors, method) {
    if (node.directives && node.directives.length) {
      var current = node;
      node.directives.forEach(function (directive) {
        if (!current) {
          return;
        }
        var directiveName = directive.name.value;
        if (directiveName in directives) {
          var staticFunctions = directives[directiveName].resolveStatic;
          if (staticFunctions[method]) {
            var ret = staticFunctions[method].call({}, current, directive, Object.assign({
              key: key,
              parent: parent,
              path: path,
              ancestors: ancestors,
              ast: ast,
              resolvers: resolvers
            }));
            if ((typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
              current = ret;
            }
          }
        } else if (throwOnMissing) {
          throw new Error('Unknown directive \'' + directiveName + '\'');
        }
      });
      return current;
    }
    return undefined;
  };
};

export default (function (ast, directives, resolvers) {
  var throwOnMissing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var func = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter: function enter(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'enter');
    },
    leave: function leave(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'leave');
    }
  });

  var func2 = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter: function enter(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'enter2');
    },
    leave: function leave(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'leave2');
    }
  });
  Object.keys(directives || {}).map(function (key) {
    return directives[key];
  }).forEach(function (_ref) {
    var resolveStatic = _ref.resolveStatic;
    return resolveStatic && resolveStatic.finalize && resolveStatic.finalize.apply({}, ast);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjaGVtYS1idWlsZGVyL2FwcGx5LWRpcmVjdGl2ZXMuZXM2Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ2aXNpdCIsImdldEZ1bmMiLCJhc3QiLCJkaXJlY3RpdmVzIiwicmVzb2x2ZXJzIiwidGhyb3dPbk1pc3NpbmciLCJub2RlIiwia2V5IiwicGFyZW50IiwicGF0aCIsImFuY2VzdG9ycyIsIm1ldGhvZCIsImxlbmd0aCIsImN1cnJlbnQiLCJmb3JFYWNoIiwiZGlyZWN0aXZlIiwiZGlyZWN0aXZlTmFtZSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXRpY0Z1bmN0aW9ucyIsInJlc29sdmVTdGF0aWMiLCJyZXQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJmdW5jIiwiZW50ZXIiLCJsZWF2ZSIsImZ1bmMyIiwia2V5cyIsIm1hcCIsImZpbmFsaXplIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7O2VBQWtCQSxRQUFRLGtCQUFSLEM7SUFBVkMsSyxZQUFBQSxLOztBQUVSLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1DLFVBQU4sRUFBa0JDLFNBQWxCLEVBQTZCQyxjQUE3QjtBQUFBLFNBQWdELFVBQzlEQyxJQUQ4RCxFQUU5REMsR0FGOEQsRUFHOURDLE1BSDhELEVBSTlEQyxJQUo4RCxFQUs5REMsU0FMOEQsRUFNOURDLE1BTjhELEVBTzNEO0FBQ0gsUUFBSUwsS0FBS0gsVUFBTCxJQUFtQkcsS0FBS0gsVUFBTCxDQUFnQlMsTUFBdkMsRUFBK0M7QUFDN0MsVUFBSUMsVUFBVVAsSUFBZDtBQUNBQSxXQUFLSCxVQUFMLENBQWdCVyxPQUFoQixDQUF3QixVQUFDQyxTQUFELEVBQWU7QUFDckMsWUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWjtBQUNEO0FBQ0QsWUFBTUcsZ0JBQWdCRCxVQUFVRSxJQUFWLENBQWVDLEtBQXJDO0FBQ0EsWUFBSUYsaUJBQWlCYixVQUFy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Z2VzL2dyYXBocWwvc2VydmVyL3NjaGVtYS1idWlsZGVyL2FwcGx5LWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHZpc2l0IH0gPSByZXF1aXJlKCdncmFwaHFsL2xhbmd1YWdlJyk7XG5cbmNvbnN0IGdldEZ1bmMgPSAoYXN0LCBkaXJlY3RpdmVzLCByZXNvbHZlcnMsIHRocm93T25NaXNzaW5nKSA9PiAoXG4gIG5vZGUsXG4gIGtleSxcbiAgcGFyZW50LFxuICBwYXRoLFxuICBhbmNlc3RvcnMsXG4gIG1ldGhvZFxuKSA9PiB7XG4gIGlmIChub2RlLmRpcmVjdGl2ZXMgJiYgbm9kZS5kaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICBub2RlLmRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlO1xuICAgICAgaWYgKGRpcmVjdGl2ZU5hbWUgaW4gZGlyZWN0aXZlcykge1xuICAgICAgICBjb25zdCBzdGF0aWNGdW5jdGlvbnMgPSBkaXJlY3RpdmVzW2RpcmVjdGl2ZU5hbWVdLnJlc29sdmVTdGF0aWM7XG4gICAgICAgIGlmIChzdGF0aWNGdW5jdGlvbnNbbWV0aG9kXSkge1xuICAgICAgICAgIGNvbnN0IHJldCA9IHN0YXRpY0Z1bmN0aW9uc1ttZXRob2RdLmNhbGwoXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICBkaXJlY3RpdmUsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIGFuY2VzdG9ycyxcbiAgICAgICAgICAgICAgYXN0LFxuICAgICAgICAgICAgICByZXNvbHZlcnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRocm93T25NaXNzaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkaXJlY3RpdmUgJyR7ZGlyZWN0aXZlTmFtZX0nYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChhc3QsIGRpcmVjdGl2ZXMsIHJlc29sdmVycywgdGhyb3dPbk1pc3NpbmcgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBmdW5jID0gZ2V0RnVuYyhhc3QsIGRpcmVjdGl2ZXMsIHJlc29sdmVycywgdGhyb3dPbk1pc3NpbmcpO1xuICB2aXNpdChhc3QsIHtcbiAgICBlbnRlcihub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gICAgICByZXR1cm4gZnVuYyhub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzLCAnZW50ZXInKTtcbiAgICB9LFxuICAgIGxlYXZlKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAgICAgIHJldHVybiBmdW5jKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMsICdsZWF2ZScpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGZ1bmMyID0gZ2V0RnVuYyhhc3QsIGRpcmVjdGl2ZXMsIHJlc29sdmVycywgdGhyb3dPbk1pc3NpbmcpO1xuICB2aXNpdChhc3QsIHtcbiAgICBlbnRlcihub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gICAgICByZXR1cm4gZnVuYzIobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycywgJ2VudGVyMicpO1xuICAgIH0sXG4gICAgbGVhdmUobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycykge1xuICAgICAgcmV0dXJuIGZ1bmMyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMsICdsZWF2ZTInKTtcbiAgICB9LFxuICB9KTtcbiAgT2JqZWN0LmtleXMoZGlyZWN0aXZlcyB8fCB7fSlcbiAgICAubWFwKGtleSA9PiBkaXJlY3RpdmVzW2tleV0pXG4gICAgLmZvckVhY2goXG4gICAgICAoeyByZXNvbHZlU3RhdGljIH0pID0+XG4gICAgICAgIHJlc29sdmVTdGF0aWMgJiZcbiAgICAgICAgcmVzb2x2ZVN0YXRpYy5maW5hbGl6ZSAmJlxuICAgICAgICByZXNvbHZlU3RhdGljLmZpbmFsaXplLmFwcGx5KHt9LCBhc3QpXG4gICAgKTtcbn07XG4iXX0=
