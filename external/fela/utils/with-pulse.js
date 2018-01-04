'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WrappedComponent) {
  return (0, _reactFela.createComponent)(function () {
    return {
      animationName: {
        '0%': {
          opacity: 0.8
        },
        '50%': {
          opacity: 0.4
        },
        '100%': {
          opacity: 0.8
        }
      },
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    };
  }, function (props) {
    return _react2.default.createElement(WrappedComponent, props);
  },
  // 'img',
  function (props) {
    return Object.keys(props);
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvd2l0aC1wdWxzZS5lczYiXSwibmFtZXMiOlsiYW5pbWF0aW9uTmFtZSIsIm9wYWNpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJwcm9wcyIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7a0JBRWU7QUFBQSxTQUNiLGdDQUNFO0FBQUEsV0FBTztBQUNMQSxxQkFBZTtBQUNiLGNBQU07QUFDSkMsbUJBQVM7QUFETCxTQURPO0FBSWIsZUFBTztBQUNMQSxtQkFBUztBQURKLFNBSk07QUFPYixnQkFBUTtBQUNOQSxtQkFBUztBQURIO0FBUEssT0FEVjtBQVlMQyx5QkFBbUIsTUFaZDtBQWFMQywrQkFBeUIsVUFicEI7QUFjTEMsK0JBQXlCO0FBZHBCLEtBQVA7QUFBQSxHQURGLEVBaUJFO0FBQUEsV0FBUyw4QkFBQyxnQkFBRCxFQUFzQkMsS0FBdEIsQ0FBVDtBQUFBLEdBakJGO0FBa0JFO0FBQ0E7QUFBQSxXQUFTQyxPQUFPQyxJQUFQLENBQVlGLEtBQVosQ0FBVDtBQUFBLEdBbkJGLENBRGE7QUFBQSxDIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvdXRpbHMvd2l0aC1wdWxzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZENvbXBvbmVudCA9PlxuICBjcmVhdGVDb21wb25lbnQoXG4gICAgKCkgPT4gKHtcbiAgICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgICAgJzAlJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgfSxcbiAgICAgICAgJzUwJSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgIH0sXG4gICAgICAgICcxMDAlJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuNXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgfSksXG4gICAgcHJvcHMgPT4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPixcbiAgICAvLyAnaW1nJyxcbiAgICBwcm9wcyA9PiBPYmplY3Qua2V5cyhwcm9wcylcbiAgKTtcbiJdfQ==
