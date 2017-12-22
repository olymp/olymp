var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      fill = _ref.fill,
      vertically = _ref.vertically,
      right = _ref.right;
  return {
    float: right ? 'right' : 'left',
    width: fill && '100%',
    height: !vertically && '100%',
    minWidth: vertically ? '100%' : 'auto',
    marginLeft: right && 'auto',
    borderTop: vertically && border(theme, theme.dark4),
    ifMini: {
      float: 'none',
      width: '100%',
      borderRight: 0,
      // borderTop: border(theme, theme.dark4),
      clear: 'both'
    },
    ifMediumUp: {
      display: vertically ? 'none' : 'block',
      hasFlex: {
        display: vertically ? 'none' : 'flex',
        flex: fill && '1 1 auto',
        alignItems: 'stretch',
        flexDirection: vertically ? 'column' : 'row'
      }
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      pages = _ref2.pages,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['className', 'pages', 'children']);

  return React.createElement(
    'div',
    { className: className },
    pages.map(function (_ref3, i) {
      var childPages = _ref3.children,
          page = _objectWithoutProperties(_ref3, ['children']);

      return props.renderItem(_extends({}, page, {
        title: page.name,
        pages: childPages,
        key: page.id || i
      }, props));
    }),
    Children.map(children, function (child) {
      return cloneElement(child, props);
    })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL3N1Yi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsImNyZWF0ZUNvbXBvbmVudCIsImJvcmRlciIsInRoZW1lIiwiZmlsbCIsInZlcnRpY2FsbHkiLCJyaWdodCIsImZsb2F0Iiwid2lkdGgiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiLCJib3JkZXJUb3AiLCJkYXJrNCIsImlmTWluaSIsImJvcmRlclJpZ2h0IiwiY2xlYXIiLCJpZk1lZGl1bVVwIiwiZGlzcGxheSIsImhhc0ZsZXgiLCJmbGV4IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWdlcyIsImNoaWxkcmVuIiwicHJvcHMiLCJtYXAiLCJpIiwiY2hpbGRQYWdlcyIsInBhZ2UiLCJyZW5kZXJJdGVtIiwidGl0bGUiLCJuYW1lIiwia2V5IiwiaWQiLCJjaGlsZCIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLFFBQThDLE9BQTlDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLE1BQVQsUUFBdUIsWUFBdkI7O0FBRUEsZUFBZUQsZ0JBQ2I7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxNQUFnQkMsVUFBaEIsUUFBZ0JBLFVBQWhCO0FBQUEsTUFBNEJDLEtBQTVCLFFBQTRCQSxLQUE1QjtBQUFBLFNBQXlDO0FBQ3ZDQyxXQUFPRCxRQUFRLE9BQVIsR0FBa0IsTUFEYztBQUV2Q0UsV0FBT0osUUFBUSxNQUZ3QjtBQUd2Q0ssWUFBUSxDQUFDSixVQUFELElBQWUsTUFIZ0I7QUFJdkNLLGNBQVVMLGFBQWEsTUFBYixHQUFzQixNQUpPO0FBS3ZDTSxnQkFBWUwsU0FBUyxNQUxrQjtBQU12Q00sZUFBV1AsY0FBY0gsT0FBT0MsS0FBUCxFQUFjQSxNQUFNVSxLQUFwQixDQU5jO0FBT3ZDQyxZQUFRO0FBQ05QLGFBQU8sTUFERDtBQUVOQyxhQUFPLE1BRkQ7QUFHTk8sbUJBQWEsQ0FIUDtBQUlOO0FBQ0FDLGFBQU87QUFMRCxLQVArQjtBQWN2Q0MsZ0JBQVk7QUFDVkMsZUFBU2IsYUFBYSxNQUFiLEdBQXNCLE9BRHJCO0FBRVZjLGVBQVM7QUFDUEQsaUJBQVNiLGFBQWEsTUFBYixHQUFzQixNQUR4QjtBQUVQZSxjQUFNaEIsUUFBUSxVQUZQO0FBR1BpQixvQkFBWSxTQUhMO0FBSVBDLHVCQUFlakIsYUFBYSxRQUFiLEdBQXdCO0FBSmhDO0FBRkM7QUFkMkIsR0FBekM7QUFBQSxDQURhLEVBeUJiO0FBQUEsTUFBR2tCLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLE1BQXFCQyxRQUFyQixTQUFxQkEsUUFBckI7QUFBQSxNQUFrQ0MsS0FBbEM7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXSCxTQUFoQjtBQUNHQyxVQUFNRyxHQUFOLENBQVUsaUJBQW9DQyxDQUFwQztBQUFBLFVBQWFDLFVBQWIsU0FBR0osUUFBSDtBQUFBLFVBQTRCSyxJQUE1Qjs7QUFBQSxhQUNUSixNQUFNSyxVQUFOLGNBQ0tELElBREw7QUFFRUUsZUFBT0YsS0FBS0csSUFGZDtBQUdFVCxlQUFPSyxVQUhUO0FBSUVLLGFBQUtKLEtBQUtLLEVBQUwsSUFBV1A7QUFKbEIsU0FLS0YsS0FMTCxFQURTO0FBQUEsS0FBVixDQURIO0FBV0czQixhQUFTNEIsR0FBVCxDQUFhRixRQUFiLEVBQXVCO0FBQUEsYUFBU3pCLGFBQWFvQyxLQUFiLEVBQW9CVixLQUFwQixDQUFUO0FBQUEsS0FBdkI7QUFYSCxHQURGO0FBQUEsQ0F6QmEsRUF3Q2I7QUFBQSxTQUFLVyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBeENhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXZiYXIvc3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBmaWxsLCB2ZXJ0aWNhbGx5LCByaWdodCB9KSA9PiAoe1xuICAgIGZsb2F0OiByaWdodCA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgd2lkdGg6IGZpbGwgJiYgJzEwMCUnLFxuICAgIGhlaWdodDogIXZlcnRpY2FsbHkgJiYgJzEwMCUnLFxuICAgIG1pbldpZHRoOiB2ZXJ0aWNhbGx5ID8gJzEwMCUnIDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6IHJpZ2h0ICYmICdhdXRvJyxcbiAgICBib3JkZXJUb3A6IHZlcnRpY2FsbHkgJiYgYm9yZGVyKHRoZW1lLCB0aGVtZS5kYXJrNCksXG4gICAgaWZNaW5pOiB7XG4gICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgLy8gYm9yZGVyVG9wOiBib3JkZXIodGhlbWUsIHRoZW1lLmRhcms0KSxcbiAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICBkaXNwbGF5OiB2ZXJ0aWNhbGx5ID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogdmVydGljYWxseSA/ICdub25lJyA6ICdmbGV4JyxcbiAgICAgICAgZmxleDogZmlsbCAmJiAnMSAxIGF1dG8nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHZlcnRpY2FsbHkgPyAnY29sdW1uJyA6ICdyb3cnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBwYWdlcywgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtwYWdlcy5tYXAoKHsgY2hpbGRyZW46IGNoaWxkUGFnZXMsIC4uLnBhZ2UgfSwgaSkgPT5cbiAgICAgICAgcHJvcHMucmVuZGVySXRlbSh7XG4gICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICB0aXRsZTogcGFnZS5uYW1lLFxuICAgICAgICAgIHBhZ2VzOiBjaGlsZFBhZ2VzLFxuICAgICAgICAgIGtleTogcGFnZS5pZCB8fCBpLFxuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICB9KSxcbiAgICAgICl9XG5cbiAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IGNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
