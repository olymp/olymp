'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/upload/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactFela = require('react-fela');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _ant = require('olymp-fela/menu/ant');

var _ant2 = _interopRequireDefault(_ant);

var _faChevronLeft = require('olymp-icons/lib/fa-chevron-left');

var _faChevronLeft2 = _interopRequireDefault(_faChevronLeft);

var _faPictureO = require('olymp-icons/lib/fa-picture-o');

var _faPictureO2 = _interopRequireDefault(_faPictureO);

var _faClose = require('olymp-icons/lib/fa-close');

var _faClose2 = _interopRequireDefault(_faClose);

var _faSave = require('olymp-icons/lib/fa-save');

var _faSave2 = _interopRequireDefault(_faSave);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _gql = require('../gql');

var _gallery = require('./gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _upload3 = require('./upload');

var _upload4 = _interopRequireDefault(_upload3);

var _detail = require('../detail');

var _detail2 = _interopRequireDefault(_detail);

var _image = require('../image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import Dragzone from '../components/dragzone';

var EMPTY = 'Keine Tags';
var TRASH = 'Papierkorb';
var GENERAL = 'Allgemein';
var INITIAL_ARRAY = [];

var _ref3 = _react2.default.createElement('circle', { cx: '32', cy: '32', r: '31' });

var Label = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    '> circle': {
      fill: theme.dark5
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      p = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: '64',
      height: '64',
      viewBox: '0 0 64 64',
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1'
    }, p),
    _ref3,
    _react2.default.createElement(
      'text',
      {
        textAnchor: 'middle',
        x: '50%',
        y: '50%',
        dy: '.35em',
        fontFamily: 'sans-serif',
        fontSize: '45px',
        fill: 'white'
      },
      children
    )
  );
});

var addSortedChildren = function addSortedChildren(obj) {
  var sorter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'length';

  if (!obj.map) {
    return obj;
  }
  var map = obj.map;

  var keys = Object.keys(map);
  if (sorter === 'length') {
    keys = (0, _sortBy3.default)(keys, function (key) {
      return map[key].items.length;
    }).reverse();
  } else if (sorter === 'name') {
    keys = (0, _sortBy3.default)(keys);
  }
  return keys.reduce(function (result, key) {
    var childs = addSortedChildren(map[key], sorter);
    childs.key = key;
    result.map[key] = childs;
    result.children.push(childs);
    return result;
  }, _extends({}, obj, { children: [], map: {} }));
};

var _ref11 = _react2.default.createElement(_faPictureO2.default, null);

var _ref12 = _react2.default.createElement(_faPlus2.default, null);

var _ref13 = _react2.default.createElement(_faChevronLeft2.default, null);

var _ref22 = _react2.default.createElement(_faSave2.default, null);

var _ref23 = _react2.default.createElement(_faClose2.default, null);

var CloudinaryView = (_dec = (0, _recompose.withPropsOnChange)(['items', 'search', 'format'], function (_ref4) {
  var items = _ref4.items,
      search = _ref4.search,
      format = _ref4.format;

  var apps = items.reduce(function (result, item) {
    if (format && item.format !== format) {
      return result;
    }
    var app = !!item.publicId && item.publicId.indexOf('/') !== -1 && item.publicId.split('/')[0] || 'gzk';
    var f = item.removed ? TRASH : item.folder || GENERAL;
    if (f && search && f.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return result;
    }
    if (!result[app]) {
      result[app] = {
        children: [],
        map: {},
        items: []
      };
    }
    if (!result[app].map[f]) {
      result[app].map[f] = {
        children: [],
        map: {},
        items: []
      };
    }
    result[app].items.push(item);
    result[app].map[f].items.push(item);

    var tags = result[app].map[f].map;
    if (!item.tags || !item.tags.length) {
      if (!tags[GENERAL]) {
        tags[GENERAL] = {
          children: [],
          map: {},
          items: []
        };
      }
      if (!tags[GENERAL].map[EMPTY]) {
        tags[GENERAL].map[EMPTY] = {
          children: [],
          map: {},
          items: []
        };
      }
      tags[GENERAL].items.push(item);
      tags[GENERAL].map[EMPTY].items.push(item);
    } else {
      item.tags.forEach(function (tag) {
        if (search && tag.toLowerCase().indexOf(search.toLowerCase()) === -1) {
          return;
        }
        var lastIndex = tag.lastIndexOf('/');
        var firstPart = lastIndex !== -1 ? tag.substr(0, lastIndex) : GENERAL;
        var lastPart = lastIndex !== -1 ? tag.substr(lastIndex + 1) : tag;
        if (!tags[firstPart]) {
          tags[firstPart] = {
            children: [],
            map: {},
            items: []
          };
        }
        if (!tags[firstPart].map[lastPart]) {
          tags[firstPart].map[lastPart] = {
            children: [],
            map: {},
            items: []
          };
        }
        tags[firstPart].items.push(item);
        tags[firstPart].map[lastPart].items.push(item);
      });
    }

    return result;
  }, {});

  return {
    tree: apps
  };
}), _dec2 = (0, _recompose.withPropsOnChange)(['sorting', 'tree'], function (_ref5) {
  var tree = _ref5.tree,
      sorting = _ref5.sorting,
      items = _ref5.items;
  return {
    tree: addSortedChildren({ map: tree, items: items }, sorting)
  };
}), _dec3 = (0, _recompose.withPropsOnChange)(['value'], function (_ref6) {
  var value = _ref6.value;
  return {
    value: value ? value.filter(function (x) {
      return x;
    }) : null
  };
}), _dec4 = (0, _recompose.withState)('collapsed', 'setCollapsed', true), _dec5 = (0, _recompose.withState)('sorting', 'setSorting', 'length'), _dec6 = (0, _recompose.withState)('tags', 'setTags', INITIAL_ARRAY), _dec7 = (0, _recompose.withState)('selection', 'setSelection', function (_ref7) {
  var value = _ref7.value;
  return value ? value.map(function (v) {
    return v.id;
  }) : [];
}), _dec8 = (0, _recompose.withPropsOnChange)(['selection', 'items'], function (_ref8) {
  var selection = _ref8.selection,
      _ref8$items = _ref8.items,
      items = _ref8$items === undefined ? [] : _ref8$items;
  return {
    selectedItems: items.filter(function (x) {
      return selection.includes(x.id);
    })
  };
}), (0, _gql.queryMedias)(_class = (0, _gql.cloudinaryRequest)(_class = (0, _gql.cloudinaryRequestDone)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = (0, _upload4.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(CloudinaryView, _Component);

  function CloudinaryView() {
    var _ref9;

    var _temp, _this, _ret;

    _classCallCheck(this, CloudinaryView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref9 = CloudinaryView.__proto__ || Object.getPrototypeOf(CloudinaryView)).call.apply(_ref9, [this].concat(args))), _this), _this.onClick = function (_ref10) {
      var id = _ref10.id;
      var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          selection = _this$props.selection,
          setSelection = _this$props.setSelection,
          multi = _this$props.multi;


      if (multi && multiple) {
        if (selection.findIndex(function (sId) {
          return sId === id;
        }) === -1) {
          setSelection([].concat(_toConsumableArray(selection), [id]));
        } else {
          setSelection(selection.filter(function (x) {
            return x !== id;
          }));
        }
      } else {
        setSelection([id]);
      }
    }, _this.initial = true, _this.renderMenu = function () {
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$props2 = _this.props,
          goRoot = _this$props2.goRoot,
          setTags = _this$props2.setTags,
          tags = _this$props2.tags,
          tree = _this$props2.tree,
          upload = _this$props2.upload;


      var children = [];
      if (keys.length === 0) {
        children = tree.children.map(function (app) {
          return _react2.default.createElement(
            _menu2.default.List,
            { key: app.key, title: app.key },
            app.children.map(function (dir) {
              return _react2.default.createElement(
                _menu2.default.Item,
                {
                  onClick: function onClick() {
                    return setTags([app.key + '/' + dir.key]);
                  },
                  key: dir.key,
                  extra: _react2.default.createElement(
                    'b',
                    null,
                    dir.items.length,
                    '\xA0\xA0'
                  )
                },
                dir.key
              );
            })
          );
        });
      } else {
        var _keys = _slicedToArray(keys, 1),
            key0 = _keys[0];

        var _key0$split = key0.split('/'),
            _key0$split2 = _slicedToArray(_key0$split, 2),
            app = _key0$split2[0],
            folder = _key0$split2[1];

        var node = tree.map[app].map[folder];
        children = node.children.map(function (tag) {
          return _react2.default.createElement(
            _menu2.default.List,
            {
              key: tag.key,
              title: tag.key,
              extra: _react2.default.createElement(
                'b',
                null,
                tag.items.length,
                '\xA0\xA0'
              )
            },
            tag.children.map(function (subTag) {
              return _react2.default.createElement(
                _menu2.default.Item,
                {
                  onClick: function onClick() {
                    return setTags([key0, tag.key + '/' + subTag.key]);
                  },
                  key: subTag.key,
                  active: tags.indexOf(tag.key + '/' + subTag.key) !== -1,
                  extra: _react2.default.createElement(
                    'b',
                    null,
                    subTag.items.length,
                    '\xA0\xA0'
                  )
                },
                subTag.key
              );
            })
          );
        });
      }

      return _react2.default.createElement(
        _menu2.default,
        {
          key: keys.join('|'),
          header: _react2.default.createElement(
            _menu2.default.Item,
            {
              large: true,
              onClick: goRoot,
              icon: _ref11,
              extra: _react2.default.createElement(
                _menu2.default.Extra,
                { onClick: function onClick() {}, disabled: !!keys.length, large: true },
                _react2.default.createElement(
                  _upload2.default,
                  upload,
                  _ref12
                )
              )
            },
            'Mediathek'
          )
        },
        keys.length > 0 && _react2.default.createElement(
          _menu2.default.Item,
          { icon: _ref13, onClick: function onClick() {
              return setTags([]);
            } },
          'Zur\xFCck'
        ),
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CloudinaryView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref14) {
      var _ref14$selectedItems = _ref14.selectedItems,
          selectedItems = _ref14$selectedItems === undefined ? [] : _ref14$selectedItems;

      var thisSelection = this.props.selectedItems || [];
      if (selectedItems.length !== thisSelection.length) {
        this.initial = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tags = _props.tags,
          collapsed = _props.collapsed,
          setCollapsed = _props.setCollapsed,
          selection = _props.selection,
          tree = _props.tree,
          setSelection = _props.setSelection,
          selectedItems = _props.selectedItems,
          inModal = _props.inModal,
          multi = _props.multi,
          value = _props.value,
          onChange = _props.onChange,
          onClose = _props.onClose;

      var _tags = _slicedToArray(tags, 2),
          key0 = _tags[0],
          key1 = _tags[1];

      var _ref15 = key0 ? key0.split('/') : [],
          _ref16 = _slicedToArray(_ref15, 2),
          app = _ref16[0],
          folder = _ref16[1];

      var _ref17 = key1 ? key1.split('/') : [],
          _ref18 = _slicedToArray(_ref17, 2),
          group = _ref18[0],
          tag = _ref18[1];

      var node = app && folder ? tree.map[app].map[folder] : tree;
      var filteredItems = group && tag ? node.map[group].map[tag].items : node.items;

      return _react2.default.createElement(
        _olympFela.Sidebar,
        {
          left: inModal ? 0 : 72,
          menu: _react2.default.createElement(_menu.StackedMenu, {
            keys: tags.filter(function (x, i) {
              return i < 1;
            }),
            renderMenu: this.renderMenu
          })
        },
        _react2.default.createElement(_gallery2.default, {
          useBodyScroll: !inModal,
          key: tags.join('|'),
          items: this.initial && !tags.length && selectedItems.length ? selectedItems : filteredItems,
          onClick: this.onClick,
          selection: selection,
          isActive: function isActive(_ref19) {
            var id = _ref19.id;
            return selection.indexOf(id) !== -1;
          },
          onRemove: function onRemove(_ref20) {
            var id = _ref20.id;
            return setSelection(selection.filter(function (x) {
              return id !== x;
            }));
          }
        }),
        _react2.default.createElement(
          _olympFela.Drawer,
          {
            open: true,
            collapsed: collapsed,
            dim: false,
            right: true,
            width: collapsed ? 72 : 240,
            onMouseEnter: function onMouseEnter() {
              return setCollapsed(false);
            },
            onMouseLeave: function onMouseLeave() {
              return setCollapsed(true);
            }
          },
          _react2.default.createElement(
            _menu2.default,
            {
              collapsed: collapsed,
              header: _react2.default.createElement(
                _menu2.default.Item,
                {
                  large: true,
                  icon: collapsed && _react2.default.createElement(
                    Label,
                    null,
                    selectedItems.length
                  )
                },
                'Bearbeiten'
              ),
              headerInverted: true,
              headerColor: true
            },
            _react2.default.createElement(
              _menu2.default.Space,
              null,
              collapsed && (value || selectedItems || []).map(function (v) {
                return _react2.default.createElement(_menu2.default.Item, {
                  key: v.id,
                  large: true,
                  icon: _react2.default.createElement(_image2.default, { value: v, width: 60, height: 60 })
                });
              }),
              _react2.default.createElement(_detail2.default, {
                value: value || selectedItems || [],
                multi: multi,
                editable: !inModal,
                collapsed: collapsed,
                onRemove: function onRemove(_ref21) {
                  var id = _ref21.id;
                  return setSelection(selection.filter(function (x) {
                    return id !== x;
                  }));
                }
              })
            )
          ),
          !collapsed && _react2.default.createElement(
            _menu2.default,
            {
              color: true,
              inverted: true,
              collapsed: true,
              header: _react2.default.createElement(
                _menu2.default.Item,
                { large: true, icon: _react2.default.createElement(
                    Label,
                    null,
                    selectedItems.length
                  ) },
                'Seite bearbeiten'
              ),
              headerColor: 'dark4',
              headerInverted: true
            },
            !!onChange && _react2.default.createElement(
              _ant2.default.Tooltip,
              {
                onClick: function onClick() {
                  return onChange(selectedItems);
                },
                icon: _ref22
              },
              'Speichern'
            ),
            !!onClose && _react2.default.createElement(
              _ant2.default.Tooltip,
              { onClick: onClose, icon: _ref23 },
              'Abbrechen'
            )
          )
        )
      );
    }
  }]);

  return CloudinaryView;
}(_react.Component), _class2.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  filteredItems: _propTypes2.default.arrayOf(_propTypes2.default.object),
  selectedIds: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onClose: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  addSelection: _propTypes2.default.func,
  removeSelection: _propTypes2.default.func,
  setSelection: _propTypes2.default.func,
  format: _propTypes2.default.string,
  multi: _propTypes2.default.bool
}, _class2.defaultProps = {
  items: [],
  filteredItems: [],
  selectedIds: [],
  multi: true,
  onClose: undefined,
  onChange: undefined,
  addSelection: undefined,
  removeSelection: undefined,
  setSelection: undefined,
  format: undefined
}, _temp2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = CloudinaryView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3ZpZXdzL2Nsb3VkaW5hcnkuZXM2Il0sIm5hbWVzIjpbIkVNUFRZIiwiVFJBU0giLCJHRU5FUkFMIiwiSU5JVElBTF9BUlJBWSIsIkxhYmVsIiwidGhlbWUiLCJmaWxsIiwiZGFyazUiLCJjaGlsZHJlbiIsInAiLCJhZGRTb3J0ZWRDaGlsZHJlbiIsIm9iaiIsInNvcnRlciIsIm1hcCIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJpdGVtcyIsImxlbmd0aCIsInJldmVyc2UiLCJyZWR1Y2UiLCJyZXN1bHQiLCJjaGlsZHMiLCJwdXNoIiwiQ2xvdWRpbmFyeVZpZXciLCJzZWFyY2giLCJmb3JtYXQiLCJhcHBzIiwiaXRlbSIsImFwcCIsInB1YmxpY0lkIiwiaW5kZXhPZiIsInNwbGl0IiwiZiIsInJlbW92ZWQiLCJmb2xkZXIiLCJ0b0xvd2VyQ2FzZSIsInRhZ3MiLCJmb3JFYWNoIiwidGFnIiwibGFzdEluZGV4IiwibGFzdEluZGV4T2YiLCJmaXJzdFBhcnQiLCJzdWJzdHIiLCJsYXN0UGFydCIsInRyZWUiLCJzb3J0aW5nIiwidmFsdWUiLCJmaWx0ZXIiLCJ4IiwidiIsImlkIiwic2VsZWN0aW9uIiwic2VsZWN0ZWRJdGVtcyIsImluY2x1ZGVzIiwib25DbGljayIsIm11bHRpcGxlIiwicHJvcHMiLCJzZXRTZWxlY3Rpb24iLCJtdWx0aSIsImZpbmRJbmRleCIsInNJZCIsImluaXRpYWwiLCJyZW5kZXJNZW51IiwiZ29Sb290Iiwic2V0VGFncyIsInVwbG9hZCIsImRpciIsImtleTAiLCJub2RlIiwic3ViVGFnIiwiam9pbiIsInRoaXNTZWxlY3Rpb24iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJpbk1vZGFsIiwib25DaGFuZ2UiLCJvbkNsb3NlIiwia2V5MSIsImdyb3VwIiwiZmlsdGVyZWRJdGVtcyIsImkiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic2VsZWN0ZWRJZHMiLCJzdHJpbmciLCJmdW5jIiwiYWRkU2VsZWN0aW9uIiwicmVtb3ZlU2VsZWN0aW9uIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxZQUFkO0FBQ0EsSUFBTUMsUUFBUSxZQUFkO0FBQ0EsSUFBTUMsVUFBVSxXQUFoQjtBQUNBLElBQU1DLGdCQUFnQixFQUF0Qjs7WUFpQk0sMENBQVEsSUFBRyxJQUFYLEVBQWdCLElBQUcsSUFBbkIsRUFBd0IsR0FBRSxJQUExQixHOztBQWZOLElBQU1DLFFBQVEsZ0NBQ1o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkLGdCQUFZO0FBQ1ZDLFlBQU1ELE1BQU1FO0FBREY7QUFERSxHQUFoQjtBQUFBLENBRFksRUFNWjtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWdCQyxDQUFoQjs7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUNFLGFBQU0sSUFEUjtBQUVFLGNBQU8sSUFGVDtBQUdFLGVBQVEsV0FIVjtBQUlFLGFBQU0sNEJBSlI7QUFLRSxlQUFRO0FBTFYsT0FNTUEsQ0FOTjtBQUFBO0FBU0U7QUFBQTtBQUFBO0FBQ0Usb0JBQVcsUUFEYjtBQUVFLFdBQUUsS0FGSjtBQUdFLFdBQUUsS0FISjtBQUlFLFlBQUcsT0FKTDtBQUtFLG9CQUFXLFlBTGI7QUFNRSxrQkFBUyxNQU5YO0FBT0UsY0FBSztBQVBQO0FBU0dEO0FBVEg7QUFURixHQURGO0FBQUEsQ0FOWSxDQUFkOztBQStCQSxJQUFNRSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLHVFQUFiLFFBQWE7O0FBQ3BE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QUE1QixDQUhJO0FBSWpCVCxXQUFTLG9CQUFVVSxJQUpGO0FBS2pCWCxZQUFVLG9CQUFVVyxJQUxIO0FBTWpCQyxnQkFBYyxvQkFBVUQsSUFOUDtBQU9qQkUsbUJBQWlCLG9CQUFVRixJQVBWO0FBUWpCN0IsZ0JBQWMsb0JBQVU2QixJQVJQO0FBU2pCN0QsVUFBUSxvQkFBVTRELE1BVEQ7QUFVakIzQixTQUFPLG9CQUFVK0I7QUFWQSxDLFVBYVpDLFksR0FBZTtBQUNwQjFFLFNBQU8sRUFEYTtBQUVwQitELGlCQUFlLEVBRks7QUFHcEJLLGVBQWEsRUFITztBQUlwQjFCLFNBQU8sSUFKYTtBQUtwQmtCLFdBQVNlLFNBTFc7QUFNcEJoQixZQUFVZ0IsU0FOVTtBQU9wQkosZ0JBQWNJLFNBUE07QUFRcEJILG1CQUFpQkcsU0FSRztBQVNwQmxDLGdCQUFja0MsU0FUTTtBQVVwQmxFLFVBQVFrRTtBQVZZLEM7a0JBNE9UcEUsYyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS92aWV3cy9jbG91ZGluYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IFVwbG9hZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBTaWRlYmFyLCBEcmF3ZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51LCB7IFN0YWNrZWRNZW51IH0gZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCBBbnRNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudS9hbnQnO1xuaW1wb3J0IHtcbiAgRmFDaGV2cm9uTGVmdCxcbiAgRmFQaWN0dXJlTyxcbiAgRmFDbG9zZSxcbiAgRmFTYXZlLFxuICBGYVBsdXMsXG59IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBxdWVyeU1lZGlhcywgY2xvdWRpbmFyeVJlcXVlc3QsIGNsb3VkaW5hcnlSZXF1ZXN0RG9uZSB9IGZyb20gJy4uL2dxbCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHdpdGhVcGxvYWQgZnJvbSAnLi91cGxvYWQnO1xuaW1wb3J0IERldGFpbCBmcm9tICcuLi9kZXRhaWwnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlJztcbi8vIGltcG9ydCBEcmFnem9uZSBmcm9tICcuLi9jb21wb25lbnRzL2RyYWd6b25lJztcblxuY29uc3QgRU1QVFkgPSAnS2VpbmUgVGFncyc7XG5jb25zdCBUUkFTSCA9ICdQYXBpZXJrb3JiJztcbmNvbnN0IEdFTkVSQUwgPSAnQWxsZ2VtZWluJztcbmNvbnN0IElOSVRJQUxfQVJSQVkgPSBbXTtcblxuY29uc3QgTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgJz4gY2lyY2xlJzoge1xuICAgICAgZmlsbDogdGhlbWUuZGFyazUsXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCAuLi5wIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjY0XCJcbiAgICAgIGhlaWdodD1cIjY0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHsuLi5wfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9XCIzMlwiIGN5PVwiMzJcIiByPVwiMzFcIiAvPlxuICAgICAgPHRleHRcbiAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgIHg9XCI1MCVcIlxuICAgICAgICB5PVwiNTAlXCJcbiAgICAgICAgZHk9XCIuMzVlbVwiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU9XCI0NXB4XCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0PlxuICAgIDwvc3ZnPlxuICApLFxuKTtcblxuY29uc3QgYWRkU29ydGVkQ2hpbGRyZW4gPSAob2JqLCBzb3J0ZXIgPSAnbGVuZ3RoJykgPT4ge1xuICBpZiAoIW9iai5tYXApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGNvbnN0IHsgbWFwIH0gPSBvYmo7XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMobWFwKTtcbiAgaWYgKHNvcnRlciA9PT0gJ2xlbmd0aCcpIHtcbiAgICBrZXlzID0gc29ydEJ5KGtleXMsIGtleSA9PiBtYXBba2V5XS5pdGVtcy5sZW5ndGgpLnJldmVyc2UoKTtcbiAgfSBlbHNlIGlmIChzb3J0ZXIgPT09ICduYW1lJykge1xuICAgIGtleXMgPSBzb3J0Qnkoa2V5cyk7XG4gIH1cbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRzID0gYWRkU29ydGVkQ2hpbGRyZW4obWFwW2tleV0sIHNvcnRlcik7XG4gICAgICBjaGlsZHMua2V5ID0ga2V5O1xuICAgICAgcmVzdWx0Lm1hcFtrZXldID0gY2hpbGRzO1xuICAgICAgcmVzdWx0LmNoaWxkcmVuLnB1c2goY2hpbGRzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB7IC4uLm9iaiwgY2hpbGRyZW46IFtdLCBtYXA6IHt9IH0sXG4gICk7XG59O1xuXG5AcXVlcnlNZWRpYXNcbkBjbG91ZGluYXJ5UmVxdWVzdFxuQGNsb3VkaW5hcnlSZXF1ZXN0RG9uZVxuQHdpdGhQcm9wc09uQ2hhbmdlKFxuICBbJ2l0ZW1zJywgJ3NlYXJjaCcsICdmb3JtYXQnXSxcbiAgKHsgaXRlbXMsIHNlYXJjaCwgZm9ybWF0IH0pID0+IHtcbiAgICBjb25zdCBhcHBzID0gaXRlbXMucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgIGlmIChmb3JtYXQgJiYgaXRlbS5mb3JtYXQgIT09IGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgY29uc3QgYXBwID1cbiAgICAgICAgKCEhaXRlbS5wdWJsaWNJZCAmJlxuICAgICAgICAgIGl0ZW0ucHVibGljSWQuaW5kZXhPZignLycpICE9PSAtMSAmJlxuICAgICAgICAgIGl0ZW0ucHVibGljSWQuc3BsaXQoJy8nKVswXSkgfHxcbiAgICAgICAgJ2d6ayc7XG4gICAgICBjb25zdCBmID0gaXRlbS5yZW1vdmVkID8gVFJBU0ggOiBpdGVtLmZvbGRlciB8fCBHRU5FUkFMO1xuICAgICAgaWYgKGYgJiYgc2VhcmNoICYmIGYudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0W2FwcF0pIHtcbiAgICAgICAgcmVzdWx0W2FwcF0gPSB7XG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIG1hcDoge30sXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHRbYXBwXS5tYXBbZl0pIHtcbiAgICAgICAgcmVzdWx0W2FwcF0ubWFwW2ZdID0ge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFthcHBdLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICByZXN1bHRbYXBwXS5tYXBbZl0uaXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgY29uc3QgdGFncyA9IHJlc3VsdFthcHBdLm1hcFtmXS5tYXA7XG4gICAgICBpZiAoIWl0ZW0udGFncyB8fCAhaXRlbS50YWdzLmxlbmd0aCkge1xuICAgICAgICBpZiAoIXRhZ3NbR0VORVJBTF0pIHtcbiAgICAgICAgICB0YWdzW0dFTkVSQUxdID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFnc1tHRU5FUkFMXS5tYXBbRU1QVFldKSB7XG4gICAgICAgICAgdGFnc1tHRU5FUkFMXS5tYXBbRU1QVFldID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRhZ3NbR0VORVJBTF0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGFnc1tHRU5FUkFMXS5tYXBbRU1QVFldLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlYXJjaCAmJlxuICAgICAgICAgICAgdGFnLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRhZy5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9XG4gICAgICAgICAgICBsYXN0SW5kZXggIT09IC0xID8gdGFnLnN1YnN0cigwLCBsYXN0SW5kZXgpIDogR0VORVJBTDtcbiAgICAgICAgICBjb25zdCBsYXN0UGFydCA9IGxhc3RJbmRleCAhPT0gLTEgPyB0YWcuc3Vic3RyKGxhc3RJbmRleCArIDEpIDogdGFnO1xuICAgICAgICAgIGlmICghdGFnc1tmaXJzdFBhcnRdKSB7XG4gICAgICAgICAgICB0YWdzW2ZpcnN0UGFydF0gPSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0YWdzW2ZpcnN0UGFydF0ubWFwW2xhc3RQYXJ0XSkge1xuICAgICAgICAgICAgdGFnc1tmaXJzdFBhcnRdLm1hcFtsYXN0UGFydF0gPSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFnc1tmaXJzdFBhcnRdLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgdGFnc1tmaXJzdFBhcnRdLm1hcFtsYXN0UGFydF0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWU6IGFwcHMsXG4gICAgfTtcbiAgfSxcbilcbkB3aXRoUHJvcHNPbkNoYW5nZShbJ3NvcnRpbmcnLCAndHJlZSddLCAoeyB0cmVlLCBzb3J0aW5nLCBpdGVtcyB9KSA9PiAoe1xuICB0cmVlOiBhZGRTb3J0ZWRDaGlsZHJlbih7IG1hcDogdHJlZSwgaXRlbXMgfSwgc29ydGluZyksXG59KSlcbkB3aXRoUHJvcHNPbkNoYW5nZShbJ3ZhbHVlJ10sICh7IHZhbHVlIH0pID0+ICh7XG4gIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLmZpbHRlcih4ID0+IHgpIDogbnVsbCxcbn0pKVxuQHdpdGhTdGF0ZSgnY29sbGFwc2VkJywgJ3NldENvbGxhcHNlZCcsIHRydWUpXG5Ad2l0aFN0YXRlKCdzb3J0aW5nJywgJ3NldFNvcnRpbmcnLCAnbGVuZ3RoJylcbkB3aXRoU3RhdGUoJ3RhZ3MnLCAnc2V0VGFncycsIElOSVRJQUxfQVJSQVkpXG5Ad2l0aFN0YXRlKFxuICAnc2VsZWN0aW9uJyxcbiAgJ3NldFNlbGVjdGlvbicsXG4gICh7IHZhbHVlIH0pID0+ICh2YWx1ZSA/IHZhbHVlLm1hcCh2ID0+IHYuaWQpIDogW10pLFxuKVxuQHdpdGhQcm9wc09uQ2hhbmdlKFsnc2VsZWN0aW9uJywgJ2l0ZW1zJ10sICh7IHNlbGVjdGlvbiwgaXRlbXMgPSBbXSB9KSA9PiAoe1xuICBzZWxlY3RlZEl0ZW1zOiBpdGVtcy5maWx0ZXIoeCA9PiBzZWxlY3Rpb24uaW5jbHVkZXMoeC5pZCkpLFxufSkpXG5Ad2l0aFVwbG9hZFxuY2xhc3MgQ2xvdWRpbmFyeVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBmaWx0ZXJlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBzZWxlY3RlZElkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFkZFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVtb3ZlU2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZXRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtdWx0aTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZmlsdGVyZWRJdGVtczogW10sXG4gICAgc2VsZWN0ZWRJZHM6IFtdLFxuICAgIG11bHRpOiB0cnVlLFxuICAgIG9uQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICAgIGFkZFNlbGVjdGlvbjogdW5kZWZpbmVkLFxuICAgIHJlbW92ZVNlbGVjdGlvbjogdW5kZWZpbmVkLFxuICAgIHNldFNlbGVjdGlvbjogdW5kZWZpbmVkLFxuICAgIGZvcm1hdDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBzZWxlY3RlZEl0ZW1zID0gW10gfSkge1xuICAgIGNvbnN0IHRoaXNTZWxlY3Rpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMgfHwgW107XG4gICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoICE9PSB0aGlzU2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0aWFsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayA9ICh7IGlkIH0sIG11bHRpcGxlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGlvbiwgc2V0U2VsZWN0aW9uLCBtdWx0aSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChtdWx0aSAmJiBtdWx0aXBsZSkge1xuICAgICAgaWYgKHNlbGVjdGlvbi5maW5kSW5kZXgoc0lkID0+IHNJZCA9PT0gaWQpID09PSAtMSkge1xuICAgICAgICBzZXRTZWxlY3Rpb24oWy4uLnNlbGVjdGlvbiwgaWRdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGlvbihzZWxlY3Rpb24uZmlsdGVyKHggPT4geCAhPT0gaWQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0aW9uKFtpZF0pO1xuICAgIH1cbiAgfTtcblxuICBpbml0aWFsID0gdHJ1ZTtcblxuICByZW5kZXJNZW51ID0gKGtleXMgPSBbXSkgPT4ge1xuICAgIGNvbnN0IHsgZ29Sb290LCBzZXRUYWdzLCB0YWdzLCB0cmVlLCB1cGxvYWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoaWxkcmVuID0gdHJlZS5jaGlsZHJlbi5tYXAoYXBwID0+IChcbiAgICAgICAgPE1lbnUuTGlzdCBrZXk9e2FwcC5rZXl9IHRpdGxlPXthcHAua2V5fT5cbiAgICAgICAgICB7YXBwLmNoaWxkcmVuLm1hcChkaXIgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWdzKFtgJHthcHAua2V5fS8ke2Rpci5rZXl9YF0pfVxuICAgICAgICAgICAgICBrZXk9e2Rpci5rZXl9XG4gICAgICAgICAgICAgIGV4dHJhPXs8Yj57ZGlyLml0ZW1zLmxlbmd0aH0mbmJzcDsmbmJzcDs8L2I+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlyLmtleX1cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L01lbnUuTGlzdD5cbiAgICAgICkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBba2V5MF0gPSBrZXlzO1xuICAgICAgY29uc3QgW2FwcCwgZm9sZGVyXSA9IGtleTAuc3BsaXQoJy8nKTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRyZWUubWFwW2FwcF0ubWFwW2ZvbGRlcl07XG4gICAgICBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ubWFwKHRhZyA9PiAoXG4gICAgICAgIDxNZW51Lkxpc3RcbiAgICAgICAgICBrZXk9e3RhZy5rZXl9XG4gICAgICAgICAgdGl0bGU9e3RhZy5rZXl9XG4gICAgICAgICAgZXh0cmE9ezxiPnt0YWcuaXRlbXMubGVuZ3RofSZuYnNwOyZuYnNwOzwvYj59XG4gICAgICAgID5cbiAgICAgICAgICB7dGFnLmNoaWxkcmVuLm1hcChzdWJUYWcgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWdzKFtrZXkwLCBgJHt0YWcua2V5fS8ke3N1YlRhZy5rZXl9YF0pfVxuICAgICAgICAgICAgICBrZXk9e3N1YlRhZy5rZXl9XG4gICAgICAgICAgICAgIGFjdGl2ZT17dGFncy5pbmRleE9mKGAke3RhZy5rZXl9LyR7c3ViVGFnLmtleX1gKSAhPT0gLTF9XG4gICAgICAgICAgICAgIGV4dHJhPXs8Yj57c3ViVGFnLml0ZW1zLmxlbmd0aH0mbmJzcDsmbmJzcDs8L2I+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3ViVGFnLmtleX1cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L01lbnUuTGlzdD5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICBrZXk9e2tleXMuam9pbignfCcpfVxuICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICBvbkNsaWNrPXtnb1Jvb3R9XG4gICAgICAgICAgICBpY29uPXs8RmFQaWN0dXJlTyAvPn1cbiAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgPE1lbnUuRXh0cmEgb25DbGljaz17KCkgPT4ge319IGRpc2FibGVkPXshIWtleXMubGVuZ3RofSBsYXJnZT5cbiAgICAgICAgICAgICAgICA8VXBsb2FkIHsuLi51cGxvYWR9PlxuICAgICAgICAgICAgICAgICAgPEZhUGx1cyAvPlxuICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxuICAgICAgICAgICAgICA8L01lbnUuRXh0cmE+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWVkaWF0aGVrXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2tleXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8RmFDaGV2cm9uTGVmdCAvPn0gb25DbGljaz17KCkgPT4gc2V0VGFncyhbXSl9PlxuICAgICAgICAgICAgWnVyw7xja1xuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhZ3MsXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBzZXRDb2xsYXBzZWQsXG4gICAgICBzZWxlY3Rpb24sXG4gICAgICB0cmVlLFxuICAgICAgc2V0U2VsZWN0aW9uLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGluTW9kYWwsXG4gICAgICBtdWx0aSxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsb3NlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgW2tleTAsIGtleTFdID0gdGFncztcbiAgICBjb25zdCBbYXBwLCBmb2xkZXJdID0ga2V5MCA/IGtleTAuc3BsaXQoJy8nKSA6IFtdO1xuICAgIGNvbnN0IFtncm91cCwgdGFnXSA9IGtleTEgPyBrZXkxLnNwbGl0KCcvJykgOiBbXTtcbiAgICBjb25zdCBub2RlID0gYXBwICYmIGZvbGRlciA/IHRyZWUubWFwW2FwcF0ubWFwW2ZvbGRlcl0gOiB0cmVlO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPVxuICAgICAgZ3JvdXAgJiYgdGFnID8gbm9kZS5tYXBbZ3JvdXBdLm1hcFt0YWddLml0ZW1zIDogbm9kZS5pdGVtcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICBsZWZ0PXtpbk1vZGFsID8gMCA6IDcyfVxuICAgICAgICBtZW51PXtcbiAgICAgICAgICA8U3RhY2tlZE1lbnVcbiAgICAgICAgICAgIGtleXM9e3RhZ3MuZmlsdGVyKCh4LCBpKSA9PiBpIDwgMSl9XG4gICAgICAgICAgICByZW5kZXJNZW51PXt0aGlzLnJlbmRlck1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8R2FsbGVyeVxuICAgICAgICAgIHVzZUJvZHlTY3JvbGw9eyFpbk1vZGFsfVxuICAgICAgICAgIGtleT17dGFncy5qb2luKCd8Jyl9XG4gICAgICAgICAgaXRlbXM9e1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsICYmICF0YWdzLmxlbmd0aCAmJiBzZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICA/IHNlbGVjdGVkSXRlbXNcbiAgICAgICAgICAgICAgOiBmaWx0ZXJlZEl0ZW1zXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cbiAgICAgICAgICBpc0FjdGl2ZT17KHsgaWQgfSkgPT4gc2VsZWN0aW9uLmluZGV4T2YoaWQpICE9PSAtMX1cbiAgICAgICAgICBvblJlbW92ZT17KHsgaWQgfSkgPT4gc2V0U2VsZWN0aW9uKHNlbGVjdGlvbi5maWx0ZXIoeCA9PiBpZCAhPT0geCkpfVxuICAgICAgICAvPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgb3BlblxuICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgIGRpbT17ZmFsc2V9XG4gICAgICAgICAgcmlnaHRcbiAgICAgICAgICB3aWR0aD17Y29sbGFwc2VkID8gNzIgOiAyNDB9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgaWNvbj17Y29sbGFwc2VkICYmIDxMYWJlbD57c2VsZWN0ZWRJdGVtcy5sZW5ndGh9PC9MYWJlbD59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCZWFyYmVpdGVuXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgICAgIGhlYWRlckNvbG9yXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnUuU3BhY2U+XG4gICAgICAgICAgICAgIHtjb2xsYXBzZWQgJiZcbiAgICAgICAgICAgICAgICAodmFsdWUgfHwgc2VsZWN0ZWRJdGVtcyB8fCBbXSkubWFwKHYgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3YuaWR9XG4gICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxJbWFnZSB2YWx1ZT17dn0gd2lkdGg9ezYwfSBoZWlnaHQ9ezYwfSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxEZXRhaWxcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgc2VsZWN0ZWRJdGVtcyB8fCBbXX1cbiAgICAgICAgICAgICAgICBtdWx0aT17bXVsdGl9XG4gICAgICAgICAgICAgICAgZWRpdGFibGU9eyFpbk1vZGFsfVxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoeyBpZCB9KSA9PlxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbi5maWx0ZXIoeCA9PiBpZCAhPT0geCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9NZW51LlNwYWNlPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICB7IWNvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgICBjb2xsYXBzZWRcbiAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGxhcmdlIGljb249ezxMYWJlbD57c2VsZWN0ZWRJdGVtcy5sZW5ndGh9PC9MYWJlbD59PlxuICAgICAgICAgICAgICAgICAgU2VpdGUgYmVhcmJlaXRlblxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhlYWRlckNvbG9yPVwiZGFyazRcIlxuICAgICAgICAgICAgICBoZWFkZXJJbnZlcnRlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPEFudE1lbnUuVG9vbHRpcCBvbkNsaWNrPXsoKSA9PiB7fX0gaWNvbj17PEZhVGhlbWVpc2xlIC8+fT5cbiAgICAgICAgICAgICAgICBCZW5pLCBoaWVyIHNvbGwgZGVyIFNwZWljaGVyLUJ1dHRvbiBoaW4gZGVyIHNlbHRzYW1lcndlaXNlIG51blxuICAgICAgICAgICAgICAgIHdlZyBpc3QhIDspXG4gICAgICAgICAgICA8L0FudE1lbnUuVG9vbHRpcD4gKi99XG4gICAgICAgICAgICAgIHsvKiA8QW50TWVudS5Ub29sdGlwIG9uQ2xpY2s9eygpID0+IHt9fSBpY29uPXs8RmFPcHRpbk1vbnN0ZXIgLz59PlxuICAgICAgICAgICAgICAgIC4uIHVuZCBoaWVyIGvDtm5udGUgbMO2c2NoZW4gaGluIGFuc3RlbGxlIGRlciBDaGVja2JveCFcbiAgICAgICAgICAgICAgPC9BbnRNZW51LlRvb2x0aXA+ICovfVxuICAgICAgICAgICAgICB7ISFvbkNoYW5nZSAmJiAoXG4gICAgICAgICAgICAgICAgPEFudE1lbnUuVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2Uoc2VsZWN0ZWRJdGVtcyl9XG4gICAgICAgICAgICAgICAgICBpY29uPXs8RmFTYXZlIC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNwZWljaGVyblxuICAgICAgICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ISFvbkNsb3NlICYmIChcbiAgICAgICAgICAgICAgICA8QW50TWVudS5Ub29sdGlwIG9uQ2xpY2s9e29uQ2xvc2V9IGljb249ezxGYUNsb3NlIC8+fT5cbiAgICAgICAgICAgICAgICAgIEFiYnJlY2hlblxuICAgICAgICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENsb3VkaW5hcnlWaWV3O1xuIl19
