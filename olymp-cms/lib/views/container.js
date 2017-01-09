'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _templateObject = _taggedTemplateLiteral(['\n  query schema {\n    schema: __schema {\n      types {\n        name\n        description\n        interfaces {\n          name\n        }\n        fields {\n          name\n          type {\n            kind\n            name\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query schema {\n    schema: __schema {\n      types {\n        name\n        description\n        interfaces {\n          name\n        }\n        fields {\n          name\n          type {\n            kind\n            name\n          }\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

var _reactGateway = require('react-gateway');

var _auth = require('../../auth');

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _antd = require('antd');

var _lodash = require('lodash');

var _slate = require('olymp/slate');

var _withLightbox = require('../edits/image/with-lightbox');

var _page = require('./pages/modals/page');

var _page2 = _interopRequireDefault(_page);

var _detail = require('./media/detail');

var _detail2 = _interopRequireDefault(_detail);

var _upload = require('./media/upload');

var _upload2 = _interopRequireDefault(_upload);

var _detail3 = require('./collections/detail');

var _detail4 = _interopRequireDefault(_detail3);

require('./container.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SubMenu = _antd.Menu.SubMenu;

var Container = (_dec = (0, _slate.useBlockTypes)(), _dec2 = (0, _olymp.graphql)((0, _olymp.gql)(_templateObject), {
  options: function options(_ref) {
    var auth = _ref.auth;
    return {
      skip: !auth || !auth.user
    };
  }
}), (0, _withLightbox.useLightboxes)(_class = (0, _olymp.withRouter)(_class = _dec(_class = _dec2(_class = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref2, [this].concat(args))), _this), _this.isActive = function (href) {
      var pathname = _this.props.location.pathname;

      if (href === pathname) return true;
      if (pathname.indexOf(href + '/') === 0) return true;
      return false;
    }, _this.handleClick = function (_ref3) {
      var key = _ref3.key;

      if (key === 'logout') {
        _this.props.auth.logout();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          router = _props.router,
          location = _props.location,
          auth = _props.auth,
          data = _props.data,
          logo = _props.logo;
      var pathname = location.pathname,
          query = location.query;


      var modal = void 0;
      if (query && query.confirm !== undefined) {
        modal = _react2.default.createElement(_auth.AuthConfirm, {
          token: query.confirm,
          pathname: pathname,
          onClose: function onClose() {
            return router.push(pathname);
          }
        });
      }
      if (query && query.register !== undefined) {
        modal = _react2.default.createElement(_auth.AuthRegister, {
          email: query.register,
          pathname: pathname,
          onClose: function onClose() {
            return router.push(pathname);
          }
        });
      }
      if (query && query.login !== undefined) {
        modal = _react2.default.createElement(_auth.AuthLogin, { email: query.email, pathname: pathname, onClose: function onClose() {
            return router.push(pathname);
          } });
      }
      if (query && query.forgot !== undefined) {
        modal = _react2.default.createElement(_auth.AuthForgot, {
          email: query.forgot,
          pathname: pathname,
          onClose: function onClose() {
            return router.push(pathname);
          }
        });
      }
      if (query && query.reset !== undefined) {
        modal = _react2.default.createElement(_auth.AuthReset, {
          token: query.reset,
          pathname: pathname,
          onClose: function onClose() {
            return router.push(pathname);
          }
        });
      }

      if (!auth || !auth.user || !data) {
        return _react2.default.createElement(
          'div',
          { className: 'full' },
          modal,
          children,
          auth && auth.loading ? null : _react2.default.createElement(_olymp.Match, {
            pattern: '/@/*',
            render: function render() {
              return _react2.default.createElement(_olymp.Redirect, { to: { pathname: '/', query: { login: null, pathname: pathname } } });
            }
          })
        );
      }

      var schema = data.schema;

      var collections = schema && schema.types ? schema.types.filter(function (x) {
        return (x.interfaces || []).filter(function (y) {
          return y.name === 'CollectionType' || y.name === 'CollectionInterface';
        }).length;
      }) : [];
      var collection = query ? (collections || []).find(function (c) {
        return query['@' + c.name] !== undefined;
      }) : undefined;
      // const colSchema = query && query.schema ? (collections || []).filter(
      // c => c.name === query.schema
      // )[0] : undefined;
      if (collection !== undefined) {
        (function () {
          var name = collection.name;

          modal = _react2.default.createElement(_detail4.default, {
            name: name,
            id: query['@' + name],
            onClose: function onClose() {
              return router.push({ pathname: pathname, query: _extends({}, query, _defineProperty({}, '@' + name, undefined)) });
            }
          });
        })();
      } else if (query && query['@media'] !== undefined) {
        modal = _react2.default.createElement(_detail2.default, {
          id: query['@media'],
          onClose: function onClose() {
            return router.push({ pathname: pathname, query: _extends({}, query, { '@media': undefined }) });
          }
        });
      } else if (query && (query['@page'] !== undefined || query['@new-page'] !== undefined)) {
        modal = _react2.default.createElement(_page2.default, {
          id: query['@page'],
          initialData: { parentId: query['@new-page'], order: 0 },
          attributes: 'id, slug, order, name, parentId, blocks, templateName',
          onClose: function onClose(newPath) {
            return router.push({ pathname: newPath || pathname, query: _extends({}, query, { '@page': undefined, '@new-page': undefined }) });
          }
        });
      } else if (query && query['@upload'] !== undefined) {
        modal = _react2.default.createElement(_upload2.default, {
          modal: true,
          onSave: function onSave(_ref4) {
            var id = _ref4.id;
            return router.push({ pathname: pathname, query: _extends({}, query, { '@upload': undefined, '@media': id }) });
          },
          onClose: function onClose() {
            return router.push({ pathname: pathname, query: _extends({}, query, { '@upload': undefined }) });
          }
        });
      }

      // Von Collections Attribute (icon, group, order) extrahieren und Collections gruppieren
      var groups = {};
      (collections || []).map(function (_ref5, i) {
        var name = _ref5.name,
            description = _ref5.description;

        var attributes = {};
        description.split('\n').forEach(function (x) {
          var y = x.split(':');

          if (y.length === 2) {
            attributes[y[0]] = y[1];
          }
        });

        // Attribute verfügbar machen
        collections[i] = _extends({}, collections[i], attributes);

        // Gruppieren
        if (!groups[attributes.group]) groups[attributes.group] = [];
        groups[attributes.group].push(collections[i]);
      });

      // Collections innerhalb Gruppe sortieren
      Object.keys(groups).forEach(function (key) {
        groups[key] = (0, _lodash.sortBy)(groups[key], ['order', 'name']);
      });

      // Undefined-Gruppe auflösen
      if (groups.undefined) {
        groups.undefined.forEach(function (collection) {
          if (!groups[collection.name]) groups[collection.name] = [];

          groups[collection.name].push(collection);
        });

        delete groups.undefined;
      }

      return _react2.default.createElement(
        _reactGateway.GatewayProvider,
        null,
        _react2.default.createElement(
          'div',
          { className: 'full' },
          modal,
          _react2.default.createElement(
            _antd.Affix,
            null,
            _react2.default.createElement(
              _antd.Menu,
              { onClick: this.handleClick, selectedKeys: [pathname], mode: 'horizontal', className: 'main-nav' },
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'mail', className: 'ant-menu-item-brand' },
                logo || 'ATHENA'
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '/' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: '/' },
                  'Website'
                )
              ),
              Object.keys(groups).map(function (key) {

                var wrapper = function wrapper(children) {
                  return _react2.default.createElement(
                    SubMenu,
                    { key: key, title: (0, _capitalize2.default)(key) },
                    children
                  );
                };

                var groupItem = (groups[key] || []).map(function (_ref6) {
                  var name = _ref6.name,
                      title = _ref6.title;
                  return _react2.default.createElement(
                    SubMenu,
                    {
                      key: name,
                      title: _react2.default.createElement(
                        _olymp.Link,
                        { to: { pathname: '/@/' + name, query: { state: 'PUBLISHED' } } },
                        (0, _capitalize2.default)(title || name),
                        groups[key].length > 1 ? _react2.default.createElement(_antd.Icon, { type: 'right', style: { paddingLeft: '.5rem' } }) : undefined
                      )
                    },
                    _react2.default.createElement(
                      _antd.Menu.Item,
                      { key: '/@/' + name },
                      _react2.default.createElement(
                        _olymp.Link,
                        { to: { pathname: pathname, query: _extends({}, query, _defineProperty({}, '@' + name, null)) } },
                        _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                        (0, _capitalize2.default)(title || name),
                        ' hinzuf\xFCgen'
                      )
                    )
                  );
                });

                return groups[key].length === 1 ? groupItem : wrapper(groupItem);
              }),
              _react2.default.createElement(
                SubMenu,
                { title: _react2.default.createElement(
                    _olymp.Link,
                    { to: '/@/media' },
                    'Mediathek'
                  ) },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '/@/media' },
                  _react2.default.createElement(
                    _olymp.Link,
                    { to: { pathname: pathname, query: { '@upload': null } } },
                    _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                    'Datei hochladen'
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '/@/users' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: '/@/users' },
                  'Benutzer'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '/@/analytics' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: '/@/analytics' },
                  'Statistik'
                )
              ),
              _react2.default.createElement(_reactGateway.GatewayDest, {
                name: 'button_save',
                component: function component(props) {
                  return props.children ? _react2.default.createElement(
                    'div',
                    { className: 'ant-menu-item-right ant-menu-item-horizontal ant-menu-item ant-menu-item-separated' },
                    props.children
                  ) : null;
                }
              }),
              _react2.default.createElement(
                SubMenu,
                { className: 'ant-menu-submenu-right', title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('fa', { className: 'fa fa-cog' })
                  ) },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: 'page-settings' },
                  'Globale Einstellungen'
                ),
                _react2.default.createElement(_reactGateway.GatewayDest, {
                  name: 'button_settings',
                  component: function component(props) {
                    return props.children ? _react2.default.createElement(
                      'div',
                      { className: 'ant-menu-item-right ant-menu-item-horizontal ant-menu-item' },
                      props.children
                    ) : null;
                  }
                })
              ),
              _react2.default.createElement(
                SubMenu,
                { className: 'ant-menu-submenu-right', title: _react2.default.createElement(
                    'span',
                    null,
                    auth.user.name
                  ) },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: 'setting:1' },
                  'Profil'
                ),
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: 'logout' },
                  'Abmelden'
                )
              )
            )
          ),
          children,
          _react2.default.createElement(_reactGateway.GatewayDest, { name: 'global' }),
          _react2.default.createElement(_olymp.Match, {
            pattern: '/@/media',
            render: function render(routerProps) {
              return _react2.default.createElement(
                _olymp.CodeSplit,
                { chunkName: 'media', modules: { View: require('./media/list') } },
                function (_ref7) {
                  var View = _ref7.View;
                  return View && _react2.default.createElement(View, _extends({}, routerProps, {
                    tags: query && query.tags ? query.tags.split('-') : [],
                    solution: query && query.solution ? [query.solution] : [],
                    source: query && query.source ? [query.source] : [],
                    type: query && query.type ? [query.type] : [],
                    sortByState: query && query.sortBy ? [query.sortBy] : [],
                    onTagsFilterChange: function onTagsFilterChange(tags) {
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { tags: tags && Array.isArray(tags) ? tags.join('-') : undefined })
                      });
                    },
                    onSolutionFilterChange: function onSolutionFilterChange(solution) {
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { solution: solution ? solution.join('') : undefined })
                      });
                    },
                    onSourceFilterChange: function onSourceFilterChange(source) {
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { source: source ? source.join('') : undefined })
                      });
                    },
                    onTypeFilterChange: function onTypeFilterChange(type) {
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { type: type ? type.join('') : undefined })
                      });
                    },
                    onResetFilters: function onResetFilters() {
                      return router.push({
                        pathname: pathname
                      });
                    },
                    onSortByChange: function onSortByChange(sortBy) {
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { sortBy: sortBy ? sortBy.join('') : undefined })
                      });
                    },
                    onImageChange: function onImageChange(_ref8) {
                      var id = _ref8.id;
                      return router.push({
                        pathname: pathname,
                        query: _extends({}, query, { '@media': id })
                      });
                    }
                  }));
                }
              );
            }
          }),
          (collections || []).map(function (_ref9) {
            var name = _ref9.name;
            return _react2.default.createElement(_olymp.Match, {
              key: name,
              pattern: '/@/' + name,
              render: function render(routerProps) {
                return _react2.default.createElement(
                  _olymp.CodeSplit,
                  { chunkName: 'collections', modules: { View: require('./collections/list') } },
                  function (_ref10) {
                    var View = _ref10.View;
                    return View && _react2.default.createElement(View, _extends({}, routerProps, {
                      name: name,
                      onClick: function onClick(_ref11) {
                        var id = _ref11.id;
                        return router.push({ pathname: pathname, query: _extends({}, query, _defineProperty({}, '@' + name, id)) });
                      }
                    }));
                  }
                );
              }
            });
          })
        )
      );
    }
  }]);

  return Container;
}(_react.Component)) || _class) || _class) || _class) || _class);

/* const lowerCase0 = (value => {
  return value.charAt(0).toLowerCase() + value.slice(1);
}); */

exports.default = Container;