'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query pageList {\n    items: pageList {\n      id,\n      slug,\n      name,\n      parentId\n    }\n  }\n'], ['\n  query pageList {\n    items: pageList {\n      id,\n      slug,\n      name,\n      parentId\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import { map, groupBy, extend, pick } from 'lodash';

var FormItem = _antd.Form.Item;
var modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

var getInitialValue = function getInitialValue(_ref, name) {
  var item = _ref.item,
      form = _ref.form;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (name === 'slug' && form.getFieldValue('name')) {
    // Bei Slug
    return '/' + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase()).split('%C3%A4').join('ä').split('%C3%B6').join('ö').split('%C3%BC').join('ü').split('%C3%A4').join('Ä').split('%C3%B6').join('Ö').split('%C3%BC').join('Ü');
  }

  return undefined;
};

var PageForm = _antd.Form.create()(function (props) {
  var item = props.item,
      data = props.data,
      form = props.form,
      onCreate = props.onCreate,
      onCancel = props.onCancel,
      saving = props.saving;
  var getFieldDecorator = form.getFieldDecorator;


  if (!item || !data.items) return _react2.default.createElement(
    _antd.Modal,
    _extends({}, modalSettings, { title: 'Bearbeiten', onCancel: onCancel, onOk: onCreate }),
    _react2.default.createElement(_antd.Spin, null)
  );

  var items = (data.items || []).map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        parentId = _ref2.parentId;
    return {
      value: id,
      label: name,
      parent: parentId,
      children: []
    };
  });
  items = (0, _olymp.unflatten)(items, { id: 'value', parentId: 'parent' });

  return _react2.default.createElement(
    _antd.Modal,
    _extends({}, modalSettings, { confirmLoading: saving, title: 'Bearbeiten', onCancel: onCancel, onOk: onCreate }),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'name', label: 'Name' }, formItemLayout),
      getFieldDecorator('name', { initialValue: item.name })(_react2.default.createElement(_antd.Input, null))
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'parentId', label: '\xDCbergeordnet' }, formItemLayout),
      getFieldDecorator('parentId', { initialValue: item.parentId })(_react2.default.createElement(_antd.TreeSelect, {
        style: { width: '100%' },
        dropdownStyle: { maxHeight: 400, overflow: 'auto' },
        treeData: items
      }))
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ key: 'slug', label: 'Slug' }, formItemLayout),
      getFieldDecorator('slug', { initialValue: getInitialValue(props, 'slug') })(_react2.default.createElement(_antd.Input, null))
    )
  );
});

var PageSettings = (_dec = (0, _olymp.withRouter)(), _dec2 = (0, _olymp.withItem)({ name: 'page' }), _dec3 = (0, _olymp.graphql)((0, _olymp.gql)(_templateObject)), _dec(_class = _dec2(_class = _dec3(_class = function (_Component) {
  _inherits(PageSettings, _Component);

  function PageSettings() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, PageSettings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = PageSettings.__proto__ || Object.getPrototypeOf(PageSettings)).call.apply(_ref3, [this].concat(args))), _this), _this.handleCancel = function () {
      _this.props.onClose();
    }, _this.handleCreate = function () {
      var _this$props = _this.props,
          location = _this$props.location,
          router = _this$props.router,
          item = _this$props.item,
          onClose = _this$props.onClose,
          save = _this$props.save,
          data = _this$props.data;

      var form = _this.form;
      form.validateFields(function (err, values) {
        if (err) {
          return;
        }

        values.state = 'PUBLISHED';
        // console.log('Received values of form: ', values);
        save(values, { commit: false }).then(function (_ref4) {
          var page = _ref4.page;

          // Pfad ermitteln
          var items = (0, _olymp.flatten)((0, _olymp.unflatten)([].concat(_toConsumableArray(data.items), [page]), { setPath: function setPath(current, _ref5) {
              var slug = _ref5.slug;
              return '' + current + slug;
            } }));
          // onClose(item.slug === location.pathname && item.id ? page.slug : null);
          onClose(items.find(function (x) {
            return x.id === page.id;
          }).path);
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageSettings, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(PageForm, _extends({}, this.props, {
        ref: function ref(form) {
          return _this2.form = form;
        },
        onCancel: this.handleCancel,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return PageSettings;
}(_react.Component)) || _class) || _class) || _class);
exports.default = PageSettings;