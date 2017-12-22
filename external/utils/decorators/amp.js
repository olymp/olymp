var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export var AmpProvider = (_temp = _class = function (_Component) {
  _inherits(AmpProvider, _Component);

  function AmpProvider() {
    _classCallCheck(this, AmpProvider);

    return _possibleConstructorReturn(this, (AmpProvider.__proto__ || Object.getPrototypeOf(AmpProvider)).apply(this, arguments));
  }

  _createClass(AmpProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        amp: this.props.amp
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);

  return AmpProvider;
}(Component), _class.childContextTypes = {
  amp: PropTypes.bool
}, _temp);

export default (function (WrappedComponent) {
  var withAmp = function withAmp(props, context) {
    return React.createElement(WrappedComponent, _extends({}, context, props));
  };
  withAmp.contextTypes = {
    amp: PropTypes.bool
  };
  return withAmp;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvYW1wLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoaWxkcmVuIiwiUHJvcFR5cGVzIiwiQW1wUHJvdmlkZXIiLCJhbXAiLCJwcm9wcyIsIm9ubHkiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwiYm9vbCIsIldyYXBwZWRDb21wb25lbnQiLCJ3aXRoQW1wIiwiY29udGV4dCIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxXQUFhQyxXQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FJb0I7QUFDaEIsYUFBTztBQUNMQyxhQUFLLEtBQUtDLEtBQUwsQ0FBV0Q7QUFEWCxPQUFQO0FBR0Q7QUFSSDtBQUFBO0FBQUEsNkJBU1c7QUFDUCxhQUFPSCxTQUFTSyxJQUFULENBQWMsS0FBS0QsS0FBTCxDQUFXRSxRQUF6QixDQUFQO0FBQ0Q7QUFYSDs7QUFBQTtBQUFBLEVBQWlDUCxTQUFqQyxVQUNTUSxpQkFEVCxHQUM2QjtBQUN6QkosT0FBS0YsVUFBVU87QUFEVSxDQUQ3Qjs7QUFjQSxnQkFBZSxVQUFDQyxnQkFBRCxFQUFzQjtBQUNuQyxNQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ04sS0FBRCxFQUFRTyxPQUFSO0FBQUEsV0FDZCxvQkFBQyxnQkFBRCxlQUFzQkEsT0FBdEIsRUFBbUNQLEtBQW5DLEVBRGM7QUFBQSxHQUFoQjtBQUVBTSxVQUFRRSxZQUFSLEdBQXVCO0FBQ3JCVCxTQUFLRixVQUFVTztBQURNLEdBQXZCO0FBR0EsU0FBT0UsT0FBUDtBQUNELENBUEQiLCJmaWxlIjoicGFja2FnZXMvdXRpbHMvZGVjb3JhdG9ycy9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBBbXBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBhbXA6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFtcDogdGhpcy5wcm9wcy5hbXAsXG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgY29uc3Qgd2l0aEFtcCA9IChwcm9wcywgY29udGV4dCkgPT5cbiAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4uY29udGV4dH0gey4uLnByb3BzfSAvPjtcbiAgd2l0aEFtcC5jb250ZXh0VHlwZXMgPSB7XG4gICAgYW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcbiAgcmV0dXJuIHdpdGhBbXA7XG59O1xuIl19
