'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentLoaderStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentLoaderStyles = exports.ContentLoaderStyles = {
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

exports.default = (0, _reactFela.createComponent)(function (_ref) {
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
    return _react2.default.createElement('div', { className: className });
  }
  if (children) {
    return _react.Children.only(children);
  }
  return null;
}, function (props) {
  return Object.keys(props);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9hZGVyL2NvbnRlbnQuZXM2Il0sIm5hbWVzIjpbIkNvbnRlbnRMb2FkZXJTdHlsZXMiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkZpbGxNb2RlIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImFuaW1hdGlvbk5hbWUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImlzTG9hZGluZyIsImNoaWxkcmVuIiwib25seSIsIk9iamVjdCIsImtleXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVPLElBQU1BLG9EQUFzQjtBQUNqQ0MscUJBQW1CLElBRGM7QUFFakNDLHFCQUFtQixVQUZjO0FBR2pDQywyQkFBeUIsVUFIUTtBQUlqQ0MsMkJBQXlCLFFBSlE7QUFLakM7QUFDQUMsY0FBWSxpRUFOcUI7QUFPakNDLGtCQUFnQixXQVBpQjtBQVFqQ0MsaUJBQWU7QUFDYixVQUFNO0FBQ0pDLDBCQUFvQjtBQURoQixLQURPO0FBSWIsWUFBUTtBQUNOQSwwQkFBb0I7QUFEZDtBQUpLO0FBUmtCLENBQTVCOztrQkFrQlEsZ0NBQ2I7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxLQUFYLFFBQVdBLEtBQVg7QUFBQTtBQUNFRCxZQUFRQSxVQUFVLE1BRHBCO0FBRUU7QUFDQUMsV0FBT0EsU0FBUztBQUhsQixLQUlLVixtQkFKTDtBQUFBLENBRGEsRUFPYixpQkFBd0M7QUFBQSxNQUFyQ1csU0FBcUMsU0FBckNBLFNBQXFDO0FBQUEsTUFBMUJDLFNBQTBCLFNBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTs7QUFDdEMsTUFBSUQsU0FBSixFQUFlO0FBQ2IsV0FBTyx1Q0FBSyxXQUFXRCxTQUFoQixHQUFQO0FBQ0Q7QUFDRCxNQUFJRSxRQUFKLEVBQWM7QUFDWixXQUFPLGdCQUFTQyxJQUFULENBQWNELFFBQWQsQ0FBUDtBQUNEO0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FmWSxFQWdCYjtBQUFBLFNBQVNFLE9BQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFUO0FBQUEsQ0FoQmEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2xvYWRlci9jb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50TG9hZGVyU3R5bGVzID0ge1xuICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcbiAgYW5pbWF0aW9uRmlsbE1vZGU6ICdmb3J3YXJkcycsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gIC8vIGJhY2tncm91bmQ6ICcjZjZmN2Y4JyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICNlZWVlZWUgMzMlKScsXG4gIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcbiAgYW5pbWF0aW9uTmFtZToge1xuICAgICcwJSc6IHtcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzEwMCUgMCcsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJy0xMDAlIDAnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IGhlaWdodCwgd2lkdGggfSkgPT4gKHtcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCAnMTAwJScsXG4gICAgLy8gbWluSGVpZ2h0OiA5NixcbiAgICB3aWR0aDogd2lkdGggfHwgJzEwMCUnLFxuICAgIC4uLkNvbnRlbnRMb2FkZXJTdHlsZXMsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBwcm9wcyA9PiBPYmplY3Qua2V5cyhwcm9wcylcbik7XG4iXX0=
