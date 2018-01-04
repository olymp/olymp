'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withStores = function withStores(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithStores, _Component);

    function WithStores(props, context) {
      _classCallCheck(this, WithStores);

      var _this = _possibleConstructorReturn(this, (WithStores.__proto__ || Object.getPrototypeOf(WithStores)).call(this, props, context));

      var args = _extends({}, props, { stores: context.mobxStores });
      _this.stores = {
        $theme: new _utils.ThemeStore(args)
      };
      Object.keys(_this.stores).forEach(function (key) {
        _this.stores[key].stores = _this.stores;
        if (_this.stores[key].initialize) {
          _this.stores[key].initialize();
        }
      });
      return _this;
    }

    _createClass(WithStores, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithStores;
  }(_react.Component), _class.contextTypes = {
    mobxStores: _propTypes2.default.object
  }, _temp;
};

exports.default = withStores(function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _reactFela.Provider,
    { renderer: (0, _utils.createFela)() },
    _react2.default.createElement(
      _utils.ThemeProvider,
      null,
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc3R5bGVndWlkZS5wcm92aWRlci5lczYiXSwibmFtZXMiOlsid2l0aFN0b3JlcyIsInByb3BzIiwiY29udGV4dCIsImFyZ3MiLCJzdG9yZXMiLCJtb2J4U3RvcmVzIiwiJHRoZW1lIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbml0aWFsaXplIiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQTs7QUFBQTtBQUFBOztBQU1mLHdCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBLDBIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsVUFBTUMsb0JBQVlGLEtBQVosSUFBbUJHLFFBQVFGLFFBQVFHLFVBQW5DLEdBQU47QUFDQSxZQUFLRCxNQUFMLEdBQWM7QUFDWkUsZ0JBQVEsc0JBQWVILElBQWY7QUFESSxPQUFkO0FBR0FJLGFBQU9DLElBQVAsQ0FBWSxNQUFLSixNQUFqQixFQUF5QkssT0FBekIsQ0FBaUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hDLGNBQUtOLE1BQUwsQ0FBWU0sR0FBWixFQUFpQk4sTUFBakIsR0FBMEIsTUFBS0EsTUFBL0I7QUFDQSxZQUFJLE1BQUtBLE1BQUwsQ0FBWU0sR0FBWixFQUFpQkMsVUFBckIsRUFBaUM7QUFDL0IsZ0JBQUtQLE1BQUwsQ0FBWU0sR0FBWixFQUFpQkMsVUFBakI7QUFDRDtBQUNGLE9BTEQ7QUFOMEI7QUFZM0I7O0FBbEJjO0FBQUE7QUFBQSwrQkFtQk47QUFDUCxlQUFPLDhCQUFDLGdCQUFELEVBQXNCLEtBQUtWLEtBQTNCLENBQVA7QUFDRDtBQXJCYzs7QUFBQTtBQUFBLDhCQUVSVyxZQUZRLEdBRU87QUFDcEJQLGdCQUFZLG9CQUFVUTtBQURGLEdBRlA7QUFBQSxDQUFuQjs7a0JBd0JlYixXQUFXO0FBQUEsTUFBR2MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDeEI7QUFBQTtBQUFBLE1BQWMsVUFBVSx3QkFBeEI7QUFDRTtBQUFBO0FBQUE7QUFBZ0JBO0FBQWhCO0FBREYsR0FEd0I7QUFBQSxDQUFYLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9zdHlsZWd1aWRlLnByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBGZWxhUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIFRoZW1lU3RvcmUsIGNyZWF0ZUZlbGEgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgd2l0aFN0b3JlcyA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgV2l0aFN0b3JlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIG1vYnhTdG9yZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICBjb25zdCBhcmdzID0geyAuLi5wcm9wcywgc3RvcmVzOiBjb250ZXh0Lm1vYnhTdG9yZXMgfTtcbiAgICAgIHRoaXMuc3RvcmVzID0ge1xuICAgICAgICAkdGhlbWU6IG5ldyBUaGVtZVN0b3JlKGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RvcmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZXNba2V5XS5zdG9yZXMgPSB0aGlzLnN0b3JlcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcmVzW2tleV0uaW5pdGlhbGl6ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmVzW2tleV0uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdG9yZXMoKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8RmVsYVByb3ZpZGVyIHJlbmRlcmVyPXtjcmVhdGVGZWxhKCl9PlxuICAgIDxUaGVtZVByb3ZpZGVyPntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4gIDwvRmVsYVByb3ZpZGVyPlxuKSk7XG4iXX0=
