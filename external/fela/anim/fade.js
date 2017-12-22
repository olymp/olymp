var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import anime from 'animejs';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var FadeIn = function (_Component) {
  _inherits(FadeIn, _Component);

  function FadeIn() {
    _classCallCheck(this, FadeIn);

    return _possibleConstructorReturn(this, (FadeIn.__proto__ || Object.getPrototypeOf(FadeIn)).apply(this, arguments));
  }

  _createClass(FadeIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var target = ReactDOM.findDOMNode(this);
      anime({
        targets: target,
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        elasticity: 0
      });
      anime({
        targets: target,
        translateY: [30, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        elasticity: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.Children.only(children);
    }
  }]);

  return FadeIn;
}(Component);

export { FadeIn as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvYW5pbS9mYWRlLmVzNiJdLCJuYW1lcyI6WyJhbmltZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJGYWRlSW4iLCJ0YXJnZXQiLCJmaW5kRE9NTm9kZSIsInRhcmdldHMiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNpbmciLCJlbGFzdGljaXR5IiwidHJhbnNsYXRlWSIsImNoaWxkcmVuIiwicHJvcHMiLCJDaGlsZHJlbiIsIm9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjs7SUFFcUJDLE07Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLFVBQU1DLFNBQVNGLFNBQVNHLFdBQVQsQ0FBcUIsSUFBckIsQ0FBZjtBQUNBTixZQUFNO0FBQ0pPLGlCQUFTRixNQURMO0FBRUpHLGlCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGTDtBQUdKQyxrQkFBVSxJQUhOO0FBSUpDLGdCQUFRLFFBSko7QUFLSkMsb0JBQVk7QUFMUixPQUFOO0FBT0FYLFlBQU07QUFDSk8saUJBQVNGLE1BREw7QUFFSk8sb0JBQVksQ0FBQyxFQUFELEVBQUssQ0FBTCxDQUZSO0FBR0pILGtCQUFVLElBSE47QUFJSkMsZ0JBQVEsYUFKSjtBQUtKQyxvQkFBWTtBQUxSLE9BQU47QUFPRDs7OzZCQUNRO0FBQUEsVUFDQ0UsUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7O0FBRVAsYUFBT1osTUFBTWMsUUFBTixDQUFlQyxJQUFmLENBQW9CSCxRQUFwQixDQUFQO0FBQ0Q7Ozs7RUFyQmlDWCxTOztTQUFmRSxNIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvYW5pbS9mYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWRlSW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiB0YXJnZXQsXG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICBlbGFzdGljaXR5OiAwLFxuICAgIH0pO1xuICAgIGFuaW1lKHtcbiAgICAgIHRhcmdldHM6IHRhcmdldCxcbiAgICAgIHRyYW5zbGF0ZVk6IFszMCwgMF0sXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgIGVsYXN0aWNpdHk6IDAsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICB9XG59XG4iXX0=
