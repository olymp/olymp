import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { createComponent } from 'react-fela';

var _ref3 = React.createElement(_Spin, null);

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      loading = _ref.loading;
  return loading && {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: theme.dark3,
    '> div': {
      center: true
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      loading = _ref2.loading,
      p = _objectWithoutProperties(_ref2, ['className', 'loading']);

  return React.createElement(
    'div',
    { className: className },
    loading && _ref3
  );
}, ['loading']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9sb2FkZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwidGhlbWUiLCJsb2FkaW5nIiwiY29udGVudCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazMiLCJjZW50ZXIiLCJjbGFzc05hbWUiLCJwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7WUFtQmtCLGdDOztBQWpCbEIsZUFBZUEsZ0JBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxTQUNFQSxXQUFXO0FBQ1RDLGFBQVMsSUFEQTtBQUVUQyxjQUFVLFVBRkQ7QUFHVEMsU0FBSyxDQUhJO0FBSVRDLFdBQU8sQ0FKRTtBQUtUQyxZQUFRLENBTEM7QUFNVEMsVUFBTSxDQU5HO0FBT1RDLFlBQVEsQ0FQQztBQVFUQyxxQkFBaUJULE1BQU1VLEtBUmQ7QUFTVCxhQUFTO0FBQ1BDLGNBQVE7QUFERDtBQVRBLEdBRGI7QUFBQSxDQURhLEVBZWI7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjWCxPQUFkLFNBQWNBLE9BQWQ7QUFBQSxNQUEwQlksQ0FBMUI7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRCxTQUFoQjtBQUNHWDtBQURILEdBREY7QUFBQSxDQWZhLEVBbUJiLENBQUMsU0FBRCxDQW5CYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxvYWRpbmcgfSkgPT5cbiAgICBsb2FkaW5nICYmIHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICAgICc+IGRpdic6IHtcbiAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIC4uLnAgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtsb2FkaW5nICYmIDxTcGluIC8+fVxuICAgIDwvZGl2PixcbiAgWydsb2FkaW5nJ11cbik7XG4iXX0=
