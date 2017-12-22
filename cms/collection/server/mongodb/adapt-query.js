var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var attribs = ['eq', 'ne', 'lt', 'gt', 'gte', 'lte', 'in', 'nin'];
var adaptQuery = function adaptQuery(obj) {
  obj = _extends({}, obj);
  if (obj.skipQuery) {
    return {};
  }
  delete obj.skipQuery;
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && Array.isArray(obj[key])) {
      obj[key] = obj[key].map(function (item) {
        return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? adaptQuery(item) : item;
      });
    } else if (obj[key] && _typeof(obj[key]) === 'object') {
      obj[key] = adaptQuery(obj[key]);
    }
    if (key === 'and') {
      obj.$and = obj.and;
      delete obj.and;
      return;
    }
    if (key === 'or') {
      obj.$or = obj.or;
      delete obj.or;
      return;
    }
    if (key === 'between') {
      obj.$gte = obj[key][0];
      obj.$lt = obj[key][1];
      delete obj[key];
      return;
    }
    if (key === 'startsWith') {
      obj.$regex = new RegExp('^' + obj[key] + '.*', 'i');
      delete obj[key];
      return;
    }
    if (key === 'contains') {
      obj.$regex = new RegExp('.*' + obj[key] + '.*', 'i');
      delete obj[key];
      return;
    }
    if (key === 'null') {
      if (obj.null) {
        obj.$eq = null;
      }
      if (!obj.null) {
        obj.$ne = null;
      }
      delete obj.null;
      return;
    }
    /* if (key === 'day') {
      obj.$where = `return this.ende.getDate() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'month') {
      obj.$where = `return this.ende.getMonth() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'year') {
      obj.$where = `return this.ende.getFullYear() == ${obj[key]}`;
      delete obj[key];
      return;
    } */
    if (attribs.indexOf(key) !== -1) {
      obj['$' + key] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};
export default adaptQuery;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL21vbmdvZGIvYWRhcHQtcXVlcnkuZXM2Il0sIm5hbWVzIjpbImF0dHJpYnMiLCJhZGFwdFF1ZXJ5Iiwib2JqIiwic2tpcFF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiJGFuZCIsImFuZCIsIiRvciIsIm9yIiwiJGd0ZSIsIiRsdCIsIiRyZWdleCIsIlJlZ0V4cCIsIm51bGwiLCIkZXEiLCIkbmUiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsVUFBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE2QyxLQUE3QyxDQUFoQjtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUJBLHFCQUFXQSxHQUFYO0FBQ0EsTUFBSUEsSUFBSUMsU0FBUixFQUFtQjtBQUNqQixXQUFPLEVBQVA7QUFDRDtBQUNELFNBQU9ELElBQUlDLFNBQVg7QUFDQUMsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQVM7QUFDaEMsUUFBSUwsSUFBSUssR0FBSixLQUFZQyxNQUFNQyxPQUFOLENBQWNQLElBQUlLLEdBQUosQ0FBZCxDQUFoQixFQUF5QztBQUN2Q0wsVUFBSUssR0FBSixJQUFXTCxJQUFJSyxHQUFKLEVBQVNHLEdBQVQsQ0FDVDtBQUFBLGVBQVMsUUFBT0MsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixHQUEyQlYsV0FBV1UsSUFBWCxDQUEzQixHQUE4Q0EsSUFBdkQ7QUFBQSxPQURTLENBQVg7QUFHRCxLQUpELE1BSU8sSUFBSVQsSUFBSUssR0FBSixLQUFZLFFBQU9MLElBQUlLLEdBQUosQ0FBUCxNQUFvQixRQUFwQyxFQUE4QztBQUNuREwsVUFBSUssR0FBSixJQUFXTixXQUFXQyxJQUFJSyxHQUFKLENBQVgsQ0FBWDtBQUNEO0FBQ0QsUUFBSUEsUUFBUSxLQUFaLEVBQW1CO0FBQ2pCTCxVQUFJVSxJQUFKLEdBQVdWLElBQUlXLEdBQWY7QUFDQSxhQUFPWCxJQUFJVyxHQUFYO0FBQ0E7QUFDRDtBQUNELFFBQUlOLFFBQVEsSUFBWixFQUFrQjtBQUNoQkwsVUFBSVksR0FBSixHQUFVWixJQUFJYSxFQUFkO0FBQ0EsYUFBT2IsSUFBSWEsRUFBWDtBQUNBO0FBQ0Q7QUFDRCxRQUFJUixRQUFRLFNBQVosRUFBdUI7QUFDckJMLFVBQUljLElBQUosR0FBV2QsSUFBSUssR0FBSixFQUFTLENBQVQsQ0FBWDtBQUNBTCxVQUFJZSxHQUFKLEdBQVVmLElBQUlLLEdBQUosRUFBUyxDQUFULENBQVY7QUFDQSxhQUFPTCxJQUFJSyxHQUFKLENBQVA7QUFDQTtBQUNEO0FBQ0QsUUFBSUEsUUFBUSxZQUFaLEVBQTBCO0FBQ3hCTCxVQUFJZ0IsTUFBSixHQUFhLElBQUlDLE1BQUosT0FBZWpCLElBQUlLLEdBQUosQ0FBZixTQUE2QixHQUE3QixDQUFiO0FBQ0EsYUFBT0wsSUFBSUssR0FBSixDQUFQO0FBQ0E7QUFDRDtBQUNELFFBQUlBLFFBQVEsVUFBWixFQUF3QjtBQUN0QkwsVUFBSWdCLE1BQUosR0FBYSxJQUFJQyxNQUFKLFFBQWdCakIsSUFBSUssR0FBSixDQUFoQixTQUE4QixHQUE5QixDQUFiO0FBQ0EsYUFBT0wsSUFBSUssR0FBSixDQUFQO0FBQ0E7QUFDRDtBQUNELFFBQUlBLFFBQVEsTUFBWixFQUFvQjtBQUNsQixVQUFJTCxJQUFJa0IsSUFBUixFQUFjO0FBQ1psQixZQUFJbUIsR0FBSixHQUFVLElBQVY7QUFDRDtBQUNELFVBQUksQ0FBQ25CLElBQUlrQixJQUFULEVBQWU7QUFDYmxCLFlBQUlvQixHQUFKLEdBQVUsSUFBVjtBQUNEO0FBQ0QsYUFBT3BCLElBQUlrQixJQUFYO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxRQUFJcEIsUUFBUXVCLE9BQVIsQ0FBZ0JoQixHQUFoQixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9CTCxnQkFBUUssR0FBUixJQUFpQkwsSUFBSUssR0FBSixDQUFqQjtBQUNBLGFBQU9MLElBQUlLLEdBQUosQ0FBUDtBQUNEO0FBQ0YsR0EvREQ7QUFnRUEsU0FBT0wsR0FBUDtBQUNELENBdkVEO0FBd0VBLGVBQWVELFVBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9zZXJ2ZXIvbW9uZ29kYi9hZGFwdC1xdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF0dHJpYnMgPSBbJ2VxJywgJ25lJywgJ2x0JywgJ2d0JywgJ2d0ZScsICdsdGUnLCAnaW4nLCAnbmluJ107XG5jb25zdCBhZGFwdFF1ZXJ5ID0gKG9iaikgPT4ge1xuICBvYmogPSB7IC4uLm9iaiB9O1xuICBpZiAob2JqLnNraXBRdWVyeSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBkZWxldGUgb2JqLnNraXBRdWVyeTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAob2JqW2tleV0gJiYgQXJyYXkuaXNBcnJheShvYmpba2V5XSkpIHtcbiAgICAgIG9ialtrZXldID0gb2JqW2tleV0ubWFwKFxuICAgICAgICBpdGVtID0+ICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgPyBhZGFwdFF1ZXJ5KGl0ZW0pIDogaXRlbSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChvYmpba2V5XSAmJiB0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBvYmpba2V5XSA9IGFkYXB0UXVlcnkob2JqW2tleV0pO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnYW5kJykge1xuICAgICAgb2JqLiRhbmQgPSBvYmouYW5kO1xuICAgICAgZGVsZXRlIG9iai5hbmQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdvcicpIHtcbiAgICAgIG9iai4kb3IgPSBvYmoub3I7XG4gICAgICBkZWxldGUgb2JqLm9yO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnYmV0d2VlbicpIHtcbiAgICAgIG9iai4kZ3RlID0gb2JqW2tleV1bMF07XG4gICAgICBvYmouJGx0ID0gb2JqW2tleV1bMV07XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdzdGFydHNXaXRoJykge1xuICAgICAgb2JqLiRyZWdleCA9IG5ldyBSZWdFeHAoYF4ke29ialtrZXldfS4qYCwgJ2knKTtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRhaW5zJykge1xuICAgICAgb2JqLiRyZWdleCA9IG5ldyBSZWdFeHAoYC4qJHtvYmpba2V5XX0uKmAsICdpJyk7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdudWxsJykge1xuICAgICAgaWYgKG9iai5udWxsKSB7XG4gICAgICAgIG9iai4kZXEgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmoubnVsbCkge1xuICAgICAgICBvYmouJG5lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBvYmoubnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogaWYgKGtleSA9PT0gJ2RheScpIHtcbiAgICAgIG9iai4kd2hlcmUgPSBgcmV0dXJuIHRoaXMuZW5kZS5nZXREYXRlKCkgPT0gJHtvYmpba2V5XX1gO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnbW9udGgnKSB7XG4gICAgICBvYmouJHdoZXJlID0gYHJldHVybiB0aGlzLmVuZGUuZ2V0TW9udGgoKSA9PSAke29ialtrZXldfWA7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICd5ZWFyJykge1xuICAgICAgb2JqLiR3aGVyZSA9IGByZXR1cm4gdGhpcy5lbmRlLmdldEZ1bGxZZWFyKCkgPT0gJHtvYmpba2V5XX1gO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH0gKi9cbiAgICBpZiAoYXR0cmlicy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICBvYmpbYCQke2tleX1gXSA9IG9ialtrZXldO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmo7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRhcHRRdWVyeTtcbiJdfQ==
