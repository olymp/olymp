import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query checkTokenMail($token: String) {\n      valid: checkToken(token: $token)\n      email: checkTokenMail(token: $token)\n    }\n  '], ['\n    query checkTokenMail($token: String) {\n      valid: checkToken(token: $token)\n      email: checkTokenMail(token: $token)\n    }\n  ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import FaEnvelope from 'olymp-icons/lib/fa-envelope';
import FaUnlock from 'olymp-icons/lib/fa-unlock';

import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp-utils';
import Base from './base';
import { createRegister } from '../redux';

var _ref5 = React.createElement(FaEnvelope, { size: 12 });

var _ref6 = React.createElement(FaUnlock, { size: 12 });

var _ref7 = React.createElement(FaUnlock, { size: 12 });

var AuthRegister = (_dec = connect(null, function (dispatch) {
  return {
    register: createRegister(dispatch)
  };
}), _dec2 = _Form.create(), _dec3 = graphql(gql(_templateObject), {
  options: function options(_ref) {
    var token = _ref.token;
    return {
      fetchPolicy: !token ? 'cache-only' : 'network-only',
      variables: {
        token: token
      }
    };
  }
}), _dec(_class = _dec2(_class = _dec3(_class = function (_Component) {
  _inherits(AuthRegister, _Component);

  function AuthRegister() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthRegister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthRegister.__proto__ || Object.getPrototypeOf(AuthRegister)).call.apply(_ref2, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          register = _this$props.register,
          onClose = _this$props.onClose,
          onOk = _this$props.onOk,
          form = _this$props.form,
          token = _this$props.token;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        if (values.password2 !== values.password) {
          return onError(new Error('Die Passwörter stimmen nicht überein!'));
        }
        var user = _extends({}, values);
        delete user.password;
        delete user.password2;
        register({ user: user, password: values.password, token: token }).then(function () {
          onSuccess('Bitte checken Sie Ihre E-Mails');
          onOk({ email: values.email, token: token });
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthRegister, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOpen = _props.isOpen,
          form = _props.form,
          onClose = _props.onClose,
          extraFields = _props.extraFields,
          data = _props.data,
          token = _props.token;
      var getFieldDecorator = form.getFieldDecorator;

      var loading = token && !data.error && data.valid !== true && data.valid !== false;
      var valid = token && !data.error && data.valid !== false;

      return React.createElement(
        Base,
        {
          isOpen: isOpen,
          title: 'Registrieren',
          onOk: data.valid ? this.ok : null,
          onCancel: onClose,
          loading: loading ? 'Prüfe Token ...' : false
        },
        !valid && token && React.createElement(
          'p',
          { style: { textAlign: 'center' } },
          'Das Token ist ung\xFCltig oder abgelaufen. Bitte',
          ' ',
          React.createElement(
            Link,
            {
              query: function query(_ref3) {
                var confirm = _ref3.confirm,
                    query = _objectWithoutProperties(_ref3, ['confirm']);

                return _extends({}, query, {
                  feedback: null
                });
              }
            },
            'kontaktieren Sie den Support'
          ),
          '.'
        ),
        !valid && !token && React.createElement(
          'p',
          { style: { textAlign: 'center' } },
          'Sie ben\xF6tigen eine g\xFCltige Einladung um sich zu registrieren.',
          ' ',
          React.createElement(
            Link,
            {
              query: function query(_ref4) {
                var confirm = _ref4.confirm,
                    query = _objectWithoutProperties(_ref4, ['confirm']);

                return _extends({}, query, {
                  feedback: null
                });
              }
            },
            'Kontaktieren Sie den Support'
          ),
          '.'
        ),
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'name', label: 'Name' }, layout),
          getFieldDecorator('name', {
            rules: [{ required: true, message: 'Bitte geben Sie Ihren Namen an' }]
          })(React.createElement(_Input, {
            type: 'text',
            placeholder: 'Name',
            onKeyPress: onEnterFocus(function () {
              return _this2.mail;
            })
          }))
        ),
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'email', label: 'E-Mail' }, layout),
          getFieldDecorator('email', {
            initialValue: data.email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }]
          })(React.createElement(_Input, {
            type: 'email',
            disabled: !!data.email,
            placeholder: 'E-Mail',
            onKeyPress: onEnterFocus(function () {
              return _this2.pw1;
            }),
            ref: function ref(x) {
              return _this2.mail = x;
            },
            suffix: _ref5
          }))
        ),
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'password', label: 'Passwort' }, layout),
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }]
          })(React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password',
            onKeyPress: onEnterFocus(function () {
              return _this2.pw2;
            }),
            ref: function ref(x) {
              return _this2.pw1 = x;
            },
            suffix: _ref6
          }))
        ),
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'password2', label: 'Wiederholen' }, layout),
          getFieldDecorator('password2', {
            rules: [{
              required: true,
              message: 'Bitte die Passwort-Wiederholung angeben!'
            }]
          })(React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password wiederholen',
            onKeyPress: onEnterOk(this.ok),
            ref: function ref(x) {
              return _this2.pw2 = x;
            },
            suffix: _ref7
          }))
        ),
        valid && extraFields ? extraFields({
          layout: layout,
          getFieldDecorator: getFieldDecorator,
          state: this.state,
          setState: this.setState
        }) : null,
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            { query: function query(_ref8) {
                var register = _ref8.register,
                    query = _objectWithoutProperties(_ref8, ['register']);

                return _extends({}, query, { login: null });
              } },
            'Zur Anmeldung'
          )
        )
      );
    }
  }]);

  return AuthRegister;
}(Component)) || _class) || _class) || _class);
export { AuthRegister as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvcmVnaXN0ZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsImNvbm5lY3QiLCJMaW5rIiwib25FbnRlckZvY3VzIiwib25FbnRlck9rIiwibGF5b3V0Iiwib25FcnJvciIsIm9uU3VjY2VzcyIsIkJhc2UiLCJjcmVhdGVSZWdpc3RlciIsIkF1dGhSZWdpc3RlciIsInJlZ2lzdGVyIiwiZGlzcGF0Y2giLCJjcmVhdGUiLCJvcHRpb25zIiwidG9rZW4iLCJmZXRjaFBvbGljeSIsInZhcmlhYmxlcyIsIm9rIiwicHJvcHMiLCJvbkNsb3NlIiwib25PayIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsInBhc3N3b3JkMiIsInBhc3N3b3JkIiwiRXJyb3IiLCJ1c2VyIiwidGhlbiIsImVtYWlsIiwiY2F0Y2giLCJpc09wZW4iLCJleHRyYUZpZWxkcyIsImRhdGEiLCJnZXRGaWVsZERlY29yYXRvciIsImxvYWRpbmciLCJlcnJvciIsInZhbGlkIiwidGV4dEFsaWduIiwiY29uZmlybSIsInF1ZXJ5IiwiZmVlZGJhY2siLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1haWwiLCJpbml0aWFsVmFsdWUiLCJwdzEiLCJ4IiwicHcyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7OztBQUdBLFNBQ0VDLFlBREYsRUFFRUMsU0FGRixFQUdFQyxNQUhGLEVBSUVDLE9BSkYsRUFLRUMsU0FMRixRQU1PLGFBTlA7QUFPQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixVQUEvQjs7WUFvSHdCLG9CQUFDLFVBQUQsSUFBWSxNQUFNLEVBQWxCLEc7O1lBaUJBLG9CQUFDLFFBQUQsSUFBVSxNQUFNLEVBQWhCLEc7O1lBb0JBLG9CQUFDLFFBQUQsSUFBVSxNQUFNLEVBQWhCLEc7O0lBbklIQyxZLFdBcEJwQlQsUUFBUSxJQUFSLEVBQWM7QUFBQSxTQUFhO0FBQzFCVSxjQUFVRixlQUFlRyxRQUFmO0FBRGdCLEdBQWI7QUFBQSxDQUFkLEMsVUFHQSxNQUFLQyxNQUFMLEUsVUFDQWIsUUFDQ0QsR0FERCxtQkFPQztBQUNFZSxXQUFTO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDdkJDLG1CQUFhLENBQUNELEtBQUQsR0FBUyxZQUFULEdBQXdCLGNBRGQ7QUFFdkJFLGlCQUFXO0FBQ1RGO0FBRFM7QUFGWSxLQUFoQjtBQUFBO0FBRFgsQ0FQRCxDOzs7Ozs7Ozs7Ozs7OztvTUFpQkNHLEUsR0FBSyxZQUFNO0FBQUEsd0JBQ3dDLE1BQUtDLEtBRDdDO0FBQUEsVUFDRFIsUUFEQyxlQUNEQSxRQURDO0FBQUEsVUFDU1MsT0FEVCxlQUNTQSxPQURUO0FBQUEsVUFDa0JDLElBRGxCLGVBQ2tCQSxJQURsQjtBQUFBLFVBQ3dCQyxJQUR4QixlQUN3QkEsSUFEeEI7QUFBQSxVQUM4QlAsS0FEOUIsZUFDOEJBLEtBRDlCOztBQUVUTyxXQUFLQyxjQUFMLENBQW9CLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNuQyxZQUFJRCxHQUFKLEVBQVM7QUFDUCxpQkFBT2xCLFFBQVFrQixHQUFSLENBQVA7QUFDRDtBQUNELFlBQUlDLE9BQU9DLFNBQVAsS0FBcUJELE9BQU9FLFFBQWhDLEVBQTBDO0FBQ3hDLGlCQUFPckIsUUFBUSxJQUFJc0IsS0FBSixDQUFVLHVDQUFWLENBQVIsQ0FBUDtBQUNEO0FBQ0QsWUFBTUMsb0JBQVlKLE1BQVosQ0FBTjtBQUNBLGVBQU9JLEtBQUtGLFFBQVo7QUFDQSxlQUFPRSxLQUFLSCxTQUFaO0FBQ0FmLGlCQUFTLEVBQUVrQixVQUFGLEVBQVFGLFVBQVVGLE9BQU9FLFFBQXpCLEVBQW1DWixZQUFuQyxFQUFULEVBQ0dlLElBREgsQ0FDUSxZQUFNO0FBQ1Z2QixvQkFBVSxnQ0FBVjtBQUNBYyxlQUFLLEVBQUVVLE9BQU9OLE9BQU9NLEtBQWhCLEVBQXVCaEIsWUFBdkIsRUFBTDtBQUNELFNBSkgsRUFLR2lCLEtBTEgsQ0FLUzFCLE9BTFQ7QUFNRCxPQWhCRDtBQWlCRCxLOzs7Ozs2QkFFUTtBQUFBOztBQUFBLG1CQUNxRCxLQUFLYSxLQUQxRDtBQUFBLFVBQ0NjLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NYLElBRFQsVUFDU0EsSUFEVDtBQUFBLFVBQ2VGLE9BRGYsVUFDZUEsT0FEZjtBQUFBLFVBQ3dCYyxXQUR4QixVQUN3QkEsV0FEeEI7QUFBQSxVQUNxQ0MsSUFEckMsVUFDcUNBLElBRHJDO0FBQUEsVUFDMkNwQixLQUQzQyxVQUMyQ0EsS0FEM0M7QUFBQSxVQUVDcUIsaUJBRkQsR0FFdUJkLElBRnZCLENBRUNjLGlCQUZEOztBQUdQLFVBQU1DLFVBQ0p0QixTQUFTLENBQUNvQixLQUFLRyxLQUFmLElBQXdCSCxLQUFLSSxLQUFMLEtBQWUsSUFBdkMsSUFBK0NKLEtBQUtJLEtBQUwsS0FBZSxLQURoRTtBQUVBLFVBQU1BLFFBQVF4QixTQUFTLENBQUNvQixLQUFLRyxLQUFmLElBQXdCSCxLQUFLSSxLQUFMLEtBQWUsS0FBckQ7O0FBRUEsYUFDRTtBQUFDLFlBQUQ7QUFBQTtBQUNFLGtCQUFRTixNQURWO0FBRUUsaUJBQU0sY0FGUjtBQUdFLGdCQUFNRSxLQUFLSSxLQUFMLEdBQWEsS0FBS3JCLEVBQWxCLEdBQXVCLElBSC9CO0FBSUUsb0JBQVVFLE9BSlo7QUFLRSxtQkFBU2lCLFVBQVUsaUJBQVYsR0FBOEI7QUFMekM7QUFPRyxTQUFDRSxLQUFELElBQ0N4QixLQURELElBRUc7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFeUIsV0FBVyxRQUFiLEVBQVY7QUFBQTtBQUNnRCxhQURoRDtBQUVFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHFCQUFPO0FBQUEsb0JBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLG9CQUFlQyxLQUFmOztBQUFBLG9DQUNGQSxLQURFO0FBRUxDLDRCQUFVO0FBRkw7QUFBQTtBQURUO0FBQUE7QUFBQSxXQUZGO0FBQUE7QUFBQSxTQVROO0FBcUJHLFNBQUNKLEtBQUQsSUFDQyxDQUFDeEIsS0FERixJQUVHO0FBQUE7QUFBQSxZQUFHLE9BQU8sRUFBRXlCLFdBQVcsUUFBYixFQUFWO0FBQUE7QUFDZ0UsYUFEaEU7QUFFRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxxQkFBTztBQUFBLG9CQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxvQkFBZUMsS0FBZjs7QUFBQSxvQ0FDRkEsS0FERTtBQUVMQyw0QkFBVTtBQUZMO0FBQUE7QUFEVDtBQUFBO0FBQUEsV0FGRjtBQUFBO0FBQUEsU0F2Qk47QUFtQ0dKLGlCQUNDO0FBQUEsZ0JBQU0sSUFBTjtBQUFBLHFCQUFXLEtBQUksTUFBZixFQUFzQixPQUFNLE1BQTVCLElBQXVDbEMsTUFBdkM7QUFDRytCLDRCQUFrQixNQUFsQixFQUEwQjtBQUN6QlEsbUJBQU8sQ0FDTCxFQUFFQyxVQUFVLElBQVosRUFBa0JDLFNBQVMsZ0NBQTNCLEVBREs7QUFEa0IsV0FBMUIsRUFLQztBQUNFLGtCQUFLLE1BRFA7QUFFRSx5QkFBWSxNQUZkO0FBR0Usd0JBQVkzQyxhQUFhO0FBQUEscUJBQU0sT0FBSzRDLElBQVg7QUFBQSxhQUFiO0FBSGQsWUFMRDtBQURILFNBcENKO0FBa0RHUixpQkFDQztBQUFBLGdCQUFNLElBQU47QUFBQSxxQkFBVyxLQUFJLE9BQWYsRUFBdUIsT0FBTSxRQUE3QixJQUEwQ2xDLE1BQTFDO0FBQ0crQiw0QkFBa0IsT0FBbEIsRUFBMkI7QUFDMUJZLDBCQUFjYixLQUFLSixLQURPO0FBRTFCYSxtQkFBTyxDQUNMLEVBQUVDLFVBQVUsSUFBWixFQUFrQkMsU0FBUyxpQ0FBM0IsRUFESztBQUZtQixXQUEzQixFQU1DO0FBQ0Usa0JBQUssT0FEUDtBQUVFLHNCQUFVLENBQUMsQ0FBQ1gsS0FBS0osS0FGbkI7QUFHRSx5QkFBWSxRQUhkO0FBSUUsd0JBQVk1QixhQUFhO0FBQUEscUJBQU0sT0FBSzhDLEdBQVg7QUFBQSxhQUFiLENBSmQ7QUFLRSxpQkFBSztBQUFBLHFCQUFNLE9BQUtGLElBQUwsR0FBWUcsQ0FBbEI7QUFBQSxhQUxQO0FBTUU7QUFORixZQU5EO0FBREgsU0FuREo7QUFxRUdYLGlCQUNDO0FBQUEsZ0JBQU0sSUFBTjtBQUFBLHFCQUFXLEtBQUksVUFBZixFQUEwQixPQUFNLFVBQWhDLElBQStDbEMsTUFBL0M7QUFDRytCLDRCQUFrQixVQUFsQixFQUE4QjtBQUM3QlEsbUJBQU8sQ0FDTCxFQUFFQyxVQUFVLElBQVosRUFBa0JDLFNBQVMsNkJBQTNCLEVBREs7QUFEc0IsV0FBOUIsRUFLQztBQUNFLGtCQUFLLFVBRFA7QUFFRSx5QkFBWSxVQUZkO0FBR0Usd0JBQVkzQyxhQUFhO0FBQUEscUJBQU0sT0FBS2dELEdBQVg7QUFBQSxhQUFiLENBSGQ7QUFJRSxpQkFBSztBQUFBLHFCQUFNLE9BQUtGLEdBQUwsR0FBV0MsQ0FBakI7QUFBQSxhQUpQO0FBS0U7QUFMRixZQUxEO0FBREgsU0F0RUo7QUFzRkdYLGlCQUNDO0FBQUEsZ0JBQU0sSUFBTjtBQUFBLHFCQUFXLEtBQUksV0FBZixFQUEyQixPQUFNLGFBQWpDLElBQW1EbEMsTUFBbkQ7QUFDRytCLDRCQUFrQixXQUFsQixFQUErQjtBQUM5QlEsbUJBQU8sQ0FDTDtBQUNFQyx3QkFBVSxJQURaO0FBRUVDLHVCQUFTO0FBRlgsYUFESztBQUR1QixXQUEvQixFQVFDO0FBQ0Usa0JBQUssVUFEUDtBQUVFLHlCQUFZLHNCQUZkO0FBR0Usd0JBQVkxQyxVQUFVLEtBQUtjLEVBQWYsQ0FIZDtBQUlFLGlCQUFLO0FBQUEscUJBQU0sT0FBS2lDLEdBQUwsR0FBV0QsQ0FBakI7QUFBQSxhQUpQO0FBS0U7QUFMRixZQVJEO0FBREgsU0F2Rko7QUEwR0dYLGlCQUFTTCxXQUFULEdBQ0dBLFlBQVk7QUFDVjdCLHdCQURVO0FBRVYrQiw4Q0FGVTtBQUdWZ0IsaUJBQU8sS0FBS0EsS0FIRjtBQUlWQyxvQkFBVSxLQUFLQTtBQUpMLFNBQVosQ0FESCxHQU9HLElBakhOO0FBa0hFO0FBQUMsY0FBRCxDQUFNLEtBQU47QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxjQUFNLE9BQU87QUFBQSxvQkFBRzFDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLG9CQUFnQitCLEtBQWhCOztBQUFBLG9DQUFrQ0EsS0FBbEMsSUFBeUNZLE9BQU8sSUFBaEQ7QUFBQSxlQUFiO0FBQUE7QUFBQTtBQURGO0FBbEhGLE9BREY7QUEwSEQ7Ozs7RUF2SnVDeEQsUztTQUFyQlksWSIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3ZpZXdzL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFFbnZlbG9wZSwgRmFVbmxvY2sgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQge1xuICBvbkVudGVyRm9jdXMsXG4gIG9uRW50ZXJPayxcbiAgbGF5b3V0LFxuICBvbkVycm9yLFxuICBvblN1Y2Nlc3MsXG59IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVSZWdpc3RlciB9IGZyb20gJy4uL3JlZHV4JztcblxuQGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgcmVnaXN0ZXI6IGNyZWF0ZVJlZ2lzdGVyKGRpc3BhdGNoKSxcbn0pKVxuQEZvcm0uY3JlYXRlKClcbkBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgY2hlY2tUb2tlbk1haWwoJHRva2VuOiBTdHJpbmcpIHtcbiAgICAgIHZhbGlkOiBjaGVja1Rva2VuKHRva2VuOiAkdG9rZW4pXG4gICAgICBlbWFpbDogY2hlY2tUb2tlbk1haWwodG9rZW46ICR0b2tlbilcbiAgICB9XG4gIGAsXG4gIHtcbiAgICBvcHRpb25zOiAoeyB0b2tlbiB9KSA9PiAoe1xuICAgICAgZmV0Y2hQb2xpY3k6ICF0b2tlbiA/ICdjYWNoZS1vbmx5JyA6ICduZXR3b3JrLW9ubHknLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHRva2VuLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIG9uQ2xvc2UsIG9uT2ssIGZvcm0sIHRva2VuIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnBhc3N3b3JkMiAhPT0gdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKG5ldyBFcnJvcignRGllIFBhc3N3w7ZydGVyIHN0aW1tZW4gbmljaHQgw7xiZXJlaW4hJykpO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IHsgLi4udmFsdWVzIH07XG4gICAgICBkZWxldGUgdXNlci5wYXNzd29yZDtcbiAgICAgIGRlbGV0ZSB1c2VyLnBhc3N3b3JkMjtcbiAgICAgIHJlZ2lzdGVyKHsgdXNlciwgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCwgdG9rZW4gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIG9uU3VjY2VzcygnQml0dGUgY2hlY2tlbiBTaWUgSWhyZSBFLU1haWxzJyk7XG4gICAgICAgICAgb25Payh7IGVtYWlsOiB2YWx1ZXMuZW1haWwsIHRva2VuIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob25FcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBmb3JtLCBvbkNsb3NlLCBleHRyYUZpZWxkcywgZGF0YSwgdG9rZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gZm9ybTtcbiAgICBjb25zdCBsb2FkaW5nID1cbiAgICAgIHRva2VuICYmICFkYXRhLmVycm9yICYmIGRhdGEudmFsaWQgIT09IHRydWUgJiYgZGF0YS52YWxpZCAhPT0gZmFsc2U7XG4gICAgY29uc3QgdmFsaWQgPSB0b2tlbiAmJiAhZGF0YS5lcnJvciAmJiBkYXRhLnZhbGlkICE9PSBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QmFzZVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgdGl0bGU9XCJSZWdpc3RyaWVyZW5cIlxuICAgICAgICBvbk9rPXtkYXRhLnZhbGlkID8gdGhpcy5vayA6IG51bGx9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nID8gJ1Byw7xmZSBUb2tlbiAuLi4nIDogZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHshdmFsaWQgJiZcbiAgICAgICAgICB0b2tlbiAmJiAoXG4gICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICBEYXMgVG9rZW4gaXN0IHVuZ8O8bHRpZyBvZGVyIGFiZ2VsYXVmZW4uIEJpdHRleycgJ31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBxdWVyeT17KHsgY29uZmlybSwgLi4ucXVlcnkgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgZmVlZGJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBrb250YWt0aWVyZW4gU2llIGRlbiBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvTGluaz4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyF2YWxpZCAmJlxuICAgICAgICAgICF0b2tlbiAmJiAoXG4gICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICBTaWUgYmVuw7Z0aWdlbiBlaW5lIGfDvGx0aWdlIEVpbmxhZHVuZyB1bSBzaWNoIHp1IHJlZ2lzdHJpZXJlbi57JyAnfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHF1ZXJ5PXsoeyBjb25maXJtLCAuLi5xdWVyeSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBmZWVkYmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEtvbnRha3RpZXJlbiBTaWUgZGVuIFN1cHBvcnRcbiAgICAgICAgICAgICAgPC9MaW5rPi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICB7dmFsaWQgJiYgKFxuICAgICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHsuLi5sYXlvdXR9PlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCduYW1lJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgSWhyZW4gTmFtZW4gYW4nIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25FbnRlckZvY3VzKCgpID0+IHRoaXMubWFpbCl9XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkICYmIChcbiAgICAgICAgICA8Rm9ybS5JdGVtIGtleT1cImVtYWlsXCIgbGFiZWw9XCJFLU1haWxcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZW1haWwnLCB7XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZGF0YS5lbWFpbCxcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZ2ViZW4gU2llIElocmUgRS1NYWlsIGFuIScgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWRhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLU1haWxcIlxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLnB3MSl9XG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+ICh0aGlzLm1haWwgPSB4KX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxGYUVudmVsb3BlIHNpemU9ezEyfSAvPn1cbiAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWQgJiYgKFxuICAgICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3J0XCIgey4uLmxheW91dH0+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdCaXR0ZSBkYXMgUGFzc3dvcnQgYW5nZWJlbiEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkVudGVyRm9jdXMoKCkgPT4gdGhpcy5wdzIpfVxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiAodGhpcy5wdzEgPSB4KX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxGYVVubG9jayBzaXplPXsxMn0gLz59XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkICYmIChcbiAgICAgICAgICA8Rm9ybS5JdGVtIGtleT1cInBhc3N3b3JkMlwiIGxhYmVsPVwiV2llZGVyaG9sZW5cIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncGFzc3dvcmQyJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0JpdHRlIGRpZSBQYXNzd29ydC1XaWVkZXJob2x1bmcgYW5nZWJlbiEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIHdpZWRlcmhvbGVuXCJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkVudGVyT2sodGhpcy5vayl9XG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+ICh0aGlzLnB3MiA9IHgpfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17PEZhVW5sb2NrIHNpemU9ezEyfSAvPn1cbiAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWQgJiYgZXh0cmFGaWVsZHNcbiAgICAgICAgICA/IGV4dHJhRmllbGRzKHtcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICBnZXRGaWVsZERlY29yYXRvcixcbiAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgIHNldFN0YXRlOiB0aGlzLnNldFN0YXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDxCYXNlLkxpbmtzPlxuICAgICAgICAgIDxMaW5rIHF1ZXJ5PXsoeyByZWdpc3RlciwgLi4ucXVlcnkgfSkgPT4gKHsgLi4ucXVlcnksIGxvZ2luOiBudWxsIH0pfT5cbiAgICAgICAgICAgIFp1ciBBbm1lbGR1bmdcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQmFzZS5MaW5rcz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=
