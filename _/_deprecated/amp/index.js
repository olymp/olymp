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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2FtcC9pbmRleC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsIkFtcFByb3ZpZGVyIiwiYW1wIiwicHJvcHMiLCJvbmx5IiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsImJvb2wiLCJXcmFwcGVkQ29tcG9uZW50Iiwid2l0aEFtcCIsImNvbnRleHQiLCJjb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTJCQyxRQUEzQixRQUEyQyxPQUEzQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUEsV0FBYUMsV0FBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsc0NBSW9CO0FBQ2hCLGFBQU87QUFDTEMsYUFBSyxLQUFLQyxLQUFMLENBQVdEO0FBRFgsT0FBUDtBQUdEO0FBUkg7QUFBQTtBQUFBLDZCQVNXO0FBQ1AsYUFBT0gsU0FBU0ssSUFBVCxDQUFjLEtBQUtELEtBQUwsQ0FBV0UsUUFBekIsQ0FBUDtBQUNEO0FBWEg7O0FBQUE7QUFBQSxFQUFpQ1AsU0FBakMsVUFDU1EsaUJBRFQsR0FDNkI7QUFDekJKLE9BQUtGLFVBQVVPO0FBRFUsQ0FEN0I7O0FBY0EsZ0JBQWUsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDbkMsTUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNOLEtBQUQsRUFBUU8sT0FBUjtBQUFBLFdBQ2Qsb0JBQUMsZ0JBQUQsZUFBc0JBLE9BQXRCLEVBQW1DUCxLQUFuQyxFQURjO0FBQUEsR0FBaEI7QUFFQU0sVUFBUUUsWUFBUixHQUF1QjtBQUNyQlQsU0FBS0YsVUFBVU87QUFETSxHQUF2QjtBQUdBLFNBQU9FLE9BQVA7QUFDRCxDQVBEIiwiZmlsZSI6ImV4dGVybmFsL2FtcC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEFtcFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGFtcDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW1wOiB0aGlzLnByb3BzLmFtcCxcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICBjb25zdCB3aXRoQW1wID0gKHByb3BzLCBjb250ZXh0KSA9PlxuICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5jb250ZXh0fSB7Li4ucHJvcHN9IC8+O1xuICB3aXRoQW1wLmNvbnRleHRUeXBlcyA9IHtcbiAgICBhbXA6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuICByZXR1cm4gd2l0aEFtcDtcbn07XG4iXX0=
