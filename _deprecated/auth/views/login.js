import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';

import Form, { defaultLayout } from 'olymp-ui/form';
import FaUser from 'olymp-icons/lib/fa-user';
import FaUnlock from 'olymp-icons/lib/fa-unlock';

import { onEnterFocus, onEnterOk, onError, onSuccess } from 'olymp-utils';
import { createLogin } from '../redux';
import Base from './base';

var _ref3 = React.createElement(FaUser, { size: 14 });

var _ref4 = React.createElement(FaUnlock, { size: 14 });

var _ref5 = React.createElement(FaUnlock, { size: 14 });

var AuthLogin = (_dec = connect(null, function (dispatch) {
  return {
    login: createLogin(dispatch)
  };
}), _dec2 = Form.create(), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(AuthLogin, _Component);

  function AuthLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AuthLogin.__proto__ || Object.getPrototypeOf(AuthLogin)).call.apply(_ref, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          login = _this$props.login,
          onClose = _this$props.onClose,
          form = _this$props.form,
          onTotp = _this$props.onTotp;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        login(values).then(function (_ref2) {
          var name = _ref2.name;

          onSuccess('Willkommen, ' + name);
          onClose();
        }).catch(function (err) {
          if (err.message.indexOf('Please provide a totp token') !== -1) {
            onTotp();
          } else {
            onError(err);
          }
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthLogin, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOpen = _props.isOpen,
          email = _props.email,
          form = _props.form,
          onClose = _props.onClose,
          totp = _props.totp;
      var getFieldDecorator = form.getFieldDecorator;


      return React.createElement(
        Base,
        { isOpen: isOpen, title: 'Anmelden', onOk: this.ok, onCancel: onClose },
        React.createElement(
          Form.Item,
          _extends({ key: 'email', label: 'E-Mail' }, defaultLayout),
          getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }]
          })(React.createElement(_Input, {
            type: 'email',
            placeholder: 'E-Mail',
            onKeyPress: onEnterFocus(function () {
              return _this2.input;
            }),
            suffix: _ref3
          }))
        ),
        React.createElement(
          Form.Item,
          _extends({ key: 'password', label: 'Passwort' }, defaultLayout),
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }]
          })(React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password',
            onKeyPress: onEnterOk(this.ok),
            ref: function ref(x) {
              return _this2.input = x;
            },
            suffix: _ref4
          }))
        ),
        totp && React.createElement(
          Form.Item,
          _extends({ key: 'totp', label: 'Token' }, defaultLayout),
          getFieldDecorator('totp')(React.createElement(_Input, {
            type: 'text',
            placeholder: 'Token',
            onKeyPress: onEnterOk(this.ok),
            ref: function ref(x) {
              return _this2.totp = x;
            },
            suffix: _ref5
          }))
        ),
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            {
              query: function query(_ref6) {
                var login = _ref6.login,
                    totp = _ref6.totp,
                    query = _objectWithoutProperties(_ref6, ['login', 'totp']);

                return _extends({}, query, {
                  register: null
                });
              }
            },
            'Zur Registrierung'
          ),
          React.createElement(
            Link,
            {
              query: function query(_ref7) {
                var login = _ref7.login,
                    totp = _ref7.totp,
                    query = _objectWithoutProperties(_ref7, ['login', 'totp']);

                return _extends({}, query, {
                  forgot: form.getFieldValue('email') || null
                });
              }
            },
            'Passwort vergessen?'
          )
        )
      );
    }
  }]);

  return AuthLogin;
}(Component)) || _class) || _class);
export { AuthLogin as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvbG9naW4uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkxpbmsiLCJGb3JtIiwiZGVmYXVsdExheW91dCIsIm9uRW50ZXJGb2N1cyIsIm9uRW50ZXJPayIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJjcmVhdGVMb2dpbiIsIkJhc2UiLCJBdXRoTG9naW4iLCJsb2dpbiIsImRpc3BhdGNoIiwiY3JlYXRlIiwib2siLCJwcm9wcyIsIm9uQ2xvc2UiLCJmb3JtIiwib25Ub3RwIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJ0aGVuIiwibmFtZSIsImNhdGNoIiwibWVzc2FnZSIsImluZGV4T2YiLCJpc09wZW4iLCJlbWFpbCIsInRvdHAiLCJnZXRGaWVsZERlY29yYXRvciIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJpbnB1dCIsIngiLCJxdWVyeSIsInJlZ2lzdGVyIiwiZm9yZ290IiwiZ2V0RmllbGRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztBQUVBLE9BQU9DLElBQVAsSUFBZUMsYUFBZixRQUFvQyxlQUFwQzs7OztBQUVBLFNBQVNDLFlBQVQsRUFBdUJDLFNBQXZCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsU0FBM0MsUUFBNEQsYUFBNUQ7QUFDQSxTQUFTQyxXQUFULFFBQTRCLFVBQTVCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7WUE2Q3NCLG9CQUFDLE1BQUQsSUFBUSxNQUFNLEVBQWQsRzs7WUFhQSxvQkFBQyxRQUFELElBQVUsTUFBTSxFQUFoQixHOztZQVlFLG9CQUFDLFFBQUQsSUFBVSxNQUFNLEVBQWhCLEc7O0lBaEVIQyxTLFdBSnBCVixR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QUFLZSxJQUFMLEdBQVlNLENBQWxCO0FBQUEsYUFKUDtBQUtFO0FBTEYsWUFERDtBQURILFNBOUJKO0FBMkNFO0FBQUMsY0FBRCxDQUFNLEtBQU47QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHFCQUFPO0FBQUEsb0JBQUd4QixLQUFILFNBQUdBLEtBQUg7QUFBQSxvQkFBVWtCLElBQVYsU0FBVUEsSUFBVjtBQUFBLG9CQUFtQk8sS0FBbkI7O0FBQUEsb0NBQ0ZBLEtBREU7QUFFTEMsNEJBQVU7QUFGTDtBQUFBO0FBRFQ7QUFBQTtBQUFBLFdBREY7QUFTRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxxQkFBTztBQUFBLG9CQUFHMUIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsb0JBQVVrQixJQUFWLFNBQVVBLElBQVY7QUFBQSxvQkFBbUJPLEtBQW5COztBQUFBLG9DQUNGQSxLQURFO0FBRUxFLDBCQUFRckIsS0FBS3NCLGFBQUwsQ0FBbUIsT0FBbkIsS0FBK0I7QUFGbEM7QUFBQTtBQURUO0FBQUE7QUFBQTtBQVRGO0FBM0NGLE9BREY7QUFnRUQ7Ozs7RUExRm9DeEMsUztTQUFsQlcsUyIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3ZpZXdzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRm9ybSwgeyBkZWZhdWx0TGF5b3V0IH0gZnJvbSAnb2x5bXAtdWkvZm9ybSc7XG5pbXBvcnQgeyBGYVVzZXIsIEZhVW5sb2NrIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgb25FbnRlckZvY3VzLCBvbkVudGVyT2ssIG9uRXJyb3IsIG9uU3VjY2VzcyB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2luIH0gZnJvbSAnLi4vcmVkdXgnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuQGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW46IGNyZWF0ZUxvZ2luKGRpc3BhdGNoKSxcbn0pKVxuQEZvcm0uY3JlYXRlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9naW4sIG9uQ2xvc2UsIGZvcm0sIG9uVG90cCB9ID0gdGhpcy5wcm9wcztcbiAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgbG9naW4odmFsdWVzKVxuICAgICAgICAudGhlbigoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICBvblN1Y2Nlc3MoYFdpbGxrb21tZW4sICR7bmFtZX1gKTtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdQbGVhc2UgcHJvdmlkZSBhIHRvdHAgdG9rZW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9uVG90cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGVtYWlsLCBmb3JtLCBvbkNsb3NlLCB0b3RwIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2UgaXNPcGVuPXtpc09wZW59IHRpdGxlPVwiQW5tZWxkZW5cIiBvbk9rPXt0aGlzLm9rfSBvbkNhbmNlbD17b25DbG9zZX0+XG4gICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwiZW1haWxcIiBsYWJlbD1cIkUtTWFpbFwiIHsuLi5kZWZhdWx0TGF5b3V0fT5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2VtYWlsJywge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBlbWFpbCxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgSWhyZSBFLU1haWwgYW4hJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLmlucHV0KX1cbiAgICAgICAgICAgICAgc3VmZml4PXs8RmFVc2VyIHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIGtleT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29ydFwiIHsuLi5kZWZhdWx0TGF5b3V0fT5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZGFzIFBhc3N3b3J0IGFuZ2ViZW4hJyB9XSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25FbnRlck9rKHRoaXMub2spfVxuICAgICAgICAgICAgICByZWY9e3ggPT4gKHRoaXMuaW5wdXQgPSB4KX1cbiAgICAgICAgICAgICAgc3VmZml4PXs8RmFVbmxvY2sgc2l6ZT17MTR9IC8+fVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIHt0b3RwICYmIChcbiAgICAgICAgICA8Rm9ybS5JdGVtIGtleT1cInRvdHBcIiBsYWJlbD1cIlRva2VuXCIgey4uLmRlZmF1bHRMYXlvdXR9PlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0b3RwJykoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRva2VuXCJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkVudGVyT2sodGhpcy5vayl9XG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+ICh0aGlzLnRvdHAgPSB4KX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxGYVVubG9jayBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgKX1cblxuICAgICAgICA8QmFzZS5MaW5rcz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgcXVlcnk9eyh7IGxvZ2luLCB0b3RwLCAuLi5xdWVyeSB9KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgcmVnaXN0ZXI6IG51bGwsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBadXIgUmVnaXN0cmllcnVuZ1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgcXVlcnk9eyh7IGxvZ2luLCB0b3RwLCAuLi5xdWVyeSB9KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgZm9yZ290OiBmb3JtLmdldEZpZWxkVmFsdWUoJ2VtYWlsJykgfHwgbnVsbCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhc3N3b3J0IHZlcmdlc3Nlbj9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQmFzZS5MaW5rcz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=
