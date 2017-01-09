'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _editors = require('./editors');

var _initialValue = require('./initial-value');

var _initialValue2 = _interopRequireDefault(_initialValue);

var _formEditor = require('./form-editor');

var _formEditor2 = _interopRequireDefault(_formEditor);

var _toLabel = require('./to-label');

var _toLabel2 = _interopRequireDefault(_toLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
var formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
var stampAttributes = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

exports.default = _antd.Form.create()(function (props) {
  var collection = props.collection,
      form = props.form,
      onCreate = props.onCreate,
      onCancel = props.onCancel,
      saving = props.saving,
      item = props.item,
      className = props.className,
      style = props.style;
  var getFieldDecorator = form.getFieldDecorator;


  var fields = collection.fields.filter(function (_ref) {
    var name = _ref.name;
    return name !== 'id';
  }).reduce(function (state, item) {
    var group = item.description && item.description.indexOf('detail:') !== -1 ? item.description.split('detail:')[1].split('\n')[0] : 'Allgemein';

    // Wenn es vom Typ Json ist => Eigener Tab für Slate
    if (item.type.name === 'Json') {
      state[(0, _capitalize2.default)(item.name)] = [item];

      return state;
    }

    if (!state[group]) state[group] = [];
    state[group].push(item);

    return state;
  }, {});

  var renderForm = function renderForm(fields) {
    return _react2.default.createElement(
      _antd.Form,
      { horizontal: true },
      fields.filter(function (_ref2) {
        var name = _ref2.name;
        return name !== 'id' && stampAttributes.indexOf(name) === -1 && !['name', 'description', 'slug', 'state', 'tags'].includes(name);
      }).map(function (field) {
        var title = field.description && field.description.indexOf('title:') !== -1 ? field.description.split('title:')[1].split('\n')[0] : (0, _toLabel2.default)(field.name);
        var editor = (0, _formEditor2.default)(field.type, name, field.name === 'createdAt' || field.name === 'createdBy' || field.name === 'updatedAt' || field.name === 'updatedBy' ? { disabled: true } : {}, field.name.endsWith('Id') ? fields.find(function (_ref3) {
          var name = _ref3.name;
          return name + 'Id' === field.name;
        }) : field.name.endsWith('Ids') ? fields.find(function (_ref4) {
          var name = _ref4.name;
          return name + 'Ids' === field.name;
        }) : null);

        if (!editor) return null;

        return _react2.default.createElement(
          _antd.Form.Item,
          _extends({ key: field.name, label: title.replace('-Ids', '').replace('-Id', '') }, field.type.name === 'Json' ? formItemLayout0 : formItemLayout),
          getFieldDecorator(field.name, { initialValue: (0, _initialValue2.default)(props, field) })(editor)
        );
      })
    );
  };

  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    _react2.default.createElement(
      _antd.Form,
      { horizontal: true },
      _react2.default.createElement(
        _antd.Form.Item,
        _extends({ key: 'name', label: 'Name' }, formItemLayout0),
        getFieldDecorator('name', { initialValue: item && item.name })(_react2.default.createElement(_antd.Input, { className: 'naked-area', autosize: { minRows: 1, maxRows: 2 }, type: 'textarea', placeholder: 'Titel ...', style: { textAlign: 'center' } }))
      ),
      item && item.slug !== undefined ? _react2.default.createElement(
        _antd.Form.Item,
        _extends({ key: 'slug', label: 'Slug' }, formItemLayout0),
        getFieldDecorator('slug', { initialValue: item.slug })(_react2.default.createElement(_editors.SlugEditor, { url: item.slug }))
      ) : null,
      item && item.state !== undefined ? _react2.default.createElement(
        _antd.Form.Item,
        _extends({ key: 'state', label: 'State' }, formItemLayout0),
        getFieldDecorator('state', { initialValue: item.state })((0, _formEditor2.default)(collection.fields.find(function (x) {
          return x.name === 'state';
        }).type))
      ) : null,
      item && item.tags !== undefined ? _react2.default.createElement(
        _antd.Form.Item,
        _extends({ key: 'tags', label: 'Schlagworte' }, formItemLayout0),
        getFieldDecorator('tags', { initialValue: item.tags })((0, _formEditor2.default)(collection.fields.find(function (x) {
          return x.name === 'tags';
        }).type))
      ) : null
    ),
    Object.keys(fields).length === 1 ? renderForm(fields.Allgemein) : _react2.default.createElement(
      _antd.Tabs,
      { defaultActiveKey: '0', animated: false },
      Object.keys(fields).map(function (key, i) {
        return _react2.default.createElement(
          _antd.Tabs.TabPane,
          { tab: key, key: i },
          renderForm(fields[key])
        );
      })
    )
  );
});