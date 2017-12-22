function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

export default createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.inverted ? theme.light2 : theme.dark2,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    marginTop: theme.space2,
    marginBottom: theme.space1,
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-in-out'
  };
}, function (_ref2) {
  var extra = _ref2.extra,
      children = _ref2.children,
      p = _objectWithoutProperties(_ref2, ['extra', 'children']);

  return React.createElement(
    'div',
    p,
    children,
    !!extra && React.createElement(
      Image,
      { extra: true },
      extra
    )
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS90aXRsZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJJbWFnZSIsInRoZW1lIiwiY29sb3IiLCJpbnZlcnRlZCIsImxpZ2h0MiIsImRhcmsyIiwiZWxsaXBzaXMiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJmb250U2l6ZVNtYWxsIiwibWFyZ2luVG9wIiwic3BhY2UyIiwibWFyZ2luQm90dG9tIiwic3BhY2UxIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJqdXN0aWZ5Q29udGVudCIsIm9wYWNpdHkiLCJjb2xsYXBzZWQiLCJ0cmFuc2l0aW9uIiwiZXh0cmEiLCJjaGlsZHJlbiIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7QUFFQSxlQUFlRCxnQkFDYjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFdBQU9ELE1BQU1FLFFBQU4sR0FBaUJGLE1BQU1HLE1BQXZCLEdBQWdDSCxNQUFNSSxLQUQvQjtBQUVkQyxjQUFVLElBRkk7QUFHZEMsbUJBQWUsV0FIRDtBQUlkQyxjQUFVUCxNQUFNUSxhQUpGO0FBS2RDLGVBQVdULE1BQU1VLE1BTEg7QUFNZEMsa0JBQWNYLE1BQU1ZLE1BTk47QUFPZEMsV0FBTyxNQVBPO0FBUWRDLGFBQVMsTUFSSztBQVNkQyxjQUFVLENBVEk7QUFVZEMsb0JBQWdCLGVBVkY7QUFXZEMsYUFBU2pCLE1BQU1rQixTQUFOLEdBQWtCLENBQWxCLEdBQXNCLENBWGpCO0FBWWRDLGdCQUFZO0FBWkUsR0FBaEI7QUFBQSxDQURhLEVBZWI7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFNBQVVBLFFBQVY7QUFBQSxNQUF1QkMsQ0FBdkI7O0FBQUEsU0FDRTtBQUFBO0FBQVNBLEtBQVQ7QUFDR0QsWUFESDtBQUVHLEtBQUMsQ0FBQ0QsS0FBRixJQUFXO0FBQUMsV0FBRDtBQUFBLFFBQU8sV0FBUDtBQUFjQTtBQUFkO0FBRmQsR0FERjtBQUFBLENBZmEsRUFxQmI7QUFBQSxTQUFLRyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBckJhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L3RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazIsXG4gICAgZWxsaXBzaXM6IHRydWUsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplU21hbGwsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZTIsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjZTEsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEdyb3c6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBvcGFjaXR5OiB0aGVtZS5jb2xsYXBzZWQgPyAwIDogMSxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCcsXG4gIH0pLFxuICAoeyBleHRyYSwgY2hpbGRyZW4sIC4uLnAgfSkgPT4gKFxuICAgIDxkaXYgey4uLnB9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgeyEhZXh0cmEgJiYgPEltYWdlIGV4dHJhPntleHRyYX08L0ltYWdlPn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
