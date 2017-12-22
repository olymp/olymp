var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import FaAngleLeft from 'olymp-icons/lib/fa-angle-left';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaCubes from 'olymp-icons/lib/fa-cubes';
import FaHome from 'olymp-icons/lib/fa-home';
import FaAngleRight from 'olymp-icons/lib/fa-angle-right';

import { createReplace } from 'olymp-router';
import { Sidebar } from 'olymp-fela';
import Menu, { StackedMenu } from 'olymp-fela/menu';
import DndList from 'olymp-fela/menu/dnd';
import { reorderPage } from './gql/mutation';

var enhance = compose(connect(function (_ref) {
  var location = _ref.location;
  return {
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    push: createReplace(dispatch)
  };
}), reorderPage, withState('keys', 'setKeys', []));

var _ref3 = React.createElement(FaAngleRight, null);

var _ref4 = React.createElement(FaPlus, null);

var _ref5 = React.createElement(FaAngleLeft, null);

var _ref6 = React.createElement(FaPlus, null);

var _ref7 = React.createElement(FaCubes, null);

var _ref8 = React.createElement(FaPlus, null);

var _ref9 = React.createElement(Menu.Space, null);

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
      var Com = Icon ? Menu.Item : DndList.Item;

      return React.createElement(
        Com,
        {
          key: item.id,
          active: pathname === route,
          id: item.id,
          icon: Icon ? React.createElement(Icon, null) : undefined,
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
          return _this.renderItem(x, FaHome);
        })), _toConsumableArray(menues.map(function (menu) {
          return React.createElement(
            DndList,
            {
              key: menu.id,
              title: menu.name,
              extra: React.createElement(
                Menu.Extra,
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

        children = [React.createElement(
          Menu.Item,
          {
            key: 'back',
            icon: _ref5,
            onClick: function onClick() {
              push({ pathname: route, query: { '@page': null } });
              setKeys(rest);
            }
          },
          'Zur\xFCck'
        ), React.createElement(
          DndList,
          {
            key: 'pages',
            title: item.name,
            extra: React.createElement(
              Menu.Extra,
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
      var header = React.createElement(
        Menu.Item,
        {
          large: true,
          icon: _ref7,
          extra: React.createElement(
            Menu.Extra,
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
        !!description && React.createElement(
          'small',
          null,
          description
        )
      );

      return React.createElement(
        DndList.Context,
        { onDragEnd: _this.onDragEnd },
        React.createElement(
          Menu,
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

      return React.createElement(
        Sidebar,
        {
          left: left,
          menu: React.createElement(StackedMenu, { keys: keys, renderMenu: this.renderMenu })
        },
        children
      );
    }
  }]);

  return PageNavigation;
}(Component)) || _class;

export { PageNavigation as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL25hdmlnYXRpb24uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsImNvbm5lY3QiLCJjcmVhdGVSZXBsYWNlIiwiU2lkZWJhciIsIk1lbnUiLCJTdGFja2VkTWVudSIsIkRuZExpc3QiLCJyZW9yZGVyUGFnZSIsImVuaGFuY2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImRpc3BhdGNoIiwiUGFnZU5hdmlnYXRpb24iLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkljb24iLCJwcm9wcyIsInNldEtleXMiLCJrZXlzIiwiaGFzQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImxlbmd0aCIsInJvdXRlIiwidHlwZSIsInNsdWciLCJpbmRleE9mIiwicGFnZUlkIiwiaWQiLCJDb20iLCJJdGVtIiwidW5kZWZpbmVkIiwicXVlcnkiLCJuYW1lIiwicmVuZGVyTWVudSIsIm5hdmlnYXRpb24iLCJmbGF0TmF2aWdhdGlvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXRGb3JtT3BlbiIsInJldmVyc2UiLCJsYXN0S2V5IiwicmVzdCIsIm1lbnVlcyIsImZpbHRlciIsIngiLCJwYWdlcyIsIm1hcCIsIkZhSG9tZSIsIm1lbnUiLCJmaW5kIiwiaXRlbXMiLCJwYXJlbnRJZCIsImkiLCJoZWFkZXIiLCJvbkRyYWdFbmQiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixRQUFtQyxXQUFuQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7Ozs7Ozs7QUFRQSxTQUFTQyxhQUFULFFBQThCLGNBQTlCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixZQUF4QjtBQUNBLE9BQU9DLElBQVAsSUFBZUMsV0FBZixRQUFrQyxpQkFBbEM7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLHFCQUFwQjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsZ0JBQTVCOztBQUVBLElBQU1DLFVBQVVULFFBQ2RFLFFBQ0U7QUFBQSxNQUFHUSxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUNqQkMsY0FBVUQsU0FBU0M7QUFERixHQUFuQjtBQUFBLENBREYsRUFJRTtBQUFBLFNBQWE7QUFDWEMsVUFBTVQsY0FBY1UsUUFBZDtBQURLLEdBQWI7QUFBQSxDQUpGLENBRGMsRUFTZEwsV0FUYyxFQVVkUCxVQUFVLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkIsRUFBN0IsQ0FWYyxDQUFoQjs7WUF5QzZCLG9CQUFDLFlBQUQsTzs7WUFxQ2Isb0JBQUMsTUFBRCxPOztZQWdCQSxvQkFBQyxXQUFELE87O1lBb0JGLG9CQUFDLE1BQUQsTzs7WUFnQkEsb0JBQUMsT0FBRCxPOztZQVlGLG9CQUFDLE1BQUQsTzs7WUFhRixvQkFBQyxJQUFELENBQU0sS0FBTixPOztJQTdJV2EsYyxHQURwQkwsTzs7Ozs7Ozs7Ozs7Ozs7d01BRUNNLFUsR0FBYSxVQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFBQSx3QkFDZSxNQUFLQyxLQURwQjtBQUFBLFVBQ25CQyxPQURtQixlQUNuQkEsT0FEbUI7QUFBQSxVQUNWQyxJQURVLGVBQ1ZBLElBRFU7QUFBQSxVQUNKUixJQURJLGVBQ0pBLElBREk7QUFBQSxVQUNFRCxRQURGLGVBQ0VBLFFBREY7O0FBRTNCLFVBQU1VLGNBQWNMLEtBQUtNLFFBQUwsSUFBaUJOLEtBQUtNLFFBQUwsQ0FBY0MsTUFBbkQ7QUFDQSxVQUFNQyxRQUNKUixLQUFLTCxRQUFMLElBQ0FLLEtBQUtTLElBQUwsS0FBYyxNQURkLElBRUFULEtBQUtVLElBRkwsSUFHQVYsS0FBS1UsSUFBTCxDQUFVQyxPQUFWLENBQWtCLEdBQWxCLE1BQTJCLENBQUMsQ0FINUIsR0FJSVgsS0FBS0wsUUFKVCxVQUtRSyxLQUFLWSxNQUFMLElBQWVaLEtBQUthLEVBTDVCLENBREY7QUFPQSxVQUFNQyxNQUFNYixPQUFPWixLQUFLMEIsSUFBWixHQUFtQnhCLFFBQVF3QixJQUF2Qzs7QUFFQSxhQUNFO0FBQUMsV0FBRDtBQUFBO0FBQ0UsZUFBS2YsS0FBS2EsRUFEWjtBQUVFLGtCQUFRbEIsYUFBYWEsS0FGdkI7QUFHRSxjQUFJUixLQUFLYSxFQUhYO0FBSUUsZ0JBQU1aLE9BQU8sb0JBQUMsSUFBRCxPQUFQLEdBQWtCZSxTQUoxQjtBQUtFLG1CQUNFWCxjQUNJLFlBQU07QUFDSlQsaUJBQUssRUFBRUQsVUFBVWEsS0FBWixFQUFtQlMsT0FBTyxFQUFFLFNBQVMsSUFBWCxFQUExQixFQUFMO0FBQ0FkLGlEQUFZQyxJQUFaLElBQWtCSixLQUFLYSxFQUF2QjtBQUNELFdBSkwsR0FLSTtBQUFBLG1CQUFNakIsS0FBSyxFQUFFRCxVQUFVYSxLQUFaLEVBQW1CUyxPQUFPLEVBQUUsU0FBUyxJQUFYLEVBQTFCLEVBQUwsQ0FBTjtBQUFBLFdBWFI7QUFhRSxpQkFBT1osc0JBQWlDO0FBYjFDO0FBZUdMLGFBQUtrQjtBQWZSLE9BREY7QUFtQkQsSyxRQUNEQyxVLEdBQWEsZ0JBQVE7QUFBQSx5QkFVZixNQUFLakIsS0FWVTtBQUFBLFVBRWpCQyxPQUZpQixnQkFFakJBLE9BRmlCO0FBQUEsVUFHakJpQixVQUhpQixnQkFHakJBLFVBSGlCO0FBQUEsVUFJakJDLGNBSmlCLGdCQUlqQkEsY0FKaUI7QUFBQSxVQUtqQnpCLElBTGlCLGdCQUtqQkEsSUFMaUI7QUFBQSxVQU1qQmlCLEVBTmlCLGdCQU1qQkEsRUFOaUI7QUFBQSxVQU9qQlMsS0FQaUIsZ0JBT2pCQSxLQVBpQjtBQUFBLFVBUWpCQyxXQVJpQixnQkFRakJBLFdBUmlCO0FBQUEsVUFTakJDLFdBVGlCLGdCQVNqQkEsV0FUaUI7O0FBQUEscUJBV1EsNkJBQUlwQixJQUFKLEdBQVVxQixPQUFWLEVBWFI7QUFBQTtBQUFBLFVBV1pDLE9BWFk7QUFBQSxVQVdBQyxJQVhBOztBQVluQixVQUFJckIsV0FBVyxFQUFmO0FBQ0EsVUFBSSxDQUFDb0IsT0FBTCxFQUFjO0FBQ1osWUFBTUUsU0FBU1IsV0FBV1MsTUFBWCxDQUFrQjtBQUFBLGlCQUFLQyxFQUFFckIsSUFBRixLQUFXLE1BQWhCO0FBQUEsU0FBbEIsQ0FBZjtBQUNBLFlBQU1zQixRQUFRWCxXQUFXUyxNQUFYLENBQWtCO0FBQUEsaUJBQUtDLEVBQUVyQixJQUFGLEtBQVcsTUFBaEI7QUFBQSxTQUFsQixDQUFkO0FBQ0FILGdEQUNLeUIsTUFBTUMsR0FBTixDQUFVO0FBQUEsaUJBQUssTUFBS2pDLFVBQUwsQ0FBZ0IrQixDQUFoQixFQUFtQkcsTUFBbkIsQ0FBTDtBQUFBLFNBQVYsQ0FETCxzQkFFS0wsT0FBT0ksR0FBUCxDQUFXO0FBQUEsaUJBQ1o7QUFBQyxtQkFBRDtBQUFBO0FBQ0UsbUJBQUtFLEtBQUtyQixFQURaO0FBRUUscUJBQU9xQixLQUFLaEIsSUFGZDtBQUdFLHFCQUNFO0FBQUMsb0JBQUQsQ0FBTSxLQUFOO0FBQUE7QUFDRSwyQkFBUztBQUFBLDJCQUNQdEIsS0FBSztBQUNIRCxnQ0FBVSxPQURQO0FBRUhzQiw2QkFBTyxFQUFFLFNBQVMsSUFBWCxFQUFpQixXQUFXaUIsS0FBS3JCLEVBQWpDO0FBRkoscUJBQUwsQ0FETztBQUFBO0FBRFg7QUFBQTtBQUFBO0FBSko7QUFnQkdxQixpQkFBSzVCLFFBQUwsQ0FBYzBCLEdBQWQsQ0FBa0I7QUFBQSxxQkFBSyxNQUFLakMsVUFBTCxDQUFnQitCLENBQWhCLENBQUw7QUFBQSxhQUFsQjtBQWhCSCxXQURZO0FBQUEsU0FBWCxDQUZMO0FBdUJELE9BMUJELE1BMEJPO0FBQ0wsWUFBTTlCLE9BQU9xQixlQUFlYyxJQUFmLENBQW9CO0FBQUEsaUJBQUtMLEVBQUVqQixFQUFGLEtBQVNhLE9BQWQ7QUFBQSxTQUFwQixDQUFiO0FBQ0EsWUFBTVUsUUFBUWYsZUFBZVEsTUFBZixDQUFzQjtBQUFBLGlCQUFLQyxFQUFFTyxRQUFGLEtBQWVYLE9BQXBCO0FBQUEsU0FBdEIsQ0FBZDtBQUNBLFlBQU1sQixjQUFZUixLQUFLcUMsUUFBdkI7O0FBRUEvQixtQkFBVyxDQUNUO0FBQUMsY0FBRCxDQUFNLElBQU47QUFBQTtBQUNFLGlCQUFJLE1BRE47QUFFRSx1QkFGRjtBQUdFLHFCQUFTLG1CQUFNO0FBQ2JWLG1CQUFLLEVBQUVELFVBQVVhLEtBQVosRUFBbUJTLE9BQU8sRUFBRSxTQUFTLElBQVgsRUFBMUIsRUFBTDtBQUNBZCxzQkFBUXdCLElBQVI7QUFDRDtBQU5IO0FBQUE7QUFBQSxTQURTLEVBV1Q7QUFBQyxpQkFBRDtBQUFBO0FBQ0UsaUJBQUksT0FETjtBQUVFLG1CQUFPM0IsS0FBS2tCLElBRmQ7QUFHRSxtQkFDRTtBQUFDLGtCQUFELENBQU0sS0FBTjtBQUFBO0FBQ0UseUJBQVM7QUFBQSx5QkFDUHRCLEtBQUs7QUFDSEQsOEJBQVUsT0FEUDtBQUVIc0IsMkJBQU8sRUFBRSxTQUFTLElBQVgsRUFBaUIsV0FBV2pCLEtBQUthLEVBQWpDO0FBRkosbUJBQUwsQ0FETztBQUFBO0FBRFg7QUFBQTtBQUFBO0FBSko7QUFnQkd1QixnQkFBTUosR0FBTixDQUFVO0FBQUEsbUJBQ1QsTUFBS2pDLFVBQUwsY0FDS3VDLENBREw7QUFFRWhDLHdCQUFVZSxlQUFlUSxNQUFmLENBQXNCO0FBQUEsdUJBQUtDLEVBQUVPLFFBQUYsS0FBZUMsRUFBRXpCLEVBQXRCO0FBQUEsZUFBdEI7QUFGWixlQURTO0FBQUEsV0FBVjtBQWhCSCxTQVhTLENBQVg7QUFtQ0Q7QUFDRCxVQUFNMEIsU0FDSjtBQUFDLFlBQUQsQ0FBTSxJQUFOO0FBQUE7QUFDRSxxQkFERjtBQUVFLHFCQUZGO0FBR0UsaUJBQ0U7QUFBQyxnQkFBRCxDQUFNLEtBQU47QUFBQTtBQUNFLHVCQUFTLG1CQUFNO0FBQ2JmLDRCQUFZLElBQVo7QUFDQTVCLHFCQUFLO0FBQ0hELDRCQUFVLE9BRFA7QUFFSHNCLHlCQUFPLEVBQUUsU0FBUyxJQUFYLEVBQWlCLGFBQWFKLEVBQTlCO0FBRkosaUJBQUw7QUFJRCxlQVBIO0FBUUU7QUFSRjtBQUFBO0FBQUE7QUFKSjtBQWtCR1MsaUJBQVMsZUFsQlo7QUFtQkcsU0FBQyxDQUFDQyxXQUFGLElBQWlCO0FBQUE7QUFBQTtBQUFRQTtBQUFSO0FBbkJwQixPQURGOztBQXdCQSxhQUNFO0FBQUMsZUFBRCxDQUFTLE9BQVQ7QUFBQSxVQUFpQixXQUFXLE1BQUtpQixTQUFqQztBQUNFO0FBQUMsY0FBRDtBQUFBLFlBQU0sUUFBUUQsTUFBZDtBQUNHakMsa0JBREg7QUFBQTtBQUFBO0FBREYsT0FERjtBQVFELEs7Ozs7OzZCQUVRO0FBQUEsbUJBQzBCLEtBQUtKLEtBRC9CO0FBQUEsVUFDQ0UsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT3FDLElBRFAsVUFDT0EsSUFEUDtBQUFBLFVBQ2FuQyxRQURiLFVBQ2FBLFFBRGI7O0FBRVAsYUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLGdCQUFNbUMsSUFEUjtBQUVFLGdCQUFNLG9CQUFDLFdBQUQsSUFBYSxNQUFNckMsSUFBbkIsRUFBeUIsWUFBWSxLQUFLZSxVQUExQztBQUZSO0FBSUdiO0FBSkgsT0FERjtBQVFEOzs7O0VBN0p5Q3ZCLFM7O1NBQXZCZSxjIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBGYUFuZ2xlTGVmdCxcbiAgRmFQbHVzLFxuICBGYUN1YmVzLFxuICBGYUhvbWUsXG4gIEZhQW5nbGVSaWdodCxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVwbGFjZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSwgeyBTdGFja2VkTWVudSB9IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgRG5kTGlzdCBmcm9tICdvbHltcC1mZWxhL21lbnUvZG5kJztcbmltcG9ydCB7IHJlb3JkZXJQYWdlIH0gZnJvbSAnLi9ncWwvbXV0YXRpb24nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBwdXNoOiBjcmVhdGVSZXBsYWNlKGRpc3BhdGNoKSxcbiAgICB9KSxcbiAgKSxcbiAgcmVvcmRlclBhZ2UsXG4gIHdpdGhTdGF0ZSgna2V5cycsICdzZXRLZXlzJywgW10pLFxuKTtcblxuQGVuaGFuY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySXRlbSA9IChpdGVtLCBJY29uKSA9PiB7XG4gICAgY29uc3QgeyBzZXRLZXlzLCBrZXlzLCBwdXNoLCBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3Qgcm91dGUgPVxuICAgICAgaXRlbS5wYXRobmFtZSAmJlxuICAgICAgaXRlbS50eXBlID09PSAnUEFHRScgJiZcbiAgICAgIGl0ZW0uc2x1ZyAmJlxuICAgICAgaXRlbS5zbHVnLmluZGV4T2YoJ3snKSA9PT0gLTFcbiAgICAgICAgPyBpdGVtLnBhdGhuYW1lXG4gICAgICAgIDogYC8ke2l0ZW0ucGFnZUlkIHx8IGl0ZW0uaWR9YDtcbiAgICBjb25zdCBDb20gPSBJY29uID8gTWVudS5JdGVtIDogRG5kTGlzdC5JdGVtO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21cbiAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICBhY3RpdmU9e3BhdGhuYW1lID09PSByb3V0ZX1cbiAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgIGljb249e0ljb24gPyA8SWNvbiAvPiA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgaGFzQ2hpbGRyZW5cbiAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHB1c2goeyBwYXRobmFtZTogcm91dGUsIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwgfSB9KTtcbiAgICAgICAgICAgICAgICBzZXRLZXlzKFsuLi5rZXlzLCBpdGVtLmlkXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogKCkgPT4gcHVzaCh7IHBhdGhuYW1lOiByb3V0ZSwgcXVlcnk6IHsgJ0BwYWdlJzogbnVsbCB9IH0pXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmE9e2hhc0NoaWxkcmVuID8gPEZhQW5nbGVSaWdodCAvPiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICA8L0NvbT5cbiAgICApO1xuICB9O1xuICByZW5kZXJNZW51ID0ga2V5cyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2V0S2V5cyxcbiAgICAgIG5hdmlnYXRpb24sXG4gICAgICBmbGF0TmF2aWdhdGlvbixcbiAgICAgIHB1c2gsXG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzZXRGb3JtT3BlbixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBbbGFzdEtleSwgLi4ucmVzdF0gPSBbLi4ua2V5c10ucmV2ZXJzZSgpO1xuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmICghbGFzdEtleSkge1xuICAgICAgY29uc3QgbWVudWVzID0gbmF2aWdhdGlvbi5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdNRU5VJyk7XG4gICAgICBjb25zdCBwYWdlcyA9IG5hdmlnYXRpb24uZmlsdGVyKHggPT4geC50eXBlICE9PSAnTUVOVScpO1xuICAgICAgY2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLnBhZ2VzLm1hcCh4ID0+IHRoaXMucmVuZGVySXRlbSh4LCBGYUhvbWUpKSxcbiAgICAgICAgLi4ubWVudWVzLm1hcChtZW51ID0+IChcbiAgICAgICAgICA8RG5kTGlzdFxuICAgICAgICAgICAga2V5PXttZW51LmlkfVxuICAgICAgICAgICAgdGl0bGU9e21lbnUubmFtZX1cbiAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgPE1lbnUuRXh0cmFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnX19uZXcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyAnQHBhZ2UnOiBudWxsLCAnQHBhcmVudCc6IG1lbnUuaWQgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgICA8L01lbnUuRXh0cmE+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnUuY2hpbGRyZW4ubWFwKHggPT4gdGhpcy5yZW5kZXJJdGVtKHgpKX1cbiAgICAgICAgICA8L0RuZExpc3Q+XG4gICAgICAgICkpLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbSA9IGZsYXROYXZpZ2F0aW9uLmZpbmQoeCA9PiB4LmlkID09PSBsYXN0S2V5KTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZmxhdE5hdmlnYXRpb24uZmlsdGVyKHggPT4geC5wYXJlbnRJZCA9PT0gbGFzdEtleSk7XG4gICAgICBjb25zdCByb3V0ZSA9IGAvJHtpdGVtLnBhcmVudElkfWA7XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAga2V5PVwiYmFja1wiXG4gICAgICAgICAgaWNvbj17PEZhQW5nbGVMZWZ0IC8+fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHB1c2goeyBwYXRobmFtZTogcm91dGUsIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwgfSB9KTtcbiAgICAgICAgICAgIHNldEtleXMocmVzdCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFp1csO8Y2tcbiAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICA8RG5kTGlzdFxuICAgICAgICAgIGtleT1cInBhZ2VzXCJcbiAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgIDxNZW51LkV4dHJhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogJ19fbmV3JyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwsICdAcGFyZW50JzogaXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgPC9NZW51LkV4dHJhPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5tYXAoaSA9PlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgLi4uaSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGZsYXROYXZpZ2F0aW9uLmZpbHRlcih4ID0+IHgucGFyZW50SWQgPT09IGkuaWQpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EbmRMaXN0PixcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IChcbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgbGFyZ2VcbiAgICAgICAgaWNvbj17PEZhQ3ViZXMgLz59XG4gICAgICAgIGV4dHJhPXtcbiAgICAgICAgICA8TWVudS5FeHRyYVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGb3JtT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgcHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICdfX25ldycsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgJ0BwYWdlJzogbnVsbCwgJ0BwYXJlbnRJZCc6IGlkIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgIDwvTWVudS5FeHRyYT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgfHwgJ1NlaXRlbm1hbmFnZXInfVxuICAgICAgICB7ISFkZXNjcmlwdGlvbiAmJiA8c21hbGw+e2Rlc2NyaXB0aW9ufTwvc21hbGw+fVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RG5kTGlzdC5Db250ZXh0IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8TWVudSBoZWFkZXI9e2hlYWRlcn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxNZW51LlNwYWNlIC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvRG5kTGlzdC5Db250ZXh0PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsga2V5cywgbGVmdCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGxlZnQ9e2xlZnR9XG4gICAgICAgIG1lbnU9ezxTdGFja2VkTWVudSBrZXlzPXtrZXlzfSByZW5kZXJNZW51PXt0aGlzLnJlbmRlck1lbnV9IC8+fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfVxufVxuIl19
