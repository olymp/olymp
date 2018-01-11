import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  '], ['\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'olymp-router';

import { onSuccess, onError } from 'olymp-utils';
import Base from './base';
import Countdown from '../countdown';

var AuthConfirm = (_dec = _Form.create(), _dec2 = graphql(gql(_templateObject), {
  options: function options(_ref) {
    var token = _ref.token;
    return {
      fetchPolicy: !token ? 'cache-only' : 'network-only',
      variables: {
        token: token
      }
    };
  }
}), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(AuthConfirm, _Component);

  function AuthConfirm() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthConfirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthConfirm.__proto__ || Object.getPrototypeOf(AuthConfirm)).call.apply(_ref2, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          auth = _this$props.auth,
          onOk = _this$props.onOk,
          form = _this$props.form,
          token = _this$props.token;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        auth.confirm(token).then(function (_ref3) {
          var email = _ref3.email;

          onSuccess('Sie können sich jetzt anmelden');
          onOk({ email: email });
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthConfirm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          pathname = _props.pathname,
          onClose = _props.onClose,
          data = _props.data;

      var loading = data.valid !== true && data.valid !== false;
      var valid = data.valid !== false;

      return React.createElement(
        Base,
        {
          isOpen: isOpen,
          title: 'Best\xE4tigen',
          onOk: data.valid ? this.ok : null,
          onCancel: onClose,
          loading: loading ? 'Prüfe Token ...' : false,
          okText: 'Sofort best\xE4tigen'
        },
        !valid && React.createElement(
          'p',
          { style: { textAlign: 'center' } },
          'Das Token ist ung\xFCltig oder abgelaufen. Bitte',
          ' ',
          React.createElement(
            Link,
            {
              to: { pathname: pathname, query: { register: null, confirm: undefined } }
            },
            'registrieren Sie sich erneut'
          ),
          ' ',
          'oder',
          ' ',
          React.createElement(
            Link,
            {
              to: { pathname: pathname, query: { feedback: null, confirm: undefined } }
            },
            'kontaktieren Sie den Support'
          ),
          '.'
        ),
        valid && React.createElement(
          'div',
          { style: { textAlign: 'center' } },
          'Automatische best\xE4tigung in',
          React.createElement(
            'h1',
            null,
            React.createElement(Countdown, {
              initialTimeRemaining: 5000,
              completeCallback: this.ok
            })
          )
        ),
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            { to: { pathname: pathname, query: { login: null, confirm: undefined } } },
            'Zur Anmeldung'
          )
        )
      );
    }
  }]);

  return AuthConfirm;
}(Component)) || _class) || _class);
export { AuthConfirm as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvY29uZmlybS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJncWwiLCJncmFwaHFsIiwiTGluayIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJCYXNlIiwiQ291bnRkb3duIiwiQXV0aENvbmZpcm0iLCJjcmVhdGUiLCJvcHRpb25zIiwidG9rZW4iLCJmZXRjaFBvbGljeSIsInZhcmlhYmxlcyIsIm9rIiwicHJvcHMiLCJhdXRoIiwib25PayIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsImNvbmZpcm0iLCJ0aGVuIiwiZW1haWwiLCJjYXRjaCIsImlzT3BlbiIsInBhdGhuYW1lIiwib25DbG9zZSIsImRhdGEiLCJsb2FkaW5nIiwidmFsaWQiLCJ0ZXh0QWxpZ24iLCJxdWVyeSIsInJlZ2lzdGVyIiwidW5kZWZpbmVkIiwiZmVlZGJhY2siLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7QUFFQSxTQUFTQyxTQUFULEVBQW9CQyxPQUFwQixRQUFtQyxhQUFuQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCOztJQWtCcUJDLFcsV0FoQnBCLE1BQUtDLE1BQUwsRSxVQUNBUCxRQUNDRCxHQURELG1CQU1DO0FBQ0VTLFdBQVM7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN2QkMsbUJBQWEsQ0FBQ0QsS0FBRCxHQUFTLFlBQVQsR0FBd0IsY0FEZDtBQUV2QkUsaUJBQVc7QUFDVEY7QUFEUztBQUZZLEtBQWhCO0FBQUE7QUFEWCxDQU5ELEM7Ozs7Ozs7Ozs7Ozs7O2tNQWdCQ0csRSxHQUFLLFlBQU07QUFBQSx3QkFDMkIsTUFBS0MsS0FEaEM7QUFBQSxVQUNEQyxJQURDLGVBQ0RBLElBREM7QUFBQSxVQUNLQyxJQURMLGVBQ0tBLElBREw7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQlAsS0FEakIsZUFDaUJBLEtBRGpCOztBQUVUTyxXQUFLQyxjQUFMLENBQW9CLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNuQyxZQUFJRCxHQUFKLEVBQVM7QUFDUCxpQkFBT2YsUUFBUWUsR0FBUixDQUFQO0FBQ0Q7QUFDREosYUFDR00sT0FESCxDQUNXWCxLQURYLEVBRUdZLElBRkgsQ0FFUSxpQkFBZTtBQUFBLGNBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDbkJwQixvQkFBVSxnQ0FBVjtBQUNBYSxlQUFLLEVBQUVPLFlBQUYsRUFBTDtBQUNELFNBTEgsRUFNR0MsS0FOSCxDQU1TcEIsT0FOVDtBQU9ELE9BWEQ7QUFZRCxLOzs7Ozs2QkFFUTtBQUFBLG1CQUNxQyxLQUFLVSxLQUQxQztBQUFBLFVBQ0NXLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLFFBRFQsVUFDU0EsUUFEVDtBQUFBLFVBQ21CQyxPQURuQixVQUNtQkEsT0FEbkI7QUFBQSxVQUM0QkMsSUFENUIsVUFDNEJBLElBRDVCOztBQUVQLFVBQU1DLFVBQVVELEtBQUtFLEtBQUwsS0FBZSxJQUFmLElBQXVCRixLQUFLRSxLQUFMLEtBQWUsS0FBdEQ7QUFDQSxVQUFNQSxRQUFRRixLQUFLRSxLQUFMLEtBQWUsS0FBN0I7O0FBRUEsYUFDRTtBQUFDLFlBQUQ7QUFBQTtBQUNFLGtCQUFRTCxNQURWO0FBRUUsaUJBQU0sZUFGUjtBQUdFLGdCQUFNRyxLQUFLRSxLQUFMLEdBQWEsS0FBS2pCLEVBQWxCLEdBQXVCLElBSC9CO0FBSUUsb0JBQVVjLE9BSlo7QUFLRSxtQkFBU0UsVUFBVSxpQkFBVixHQUE4QixLQUx6QztBQU1FLGtCQUFPO0FBTlQ7QUFRRyxTQUFDQyxLQUFELElBQ0M7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFQyxXQUFXLFFBQWIsRUFBVjtBQUFBO0FBQ2dELGFBRGhEO0FBRUU7QUFBQyxnQkFBRDtBQUFBO0FBQ0Usa0JBQUksRUFBRUwsa0JBQUYsRUFBWU0sT0FBTyxFQUFFQyxVQUFVLElBQVosRUFBa0JaLFNBQVNhLFNBQTNCLEVBQW5CO0FBRE47QUFBQTtBQUFBLFdBRkY7QUFNVSxhQU5WO0FBQUE7QUFPTyxhQVBQO0FBUUU7QUFBQyxnQkFBRDtBQUFBO0FBQ0Usa0JBQUksRUFBRVIsa0JBQUYsRUFBWU0sT0FBTyxFQUFFRyxVQUFVLElBQVosRUFBa0JkLFNBQVNhLFNBQTNCLEVBQW5CO0FBRE47QUFBQTtBQUFBLFdBUkY7QUFBQTtBQUFBLFNBVEo7QUF3QkdKLGlCQUNDO0FBQUE7QUFBQSxZQUFLLE9BQU8sRUFBRUMsV0FBVyxRQUFiLEVBQVo7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFNBQUQ7QUFDRSxvQ0FBc0IsSUFEeEI7QUFFRSxnQ0FBa0IsS0FBS2xCO0FBRnpCO0FBREY7QUFGRixTQXpCSjtBQW1DRTtBQUFDLGNBQUQsQ0FBTSxLQUFOO0FBQUE7QUFDRTtBQUFDLGdCQUFEO0FBQUEsY0FBTSxJQUFJLEVBQUVhLGtCQUFGLEVBQVlNLE9BQU8sRUFBRUksT0FBTyxJQUFULEVBQWVmLFNBQVNhLFNBQXhCLEVBQW5CLEVBQVY7QUFBQTtBQUFBO0FBREY7QUFuQ0YsT0FERjtBQTJDRDs7OztFQWpFc0NuQyxTO1NBQXBCUSxXIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvdmlld3MvY29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBvblN1Y2Nlc3MsIG9uRXJyb3IgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuLi9jb3VudGRvd24nO1xuXG5ARm9ybS5jcmVhdGUoKVxuQGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBjaGVja1Rva2VuKCR0b2tlbjogU3RyaW5nKSB7XG4gICAgICB2YWxpZDogY2hlY2tUb2tlbih0b2tlbjogJHRva2VuKVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IHRva2VuIH0pID0+ICh7XG4gICAgICBmZXRjaFBvbGljeTogIXRva2VuID8gJ2NhY2hlLW9ubHknIDogJ25ldHdvcmstb25seScsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgdG9rZW4sXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF1dGgsIG9uT2ssIGZvcm0sIHRva2VuIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBhdXRoXG4gICAgICAgIC5jb25maXJtKHRva2VuKVxuICAgICAgICAudGhlbigoeyBlbWFpbCB9KSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKCdTaWUga8O2bm5lbiBzaWNoIGpldHp0IGFubWVsZGVuJyk7XG4gICAgICAgICAgb25Payh7IGVtYWlsIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob25FcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBwYXRobmFtZSwgb25DbG9zZSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb2FkaW5nID0gZGF0YS52YWxpZCAhPT0gdHJ1ZSAmJiBkYXRhLnZhbGlkICE9PSBmYWxzZTtcbiAgICBjb25zdCB2YWxpZCA9IGRhdGEudmFsaWQgIT09IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICB0aXRsZT1cIkJlc3TDpHRpZ2VuXCJcbiAgICAgICAgb25Paz17ZGF0YS52YWxpZCA/IHRoaXMub2sgOiBudWxsfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZX1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZyA/ICdQcsO8ZmUgVG9rZW4gLi4uJyA6IGZhbHNlfVxuICAgICAgICBva1RleHQ9XCJTb2ZvcnQgYmVzdMOkdGlnZW5cIlxuICAgICAgPlxuICAgICAgICB7IXZhbGlkICYmIChcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgRGFzIFRva2VuIGlzdCB1bmfDvGx0aWcgb2RlciBhYmdlbGF1ZmVuLiBCaXR0ZXsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZSwgcXVlcnk6IHsgcmVnaXN0ZXI6IG51bGwsIGNvbmZpcm06IHVuZGVmaW5lZCB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHJlZ2lzdHJpZXJlbiBTaWUgc2ljaCBlcm5ldXRcbiAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgb2RlcnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZSwgcXVlcnk6IHsgZmVlZGJhY2s6IG51bGwsIGNvbmZpcm06IHVuZGVmaW5lZCB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGtvbnRha3RpZXJlbiBTaWUgZGVuIFN1cHBvcnRcbiAgICAgICAgICAgIDwvTGluaz4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWQgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIEF1dG9tYXRpc2NoZSBiZXN0w6R0aWd1bmcgaW5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgPENvdW50ZG93blxuICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lUmVtYWluaW5nPXs1MDAwfVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2s9e3RoaXMub2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8QmFzZS5MaW5rcz5cbiAgICAgICAgICA8TGluayB0bz17eyBwYXRobmFtZSwgcXVlcnk6IHsgbG9naW46IG51bGwsIGNvbmZpcm06IHVuZGVmaW5lZCB9IH19PlxuICAgICAgICAgICAgWnVyIEFubWVsZHVuZ1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CYXNlLkxpbmtzPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
