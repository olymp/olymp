var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import { createComponent } from 'react-fela';
// import { Menu } from 'semantic-ui-react';
import FaSearch from 'olymp-icons/lib/fa-search';
import FaFile from 'olymp-icons/lib/fa-file';


var Input = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    backgroundColor: 'transparent',
    border: 0,
    color: theme.inverted ? theme.light2 : theme.dark2,
    fontSize: '1.4em',
    outline: 0,
    fontStyle: 'italic',
    width: '100%'
  };
}, 'input', function (p) {
  return Object.keys(p);
});

var _ref3 = React.createElement(FaSearch, null);

var _ref4 = React.createElement(FaFile, null);

var SearchDrawer = function (_Component) {
  _inherits(SearchDrawer, _Component);

  function SearchDrawer() {
    _classCallCheck(this, SearchDrawer);

    return _possibleConstructorReturn(this, (SearchDrawer.__proto__ || Object.getPrototypeOf(SearchDrawer)).apply(this, arguments));
  }

  _createClass(SearchDrawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var open = _ref2.open;

      if (open && !this.props.open) {
        this.input.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          _onClose = _props.onClose,
          value = _props.value,
          placeholder = _props.placeholder,
          _onChange = _props.onChange,
          _props$results = _props.results,
          results = _props$results === undefined ? [] : _props$results,
          header = _props.header;

      return React.createElement(
        Drawer,
        {
          color: 'white',
          open: open,
          onClose: function onClose() {
            _onClose();
          }
        },
        React.createElement(
          Menu,
          { color: 'white', collapsed: true, header: header },
          React.createElement(Menu.Item, { onClick: _onClose, icon: _ref3 })
        ),
        React.createElement(
          Menu,
          {
            color: 'white',
            header: React.createElement(Input, {
              innerRef: function innerRef(x) {
                return _this2.input = x;
              },
              placeholder: placeholder,
              value: value,
              onChange: function onChange(e) {
                return _onChange(e.target.value);
              }
            })
          },
          results.map(function (item) {
            return React.createElement(
              Menu.Item,
              {
                key: item.id,
                onClick: _onClose,
                icon: item.icon || _ref4
              },
              item.name
            );
          })
        )
      );
    }
  }]);

  return SearchDrawer;
}(Component);

export { SearchDrawer as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9zZWFyY2gvZHJhd2VyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkRyYXdlciIsIk1lbnUiLCJjcmVhdGVDb21wb25lbnQiLCJJbnB1dCIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJpbnZlcnRlZCIsImxpZ2h0MiIsImRhcmsyIiwiZm9udFNpemUiLCJvdXRsaW5lIiwiZm9udFN0eWxlIiwid2lkdGgiLCJPYmplY3QiLCJrZXlzIiwicCIsIlNlYXJjaERyYXdlciIsIm9wZW4iLCJwcm9wcyIsImlucHV0IiwiZm9jdXMiLCJvbkNsb3NlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVzdWx0cyIsImhlYWRlciIsIngiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImlkIiwiaWNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFlBQXZCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixpQkFBakI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0E7Ozs7O0FBR0EsSUFBTUMsUUFBUUQsZ0JBQ1o7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxxQkFBaUIsYUFESDtBQUVkQyxZQUFRLENBRk07QUFHZEMsV0FBT0gsTUFBTUksUUFBTixHQUFpQkosTUFBTUssTUFBdkIsR0FBZ0NMLE1BQU1NLEtBSC9CO0FBSWRDLGNBQVUsT0FKSTtBQUtkQyxhQUFTLENBTEs7QUFNZEMsZUFBVyxRQU5HO0FBT2RDLFdBQU87QUFQTyxHQUFoQjtBQUFBLENBRFksRUFVWixPQVZZLEVBV1o7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBWFksQ0FBZDs7WUF1QzZDLG9CQUFDLFFBQUQsTzs7WUFpQlosb0JBQUMsTUFBRCxPOztJQTFDWkMsWTs7Ozs7Ozs7Ozs7cURBQ2lCO0FBQUEsVUFBUkMsSUFBUSxTQUFSQSxJQUFROztBQUNsQyxVQUFJQSxRQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXRCxJQUF4QixFQUE4QjtBQUM1QixhQUFLRSxLQUFMLENBQVdDLEtBQVg7QUFDRDtBQUNGOzs7NkJBQ1E7QUFBQTs7QUFBQSxtQkFTSCxLQUFLRixLQVRGO0FBQUEsVUFFTEQsSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFHTEksUUFISyxVQUdMQSxPQUhLO0FBQUEsVUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsVUFLTEMsV0FMSyxVQUtMQSxXQUxLO0FBQUEsVUFNTEMsU0FOSyxVQU1MQSxRQU5LO0FBQUEsa0NBT0xDLE9BUEs7QUFBQSxVQU9MQSxPQVBLLGtDQU9LLEVBUEw7QUFBQSxVQVFMQyxNQVJLLFVBUUxBLE1BUks7O0FBVVAsYUFDRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLGlCQUFNLE9BRFI7QUFFRSxnQkFBTVQsSUFGUjtBQUdFLG1CQUFTLG1CQUFNO0FBQ2JJO0FBQ0Q7QUFMSDtBQU9FO0FBQUMsY0FBRDtBQUFBLFlBQU0sT0FBTSxPQUFaLEVBQW9CLGVBQXBCLEVBQThCLFFBQVFLLE1BQXRDO0FBQ0UsOEJBQUMsSUFBRCxDQUFNLElBQU4sSUFBVyxTQUFTTCxRQUFwQixFQUE2QixXQUE3QjtBQURGLFNBUEY7QUFVRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLG1CQUFNLE9BRFI7QUFFRSxvQkFDRSxvQkFBQyxLQUFEO0FBQ0Usd0JBQVU7QUFBQSx1QkFBTSxPQUFLRixLQUFMLEdBQWFRLENBQW5CO0FBQUEsZUFEWjtBQUVFLDJCQUFhSixXQUZmO0FBR0UscUJBQU9ELEtBSFQ7QUFJRSx3QkFBVTtBQUFBLHVCQUFLRSxVQUFTSSxFQUFFQyxNQUFGLENBQVNQLEtBQWxCLENBQUw7QUFBQTtBQUpaO0FBSEo7QUFXR0csa0JBQVFLLEdBQVIsQ0FBWTtBQUFBLG1CQUNYO0FBQUMsa0JBQUQsQ0FBTSxJQUFOO0FBQUE7QUFDRSxxQkFBS0MsS0FBS0MsRUFEWjtBQUVFLHlCQUFTWCxRQUZYO0FBR0Usc0JBQU1VLEtBQUtFLElBQUw7QUFIUjtBQUtHRixtQkFBS0c7QUFMUixhQURXO0FBQUEsV0FBWjtBQVhIO0FBVkYsT0FERjtBQWtDRDs7OztFQWxEdUNyQyxTOztTQUFyQm1CLFkiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L3NlYXJjaC9kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG4vLyBpbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgRmFTZWFyY2gsIEZhRmlsZSB9IGZyb20gJ29seW1wLWljb25zJztcblxuY29uc3QgSW5wdXQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGJvcmRlcjogMCxcbiAgICBjb2xvcjogdGhlbWUuaW52ZXJ0ZWQgPyB0aGVtZS5saWdodDIgOiB0aGVtZS5kYXJrMixcbiAgICBmb250U2l6ZTogJzEuNGVtJyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gICdpbnB1dCcsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hEcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgb3BlbiB9KSB7XG4gICAgaWYgKG9wZW4gJiYgIXRoaXMucHJvcHMub3Blbikge1xuICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3BlbixcbiAgICAgIG9uQ2xvc2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICByZXN1bHRzID0gW10sXG4gICAgICBoZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51IGNvbG9yPVwid2hpdGVcIiBjb2xsYXBzZWQgaGVhZGVyPXtoZWFkZXJ9PlxuICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25DbG9zZX0gaWNvbj17PEZhU2VhcmNoIC8+fSAvPlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpbm5lclJlZj17eCA9PiAodGhpcy5pbnB1dCA9IHgpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29uIHx8IDxGYUZpbGUgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgKTtcbiAgfVxufVxuIl19
