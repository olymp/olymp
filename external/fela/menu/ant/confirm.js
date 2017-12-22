import 'antd/lib/popconfirm/style';
import _Popconfirm2 from 'antd/lib/popconfirm';
import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';
import 'antd/lib/popconfirm/style';
import _Popconfirm from 'antd/lib/popconfirm';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Menu from 'olymp-fela/menu';


export default (function (_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === undefined ? 'left' : _ref$placement,
      title = _ref.title,
      onConfirm = _ref.onConfirm,
      okText = _ref.okText,
      cancelText = _ref.cancelText,
      children = _ref.children,
      popover = _ref.popover,
      rest = _objectWithoutProperties(_ref, ['placement', 'title', 'onConfirm', 'okText', 'cancelText', 'children', 'popover']);

  return popover === true ? React.createElement(
    _Popover,
    { content: children, placement: placement },
    React.createElement(
      _Popconfirm,
      {
        placement: placement,
        title: title,
        onConfirm: onConfirm,
        okText: okText,
        cancelText: cancelText
      },
      React.createElement(
        Menu.Item,
        rest,
        children
      )
    )
  ) : React.createElement(
    _Popconfirm2,
    {
      placement: placement,
      title: title,
      onConfirm: onConfirm,
      okText: okText,
      cancelText: cancelText
    },
    React.createElement(
      Menu.Item,
      rest,
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9hbnQvY29uZmlybS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwicGxhY2VtZW50IiwidGl0bGUiLCJvbkNvbmZpcm0iLCJva1RleHQiLCJjYW5jZWxUZXh0IiwiY2hpbGRyZW4iLCJwb3BvdmVyIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsaUJBQWpCOzs7QUFHQSxnQkFBZTtBQUFBLDRCQUNiQyxTQURhO0FBQUEsTUFDYkEsU0FEYSxrQ0FDRCxNQURDO0FBQUEsTUFFYkMsS0FGYSxRQUViQSxLQUZhO0FBQUEsTUFHYkMsU0FIYSxRQUdiQSxTQUhhO0FBQUEsTUFJYkMsTUFKYSxRQUliQSxNQUphO0FBQUEsTUFLYkMsVUFMYSxRQUtiQSxVQUxhO0FBQUEsTUFNYkMsUUFOYSxRQU1iQSxRQU5hO0FBQUEsTUFPYkMsT0FQYSxRQU9iQSxPQVBhO0FBQUEsTUFRVkMsSUFSVTs7QUFBQSxTQVViRCxZQUFZLElBQVosR0FDRTtBQUFBO0FBQUEsTUFBUyxTQUFTRCxRQUFsQixFQUE0QixXQUFXTCxTQUF2QztBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFXQSxTQURiO0FBRUUsZUFBT0MsS0FGVDtBQUdFLG1CQUFXQyxTQUhiO0FBSUUsZ0JBQVFDLE1BSlY7QUFLRSxvQkFBWUM7QUFMZDtBQU9FO0FBQUMsWUFBRCxDQUFNLElBQU47QUFBZUcsWUFBZjtBQUFzQkY7QUFBdEI7QUFQRjtBQURGLEdBREYsR0FhRTtBQUFBO0FBQUE7QUFDRSxpQkFBV0wsU0FEYjtBQUVFLGFBQU9DLEtBRlQ7QUFHRSxpQkFBV0MsU0FIYjtBQUlFLGNBQVFDLE1BSlY7QUFLRSxrQkFBWUM7QUFMZDtBQU9FO0FBQUMsVUFBRCxDQUFNLElBQU47QUFBZUcsVUFBZjtBQUFzQkY7QUFBdEI7QUFQRixHQXZCVztBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L2FudC9jb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBQb3Bjb25maXJtLCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHBsYWNlbWVudCA9ICdsZWZ0JyxcbiAgdGl0bGUsXG4gIG9uQ29uZmlybSxcbiAgb2tUZXh0LFxuICBjYW5jZWxUZXh0LFxuICBjaGlsZHJlbixcbiAgcG9wb3ZlcixcbiAgLi4ucmVzdFxufSkgPT5cbiAgcG9wb3ZlciA9PT0gdHJ1ZSA/IChcbiAgICA8UG9wb3ZlciBjb250ZW50PXtjaGlsZHJlbn0gcGxhY2VtZW50PXtwbGFjZW1lbnR9PlxuICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgb25Db25maXJtPXtvbkNvbmZpcm19XG4gICAgICAgIG9rVGV4dD17b2tUZXh0fVxuICAgICAgICBjYW5jZWxUZXh0PXtjYW5jZWxUZXh0fVxuICAgICAgPlxuICAgICAgICA8TWVudS5JdGVtIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9NZW51Lkl0ZW0+XG4gICAgICA8L1BvcGNvbmZpcm0+XG4gICAgPC9Qb3BvdmVyPlxuICApIDogKFxuICAgIDxQb3Bjb25maXJtXG4gICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIG9uQ29uZmlybT17b25Db25maXJtfVxuICAgICAgb2tUZXh0PXtva1RleHR9XG4gICAgICBjYW5jZWxUZXh0PXtjYW5jZWxUZXh0fVxuICAgID5cbiAgICAgIDxNZW51Lkl0ZW0gey4uLnJlc3R9PntjaGlsZHJlbn08L01lbnUuSXRlbT5cbiAgICA8L1BvcGNvbmZpcm0+XG4gICk7XG4iXX0=
