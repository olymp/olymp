import { traverse } from '../utils';

var defaultRenderer = function defaultRenderer(name, _ref) {
  var value = _ref.value,
      children = _ref.children,
      href = _ref.href;

  if (name === 'paragraph' && value === '') {
    return '';
  } else if (name === 'paragraph' && !value) {
    return '<br />';
  } else if (name === 'paragraph') {
    return '<span>' + value + '</span>';
  } else if (name === 'h1') {
    return '<h1>' + value + '</h1>';
  } else if (name === 'link') {
    return '<a href=' + href + '>' + value + '</a>';
  }
};

export default (function (ast, _ref2) {
  var renderer = _ref2.renderer,
      context = _ref2.context;

  var render = function render() {
    var v = renderer ? renderer.apply(undefined, arguments) : undefined;
    if (v !== undefined) {
      return v;
    }
    return defaultRenderer.apply(undefined, arguments);
  };
  // object to react component
  var create = function create(name, props, decos) {
    if (props.value) {
      props.value = props.value.trim();
    }
    if (props.children) {
      props.children = props.children.join('');
    }
    var text = render(name, props);
    decos.forEach(function (_ref3) {
      var type = _ref3.type,
          args = _ref3.args;

      var newText = render('@{type}', props, text);
      if (newText !== undefined) {
        text = newText;
      }
    });
    return text;
  };
  return ast.map(traverse(create)(context)).join('');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9wcm9jZXNzb3JzL2FzdC10by1odG1sLmVzNiJdLCJuYW1lcyI6WyJ0cmF2ZXJzZSIsImRlZmF1bHRSZW5kZXJlciIsIm5hbWUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiaHJlZiIsImFzdCIsInJlbmRlcmVyIiwiY29udGV4dCIsInJlbmRlciIsInYiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJwcm9wcyIsImRlY29zIiwidHJpbSIsImpvaW4iLCJ0ZXh0IiwiZm9yRWFjaCIsInR5cGUiLCJhcmdzIiwibmV3VGV4dCIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBVCxRQUF5QixVQUF6Qjs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsUUFBcUM7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDM0QsTUFBSUgsU0FBUyxXQUFULElBQXdCQyxVQUFVLEVBQXRDLEVBQTBDO0FBQ3hDLFdBQU8sRUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJRCxTQUFTLFdBQVQsSUFBd0IsQ0FBQ0MsS0FBN0IsRUFBb0M7QUFDekMsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlELFNBQVMsV0FBYixFQUEwQjtBQUMvQixzQkFBZ0JDLEtBQWhCO0FBQ0QsR0FGTSxNQUVBLElBQUlELFNBQVMsSUFBYixFQUFtQjtBQUN4QixvQkFBY0MsS0FBZDtBQUNELEdBRk0sTUFFQSxJQUFJRCxTQUFTLE1BQWIsRUFBcUI7QUFDMUIsd0JBQWtCRyxJQUFsQixTQUEwQkYsS0FBMUI7QUFDRDtBQUNGLENBWkQ7O0FBY0EsZ0JBQWUsVUFBQ0csR0FBRCxTQUFnQztBQUFBLE1BQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7O0FBQzdDLE1BQU1DLFNBQVMsU0FBVEEsTUFBUyxHQUFhO0FBQzFCLFFBQU1DLElBQUlILFdBQVdBLG9DQUFYLEdBQStCSSxTQUF6QztBQUNBLFFBQUlELE1BQU1DLFNBQVYsRUFBcUI7QUFDbkIsYUFBT0QsQ0FBUDtBQUNEO0FBQ0QsV0FBT1QsMkNBQVA7QUFDRCxHQU5EO0FBT0E7QUFDQSxNQUFNVyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ1YsSUFBRCxFQUFPVyxLQUFQLEVBQWNDLEtBQWQsRUFBd0I7QUFDckMsUUFBSUQsTUFBTVYsS0FBVixFQUFpQjtBQUNmVSxZQUFNVixLQUFOLEdBQWNVLE1BQU1WLEtBQU4sQ0FBWVksSUFBWixFQUFkO0FBQ0Q7QUFDRCxRQUFJRixNQUFNVCxRQUFWLEVBQW9CO0FBQ2xCUyxZQUFNVCxRQUFOLEdBQWlCUyxNQUFNVCxRQUFOLENBQWVZLElBQWYsQ0FBb0IsRUFBcEIsQ0FBakI7QUFDRDtBQUNELFFBQUlDLE9BQU9SLE9BQU9QLElBQVAsRUFBYVcsS0FBYixDQUFYO0FBQ0FDLFVBQU1JLE9BQU4sQ0FBYyxpQkFBb0I7QUFBQSxVQUFqQkMsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsVUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNoQyxVQUFNQyxVQUFVWixPQUFPLFNBQVAsRUFBa0JJLEtBQWxCLEVBQXlCSSxJQUF6QixDQUFoQjtBQUNBLFVBQUlJLFlBQVlWLFNBQWhCLEVBQTJCO0FBQ3pCTSxlQUFPSSxPQUFQO0FBQ0Q7QUFDRixLQUxEO0FBTUEsV0FBT0osSUFBUDtBQUNELEdBZkQ7QUFnQkEsU0FBT1gsSUFBSWdCLEdBQUosQ0FBUXRCLFNBQVNZLE1BQVQsRUFBaUJKLE9BQWpCLENBQVIsRUFBbUNRLElBQW5DLENBQXdDLEVBQXhDLENBQVA7QUFDRCxDQTFCRCIsImZpbGUiOiJwYWNrYWdlcy9tYWlsL2hhc2h0YXgvcHJvY2Vzc29ycy9hc3QtdG8taHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYXZlcnNlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0UmVuZGVyZXIgPSAobmFtZSwgeyB2YWx1ZSwgY2hpbGRyZW4sIGhyZWYgfSkgPT4ge1xuICBpZiAobmFtZSA9PT0gJ3BhcmFncmFwaCcgJiYgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwYXJhZ3JhcGgnICYmICF2YWx1ZSkge1xuICAgIHJldHVybiAnPGJyIC8+JztcbiAgfSBlbHNlIGlmIChuYW1lID09PSAncGFyYWdyYXBoJykge1xuICAgIHJldHVybiBgPHNwYW4+JHt2YWx1ZX08L3NwYW4+YDtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnaDEnKSB7XG4gICAgcmV0dXJuIGA8aDE+JHt2YWx1ZX08L2gxPmA7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2xpbmsnKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPSR7aHJlZn0+JHt2YWx1ZX08L2E+YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGFzdCwgeyByZW5kZXJlciwgY29udGV4dCB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgdiA9IHJlbmRlcmVyID8gcmVuZGVyZXIoLi4uYXJncykgOiB1bmRlZmluZWQ7XG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVuZGVyZXIoLi4uYXJncyk7XG4gIH07XG4gIC8vIG9iamVjdCB0byByZWFjdCBjb21wb25lbnRcbiAgY29uc3QgY3JlYXRlID0gKG5hbWUsIHByb3BzLCBkZWNvcykgPT4ge1xuICAgIGlmIChwcm9wcy52YWx1ZSkge1xuICAgICAgcHJvcHMudmFsdWUgPSBwcm9wcy52YWx1ZS50cmltKCk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5jaGlsZHJlbikge1xuICAgICAgcHJvcHMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbi5qb2luKCcnKTtcbiAgICB9XG4gICAgbGV0IHRleHQgPSByZW5kZXIobmFtZSwgcHJvcHMpO1xuICAgIGRlY29zLmZvckVhY2goKHsgdHlwZSwgYXJncyB9KSA9PiB7XG4gICAgICBjb25zdCBuZXdUZXh0ID0gcmVuZGVyKCdAe3R5cGV9JywgcHJvcHMsIHRleHQpO1xuICAgICAgaWYgKG5ld1RleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZXh0ID0gbmV3VGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcbiAgcmV0dXJuIGFzdC5tYXAodHJhdmVyc2UoY3JlYXRlKShjb250ZXh0KSkuam9pbignJyk7XG59O1xuIl19
