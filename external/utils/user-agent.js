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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL3VzZXItYWdlbnQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJVQVBhcnNlcjIiLCJVQVBhcnNlciIsIlVBUHJvdmlkZXIiLCJ1YSIsInByb3BzIiwib25seSIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJXcmFwcGVkQ29tcG9uZW50Iiwid2l0aFVBIiwiY29udGV4dCIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7O0FBRUEsT0FBTyxJQUFNQyxXQUFXRCxTQUFqQjtBQUNQLFdBQWFFLFVBQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQUlvQjtBQUFBLFVBQ1JDLEVBRFEsR0FDRCxLQUFLQyxLQURKLENBQ1JELEVBRFE7O0FBRWhCLGFBQU87QUFDTEEsWUFBSUEsTUFBTSxPQUFPQSxFQUFQLEtBQWMsUUFBcEIsR0FBK0IsSUFBSUgsU0FBSixDQUFjRyxFQUFkLENBQS9CLEdBQW1EQTtBQURsRCxPQUFQO0FBR0Q7QUFUSDtBQUFBO0FBQUEsNkJBVVc7QUFDUCxhQUFPTCxTQUFTTyxJQUFULENBQWMsS0FBS0QsS0FBTCxDQUFXRSxRQUF6QixDQUFQO0FBQ0Q7QUFaSDs7QUFBQTtBQUFBLEVBQWdDVCxTQUFoQyxVQUNTVSxpQkFEVCxHQUM2QjtBQUN6QkosTUFBSUosVUFBVVM7QUFEVyxDQUQ3Qjs7QUFlQSxnQkFBZSxVQUFDQyxnQkFBRCxFQUFzQjtBQUNuQyxNQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ04sS0FBRCxFQUFRTyxPQUFSO0FBQUEsV0FDYixvQkFBQyxnQkFBRCxhQUFrQixJQUFJQSxRQUFRUixFQUE5QixJQUFzQ0MsS0FBdEMsRUFEYTtBQUFBLEdBQWY7QUFFQU0sU0FBT0UsWUFBUCxHQUFzQjtBQUNwQlQsUUFBSUosVUFBVVM7QUFETSxHQUF0QjtBQUdBLFNBQU9FLE1BQVA7QUFDRCxDQVBEIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL3VzZXItYWdlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVUFQYXJzZXIyIGZyb20gJ3VhLXBhcnNlci1qcyc7XG5cbmV4cG9ydCBjb25zdCBVQVBhcnNlciA9IFVBUGFyc2VyMjtcbmV4cG9ydCBjbGFzcyBVQVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHVhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgY29uc3QgeyB1YSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgdWE6IHVhICYmIHR5cGVvZiB1YSA9PT0gJ3N0cmluZycgPyBuZXcgVUFQYXJzZXIyKHVhKSA6IHVhLFxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IHdpdGhVQSA9IChwcm9wcywgY29udGV4dCkgPT5cbiAgICA8V3JhcHBlZENvbXBvbmVudCB1YT17Y29udGV4dC51YX0gey4uLnByb3BzfSAvPjtcbiAgd2l0aFVBLmNvbnRleHRUeXBlcyA9IHtcbiAgICB1YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgcmV0dXJuIHdpdGhVQTtcbn07XG4iXX0=
