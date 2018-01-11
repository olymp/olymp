'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault(_debounce2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/input/style');

require('antd/lib/col/style');

require('antd/lib/select/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterComponent = function (_Component) {
  _inherits(FilterComponent, _Component);

  function FilterComponent(props) {
    _classCallCheck(this, FilterComponent);

    var _this = _possibleConstructorReturn(this, (FilterComponent.__proto__ || Object.getPrototypeOf(FilterComponent)).call(this, props));

    _this.handleChange = function (e) {
      // React event weirdness requires storing
      // the synthetic event
      var val = e.target.value;
      _this.setState({ value: val }, function () {
        _this.changed(val);
      });
    };

    _this.state = {
      value: props.value
    };
    // debounce the passed in dispatch method
    _this.changed = (0, _debounce3.default)(_this.props.onChange, 300);
    return _this;
  }

  _createClass(FilterComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== this.state.value) {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          placeholder = _props.placeholder,
          sort = _props.sort,
          onSort = _props.onSort;
      var value = this.state.value;

      var suffix = value ? _react2.default.createElement(_icon2.default, {
        type: 'close-circle',
        onClick: function onClick() {
          return _this2.handleChange({ target: { value: null } });
        }
      }) : null;

      return _react2.default.createElement(
        'div',
        { className: className },
        children,
        _react2.default.createElement(
          _input2.default.Group,
          null,
          _react2.default.createElement(
            _col2.default,
            { span: 14 },
            _react2.default.createElement(_input2.default, {
              placeholder: placeholder || 'Suche ...',
              suffix: suffix,
              value: value,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 10 },
            !!sort && !!sort.length && _react2.default.createElement(
              _select2.default,
              {
                placeholder: 'Sortieren',
                onChange: onSort,
                style: { width: '100%' }
              },
              sort.map(function (_ref2) {
                var name = _ref2.name,
                    label = _ref2.label;
                return _react2.default.createElement(
                  _select2.default.Option,
                  { key: name, value: name },
                  label
                );
              })
            )
          )
        )
      );
    }
  }]);

  return FilterComponent;
}(_react.Component);

exports.default = (0, _olympFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.space2,
    borderBottom: (0, _olympFela.border)(theme, theme.dark5),
    backgroundColor: theme.dark5
  };
}, function (p) {
  return _react2.default.createElement(FilterComponent, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2xpc3QvZmlsdGVyLmVzNiJdLCJuYW1lcyI6WyJGaWx0ZXJDb21wb25lbnQiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsInZhbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY2hhbmdlZCIsInN0YXRlIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBsYWNlaG9sZGVyIiwic29ydCIsIm9uU29ydCIsInN1ZmZpeCIsImxlbmd0aCIsIndpZHRoIiwibWFwIiwibmFtZSIsImxhYmVsIiwidGhlbWUiLCJwYWRkaW5nIiwic3BhY2UyIiwiYm9yZGVyQm90dG9tIiwiZGFyazUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUlNQSxlOzs7QUFDSiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNYQSxLQURXOztBQUFBLFVBZW5CQyxZQWZtQixHQWVKLGFBQUs7QUFDbEI7QUFDQTtBQUNBLFVBQU1DLE1BQU1DLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUQsT0FBT0gsR0FBVCxFQUFkLEVBQThCLFlBQU07QUFDbEMsY0FBS0ssT0FBTCxDQUFhTCxHQUFiO0FBQ0QsT0FGRDtBQUdELEtBdEJrQjs7QUFFakIsVUFBS00sS0FBTCxHQUFhO0FBQ1hILGFBQU9MLE1BQU1LO0FBREYsS0FBYjtBQUdBO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLHdCQUFTLE1BQUtQLEtBQUwsQ0FBV1MsUUFBcEIsRUFBOEIsR0FBOUIsQ0FBZjtBQU5pQjtBQU9sQjs7OztvREFFb0M7QUFBQSxVQUFUSixLQUFTLFFBQVRBLEtBQVM7O0FBQ25DLFVBQUlBLFVBQVUsS0FBS0csS0FBTCxDQUFXSCxLQUF6QixFQUFnQztBQUM5QixhQUFLQyxRQUFMLENBQWMsRUFBRUQsWUFBRixFQUFkO0FBQ0Q7QUFDRjs7OzZCQVdRO0FBQUE7O0FBQUEsbUJBQ29ELEtBQUtMLEtBRHpEO0FBQUEsVUFDQ1UsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWUMsUUFEWixVQUNZQSxRQURaO0FBQUEsVUFDc0JDLFdBRHRCLFVBQ3NCQSxXQUR0QjtBQUFBLFVBQ21DQyxJQURuQyxVQUNtQ0EsSUFEbkM7QUFBQSxVQUN5Q0MsTUFEekMsVUFDeUNBLE1BRHpDO0FBQUEsVUFFQ1QsS0FGRCxHQUVXLEtBQUtHLEtBRmhCLENBRUNILEtBRkQ7O0FBR1AsVUFBTVUsU0FBU1YsUUFDYjtBQUNFLGNBQUssY0FEUDtBQUVFLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0osWUFBTCxDQUFrQixFQUFFRyxRQUFRLEVBQUVDLE9BQU8sSUFBVCxFQUFWLEVBQWxCLENBQU47QUFBQTtBQUZYLFFBRGEsR0FLWCxJQUxKOztBQU9BLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0ssU0FBaEI7QUFDR0MsZ0JBREg7QUFFRTtBQUFBLDBCQUFPLEtBQVA7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLE1BQU0sRUFBWDtBQUNFO0FBQ0UsMkJBQWFDLGVBQWUsV0FEOUI7QUFFRSxzQkFBUUcsTUFGVjtBQUdFLHFCQUFPVixLQUhUO0FBSUUsd0JBQVUsS0FBS0o7QUFKakI7QUFERixXQURGO0FBU0U7QUFBQTtBQUFBLGNBQUssTUFBTSxFQUFYO0FBQ0csYUFBQyxDQUFDWSxJQUFGLElBQ0MsQ0FBQyxDQUFDQSxLQUFLRyxNQURSLElBRUc7QUFBQTtBQUFBO0FBQ0UsNkJBQVksV0FEZDtBQUVFLDBCQUFVRixNQUZaO0FBR0UsdUJBQU8sRUFBRUcsT0FBTyxNQUFUO0FBSFQ7QUFLR0osbUJBQUtLLEdBQUwsQ0FBUztBQUFBLG9CQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxvQkFBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsdUJBQ1I7QUFBQSxtQ0FBUSxNQUFSO0FBQUEsb0JBQWUsS0FBS0QsSUFBcEIsRUFBMEIsT0FBT0EsSUFBakM7QUFDR0M7QUFESCxpQkFEUTtBQUFBLGVBQVQ7QUFMSDtBQUhOO0FBVEY7QUFGRixPQURGO0FBK0JEOzs7Ozs7a0JBRVksZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRSxNQUREO0FBRWRDLGtCQUFjLHVCQUFPSCxLQUFQLEVBQWNBLE1BQU1JLEtBQXBCLENBRkE7QUFHZEMscUJBQWlCTCxNQUFNSTtBQUhULEdBQWhCO0FBQUEsQ0FEYSxFQU1iO0FBQUEsU0FBSyw4QkFBQyxlQUFELEVBQXFCRSxDQUFyQixDQUFMO0FBQUEsQ0FOYSxFQU9iO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQVBhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvbGlzdC9maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElucHV0LCBJY29uLCBTZWxlY3QsIENvbCB9IGZyb20gJ2FudGQnO1xuXG5jbGFzcyBGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgIH07XG4gICAgLy8gZGVib3VuY2UgdGhlIHBhc3NlZCBpbiBkaXNwYXRjaCBtZXRob2RcbiAgICB0aGlzLmNoYW5nZWQgPSBkZWJvdW5jZSh0aGlzLnByb3BzLm9uQ2hhbmdlLCAzMDApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHZhbHVlIH0pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICAvLyBSZWFjdCBldmVudCB3ZWlyZG5lc3MgcmVxdWlyZXMgc3RvcmluZ1xuICAgIC8vIHRoZSBzeW50aGV0aWMgZXZlbnRcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQodmFsKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFjZWhvbGRlciwgc29ydCwgb25Tb3J0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3VmZml4ID0gdmFsdWUgPyAoXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiY2xvc2UtY2lyY2xlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6IG51bGwgfSB9KX1cbiAgICAgIC8+XG4gICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPElucHV0Lkdyb3VwPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCAnU3VjaGUgLi4uJ31cbiAgICAgICAgICAgICAgc3VmZml4PXtzdWZmaXh9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNwYW49ezEwfT5cbiAgICAgICAgICAgIHshIXNvcnQgJiZcbiAgICAgICAgICAgICAgISFzb3J0Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb3J0aWVyZW5cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU29ydH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c29ydC5tYXAoKHsgbmFtZSwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e25hbWV9IHZhbHVlPXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L0lucHV0Lkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgICBib3JkZXJCb3R0b206IGJvcmRlcih0aGVtZSwgdGhlbWUuZGFyazUpLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gIH0pLFxuICBwID0+IDxGaWx0ZXJDb21wb25lbnQgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
