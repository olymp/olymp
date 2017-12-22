import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Menu from 'olymp-fela/menu';


export default (function (_ref) {
  var open = _ref.open,
      children = _ref.children,
      content = _ref.content,
      _ref$placement = _ref.placement,
      placement = _ref$placement === undefined ? 'left' : _ref$placement,
      rest = _objectWithoutProperties(_ref, ['open', 'children', 'content', 'placement']);

  return React.createElement(
    _Popover,
    {
      placement: placement,
      title: content && children,
      content: content || children
    },
    React.createElement(
      Menu.Item,
      rest,
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9hbnQvcG9wb3Zlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51Iiwib3BlbiIsImNoaWxkcmVuIiwiY29udGVudCIsInBsYWNlbWVudCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsaUJBQWpCOzs7QUFHQSxnQkFBZTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLFFBQVQsUUFBU0EsUUFBVDtBQUFBLE1BQW1CQyxPQUFuQixRQUFtQkEsT0FBbkI7QUFBQSw0QkFBNEJDLFNBQTVCO0FBQUEsTUFBNEJBLFNBQTVCLGtDQUF3QyxNQUF4QztBQUFBLE1BQW1EQyxJQUFuRDs7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFLGlCQUFXRCxTQURiO0FBRUUsYUFBT0QsV0FBV0QsUUFGcEI7QUFHRSxlQUFTQyxXQUFXRDtBQUh0QjtBQUtFO0FBQUMsVUFBRCxDQUFNLElBQU47QUFBZUcsVUFBZjtBQUFzQkg7QUFBdEI7QUFMRixHQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL21lbnUvYW50L3BvcG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgb3BlbiwgY2hpbGRyZW4sIGNvbnRlbnQsIHBsYWNlbWVudCA9ICdsZWZ0JywgLi4ucmVzdCB9KSA9PiAoXG4gIDxQb3BvdmVyXG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdGl0bGU9e2NvbnRlbnQgJiYgY2hpbGRyZW59XG4gICAgY29udGVudD17Y29udGVudCB8fCBjaGlsZHJlbn1cbiAgPlxuICAgIDxNZW51Lkl0ZW0gey4uLnJlc3R9PntjaGlsZHJlbn08L01lbnUuSXRlbT5cbiAgPC9Qb3BvdmVyPlxuKTtcbiJdfQ==
