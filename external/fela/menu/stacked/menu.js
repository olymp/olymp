'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SlideIn = (0, _reactFela.createComponent)(function (_ref) {
  var isBack = _ref.isBack;
  return {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    '> :nth-child(1)': {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0
    },
    '> :nth-child(2)': {
      position: 'absolute',
      zIndex: 1,
      animationDuration: '200ms',
      animationTimingFunction: 'ease-out',
      animationName: {
        '0%': {
          transform: isBack ? 'translateX(-100%)' : 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      }
    }
  };
}, 'div', function (_ref2) {
  var isBack = _ref2.isBack,
      p = _objectWithoutProperties(_ref2, ['isBack']);

  return Object.keys(p);
});

var StackedMenu = function (_Component) {
  _inherits(StackedMenu, _Component);

  function StackedMenu() {
    _classCallCheck(this, StackedMenu);

    return _possibleConstructorReturn(this, (StackedMenu.__proto__ || Object.getPrototypeOf(StackedMenu)).apply(this, arguments));
  }

  _createClass(StackedMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!(0, _recompose.shallowEqual)(newProps.keys, this.props.keys)) {
        this.isBack = newProps.keys.length < this.props.keys.length;
        this.oldKeys = this.props.keys;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          renderMenu = _props.renderMenu,
          keys = _props.keys,
          children = _props.children;

      if (!isLoading && renderMenu) {
        return _react2.default.createElement(
          SlideIn,
          { isBack: this.isBack },
          this.oldKeys && renderMenu(this.oldKeys),
          renderMenu(keys, this.oldKeys)
        );
      }
      return _react2.default.createElement(
        SlideIn,
        { isBack: this.isBack },
        children
      );
    }
  }]);

  return StackedMenu;
}(_react.Component);

exports.default = StackedMenu;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9zdGFja2VkL21lbnUuZXM2Il0sIm5hbWVzIjpbIlNsaWRlSW4iLCJpc0JhY2siLCJoZWlnaHQiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiZmxleEdyb3ciLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJ0cmFuc2Zvcm0iLCJwIiwiT2JqZWN0Iiwia2V5cyIsIlN0YWNrZWRNZW51IiwibmV3UHJvcHMiLCJwcm9wcyIsImxlbmd0aCIsIm9sZEtleXMiLCJpc0xvYWRpbmciLCJyZW5kZXJNZW51IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsZ0NBQ2Q7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQjtBQUNmQyxZQUFRLE1BRE87QUFFZkMsY0FBVSxVQUZLO0FBR2ZDLGNBQVUsUUFISztBQUlmQyxjQUFVLENBSks7QUFLZix1QkFBbUI7QUFDakJDLGNBQVEsQ0FEUztBQUVqQkgsZ0JBQVUsVUFGTztBQUdqQkksV0FBSyxDQUhZO0FBSWpCQyxZQUFNO0FBSlcsS0FMSjtBQVdmLHVCQUFtQjtBQUNqQkwsZ0JBQVUsVUFETztBQUVqQkcsY0FBUSxDQUZTO0FBR2pCRyx5QkFBbUIsT0FIRjtBQUlqQkMsK0JBQXlCLFVBSlI7QUFLakJDLHFCQUFlO0FBQ2IsY0FBTTtBQUNKQyxxQkFBV1gsU0FBUyxtQkFBVCxHQUErQjtBQUR0QyxTQURPO0FBSWIsZ0JBQVE7QUFDTlcscUJBQVc7QUFETDtBQUpLO0FBTEU7QUFYSixHQUFqQjtBQUFBLENBRGMsRUEyQmQsS0EzQmMsRUE0QmQ7QUFBQSxNQUFHWCxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFjWSxDQUFkOztBQUFBLFNBQXNCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBdEI7QUFBQSxDQTVCYyxDQUFoQjs7SUErQnFCRyxXOzs7Ozs7Ozs7Ozs4Q0FDT0MsUSxFQUFVO0FBQ2xDLFVBQUksQ0FBQyw2QkFBYUEsU0FBU0YsSUFBdEIsRUFBNEIsS0FBS0csS0FBTCxDQUFXSCxJQUF2QyxDQUFMLEVBQW1EO0FBQ2pELGFBQUtkLE1BQUwsR0FBY2dCLFNBQVNGLElBQVQsQ0FBY0ksTUFBZCxHQUF1QixLQUFLRCxLQUFMLENBQVdILElBQVgsQ0FBZ0JJLE1BQXJEO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEtBQUtGLEtBQUwsQ0FBV0gsSUFBMUI7QUFDRDtBQUNGOzs7NkJBQ1E7QUFBQSxtQkFDMkMsS0FBS0csS0FEaEQ7QUFBQSxVQUNDRyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxVQURaLFVBQ1lBLFVBRFo7QUFBQSxVQUN3QlAsSUFEeEIsVUFDd0JBLElBRHhCO0FBQUEsVUFDOEJRLFFBRDlCLFVBQzhCQSxRQUQ5Qjs7QUFFUCxVQUFJLENBQUNGLFNBQUQsSUFBY0MsVUFBbEIsRUFBOEI7QUFDNUIsZUFDRTtBQUFDLGlCQUFEO0FBQUEsWUFBUyxRQUFRLEtBQUtyQixNQUF0QjtBQUNHLGVBQUttQixPQUFMLElBQWdCRSxXQUFXLEtBQUtGLE9BQWhCLENBRG5CO0FBRUdFLHFCQUFXUCxJQUFYLEVBQWlCLEtBQUtLLE9BQXRCO0FBRkgsU0FERjtBQU1EO0FBQ0QsYUFBTztBQUFDLGVBQUQ7QUFBQSxVQUFTLFFBQVEsS0FBS25CLE1BQXRCO0FBQStCc0I7QUFBL0IsT0FBUDtBQUNEOzs7Ozs7a0JBbEJrQlAsVyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL21lbnUvc3RhY2tlZC9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVjb21wb3NlJztcblxuY29uc3QgU2xpZGVJbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgaXNCYWNrIH0pID0+ICh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZsZXhHcm93OiAxLFxuICAgICc+IDpudGgtY2hpbGQoMSknOiB7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfSxcbiAgICAnPiA6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIwMG1zJyxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1vdXQnLFxuICAgICAgYW5pbWF0aW9uTmFtZToge1xuICAgICAgICAnMCUnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBpc0JhY2sgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICB9LFxuICAgICAgICAnMTAwJSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBpc0JhY2ssIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFja2VkTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAoIXNoYWxsb3dFcXVhbChuZXdQcm9wcy5rZXlzLCB0aGlzLnByb3BzLmtleXMpKSB7XG4gICAgICB0aGlzLmlzQmFjayA9IG5ld1Byb3BzLmtleXMubGVuZ3RoIDwgdGhpcy5wcm9wcy5rZXlzLmxlbmd0aDtcbiAgICAgIHRoaXMub2xkS2V5cyA9IHRoaXMucHJvcHMua2V5cztcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCByZW5kZXJNZW51LCBrZXlzLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWlzTG9hZGluZyAmJiByZW5kZXJNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2xpZGVJbiBpc0JhY2s9e3RoaXMuaXNCYWNrfT5cbiAgICAgICAgICB7dGhpcy5vbGRLZXlzICYmIHJlbmRlck1lbnUodGhpcy5vbGRLZXlzKX1cbiAgICAgICAgICB7cmVuZGVyTWVudShrZXlzLCB0aGlzLm9sZEtleXMpfVxuICAgICAgICA8L1NsaWRlSW4+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPFNsaWRlSW4gaXNCYWNrPXt0aGlzLmlzQmFja30+e2NoaWxkcmVufTwvU2xpZGVJbj47XG4gIH1cbn1cbiJdfQ==
