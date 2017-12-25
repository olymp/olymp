var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import throttleInput from '../throttle-input';

export default (function (name) {
  return function (WrappedComponent) {
    var _class, _temp, _initialiseProps;

    return _temp = _class = function (_Component) {
      _inherits(WithSearchComponent, _Component);

      function WithSearchComponent(props) {
        _classCallCheck(this, WithSearchComponent);

        var _this = _possibleConstructorReturn(this, (WithSearchComponent.__proto__ || Object.getPrototypeOf(WithSearchComponent)).call(this));

        _initialiseProps.call(_this);

        var location = props.location;

        _this.state = _defineProperty({}, name, location.query && location.query[name]);
        return _this;
      }

      _createClass(WithSearchComponent, [{
        key: 'render',
        value: function render() {
          var location = this.props.location;

          return React.createElement(WrappedComponent, _extends({}, this.props, {
            performSearch: this.search,
            searchText: this.state[name],
            searchTerm: location.query && location.query[name]
          }));
        }
      }]);

      return WithSearchComponent;
    }(Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.throttle = throttleInput(500);

      this.search = function (term) {
        var _props = _this2.props,
            location = _props.location,
            router = _props.router;
        var pathname = location.pathname,
            query = location.query;

        _this2.setState(_defineProperty({}, name, term));
        _this2.throttle(function () {
          router.push({
            pathname: pathname,
            query: _extends({}, query, _defineProperty({}, name, term || undefined))
          });
        });
      };
    }, _temp;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc2VhcmNoLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInRocm90dGxlSW5wdXQiLCJwcm9wcyIsImxvY2F0aW9uIiwic3RhdGUiLCJuYW1lIiwicXVlcnkiLCJzZWFyY2giLCJ0aHJvdHRsZSIsInRlcm0iLCJyb3V0ZXIiLCJwYXRobmFtZSIsInNldFN0YXRlIiwicHVzaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLG1CQUExQjs7QUFFQSxnQkFBZTtBQUFBLFNBQVE7QUFBQTs7QUFBQTtBQUFBOztBQUduQixtQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBOztBQUFBLFlBRVRDLFFBRlMsR0FFSUQsS0FGSixDQUVUQyxRQUZTOztBQUdqQixjQUFLQyxLQUFMLHVCQUNHQyxJQURILEVBQ1VGLFNBQVNHLEtBQVQsSUFBa0JILFNBQVNHLEtBQVQsQ0FBZUQsSUFBZixDQUQ1QjtBQUhpQjtBQU1sQjs7QUFUa0I7QUFBQTtBQUFBLGlDQXFCVjtBQUFBLGNBQ0NGLFFBREQsR0FDYyxLQUFLRCxLQURuQixDQUNDQyxRQUREOztBQUVQLGlCQUNFLG9CQUFDLGdCQUFELGVBQ00sS0FBS0QsS0FEWDtBQUVFLDJCQUFlLEtBQUtLLE1BRnRCO0FBR0Usd0JBQVksS0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBSGQ7QUFJRSx3QkFBWUYsU0FBU0csS0FBVCxJQUFrQkgsU0FBU0csS0FBVCxDQUFlRCxJQUFmO0FBSmhDLGFBREY7QUFRRDtBQS9Ca0I7O0FBQUE7QUFBQSxNQUNhTCxTQURiO0FBQUE7O0FBQUEsV0FFbkJRLFFBRm1CLEdBRVJQLGNBQWMsR0FBZCxDQUZROztBQUFBLFdBVW5CTSxNQVZtQixHQVVWLFVBQUNFLElBQUQsRUFBVTtBQUFBLHFCQUNZLE9BQUtQLEtBRGpCO0FBQUEsWUFDVEMsUUFEUyxVQUNUQSxRQURTO0FBQUEsWUFDQ08sTUFERCxVQUNDQSxNQUREO0FBQUEsWUFFVEMsUUFGUyxHQUVXUixRQUZYLENBRVRRLFFBRlM7QUFBQSxZQUVDTCxLQUZELEdBRVdILFFBRlgsQ0FFQ0csS0FGRDs7QUFHakIsZUFBS00sUUFBTCxxQkFBaUJQLElBQWpCLEVBQXdCSSxJQUF4QjtBQUNBLGVBQUtELFFBQUwsQ0FBYyxZQUFNO0FBQ2xCRSxpQkFBT0csSUFBUCxDQUFZO0FBQ1ZGLDhCQURVO0FBRVZMLGdDQUFZQSxLQUFaLHNCQUFvQkQsSUFBcEIsRUFBMkJJLFFBQVFLLFNBQW5DO0FBRlUsV0FBWjtBQUlELFNBTEQ7QUFNRCxPQXBCa0I7QUFBQTtBQUFBLEdBQVI7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0aHJvdHRsZUlucHV0IGZyb20gJy4uL3Rocm90dGxlLWlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgbmFtZSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFdpdGhTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHRocm90dGxlID0gdGhyb3R0bGVJbnB1dCg1MDApO1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gcHJvcHM7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBbbmFtZV06IGxvY2F0aW9uLnF1ZXJ5ICYmIGxvY2F0aW9uLnF1ZXJ5W25hbWVdLFxuICAgICAgfTtcbiAgICB9XG4gICAgc2VhcmNoID0gKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHsgbG9jYXRpb24sIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBsb2NhdGlvbjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHRlcm0gfSk7XG4gICAgICB0aGlzLnRocm90dGxlKCgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBbbmFtZV06IHRlcm0gfHwgdW5kZWZpbmVkIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBwZXJmb3JtU2VhcmNoPXt0aGlzLnNlYXJjaH1cbiAgICAgICAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlW25hbWVdfVxuICAgICAgICAgIHNlYXJjaFRlcm09e2xvY2F0aW9uLnF1ZXJ5ICYmIGxvY2F0aW9uLnF1ZXJ5W25hbWVdfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG4iXX0=
