'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _olympFela = require('olymp-fela');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var display = _ref.display,
      axis = _ref.axis,
      show = _ref.show,
      alignLabel = _ref.alignLabel,
      rest = _objectWithoutProperties(_ref, ['display', 'axis', 'show', 'alignLabel']);

  return _extends({
    position: 'relative',
    // border: '1px solid transparent',
    overflowY: 'auto',
    display: show === false ? 'none' : display,
    flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined,
    '> *': display === 'flex' && {
      overflowY: 'auto'
    }
  }, rest, {
    '& .ant-form-item': alignLabel && {
      // oops, should not be here!
      marginBottom: 12,
      '> .ant-form-item-label': {
        textAlign: alignLabel
      }
    }
  });
}, 'div', ['children', 'itemScope', 'itemType']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcGFuZWwuZXM2Il0sIm5hbWVzIjpbImRpc3BsYXkiLCJheGlzIiwic2hvdyIsImFsaWduTGFiZWwiLCJyZXN0IiwicG9zaXRpb24iLCJvdmVyZmxvd1kiLCJmbGV4RGlyZWN0aW9uIiwidW5kZWZpbmVkIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O2tCQUVlLGdDQUNiO0FBQUEsTUFBR0EsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsSUFBWixRQUFZQSxJQUFaO0FBQUEsTUFBa0JDLElBQWxCLFFBQWtCQSxJQUFsQjtBQUFBLE1BQXdCQyxVQUF4QixRQUF3QkEsVUFBeEI7QUFBQSxNQUF1Q0MsSUFBdkM7O0FBQUE7QUFDRUMsY0FBVSxVQURaO0FBRUU7QUFDQUMsZUFBVyxNQUhiO0FBSUVOLGFBQVNFLFNBQVMsS0FBVCxHQUFpQixNQUFqQixHQUEwQkYsT0FKckM7QUFLRU8sbUJBQWVOLFNBQVMsR0FBVCxHQUFlLEtBQWYsR0FBdUJBLFNBQVMsR0FBVCxHQUFlLFFBQWYsR0FBMEJPLFNBTGxFO0FBTUUsV0FBT1IsWUFBWSxNQUFaLElBQXNCO0FBQzNCTSxpQkFBVztBQURnQjtBQU4vQixLQVNLRixJQVRMO0FBVUUsd0JBQW9CRCxjQUFjO0FBQ2hDO0FBQ0FNLG9CQUFjLEVBRmtCO0FBR2hDLGdDQUEwQjtBQUN4QkMsbUJBQVdQO0FBRGE7QUFITTtBQVZwQztBQUFBLENBRGEsRUFtQmIsS0FuQmEsRUFvQmIsQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQixVQUExQixDQXBCYSxDIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvcGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyBkaXNwbGF5LCBheGlzLCBzaG93LCBhbGlnbkxhYmVsLCAuLi5yZXN0IH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiBzaG93ID09PSBmYWxzZSA/ICdub25lJyA6IGRpc3BsYXksXG4gICAgZmxleERpcmVjdGlvbjogYXhpcyA9PT0gJ3gnID8gJ3JvdycgOiBheGlzID09PSAneScgPyAnY29sdW1uJyA6IHVuZGVmaW5lZCxcbiAgICAnPiAqJzogZGlzcGxheSA9PT0gJ2ZsZXgnICYmIHtcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIH0sXG4gICAgLi4ucmVzdCxcbiAgICAnJiAuYW50LWZvcm0taXRlbSc6IGFsaWduTGFiZWwgJiYge1xuICAgICAgLy8gb29wcywgc2hvdWxkIG5vdCBiZSBoZXJlIVxuICAgICAgbWFyZ2luQm90dG9tOiAxMixcbiAgICAgICc+IC5hbnQtZm9ybS1pdGVtLWxhYmVsJzoge1xuICAgICAgICB0ZXh0QWxpZ246IGFsaWduTGFiZWwsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgWydjaGlsZHJlbicsICdpdGVtU2NvcGUnLCAnaXRlbVR5cGUnXSxcbik7XG4iXX0=
