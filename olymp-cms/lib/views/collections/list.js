'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _templateObject = _taggedTemplateLiteral(['\n          query ', 'List($state: [DOCUMENT_STATE]) {\n            items: ', 'List(query: {state: {in: $state}}) {\n              ', '\n            }\n          }\n        '], ['\n          query ', 'List($state: [DOCUMENT_STATE]) {\n            items: ', 'List(query: {state: {in: $state}}) {\n              ', '\n            }\n          }\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _antd = require('antd');

var _sortBy = require('lodash/sortBy');

var _find = require('lodash/find');

var _olymp = require('olymp');

var _columns = require('./columns.js');

var _columns2 = _interopRequireDefault(_columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainList = (0, _olymp.withCollection)(_class = (0, _reactApollo.withApollo)(_class = (0, _olymp.withRouter)(_class = (_temp = _class2 = function (_Component) {
  _inherits(MainList, _Component);

  function MainList(props) {
    _classCallCheck(this, MainList);

    var _this = _possibleConstructorReturn(this, (MainList.__proto__ || Object.getPrototypeOf(MainList)).call(this, props));

    _this.update = function (nextProps, lastProps) {
      if (!lastProps || nextProps.collection !== lastProps.collection) {
        if (_this.subscription) _this.subscription.unsubscribe();
        var client = nextProps.client,
            collection = nextProps.collection,
            attributes = nextProps.attributes,
            location = nextProps.location;

        _this.items = null;

        var lname = collection.name[0].toLowerCase() + collection.name.substr(1);
        var query = client.watchQuery({
          /* eslint-disable no-undef */
          query: (0, _graphqlTag2.default)(_templateObject, lname, lname, attributes), /* eslint-disable */
          variables: {
            state: location.query && location.query.state ? location.query.state.split('-') : []
          }
        });
        _this.subscription = query.subscribe({
          next: function next(_ref) {
            var data = _ref.data;

            if (_this.unmount) return;
            _this.items = data.items;
            _this.setState({});
          },
          error: function error(_error) {
            console.log('there was an error sending the query', _error);
          }
        });
      }
    };

    _this.items = null;
    _this.state = {
      selectedRowKeys: []
    };
    return _this;
  }

  _createClass(MainList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.update(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.update(props, this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.subscription) this.subscription.unsubscribe();
      this.unmount = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onClick = _props.onClick,
          collection = _props.collection,
          name = _props.name,
          saveCollectionItem = _props.saveCollectionItem,
          removeCollectionItem = _props.removeCollectionItem,
          location = _props.location;
      var pathname = location.pathname,
          query = location.query;
      var selectedRowKeys = this.state.selectedRowKeys;
      var items = this.items;

      // Sortierung nach #list

      var fields = [];
      collection.fields.forEach(function (field) {
        var name = field.name,
            description = field.description;

        var index = description && description.indexOf('list:') !== -1 ? description.split('list:')[1].split('\n')[0] : undefined;

        if (index !== undefined || name === 'updatedAt' || name === 'updatedBy') {
          fields.push(_extends({}, field, {
            index: index
          }));
        }
      });
      fields = (0, _sortBy.sortBy)(fields, 'index');

      var columns = fields.map(function (meta) {
        var name = meta.name,
            description = meta.description;


        return _extends({
          title: description && description.indexOf('title:') !== -1 ? description.split('title:')[1].split('\n')[0] : (0, _capitalize2.default)(name),
          dataIndex: name,
          key: name
        }, (0, _columns2.default)(meta, items));
      });

      // Status hinzufügen
      columns.push({
        title: 'Status',
        sorter: function sorter(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        },
        dataIndex: 'state',
        key: 'state',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text || 'PUBLISHED'
          );
        },
        filters: [{
          text: 'Ver\xF6ffentlicht (' + (items || []).filter(function (item) {
            return !item.state || item.state === 'PUBLISHED';
          }).length + ')',
          value: 'PUBLISHED'
        }, {
          text: 'Entworfen (' + (items || []).filter(function (item) {
            return item.state === 'DRAFT';
          }).length + ')',
          value: 'DRAFT'
        }, {
          text: 'Archiviert (' + (items || []).filter(function (item) {
            return item.state === 'ARCHIVED';
          }).length + ')',
          value: 'ARCHIVED'
        }, {
          text: 'Gel\xF6scht (' + (items || []).filter(function (item) {
            return item.state === 'REMOVED';
          }).length + ')',
          value: 'REMOVED'
        }],
        onFilter: function onFilter(value, record) {
          return value === record.state || !record.state && value === 'PUBLISHED';
        }
      });

      var pagination = items ? {
        total: items.length,
        // showSizeChanger: true,
        defaultPageSize: 30,
        pageSize: 30,
        // showQuickJumper: true,
        onShowSizeChange: function onShowSizeChange(current, pageSize) {
          console.log('Aktuell: ', current, '; Seitengröße: ', pageSize);
        },
        onChange: function onChange(current) {
          console.log('Aktuell: ', current);
        }
      } : undefined;

      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
          //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          _this2.setState({ selectedRowKeys: selectedRowKeys });
        },
        onSelect: function onSelect(record, selected, selectedRows) {
          //console.log(record, selected, selectedRows);
        },
        onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
          //console.log(selected, selectedRows, changeRows);
        }
      };

      var onTableChange = function onTableChange(pagination, filters, sorter) {
        // Nach Änderung an Pagination, Sortierung oder Filter wird Selektion enternt, da es für Benutzer irreführend ist und zu Fehlern führen kann (bei Filterung ändern sich keys!)
        // todo: Sortierung ausschließen
        _this2.setState({ selectedRowKeys: [] });
      };

      var changeState = function changeState(state) {
        return selectedRowKeys.forEach(function (key) {
          return saveCollectionItem(_extends({}, (0, _find.find)(items, function (obj) {
            return obj.id === key;
          }), {
            state: state
          }));
        });
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Affix,
          { offsetTop: 48 },
          _react2.default.createElement(
            _antd.Menu,
            {
              selectedKeys: query && query.state ? [query.state] : [],
              mode: 'horizontal',
              theme: 'dark',
              className: 'olymp-submenu'
            },
            _react2.default.createElement(
              _antd.Menu,
              { theme: 'dark' },
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'PUBLISHED' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: { state: 'PUBLISHED' } } },
                  'Ver\xF6ffentlichte'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'DRAFT' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: { state: 'DRAFT' } } },
                  'Entw\xFCrfe'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'ARCHIVED' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: { state: 'ARCHIVED' } } },
                  'Archivierte'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'REMOVED' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: { state: 'REMOVED' } } },
                  'Gel\xF6schte'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'PUBLISHED-DRAFT-ARCHIVED-REMOVED' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: { state: 'PUBLISHED-DRAFT-ARCHIVED-REMOVED' } } },
                  'Alle'
                )
              ),
              selectedRowKeys.length && location.query && location.query.state === 'REMOVED' ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '14' },
                _react2.default.createElement(
                  'span',
                  { onClick: function onClick() {
                      return selectedRowKeys.forEach(function (key) {
                        return removeCollectionItem(key);
                      });
                    } },
                  'Dauerhaft l\xF6schen (',
                  selectedRowKeys.length,
                  ')'
                )
              ) : undefined,
              selectedRowKeys.length && location.query && location.query.state !== 'REMOVED' ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '14' },
                _react2.default.createElement(
                  'span',
                  { onClick: function onClick() {
                      return changeState('REMOVED');
                    } },
                  'Papierkorb (',
                  selectedRowKeys.length,
                  ')'
                )
              ) : undefined,
              selectedRowKeys.length ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '13' },
                _react2.default.createElement(
                  'span',
                  { onClick: function onClick() {
                      return changeState('ARCHIVED');
                    } },
                  'Archiv (',
                  selectedRowKeys.length,
                  ')'
                )
              ) : undefined,
              selectedRowKeys.length ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '12' },
                _react2.default.createElement(
                  'span',
                  { onClick: function onClick() {
                      return changeState('DRAFT');
                    } },
                  'Entwurf (',
                  selectedRowKeys.length,
                  ')'
                )
              ) : undefined,
              selectedRowKeys.length ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '11' },
                _react2.default.createElement(
                  'span',
                  { onClick: function onClick() {
                      return changeState('PUBLISHED');
                    } },
                  'Ver\xF6ffentlicht (',
                  selectedRowKeys.length,
                  ')'
                )
              ) : undefined,
              selectedRowKeys.length ? _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '16' },
                _react2.default.createElement(_antd.Icon, { type: 'download' }),
                'Exportieren (',
                selectedRowKeys.length,
                ')'
              ) : undefined,
              _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '15' },
                _react2.default.createElement(_antd.Icon, { type: 'upload' }),
                'Importieren'
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { style: { float: 'right' }, key: '10' },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: { pathname: pathname, query: _extends({}, query, _defineProperty({}, '@' + name, null)) } },
                  _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                  'Hinzuf\xFCgen'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'olymp-container' },
          _react2.default.createElement(_antd.Table, {
            rowSelection: rowSelection,
            size: 'small',
            rowKey: 'id',
            onRowClick: onClick,
            loading: !items,
            columns: columns,
            dataSource: items,
            pagination: pagination,
            onChange: onTableChange,
            style: { clear: 'both' }
          })
        )
      );
    }
  }]);

  return MainList;
}(_react.Component), _class2.propTypes = {
  collection: _react.PropTypes.object, // todo: shape statt object
  client: _react.PropTypes.object, // todo: shape statt object
  onClick: _react.PropTypes.func
}, _temp)) || _class) || _class) || _class;

exports.default = MainList;