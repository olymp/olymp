import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Menu from 'olymp-fela/menu';


export default (function (_ref) {
  var open = _ref.open,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['open', 'children']);

  return !open ? React.createElement(
    _Tooltip,
    { placement: 'left', title: children },
    React.createElement(
      Menu.Item,
      rest,
      children
    )
  ) : React.createElement(
    Menu.Item,
    rest,
    children
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9hbnQvdG9vbHRpcC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51Iiwib3BlbiIsImNoaWxkcmVuIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixpQkFBakI7OztBQUdBLGdCQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxRQUFUO0FBQUEsTUFBc0JDLElBQXRCOztBQUFBLFNBQ2IsQ0FBQ0YsSUFBRCxHQUNFO0FBQUE7QUFBQSxNQUFTLFdBQVUsTUFBbkIsRUFBMEIsT0FBT0MsUUFBakM7QUFDRTtBQUFDLFVBQUQsQ0FBTSxJQUFOO0FBQWVDLFVBQWY7QUFBc0JEO0FBQXRCO0FBREYsR0FERixHQUtFO0FBQUMsUUFBRCxDQUFNLElBQU47QUFBZUMsUUFBZjtBQUFzQkQ7QUFBdEIsR0FOVztBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L2FudC90b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+XG4gICFvcGVuID8gKFxuICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImxlZnRcIiB0aXRsZT17Y2hpbGRyZW59PlxuICAgICAgPE1lbnUuSXRlbSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvTWVudS5JdGVtPlxuICAgIDwvVG9vbHRpcD5cbiAgKSA6IChcbiAgICA8TWVudS5JdGVtIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9NZW51Lkl0ZW0+XG4gICk7XG4iXX0=
