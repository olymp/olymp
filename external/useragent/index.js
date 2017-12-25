var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import UAParser2 from 'ua-parser-js';

export var UAParser = UAParser2;
export var UAProvider = (_temp = _class = function (_Component) {
  _inherits(UAProvider, _Component);

  function UAProvider() {
    _classCallCheck(this, UAProvider);

    return _possibleConstructorReturn(this, (UAProvider.__proto__ || Object.getPrototypeOf(UAProvider)).apply(this, arguments));
  }

  _createClass(UAProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var ua = this.props.ua;

      return {
        ua: ua && typeof ua === 'string' ? new UAParser2(ua) : ua
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);

  return UAProvider;
}(Component), _class.childContextTypes = {
  ua: PropTypes.object
}, _temp);

export default (function (WrappedComponent) {
  var withUA = function withUA(props, context) {
    return React.createElement(WrappedComponent, _extends({ ua: context.ua }, props));
  };
  withUA.contextTypes = {
    ua: PropTypes.object
  };
  return withUA;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VzZXJhZ2VudC9pbmRleC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsIlVBUGFyc2VyMiIsIlVBUGFyc2VyIiwiVUFQcm92aWRlciIsInVhIiwicHJvcHMiLCJvbmx5IiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsIldyYXBwZWRDb21wb25lbnQiLCJ3aXRoVUEiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixFQUEyQkMsUUFBM0IsUUFBMkMsT0FBM0M7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0Qjs7QUFFQSxPQUFPLElBQU1DLFdBQVdELFNBQWpCO0FBQ1AsV0FBYUUsVUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsc0NBSW9CO0FBQUEsVUFDUkMsRUFEUSxHQUNELEtBQUtDLEtBREosQ0FDUkQsRUFEUTs7QUFFaEIsYUFBTztBQUNMQSxZQUFJQSxNQUFNLE9BQU9BLEVBQVAsS0FBYyxRQUFwQixHQUErQixJQUFJSCxTQUFKLENBQWNHLEVBQWQsQ0FBL0IsR0FBbURBO0FBRGxELE9BQVA7QUFHRDtBQVRIO0FBQUE7QUFBQSw2QkFVVztBQUNQLGFBQU9MLFNBQVNPLElBQVQsQ0FBYyxLQUFLRCxLQUFMLENBQVdFLFFBQXpCLENBQVA7QUFDRDtBQVpIOztBQUFBO0FBQUEsRUFBZ0NULFNBQWhDLFVBQ1NVLGlCQURULEdBQzZCO0FBQ3pCSixNQUFJSixVQUFVUztBQURXLENBRDdCOztBQWVBLGdCQUFlLFVBQUNDLGdCQUFELEVBQXNCO0FBQ25DLE1BQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDTixLQUFELEVBQVFPLE9BQVI7QUFBQSxXQUNiLG9CQUFDLGdCQUFELGFBQWtCLElBQUlBLFFBQVFSLEVBQTlCLElBQXNDQyxLQUF0QyxFQURhO0FBQUEsR0FBZjtBQUVBTSxTQUFPRSxZQUFQLEdBQXNCO0FBQ3BCVCxRQUFJSixVQUFVUztBQURNLEdBQXRCO0FBR0EsU0FBT0UsTUFBUDtBQUNELENBUEQiLCJmaWxlIjoiZXh0ZXJuYWwvdXNlcmFnZW50L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFVBUGFyc2VyMiBmcm9tICd1YS1wYXJzZXItanMnO1xuXG5leHBvcnQgY29uc3QgVUFQYXJzZXIgPSBVQVBhcnNlcjI7XG5leHBvcnQgY2xhc3MgVUFQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICB1YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgdWEgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVhOiB1YSAmJiB0eXBlb2YgdWEgPT09ICdzdHJpbmcnID8gbmV3IFVBUGFyc2VyMih1YSkgOiB1YSxcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICBjb25zdCB3aXRoVUEgPSAocHJvcHMsIGNvbnRleHQpID0+XG4gICAgPFdyYXBwZWRDb21wb25lbnQgdWE9e2NvbnRleHQudWF9IHsuLi5wcm9wc30gLz47XG4gIHdpdGhVQS5jb250ZXh0VHlwZXMgPSB7XG4gICAgdWE6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG4gIHJldHVybiB3aXRoVUE7XG59O1xuIl19
