'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query page($id: String!) {\n    page(id: $id) {\n      ', '\n    }\n  }\n'], ['\n  query page($id: String!) {\n    page(id: $id) {\n      ', '\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGateway = require('react-gateway');

var _antd = require('antd');

var _olymp = require('olymp');

var _slate = require('olymp/slate');

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Anchor = _antd.Anchor.Link;

var attributes = 'id, type, slug, order, name, parentId, blocks, children { id, type, slug, order, name, parentId, blocks }';
var CmsPage = function CmsPage(props) {
  var auth = props.auth,
      item = props.item,
      patch = props.patch,
      save = props.save,
      blocks = props.blocks,
      location = props.location,
      readOnly = props.readOnly,
      getReadOnly = props.getReadOnly;

  if (!item) return null;

  readOnly = readOnly !== undefined ? readOnly : getReadOnly ? getReadOnly(props) : !auth.user || !!item.computed;
  if (location && location.query && Object.keys(location.query).find(function (x) {
    return location.query[x] !== undefined;
  })) readOnly = true;

  var chapters = item.type === 'CHAPTERS' && item.children && (0, _sortBy2.default)(item.children, 'order');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_olymp.Helmet, { title: item.name }),
    _react2.default.createElement(
      'div',
      { className: 'anchor-menu' },
      chapters && _react2.default.createElement(
        _antd.Anchor,
        { offsetTop: 100 },
        chapters.map(function (child) {
          return _react2.default.createElement(Anchor, { key: child.id, href: '#' + child.slug.substr(1), title: child.name });
        })
      )
    ),
    _react2.default.createElement(_slate.SlateMate, { className: 'frontend-editor', showUndo: true, readOnly: readOnly, value: item.blocks || null, onChange: function onChange(blocks) {
        return patch({ blocks: blocks });
      } }),
    chapters && chapters.map(function (child) {
      return _react2.default.createElement(
        'div',
        { key: child.id, id: child.slug.substr(1) },
        _react2.default.createElement(_slate.SlateMate, { className: 'frontend-editor', showUndo: true, readOnly: true, value: child.blocks || null })
      );
    }),
    !readOnly ? _react2.default.createElement(
      _reactGateway.Gateway,
      { into: 'action' },
      _react2.default.createElement(
        _antd.Dropdown,
        {
          overlay: _react2.default.createElement(
            _antd.Menu,
            null,
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: 'page:1' },
              _react2.default.createElement(
                'a',
                { href: 'javascript:;', onClick: save },
                'Speichern'
              )
            ),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: 'page:undo' },
              _react2.default.createElement(_reactGateway.GatewayDest, {
                name: 'button_undo',
                component: function component(_ref) {
                  var children = _ref.children;
                  return children || _react2.default.createElement(
                    'span',
                    { className: 'ant-dropdown-menu-item-disabled' },
                    'R\xFCckg\xE4ngig'
                  );
                }
              })
            ),
            _react2.default.createElement(_antd.Menu.Divider, null),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: 'page:visitor', disabled: true },
              false ? _react2.default.createElement(_antd.Icon, { type: 'check' }) : null,
              'Besucher-Modus'
            ),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: 'page:settings' },
              _react2.default.createElement(
                _olymp.Link,
                { to: _extends({}, location, { query: { '@page': item.id } }) },
                'Einstellungen'
              )
            )
          ),
          overlayClassName: 'ant-dropdown-left',
          placement: 'bottomLeft'
        },
        _react2.default.createElement(
          _antd.Button,
          { shape: 'circle', size: 'large' },
          _react2.default.createElement(_antd.Icon, { type: 'file' })
        )
      )
    ) : null
  );
};

exports.default = (0, _olymp.graphql)((0, _olymp.gql)(_templateObject, attributes), {
  options: function options(_ref2) {
    var id = _ref2.id;
    return { variables: { id: id } };
  }
})((0, _olymp.withItem)({ name: 'page', attributes: attributes
})((0, _olymp.withAuth)(CmsPage)));