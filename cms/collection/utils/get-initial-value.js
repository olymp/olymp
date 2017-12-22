import _get from 'lodash/get';
import { slugify } from 'olymp-utils';


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LWluaXRpYWwtdmFsdWUuZXM2Il0sIm5hbWVzIjpbInNsdWdpZnkiLCJmaWVsZCIsIml0ZW0iLCJmb3JtIiwiYXV0aCIsIm5hbWUiLCJzcGVjaWFsRmllbGRzIiwiZGVmYXVsdCIsImdldEZpZWxkVmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxPQUFULFFBQXdCLGFBQXhCOzs7QUFHQSxnQkFBZSxnQkFBNEJDLEtBQTVCLEVBQXNDO0FBQUEsdUJBQW5DQyxJQUFtQztBQUFBLE1BQW5DQSxJQUFtQyw2QkFBNUIsRUFBNEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQzNDQyxJQUQyQyxHQUNsQ0osS0FEa0MsQ0FDM0NJLElBRDJDOztBQUVuRCxNQUFJSCxLQUFLRyxJQUFMLENBQUosRUFBZ0I7QUFDZDtBQUNBLFdBQU9ILEtBQUtHLElBQUwsQ0FBUDtBQUNELEdBSEQsTUFHTyxJQUFJSixNQUFNSyxhQUFOLENBQW9CQyxPQUF4QixFQUFpQztBQUN0QztBQUNBLFdBQU9OLE1BQU1LLGFBQU4sQ0FBb0JDLE9BQTNCO0FBQ0QsR0FITSxNQUdBLElBQUlGLFNBQVMsT0FBYixFQUFzQjtBQUMzQjtBQUNBO0FBQ0EsV0FBTyxFQUFQO0FBQ0QsR0FKTSxNQUlBLElBQUlBLFNBQVMsT0FBYixFQUFzQjtBQUMzQixXQUFPLEtBQUlELElBQUosRUFBVSxZQUFWLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUMsU0FBUyxNQUFULElBQW1CRixJQUFuQixJQUEyQkEsS0FBS0ssYUFBTCxDQUFtQixNQUFuQixDQUEvQixFQUEyRDtBQUNoRTtBQUNBLGlCQUFXUixRQUNURyxLQUFLSyxhQUFMLENBQW1CLE1BQW5CLENBRFMsRUFFVEwsS0FBS0ssYUFBTCxDQUFtQixNQUFuQixDQUZTLENBQVg7QUFJRDs7QUFFRCxTQUFPQyxTQUFQO0FBQ0QsQ0F2QkQiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi91dGlscy9nZXQtaW5pdGlhbC12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtID0ge30sIGZvcm0sIGF1dGggfSwgZmllbGQpID0+IHtcbiAgY29uc3QgeyBuYW1lIH0gPSBmaWVsZDtcbiAgaWYgKGl0ZW1bbmFtZV0pIHtcbiAgICAvLyBXZW5uIEl0ZW0gc2Nob24gZXhpc3RpZXJ0LCBkZW4gdm9yaGFuZGVuZW4gV2VydCBuZWhtZW5cbiAgICByZXR1cm4gaXRlbVtuYW1lXTtcbiAgfSBlbHNlIGlmIChmaWVsZC5zcGVjaWFsRmllbGRzLmRlZmF1bHQpIHtcbiAgICAvLyBXZW5uIGVpbiBkZWZhdWx0LVdlcnQgZXhpc3RpZXJ0XG4gICAgcmV0dXJuIGZpZWxkLnNwZWNpYWxGaWVsZHMuZGVmYXVsdDtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnc3RhdGUnKSB7XG4gICAgLy8gQmVpIFN0YXRlXG4gICAgLy8gcmV0dXJuICdEUkFGVCc7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdvcmdJZCcpIHtcbiAgICByZXR1cm4gZ2V0KGF1dGgsICd1c2VyLm9yZ0lkJyk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3NsdWcnICYmIGZvcm0gJiYgZm9ybS5nZXRGaWVsZFZhbHVlKCduYW1lJykpIHtcbiAgICAvLyBCZWkgU2x1Z1xuICAgIHJldHVybiBgLyR7c2x1Z2lmeShcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmFtZScpLFxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKCdkYXRlJyksXG4gICAgKX1gO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iXX0=
