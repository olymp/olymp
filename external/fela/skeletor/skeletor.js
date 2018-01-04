'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(
          'div',
          null,
          (data || []).map(function (item) {
            return component(item);
          })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        (0, _range3.default)(count).map(function (i) {
          return component(dummy());
        })
      );
    }
  }]);

  return Skeletor;
}(_react.Component), _class.contextTypes = {
  skeletorLoading: _propTypes2.default.bool
}, _temp);

exports.default = function (component, data, dummy, count) {
  return _react2.default.createElement(Skeletor, {
    component: component,
    data: data,
    dummy: dummy,
    count: count || 1
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2tlbGV0b3Ivc2tlbGV0b3IuZXM2Il0sIm5hbWVzIjpbIlNrZWxldG9yIiwicHJvcHMiLCJjb21wb25lbnQiLCJkYXRhIiwiZHVtbXkiLCJjb3VudCIsInNrZWxldG9yTG9hZGluZyIsImNvbnRleHQiLCJtYXAiLCJpdGVtIiwiY29udGV4dFR5cGVzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdNQSxROzs7Ozs7Ozs7Ozs2QkFLSztBQUFBLG1CQUM2QyxLQUFLQyxLQURsRDtBQUFBLFVBQ0NDLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lDLElBRFosVUFDWUEsSUFEWjtBQUFBLFVBQ2tCQyxLQURsQixVQUNrQkEsS0FEbEI7QUFBQSxVQUN5QkMsS0FEekIsVUFDeUJBLEtBRHpCO0FBQUEsVUFDbUNKLEtBRG5DOztBQUFBLFVBRUNLLGVBRkQsR0FFcUIsS0FBS0MsT0FGMUIsQ0FFQ0QsZUFGRDs7O0FBSVAsVUFBSSxDQUFDQSxlQUFMLEVBQXNCO0FBQ3BCLGVBQ0U7QUFBQTtBQUFBO0FBQ0csV0FBQ0gsUUFBUSxFQUFULEVBQWFLLEdBQWIsQ0FBaUI7QUFBQSxtQkFBUU4sVUFBVU8sSUFBVixDQUFSO0FBQUEsV0FBakI7QUFESCxTQURGO0FBS0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRyw2QkFBTUosS0FBTixFQUFhRyxHQUFiLENBQWlCO0FBQUEsaUJBQUtOLFVBQVVFLE9BQVYsQ0FBTDtBQUFBLFNBQWpCO0FBREgsT0FERjtBQUtEOzs7OzRCQXJCTU0sWSxHQUFlO0FBQ3BCSixtQkFBaUIsb0JBQVVLO0FBRFAsQzs7a0JBd0JULFVBQUNULFNBQUQsRUFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLEtBQXpCO0FBQUEsU0FDWiw4QkFBQyxRQUFEO0FBQ0MsZUFBV0gsU0FEWjtBQUVDLFVBQU1DLElBRlA7QUFHQyxXQUFPQyxLQUhSO0FBSUMsV0FBT0MsU0FBUztBQUpqQixJQURZO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3NrZWxldG9yL3NrZWxldG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnbG9kYXNoJztcblxuY2xhc3MgU2tlbGV0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHNrZWxldG9yTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2tlbGV0b3JMb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNrZWxldG9yTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KGRhdGEgfHwgW10pLm1hcChpdGVtID0+IGNvbXBvbmVudChpdGVtKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3JhbmdlKGNvdW50KS5tYXAoaSA9PiBjb21wb25lbnQoZHVtbXkoKSkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQpID0+XG4gICg8U2tlbGV0b3JcbiAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICBkYXRhPXtkYXRhfVxuICAgIGR1bW15PXtkdW1teX1cbiAgICBjb3VudD17Y291bnQgfHwgMX1cbiAgLz4pO1xuIl19
