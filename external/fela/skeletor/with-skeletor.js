var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent = function (_WrappedComponent) {
  function WrappedComponent(_x) {
    return _WrappedComponent.apply(this, arguments);
  }

  WrappedComponent.toString = function () {
    return _WrappedComponent.toString();
  };

  return WrappedComponent;
}(function (color) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithSkeletor, _Component);

    function WithSkeletor() {
      _classCallCheck(this, WithSkeletor);

      return _possibleConstructorReturn(this, (WithSkeletor.__proto__ || Object.getPrototypeOf(WithSkeletor)).apply(this, arguments));
    }

    _createClass(WithSkeletor, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var isLoading = this.props.isLoading;


        return { skeletorLoading: isLoading, skeletorColor: color };
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithSkeletor;
  }(Component), _class.childContextTypes = {
    skeletorLoading: PropTypes.bool,
    skeletorColor: PropTypes.string
  }, _temp;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3Ivd2l0aC1za2VsZXRvci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJXcmFwcGVkQ29tcG9uZW50IiwiaXNMb2FkaW5nIiwicHJvcHMiLCJza2VsZXRvckxvYWRpbmciLCJza2VsZXRvckNvbG9yIiwiY29sb3IiLCJjaGlsZENvbnRleHRUeXBlcyIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLGVBQWdCQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUFtQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3Q0FPYjtBQUFBLFlBQ1JDLFNBRFEsR0FDTSxLQUFLQyxLQURYLENBQ1JELFNBRFE7OztBQUdoQixlQUFPLEVBQUVFLGlCQUFpQkYsU0FBbkIsRUFBOEJHLGVBQWVDLEtBQTdDLEVBQVA7QUFDRDtBQVg4QjtBQUFBO0FBQUEsK0JBYXRCO0FBQ1AsZUFBTyxvQkFBQyxnQkFBRCxFQUFzQixLQUFLSCxLQUEzQixDQUFQO0FBQ0Q7QUFmOEI7O0FBQUE7QUFBQSxJQUNOSixTQURNLFVBRXhCUSxpQkFGd0IsR0FFSjtBQUN6QkgscUJBQWlCSixVQUFVUSxJQURGO0FBRXpCSCxtQkFBZUwsVUFBVVM7QUFGQSxHQUZJO0FBQUEsQ0FBbkIsQ0FBaEIiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9za2VsZXRvci93aXRoLXNrZWxldG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChXcmFwcGVkQ29tcG9uZW50ID0gY29sb3IgPT5cbiAgY2xhc3MgV2l0aFNrZWxldG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICBza2VsZXRvckxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2tlbGV0b3JDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9O1xuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiB7IHNrZWxldG9yTG9hZGluZzogaXNMb2FkaW5nLCBza2VsZXRvckNvbG9yOiBjb2xvciB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9KTtcbiJdfQ==
