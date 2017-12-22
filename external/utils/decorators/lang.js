var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export var LangProvider = (_temp = _class = function (_Component) {
  _inherits(LangProvider, _Component);

  function LangProvider() {
    _classCallCheck(this, LangProvider);

    return _possibleConstructorReturn(this, (LangProvider.__proto__ || Object.getPrototypeOf(LangProvider)).apply(this, arguments));
  }

  _createClass(LangProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        lang: this.props.lang || {}
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);

  return LangProvider;
}(Component), _class.childContextTypes = {
  lang: PropTypes.object
}, _temp);

var withLangProvider = function withLangProvider() {
  var langOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    var withLangProvider = function withLangProvider(_ref) {
      var lang = _ref.lang,
          props = _objectWithoutProperties(_ref, ['lang']);

      return React.createElement(
        LangProvider,
        { lang: _extends({}, langOption, {} || lang) },
        React.createElement(WrappedComponent, props)
      );
    };
    return withLangProvider;
  };
};

export { withLangProvider };
export default (function (WrappedComponent) {
  var withLang = function withLang(props, context) {
    return React.createElement(WrappedComponent, _extends({ lang: context.lang }, props));
  };
  withLang.contextTypes = {
    lang: PropTypes.object
  };
  return withLang;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvbGFuZy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsIkxhbmdQcm92aWRlciIsImxhbmciLCJwcm9wcyIsIm9ubHkiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0Iiwid2l0aExhbmdQcm92aWRlciIsImxhbmdPcHRpb24iLCJXcmFwcGVkQ29tcG9uZW50Iiwid2l0aExhbmciLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTJCQyxRQUEzQixRQUEyQyxPQUEzQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUEsV0FBYUMsWUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsc0NBSW9CO0FBQ2hCLGFBQU87QUFDTEMsY0FBTSxLQUFLQyxLQUFMLENBQVdELElBQVgsSUFBbUI7QUFEcEIsT0FBUDtBQUdEO0FBUkg7QUFBQTtBQUFBLDZCQVNXO0FBQ1AsYUFBT0gsU0FBU0ssSUFBVCxDQUFjLEtBQUtELEtBQUwsQ0FBV0UsUUFBekIsQ0FBUDtBQUNEO0FBWEg7O0FBQUE7QUFBQSxFQUFrQ1AsU0FBbEMsVUFDU1EsaUJBRFQsR0FDNkI7QUFDekJKLFFBQU1GLFVBQVVPO0FBRFMsQ0FEN0I7O0FBY08sSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFDQyxVQUFELHVFQUFjLEVBQWQ7QUFBQSxTQUFxQixVQUFDQyxnQkFBRCxFQUFzQjtBQUN6RSxRQUFNRixtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFVBQUdOLElBQUgsUUFBR0EsSUFBSDtBQUFBLFVBQVlDLEtBQVo7O0FBQUEsYUFDdEI7QUFBQyxvQkFBRDtBQUFBLFVBQWMsbUJBQVdNLFVBQVgsRUFBMkIsTUFBTVAsSUFBakMsQ0FBZDtBQUNDLDRCQUFDLGdCQUFELEVBQXNCQyxLQUF0QjtBQURELE9BRHNCO0FBQUEsS0FBekI7QUFJQSxXQUFPSyxnQkFBUDtBQUNELEdBTitCO0FBQUEsQ0FBekI7OztBQVFQLGdCQUFlLFVBQUNFLGdCQUFELEVBQXNCO0FBQ25DLE1BQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDUixLQUFELEVBQVFTLE9BQVI7QUFBQSxXQUNmLG9CQUFDLGdCQUFELGFBQWtCLE1BQU1BLFFBQVFWLElBQWhDLElBQTBDQyxLQUExQyxFQURlO0FBQUEsR0FBakI7QUFFQVEsV0FBU0UsWUFBVCxHQUF3QjtBQUN0QlgsVUFBTUYsVUFBVU87QUFETSxHQUF4QjtBQUdBLFNBQU9JLFFBQVA7QUFDRCxDQVBEIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvbGFuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExhbmdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBsYW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmc6IHRoaXMucHJvcHMubGFuZyB8fCB7fSxcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgd2l0aExhbmdQcm92aWRlciA9IChsYW5nT3B0aW9uID0ge30pID0+IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IHdpdGhMYW5nUHJvdmlkZXIgPSAoeyBsYW5nLCAuLi5wcm9wcyB9KSA9PlxuICAgICg8TGFuZ1Byb3ZpZGVyIGxhbmc9e3sgLi4ubGFuZ09wdGlvbiwgLi4uKHt9IHx8IGxhbmcpIH19PlxuICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgIDwvTGFuZ1Byb3ZpZGVyPik7XG4gIHJldHVybiB3aXRoTGFuZ1Byb3ZpZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgY29uc3Qgd2l0aExhbmcgPSAocHJvcHMsIGNvbnRleHQpID0+XG4gICAgPFdyYXBwZWRDb21wb25lbnQgbGFuZz17Y29udGV4dC5sYW5nfSB7Li4ucHJvcHN9IC8+O1xuICB3aXRoTGFuZy5jb250ZXh0VHlwZXMgPSB7XG4gICAgbGFuZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgcmV0dXJuIHdpdGhMYW5nO1xufTtcbiJdfQ==
