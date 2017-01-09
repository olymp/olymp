'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _file = require('../../decorators/file');

var _file2 = _interopRequireDefault(_file);

var _image = require('../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

var ModalForm = _antd.Form.create()(function (props) {
  var item = props.item,
      form = props.form,
      onCreate = props.onCreate,
      onCancel = props.onCancel,
      onDelete = props.onDelete,
      saving = props.saving;
  var getFieldDecorator = form.getFieldDecorator;


  if (!item) {
    return _react2.default.createElement(
      _antd.Modal,
      _extends({}, modalSettings, { title: 'Media', style: { minHeight: '150px' } }),
      _react2.default.createElement(_antd.Spin, null)
    );
  }

  return _react2.default.createElement(
    _antd.Modal,
    _extends({}, modalSettings, {
      confirmLoading: saving,
      title: 'Media',
      onCancel: onCancel,
      footer: [_react2.default.createElement(
        _antd.Button,
        { key: 'back', type: 'ghost', size: 'large', onClick: onCancel },
        'Abbrechen'
      ), _react2.default.createElement(
        _antd.Button,
        { key: 'delete', type: 'primary', size: 'large', onClick: onDelete, style: { backgroundColor: 'red', borderColor: 'red' } },
        'L\xF6schen'
      ), _react2.default.createElement(
        _antd.Button,
        { key: 'submit', type: 'primary', size: 'large', loading: saving, onClick: onCreate },
        'Speichern'
      )]
    }),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'id', label: 'ID' }, formItemLayout),
      getFieldDecorator('id', {
        initialValue: item.id
      })(_react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'ID' }))
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'caption', label: 'Bezeichnung' }, formItemLayout),
      getFieldDecorator('caption', {
        initialValue: item.caption
      })(_react2.default.createElement(_antd.Input, { placeholder: 'Bezeichnung' }))
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'source', label: 'Quelle' }, formItemLayout),
      getFieldDecorator('source', {
        initialValue: item.source
      })(_react2.default.createElement(_antd.Input, { placeholder: 'Quelle' }))
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'tags', label: 'Tags' }, formItemLayout),
      getFieldDecorator('tags', {
        initialValue: item.tags || []
      })(_react2.default.createElement(_antd.Select, _extends({}, props, { tags: true, searchPlaceholder: 'Suche ...' })))
    ),
    _react2.default.createElement(_image2.default, { value: _extends({}, item), width: '100%', readOnly: true }),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'size', label: 'Gr\xF6\xDFe' }, formItemLayout, { style: { marginTop: '24px', marginBottom: '0' } }),
      _react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'Gr\xF6\xDFe', defaultValue: item.width + 'x' + item.height })
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'date', label: 'Hinzugef\xFCgt' }, formItemLayout, { style: { marginBottom: '0' } }),
      _react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'Hinzugef\xFCgt', defaultValue: (0, _moment2.default)(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss') + ' Uhr' })
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'format', label: 'Format' }, formItemLayout, { style: { marginBottom: '0' } }),
      _react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'Format', defaultValue: item.format })
    ),
    item.format === 'pdf' ? _react2.default.createElement(
      FormItem,
      _extends({ key: 'pages', label: 'Seiten' }, formItemLayout, { style: { marginBottom: '0' } }),
      _react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'Seiten', defaultValue: item.pages })
    ) : undefined,
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'bytes', label: 'Dateigr\xF6\xDFe' }, formItemLayout, { style: { marginBottom: '0' } }),
      _react2.default.createElement(_antd.Input, { disabled: true, placeholder: 'Dateigr\xF6\xDFe', defaultValue: item.bytes / 1000 + ' kB' })
    )
  );
});

var MediaModal = (0, _file2.default)(_class = function (_Component) {
  _inherits(MediaModal, _Component);

  function MediaModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaModal.__proto__ || Object.getPrototypeOf(MediaModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function () {
      _this.props.onClose();
    }, _this.handleDelete = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          remove = _this$props.remove,
          onClose = _this$props.onClose;


      _antd.Modal.confirm({
        title: 'Diese Datei wirklich löschen?',
        content: 'Wollen Sie diese Datei wirklich löschen?',
        onOk: function onOk() {
          remove({ id: id }).then(onClose);
        },
        onCancel: function onCancel() {}
      });
    }, _this.handleCreate = function () {
      var _this$props2 = _this.props,
          save = _this$props2.save,
          onClose = _this$props2.onClose;


      var form = _this.form;
      form.validateFields(function (err, values) {
        if (err) return;
        save(values, { commit: false }).then(onClose);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediaModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(ModalForm, _extends({}, this.props, {
        ref: function ref(form) {
          return _this2.form = form;
        },
        onCancel: this.handleCancel,
        onDelete: this.handleDelete,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return MediaModal;
}(_react.Component)) || _class;

exports.default = MediaModal;