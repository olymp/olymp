import _sortBy from 'lodash/sortBy';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component } from 'react';
import { withLang } from 'olymp-utils';
import FaExpand from 'olymp-icons/lib/fa-expand';
import FaCode from 'olymp-icons/lib/fa-code';
import FaCompress from 'olymp-icons/lib/fa-compress';
import FaCube from 'olymp-icons/lib/fa-cube';

import { createReplaceQuery } from 'olymp-router';
import Menu from 'olymp-fela/menu';
import { Drawer } from 'olymp-fela';
import { compose, withState, withHandlers, withPropsOnChange } from 'recompose';

import { connect } from 'react-redux';
import getSchema from './get-schema';

var enhance = compose(withState('collapsed', 'setCollapsed', true), withHandlers({
  expand: function expand(_ref) {
    var setCollapsed = _ref.setCollapsed;
    return function () {
      return setCollapsed(false);
    };
  },
  collapse: function collapse(_ref2) {
    var setCollapsed = _ref2.setCollapsed;
    return function () {
      return setCollapsed(true);
    };
  }
}));

var dragStart = function dragStart(type) {
  return function (ev) {
    ev.dataTransfer.setData('text', 'x-slate:' + type);
  };
};

var _ref5 = React.createElement(
  Menu.Item,
  { icon: React.createElement(FaCube, null), large: true },
  'Seite bearbeiten'
);

var _ref6 = React.createElement(FaCompress, null);

var _ref7 = React.createElement(FaExpand, null);

var _ref8 = React.createElement(FaCode, null);

var _ref9 = React.createElement(Menu.Divider, null);

var _ref10 = React.createElement(Menu.Space, null);

var Navigation = (_dec = connect(function (_ref3) {
  var location = _ref3.location;
  return {
    pathname: location.pathname,
    query: location.query
  };
}, function (dispatch) {
  return {
    setQuery: createReplaceQuery(dispatch)
  };
}), _dec2 = withState('collapsed', 'setCollapsed', true), _dec3 = withPropsOnChange(['schema'], function (_ref4) {
  var _ref4$schema = _ref4.schema,
      schema = _ref4$schema === undefined ? {} : _ref4$schema;

  var types = Object.keys(schema.nodes || {}).map(function (key) {
    return _extends({}, schema.nodes[key].slate, {
      type: key
    });
  });
  var categories = {};
  var menuItems = [];
  _sortBy(types, ['category', 'label']).forEach(function (action) {
    var item = React.createElement(
      Menu.Item,
      {
        key: action.type,
        draggable: true,
        onClick: function onClick() {
          return null;
        },
        onDragStart: dragStart(action.type)
        // icon={<Icon type={getIcon(action.category)} />}
      },
      action.label || action.type
    );
    if (action.category) {
      if (!categories[action.category]) {
        categories[action.category] = [];
      }
      categories[action.category].push(item);
    } else {
      menuItems.push(item);
    }
  });
  return {
    items: [].concat(_toConsumableArray(Object.keys(categories).map(function (key) {
      return React.createElement(
        Menu.List,
        { key: key, title: key },
        categories[key]
      );
    })))
  };
}), withLang(_class = _dec(_class = enhance(_class = _dec2(_class = getSchema(_class = _dec3(_class = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          query = _props.query,
          collapsed = _props.collapsed,
          setCollapsed = _props.setCollapsed,
          full = _props.full,
          setFull = _props.setFull,
          setCode = _props.setCode,
          code = _props.code,
          items = _props.items,
          children = _props.children;

      var keys = Object.keys(query);

      if (!keys.filter(function (x) {
        return x[0] === '@';
      }).length) {
        keys.push('@home');
      }

      return React.createElement(
        Drawer,
        {
          open: true,
          collapsed: collapsed,
          dim: false,
          right: true,
          width: collapsed ? 72 : 240
        },
        React.createElement(
          Menu,
          {
            collapsed: collapsed,
            onMouseEnter: function onMouseEnter() {
              return setCollapsed(false);
            },
            onMouseLeave: function onMouseLeave() {
              return setCollapsed(true);
            },
            headerColor: true,
            headerInverted: true,
            header: _ref5
          },
          children,
          React.createElement(
            Menu.Item,
            {
              active: full,
              onClick: function onClick() {
                return setFull(!full);
              },
              icon: full ? _ref6 : _ref7
            },
            full ? 'Vollbild beenden' : 'Vollbild'
          ),
          React.createElement(
            Menu.Item,
            {
              active: code,
              onClick: function onClick() {
                return setCode(!code);
              },
              icon: _ref8
            },
            'Code anzeigen'
          ),
          _ref9,
          items,
          _ref10
        )
      );
    }
  }]);

  return Navigation;
}(Component)) || _class) || _class) || _class) || _class) || _class) || _class);

export default Navigation;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2Jsb2NrLWJhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoTGFuZyIsImNyZWF0ZVJlcGxhY2VRdWVyeSIsIk1lbnUiLCJEcmF3ZXIiLCJjb21wb3NlIiwid2l0aFN0YXRlIiwid2l0aEhhbmRsZXJzIiwid2l0aFByb3BzT25DaGFuZ2UiLCJjb25uZWN0IiwiZ2V0U2NoZW1hIiwiZW5oYW5jZSIsImV4cGFuZCIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZHJhZ1N0YXJ0IiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidHlwZSIsIk5hdmlnYXRpb24iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiLCJzZXRRdWVyeSIsImRpc3BhdGNoIiwic2NoZW1hIiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJtYXAiLCJrZXkiLCJzbGF0ZSIsImNhdGVnb3JpZXMiLCJtZW51SXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJwdXNoIiwiaXRlbXMiLCJwcm9wcyIsImNvbGxhcHNlZCIsImZ1bGwiLCJzZXRGdWxsIiwic2V0Q29kZSIsImNvZGUiLCJjaGlsZHJlbiIsImZpbHRlciIsIngiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7Ozs7OztBQUVBLFNBQVNDLGtCQUFULFFBQW1DLGNBQW5DO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixpQkFBakI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFlBQXZCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxpQkFBM0MsUUFBb0UsV0FBcEU7O0FBRUEsU0FBU0MsT0FBVCxRQUF3QixhQUF4QjtBQUNBLE9BQU9D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QUFNQyxRQUFRLENBQUNELElBQVQsQ0FBTjtBQUFBLGVBRlg7QUFHRSxvQkFBTUE7QUFIUjtBQUtHQSxtQkFBTyxrQkFBUCxHQUE0QjtBQUwvQixXQWJGO0FBb0JFO0FBQUMsZ0JBQUQsQ0FBTSxJQUFOO0FBQUE7QUFDRSxzQkFBUUcsSUFEVjtBQUVFLHVCQUFTO0FBQUEsdUJBQU1ELFFBQVEsQ0FBQ0MsSUFBVCxDQUFOO0FBQUEsZUFGWDtBQUdFO0FBSEY7QUFBQTtBQUFBLFdBcEJGO0FBQUE7QUE0QkdOLGVBNUJIO0FBQUE7QUFBQTtBQVBGLE9BREY7QUF5Q0Q7Ozs7RUE1RHNCMUMsUzs7QUE4RHpCLGVBQWVvQixVQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL2Jsb2NrLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoTGFuZyB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IEZhRXhwYW5kLCBGYUNvZGUsIEZhQ29tcHJlc3MsIEZhQ3ViZSB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IGNyZWF0ZVJlcGxhY2VRdWVyeSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycywgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoU3RhdGUoJ2NvbGxhcHNlZCcsICdzZXRDb2xsYXBzZWQnLCB0cnVlKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBleHBhbmQ6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpLFxuICAgIGNvbGxhcHNlOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpLFxuICB9KSxcbik7XG5cbmNvbnN0IGRyYWdTdGFydCA9IHR5cGUgPT4gZXYgPT4ge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGB4LXNsYXRlOiR7dHlwZX1gKTtcbn07XG5cbkB3aXRoTGFuZ1xuQGNvbm5lY3QoXG4gICh7IGxvY2F0aW9uIH0pID0+ICh7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSxcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgc2V0UXVlcnk6IGNyZWF0ZVJlcGxhY2VRdWVyeShkaXNwYXRjaCksXG4gIH0pLFxuKVxuQGVuaGFuY2VcbkB3aXRoU3RhdGUoJ2NvbGxhcHNlZCcsICdzZXRDb2xsYXBzZWQnLCB0cnVlKVxuQGdldFNjaGVtYVxuQHdpdGhQcm9wc09uQ2hhbmdlKFsnc2NoZW1hJ10sICh7IHNjaGVtYSA9IHt9IH0pID0+IHtcbiAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEubm9kZXMgfHwge30pLm1hcChrZXkgPT4gKHtcbiAgICAuLi5zY2hlbWEubm9kZXNba2V5XS5zbGF0ZSxcbiAgICB0eXBlOiBrZXksXG4gIH0pKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHt9O1xuICBjb25zdCBtZW51SXRlbXMgPSBbXTtcbiAgc29ydEJ5KHR5cGVzLCBbJ2NhdGVnb3J5JywgJ2xhYmVsJ10pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICBjb25zdCBpdGVtID0gKFxuICAgICAgPE1lbnUuSXRlbVxuICAgICAgICBrZXk9e2FjdGlvbi50eXBlfVxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgb25DbGljaz17KCkgPT4gbnVsbH1cbiAgICAgICAgb25EcmFnU3RhcnQ9e2RyYWdTdGFydChhY3Rpb24udHlwZSl9XG4gICAgICAgIC8vIGljb249ezxJY29uIHR5cGU9e2dldEljb24oYWN0aW9uLmNhdGVnb3J5KX0gLz59XG4gICAgICA+XG4gICAgICAgIHthY3Rpb24ubGFiZWwgfHwgYWN0aW9uLnR5cGV9XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICApO1xuICAgIGlmIChhY3Rpb24uY2F0ZWdvcnkpIHtcbiAgICAgIGlmICghY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldKSB7XG4gICAgICAgIGNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XSA9IFtdO1xuICAgICAgfVxuICAgICAgY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIC4uLk9iamVjdC5rZXlzKGNhdGVnb3JpZXMpLm1hcChrZXkgPT4gKFxuICAgICAgICA8TWVudS5MaXN0IGtleT17a2V5fSB0aXRsZT17a2V5fT5cbiAgICAgICAgICB7Y2F0ZWdvcmllc1trZXldfVxuICAgICAgICA8L01lbnUuTGlzdD5cbiAgICAgICkpLFxuICAgIF0sXG4gIH07XG59KVxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBxdWVyeSxcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIHNldENvbGxhcHNlZCxcbiAgICAgIGZ1bGwsXG4gICAgICBzZXRGdWxsLFxuICAgICAgc2V0Q29kZSxcbiAgICAgIGNvZGUsXG4gICAgICBpdGVtcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBpZiAoIWtleXMuZmlsdGVyKHggPT4geFswXSA9PT0gJ0AnKS5sZW5ndGgpIHtcbiAgICAgIGtleXMucHVzaCgnQGhvbWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyYXdlclxuICAgICAgICBvcGVuXG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBkaW09e2ZhbHNlfVxuICAgICAgICByaWdodFxuICAgICAgICB3aWR0aD17Y29sbGFwc2VkID8gNzIgOiAyNDB9XG4gICAgICA+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpfVxuICAgICAgICAgIGhlYWRlckNvbG9yXG4gICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8RmFDdWJlIC8+fSBsYXJnZT5cbiAgICAgICAgICAgICAgU2VpdGUgYmVhcmJlaXRlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIGFjdGl2ZT17ZnVsbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfVxuICAgICAgICAgICAgaWNvbj17ZnVsbCA/IDxGYUNvbXByZXNzIC8+IDogPEZhRXhwYW5kIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmdWxsID8gJ1ZvbGxiaWxkIGJlZW5kZW4nIDogJ1ZvbGxiaWxkJ31cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBhY3RpdmU9e2NvZGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2RlKCFjb2RlKX1cbiAgICAgICAgICAgIGljb249ezxGYUNvZGUgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29kZSBhbnplaWdlblxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51LkRpdmlkZXIgLz5cbiAgICAgICAgICB7aXRlbXN9XG4gICAgICAgICAgPE1lbnUuU3BhY2UgLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ==
