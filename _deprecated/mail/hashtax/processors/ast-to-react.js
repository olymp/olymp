var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { createElement, isValidElement } from 'react';

var defaultComponent = function defaultComponent(_ref) {
  var componentName = _ref.componentName,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return React.createElement(
    'div',
    { style: style, className: className },
    React.createElement(
      'b',
      null,
      'Type not found: ',
      componentName
    ),
    children
  );
};
export default (function (_ref2) {
  var components = _ref2.components,
      decorators = _ref2.decorators,
      fallback = _ref2.fallback;

  fallback = fallback || defaultComponent;
  var cache = {};
  // object to react component
  var create = function create(name, props, children, decos) {
    var key = name + '@' + decos.map(function (x) {
      return x.raw;
    }).join('|');
    var component = cache[key] || components[name] || fallback;
    var needFallback = !components[name];
    if (needFallback) {
      props.componentName = name;
    }
    if (!cache[key]) {
      // cache wrapped component to prevent unmounting/remounting
      decos.forEach(function (_ref3) {
        var type = _ref3.type,
            args = _ref3.args;

        if (decorators[type]) {
          component = decorators[type](component, args);
        }
      });

      cache[key] = component;
    }
    return createElement(component, props, children);
  };
  // prepare node converted from string by processLines
  var compile = function compile() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (node, key) {
      var type = node.type || 'text';
      var children = node.children || [];
      var decos = node.decorators || [];
      var props = node.args ? _extends({}, context, node.args) : _extends({}, context);
      if (key !== undefined) {
        props.key = key;
      }
      if (node.text) {
        props.text = node.text;
      }
      return create(type, props, children.map(compile(context)), decos);
    };
  };
  return compile;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9wcm9jZXNzb3JzL2FzdC10by1yZWFjdC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJkZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb21wb25lbnRzIiwiZGVjb3JhdG9ycyIsImZhbGxiYWNrIiwiY2FjaGUiLCJjcmVhdGUiLCJuYW1lIiwicHJvcHMiLCJkZWNvcyIsImtleSIsIm1hcCIsIngiLCJyYXciLCJqb2luIiwiY29tcG9uZW50IiwibmVlZEZhbGxiYWNrIiwiZm9yRWFjaCIsInR5cGUiLCJhcmdzIiwiY29tcGlsZSIsImNvbnRleHQiLCJub2RlIiwidW5kZWZpbmVkIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixFQUErQkMsY0FBL0IsUUFBcUQsT0FBckQ7O0FBRUEsSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxNQUFrQkMsUUFBbEIsUUFBa0JBLFFBQWxCO0FBQUEsTUFBNEJDLFNBQTVCLFFBQTRCQSxTQUE1QjtBQUFBLE1BQXVDQyxLQUF2QyxRQUF1Q0EsS0FBdkM7QUFBQSxTQUN0QjtBQUFBO0FBQUEsTUFBSyxPQUFPQSxLQUFaLEVBQW1CLFdBQVdELFNBQTlCO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFDbUJGO0FBRG5CLEtBREQ7QUFJRUM7QUFKRixHQURzQjtBQUFBLENBQXpCO0FBT0EsZ0JBQWUsaUJBQTBDO0FBQUEsTUFBdkNHLFVBQXVDLFNBQXZDQSxVQUF1QztBQUFBLE1BQTNCQyxVQUEyQixTQUEzQkEsVUFBMkI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7O0FBQ3ZEQSxhQUFXQSxZQUFZUCxnQkFBdkI7QUFDQSxNQUFNUSxRQUFRLEVBQWQ7QUFDQTtBQUNBLE1BQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY1QsUUFBZCxFQUF3QlUsS0FBeEIsRUFBa0M7QUFDL0MsUUFBTUMsTUFBU0gsSUFBVCxTQUFpQkUsTUFBTUUsR0FBTixDQUFVO0FBQUEsYUFBS0MsRUFBRUMsR0FBUDtBQUFBLEtBQVYsRUFBc0JDLElBQXRCLENBQTJCLEdBQTNCLENBQXZCO0FBQ0EsUUFBSUMsWUFBWVYsTUFBTUssR0FBTixLQUFjUixXQUFXSyxJQUFYLENBQWQsSUFBa0NILFFBQWxEO0FBQ0EsUUFBTVksZUFBZSxDQUFDZCxXQUFXSyxJQUFYLENBQXRCO0FBQ0EsUUFBSVMsWUFBSixFQUFrQjtBQUFFUixZQUFNVixhQUFOLEdBQXNCUyxJQUF0QjtBQUE2QjtBQUNqRCxRQUFJLENBQUNGLE1BQU1LLEdBQU4sQ0FBTCxFQUFpQjtBQUNmO0FBQ0FELFlBQU1RLE9BQU4sQ0FBYyxpQkFBb0I7QUFBQSxZQUFqQkMsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsWUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNoQyxZQUFJaEIsV0FBV2UsSUFBWCxDQUFKLEVBQXNCO0FBQUVILHNCQUFZWixXQUFXZSxJQUFYLEVBQWlCSCxTQUFqQixFQUE0QkksSUFBNUIsQ0FBWjtBQUFnRDtBQUN6RSxPQUZEOztBQUlBZCxZQUFNSyxHQUFOLElBQWFLLFNBQWI7QUFDRDtBQUNELFdBQU9wQixjQUFjb0IsU0FBZCxFQUF5QlAsS0FBekIsRUFBZ0NULFFBQWhDLENBQVA7QUFDRCxHQWREO0FBZUE7QUFDQSxNQUFNcUIsVUFBVSxTQUFWQSxPQUFVO0FBQUEsUUFBQ0MsT0FBRCx1RUFBVyxFQUFYO0FBQUEsV0FBa0IsVUFBQ0MsSUFBRCxFQUFPWixHQUFQLEVBQWU7QUFDL0MsVUFBTVEsT0FBT0ksS0FBS0osSUFBTCxJQUFhLE1BQTFCO0FBQ0EsVUFBTW5CLFdBQVd1QixLQUFLdkIsUUFBTCxJQUFpQixFQUFsQztBQUNBLFVBQU1VLFFBQVFhLEtBQUtuQixVQUFMLElBQW1CLEVBQWpDO0FBQ0EsVUFBTUssUUFBUWMsS0FBS0gsSUFBTCxnQkFBaUJFLE9BQWpCLEVBQTZCQyxLQUFLSCxJQUFsQyxpQkFBZ0RFLE9BQWhELENBQWQ7QUFDQSxVQUFJWCxRQUFRYSxTQUFaLEVBQXVCO0FBQUVmLGNBQU1FLEdBQU4sR0FBWUEsR0FBWjtBQUFrQjtBQUMzQyxVQUFJWSxLQUFLRSxJQUFULEVBQWU7QUFBRWhCLGNBQU1nQixJQUFOLEdBQWFGLEtBQUtFLElBQWxCO0FBQXlCO0FBQzFDLGFBQU9sQixPQUFPWSxJQUFQLEVBQWFWLEtBQWIsRUFBb0JULFNBQVNZLEdBQVQsQ0FBYVMsUUFBUUMsT0FBUixDQUFiLENBQXBCLEVBQW9EWixLQUFwRCxDQUFQO0FBQ0QsS0FSZTtBQUFBLEdBQWhCO0FBU0EsU0FBT1csT0FBUDtBQUNELENBOUJEIiwiZmlsZSI6InBhY2thZ2VzL21haWwvaGFzaHRheC9wcm9jZXNzb3JzL2FzdC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdENvbXBvbmVudCA9ICh7IGNvbXBvbmVudE5hbWUsIGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlIH0pID0+XG4gICg8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIDxiPlxuICAgICAgVHlwZSBub3QgZm91bmQ6IHtjb21wb25lbnROYW1lfVxuICAgIDwvYj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2Pik7XG5leHBvcnQgZGVmYXVsdCAoeyBjb21wb25lbnRzLCBkZWNvcmF0b3JzLCBmYWxsYmFjayB9KSA9PiB7XG4gIGZhbGxiYWNrID0gZmFsbGJhY2sgfHwgZGVmYXVsdENvbXBvbmVudDtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgLy8gb2JqZWN0IHRvIHJlYWN0IGNvbXBvbmVudFxuICBjb25zdCBjcmVhdGUgPSAobmFtZSwgcHJvcHMsIGNoaWxkcmVuLCBkZWNvcykgPT4ge1xuICAgIGNvbnN0IGtleSA9IGAke25hbWV9QCR7ZGVjb3MubWFwKHggPT4geC5yYXcpLmpvaW4oJ3wnKX1gO1xuICAgIGxldCBjb21wb25lbnQgPSBjYWNoZVtrZXldIHx8IGNvbXBvbmVudHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gICAgY29uc3QgbmVlZEZhbGxiYWNrID0gIWNvbXBvbmVudHNbbmFtZV07XG4gICAgaWYgKG5lZWRGYWxsYmFjaykgeyBwcm9wcy5jb21wb25lbnROYW1lID0gbmFtZTsgfVxuICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgLy8gY2FjaGUgd3JhcHBlZCBjb21wb25lbnQgdG8gcHJldmVudCB1bm1vdW50aW5nL3JlbW91bnRpbmdcbiAgICAgIGRlY29zLmZvckVhY2goKHsgdHlwZSwgYXJncyB9KSA9PiB7XG4gICAgICAgIGlmIChkZWNvcmF0b3JzW3R5cGVdKSB7IGNvbXBvbmVudCA9IGRlY29yYXRvcnNbdHlwZV0oY29tcG9uZW50LCBhcmdzKTsgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhY2hlW2tleV0gPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgfTtcbiAgLy8gcHJlcGFyZSBub2RlIGNvbnZlcnRlZCBmcm9tIHN0cmluZyBieSBwcm9jZXNzTGluZXNcbiAgY29uc3QgY29tcGlsZSA9IChjb250ZXh0ID0ge30pID0+IChub2RlLCBrZXkpID0+IHtcbiAgICBjb25zdCB0eXBlID0gbm9kZS50eXBlIHx8ICd0ZXh0JztcbiAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW107XG4gICAgY29uc3QgZGVjb3MgPSBub2RlLmRlY29yYXRvcnMgfHwgW107XG4gICAgY29uc3QgcHJvcHMgPSBub2RlLmFyZ3MgPyB7IC4uLmNvbnRleHQsIC4uLm5vZGUuYXJncyB9IDogeyAuLi5jb250ZXh0IH07XG4gICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7IHByb3BzLmtleSA9IGtleTsgfVxuICAgIGlmIChub2RlLnRleHQpIHsgcHJvcHMudGV4dCA9IG5vZGUudGV4dDsgfVxuICAgIHJldHVybiBjcmVhdGUodHlwZSwgcHJvcHMsIGNoaWxkcmVuLm1hcChjb21waWxlKGNvbnRleHQpKSwgZGVjb3MpO1xuICB9O1xuICByZXR1cm4gY29tcGlsZTtcbn07XG4iXX0=
