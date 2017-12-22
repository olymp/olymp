var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider as FelaProvider } from 'react-fela';
import { ThemeProvider, ThemeStore, createFela } from './utils';

var withStores = function withStores(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithStores, _Component);

    function WithStores(props, context) {
      _classCallCheck(this, WithStores);

      var _this = _possibleConstructorReturn(this, (WithStores.__proto__ || Object.getPrototypeOf(WithStores)).call(this, props, context));

      var args = _extends({}, props, { stores: context.mobxStores });
      _this.stores = {
        $theme: new ThemeStore(args)
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
        return React.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithStores;
  }(Component), _class.contextTypes = {
    mobxStores: PropTypes.object
  }, _temp;
};

export default withStores(function (_ref) {
  var children = _ref.children;
  return React.createElement(
    FelaProvider,
    { renderer: createFela() },
    React.createElement(
      ThemeProvider,
      null,
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc3R5bGVndWlkZS5wcm92aWRlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQcm92aWRlciIsIkZlbGFQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJUaGVtZVN0b3JlIiwiY3JlYXRlRmVsYSIsIndpdGhTdG9yZXMiLCJwcm9wcyIsImNvbnRleHQiLCJhcmdzIiwic3RvcmVzIiwibW9ieFN0b3JlcyIsIiR0aGVtZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5pdGlhbGl6ZSIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsWUFBWUMsWUFBckIsUUFBeUMsWUFBekM7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxVQUF4QixFQUFvQ0MsVUFBcEMsUUFBc0QsU0FBdEQ7O0FBRUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUE7O0FBQUE7QUFBQTs7QUFNZix3QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSwwSEFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFVBQU1DLG9CQUFZRixLQUFaLElBQW1CRyxRQUFRRixRQUFRRyxVQUFuQyxHQUFOO0FBQ0EsWUFBS0QsTUFBTCxHQUFjO0FBQ1pFLGdCQUFRLElBQUlSLFVBQUosQ0FBZUssSUFBZjtBQURJLE9BQWQ7QUFHQUksYUFBT0MsSUFBUCxDQUFZLE1BQUtKLE1BQWpCLEVBQXlCSyxPQUF6QixDQUFpQyxVQUFDQyxHQUFELEVBQVM7QUFDeEMsY0FBS04sTUFBTCxDQUFZTSxHQUFaLEVBQWlCTixNQUFqQixHQUEwQixNQUFLQSxNQUEvQjtBQUNBLFlBQUksTUFBS0EsTUFBTCxDQUFZTSxHQUFaLEVBQWlCQyxVQUFyQixFQUFpQztBQUMvQixnQkFBS1AsTUFBTCxDQUFZTSxHQUFaLEVBQWlCQyxVQUFqQjtBQUNEO0FBQ0YsT0FMRDtBQU4wQjtBQVkzQjs7QUFsQmM7QUFBQTtBQUFBLCtCQW1CTjtBQUNQLGVBQU8sb0JBQUMsZ0JBQUQsRUFBc0IsS0FBS1YsS0FBM0IsQ0FBUDtBQUNEO0FBckJjOztBQUFBO0FBQUEsSUFDUVIsU0FEUixVQUVSbUIsWUFGUSxHQUVPO0FBQ3BCUCxnQkFBWVgsVUFBVW1CO0FBREYsR0FGUDtBQUFBLENBQW5COztBQXdCQSxlQUFlYixXQUFXO0FBQUEsTUFBR2MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDeEI7QUFBQyxnQkFBRDtBQUFBLE1BQWMsVUFBVWYsWUFBeEI7QUFDRTtBQUFDLG1CQUFEO0FBQUE7QUFBZ0JlO0FBQWhCO0FBREYsR0FEd0I7QUFBQSxDQUFYLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9zdHlsZWd1aWRlLnByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBGZWxhUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIFRoZW1lU3RvcmUsIGNyZWF0ZUZlbGEgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgd2l0aFN0b3JlcyA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgV2l0aFN0b3JlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIG1vYnhTdG9yZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICBjb25zdCBhcmdzID0geyAuLi5wcm9wcywgc3RvcmVzOiBjb250ZXh0Lm1vYnhTdG9yZXMgfTtcbiAgICAgIHRoaXMuc3RvcmVzID0ge1xuICAgICAgICAkdGhlbWU6IG5ldyBUaGVtZVN0b3JlKGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RvcmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZXNba2V5XS5zdG9yZXMgPSB0aGlzLnN0b3JlcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcmVzW2tleV0uaW5pdGlhbGl6ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmVzW2tleV0uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdG9yZXMoKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8RmVsYVByb3ZpZGVyIHJlbmRlcmVyPXtjcmVhdGVGZWxhKCl9PlxuICAgIDxUaGVtZVByb3ZpZGVyPntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4gIDwvRmVsYVByb3ZpZGVyPlxuKSk7XG4iXX0=
