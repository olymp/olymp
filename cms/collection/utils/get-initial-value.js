import _get from 'lodash/get';
import slugify from 'slugify';


export default (function (_ref, field) {
  var _ref$item = _ref.item,
      item = _ref$item === undefined ? {} : _ref$item,
      form = _ref.form,
      auth = _ref.auth;
  var name = field.name;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (field.specialFields.default) {
    // Wenn ein default-Wert existiert
    return field.specialFields.default;
  } else if (name === 'state') {
    // Bei State
    // return 'DRAFT';
    return '';
  } else if (name === 'orgId') {
    return _get(auth, 'user.orgId');
  } else if (name === 'slug' && form && form.getFieldValue('name')) {
    // Bei Slug
    return '/' + slugify(form.getFieldValue('name'), form.getFieldValue('date'));
  }

  return undefined;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1pbml0aWFsLXZhbHVlLmVzNiJdLCJuYW1lcyI6WyJzbHVnaWZ5IiwiZmllbGQiLCJpdGVtIiwiZm9ybSIsImF1dGgiLCJuYW1lIiwic3BlY2lhbEZpZWxkcyIsImRlZmF1bHQiLCJnZXRGaWVsZFZhbHVlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsT0FBUCxNQUFvQixTQUFwQjs7O0FBR0EsZ0JBQWUsZ0JBQTRCQyxLQUE1QixFQUFzQztBQUFBLHVCQUFuQ0MsSUFBbUM7QUFBQSxNQUFuQ0EsSUFBbUMsNkJBQTVCLEVBQTRCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUMzQ0MsSUFEMkMsR0FDbENKLEtBRGtDLENBQzNDSSxJQUQyQzs7QUFFbkQsTUFBSUgsS0FBS0csSUFBTCxDQUFKLEVBQWdCO0FBQ2Q7QUFDQSxXQUFPSCxLQUFLRyxJQUFMLENBQVA7QUFDRCxHQUhELE1BR08sSUFBSUosTUFBTUssYUFBTixDQUFvQkMsT0FBeEIsRUFBaUM7QUFDdEM7QUFDQSxXQUFPTixNQUFNSyxhQUFOLENBQW9CQyxPQUEzQjtBQUNELEdBSE0sTUFHQSxJQUFJRixTQUFTLE9BQWIsRUFBc0I7QUFDM0I7QUFDQTtBQUNBLFdBQU8sRUFBUDtBQUNELEdBSk0sTUFJQSxJQUFJQSxTQUFTLE9BQWIsRUFBc0I7QUFDM0IsV0FBTyxLQUFJRCxJQUFKLEVBQVUsWUFBVixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlDLFNBQVMsTUFBVCxJQUFtQkYsSUFBbkIsSUFBMkJBLEtBQUtLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBL0IsRUFBMkQ7QUFDaEU7QUFDQSxpQkFBV1IsUUFDVEcsS0FBS0ssYUFBTCxDQUFtQixNQUFuQixDQURTLEVBRVRMLEtBQUtLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FGUyxDQUFYO0FBSUQ7O0FBRUQsU0FBT0MsU0FBUDtBQUNELENBdkJEIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1pbml0aWFsLXZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtID0ge30sIGZvcm0sIGF1dGggfSwgZmllbGQpID0+IHtcbiAgY29uc3QgeyBuYW1lIH0gPSBmaWVsZDtcbiAgaWYgKGl0ZW1bbmFtZV0pIHtcbiAgICAvLyBXZW5uIEl0ZW0gc2Nob24gZXhpc3RpZXJ0LCBkZW4gdm9yaGFuZGVuZW4gV2VydCBuZWhtZW5cbiAgICByZXR1cm4gaXRlbVtuYW1lXTtcbiAgfSBlbHNlIGlmIChmaWVsZC5zcGVjaWFsRmllbGRzLmRlZmF1bHQpIHtcbiAgICAvLyBXZW5uIGVpbiBkZWZhdWx0LVdlcnQgZXhpc3RpZXJ0XG4gICAgcmV0dXJuIGZpZWxkLnNwZWNpYWxGaWVsZHMuZGVmYXVsdDtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnc3RhdGUnKSB7XG4gICAgLy8gQmVpIFN0YXRlXG4gICAgLy8gcmV0dXJuICdEUkFGVCc7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdvcmdJZCcpIHtcbiAgICByZXR1cm4gZ2V0KGF1dGgsICd1c2VyLm9yZ0lkJyk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3NsdWcnICYmIGZvcm0gJiYgZm9ybS5nZXRGaWVsZFZhbHVlKCduYW1lJykpIHtcbiAgICAvLyBCZWkgU2x1Z1xuICAgIHJldHVybiBgLyR7c2x1Z2lmeShcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmFtZScpLFxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKCdkYXRlJyksXG4gICAgKX1gO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iXX0=
