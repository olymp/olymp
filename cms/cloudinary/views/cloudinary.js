import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import _sortBy from 'lodash/sortBy';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPropsOnChange, withState } from 'recompose';

import { createComponent } from 'react-fela';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu, { StackedMenu } from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import FaChevronLeft from 'olymp-icons/lib/fa-chevron-left';
import FaPictureO from 'olymp-icons/lib/fa-picture-o';
import FaClose from 'olymp-icons/lib/fa-close';
import FaSave from 'olymp-icons/lib/fa-save';
import FaPlus from 'olymp-icons/lib/fa-plus';

import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import Gallery from './gallery';
import withUpload from './upload';
import Detail from '../detail';
import Image from '../image';
// import Dragzone from '../components/dragzone';

var EMPTY = 'Keine Tags';
var TRASH = 'Papierkorb';
var GENERAL = 'Allgemein';
var INITIAL_ARRAY = [];

var _ref3 = React.createElement('circle', { cx: '32', cy: '32', r: '31' });

var Label = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    '> circle': {
      fill: theme.dark5
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      p = _objectWithoutProperties(_ref2, ['children']);

  return React.createElement(
    'svg',
    _extends({
      width: '64',
      height: '64',
      viewBox: '0 0 64 64',
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1'
    }, p),
    _ref3,
    React.createElement(
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
    keys = _sortBy(keys, function (key) {
      return map[key].items.length;
    }).reverse();
  } else if (sorter === 'name') {
    keys = _sortBy(keys);
  }
  return keys.reduce(function (result, key) {
    var childs = addSortedChildren(map[key], sorter);
    childs.key = key;
    result.map[key] = childs;
    result.children.push(childs);
    return result;
  }, _extends({}, obj, { children: [], map: {} }));
};

var _ref11 = React.createElement(FaPictureO, null);

var _ref12 = React.createElement(FaPlus, null);

var _ref13 = React.createElement(FaChevronLeft, null);

var _ref22 = React.createElement(FaSave, null);

var _ref23 = React.createElement(FaClose, null);

var CloudinaryView = (_dec = withPropsOnChange(['items', 'search', 'format'], function (_ref4) {
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
}), _dec2 = withPropsOnChange(['sorting', 'tree'], function (_ref5) {
  var tree = _ref5.tree,
      sorting = _ref5.sorting,
      items = _ref5.items;
  return {
    tree: addSortedChildren({ map: tree, items: items }, sorting)
  };
}), _dec3 = withPropsOnChange(['value'], function (_ref6) {
  var value = _ref6.value;
  return {
    value: value ? value.filter(function (x) {
      return x;
    }) : null
  };
}), _dec4 = withState('collapsed', 'setCollapsed', true), _dec5 = withState('sorting', 'setSorting', 'length'), _dec6 = withState('tags', 'setTags', INITIAL_ARRAY), _dec7 = withState('selection', 'setSelection', function (_ref7) {
  var value = _ref7.value;
  return value ? value.map(function (v) {
    return v.id;
  }) : [];
}), _dec8 = withPropsOnChange(['selection', 'items'], function (_ref8) {
  var selection = _ref8.selection,
      _ref8$items = _ref8.items,
      items = _ref8$items === undefined ? [] : _ref8$items;
  return {
    selectedItems: items.filter(function (x) {
      return selection.includes(x.id);
    })
  };
}), queryMedias(_class = cloudinaryRequest(_class = cloudinaryRequestDone(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = withUpload(_class = (_temp2 = _class2 = function (_Component) {
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
          return React.createElement(
            Menu.List,
            { key: app.key, title: app.key },
            app.children.map(function (dir) {
              return React.createElement(
                Menu.Item,
                {
                  onClick: function onClick() {
                    return setTags([app.key + '/' + dir.key]);
                  },
                  key: dir.key,
                  extra: React.createElement(
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
          return React.createElement(
            Menu.List,
            {
              key: tag.key,
              title: tag.key,
              extra: React.createElement(
                'b',
                null,
                tag.items.length,
                '\xA0\xA0'
              )
            },
            tag.children.map(function (subTag) {
              return React.createElement(
                Menu.Item,
                {
                  onClick: function onClick() {
                    return setTags([key0, tag.key + '/' + subTag.key]);
                  },
                  key: subTag.key,
                  active: tags.indexOf(tag.key + '/' + subTag.key) !== -1,
                  extra: React.createElement(
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

      return React.createElement(
        Menu,
        {
          key: keys.join('|'),
          header: React.createElement(
            Menu.Item,
            {
              large: true,
              onClick: goRoot,
              icon: _ref11,
              extra: React.createElement(
                Menu.Extra,
                { onClick: function onClick() {}, disabled: !!keys.length, large: true },
                React.createElement(
                  _Upload,
                  upload,
                  _ref12
                )
              )
            },
            'Mediathek'
          )
        },
        keys.length > 0 && React.createElement(
          Menu.Item,
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

      return React.createElement(
        Sidebar,
        {
          left: inModal ? 0 : 72,
          menu: React.createElement(StackedMenu, {
            keys: tags.filter(function (x, i) {
              return i < 1;
            }),
            renderMenu: this.renderMenu
          })
        },
        React.createElement(Gallery, {
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
        React.createElement(
          Drawer,
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
          React.createElement(
            Menu,
            {
              collapsed: collapsed,
              header: React.createElement(
                Menu.Item,
                {
                  large: true,
                  icon: collapsed && React.createElement(
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
            React.createElement(
              Menu.Space,
              null,
              collapsed && (value || selectedItems || []).map(function (v) {
                return React.createElement(Menu.Item, {
                  key: v.id,
                  large: true,
                  icon: React.createElement(Image, { value: v, width: 60, height: 60 })
                });
              }),
              React.createElement(Detail, {
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
          !collapsed && React.createElement(
            Menu,
            {
              color: true,
              inverted: true,
              collapsed: true,
              header: React.createElement(
                Menu.Item,
                { large: true, icon: React.createElement(
                    Label,
                    null,
                    selectedItems.length
                  ) },
                'Seite bearbeiten'
              ),
              headerColor: 'dark4',
              headerInverted: true
            },
            !!onChange && React.createElement(
              AntMenu.Tooltip,
              {
                onClick: function onClick() {
                  return onChange(selectedItems);
                },
                icon: _ref22
              },
              'Speichern'
            ),
            !!onClose && React.createElement(
              AntMenu.Tooltip,
              { onClick: onClose, icon: _ref23 },
              'Abbrechen'
            )
          )
        )
      );
    }
  }]);

  return CloudinaryView;
}(Component), _class2.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  filteredItems: PropTypes.arrayOf(PropTypes.object),
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  addSelection: PropTypes.func,
  removeSelection: PropTypes.func,
  setSelection: PropTypes.func,
  format: PropTypes.string,
  multi: PropTypes.bool
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

export default CloudinaryView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvdmlld3MvY2xvdWRpbmFyeS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsIndpdGhTdGF0ZSIsImNyZWF0ZUNvbXBvbmVudCIsIlNpZGViYXIiLCJEcmF3ZXIiLCJNZW51IiwiU3RhY2tlZE1lbnUiLCJBbnRNZW51IiwicXVlcnlNZWRpYXMiLCJjbG91ZGluYXJ5UmVxdWVzdCIsImNsb3VkaW5hcnlSZXF1ZXN0RG9uZSIsIkdhbGxlcnkiLCJ3aXRoVXBsb2FkIiwiRGV0YWlsIiwiSW1hZ2UiLCJFTVBUWSIsIlRSQVNIIiwiR0VORVJBTCIsIklOSVRJQUxfQVJSQVkiLCJMYWJlbCIsInRoZW1lIiwiZmlsbCIsImRhcms1IiwiY2hpbGRyZW4iLCJwIiwiYWRkU29ydGVkQ2hpbGRyZW4iLCJvYmoiLCJzb3J0ZXIiLCJtYXAiLCJrZXlzIiwiT2JqZWN0Iiwia2V5IiwiaXRlbXMiLCJsZW5ndGgiLCJyZXZlcnNlIiwicmVkdWNlIiwicmVzdWx0IiwiY2hpbGRzIiwicHVzaCIsIkNsb3VkaW5hcnlWaWV3Iiwic2VhcmNoIiwiZm9ybWF0IiwiYXBwcyIsIml0ZW0iLCJhcHAiLCJwdWJsaWNJZCIsImluZGV4T2YiLCJzcGxpdCIsImYiLCJyZW1vdmVkIiwiZm9sZGVyIiwidG9Mb3dlckNhc2UiLCJ0YWdzIiwiZm9yRWFjaCIsInRhZyIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwiZmlyc3RQYXJ0Iiwic3Vic3RyIiwibGFzdFBhcnQiLCJ0cmVlIiwic29ydGluZyIsInZhbHVlIiwiZmlsdGVyIiwieCIsInYiLCJpZCIsInNlbGVjdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmNsdWRlcyIsIm9uQ2xpY2siLCJtdWx0aXBsZSIsInByb3BzIiwic2V0U2VsZWN0aW9uIiwibXVsdGkiLCJmaW5kSW5kZXgiLCJzSWQiLCJpbml0aWFsIiwicmVuZGVyTWVudSIsImdvUm9vdCIsInNldFRhZ3MiLCJ1cGxvYWQiLCJkaXIiLCJrZXkwIiwibm9kZSIsInN1YlRhZyIsImpvaW4iLCJ0aGlzU2VsZWN0aW9uIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaW5Nb2RhbCIsIm9uQ2hhbmdlIiwib25DbG9zZSIsImtleTEiLCJncm91cCIsImZpbHRlcmVkSXRlbXMiLCJpIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsInNlbGVjdGVkSWRzIiwic3RyaW5nIiwiZnVuYyIsImFkZFNlbGVjdGlvbiIsInJlbW92ZVNlbGVjdGlvbiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxpQkFBVCxFQUE0QkMsU0FBNUIsUUFBNkMsV0FBN0M7O0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsSUFBUCxJQUFlQyxXQUFmLFFBQWtDLGlCQUFsQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IscUJBQXBCOzs7Ozs7O0FBU0EsU0FBU0MsV0FBVCxFQUFzQkMsaUJBQXRCLEVBQXlDQyxxQkFBekMsUUFBc0UsUUFBdEU7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFdBQXBCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixVQUF2QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFVBQWxCO0FBQ0E7O0FBRUEsSUFBTUMsUUFBUSxZQUFkO0FBQ0EsSUFBTUMsUUFBUSxZQUFkO0FBQ0EsSUFBTUMsVUFBVSxXQUFoQjtBQUNBLElBQU1DLGdCQUFnQixFQUF0Qjs7WUFpQk0sZ0NBQVEsSUFBRyxJQUFYLEVBQWdCLElBQUcsSUFBbkIsRUFBd0Is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QUFpQnpHLFVBQVV1RyxJQVBWO0FBUWpCN0IsZ0JBQWMxRSxVQUFVdUcsSUFSUDtBQVNqQjdELFVBQVExQyxVQUFVc0csTUFURDtBQVVqQjNCLFNBQU8zRSxVQUFVMEc7QUFWQSxDLFVBYVpDLFksR0FBZTtBQUNwQjFFLFNBQU8sRUFEYTtBQUVwQitELGlCQUFlLEVBRks7QUFHcEJLLGVBQWEsRUFITztBQUlwQjFCLFNBQU8sSUFKYTtBQUtwQmtCLFdBQVNlLFNBTFc7QUFNcEJoQixZQUFVZ0IsU0FOVTtBQU9wQkosZ0JBQWNJLFNBUE07QUFRcEJILG1CQUFpQkcsU0FSRztBQVNwQmxDLGdCQUFja0MsU0FUTTtBQVVwQmxFLFVBQVFrRTtBQVZZLEM7O0FBNE94QixlQUFlcEUsY0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L3ZpZXdzL2Nsb3VkaW5hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IFNpZGViYXIsIERyYXdlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE1lbnUsIHsgU3RhY2tlZE1lbnUgfSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IEFudE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51L2FudCc7XG5pbXBvcnQge1xuICBGYUNoZXZyb25MZWZ0LFxuICBGYVBpY3R1cmVPLFxuICBGYUNsb3NlLFxuICBGYVNhdmUsXG4gIEZhUGx1cyxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHF1ZXJ5TWVkaWFzLCBjbG91ZGluYXJ5UmVxdWVzdCwgY2xvdWRpbmFyeVJlcXVlc3REb25lIH0gZnJvbSAnLi4vZ3FsJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vZ2FsbGVyeSc7XG5pbXBvcnQgd2l0aFVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XG5pbXBvcnQgRGV0YWlsIGZyb20gJy4uL2RldGFpbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1hZ2UnO1xuLy8gaW1wb3J0IERyYWd6b25lIGZyb20gJy4uL2NvbXBvbmVudHMvZHJhZ3pvbmUnO1xuXG5jb25zdCBFTVBUWSA9ICdLZWluZSBUYWdzJztcbmNvbnN0IFRSQVNIID0gJ1BhcGllcmtvcmInO1xuY29uc3QgR0VORVJBTCA9ICdBbGxnZW1laW4nO1xuY29uc3QgSU5JVElBTF9BUlJBWSA9IFtdO1xuXG5jb25zdCBMYWJlbCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAnPiBjaXJjbGUnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5kYXJrNSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2hpbGRyZW4sIC4uLnAgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiNjRcIlxuICAgICAgaGVpZ2h0PVwiNjRcIlxuICAgICAgdmlld0JveD1cIjAgMCA2NCA2NFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgey4uLnB9XG4gICAgPlxuICAgICAgPGNpcmNsZSBjeD1cIjMyXCIgY3k9XCIzMlwiIHI9XCIzMVwiIC8+XG4gICAgICA8dGV4dFxuICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgeD1cIjUwJVwiXG4gICAgICAgIHk9XCI1MCVcIlxuICAgICAgICBkeT1cIi4zNWVtXCJcbiAgICAgICAgZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZT1cIjQ1cHhcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHQ+XG4gICAgPC9zdmc+XG4gICksXG4pO1xuXG5jb25zdCBhZGRTb3J0ZWRDaGlsZHJlbiA9IChvYmosIHNvcnRlciA9ICdsZW5ndGgnKSA9PiB7XG4gIGlmICghb2JqLm1hcCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgY29uc3QgeyBtYXAgfSA9IG9iajtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhtYXApO1xuICBpZiAoc29ydGVyID09PSAnbGVuZ3RoJykge1xuICAgIGtleXMgPSBzb3J0Qnkoa2V5cywga2V5ID0+IG1hcFtrZXldLml0ZW1zLmxlbmd0aCkucmV2ZXJzZSgpO1xuICB9IGVsc2UgaWYgKHNvcnRlciA9PT0gJ25hbWUnKSB7XG4gICAga2V5cyA9IHNvcnRCeShrZXlzKTtcbiAgfVxuICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZHMgPSBhZGRTb3J0ZWRDaGlsZHJlbihtYXBba2V5XSwgc29ydGVyKTtcbiAgICAgIGNoaWxkcy5rZXkgPSBrZXk7XG4gICAgICByZXN1bHQubWFwW2tleV0gPSBjaGlsZHM7XG4gICAgICByZXN1bHQuY2hpbGRyZW4ucHVzaChjaGlsZHMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHsgLi4ub2JqLCBjaGlsZHJlbjogW10sIG1hcDoge30gfSxcbiAgKTtcbn07XG5cbkBxdWVyeU1lZGlhc1xuQGNsb3VkaW5hcnlSZXF1ZXN0XG5AY2xvdWRpbmFyeVJlcXVlc3REb25lXG5Ad2l0aFByb3BzT25DaGFuZ2UoXG4gIFsnaXRlbXMnLCAnc2VhcmNoJywgJ2Zvcm1hdCddLFxuICAoeyBpdGVtcywgc2VhcmNoLCBmb3JtYXQgfSkgPT4ge1xuICAgIGNvbnN0IGFwcHMgPSBpdGVtcy5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgaWYgKGZvcm1hdCAmJiBpdGVtLmZvcm1hdCAhPT0gZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCBhcHAgPVxuICAgICAgICAoISFpdGVtLnB1YmxpY0lkICYmXG4gICAgICAgICAgaXRlbS5wdWJsaWNJZC5pbmRleE9mKCcvJykgIT09IC0xICYmXG4gICAgICAgICAgaXRlbS5wdWJsaWNJZC5zcGxpdCgnLycpWzBdKSB8fFxuICAgICAgICAnZ3prJztcbiAgICAgIGNvbnN0IGYgPSBpdGVtLnJlbW92ZWQgPyBUUkFTSCA6IGl0ZW0uZm9sZGVyIHx8IEdFTkVSQUw7XG4gICAgICBpZiAoZiAmJiBzZWFyY2ggJiYgZi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHRbYXBwXSkge1xuICAgICAgICByZXN1bHRbYXBwXSA9IHtcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdFthcHBdLm1hcFtmXSkge1xuICAgICAgICByZXN1bHRbYXBwXS5tYXBbZl0gPSB7XG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIG1hcDoge30sXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0W2FwcF0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIHJlc3VsdFthcHBdLm1hcFtmXS5pdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICBjb25zdCB0YWdzID0gcmVzdWx0W2FwcF0ubWFwW2ZdLm1hcDtcbiAgICAgIGlmICghaXRlbS50YWdzIHx8ICFpdGVtLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGFnc1tHRU5FUkFMXSkge1xuICAgICAgICAgIHRhZ3NbR0VORVJBTF0gPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YWdzW0dFTkVSQUxdLm1hcFtFTVBUWV0pIHtcbiAgICAgICAgICB0YWdzW0dFTkVSQUxdLm1hcFtFTVBUWV0gPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGFnc1tHRU5FUkFMXS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0YWdzW0dFTkVSQUxdLm1hcFtFTVBUWV0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0udGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2VhcmNoICYmXG4gICAgICAgICAgICB0YWcudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGFnLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID1cbiAgICAgICAgICAgIGxhc3RJbmRleCAhPT0gLTEgPyB0YWcuc3Vic3RyKDAsIGxhc3RJbmRleCkgOiBHRU5FUkFMO1xuICAgICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gbGFzdEluZGV4ICE9PSAtMSA/IHRhZy5zdWJzdHIobGFzdEluZGV4ICsgMSkgOiB0YWc7XG4gICAgICAgICAgaWYgKCF0YWdzW2ZpcnN0UGFydF0pIHtcbiAgICAgICAgICAgIHRhZ3NbZmlyc3RQYXJ0XSA9IHtcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRhZ3NbZmlyc3RQYXJ0XS5tYXBbbGFzdFBhcnRdKSB7XG4gICAgICAgICAgICB0YWdzW2ZpcnN0UGFydF0ubWFwW2xhc3RQYXJ0XSA9IHtcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWdzW2ZpcnN0UGFydF0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB0YWdzW2ZpcnN0UGFydF0ubWFwW2xhc3RQYXJ0XS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJlZTogYXBwcyxcbiAgICB9O1xuICB9LFxuKVxuQHdpdGhQcm9wc09uQ2hhbmdlKFsnc29ydGluZycsICd0cmVlJ10sICh7IHRyZWUsIHNvcnRpbmcsIGl0ZW1zIH0pID0+ICh7XG4gIHRyZWU6IGFkZFNvcnRlZENoaWxkcmVuKHsgbWFwOiB0cmVlLCBpdGVtcyB9LCBzb3J0aW5nKSxcbn0pKVxuQHdpdGhQcm9wc09uQ2hhbmdlKFsndmFsdWUnXSwgKHsgdmFsdWUgfSkgPT4gKHtcbiAgdmFsdWU6IHZhbHVlID8gdmFsdWUuZmlsdGVyKHggPT4geCkgOiBudWxsLFxufSkpXG5Ad2l0aFN0YXRlKCdjb2xsYXBzZWQnLCAnc2V0Q29sbGFwc2VkJywgdHJ1ZSlcbkB3aXRoU3RhdGUoJ3NvcnRpbmcnLCAnc2V0U29ydGluZycsICdsZW5ndGgnKVxuQHdpdGhTdGF0ZSgndGFncycsICdzZXRUYWdzJywgSU5JVElBTF9BUlJBWSlcbkB3aXRoU3RhdGUoXG4gICdzZWxlY3Rpb24nLFxuICAnc2V0U2VsZWN0aW9uJyxcbiAgKHsgdmFsdWUgfSkgPT4gKHZhbHVlID8gdmFsdWUubWFwKHYgPT4gdi5pZCkgOiBbXSksXG4pXG5Ad2l0aFByb3BzT25DaGFuZ2UoWydzZWxlY3Rpb24nLCAnaXRlbXMnXSwgKHsgc2VsZWN0aW9uLCBpdGVtcyA9IFtdIH0pID0+ICh7XG4gIHNlbGVjdGVkSXRlbXM6IGl0ZW1zLmZpbHRlcih4ID0+IHNlbGVjdGlvbi5pbmNsdWRlcyh4LmlkKSksXG59KSlcbkB3aXRoVXBsb2FkXG5jbGFzcyBDbG91ZGluYXJ5VmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGZpbHRlcmVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGVkSWRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWRkU2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW1vdmVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIHNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG11bHRpOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBmaWx0ZXJlZEl0ZW1zOiBbXSxcbiAgICBzZWxlY3RlZElkczogW10sXG4gICAgbXVsdGk6IHRydWUsXG4gICAgb25DbG9zZTogdW5kZWZpbmVkLFxuICAgIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gICAgYWRkU2VsZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgcmVtb3ZlU2VsZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgc2V0U2VsZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgZm9ybWF0OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHNlbGVjdGVkSXRlbXMgPSBbXSB9KSB7XG4gICAgY29uc3QgdGhpc1NlbGVjdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyB8fCBbXTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggIT09IHRoaXNTZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRpYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrID0gKHsgaWQgfSwgbXVsdGlwbGUgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb24sIG11bHRpIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG11bHRpICYmIG11bHRpcGxlKSB7XG4gICAgICBpZiAoc2VsZWN0aW9uLmZpbmRJbmRleChzSWQgPT4gc0lkID09PSBpZCkgPT09IC0xKSB7XG4gICAgICAgIHNldFNlbGVjdGlvbihbLi4uc2VsZWN0aW9uLCBpZF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbi5maWx0ZXIoeCA9PiB4ICE9PSBpZCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3Rpb24oW2lkXSk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRpYWwgPSB0cnVlO1xuXG4gIHJlbmRlck1lbnUgPSAoa2V5cyA9IFtdKSA9PiB7XG4gICAgY29uc3QgeyBnb1Jvb3QsIHNldFRhZ3MsIHRhZ3MsIHRyZWUsIHVwbG9hZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hpbGRyZW4gPSB0cmVlLmNoaWxkcmVuLm1hcChhcHAgPT4gKFxuICAgICAgICA8TWVudS5MaXN0IGtleT17YXBwLmtleX0gdGl0bGU9e2FwcC5rZXl9PlxuICAgICAgICAgIHthcHAuY2hpbGRyZW4ubWFwKGRpciA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhZ3MoW2Ake2FwcC5rZXl9LyR7ZGlyLmtleX1gXSl9XG4gICAgICAgICAgICAgIGtleT17ZGlyLmtleX1cbiAgICAgICAgICAgICAgZXh0cmE9ezxiPntkaXIuaXRlbXMubGVuZ3RofSZuYnNwOyZuYnNwOzwvYj59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXIua2V5fVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTWVudS5MaXN0PlxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtrZXkwXSA9IGtleXM7XG4gICAgICBjb25zdCBbYXBwLCBmb2xkZXJdID0ga2V5MC5zcGxpdCgnLycpO1xuXG4gICAgICBjb25zdCBub2RlID0gdHJlZS5tYXBbYXBwXS5tYXBbZm9sZGVyXTtcbiAgICAgIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAodGFnID0+IChcbiAgICAgICAgPE1lbnUuTGlzdFxuICAgICAgICAgIGtleT17dGFnLmtleX1cbiAgICAgICAgICB0aXRsZT17dGFnLmtleX1cbiAgICAgICAgICBleHRyYT17PGI+e3RhZy5pdGVtcy5sZW5ndGh9Jm5ic3A7Jm5ic3A7PC9iPn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0YWcuY2hpbGRyZW4ubWFwKHN1YlRhZyA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhZ3MoW2tleTAsIGAke3RhZy5rZXl9LyR7c3ViVGFnLmtleX1gXSl9XG4gICAgICAgICAgICAgIGtleT17c3ViVGFnLmtleX1cbiAgICAgICAgICAgICAgYWN0aXZlPXt0YWdzLmluZGV4T2YoYCR7dGFnLmtleX0vJHtzdWJUYWcua2V5fWApICE9PSAtMX1cbiAgICAgICAgICAgICAgZXh0cmE9ezxiPntzdWJUYWcuaXRlbXMubGVuZ3RofSZuYnNwOyZuYnNwOzwvYj59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdWJUYWcua2V5fVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTWVudS5MaXN0PlxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51XG4gICAgICAgIGtleT17a2V5cy5qb2luKCd8Jyl9XG4gICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvUm9vdH1cbiAgICAgICAgICAgIGljb249ezxGYVBpY3R1cmVPIC8+fVxuICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICA8TWVudS5FeHRyYSBvbkNsaWNrPXsoKSA9PiB7fX0gZGlzYWJsZWQ9eyEha2V5cy5sZW5ndGh9IGxhcmdlPlxuICAgICAgICAgICAgICAgIDxVcGxvYWQgey4uLnVwbG9hZH0+XG4gICAgICAgICAgICAgICAgICA8RmFQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9VcGxvYWQ+XG4gICAgICAgICAgICAgIDwvTWVudS5FeHRyYT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNZWRpYXRoZWtcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7a2V5cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxGYUNoZXZyb25MZWZ0IC8+fSBvbkNsaWNrPXsoKSA9PiBzZXRUYWdzKFtdKX0+XG4gICAgICAgICAgICBadXLDvGNrXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWVudT5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFncyxcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIHNldENvbGxhcHNlZCxcbiAgICAgIHNlbGVjdGlvbixcbiAgICAgIHRyZWUsXG4gICAgICBzZXRTZWxlY3Rpb24sXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaW5Nb2RhbCxcbiAgICAgIG11bHRpLFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2xvc2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBba2V5MCwga2V5MV0gPSB0YWdzO1xuICAgIGNvbnN0IFthcHAsIGZvbGRlcl0gPSBrZXkwID8ga2V5MC5zcGxpdCgnLycpIDogW107XG4gICAgY29uc3QgW2dyb3VwLCB0YWddID0ga2V5MSA/IGtleTEuc3BsaXQoJy8nKSA6IFtdO1xuICAgIGNvbnN0IG5vZGUgPSBhcHAgJiYgZm9sZGVyID8gdHJlZS5tYXBbYXBwXS5tYXBbZm9sZGVyXSA6IHRyZWU7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9XG4gICAgICBncm91cCAmJiB0YWcgPyBub2RlLm1hcFtncm91cF0ubWFwW3RhZ10uaXRlbXMgOiBub2RlLml0ZW1zO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGxlZnQ9e2luTW9kYWwgPyAwIDogNzJ9XG4gICAgICAgIG1lbnU9e1xuICAgICAgICAgIDxTdGFja2VkTWVudVxuICAgICAgICAgICAga2V5cz17dGFncy5maWx0ZXIoKHgsIGkpID0+IGkgPCAxKX1cbiAgICAgICAgICAgIHJlbmRlck1lbnU9e3RoaXMucmVuZGVyTWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxHYWxsZXJ5XG4gICAgICAgICAgdXNlQm9keVNjcm9sbD17IWluTW9kYWx9XG4gICAgICAgICAga2V5PXt0YWdzLmpvaW4oJ3wnKX1cbiAgICAgICAgICBpdGVtcz17XG4gICAgICAgICAgICB0aGlzLmluaXRpYWwgJiYgIXRhZ3MubGVuZ3RoICYmIHNlbGVjdGVkSXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgID8gc2VsZWN0ZWRJdGVtc1xuICAgICAgICAgICAgICA6IGZpbHRlcmVkSXRlbXNcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxuICAgICAgICAgIGlzQWN0aXZlPXsoeyBpZCB9KSA9PiBzZWxlY3Rpb24uaW5kZXhPZihpZCkgIT09IC0xfVxuICAgICAgICAgIG9uUmVtb3ZlPXsoeyBpZCB9KSA9PiBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLmZpbHRlcih4ID0+IGlkICE9PSB4KSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICBvcGVuXG4gICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgZGltPXtmYWxzZX1cbiAgICAgICAgICByaWdodFxuICAgICAgICAgIHdpZHRoPXtjb2xsYXBzZWQgPyA3MiA6IDI0MH1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICBpY29uPXtjb2xsYXBzZWQgJiYgPExhYmVsPntzZWxlY3RlZEl0ZW1zLmxlbmd0aH08L0xhYmVsPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJlYXJiZWl0ZW5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJJbnZlcnRlZFxuICAgICAgICAgICAgaGVhZGVyQ29sb3JcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudS5TcGFjZT5cbiAgICAgICAgICAgICAge2NvbGxhcHNlZCAmJlxuICAgICAgICAgICAgICAgICh2YWx1ZSB8fCBzZWxlY3RlZEl0ZW1zIHx8IFtdKS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17di5pZH1cbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PEltYWdlIHZhbHVlPXt2fSB3aWR0aD17NjB9IGhlaWdodD17NjB9IC8+fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPERldGFpbFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBzZWxlY3RlZEl0ZW1zIHx8IFtdfVxuICAgICAgICAgICAgICAgIG11bHRpPXttdWx0aX1cbiAgICAgICAgICAgICAgICBlZGl0YWJsZT17IWluTW9kYWx9XG4gICAgICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eyh7IGlkIH0pID0+XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLmZpbHRlcih4ID0+IGlkICE9PSB4KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01lbnUuU3BhY2U+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIHshY29sbGFwc2VkICYmIChcbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgIGNvbGxhcHNlZFxuICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbGFyZ2UgaWNvbj17PExhYmVsPntzZWxlY3RlZEl0ZW1zLmxlbmd0aH08L0xhYmVsPn0+XG4gICAgICAgICAgICAgICAgICBTZWl0ZSBiZWFyYmVpdGVuXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGVhZGVyQ29sb3I9XCJkYXJrNFwiXG4gICAgICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiA8QW50TWVudS5Ub29sdGlwIG9uQ2xpY2s9eygpID0+IHt9fSBpY29uPXs8RmFUaGVtZWlzbGUgLz59PlxuICAgICAgICAgICAgICAgIEJlbmksIGhpZXIgc29sbCBkZXIgU3BlaWNoZXItQnV0dG9uIGhpbiBkZXIgc2VsdHNhbWVyd2Vpc2UgbnVuXG4gICAgICAgICAgICAgICAgd2VnIGlzdCEgOylcbiAgICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPiAqL31cbiAgICAgICAgICAgICAgey8qIDxBbnRNZW51LlRvb2x0aXAgb25DbGljaz17KCkgPT4ge319IGljb249ezxGYU9wdGluTW9uc3RlciAvPn0+XG4gICAgICAgICAgICAgICAgLi4gdW5kIGhpZXIga8O2bm50ZSBsw7ZzY2hlbiBoaW4gYW5zdGVsbGUgZGVyIENoZWNrYm94IVxuICAgICAgICAgICAgICA8L0FudE1lbnUuVG9vbHRpcD4gKi99XG4gICAgICAgICAgICAgIHshIW9uQ2hhbmdlICYmIChcbiAgICAgICAgICAgICAgICA8QW50TWVudS5Ub29sdGlwXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShzZWxlY3RlZEl0ZW1zKX1cbiAgICAgICAgICAgICAgICAgIGljb249ezxGYVNhdmUgLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3BlaWNoZXJuXG4gICAgICAgICAgICAgICAgPC9BbnRNZW51LlRvb2x0aXA+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshIW9uQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICAgIDxBbnRNZW51LlRvb2x0aXAgb25DbGljaz17b25DbG9zZX0gaWNvbj17PEZhQ2xvc2UgLz59PlxuICAgICAgICAgICAgICAgICAgQWJicmVjaGVuXG4gICAgICAgICAgICAgICAgPC9BbnRNZW51LlRvb2x0aXA+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2xvdWRpbmFyeVZpZXc7XG4iXX0=
