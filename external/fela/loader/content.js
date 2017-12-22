var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Children } from 'react';
import { createComponent } from 'react-fela';

export var ContentLoaderStyles = {
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  // background: '#f6f7f8',
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  backgroundSize: '200% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 0'
    },
    '100%': {
      backgroundPosition: '-100% 0'
    }
  }
};

export default createComponent(function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return _extends({
    height: height || '100%',
    // minHeight: 96,
    width: width || '100%'
  }, ContentLoaderStyles);
}, function (_ref2) {
  var className = _ref2.className,
      isLoading = _ref2.isLoading,
      children = _ref2.children;

  if (isLoading) {
    return React.createElement('div', { className: className });
  }
  if (children) {
    return Children.only(children);
  }
  return null;
}, function (props) {
  return Object.keys(props);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbG9hZGVyL2NvbnRlbnQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJjcmVhdGVDb21wb25lbnQiLCJDb250ZW50TG9hZGVyU3R5bGVzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25GaWxsTW9kZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJhbmltYXRpb25OYW1lIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJpc0xvYWRpbmciLCJjaGlsZHJlbiIsIm9ubHkiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsUUFBZ0MsT0FBaEM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLE9BQU8sSUFBTUMsc0JBQXNCO0FBQ2pDQyxxQkFBbUIsSUFEYztBQUVqQ0MscUJBQW1CLFVBRmM7QUFHakNDLDJCQUF5QixVQUhRO0FBSWpDQywyQkFBeUIsUUFKUTtBQUtqQztBQUNBQyxjQUFZLGlFQU5xQjtBQU9qQ0Msa0JBQWdCLFdBUGlCO0FBUWpDQyxpQkFBZTtBQUNiLFVBQU07QUFDSkMsMEJBQW9CO0FBRGhCLEtBRE87QUFJYixZQUFRO0FBQ05BLDBCQUFvQjtBQURkO0FBSks7QUFSa0IsQ0FBNUI7O0FBa0JQLGVBQWVULGdCQUNiO0FBQUEsTUFBR1UsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsS0FBWCxRQUFXQSxLQUFYO0FBQUE7QUFDRUQsWUFBUUEsVUFBVSxNQURwQjtBQUVFO0FBQ0FDLFdBQU9BLFNBQVM7QUFIbEIsS0FJS1YsbUJBSkw7QUFBQSxDQURhLEVBT2IsaUJBQXdDO0FBQUEsTUFBckNXLFNBQXFDLFNBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7O0FBQ3RDLE1BQUlELFNBQUosRUFBZTtBQUNiLFdBQU8sNkJBQUssV0FBV0QsU0FBaEIsR0FBUDtBQUNEO0FBQ0QsTUFBSUUsUUFBSixFQUFjO0FBQ1osV0FBT2YsU0FBU2dCLElBQVQsQ0FBY0QsUUFBZCxDQUFQO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQWZZLEVBZ0JiO0FBQUEsU0FBU0UsT0FBT0MsSUFBUCxDQUFZQyxLQUFaLENBQVQ7QUFBQSxDQWhCYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbG9hZGVyL2NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRMb2FkZXJTdHlsZXMgPSB7XG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxuICBhbmltYXRpb25GaWxsTW9kZTogJ2ZvcndhcmRzJyxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgLy8gYmFja2dyb3VuZDogJyNmNmY3ZjgnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlZWVlIDglLCAjZGRkZGRkIDE4JSwgI2VlZWVlZSAzMyUpJyxcbiAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuICBhbmltYXRpb25OYW1lOiB7XG4gICAgJzAlJzoge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMTAwJSAwJyxcbiAgICB9LFxuICAgICcxMDAlJzoge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnLTEwMCUgMCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoe1xuICAgIGhlaWdodDogaGVpZ2h0IHx8ICcxMDAlJyxcbiAgICAvLyBtaW5IZWlnaHQ6IDk2LFxuICAgIHdpZHRoOiB3aWR0aCB8fCAnMTAwJScsXG4gICAgLi4uQ29udGVudExvYWRlclN0eWxlcyxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+O1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIHByb3BzID0+IE9iamVjdC5rZXlzKHByb3BzKVxuKTtcbiJdfQ==
