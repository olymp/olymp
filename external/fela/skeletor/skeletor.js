import _range from 'lodash/range';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
var Skeletor = (_temp = _class = function (_Component) {
  _inherits(Skeletor, _Component);

  function Skeletor() {
    _classCallCheck(this, Skeletor);

    return _possibleConstructorReturn(this, (Skeletor.__proto__ || Object.getPrototypeOf(Skeletor)).apply(this, arguments));
  }

  _createClass(Skeletor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          data = _props.data,
          dummy = _props.dummy,
          count = _props.count,
          props = _objectWithoutProperties(_props, ['component', 'data', 'dummy', 'count']);

      var skeletorLoading = this.context.skeletorLoading;


      if (!skeletorLoading) {
        return React.createElement(
          'div',
          null,
          (data || []).map(function (item) {
            return component(item);
          })
        );
      }

      return React.createElement(
        'div',
        null,
        _range(count).map(function (i) {
          return component(dummy());
        })
      );
    }
  }]);

  return Skeletor;
}(Component), _class.contextTypes = {
  skeletorLoading: PropTypes.bool
}, _temp);


export default (function (component, data, dummy, count) {
  return React.createElement(Skeletor, {
    component: component,
    data: data,
    dummy: dummy,
    count: count || 1
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3Ivc2tlbGV0b3IuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY2xvbmVFbGVtZW50IiwiUHJvcFR5cGVzIiwiU2tlbGV0b3IiLCJwcm9wcyIsImNvbXBvbmVudCIsImRhdGEiLCJkdW1teSIsImNvdW50Iiwic2tlbGV0b3JMb2FkaW5nIiwiY29udGV4dCIsIm1hcCIsIml0ZW0iLCJjb250ZXh0VHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTJCQyxZQUEzQixRQUErQyxPQUEvQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7SUFHTUMsUTs7Ozs7Ozs7Ozs7NkJBS0s7QUFBQSxtQkFDNkMsS0FBS0MsS0FEbEQ7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxJQURaLFVBQ1lBLElBRFo7QUFBQSxVQUNrQkMsS0FEbEIsVUFDa0JBLEtBRGxCO0FBQUEsVUFDeUJDLEtBRHpCLFVBQ3lCQSxLQUR6QjtBQUFBLFVBQ21DSixLQURuQzs7QUFBQSxVQUVDSyxlQUZELEdBRXFCLEtBQUtDLE9BRjFCLENBRUNELGVBRkQ7OztBQUlQLFVBQUksQ0FBQ0EsZUFBTCxFQUFzQjtBQUNwQixlQUNFO0FBQUE7QUFBQTtBQUNHLFdBQUNILFFBQVEsRUFBVCxFQUFhSyxHQUFiLENBQWlCO0FBQUEsbUJBQVFOLFVBQVVPLElBQVYsQ0FBUjtBQUFBLFdBQWpCO0FBREgsU0FERjtBQUtEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0csZUFBTUosS0FBTixFQUFhRyxHQUFiLENBQWlCO0FBQUEsaUJBQUtOLFVBQVVFLE9BQVYsQ0FBTDtBQUFBLFNBQWpCO0FBREgsT0FERjtBQUtEOzs7O0VBdEJvQlAsUyxVQUNkYSxZLEdBQWU7QUFDcEJKLG1CQUFpQlAsVUFBVVk7QUFEUCxDOzs7QUF3QnhCLGdCQUFlLFVBQUNULFNBQUQsRUFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLEtBQXpCO0FBQUEsU0FDWixvQkFBQyxRQUFEO0FBQ0MsZUFBV0gsU0FEWjtBQUVDLFVBQU1DLElBRlA7QUFHQyxXQUFPQyxLQUhSO0FBSUMsV0FBT0MsU0FBUztBQUpqQixJQURZO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3NrZWxldG9yL3NrZWxldG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnbG9kYXNoJztcblxuY2xhc3MgU2tlbGV0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHNrZWxldG9yTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2tlbGV0b3JMb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNrZWxldG9yTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KGRhdGEgfHwgW10pLm1hcChpdGVtID0+IGNvbXBvbmVudChpdGVtKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3JhbmdlKGNvdW50KS5tYXAoaSA9PiBjb21wb25lbnQoZHVtbXkoKSkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQpID0+XG4gICg8U2tlbGV0b3JcbiAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICBkYXRhPXtkYXRhfVxuICAgIGR1bW15PXtkdW1teX1cbiAgICBjb3VudD17Y291bnQgfHwgMX1cbiAgLz4pO1xuIl19
