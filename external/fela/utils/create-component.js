import { createComponent as createFelaComponent } from 'react-fela';

export default createFelaComponent;
/* export default (style, component, passThrough) =>
  createFelaComponent(
    ({ theme, ...rest }) => (typeof style === 'function' ? style({ theme, ...rest }) : style),
    component,
    ({ dispatch, ...props }) => {
      if (typeof passThrough === 'function') {
        return passThrough(props);
      } else if (passThrough === null) {
        return null;
      } else if (passThrough) {
        return passThrough;
      }
      return Object.keys(props);
    },
  );
*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvY3JlYXRlLWNvbXBvbmVudC5lczYiXSwibmFtZXMiOlsiY3JlYXRlQ29tcG9uZW50IiwiY3JlYXRlRmVsYUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsbUJBQW1CQyxtQkFBNUIsUUFBdUQsWUFBdkQ7O0FBRUEsZUFBZUEsbUJBQWY7QUFDQSIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL2NyZWF0ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgYXMgY3JlYXRlRmVsYUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZWxhQ29tcG9uZW50O1xuLyogZXhwb3J0IGRlZmF1bHQgKHN0eWxlLCBjb21wb25lbnQsIHBhc3NUaHJvdWdoKSA9PlxuICBjcmVhdGVGZWxhQ29tcG9uZW50KFxuICAgICh7IHRoZW1lLCAuLi5yZXN0IH0pID0+ICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicgPyBzdHlsZSh7IHRoZW1lLCAuLi5yZXN0IH0pIDogc3R5bGUpLFxuICAgIGNvbXBvbmVudCxcbiAgICAoeyBkaXNwYXRjaCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwYXNzVGhyb3VnaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcGFzc1Rocm91Z2gocHJvcHMpO1xuICAgICAgfSBlbHNlIGlmIChwYXNzVGhyb3VnaCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAocGFzc1Rocm91Z2gpIHtcbiAgICAgICAgcmV0dXJuIHBhc3NUaHJvdWdoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICB9LFxuICApO1xuKi9cbiJdfQ==
