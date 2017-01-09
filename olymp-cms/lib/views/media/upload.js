'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _templateObject = _taggedTemplateLiteral(['query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }'], ['query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }']),
    _templateObject2 = _taggedTemplateLiteral(['mutation cloudinaryRequestDone($id: String, $token: String) { cloudinaryRequestDone(id: $id, token: $token) { ', ' } }'], ['mutation cloudinaryRequestDone($id: String, $token: String) { cloudinaryRequestDone(id: $id, token: $token) { ', ' } }']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _file = require('../../decorators/file');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
var Dragger = _antd.Upload.Dragger;

var UploadModal = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  forceFetch: true
}), _dec2 = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject2, _file.attributes), {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        mutate = _ref.mutate;

    return {
      done: function done(_ref2) {
        var id = _ref2.id,
            token = _ref2.token;

        return mutate({
          variables: { id: id, token: token },
          updateQueries: {
            fileList: function fileList(prev, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newData = mutationResult.data.cloudinaryRequestDone;
              return {
                items: [].concat(_toConsumableArray(prev.items), [newData])
              };
            }
          }
        });
      }
    };
  }
}), (0, _reactApollo.withApollo)(_class = _dec(_class = _dec2(_class = function (_Component) {
  _inherits(UploadModal, _Component);

  function UploadModal() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = UploadModal.__proto__ || Object.getPrototypeOf(UploadModal)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {}, _this.getUploadPops = function () {
      return !_this.props.data.cloudinaryRequest ? {} : {
        showUploadList: true,
        data: {
          api_key: _this.props.data.cloudinaryRequest.apiKey,
          signature: _this.props.data.cloudinaryRequest.signature,
          timestamp: _this.props.data.cloudinaryRequest.timestamp
        },
        action: _this.props.data.cloudinaryRequest.url,
        onChange: function onChange(info) {
          if (info.file.status === 'uploading') {
            _this.setState({ uploading: true });
          } else if (info.file.status === 'done') {
            (function () {
              var file = info.file.response;
              file.id = file.public_id;
              _this.props.done({ id: file.id, token: _this.props.data.cloudinaryRequest.signature }).then(function () {
                if (_this.props.onSave) _this.props.onSave(file);else _this.setState({ uploading: false });
              });
            })();
          } else if (info.file.status === 'error') {
            console.log('error');
          }
        }
      };
    }, _this.handleCancel = function () {
      _this.props.onClose();
    }, _this.handleCreate = function () {
      var _this$props = _this.props,
          save = _this$props.save,
          onClose = _this$props.onClose;

      var form = _this.form;
      form.validateFields(function (err, values) {
        if (err) return;
        save(values, { commit: false }).then(onClose);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UploadModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          modal = _props.modal;
      var uploading = this.state.uploading;

      var inner = _react2.default.createElement(
        Dragger,
        this.getUploadPops(),
        _react2.default.createElement(
          'p',
          { className: 'ant-upload-drag-icon' },
          _react2.default.createElement('i', { className: 'fa fa-inbox fa-5x' })
        ),
        uploading === undefined ? _react2.default.createElement(
          'p',
          { className: 'ant-upload-text' },
          'Klicken oder Datei hierher ziehen'
        ) : null,
        uploading === true ? _react2.default.createElement(
          'p',
          { className: 'ant-upload-text' },
          'Bitte warten ...'
        ) : null,
        uploading === false ? _react2.default.createElement(
          'p',
          { className: 'ant-upload-text' },
          'Fertig!'
        ) : null
      );
      return modal ? _react2.default.createElement(
        _antd.Modal,
        _extends({}, modalSettings, { title: 'Upload', onCancel: onClose, onOk: onClose, footer: [] }),
        inner
      ) : inner;
    }
  }]);

  return UploadModal;
}(_react.Component)) || _class) || _class) || _class);
exports.default = UploadModal;