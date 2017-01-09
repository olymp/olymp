'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OptionalLink = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query fileList {\n    items: fileList {\n      ', '\n    }\n  }\n'], ['\n  query fileList {\n    items: fileList {\n      ', '\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

var _antd = require('antd');

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var OptionalLink = exports.OptionalLink = function OptionalLink(_ref) {
  var to = _ref.to,
      _onClick = _ref.onClick,
      arg = _ref.arg,
      rest = _objectWithoutProperties(_ref, ['to', 'onClick', 'arg']);

  if (to && typeof to === 'function' && to(arg)) return _react2.default.createElement(_olymp.Link, _extends({}, rest, { to: to(arg) }));else if (to && typeof to !== 'function') return _react2.default.createElement(_olymp.Link, _extends({}, rest, { to: to }));
  return _react2.default.createElement('a', _extends({ href: 'javascript:;', onClick: function onClick() {
      return _onClick(arg);
    } }, rest));
};

var getTagTree = function getTagTree(images) {
  var tree = {};
  var createTreeItem = function createTreeItem(image, treeNode, iterateTags) {
    var prevTags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var tempTreeNode = _extends({}, treeNode);

    (iterateTags || []).forEach(function (currentTag) {
      // Wenn nicht vorhanden, neuen Knoten im Tree anlegen
      if (!tempTreeNode[currentTag]) {
        tempTreeNode[currentTag] = {
          label: currentTag,
          value: currentTag,
          childrenAsObj: {},
          images: []
        };
      }

      var nextTags = (iterateTags || []).filter(function (tag) {
        return tag !== currentTag;
      });
      if (nextTags.length === 0) {
        tempTreeNode[currentTag].images.push(image);
      } else {
        tempTreeNode[currentTag].childrenAsObj = createTreeItem(image, tempTreeNode[currentTag].childrenAsObj, nextTags, [].concat(_toConsumableArray(prevTags), [currentTag]));
      }
    });

    return tempTreeNode;
  };

  images.forEach(function (image) {
    tree = createTreeItem(image, tree, image.tags);
  });

  var mapOverTree = function mapOverTree(children) {
    return Object.keys(children).map(function (key) {
      var test = mapOverTree(children[key].childrenAsObj);

      if (test.length) {
        children[key].children = test;
      }

      return children[key];
    });
  };

  return {
    children: mapOverTree(tree),
    images: images.filter(function (image) {
      return !image.tags || !image.tags.length;
    })
  };
};

var getNode = function getNode(tree, tags) {
  if (tags.length) {
    var nextTree = (tree.children || []).filter(function (item) {
      return item.label === tags[0];
    })[0];
    if (nextTree) return getNode(nextTree, tags.filter(function (tag, index) {
      return index;
    }));
  }return tree;
};

var attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';
var MediaList = (_dec = (0, _olymp.graphql)((0, _olymp.gql)(_templateObject, attributes)), (0, _olymp.withApollo)(_class = _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(MediaList, _Component);

  function MediaList() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MediaList.__proto__ || Object.getPrototypeOf(MediaList)).call.apply(_ref2, [this].concat(args))), _this), _this.onUploadClick = function () {
      // todo: const { dropzone } = this.refs;
      // dropzone.open();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediaList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onImageChange = _props.onImageChange,
          onTagsFilterChange = _props.onTagsFilterChange,
          onSolutionFilterChange = _props.onSolutionFilterChange,
          onSourceFilterChange = _props.onSourceFilterChange,
          onTypeFilterChange = _props.onTypeFilterChange,
          onResetFilters = _props.onResetFilters,
          onSortByChange = _props.onSortByChange,
          onShowAll = _props.onShowAll,
          showAll = _props.showAll,
          tags = _props.tags,
          solution = _props.solution,
          source = _props.source,
          type = _props.type,
          sortByState = _props.sortByState,
          uploadLink = _props.uploadLink;
      var _props$data = this.props.data,
          loading = _props$data.loading,
          items = _props$data.items;


      var filteredItems = void 0;

      // Auflösungs-Filter
      var solutionString = solution && solution.length ? solution[0] : undefined;
      switch (solutionString) {
        case 'Hohe Auflösung':
          filteredItems = items.filter(function (item) {
            return item.height * item.width > 500000;
          });
          break;

        case 'Niedrige Auflösung':
          filteredItems = items.filter(function (item) {
            return item.height * item.width <= 500000;
          });
          break;

        default:
          filteredItems = items;
      }

      // Quellen-Filter
      if (source && source.length) {
        filteredItems = filteredItems.filter(function (item) {
          return item.source === source[0] || !item.source && source[0] === 'Keine Quelle';
        });
      }

      // Type-Filter
      if (type && type.length) {
        filteredItems = filteredItems.filter(function (item) {
          return item.format === type[0] || type[0] === 'Andere';
        });
      }

      // Sortierung
      var sortByKey = sortByState && sortByState.length ? sortByState[0] : undefined;
      switch (sortByKey) {
        case 'Name':
          sortByKey = 'label';
          break;

        case 'Auflösung':
          sortByKey = function sortByKey(item) {
            return item.height * item.width;
          };
          break;

        case 'Höhe':
          sortByKey = function sortByKey(item) {
            return item.height;
          };
          break;

        case 'Breite':
          sortByKey = function sortByKey(item) {
            return item.width;
          };
          break;

        case 'Hinzugefügt':
          sortByKey = function sortByKey(item) {
            return item.createdAt;
          };
          break;

        default:
          sortByKey = 'label';
      }
      sortByKey = [sortByKey];

      if (loading || !filteredItems) return _react2.default.createElement(_antd.Spin, null);

      // Bisher gefilterte Ergebnisse zwischenspiechern für "Alle-Ansicht"
      // (dort kann man nicht nach tags filtern, aber nach dem Rest)
      var preFilteredItems = filteredItems;

      // Bilder aus allen Unterordnern holen
      var getDirectory = function getDirectory(_ref3) {
        var label = _ref3.label,
            images = _ref3.images,
            children = _ref3.children;

        var allImages = [].concat(_toConsumableArray(images));
        var getAllImages = function getAllImages(children) {
          return children && children.length ? children.forEach(function (image) {
            image.images.forEach(function (item) {
              return allImages.push(item);
            });
            getAllImages(image.children);
          }) : undefined;
        };
        getAllImages(children);

        // Bilder solange wiederholen, bis auf jeden Fall 9 Bilder im Ordner angezeigt werden
        var dirImages = [];
        var fillWithImages = function fillWithImages(images) {
          images.map(function (image) {
            return dirImages.push(image);
          });
          if (dirImages.length < 9) {
            fillWithImages(images);
          }
        };
        fillWithImages(allImages.filter(function (item, index) {
          return index < 9;
        }));

        return _react2.default.createElement(
          'div',
          { key: label, className: 'card card-block directory', onClick: function onClick() {
              return onTagsFilterChange([].concat(_toConsumableArray(tags.filter(function (tag) {
                return tag !== label;
              })), [label]));
            } },
          _react2.default.createElement(
            'div',
            { className: 'overlay' },
            _react2.default.createElement(
              'h6',
              null,
              label,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'small',
                null,
                '(',
                allImages.length,
                ')'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'boxed' },
            dirImages.map(function (_ref4, index) {
              var url = _ref4.url;
              return _react2.default.createElement('img', { key: index, alt: url, src: (0, _olymp.cloudinaryUrl)(url, { width: 100, height: 100 }) });
            })
          )
        );
      };

      var tree = getTagTree(filteredItems);
      var currentNode = getNode(tree, tags);
      var directories = currentNode && currentNode.children ? (0, _sortBy2.default)(currentNode.children, 'label').map(getDirectory) : undefined;

      var images = currentNode && currentNode.images ? (0, _sortBy2.default)(showAll ? preFilteredItems : currentNode.images, sortByKey).map(function (item) {
        return _extends({}, item, {
          src: item.url,
          thumbnail: (0, _olymp.cloudinaryUrl)(item.url, { maxWidth: 500, maxHeight: 500 }),
          thumbnailWidth: 100,
          thumbnailHeight: 100 * (item.height / item.width)
        });
      }).map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'card card-block file ' + (false ? 'selected' : ''), onClick: function onClick() {
              return onImageChange(item);
            } },
          _react2.default.createElement('img', { alt: item.caption, className: 'boxed', src: item.thumbnail }),
          item.format === 'pdf' ? _react2.default.createElement(
            'span',
            { className: 'label' },
            _react2.default.createElement(_antd.Icon, { type: 'file-pdf' })
          ) : undefined
        );
      }) : undefined;

      // Auflösungen/Quellen zusammensuchen
      var solutions = {};
      var sources = {};
      var types = {};
      var getOtherFilters = function getOtherFilters(tree) {
        (tree.images || []).forEach(function (item) {
          var solution = item.width * item.height < 500000 ? 'Niedrige Auflösung' : 'Hohe Auflösung';
          if (!solutions[solution]) {
            solutions[solution] = 0;
          }
          solutions[solution] += 1;

          var source = item.source || 'Keine Quelle';
          if (!sources[source]) {
            sources[source] = 0;
          }
          sources[source] += 1;

          var type = item.format || 'Andere';
          if (!types[type]) {
            types[type] = 0;
          }
          types[type] += 1;
        });

        (tree.children || []).forEach(function (item) {
          return getOtherFilters(item);
        });
      };
      getOtherFilters(currentNode);

      return _react2.default.createElement(
        'div',
        { className: 'olymp-media' },
        _react2.default.createElement(
          _antd.Affix,
          null,
          _react2.default.createElement(
            _antd.Menu,
            {
              selectedKeys: ['0'],
              mode: 'horizontal',
              theme: 'dark',
              className: 'olymp-submenu'
            },
            _react2.default.createElement(
              _antd.Menu,
              { theme: 'dark' },
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'tags' },
                _react2.default.createElement(
                  _antd.Cascader,
                  {
                    options: (0, _sortBy2.default)(tree.children, 'label'),
                    defaultValue: tags,
                    value: tags,
                    changeOnSelect: true,
                    onChange: onTagsFilterChange
                  },
                  _react2.default.createElement(
                    'span',
                    null,
                    tags && tags.length ? tags.join(' > ') : 'Tags'
                  )
                ),
                tags && tags.length ? _react2.default.createElement('i', { className: 'anticon anticon-cross-circle', style: { paddingLeft: '5px' }, onClick: function onClick() {
                    return onTagsFilterChange();
                  } }) : undefined
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'solution' },
                _react2.default.createElement(
                  _antd.Cascader,
                  {
                    options: [].concat(_toConsumableArray(Object.keys(solutions).map(function (key) {
                      return {
                        value: key,
                        label: key + ' (' + solutions[key] + ')'
                      };
                    }))),
                    defaultValue: solution,
                    value: solution,
                    onChange: onSolutionFilterChange
                  },
                  _react2.default.createElement(
                    'span',
                    null,
                    solution && solution.length ? solution[0] : 'Auflösung'
                  )
                ),
                solution && solution.length ? _react2.default.createElement('i', { className: 'anticon anticon-cross-circle', style: { paddingLeft: '5px' }, onClick: function onClick() {
                    return onSolutionFilterChange([]);
                  } }) : undefined
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'source' },
                _react2.default.createElement(
                  _antd.Cascader,
                  {
                    options: [].concat(_toConsumableArray(Object.keys(sources).map(function (key) {
                      return {
                        value: key,
                        label: key + ' (' + sources[key] + ')'
                      };
                    }))),
                    defaultValue: source,
                    value: source,
                    onChange: onSourceFilterChange
                  },
                  _react2.default.createElement(
                    'span',
                    null,
                    source && source.length ? source[0] : 'Quelle'
                  )
                ),
                source && source.length ? _react2.default.createElement('i', { className: 'anticon anticon-cross-circle', style: { paddingLeft: '5px' }, onClick: function onClick() {
                    return onSourceFilterChange([]);
                  } }) : undefined
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'type' },
                _react2.default.createElement(
                  _antd.Cascader,
                  {
                    options: [].concat(_toConsumableArray(Object.keys(types).map(function (key) {
                      return {
                        value: key,
                        label: key + ' (' + types[key] + ')'
                      };
                    }))),
                    defaultValue: type,
                    value: type,
                    onChange: onTypeFilterChange
                  },
                  _react2.default.createElement(
                    'span',
                    null,
                    type && type.length ? type[0] : 'Typ'
                  )
                ),
                type && type.length ? _react2.default.createElement('i', { className: 'anticon anticon-cross-circle', style: { paddingLeft: '5px' }, onClick: function onClick() {
                    return onTypeFilterChange([]);
                  } }) : undefined
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'sortBy', style: { float: 'right' } },
                _react2.default.createElement(
                  _antd.Cascader,
                  {
                    options: [{
                      value: 'Name',
                      label: 'Name'
                    }, {
                      value: 'Hinzugefügt',
                      label: 'Hinzugefügt'
                    }, {
                      value: 'Auflösung',
                      label: 'Auflösung'
                    }, {
                      value: 'Höhe',
                      label: 'Höhe'
                    }, {
                      value: 'Breite',
                      label: 'Breite'
                    }],
                    onChange: onSortByChange
                  },
                  _react2.default.createElement(
                    'span',
                    null,
                    sortByState && sortByState.length ? sortByState[0] : 'Name'
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'add', style: { float: 'right' } },
                uploadLink(_react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                  'Hinzuf\xFCgen'
                ))
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'olymp-container' },
          showAll || tags.length ? _react2.default.createElement(
            'div',
            { className: 'card card-block directory', onClick: /* onResetFilters */function onClick() {
                return onTagsFilterChange([].concat(_toConsumableArray(tags)).slice(0, -1));
              } },
            _react2.default.createElement(
              'div',
              { className: 'overlay' },
              _react2.default.createElement(
                'h6',
                null,
                _react2.default.createElement('i', { className: 'fa fa-rotate-left' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'boxed' },
              tree.images.filter(function (item, index) {
                return index < 9;
              }).map(function (_ref5) {
                var id = _ref5.id,
                    url = _ref5.url;
                return _react2.default.createElement('img', { key: id, alt: url, src: (0, _olymp.cloudinaryUrl)(url, { width: 100, height: 100 }) });
              })
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'card card-block directory', onClick: function onClick() {
                return onShowAll();
              } },
            _react2.default.createElement(
              'div',
              { className: 'overlay' },
              _react2.default.createElement(
                'h6',
                null,
                'Alle',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'small',
                  null,
                  '(',
                  items.length,
                  ')'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'boxed' },
              tree.images.filter(function (item, index) {
                return index < 9;
              }).map(function (_ref6) {
                var id = _ref6.id,
                    url = _ref6.url;
                return _react2.default.createElement('img', { key: id, alt: url, src: (0, _olymp.cloudinaryUrl)(url, { width: 100, height: 100 }) });
              })
            )
          ),
          !showAll ? directories : null,
          images,
          _react2.default.createElement('div', { style: { clear: 'both' } })
        )
      );
    }
  }]);

  return MediaList;
}(_react.Component), _class2.propTypes = {
  onImageChange: _react2.default.PropTypes.func,
  onTagsFilterChange: _react2.default.PropTypes.func,
  onSolutionFilterChange: _react2.default.PropTypes.func,
  onSourceFilterChange: _react2.default.PropTypes.func,
  onTypeFilterChange: _react2.default.PropTypes.func,
  onResetFilters: _react2.default.PropTypes.func,
  onSortByChange: _react2.default.PropTypes.func,
  onShowAll: _react2.default.PropTypes.func,
  tags: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  solution: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  type: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  sortByState: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  data: _react2.default.PropTypes.shape({
    loading: _react2.default.PropTypes.bool,
    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
  })
}, _class2.defaultProps = {
  tags: [],
  solution: [],
  source: []
}, _temp2)) || _class) || _class);
exports.default = MediaList;