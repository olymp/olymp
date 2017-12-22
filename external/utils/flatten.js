var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flatten = function flatten() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var flattenArr = [];
  var helper = function helper(node, parent, order) {
    var _extends2;

    var newNode = _extends({}, node, (_extends2 = {}, _defineProperty(_extends2, options.parentId, parent && parent[options.id]), _defineProperty(_extends2, 'order', order), _extends2));

    newNode.children.forEach(function (node, index) {
      return helper(node, newNode, index);
    });
    delete newNode.children;

    flattenArr.push(newNode);
  };

  items.forEach(function (item, index) {
    return helper(item, null, index, _extends({
      parentId: 'parentId',
      id: 'id'
    }, options));
  });

  return flattenArr;
};

export default (function (items, options) {
  return flatten(items, options);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2ZsYXR0ZW4uZXM2Il0sIm5hbWVzIjpbImZsYXR0ZW4iLCJpdGVtcyIsIm9wdGlvbnMiLCJmbGF0dGVuQXJyIiwiaGVscGVyIiwibm9kZSIsInBhcmVudCIsIm9yZGVyIiwibmV3Tm9kZSIsInBhcmVudElkIiwiaWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJpbmRleCIsInB1c2giLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLEdBQThCO0FBQUEsTUFBN0JDLEtBQTZCLHVFQUFyQixFQUFxQjtBQUFBLE1BQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUM1QyxNQUFNQyxhQUFhLEVBQW5CO0FBQ0EsTUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQUE7O0FBQ3RDLFFBQU1DLHVCQUNESCxJQURDLDhDQUVISCxRQUFRTyxRQUZMLEVBRWdCSCxVQUFVQSxPQUFPSixRQUFRUSxFQUFmLENBRjFCLHVDQUdKSCxLQUhJLGNBQU47O0FBTUFDLFlBQVFHLFFBQVIsQ0FBaUJDLE9BQWpCLENBQXlCLFVBQUNQLElBQUQsRUFBT1EsS0FBUDtBQUFBLGFBQWlCVCxPQUFPQyxJQUFQLEVBQWFHLE9BQWIsRUFBc0JLLEtBQXRCLENBQWpCO0FBQUEsS0FBekI7QUFDQSxXQUFPTCxRQUFRRyxRQUFmOztBQUVBUixlQUFXVyxJQUFYLENBQWdCTixPQUFoQjtBQUNELEdBWEQ7O0FBYUFQLFFBQU1XLE9BQU4sQ0FBYyxVQUFDRyxJQUFELEVBQU9GLEtBQVA7QUFBQSxXQUNaVCxPQUFPVyxJQUFQLEVBQWEsSUFBYixFQUFtQkYsS0FBbkI7QUFDRUosZ0JBQVUsVUFEWjtBQUVFQyxVQUFJO0FBRk4sT0FHS1IsT0FITCxFQURZO0FBQUEsR0FBZDs7QUFRQSxTQUFPQyxVQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJBLGdCQUFlLFVBQUNGLEtBQUQsRUFBUUMsT0FBUjtBQUFBLFNBQW9CRixRQUFRQyxLQUFSLEVBQWVDLE9BQWYsQ0FBcEI7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2ZsYXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmbGF0dGVuID0gKGl0ZW1zID0gW10sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBmbGF0dGVuQXJyID0gW107XG4gIGNvbnN0IGhlbHBlciA9IChub2RlLCBwYXJlbnQsIG9yZGVyKSA9PiB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IHtcbiAgICAgIC4uLm5vZGUsXG4gICAgICBbb3B0aW9ucy5wYXJlbnRJZF06IHBhcmVudCAmJiBwYXJlbnRbb3B0aW9ucy5pZF0sXG4gICAgICBvcmRlcixcbiAgICB9O1xuXG4gICAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4gaGVscGVyKG5vZGUsIG5ld05vZGUsIGluZGV4KSk7XG4gICAgZGVsZXRlIG5ld05vZGUuY2hpbGRyZW47XG5cbiAgICBmbGF0dGVuQXJyLnB1c2gobmV3Tm9kZSk7XG4gIH07XG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+XG4gICAgaGVscGVyKGl0ZW0sIG51bGwsIGluZGV4LCB7XG4gICAgICBwYXJlbnRJZDogJ3BhcmVudElkJyxcbiAgICAgIGlkOiAnaWQnLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBmbGF0dGVuQXJyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGl0ZW1zLCBvcHRpb25zKSA9PiBmbGF0dGVuKGl0ZW1zLCBvcHRpb25zKTtcbiJdfQ==
