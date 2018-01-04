'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactFela = require('react-fela');

var _faSearch = require('olymp-icons/lib/fa-search');

var _faSearch2 = _interopRequireDefault(_faSearch);

var _faFile = require('olymp-icons/lib/fa-file');

var _faFile2 = _interopRequireDefault(_faFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Menu } from 'semantic-ui-react';


var Input = (0, _reactFela.createComponent)(function (_ref) {
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

var _ref3 = _react2.default.createElement(_faSearch2.default, null);

var _ref4 = _react2.default.createElement(_faFile2.default, null);

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

      return _react2.default.createElement(
        _olympFela.Drawer,
        {
          color: 'white',
          open: open,
          onClose: function onClose() {
            _onClose();
          }
        },
        _react2.default.createElement(
          _menu2.default,
          { color: 'white', collapsed: true, header: header },
          _react2.default.createElement(_menu2.default.Item, { onClick: _onClose, icon: _ref3 })
        ),
        _react2.default.createElement(
          _menu2.default,
          {
            color: 'white',
            header: _react2.default.createElement(Input, {
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
            return _react2.default.createElement(
              _menu2.default.Item,
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
}(_react.Component);

exports.default = SearchDrawer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9zZWFyY2gvZHJhd2VyLmVzNiJdLCJuYW1lcyI6WyJJbnB1dCIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJpbnZlcnRlZCIsImxpZ2h0MiIsImRhcmsyIiwiZm9udFNpemUiLCJvdXRsaW5lIiwiZm9udFN0eWxlIiwid2lkdGgiLCJPYmplY3QiLCJrZXlzIiwicCIsIlNlYXJjaERyYXdlciIsIm9wZW4iLCJwcm9wcyIsImlucHV0IiwiZm9jdXMiLCJvbkNsb3NlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVzdWx0cyIsImhlYWRlciIsIngiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImlkIiwiaWNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBR0EsSUFBTUEsUUFBUSxnQ0FDWjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLHFCQUFpQixhQURIO0FBRWRDLFlBQVEsQ0FGTTtBQUdkQyxXQUFPSCxNQUFNSSxRQUFOLEdBQWlCSixNQUFNSyxNQUF2QixHQUFnQ0wsTUFBTU0sS0FIL0I7QUFJZEMsY0FBVSxPQUpJO0FBS2RDLGFBQVMsQ0FMSztBQU1kQyxlQUFXLFFBTkc7QUFPZEMsV0FBTztBQVBPLEdBQWhCO0FBQUEsQ0FEWSxFQVVaLE9BVlksRUFXWjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FYWSxDQUFkOztZQXVDNkMsdUQ7O1lBaUJaLHFEOztJQTFDWkMsWTs7Ozs7Ozs7Ozs7cURBQ2lCO0FBQUEsVUFBUkMsSUFBUSxTQUFSQSxJQUFROztBQUNsQyxVQUFJQSxRQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXRCxJQUF4QixFQUE4QjtBQUM1QixhQUFLRSxLQUFMLENBQVdDLEtBQVg7QUFDRDtBQUNGOzs7NkJBQ1E7QUFBQTs7QUFBQSxtQkFTSCxLQUFLRixLQVRGO0FBQUEsVUFFTEQsSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFHTEksUUFISyxVQUdMQSxPQUhLO0FBQUEsVUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsVUFLTEMsV0FMSyxVQUtMQSxXQUxLO0FBQUEsVUFNTEMsU0FOSyxVQU1MQSxRQU5LO0FBQUEsa0NBT0xDLE9BUEs7QUFBQSxVQU9MQSxPQVBLLGtDQU9LLEVBUEw7QUFBQSxVQVFMQyxNQVJLLFVBUUxBLE1BUks7O0FBVVAsYUFDRTtBQUFBO0FBQUE7QUFDRSxpQkFBTSxPQURSO0FBRUUsZ0JBQU1ULElBRlI7QUFHRSxtQkFBUyxtQkFBTTtBQUNiSTtBQUNEO0FBTEg7QUFPRTtBQUFBO0FBQUEsWUFBTSxPQUFNLE9BQVosRUFBb0IsZUFBcEIsRUFBOEIsUUFBUUssTUFBdEM7QUFDRSx1REFBTSxJQUFOLElBQVcsU0FBU0wsUUFBcEIsRUFBNkIsV0FBN0I7QUFERixTQVBGO0FBVUU7QUFBQTtBQUFBO0FBQ0UsbUJBQU0sT0FEUjtBQUVFLG9CQUNFLDhCQUFDLEtBQUQ7QUFDRSx3QkFBVTtBQUFBLHVCQUFNLE9BQUtGLEtBQUwsR0FBYVEsQ0FBbkI7QUFBQSxlQURaO0FBRUUsMkJBQWFKLFdBRmY7QUFHRSxxQkFBT0QsS0FIVDtBQUlFLHdCQUFVO0FBQUEsdUJBQUtFLFVBQVNJLEVBQUVDLE1BQUYsQ0FBU1AsS0FBbEIsQ0FBTDtBQUFBO0FBSlo7QUFISjtBQVdHRyxrQkFBUUssR0FBUixDQUFZO0FBQUEsbUJBQ1g7QUFBQSw2QkFBTSxJQUFOO0FBQUE7QUFDRSxxQkFBS0MsS0FBS0MsRUFEWjtBQUVFLHlCQUFTWCxRQUZYO0FBR0Usc0JBQU1VLEtBQUtFLElBQUw7QUFIUjtBQUtHRixtQkFBS0c7QUFMUixhQURXO0FBQUEsV0FBWjtBQVhIO0FBVkYsT0FERjtBQWtDRDs7Ozs7O2tCQWxEa0JsQixZIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbWVudS9zZWFyY2gvZHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuLy8gaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IEZhU2VhcmNoLCBGYUZpbGUgfSBmcm9tICdvbHltcC1pY29ucyc7XG5cbmNvbnN0IElucHV0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgY29sb3I6IHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazIsXG4gICAgZm9udFNpemU6ICcxLjRlbScsXG4gICAgb3V0bGluZTogMCxcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pLFxuICAnaW5wdXQnLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IG9wZW4gfSkge1xuICAgIGlmIChvcGVuICYmICF0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wZW4sXG4gICAgICBvbkNsb3NlLFxuICAgICAgdmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgaGVhZGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TWVudSBjb2xvcj1cIndoaXRlXCIgY29sbGFwc2VkIGhlYWRlcj17aGVhZGVyfT5cbiAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e29uQ2xvc2V9IGljb249ezxGYVNlYXJjaCAvPn0gLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgICA8TWVudVxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaW5uZXJSZWY9e3ggPT4gKHRoaXMuaW5wdXQgPSB4KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbiB8fCA8RmFGaWxlIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvRHJhd2VyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
