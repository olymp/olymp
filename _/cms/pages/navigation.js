'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _faAngleLeft = require('olymp-icons/lib/fa-angle-left');

var _faAngleLeft2 = _interopRequireDefault(_faAngleLeft);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faCubes = require('olymp-icons/lib/fa-cubes');

var _faCubes2 = _interopRequireDefault(_faCubes);

var _faHome = require('olymp-icons/lib/fa-home');

var _faHome2 = _interopRequireDefault(_faHome);

var _faAngleRight = require('olymp-icons/lib/fa-angle-right');

var _faAngleRight2 = _interopRequireDefault(_faAngleRight);

var _olympRouter = require('olymp-router');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dnd = require('olymp-fela/menu/dnd');

var _dnd2 = _interopRequireDefault(_dnd);

var _mutation = require('./gql/mutation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (_ref) {
  var location = _ref.location;
  return {
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    push: (0, _olympRouter.createReplace)(dispatch)
  };
}), _mutation.reorderPage, (0, _recompose.withState)('keys', 'setKeys', []));

var _ref3 = _react2.default.createElement(_faAngleRight2.default, null);

var _ref4 = _react2.default.createElement(_faPlus2.default, null);

var _ref5 = _react2.default.createElement(_faAngleLeft2.default, null);

var _ref6 = _react2.default.createElement(_faPlus2.default, null);

var _ref7 = _react2.default.createElement(_faCubes2.default, null);

var _ref8 = _react2.default.createElement(_faPlus2.default, null);

var _ref9 = _react2.default.createElement(_menu2.default.Space, null);

var PageNavigation = enhance(_class = function (_Component) {
  _inherits(PageNavigation, _Component);

  function PageNavigation() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, PageNavigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = PageNavigation.__proto__ || Object.getPrototypeOf(PageNavigation)).call.apply(_ref2, [this].concat(args))), _this), _this.renderItem = function (item, Icon) {
      var _this$props = _this.props,
          setKeys = _this$props.setKeys,
          keys = _this$props.keys,
          push = _this$props.push,
          pathname = _this$props.pathname;

      var hasChildren = item.children && item.children.length;
      var route = item.pathname && item.type === 'PAGE' && item.slug && item.slug.indexOf('{') === -1 ? item.pathname : '/' + (item.pageId || item.id);
      var Com = Icon ? _menu2.default.Item : _dnd2.default.Item;

      return _react2.default.createElement(
        Com,
        {
          key: item.id,
          active: pathname === route,
          id: item.id,
          icon: Icon ? _react2.default.createElement(Icon, null) : undefined,
          onClick: hasChildren ? function () {
            push({ pathname: route, query: { '@page': null } });
            setKeys([].concat(_toConsumableArray(keys), [item.id]));
          } : function () {
            return push({ pathname: route, query: { '@page': null } });
          },
          extra: hasChildren ? _ref3 : null
        },
        item.name
      );
    }, _this.renderMenu = function (keys) {
      var _this$props2 = _this.props,
          setKeys = _this$props2.setKeys,
          navigation = _this$props2.navigation,
          flatNavigation = _this$props2.flatNavigation,
          push = _this$props2.push,
          id = _this$props2.id,
          title = _this$props2.title,
          description = _this$props2.description,
          setFormOpen = _this$props2.setFormOpen;

      var _reverse = [].concat(_toConsumableArray(keys)).reverse(),
          _reverse2 = _toArray(_reverse),
          lastKey = _reverse2[0],
          rest = _reverse2.slice(1);

      var children = [];
      if (!lastKey) {
        var menues = navigation.filter(function (x) {
          return x.type === 'MENU';
        });
        var pages = navigation.filter(function (x) {
          return x.type !== 'MENU';
        });
        children = [].concat(_toConsumableArray(pages.map(function (x) {
          return _this.renderItem(x, _faHome2.default);
        })), _toConsumableArray(menues.map(function (menu) {
          return _react2.default.createElement(
            _dnd2.default,
            {
              key: menu.id,
              title: menu.name,
              extra: _react2.default.createElement(
                _menu2.default.Extra,
                {
                  onClick: function onClick() {
                    return push({
                      pathname: '__new',
                      query: { '@page': null, '@parent': menu.id }
                    });
                  }
                },
                _ref4
              )
            },
            menu.children.map(function (x) {
              return _this.renderItem(x);
            })
          );
        })));
      } else {
        var item = flatNavigation.find(function (x) {
          return x.id === lastKey;
        });
        var items = flatNavigation.filter(function (x) {
          return x.parentId === lastKey;
        });
        var route = '/' + item.parentId;

        children = [_react2.default.createElement(
          _menu2.default.Item,
          {
            key: 'back',
            icon: _ref5,
            onClick: function onClick() {
              push({ pathname: route, query: { '@page': null } });
              setKeys(rest);
            }
          },
          'Zur\xFCck'
        ), _react2.default.createElement(
          _dnd2.default,
          {
            key: 'pages',
            title: item.name,
            extra: _react2.default.createElement(
              _menu2.default.Extra,
              {
                onClick: function onClick() {
                  return push({
                    pathname: '__new',
                    query: { '@page': null, '@parent': item.id }
                  });
                }
              },
              _ref6
            )
          },
          items.map(function (i) {
            return _this.renderItem(_extends({}, i, {
              children: flatNavigation.filter(function (x) {
                return x.parentId === i.id;
              })
            }));
          })
        )];
      }
      var header = _react2.default.createElement(
        _menu2.default.Item,
        {
          large: true,
          icon: _ref7,
          extra: _react2.default.createElement(
            _menu2.default.Extra,
            {
              onClick: function onClick() {
                setFormOpen(true);
                push({
                  pathname: '__new',
                  query: { '@page': null, '@parentId': id }
                });
              },
              large: true
            },
            _ref8
          )
        },
        title || 'Seitenmanager',
        !!description && _react2.default.createElement(
          'small',
          null,
          description
        )
      );

      return _react2.default.createElement(
        _dnd2.default.Context,
        { onDragEnd: _this.onDragEnd },
        _react2.default.createElement(
          _menu2.default,
          { header: header },
          children,
          _ref9
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageNavigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          keys = _props.keys,
          left = _props.left,
          children = _props.children;

      return _react2.default.createElement(
        _olympFela.Sidebar,
        {
          left: left,
          menu: _react2.default.createElement(_menu.StackedMenu, { keys: keys, renderMenu: this.renderMenu })
        },
        children
      );
    }
  }]);

  return PageNavigation;
}(_react.Component)) || _class;

exports.default = PageNavigation;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9uYXZpZ2F0aW9uLmVzNiJdLCJuYW1lcyI6WyJlbmhhbmNlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInB1c2giLCJkaXNwYXRjaCIsIlBhZ2VOYXZpZ2F0aW9uIiwicmVuZGVySXRlbSIsIml0ZW0iLCJJY29uIiwicHJvcHMiLCJzZXRLZXlzIiwia2V5cyIsImhhc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyb3V0ZSIsInR5cGUiLCJzbHVnIiwiaW5kZXhPZiIsInBhZ2VJZCIsImlkIiwiQ29tIiwiSXRlbSIsInVuZGVmaW5lZCIsInF1ZXJ5IiwibmFtZSIsInJlbmRlck1lbnUiLCJuYXZpZ2F0aW9uIiwiZmxhdE5hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2V0Rm9ybU9wZW4iLCJyZXZlcnNlIiwibGFzdEtleSIsInJlc3QiLCJtZW51ZXMiLCJmaWx0ZXIiLCJ4IiwicGFnZXMiLCJtYXAiLCJtZW51IiwiZmluZCIsIml0ZW1zIiwicGFyZW50SWQiLCJpIiwiaGVhZGVyIiwib25EcmFnRW5kIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSx3QkFDZCx5QkFDRTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQ2pCQyxjQUFVRCxTQUFTQztBQURGLEdBQW5CO0FBQUEsQ0FERixFQUlFO0FBQUEsU0FBYTtBQUNYQyxVQUFNLGdDQUFjQyxRQUFkO0FBREssR0FBYjtBQUFBLENBSkYsQ0FEYyx5QkFVZCwwQkFBVSxNQUFWLEVBQWtCLFNBQWxCLEVBQTZCLEVBQTdCLENBVmMsQ0FBaEI7O1lBeUM2QiwyRDs7WUFxQ2IscUQ7O1lBZ0JBLDBEOztZQW9CRixxRDs7WUFnQkEsc0Q7O1lBWUYscUQ7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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBGYUFuZ2xlTGVmdCxcbiAgRmFQbHVzLFxuICBGYUN1YmVzLFxuICBGYUhvbWUsXG4gIEZhQW5nbGVSaWdodCxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVwbGFjZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSwgeyBTdGFja2VkTWVudSB9IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgRG5kTGlzdCBmcm9tICdvbHltcC1mZWxhL21lbnUvZG5kJztcbmltcG9ydCB7IHJlb3JkZXJQYWdlIH0gZnJvbSAnLi9ncWwvbXV0YXRpb24nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBwdXNoOiBjcmVhdGVSZXBsYWNlKGRpc3BhdGNoKSxcbiAgICB9KSxcbiAgKSxcbiAgcmVvcmRlclBhZ2UsXG4gIHdpdGhTdGF0ZSgna2V5cycsICdzZXRLZXlzJywgW10pLFxuKTtcblxuQGVuaGFuY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySXRlbSA9IChpdGVtLCBJY29uKSA9PiB7XG4gICAgY29uc3QgeyBzZXRLZXlzLCBrZXlzLCBwdXNoLCBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3Qgcm91dGUgPVxuICAgICAgaXRlbS5wYXRobmFtZSAmJlxuICAgICAgaXRlbS50eXBlID09PSAnUEFHRScgJiZcbiAgICAgIGl0ZW0uc2x1ZyAmJlxuICAgICAgaXRlbS5zbHVnLmluZGV4T2YoJ3snKSA9PT0gLTFcbiAgICAgICAgPyBpdGVtLnBhdGhuYW1lXG4gICAgICAgIDogYC8ke2l0ZW0ucGFnZUlkIHx8IGl0ZW0uaWR9YDtcbiAgICBjb25zdCBDb20gPSBJY29uID8gTWVudS5JdGVtIDogRG5kTGlzdC5JdGVtO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21cbiAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICBhY3RpdmU9e3BhdGhuYW1lID09PSByb3V0ZX1cbiAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgIGljb249e0ljb24gPyA8SWNvbiAvPiA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgaGFzQ2hpbGRyZW5cbiAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHB1c2goeyBwYXRobmFtZTogcm91dGUsIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwgfSB9KTtcbiAgICAgICAgICAgICAgICBzZXRLZXlzKFsuLi5rZXlzLCBpdGVtLmlkXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogKCkgPT4gcHVzaCh7IHBhdGhuYW1lOiByb3V0ZSwgcXVlcnk6IHsgJ0BwYWdlJzogbnVsbCB9IH0pXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmE9e2hhc0NoaWxkcmVuID8gPEZhQW5nbGVSaWdodCAvPiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICA8L0NvbT5cbiAgICApO1xuICB9O1xuICByZW5kZXJNZW51ID0ga2V5cyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2V0S2V5cyxcbiAgICAgIG5hdmlnYXRpb24sXG4gICAgICBmbGF0TmF2aWdhdGlvbixcbiAgICAgIHB1c2gsXG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzZXRGb3JtT3BlbixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBbbGFzdEtleSwgLi4ucmVzdF0gPSBbLi4ua2V5c10ucmV2ZXJzZSgpO1xuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmICghbGFzdEtleSkge1xuICAgICAgY29uc3QgbWVudWVzID0gbmF2aWdhdGlvbi5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdNRU5VJyk7XG4gICAgICBjb25zdCBwYWdlcyA9IG5hdmlnYXRpb24uZmlsdGVyKHggPT4geC50eXBlICE9PSAnTUVOVScpO1xuICAgICAgY2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLnBhZ2VzLm1hcCh4ID0+IHRoaXMucmVuZGVySXRlbSh4LCBGYUhvbWUpKSxcbiAgICAgICAgLi4ubWVudWVzLm1hcChtZW51ID0+IChcbiAgICAgICAgICA8RG5kTGlzdFxuICAgICAgICAgICAga2V5PXttZW51LmlkfVxuICAgICAgICAgICAgdGl0bGU9e21lbnUubmFtZX1cbiAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgPE1lbnUuRXh0cmFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnX19uZXcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyAnQHBhZ2UnOiBudWxsLCAnQHBhcmVudCc6IG1lbnUuaWQgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgICA8L01lbnUuRXh0cmE+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnUuY2hpbGRyZW4ubWFwKHggPT4gdGhpcy5yZW5kZXJJdGVtKHgpKX1cbiAgICAgICAgICA8L0RuZExpc3Q+XG4gICAgICAgICkpLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbSA9IGZsYXROYXZpZ2F0aW9uLmZpbmQoeCA9PiB4LmlkID09PSBsYXN0S2V5KTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZmxhdE5hdmlnYXRpb24uZmlsdGVyKHggPT4geC5wYXJlbnRJZCA9PT0gbGFzdEtleSk7XG4gICAgICBjb25zdCByb3V0ZSA9IGAvJHtpdGVtLnBhcmVudElkfWA7XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAga2V5PVwiYmFja1wiXG4gICAgICAgICAgaWNvbj17PEZhQW5nbGVMZWZ0IC8+fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHB1c2goeyBwYXRobmFtZTogcm91dGUsIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwgfSB9KTtcbiAgICAgICAgICAgIHNldEtleXMocmVzdCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFp1csO8Y2tcbiAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICA8RG5kTGlzdFxuICAgICAgICAgIGtleT1cInBhZ2VzXCJcbiAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgIDxNZW51LkV4dHJhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogJ19fbmV3JyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwsICdAcGFyZW50JzogaXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgPC9NZW51LkV4dHJhPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5tYXAoaSA9PlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgLi4uaSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGZsYXROYXZpZ2F0aW9uLmZpbHRlcih4ID0+IHgucGFyZW50SWQgPT09IGkuaWQpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EbmRMaXN0PixcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IChcbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgbGFyZ2VcbiAgICAgICAgaWNvbj17PEZhQ3ViZXMgLz59XG4gICAgICAgIGV4dHJhPXtcbiAgICAgICAgICA8TWVudS5FeHRyYVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGb3JtT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICdfX25ldycsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgJ0BwYWdlJzogbnVsbCwgJ0BwYXJlbnRJZCc6IGlkIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgIDwvTWVudS5FeHRyYT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgfHwgJ1NlaXRlbm1hbmFnZXInfVxuICAgICAgICB7ISFkZXNjcmlwdGlvbiAmJiA8c21hbGw+e2Rlc2NyaXB0aW9ufTwvc21hbGw+fVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RG5kTGlzdC5Db250ZXh0IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8TWVudSBoZWFkZXI9e2hlYWRlcn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxNZW51LlNwYWNlIC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvRG5kTGlzdC5Db250ZXh0PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsga2V5cywgbGVmdCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGxlZnQ9e2xlZnR9XG4gICAgICAgIG1lbnU9ezxTdGFja2VkTWVudSBrZXlzPXtrZXlzfSByZW5kZXJNZW51PXt0aGlzLnJlbmRlck1lbnV9IC8+fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfVxufVxuIl19
