var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

// DataProvider: Use inside of decorator to hand props through context to all children
var DataProvider = (_temp = _class = function (_Component) {
  _inherits(DataProvider, _Component);

  function DataProvider() {
    _classCallCheck(this, DataProvider);

    return _possibleConstructorReturn(this, (DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).apply(this, arguments));
  }

  _createClass(DataProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var hashtaxData = this.context.hashtaxData || {};
      var props = this.props;
      return {
        hashtaxData: _extends({}, hashtaxData, props)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return Children.only(children);
    }
  }]);

  return DataProvider;
}(Component), _class.childContextTypes = {
  hashtaxData: PropTypes.object
}, _class.contextTypes = {
  hashtaxData: PropTypes.object
}, _temp);
export { DataProvider as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9kYXRhLXByb3ZpZGVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoaWxkcmVuIiwiUHJvcFR5cGVzIiwiRGF0YVByb3ZpZGVyIiwiaGFzaHRheERhdGEiLCJjb250ZXh0IiwicHJvcHMiLCJjaGlsZHJlbiIsIm9ubHkiLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQTtJQUNxQkMsWTs7Ozs7Ozs7Ozs7c0NBT0Q7QUFDaEIsVUFBTUMsY0FBYyxLQUFLQyxPQUFMLENBQWFELFdBQWIsSUFBNEIsRUFBaEQ7QUFDQSxVQUFNRSxRQUFRLEtBQUtBLEtBQW5CO0FBQ0EsYUFBTztBQUNMRixrQ0FDS0EsV0FETCxFQUVLRSxLQUZMO0FBREssT0FBUDtBQU1EOzs7NkJBQ1E7QUFBQSxVQUNDQyxRQURELEdBQ2MsS0FBS0QsS0FEbkIsQ0FDQ0MsUUFERDs7QUFFUCxhQUFPTixTQUFTTyxJQUFULENBQWNELFFBQWQsQ0FBUDtBQUNEOzs7O0VBcEJ1Q1AsUyxVQUNqQ1MsaUIsR0FBb0I7QUFDekJMLGVBQWFGLFVBQVVRO0FBREUsQyxTQUdwQkMsWSxHQUFlO0FBQ3BCUCxlQUFhRixVQUFVUTtBQURILEM7U0FKSFAsWSIsImZpbGUiOiJwYWNrYWdlcy9tYWlsL2hhc2h0YXgvZGF0YS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gRGF0YVByb3ZpZGVyOiBVc2UgaW5zaWRlIG9mIGRlY29yYXRvciB0byBoYW5kIHByb3BzIHRocm91Z2ggY29udGV4dCB0byBhbGwgY2hpbGRyZW5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBoYXNodGF4RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBoYXNodGF4RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IGhhc2h0YXhEYXRhID0gdGhpcy5jb250ZXh0Lmhhc2h0YXhEYXRhIHx8IHt9O1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgaGFzaHRheERhdGE6IHtcbiAgICAgICAgLi4uaGFzaHRheERhdGEsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgfVxufVxuIl19
