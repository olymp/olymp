import 'antd/lib/input/style';
import _Input2 from 'antd/lib/input';
import 'antd/lib/col/style';
import _Col2 from 'antd/lib/col';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _debounce from 'lodash/debounce';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent, border } from 'olymp-fela';

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
    _this.changed = _debounce(_this.props.onChange, 300);
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

      var suffix = value ? React.createElement(_Icon, {
        type: 'close-circle',
        onClick: function onClick() {
          return _this2.handleChange({ target: { value: null } });
        }
      }) : null;

      return React.createElement(
        'div',
        { className: className },
        children,
        React.createElement(
          _Input2.Group,
          null,
          React.createElement(
            _Col,
            { span: 14 },
            React.createElement(_Input, {
              placeholder: placeholder || 'Suche ...',
              suffix: suffix,
              value: value,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            _Col2,
            { span: 10 },
            !!sort && !!sort.length && React.createElement(
              _Select2,
              {
                placeholder: 'Sortieren',
                onChange: onSort,
                style: { width: '100%' }
              },
              sort.map(function (_ref2) {
                var name = _ref2.name,
                    label = _ref2.label;
                return React.createElement(
                  _Select.Option,
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
}(Component);

export default createComponent(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.space2,
    borderBottom: border(theme, theme.dark5),
    backgroundColor: theme.dark5
  };
}, function (p) {
  return React.createElement(FilterComponent, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2xpc3QvZmlsdGVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUNvbXBvbmVudCIsImJvcmRlciIsIkZpbHRlckNvbXBvbmVudCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJjaGFuZ2VkIiwic3RhdGUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGxhY2Vob2xkZXIiLCJzb3J0Iiwib25Tb3J0Iiwic3VmZml4IiwibGVuZ3RoIiwid2lkdGgiLCJtYXAiLCJuYW1lIiwibGFiZWwiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjZTIiLCJib3JkZXJCb3R0b20iLCJkYXJrNSIsImJhY2tncm91bmRDb2xvciIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLE1BQTFCLFFBQXdDLFlBQXhDOztJQUlNQyxlOzs7QUFDSiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNYQSxLQURXOztBQUFBLFVBZW5CQyxZQWZtQixHQWVKLGFBQUs7QUFDbEI7QUFDQTtBQUNBLFVBQU1DLE1BQU1DLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUQsT0FBT0gsR0FBVCxFQUFkLEVBQThCLFlBQU07QUFDbEMsY0FBS0ssT0FBTCxDQUFhTCxHQUFiO0FBQ0QsT0FGRDtBQUdELEtBdEJrQjs7QUFFakIsVUFBS00sS0FBTCxHQUFhO0FBQ1hILGFBQU9MLE1BQU1LO0FBREYsS0FBYjtBQUdBO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLFVBQVMsTUFBS1AsS0FBTCxDQUFXUyxRQUFwQixFQUE4QixHQUE5QixDQUFmO0FBTmlCO0FBT2xCOzs7O29EQUVvQztBQUFBLFVBQVRKLEtBQVMsUUFBVEEsS0FBUzs7QUFDbkMsVUFBSUEsVUFBVSxLQUFLRyxLQUFMLENBQVdILEtBQXpCLEVBQWdDO0FBQzlCLGFBQUtDLFFBQUwsQ0FBYyxFQUFFRCxZQUFGLEVBQWQ7QUFDRDtBQUNGOzs7NkJBV1E7QUFBQTs7QUFBQSxtQkFDb0QsS0FBS0wsS0FEekQ7QUFBQSxVQUNDVSxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxRQURaLFVBQ1lBLFFBRFo7QUFBQSxVQUNzQkMsV0FEdEIsVUFDc0JBLFdBRHRCO0FBQUEsVUFDbUNDLElBRG5DLFVBQ21DQSxJQURuQztBQUFBLFVBQ3lDQyxNQUR6QyxVQUN5Q0EsTUFEekM7QUFBQSxVQUVDVCxLQUZELEdBRVcsS0FBS0csS0FGaEIsQ0FFQ0gsS0FGRDs7QUFHUCxVQUFNVSxTQUFTVixRQUNiO0FBQ0UsY0FBSyxjQURQO0FBRUUsaUJBQVM7QUFBQSxpQkFBTSxPQUFLSixZQUFMLENBQWtCLEVBQUVHLFFBQVEsRUFBRUMsT0FBTyxJQUFULEVBQVYsRUFBbEIsQ0FBTjtBQUFBO0FBRlgsUUFEYSxHQUtYLElBTEo7O0FBT0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXSyxTQUFoQjtBQUNHQyxnQkFESDtBQUVFO0FBQUEsa0JBQU8sS0FBUDtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssTUFBTSxFQUFYO0FBQ0U7QUFDRSwyQkFBYUMsZUFBZSxXQUQ5QjtBQUVFLHNCQUFRRyxNQUZWO0FBR0UscUJBQU9WLEtBSFQ7QUFJRSx3QkFBVSxLQUFLSjtBQUpqQjtBQURGLFdBREY7QUFTRTtBQUFBO0FBQUEsY0FBSyxNQUFNLEVBQVg7QUFDRyxhQUFDLENBQUNZLElBQUYsSUFDQyxDQUFDLENBQUNBLEtBQUtHLE1BRFIsSUFFRztBQUFBO0FBQUE7QUFDRSw2QkFBWSxXQURkO0FBRUUsMEJBQVVGLE1BRlo7QUFHRSx1QkFBTyxFQUFFRyxPQUFPLE1BQVQ7QUFIVDtBQUtHSixtQkFBS0ssR0FBTCxDQUFTO0FBQUEsb0JBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLG9CQUFTQyxLQUFULFNBQVNBLEtBQVQ7QUFBQSx1QkFDUjtBQUFBLDBCQUFRLE1BQVI7QUFBQSxvQkFBZSxLQUFLRCxJQUFwQixFQUEwQixPQUFPQSxJQUFqQztBQUNHQztBQURILGlCQURRO0FBQUEsZUFBVDtBQUxIO0FBSE47QUFURjtBQUZGLE9BREY7QUErQkQ7Ozs7RUFsRTJCeEIsUzs7QUFvRTlCLGVBQWVDLGdCQUNiO0FBQUEsTUFBR3dCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGFBQVNELE1BQU1FLE1BREQ7QUFFZEMsa0JBQWMxQixPQUFPdUIsS0FBUCxFQUFjQSxNQUFNSSxLQUFwQixDQUZBO0FBR2RDLHFCQUFpQkwsTUFBTUk7QUFIVCxHQUFoQjtBQUFBLENBRGEsRUFNYjtBQUFBLFNBQUssb0JBQUMsZUFBRCxFQUFxQkUsQ0FBckIsQ0FBTDtBQUFBLENBTmEsRUFPYjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FQYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3VpL2xpc3QvZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgYm9yZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJbnB1dCwgSWNvbiwgU2VsZWN0LCBDb2wgfSBmcm9tICdhbnRkJztcblxuY2xhc3MgRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICB9O1xuICAgIC8vIGRlYm91bmNlIHRoZSBwYXNzZWQgaW4gZGlzcGF0Y2ggbWV0aG9kXG4gICAgdGhpcy5jaGFuZ2VkID0gZGVib3VuY2UodGhpcy5wcm9wcy5vbkNoYW5nZSwgMzAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyB2YWx1ZSB9KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgLy8gUmVhY3QgZXZlbnQgd2VpcmRuZXNzIHJlcXVpcmVzIHN0b3JpbmdcbiAgICAvLyB0aGUgc3ludGhldGljIGV2ZW50XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkKHZhbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGxhY2Vob2xkZXIsIHNvcnQsIG9uU29ydCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN1ZmZpeCA9IHZhbHVlID8gKFxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImNsb3NlLWNpcmNsZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOiBudWxsIH0gfSl9XG4gICAgICAvPlxuICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJbnB1dC5Hcm91cD5cbiAgICAgICAgICA8Q29sIHNwYW49ezE0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgJ1N1Y2hlIC4uLid9XG4gICAgICAgICAgICAgIHN1ZmZpeD17c3VmZml4fVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBzcGFuPXsxMH0+XG4gICAgICAgICAgICB7ISFzb3J0ICYmXG4gICAgICAgICAgICAgICEhc29ydC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29ydGllcmVuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNvcnR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NvcnQubWFwKCh7IG5hbWUsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9JbnB1dC5Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTIsXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXIodGhlbWUsIHRoZW1lLmRhcms1KSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICB9KSxcbiAgcCA9PiA8RmlsdGVyQ29tcG9uZW50IHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
