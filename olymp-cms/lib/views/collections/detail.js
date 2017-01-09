'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class3, _dec2, _class4;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _olymp = require('olymp');

var _antd = require('antd');

var _slate = require('olymp/slate');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _image = require('../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormItem = _antd.Form.Item;
var TabPane = _antd.Tabs.TabPane;
var Panel = _antd.Collapse.Panel;

var modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
var stampAttributes = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

var preventDefaultAnd = function preventDefaultAnd(func, args) {
  return function (e) {
    e.preventDefault();
    func(args);
  };
};
var SubForm = (0, _olymp.withCollection)(function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === undefined ? [] : _ref$value,
      collection = _ref.collection,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['value', 'collection', 'onChange']);

  var removeItem = function removeItem(index) {
    return onChange(value.filter(function (x, i) {
      return i !== index;
    }));
  };
  var createItem = function createItem() {
    return onChange([].concat(_toConsumableArray(value), [{}]));
  };
  var patchItem = function patchItem(index, nestedValue) {
    return onChange(value.map(function (x, i) {
      return i === index ? nestedValue : x;
    }));
  };
  var getHeader = function getHeader(title, index) {
    return _react2.default.createElement(
      'div',
      null,
      title,
      _react2.default.createElement('i', { className: 'fa fa-close pull-right', onMouseDown: preventDefaultAnd(removeItem, index) })
    );
  };
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _antd.Collapse,
      { accordion: true },
      value.map(function (value, i) {
        return _react2.default.createElement(
          Panel,
          { header: getHeader(value.name || 'Eintrag ' + i, i), key: i },
          _react2.default.createElement(
            'div',
            { className: 'ant-form' },
            collection.fields.filter(function (_ref2) {
              var name = _ref2.name;
              return name !== 'id' && stampAttributes.indexOf(name) === -1;
            }).map(function (_ref3) {
              var type = _ref3.type,
                  name = _ref3.name;
              return _react2.default.createElement(
                FormItem,
                { key: name },
                getFormEditor(type, name, {
                  value: value[name],
                  onChange: function onChange(v) {
                    return patchItem(i, _extends({}, value, _defineProperty({}, name, v && v.target ? v.target.value : v)));
                  },
                  disabled: name === 'createdAt' || name === 'createdBy' || name === 'updatedAt' || name === 'updatedBy'
                })
              );
            })
          )
        );
      })
    ),
    _react2.default.createElement(
      _antd.Button,
      { onClick: createItem },
      'Erstellen'
    )
  );
});
var MultiSlider = function MultiSlider(_ref4) {
  var _ref4$value = _ref4.value,
      value = _ref4$value === undefined ? [] : _ref4$value;

  return _react2.default.createElement(
    'div',
    null,
    value.map(function (v, i) {
      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '30px' }, key: i },
        _react2.default.createElement(_antd.Slider, { marks: { 8: '08:00', 13: '13:00', 18: '18:00' }, range: 3, min: 7, max: 19, step: 0.5,
          tipFormatter: function tipFormatter(v) {
            return v % 1 === 0 ? v + ':00' : Math.floor(v) + ':30';
          } })
      );
    })
  );
};

var DatePickerInt = function (_Component) {
  _inherits(DatePickerInt, _Component);

  function DatePickerInt() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerInt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = DatePickerInt.__proto__ || Object.getPrototypeOf(DatePickerInt)).call.apply(_ref5, [this].concat(args))), _this), _this.onChange = function (e) {
      var onChange = _this.props.onChange;

      var value = parseInt(e.format('x'));
      onChange(value);
    }, _this.getValue = function () {
      var value = _this.props.value;
      // 2014-09-14T10:32:27.831Z

      if (typeof value === 'string') value = parseInt((0, _moment2.default)(value.replace(/"/g, '')).format('x'));
      return value ? (0, _moment2.default)(value) : undefined;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_antd.DatePicker, _extends({}, this.props, { value: this.getValue(), onChange: this.onChange }));
    }
  }]);

  return DatePickerInt;
}(_react.Component);

var SlateMateExt = function (_Component2) {
  _inherits(SlateMateExt, _Component2);

  function SlateMateExt() {
    var _ref6;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, SlateMateExt);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref6 = SlateMateExt.__proto__ || Object.getPrototypeOf(SlateMateExt)).call.apply(_ref6, [this].concat(args))), _this2), _this2.state = { show: false }, _this2.onClose = function (e) {
      var onChange = _this2.props.onChange;

      _this2.setState({ show: false });
      if (e) onChange(e);
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(SlateMateExt, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var show = this.state.show;

      if (show) return _react2.default.createElement(_slate.SlateModal, _extends({ className: 'form-controlxx' }, this.props, { onClose: this.onClose }));
      return _react2.default.createElement(
        _antd.Button,
        { onClick: function onClick() {
            return _this3.setState({ show: true });
          } },
        'Anzeigen'
      );
    }
  }]);

  return SlateMateExt;
}(_react.Component);

var DetailEditor = (_dec = (0, _olymp.withItems)(), _dec(_class3 = function (_Component3) {
  _inherits(DetailEditor, _Component3);

  function DetailEditor() {
    _classCallCheck(this, DetailEditor);

    return _possibleConstructorReturn(this, (DetailEditor.__proto__ || Object.getPrototypeOf(DetailEditor)).apply(this, arguments));
  }

  _createClass(DetailEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          collection = _props.collection,
          items = _props.items,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['data', 'collection', 'items', 'children']);

      return _react2.default.createElement(
        _antd.Select,
        rest,
        items && items.map(function (item) {
          return _react2.default.createElement(
            _antd.Select.Option,
            { key: item.id, value: item.id },
            item.name
          );
        })
      );
    }
  }]);

  return DetailEditor;
}(_react.Component)) || _class3);


var getFormEditor = function getFormEditor(type, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var subField = arguments[3];

  if (subField && subField.type) {
    if (subField.type.kind === 'LIST' && subField.type.ofType) {
      return _react2.default.createElement(DetailEditor, _extends({}, props, { tags: true, name: subField.type.ofType.name }));
    } else {
      return _react2.default.createElement(DetailEditor, _extends({}, props, { name: subField.type.name }));
    }
  }
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'String') {
      return _react2.default.createElement(_antd.Select, _extends({}, props, { tags: true, searchPlaceholder: 'Suche ...' }));
    } else if (type.ofType.name.indexOf('Nested') === 0) {
      return _react2.default.createElement(SubForm, _extends({}, props, { name: type.ofType.name, type: type }));
    }return null;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Image') {
      return _react2.default.createElement(_image2.default, _extends({}, props, { asImg: true, width: '100%' }));
    }return null;
  }
  if (type.kind === 'ENUM' && type.enumValues) {
    return _react2.default.createElement(
      _antd.Select,
      props,
      type.enumValues.map(function (x) {
        return _react2.default.createElement(
          _antd.Select.Option,
          { key: x.name, value: x.name },
          x.name
        );
      })
    );
  }
  switch (type.name) {
    case 'Json':
      return _react2.default.createElement(SlateMateExt, _extends({}, props, { placeholder: name }));
    case 'Boolean':
      return _react2.default.createElement(_antd.Checkbox, props);
    case 'Date':
      return _react2.default.createElement(DatePickerInt, _extends({}, props, { placeholder: name, format: 'DD.MM.YYYY' }));
    case 'DateTime':
      return _react2.default.createElement(DatePickerInt, _extends({}, props, { placeholder: name, format: 'DD.MM.YYYY HH:mm', showTime: { format: 'HH:mm' } }));
    case 'Color':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, type: 'color', addonBefore: _react2.default.createElement('i', { className: 'fa fa-eyedropper' }) }));
    case 'Markdown':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, type: 'textarea', autosize: true }));
    case 'Slug':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-globe' }) }));
    case 'Email':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-envelope-o' }) }));
    case 'PhoneNumber':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-phone' }) }));
    case 'Website':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-link' }) }));
    case 'TimeRange':
      return _react2.default.createElement(MultiSlider, props);
    /* case 'user':
      return type.fields.map(field => (
        <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
      )); */
    default:
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name }));
  }
};

var getInitialValue = function getInitialValue(_ref7, _ref8) {
  var item = _ref7.item,
      form = _ref7.form;
  var name = _ref8.name,
      description = _ref8.description;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (description && description.indexOf('default:') !== -1) {
    // Wenn ein default-Wert existiert
    return description.split('default:')[1].split(' ')[0].split('\n')[0];
  } else if (name === 'state') {
    // Bei State
    return 'DRAFT';
  } else if (name === 'slug' && form.getFieldValue('name')) {
    // Bei Slug
    var url = '/' + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase()).split('%C3%A4').join('ä').split('%C3%B6').join('ö').split('%C3%BC').join('ü').split('%C3%A4').join('Ä').split('%C3%B6').join('Ö').split('%C3%BC').join('Ü');
    if (form.getFieldValue('date')) {
      url = (0, _moment2.default)(form.getFieldValue('date')).format('DD-MM-YYYY') + '-' + url;
    }
    return url;
  }

  return undefined;
};
var CollectionCreateForm = _antd.Form.create()(function (props) {
  var collection = props.collection,
      form = props.form,
      onCreate = props.onCreate,
      onCancel = props.onCancel,
      saving = props.saving;
  var getFieldDecorator = form.getFieldDecorator;


  var fields = collection.fields.filter(function (_ref9) {
    var name = _ref9.name;
    return name !== 'id';
  }).reduce(function (state, item) {
    var group = item.description && item.description.indexOf('detail:') !== -1 ? item.description.split('detail:')[1].split('\n')[0] : 'Allgemein';
    if (!state[group]) state[group] = [];
    state[group].push(item);

    return state;
  }, {});

  var renderForm = function renderForm(fields) {
    return _react2.default.createElement(
      _antd.Form,
      { horizontal: true },
      fields.filter(function (_ref10) {
        var name = _ref10.name;
        return name !== 'id' && stampAttributes.indexOf(name) === -1;
      }).map(function (field) {
        var title = field.description && field.description.indexOf('title:') !== -1 ? field.description.split('title:')[1].split('\n')[0] : toLabel(field.name);
        var editor = getFormEditor(field.type, name, field.name === 'createdAt' || field.name === 'createdBy' || field.name === 'updatedAt' || field.name === 'updatedBy' ? { disabled: true } : {}, field.name.endsWith('Id') ? fields.find(function (_ref11) {
          var name = _ref11.name;
          return name + 'Id' === field.name;
        }) : field.name.endsWith('Ids') ? fields.find(function (_ref12) {
          var name = _ref12.name;
          return name + 'Ids' === field.name;
        }) : null);
        if (!editor) return null;
        return _react2.default.createElement(
          FormItem,
          _extends({ key: field.name, label: title.replace('-Ids', '').replace('-Id', '') }, formItemLayout),
          getFieldDecorator(field.name, { initialValue: getInitialValue(props, field) })(editor)
        );
      })
    );
  };

  return _react2.default.createElement(
    _antd.Modal,
    _extends({}, modalSettings, { confirmLoading: saving, title: 'Bearbeiten', onCancel: onCancel, onOk: onCreate }),
    Object.keys(fields).length === 1 ? renderForm(fields.Allgemein) : _react2.default.createElement(
      _antd.Tabs,
      { defaultActiveKey: '0', type: 'card' },
      Object.keys(fields).map(function (key, i) {
        return _react2.default.createElement(
          TabPane,
          { tab: key, key: i },
          renderForm(fields[key])
        );
      })
    )
  );
});

var MainDetail = (_dec2 = (0, _olymp.withItem)({}), (0, _olymp.withCollection)(_class4 = _dec2(_class4 = function (_Component4) {
  _inherits(MainDetail, _Component4);

  function MainDetail() {
    var _ref13;

    var _temp3, _this5, _ret3;

    _classCallCheck(this, MainDetail);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this5 = _possibleConstructorReturn(this, (_ref13 = MainDetail.__proto__ || Object.getPrototypeOf(MainDetail)).call.apply(_ref13, [this].concat(args))), _this5), _this5.handleCancel = function () {
      _this5.props.onClose();
    }, _this5.handleCreate = function () {
      var _this5$props = _this5.props,
          save = _this5$props.save,
          onClose = _this5$props.onClose;

      var form = _this5.form;
      form.validateFields(function (err, values) {
        if (err) {
          return;
        }

        // console.log('Received values of form: ', values);
        save(values, { commit: false }).then(onClose);
      });
    }, _temp3), _possibleConstructorReturn(_this5, _ret3);
  }

  _createClass(MainDetail, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      var item = this.props.item;

      if (!item) return null;
      return _react2.default.createElement(CollectionCreateForm, _extends({}, this.props, {
        ref: function ref(form) {
          return _this6.form = form;
        },
        onCancel: this.handleCancel,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return MainDetail;
}(_react.Component)) || _class4) || _class4);
exports.default = MainDetail;


var toLabel = function toLabel(x) {
  var uml = x.replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ü/g, 'ue').replace(/Ae/g, 'Ä').replace(/Oe/g, 'Ö').replace(/Ue/g, 'Ü');
  var snake = uml.replace(/([A-Z])/g, function ($1) {
    return '-' + $1;
  });
  var capitalized = (0, _capitalize2.default)(snake);
  return capitalized;
};