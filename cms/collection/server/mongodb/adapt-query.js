'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
exports.default = adaptQuery;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9tb25nb2RiL2FkYXB0LXF1ZXJ5LmVzNiJdLCJuYW1lcyI6WyJhdHRyaWJzIiwiYWRhcHRRdWVyeSIsIm9iaiIsInNraXBRdWVyeSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsIiRhbmQiLCJhbmQiLCIkb3IiLCJvciIsIiRndGUiLCIkbHQiLCIkcmVnZXgiLCJSZWdFeHAiLCJudWxsIiwiJGVxIiwiJG5lIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsSUFBdkMsRUFBNkMsS0FBN0MsQ0FBaEI7QUFDQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFTO0FBQzFCQSxxQkFBV0EsR0FBWDtBQUNBLE1BQUlBLElBQUlDLFNBQVIsRUFBbUI7QUFDakIsV0FBTyxFQUFQO0FBQ0Q7QUFDRCxTQUFPRCxJQUFJQyxTQUFYO0FBQ0FDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDLFFBQUlMLElBQUlLLEdBQUosS0FBWUMsTUFBTUMsT0FBTixDQUFjUCxJQUFJSyxHQUFKLENBQWQsQ0FBaEIsRUFBeUM7QUFDdkNMLFVBQUlLLEdBQUosSUFBV0wsSUFBSUssR0FBSixFQUFTRyxHQUFULENBQ1Q7QUFBQSxlQUFTLFFBQU9DLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsR0FBMkJWLFdBQVdVLElBQVgsQ0FBM0IsR0FBOENBLElBQXZEO0FBQUEsT0FEUyxDQUFYO0FBR0QsS0FKRCxNQUlPLElBQUlULElBQUlLLEdBQUosS0FBWSxRQUFPTCxJQUFJSyxHQUFKLENBQVAsTUFBb0IsUUFBcEMsRUFBOEM7QUFDbkRMLFVBQUlLLEdBQUosSUFBV04sV0FBV0MsSUFBSUssR0FBSixDQUFYLENBQVg7QUFDRDtBQUNELFFBQUlBLFFBQVEsS0FBWixFQUFtQjtBQUNqQkwsVUFBSVUsSUFBSixHQUFXVixJQUFJVyxHQUFmO0FBQ0EsYUFBT1gsSUFBSVcsR0FBWDtBQUNBO0FBQ0Q7QUFDRCxRQUFJTixRQUFRLElBQVosRUFBa0I7QUFDaEJMLFVBQUlZLEdBQUosR0FBVVosSUFBSWEsRUFBZDtBQUNBLGFBQU9iLElBQUlhLEVBQVg7QUFDQTtBQUNEO0FBQ0QsUUFBSVIsUUFBUSxTQUFaLEVBQXVCO0FBQ3JCTCxVQUFJYyxJQUFKLEdBQVdkLElBQUlLLEdBQUosRUFBUyxDQUFULENBQVg7QUFDQUwsVUFBSWUsR0FBSixHQUFVZixJQUFJSyxHQUFKLEVBQVMsQ0FBVCxDQUFWO0FBQ0EsYUFBT0wsSUFBSUssR0FBSixDQUFQO0FBQ0E7QUFDRDtBQUNELFFBQUlBLFFBQVEsWUFBWixFQUEwQjtBQUN4QkwsVUFBSWdCLE1BQUosR0FBYSxJQUFJQyxNQUFKLE9BQWVqQixJQUFJSyxHQUFKLENBQWYsU0FBNkIsR0FBN0IsQ0FBYjtBQUNBLGFBQU9MLElBQUlLLEdBQUosQ0FBUDtBQUNBO0FBQ0Q7QUFDRCxRQUFJQSxRQUFRLFVBQVosRUFBd0I7QUFDdEJMLFVBQUlnQixNQUFKLEdBQWEsSUFBSUMsTUFBSixRQUFnQmpCLElBQUlLLEdBQUosQ0FBaEIsU0FBOEIsR0FBOUIsQ0FBYjtBQUNBLGFBQU9MLElBQUlLLEdBQUosQ0FBUDtBQUNBO0FBQ0Q7QUFDRCxRQUFJQSxRQUFRLE1BQVosRUFBb0I7QUFDbEIsVUFBSUwsSUFBSWtCLElBQVIsRUFBYztBQUNabEIsWUFBSW1CLEdBQUosR0FBVSxJQUFWO0FBQ0Q7QUFDRCxVQUFJLENBQUNuQixJQUFJa0IsSUFBVCxFQUFlO0FBQ2JsQixZQUFJb0IsR0FBSixHQUFVLElBQVY7QUFDRDtBQUNELGFBQU9wQixJQUFJa0IsSUFBWDtBQUNBO0FBQ0Q7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsUUFBSXBCLFFBQVF1QixPQUFSLENBQWdCaEIsR0FBaEIsTUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUMvQkwsZ0JBQVFLLEdBQVIsSUFBaUJMLElBQUlLLEdBQUosQ0FBakI7QUFDQSxhQUFPTCxJQUFJSyxHQUFKLENBQVA7QUFDRDtBQUNGLEdBL0REO0FBZ0VBLFNBQU9MLEdBQVA7QUFDRCxDQXZFRDtrQkF3RWVELFUiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vc2VydmVyL21vbmdvZGIvYWRhcHQtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdHRyaWJzID0gWydlcScsICduZScsICdsdCcsICdndCcsICdndGUnLCAnbHRlJywgJ2luJywgJ25pbiddO1xuY29uc3QgYWRhcHRRdWVyeSA9IChvYmopID0+IHtcbiAgb2JqID0geyAuLi5vYmogfTtcbiAgaWYgKG9iai5za2lwUXVlcnkpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgZGVsZXRlIG9iai5za2lwUXVlcnk7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKG9ialtrZXldICYmIEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICBvYmpba2V5XSA9IG9ialtrZXldLm1hcChcbiAgICAgICAgaXRlbSA9PiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8gYWRhcHRRdWVyeShpdGVtKSA6IGl0ZW0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAob2JqW2tleV0gJiYgdHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgb2JqW2tleV0gPSBhZGFwdFF1ZXJ5KG9ialtrZXldKTtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ2FuZCcpIHtcbiAgICAgIG9iai4kYW5kID0gb2JqLmFuZDtcbiAgICAgIGRlbGV0ZSBvYmouYW5kO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnb3InKSB7XG4gICAgICBvYmouJG9yID0gb2JqLm9yO1xuICAgICAgZGVsZXRlIG9iai5vcjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ2JldHdlZW4nKSB7XG4gICAgICBvYmouJGd0ZSA9IG9ialtrZXldWzBdO1xuICAgICAgb2JqLiRsdCA9IG9ialtrZXldWzFdO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnc3RhcnRzV2l0aCcpIHtcbiAgICAgIG9iai4kcmVnZXggPSBuZXcgUmVnRXhwKGBeJHtvYmpba2V5XX0uKmAsICdpJyk7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdjb250YWlucycpIHtcbiAgICAgIG9iai4kcmVnZXggPSBuZXcgUmVnRXhwKGAuKiR7b2JqW2tleV19LipgLCAnaScpO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnbnVsbCcpIHtcbiAgICAgIGlmIChvYmoubnVsbCkge1xuICAgICAgICBvYmouJGVxID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghb2JqLm51bGwpIHtcbiAgICAgICAgb2JqLiRuZSA9IG51bGw7XG4gICAgICB9XG4gICAgICBkZWxldGUgb2JqLm51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlmIChrZXkgPT09ICdkYXknKSB7XG4gICAgICBvYmouJHdoZXJlID0gYHJldHVybiB0aGlzLmVuZGUuZ2V0RGF0ZSgpID09ICR7b2JqW2tleV19YDtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ21vbnRoJykge1xuICAgICAgb2JqLiR3aGVyZSA9IGByZXR1cm4gdGhpcy5lbmRlLmdldE1vbnRoKCkgPT0gJHtvYmpba2V5XX1gO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAneWVhcicpIHtcbiAgICAgIG9iai4kd2hlcmUgPSBgcmV0dXJuIHRoaXMuZW5kZS5nZXRGdWxsWWVhcigpID09ICR7b2JqW2tleV19YDtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9ICovXG4gICAgaWYgKGF0dHJpYnMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgb2JqW2AkJHtrZXl9YF0gPSBvYmpba2V5XTtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkYXB0UXVlcnk7XG4iXX0=
