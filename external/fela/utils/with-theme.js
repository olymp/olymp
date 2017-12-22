import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { withTheme } from 'react-fela';
import { shallowEqual } from 'recompose';


export default (function (getThemeFromProps) {
  return function (WrappedComponent) {
    var _class, _class2, _temp, _initialiseProps;

    var WithThemeComponent = withTheme(_class = (_temp = _class2 = function (_Component) {
      _inherits(WithThemeComponent, _Component);

      function WithThemeComponent(props) {
        _classCallCheck(this, WithThemeComponent);

        var _this = _possibleConstructorReturn(this, (WithThemeComponent.__proto__ || Object.getPrototypeOf(WithThemeComponent)).call(this, props));

        _initialiseProps.call(_this);

        _this.skip = _get(props.editor, 'props.prefetch', false);
        _this.setTheme(props);
        return _this;
      }

      _createClass(WithThemeComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this.setTheme(props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var theme = this.props.theme;


          if (this.skip || !theme) {
            return;
          }

          theme.update({});
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(WrappedComponent, this.props);
        }
      }]);

      return WithThemeComponent;
    }(Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.setTheme = function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props;
        var theme = props.theme;


        if (_this2.skip || !theme) {
          return;
        }

        var newTheme = getThemeFromProps(props) || {};
        if (!shallowEqual(newTheme, _this2.theme)) {
          theme.update(newTheme);
          _this2.theme = newTheme;
        }
      };
    }, _temp)) || _class;

    return WithThemeComponent;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC10aGVtZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoVGhlbWUiLCJzaGFsbG93RXF1YWwiLCJXaXRoVGhlbWVDb21wb25lbnQiLCJwcm9wcyIsInNraXAiLCJlZGl0b3IiLCJzZXRUaGVtZSIsInRoZW1lIiwidXBkYXRlIiwibmV3VGhlbWUiLCJnZXRUaGVtZUZyb21Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsV0FBN0I7OztBQUdBLGdCQUFlO0FBQUEsU0FBcUIsNEJBQW9CO0FBQUE7O0FBQUEsUUFFaERDLGtCQUZnRCxHQUNyREYsU0FEcUQ7QUFBQTs7QUFHcEQsa0NBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SUFDWEEsS0FEVzs7QUFBQTs7QUFFakIsY0FBS0MsSUFBTCxHQUFZLEtBQUlELE1BQU1FLE1BQVYsRUFBa0IsZ0JBQWxCLEVBQW9DLEtBQXBDLENBQVo7QUFDQSxjQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFIaUI7QUFJbEI7O0FBUG1EO0FBQUE7QUFBQSxrREFTMUJBLEtBVDBCLEVBU25CO0FBQy9CLGVBQUtHLFFBQUwsQ0FBY0gsS0FBZDtBQUNEO0FBWG1EO0FBQUE7QUFBQSwrQ0FhN0I7QUFBQSxjQUNiSSxLQURhLEdBQ0gsS0FBS0osS0FERixDQUNiSSxLQURhOzs7QUFHckIsY0FBSSxLQUFLSCxJQUFMLElBQWEsQ0FBQ0csS0FBbEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFREEsZ0JBQU1DLE1BQU4sQ0FBYSxFQUFiO0FBQ0Q7QUFyQm1EO0FBQUE7QUFBQSxpQ0FxQzNDO0FBQ1AsaUJBQU8sb0JBQUMsZ0JBQUQsRUFBc0IsS0FBS0wsS0FBM0IsQ0FBUDtBQUNEO0FBdkNtRDs7QUFBQTtBQUFBLE1BRXJCSixTQUZxQjtBQUFBOztBQUFBLFdBdUJwRE8sUUF2Qm9ELEdBdUJ6QyxZQUF3QjtBQUFBLFlBQXZCSCxLQUF1Qix1RUFBZixPQUFLQSxLQUFVO0FBQUEsWUFDekJJLEtBRHlCLEdBQ2ZKLEtBRGUsQ0FDekJJLEtBRHlCOzs7QUFHakMsWUFBSSxPQUFLSCxJQUFMLElBQWEsQ0FBQ0csS0FBbEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxZQUFNRSxXQUFXQyxrQkFBa0JQLEtBQWxCLEtBQTRCLEVBQTdDO0FBQ0EsWUFBSSxDQUFDRixhQUFhUSxRQUFiLEVBQXVCLE9BQUtGLEtBQTVCLENBQUwsRUFBeUM7QUFDdkNBLGdCQUFNQyxNQUFOLENBQWFDLFFBQWI7QUFDQSxpQkFBS0YsS0FBTCxHQUFhRSxRQUFiO0FBQ0Q7QUFDRixPQW5DbUQ7QUFBQTs7QUF5Q3RELFdBQU9QLGtCQUFQO0FBQ0QsR0ExQ2M7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC10aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUaGVtZUZyb21Qcm9wcyA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgQHdpdGhUaGVtZVxuICBjbGFzcyBXaXRoVGhlbWVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnNraXAgPSBnZXQocHJvcHMuZWRpdG9yLCAncHJvcHMucHJlZmV0Y2gnLCBmYWxzZSk7XG4gICAgICB0aGlzLnNldFRoZW1lKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLnNldFRoZW1lKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICh0aGlzLnNraXAgfHwgIXRoZW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhlbWUudXBkYXRlKHt9KTtcbiAgICB9XG5cbiAgICBzZXRUaGVtZSA9IChwcm9wcyA9IHRoaXMucHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgdGhlbWUgfSA9IHByb3BzO1xuXG4gICAgICBpZiAodGhpcy5za2lwIHx8ICF0aGVtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RoZW1lID0gZ2V0VGhlbWVGcm9tUHJvcHMocHJvcHMpIHx8IHt9O1xuICAgICAgaWYgKCFzaGFsbG93RXF1YWwobmV3VGhlbWUsIHRoaXMudGhlbWUpKSB7XG4gICAgICAgIHRoZW1lLnVwZGF0ZShuZXdUaGVtZSk7XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXdUaGVtZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFdpdGhUaGVtZUNvbXBvbmVudDtcbn07XG4iXX0=
