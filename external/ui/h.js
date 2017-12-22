function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';

var H = createComponent(function (_ref) {
  var fontSize = _ref.fontSize,
      theme = _ref.theme,
      padding = _ref.padding,
      marginBottom = _ref.marginBottom,
      marginTop = _ref.marginTop,
      textAlign = _ref.textAlign,
      light = _ref.light,
      colored = _ref.colored,
      color = _ref.color,
      center = _ref.center;
  return {
    color: (colored || color) && theme.color,
    // fontWeight: light && 200,
    textAlign: center ? 'center' : textAlign,
    padding: padding,
    fontSize: fontSize,
    lineHeight: fontSize ? fontSize + 'px' : undefined,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : 15,
    '& .ant-checkbox-inner': {
      width: 21,
      height: 21,
      onAfter: {
        left: 7,
        top: 5
      }
    }
  };
}, function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['level', 'children']);

  if (!level) {
    level = 1;
  }
  return React.createElement('h' + level, rest, children);
}, ['level', 'itemProp']);

export { H };
export var SectionH = function SectionH(_ref3) {
  var title = _ref3.title,
      description = _ref3.description;
  return React.createElement(
    'div',
    { key: 0 },
    React.createElement(
      H,
      { marginBottom: 0, textAlign: 'center', level: 3, light: true, color: true },
      title
    ),
    description && React.createElement(
      H,
      { marginTop: 0, textAlign: 'center', level: 5, fontSize: 12, light: true },
      description
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2guZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiSCIsImZvbnRTaXplIiwidGhlbWUiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwibGlnaHQiLCJjb2xvcmVkIiwiY29sb3IiLCJjZW50ZXIiLCJsaW5lSGVpZ2h0IiwidW5kZWZpbmVkIiwid2lkdGgiLCJoZWlnaHQiLCJvbkFmdGVyIiwibGVmdCIsInRvcCIsImxldmVsIiwiY2hpbGRyZW4iLCJyZXN0IiwiY3JlYXRlRWxlbWVudCIsIlNlY3Rpb25IIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7QUFFTyxJQUFNQyxJQUFJRCxnQkFDZjtBQUFBLE1BQ0VFLFFBREYsUUFDRUEsUUFERjtBQUFBLE1BRUVDLEtBRkYsUUFFRUEsS0FGRjtBQUFBLE1BR0VDLE9BSEYsUUFHRUEsT0FIRjtBQUFBLE1BSUVDLFlBSkYsUUFJRUEsWUFKRjtBQUFBLE1BS0VDLFNBTEYsUUFLRUEsU0FMRjtBQUFBLE1BTUVDLFNBTkYsUUFNRUEsU0FORjtBQUFBLE1BT0VDLEtBUEYsUUFPRUEsS0FQRjtBQUFBLE1BUUVDLE9BUkYsUUFRRUEsT0FSRjtBQUFBLE1BU0VDLEtBVEYsUUFTRUEsS0FURjtBQUFBLE1BVUVDLE1BVkYsUUFVRUEsTUFWRjtBQUFBLFNBV087QUFDTEQsV0FBTyxDQUFDRCxXQUFXQyxLQUFaLEtBQXNCUCxNQUFNTyxLQUQ5QjtBQUVMO0FBQ0FILGVBQVdJLFNBQVMsUUFBVCxHQUFvQkosU0FIMUI7QUFJTEgsb0JBSks7QUFLTEYsc0JBTEs7QUFNTFUsZ0JBQVlWLFdBQWNBLFFBQWQsVUFBNkJXLFNBTnBDO0FBT0xQLGVBQVdBLGNBQWNPLFNBQWQsR0FBMEJQLFNBQTFCLEdBQXNDTyxTQVA1QztBQVFMUixrQkFBY0EsaUJBQWlCUSxTQUFqQixHQUE2QlIsWUFBN0IsR0FBNEMsRUFSckQ7QUFTTCw2QkFBeUI7QUFDdkJTLGFBQU8sRUFEZ0I7QUFFdkJDLGNBQVEsRUFGZTtBQUd2QkMsZUFBUztBQUNQQyxjQUFNLENBREM7QUFFUEMsYUFBSztBQUZFO0FBSGM7QUFUcEIsR0FYUDtBQUFBLENBRGUsRUE4QmYsaUJBQWtDO0FBQUEsTUFBL0JDLEtBQStCLFNBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFYQyxJQUFXOztBQUNoQyxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWQSxZQUFRLENBQVI7QUFDRDtBQUNELFNBQU9wQixNQUFNdUIsYUFBTixPQUF3QkgsS0FBeEIsRUFBaUNFLElBQWpDLEVBQXVDRCxRQUF2QyxDQUFQO0FBQ0QsQ0FuQ2MsRUFvQ2YsQ0FBQyxPQUFELEVBQVUsVUFBVixDQXBDZSxDQUFWOzs7QUF1Q1AsT0FBTyxJQUFNRyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxXQUFWLFNBQVVBLFdBQVY7QUFBQSxTQUN0QjtBQUFBO0FBQUEsTUFBSyxLQUFLLENBQVY7QUFDRTtBQUFDLE9BQUQ7QUFBQSxRQUFHLGNBQWMsQ0FBakIsRUFBb0IsV0FBVSxRQUE5QixFQUF1QyxPQUFPLENBQTlDLEVBQWlELFdBQWpELEVBQXVELFdBQXZEO0FBQ0dEO0FBREgsS0FERjtBQUlHQyxtQkFDQztBQUFDLE9BQUQ7QUFBQSxRQUFHLFdBQVcsQ0FBZCxFQUFpQixXQUFVLFFBQTNCLEVBQW9DLE9BQU8sQ0FBM0MsRUFBOEMsVUFBVSxFQUF4RCxFQUE0RCxXQUE1RDtBQUNHQTtBQURIO0FBTEosR0FEc0I7QUFBQSxDQUFqQiIsImZpbGUiOiJwYWNrYWdlcy91aS9oLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgY29uc3QgSCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICBmb250U2l6ZSxcbiAgICB0aGVtZSxcbiAgICBwYWRkaW5nLFxuICAgIG1hcmdpbkJvdHRvbSxcbiAgICBtYXJnaW5Ub3AsXG4gICAgdGV4dEFsaWduLFxuICAgIGxpZ2h0LFxuICAgIGNvbG9yZWQsXG4gICAgY29sb3IsXG4gICAgY2VudGVyLFxuICB9KSA9PiAoe1xuICAgIGNvbG9yOiAoY29sb3JlZCB8fCBjb2xvcikgJiYgdGhlbWUuY29sb3IsXG4gICAgLy8gZm9udFdlaWdodDogbGlnaHQgJiYgMjAwLFxuICAgIHRleHRBbGlnbjogY2VudGVyID8gJ2NlbnRlcicgOiB0ZXh0QWxpZ24sXG4gICAgcGFkZGluZyxcbiAgICBmb250U2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiBmb250U2l6ZSA/IGAke2ZvbnRTaXplfXB4YCA6IHVuZGVmaW5lZCxcbiAgICBtYXJnaW5Ub3A6IG1hcmdpblRvcCAhPT0gdW5kZWZpbmVkID8gbWFyZ2luVG9wIDogdW5kZWZpbmVkLFxuICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luQm90dG9tICE9PSB1bmRlZmluZWQgPyBtYXJnaW5Cb3R0b20gOiAxNSxcbiAgICAnJiAuYW50LWNoZWNrYm94LWlubmVyJzoge1xuICAgICAgd2lkdGg6IDIxLFxuICAgICAgaGVpZ2h0OiAyMSxcbiAgICAgIG9uQWZ0ZXI6IHtcbiAgICAgICAgbGVmdDogNyxcbiAgICAgICAgdG9wOiA1LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgbGV2ZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgICBpZiAoIWxldmVsKSB7XG4gICAgICBsZXZlbCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gLCByZXN0LCBjaGlsZHJlbik7XG4gIH0sXG4gIFsnbGV2ZWwnLCAnaXRlbVByb3AnXVxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25IID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IChcbiAgPGRpdiBrZXk9ezB9PlxuICAgIDxIIG1hcmdpbkJvdHRvbT17MH0gdGV4dEFsaWduPVwiY2VudGVyXCIgbGV2ZWw9ezN9IGxpZ2h0IGNvbG9yPlxuICAgICAge3RpdGxlfVxuICAgIDwvSD5cbiAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgPEggbWFyZ2luVG9wPXswfSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBsZXZlbD17NX0gZm9udFNpemU9ezEyfSBsaWdodD5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9IPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcbiJdfQ==
