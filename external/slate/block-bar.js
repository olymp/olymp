'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faExpand = require('olymp-icons/lib/fa-expand');

var _faExpand2 = _interopRequireDefault(_faExpand);

var _faCode = require('olymp-icons/lib/fa-code');

var _faCode2 = _interopRequireDefault(_faCode);

var _faCompress = require('olymp-icons/lib/fa-compress');

var _faCompress2 = _interopRequireDefault(_faCompress);

var _faCube = require('olymp-icons/lib/fa-cube');

var _faCube2 = _interopRequireDefault(_faCube);

var _olympRouter = require('olymp-router');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _getSchema = require('./get-schema');

var _getSchema2 = _interopRequireDefault(_getSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var enhance = (0, _recompose.compose)((0, _recompose.withState)('collapsed', 'setCollapsed', true), (0, _recompose.withHandlers)({
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

var _ref5 = _react2.default.createElement(
  _menu2.default.Item,
  { icon: _react2.default.createElement(_faCube2.default, null), large: true },
  'Seite bearbeiten'
);

var _ref6 = _react2.default.createElement(_faCompress2.default, null);

var _ref7 = _react2.default.createElement(_faExpand2.default, null);

var _ref8 = _react2.default.createElement(_faCode2.default, null);

var _ref9 = _react2.default.createElement(_menu2.default.Divider, null);

var _ref10 = _react2.default.createElement(_menu2.default.Space, null);

var Navigation = (_dec = (0, _reactRedux.connect)(function (_ref3) {
  var location = _ref3.location;
  return {
    pathname: location.pathname,
    query: location.query
  };
}, function (dispatch) {
  return {
    setQuery: (0, _olympRouter.createReplaceQuery)(dispatch)
  };
}), _dec2 = (0, _recompose.withState)('collapsed', 'setCollapsed', true), _dec3 = (0, _recompose.withPropsOnChange)(['schema'], function (_ref4) {
  var _ref4$schema = _ref4.schema,
      schema = _ref4$schema === undefined ? {} : _ref4$schema;

  var types = Object.keys(schema.nodes || {}).map(function (key) {
    return _extends({}, schema.nodes[key].slate, {
      type: key
    });
  });
  var categories = {};
  var menuItems = [];
  (0, _sortBy3.default)(types, ['category', 'label']).forEach(function (action) {
    var item = _react2.default.createElement(
      _menu2.default.Item,
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
      return _react2.default.createElement(
        _menu2.default.List,
        { key: key, title: key },
        categories[key]
      );
    })))
  };
}), _dec(_class = enhance(_class = _dec2(_class = (0, _getSchema2.default)(_class = _dec3(_class = function (_Component) {
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

      return _react2.default.createElement(
        _olympFela.Drawer,
        {
          open: true,
          collapsed: collapsed,
          dim: false,
          right: true,
          width: collapsed ? 72 : 240
        },
        _react2.default.createElement(
          _menu2.default,
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
          _react2.default.createElement(
            _menu2.default.Item,
            {
              active: full,
              onClick: function onClick() {
                return setFull(!full);
              },
              icon: full ? _ref6 : _ref7
            },
            full ? 'Vollbild beenden' : 'Vollbild'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
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
}(_react.Component)) || _class) || _class) || _class) || _class) || _class);
exports.default = Navigation;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2Jsb2NrLWJhci5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImV4cGFuZCIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZHJhZ1N0YXJ0IiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidHlwZSIsIk5hdmlnYXRpb24iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiLCJzZXRRdWVyeSIsImRpc3BhdGNoIiwic2NoZW1hIiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJtYXAiLCJrZXkiLCJzbGF0ZSIsImNhdGVnb3JpZXMiLCJtZW51SXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJwdXNoIiwiaXRlbXMiLCJwcm9wcyIsImNvbGxhcHNlZCIsImZ1bGwiLCJzZXRGdWxsIiwic2V0Q29kZSIsImNvZGUiLCJjaGlsZHJlbiIsImZpbHRlciIsIngiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsd0JBQ2QsMEJBQVUsV0FBVixFQUF1QixjQUF2QixFQUF1QyxJQUF2QyxDQURjLEVBRWQsNkJBQWE7QUFDWEMsVUFBUTtBQUFBLFFBQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFdBQXNCO0FBQUEsYUFBTUEsYUFBYSxLQUFiLENBQU47QUFBQSxLQUF0QjtBQUFBLEdBREc7QUFFWEMsWUFBVTtBQUFBLFFBQUdELFlBQUgsU0FBR0EsWUFBSDtBQUFBLFdBQXNCO0FBQUEsYUFBTUEsYUFBYSxJQUFiLENBQU47QUFBQSxLQUF0QjtBQUFBO0FBRkMsQ0FBYixDQUZjLENBQWhCOztBQVFBLElBQU1FLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVEsY0FBTTtBQUM5QkMsT0FBR0MsWUFB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S0MsRUFBRSxDQUFGLE1BQVMsR0FBZDtBQUFBLE9BQVosRUFBK0JDLE1BQXBDLEVBQTRDO0FBQzFDdkIsYUFBS1ksSUFBTCxDQUFVLE9BQVY7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNFLG9CQURGO0FBRUUscUJBQVdHLFNBRmI7QUFHRSxlQUFLLEtBSFA7QUFJRSxxQkFKRjtBQUtFLGlCQUFPQSxZQUFZLEVBQVosR0FBaUI7QUFMMUI7QUFPRTtBQUFBO0FBQUE7QUFDRSx1QkFBV0EsU0FEYjtBQUVFLDBCQUFjO0FBQUEscUJBQU0vQixhQUFhLEtBQWIsQ0FBTjtBQUFBLGFBRmhCO0FBR0UsMEJBQWM7QUFBQSxxQkFBTUEsYUFBYSxJQUFiLENBQU47QUFBQSxhQUhoQjtBQUlFLDZCQUpGO0FBS0UsZ0NBTEY7QUFNRTtBQU5GO0FBWUdvQyxrQkFaSDtBQWFFO0FBQUEsMkJBQU0sSUFBTjtBQUFBO0FBQ0Usc0JBQVFKLElBRFY7QUFFRSx1QkFBUztBQUFBLHVCQUFNQyxRQUFRLENBQUNELElBQVQsQ0FBTjtBQUFBLGVBRlg7QUFHRSxvQkFBTUE7QUFIUjtBQUtHQSxtQkFBTyxrQkFBUCxHQUE0QjtBQUwvQixXQWJGO0FBb0JFO0FBQUEsMkJBQU0sSUFBTjtBQUFBO0FBQ0Usc0JBQVFHLElBRFY7QUFFRSx1QkFBUztBQUFBLHVCQUFNRCxRQUFRLENBQUNDLElBQVQsQ0FBTjtBQUFBLGVBRlg7QUFHRTtBQUhGO0FBQUE7QUFBQSxXQXBCRjtBQUFBO0FBNEJHTixlQTVCSDtBQUFBO0FBQUE7QUFQRixPQURGO0FBeUNEOzs7OztrQkFFWXRCLFUiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvYmxvY2stYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhRXhwYW5kLCBGYUNvZGUsIEZhQ29tcHJlc3MsIEZhQ3ViZSB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IGNyZWF0ZVJlcGxhY2VRdWVyeSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycywgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoU3RhdGUoJ2NvbGxhcHNlZCcsICdzZXRDb2xsYXBzZWQnLCB0cnVlKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBleHBhbmQ6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpLFxuICAgIGNvbGxhcHNlOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpLFxuICB9KSxcbik7XG5cbmNvbnN0IGRyYWdTdGFydCA9IHR5cGUgPT4gZXYgPT4ge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGB4LXNsYXRlOiR7dHlwZX1gKTtcbn07XG5cbkBjb25uZWN0KFxuICAoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnksXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIHNldFF1ZXJ5OiBjcmVhdGVSZXBsYWNlUXVlcnkoZGlzcGF0Y2gpLFxuICB9KSxcbilcbkBlbmhhbmNlXG5Ad2l0aFN0YXRlKCdjb2xsYXBzZWQnLCAnc2V0Q29sbGFwc2VkJywgdHJ1ZSlcbkBnZXRTY2hlbWFcbkB3aXRoUHJvcHNPbkNoYW5nZShbJ3NjaGVtYSddLCAoeyBzY2hlbWEgPSB7fSB9KSA9PiB7XG4gIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2NoZW1hLm5vZGVzIHx8IHt9KS5tYXAoa2V5ID0+ICh7XG4gICAgLi4uc2NoZW1hLm5vZGVzW2tleV0uc2xhdGUsXG4gICAgdHlwZToga2V5LFxuICB9KSk7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSB7fTtcbiAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gIHNvcnRCeSh0eXBlcywgWydjYXRlZ29yeScsICdsYWJlbCddKS5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgY29uc3QgaXRlbSA9IChcbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAga2V5PXthY3Rpb24udHlwZX1cbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG51bGx9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtkcmFnU3RhcnQoYWN0aW9uLnR5cGUpfVxuICAgICAgICAvLyBpY29uPXs8SWNvbiB0eXBlPXtnZXRJY29uKGFjdGlvbi5jYXRlZ29yeSl9IC8+fVxuICAgICAgPlxuICAgICAgICB7YWN0aW9uLmxhYmVsIHx8IGFjdGlvbi50eXBlfVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcbiAgICBpZiAoYWN0aW9uLmNhdGVnb3J5KSB7XG4gICAgICBpZiAoIWNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XSkge1xuICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBbXG4gICAgICAuLi5PYmplY3Qua2V5cyhjYXRlZ29yaWVzKS5tYXAoa2V5ID0+IChcbiAgICAgICAgPE1lbnUuTGlzdCBrZXk9e2tleX0gdGl0bGU9e2tleX0+XG4gICAgICAgICAge2NhdGVnb3JpZXNba2V5XX1cbiAgICAgICAgPC9NZW51Lkxpc3Q+XG4gICAgICApKSxcbiAgICBdLFxuICB9O1xufSlcbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcXVlcnksXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBzZXRDb2xsYXBzZWQsXG4gICAgICBmdWxsLFxuICAgICAgc2V0RnVsbCxcbiAgICAgIHNldENvZGUsXG4gICAgICBjb2RlLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGlsZHJlbixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgaWYgKCFrZXlzLmZpbHRlcih4ID0+IHhbMF0gPT09ICdAJykubGVuZ3RoKSB7XG4gICAgICBrZXlzLnB1c2goJ0Bob21lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgb3BlblxuICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgZGltPXtmYWxzZX1cbiAgICAgICAgcmlnaHRcbiAgICAgICAgd2lkdGg9e2NvbGxhcHNlZCA/IDcyIDogMjQwfVxuICAgICAgPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgICAgICAgICBoZWFkZXJDb2xvclxuICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEZhQ3ViZSAvPn0gbGFyZ2U+XG4gICAgICAgICAgICAgIFNlaXRlIGJlYXJiZWl0ZW5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBhY3RpdmU9e2Z1bGx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX1cbiAgICAgICAgICAgIGljb249e2Z1bGwgPyA8RmFDb21wcmVzcyAvPiA6IDxGYUV4cGFuZCAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZnVsbCA/ICdWb2xsYmlsZCBiZWVuZGVuJyA6ICdWb2xsYmlsZCd9XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgYWN0aXZlPXtjb2RlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29kZSghY29kZSl9XG4gICAgICAgICAgICBpY29uPXs8RmFDb2RlIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvZGUgYW56ZWlnZW5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgIDxNZW51LlNwYWNlIC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvRHJhd2VyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXX0=
