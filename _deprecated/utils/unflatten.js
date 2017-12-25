var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortBy = require('lodash/sortBy');

var unflatten = function unflatten(items, _ref, parentItem, level, currentPath) {
  var id = _ref.id,
      parentId = _ref.parentId,
      setPath = _ref.setPath,
      pathProp = _ref.pathProp,
      mapper = _ref.mapper,
      sort = _ref.sort;

  var parent = parentItem ? parentItem[id] : null;
  var children = items.filter(function (item) {
    return item[parentId] === parent;
  }).map(function (item) {
    return mapper(item, parent ? items.find(function (x) {
      return x[id] === parent;
    }) : null);
  });
  if (sort) {
    children = sort(children, parentItem);
  } else {
    // Sortieren nach Order-Nummer
    children = sortBy(children, [function (item) {
      return item.order;
    }]);
  }

  // Rekursion
  return children.map(function (item) {
    var _extends2;

    var path = setPath ? setPath(currentPath, item) : undefined;

    return _extends({}, item, (_extends2 = {}, _defineProperty(_extends2, pathProp, path), _defineProperty(_extends2, 'children', unflatten(items, { id: id, parentId: parentId, setPath: setPath, pathProp: pathProp, mapper: mapper, sort: sort }, item, level + 1, path)), _extends2));
  });
};

export default (function (items) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$id = _ref2.id,
      id = _ref2$id === undefined ? 'id' : _ref2$id,
      _ref2$parentId = _ref2.parentId,
      parentId = _ref2$parentId === undefined ? 'parentId' : _ref2$parentId,
      setPath = _ref2.setPath,
      _ref2$pathProp = _ref2.pathProp,
      pathProp = _ref2$pathProp === undefined ? 'path' : _ref2$pathProp,
      _ref2$mapper = _ref2.mapper,
      mapper = _ref2$mapper === undefined ? function (item) {
    return item;
  } : _ref2$mapper,
      sort = _ref2.sort;

  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var currentPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  return unflatten(items, { id: id, parentId: parentId, setPath: setPath, pathProp: pathProp, mapper: mapper, sort: sort }, parent, level, currentPath);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL3VuZmxhdHRlbi5lczYiXSwibmFtZXMiOlsic29ydEJ5IiwicmVxdWlyZSIsInVuZmxhdHRlbiIsIml0ZW1zIiwicGFyZW50SXRlbSIsImxldmVsIiwiY3VycmVudFBhdGgiLCJpZCIsInBhcmVudElkIiwic2V0UGF0aCIsInBhdGhQcm9wIiwibWFwcGVyIiwic29ydCIsInBhcmVudCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImZpbmQiLCJ4Iiwib3JkZXIiLCJwYXRoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsU0FBU0MsUUFBUSxlQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQ2hCQyxLQURnQixRQUdoQkMsVUFIZ0IsRUFJaEJDLEtBSmdCLEVBS2hCQyxXQUxnQixFQU1iO0FBQUEsTUFKREMsRUFJQyxRQUpEQSxFQUlDO0FBQUEsTUFKR0MsUUFJSCxRQUpHQSxRQUlIO0FBQUEsTUFKYUMsT0FJYixRQUphQSxPQUliO0FBQUEsTUFKc0JDLFFBSXRCLFFBSnNCQSxRQUl0QjtBQUFBLE1BSmdDQyxNQUloQyxRQUpnQ0EsTUFJaEM7QUFBQSxNQUp3Q0MsSUFJeEMsUUFKd0NBLElBSXhDOztBQUNILE1BQU1DLFNBQVNULGFBQWFBLFdBQVdHLEVBQVgsQ0FBYixHQUE4QixJQUE3QztBQUNBLE1BQUlPLFdBQVdYLE1BQ1pZLE1BRFksQ0FDTDtBQUFBLFdBQVFDLEtBQUtSLFFBQUwsTUFBbUJLLE1BQTNCO0FBQUEsR0FESyxFQUVaSSxHQUZZLENBRVI7QUFBQSxXQUNITixPQUFPSyxJQUFQLEVBQWFILFNBQVNWLE1BQU1lLElBQU4sQ0FBVztBQUFBLGFBQUtDLEVBQUVaLEVBQUYsTUFBVU0sTUFBZjtBQUFBLEtBQVgsQ0FBVCxHQUE2QyxJQUExRCxDQURHO0FBQUEsR0FGUSxDQUFmO0FBS0EsTUFBSUQsSUFBSixFQUFVO0FBQ1JFLGVBQVdGLEtBQUtFLFFBQUwsRUFBZVYsVUFBZixDQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQVUsZUFBV2QsT0FBT2MsUUFBUCxFQUFpQixDQUFDO0FBQUEsYUFBUUUsS0FBS0ksS0FBYjtBQUFBLEtBQUQsQ0FBakIsQ0FBWDtBQUNEOztBQUVEO0FBQ0EsU0FBT04sU0FBU0csR0FBVCxDQUFhLFVBQUNELElBQUQsRUFBVTtBQUFBOztBQUM1QixRQUFNSyxPQUFPWixVQUFVQSxRQUFRSCxXQUFSLEVBQXFCVSxJQUFyQixDQUFWLEdBQXVDTSxTQUFwRDs7QUFFQSx3QkFDS04sSUFETCw4Q0FFR04sUUFGSCxFQUVjVyxJQUZkLDBDQUdZbkIsVUFDUkMsS0FEUSxFQUVSLEVBQUVJLE1BQUYsRUFBTUMsa0JBQU4sRUFBZ0JDLGdCQUFoQixFQUF5QkMsa0JBQXpCLEVBQW1DQyxjQUFuQyxFQUEyQ0MsVUFBM0MsRUFGUSxFQUdSSSxJQUhRLEVBSVJYLFFBQVEsQ0FKQSxFQUtSZ0IsSUFMUSxDQUhaO0FBV0QsR0FkTSxDQUFQO0FBZUQsQ0FwQ0Q7O0FBc0NBLGdCQUFlLFVBQ2JsQixLQURhO0FBQUEsa0ZBU1QsRUFUUztBQUFBLHVCQUdYSSxFQUhXO0FBQUEsTUFHWEEsRUFIVyw0QkFHTixJQUhNO0FBQUEsNkJBSVhDLFFBSlc7QUFBQSxNQUlYQSxRQUpXLGtDQUlBLFVBSkE7QUFBQSxNQUtYQyxPQUxXLFNBS1hBLE9BTFc7QUFBQSw2QkFNWEMsUUFOVztBQUFBLE1BTVhBLFFBTlcsa0NBTUEsTUFOQTtBQUFBLDJCQU9YQyxNQVBXO0FBQUEsTUFPWEEsTUFQVyxnQ0FPRjtBQUFBLFdBQVFLLElBQVI7QUFBQSxHQVBFO0FBQUEsTUFRWEosSUFSVyxTQVFYQSxJQVJXOztBQUFBLE1BVWJDLE1BVmEsdUVBVUosSUFWSTtBQUFBLE1BV2JSLEtBWGEsdUVBV0wsQ0FYSztBQUFBLE1BWWJDLFdBWmEsdUVBWUMsRUFaRDtBQUFBLFNBY2JKLFVBQ0VDLEtBREYsRUFFRSxFQUFFSSxNQUFGLEVBQU1DLGtCQUFOLEVBQWdCQyxnQkFBaEIsRUFBeUJDLGtCQUF6QixFQUFtQ0MsY0FBbkMsRUFBMkNDLFVBQTNDLEVBRkYsRUFHRUMsTUFIRixFQUlFUixLQUpGLEVBS0VDLFdBTEYsQ0FkYTtBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvdXRpbHMvdW5mbGF0dGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ydEJ5ID0gcmVxdWlyZSgnbG9kYXNoL3NvcnRCeScpO1xuXG5jb25zdCB1bmZsYXR0ZW4gPSAoXG4gIGl0ZW1zLFxuICB7IGlkLCBwYXJlbnRJZCwgc2V0UGF0aCwgcGF0aFByb3AsIG1hcHBlciwgc29ydCB9LFxuICBwYXJlbnRJdGVtLFxuICBsZXZlbCxcbiAgY3VycmVudFBhdGhcbikgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBwYXJlbnRJdGVtID8gcGFyZW50SXRlbVtpZF0gOiBudWxsO1xuICBsZXQgY2hpbGRyZW4gPSBpdGVtc1xuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtW3BhcmVudElkXSA9PT0gcGFyZW50KVxuICAgIC5tYXAoaXRlbSA9PlxuICAgICAgbWFwcGVyKGl0ZW0sIHBhcmVudCA/IGl0ZW1zLmZpbmQoeCA9PiB4W2lkXSA9PT0gcGFyZW50KSA6IG51bGwpXG4gICAgKTtcbiAgaWYgKHNvcnQpIHtcbiAgICBjaGlsZHJlbiA9IHNvcnQoY2hpbGRyZW4sIHBhcmVudEl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFNvcnRpZXJlbiBuYWNoIE9yZGVyLU51bW1lclxuICAgIGNoaWxkcmVuID0gc29ydEJ5KGNoaWxkcmVuLCBbaXRlbSA9PiBpdGVtLm9yZGVyXSk7XG4gIH1cblxuICAvLyBSZWt1cnNpb25cbiAgcmV0dXJuIGNoaWxkcmVuLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBzZXRQYXRoID8gc2V0UGF0aChjdXJyZW50UGF0aCwgaXRlbSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaXRlbSxcbiAgICAgIFtwYXRoUHJvcF06IHBhdGgsXG4gICAgICBjaGlsZHJlbjogdW5mbGF0dGVuKFxuICAgICAgICBpdGVtcyxcbiAgICAgICAgeyBpZCwgcGFyZW50SWQsIHNldFBhdGgsIHBhdGhQcm9wLCBtYXBwZXIsIHNvcnQgfSxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgbGV2ZWwgKyAxLFxuICAgICAgICBwYXRoXG4gICAgICApLFxuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBpdGVtcyxcbiAge1xuICAgIGlkID0gJ2lkJyxcbiAgICBwYXJlbnRJZCA9ICdwYXJlbnRJZCcsXG4gICAgc2V0UGF0aCxcbiAgICBwYXRoUHJvcCA9ICdwYXRoJyxcbiAgICBtYXBwZXIgPSBpdGVtID0+IGl0ZW0sXG4gICAgc29ydCxcbiAgfSA9IHt9LFxuICBwYXJlbnQgPSBudWxsLFxuICBsZXZlbCA9IDAsXG4gIGN1cnJlbnRQYXRoID0gJydcbikgPT5cbiAgdW5mbGF0dGVuKFxuICAgIGl0ZW1zLFxuICAgIHsgaWQsIHBhcmVudElkLCBzZXRQYXRoLCBwYXRoUHJvcCwgbWFwcGVyLCBzb3J0IH0sXG4gICAgcGFyZW50LFxuICAgIGxldmVsLFxuICAgIGN1cnJlbnRQYXRoXG4gICk7XG4iXX0=
