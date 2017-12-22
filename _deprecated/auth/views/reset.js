import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  '], ['\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'olymp-router';
import FaStar from 'olymp-icons/lib/fa-star';

import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp-utils';
import Base from './base';
import { createReset } from '../redux';

var _ref4 = React.createElement(FaStar, { size: 10 });

var _ref5 = React.createElement(FaStar, { size: 10 });

var AuthReset = (_dec = connect(null, function (dispatch) {
  return {
    reset: createReset(dispatch)
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
  _inherits(AuthReset, _Component);

  function AuthReset() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthReset);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthReset.__proto__ || Object.getPrototypeOf(AuthReset)).call.apply(_ref2, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          reset = _this$props.reset,
          token = _this$props.token,
          onOk = _this$props.onOk,
          onClose = _this$props.onClose,
          form = _this$props.form;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        if (values.password2 !== values.password) {
          return onError(new Error('Die Passwörter stimmen nicht überein!'));
        }
        reset({ token: token, password: values.password }).then(function (_ref3) {
          var email = _ref3.email;

          onSuccess('Sie können sich jetzt anmelden');
          onOk({ email: email });
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthReset, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOpen = _props.isOpen,
          email = _props.email,
          form = _props.form,
          saving = _props.saving,
          pathname = _props.pathname,
          onClose = _props.onClose,
          data = _props.data;
      var getFieldDecorator = form.getFieldDecorator;

      var loading = data.valid !== true && data.valid !== false;
      var valid = data.valid !== false;

      return React.createElement(
        Base,
        {
          isOpen: isOpen,
          title: 'Zur\xFCcksetzen',
          onOk: valid ? this.ok : null,
          onCancel: onClose,
          loading: loading ? 'Prüfe Token ...' : false
        },
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'password', label: 'Passwort' }, layout),
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }]
          })(React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password',
            onKeyPress: onEnterFocus(function () {
              return _this2.input;
            }),
            addonAfter: _ref4
          }))
        ),
        valid && React.createElement(
          _Form.Item,
          _extends({ key: 'password2', label: 'Wiederholen' }, layout),
          getFieldDecorator('password2', {
            rules: [{
              required: true,
              message: 'Bitte das wiederholte Passwort angeben!'
            }]
          })(React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password wiederholen',
            onKeyPress: onEnterOk(this.ok),
            ref: function ref(x) {
              return _this2.input = x;
            },
            addonAfter: _ref5
          }))
        ),
        !valid && React.createElement(
          'p',
          { style: { textAlign: 'center' } },
          'Das Token ist ung\xFCltig oder abgelaufen. Bitte',
          ' ',
          React.createElement(
            Link,
            { updateQuery: { forgot: null, reset: undefined } },
            'beantragen Sie das Zur\xFCcksetzen des Passworts erneut'
          ),
          ' ',
          'oder',
          ' ',
          React.createElement(
            Link,
            { updateQuery: { feedback: null, reset: undefined } },
            'kontaktieren Sie den Support'
          ),
          '.'
        ),
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            { updateQuery: { login: null, reset: undefined } },
            'Zur Anmeldung'
          )
        )
      );
    }
  }]);

  return AuthReset;
}(Component)) || _class) || _class) || _class);
export { AuthReset as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvcmVzZXQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImdxbCIsImdyYXBocWwiLCJMaW5rIiwib25FbnRlckZvY3VzIiwib25FbnRlck9rIiwibGF5b3V0Iiwib25FcnJvciIsIm9uU3VjY2VzcyIsIkJhc2UiLCJjcmVhdGVSZXNldCIsIkF1dGhSZXNldCIsInJlc2V0IiwiZGlzcGF0Y2giLCJjcmVhdGUiLCJvcHRpb25zIiwidG9rZW4iLCJmZXRjaFBvbGljeSIsInZhcmlhYmxlcyIsIm9rIiwicHJvcHMiLCJvbk9rIiwib25DbG9zZSIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsInBhc3N3b3JkMiIsInBhc3N3b3JkIiwiRXJyb3IiLCJ0aGVuIiwiZW1haWwiLCJjYXRjaCIsImlzT3BlbiIsInNhdmluZyIsInBhdGhuYW1lIiwiZGF0YSIsImdldEZpZWxkRGVjb3JhdG9yIiwibG9hZGluZyIsInZhbGlkIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJpbnB1dCIsIngiLCJ0ZXh0QWxpZ24iLCJmb3Jnb3QiLCJ1bmRlZmluZWQiLCJmZWVkYmFjayIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7OztBQUdBLFNBQ0VDLFlBREYsRUFFRUMsU0FGRixFQUdFQyxNQUhGLEVBSUVDLE9BSkYsRUFLRUMsU0FMRixRQU1PLGFBTlA7QUFPQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixVQUE1Qjs7WUFpRTRCLG9CQUFD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aUJBQ0M7QUFBQSxnQkFBTSxJQUFOO0FBQUEscUJBQVcsS0FBSSxXQUFmLEVBQTJCLE9BQU0sYUFBakMsSUFBbURqQyxNQUFuRDtBQUNHK0IsNEJBQWtCLFdBQWxCLEVBQStCO0FBQzlCRyxtQkFBTyxDQUNMO0FBQ0VDLHdCQUFVLElBRFo7QUFFRUMsdUJBQVM7QUFGWCxhQURLO0FBRHVCLFdBQS9CLEVBUUM7QUFDRSxrQkFBSyxVQURQO0FBRUUseUJBQVksc0JBRmQ7QUFHRSx3QkFBWXJDLFVBQVUsS0FBS2MsRUFBZixDQUhkO0FBSUUsaUJBQUs7QUFBQSxxQkFBTSxPQUFLd0IsS0FBTCxHQUFhQyxDQUFuQjtBQUFBLGFBSlA7QUFLRTtBQUxGLFlBUkQ7QUFESCxTQXhCSjtBQTJDRyxTQUFDTCxLQUFELElBQ0M7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFTSxXQUFXLFFBQWIsRUFBVjtBQUFBO0FBQ2dELGFBRGhEO0FBRUU7QUFBQyxnQkFBRDtBQUFBLGNBQU0sYUFBYSxFQUFFQyxRQUFRLElBQVYsRUFBZ0JsQyxPQUFPbUMsU0FBdkIsRUFBbkI7QUFBQTtBQUFBLFdBRkY7QUFJVSxhQUpWO0FBQUE7QUFLTyxhQUxQO0FBTUU7QUFBQyxnQkFBRDtBQUFBLGNBQU0sYUFBYSxFQUFFQyxVQUFVLElBQVosRUFBa0JwQyxPQUFPbUMsU0FBekIsRUFBbkI7QUFBQTtBQUFBLFdBTkY7QUFBQTtBQUFBLFNBNUNKO0FBdURFO0FBQUMsY0FBRCxDQUFNLEtBQU47QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxjQUFNLGFBQWEsRUFBRUUsT0FBTyxJQUFULEVBQWVyQyxPQUFPbUMsU0FBdEIsRUFBbkI7QUFBQTtBQUFBO0FBREY7QUF2REYsT0FERjtBQStERDs7OztFQXhGb0NoRCxTO1NBQWxCWSxTIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvdmlld3MvcmVzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQge1xuICBvbkVudGVyRm9jdXMsXG4gIG9uRW50ZXJPayxcbiAgbGF5b3V0LFxuICBvbkVycm9yLFxuICBvblN1Y2Nlc3MsXG59IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVSZXNldCB9IGZyb20gJy4uL3JlZHV4JztcblxuQGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgcmVzZXQ6IGNyZWF0ZVJlc2V0KGRpc3BhdGNoKSxcbn0pKVxuQEZvcm0uY3JlYXRlKClcbkBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgY2hlY2tUb2tlbigkdG9rZW46IFN0cmluZykge1xuICAgICAgdmFsaWQ6IGNoZWNrVG9rZW4odG9rZW46ICR0b2tlbilcbiAgICB9XG4gIGAsXG4gIHtcbiAgICBvcHRpb25zOiAoeyB0b2tlbiB9KSA9PiAoe1xuICAgICAgZmV0Y2hQb2xpY3k6ICF0b2tlbiA/ICdjYWNoZS1vbmx5JyA6ICduZXR3b3JrLW9ubHknLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHRva2VuLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhSZXNldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzZXQsIHRva2VuLCBvbk9rLCBvbkNsb3NlLCBmb3JtIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnBhc3N3b3JkMiAhPT0gdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKG5ldyBFcnJvcignRGllIFBhc3N3w7ZydGVyIHN0aW1tZW4gbmljaHQgw7xiZXJlaW4hJykpO1xuICAgICAgfVxuICAgICAgcmVzZXQoeyB0b2tlbiwgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCB9KVxuICAgICAgICAudGhlbigoeyBlbWFpbCB9KSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKCdTaWUga8O2bm5lbiBzaWNoIGpldHp0IGFubWVsZGVuJyk7XG4gICAgICAgICAgb25Payh7IGVtYWlsIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob25FcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBlbWFpbCwgZm9ybSwgc2F2aW5nLCBwYXRobmFtZSwgb25DbG9zZSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkYXRhLnZhbGlkICE9PSB0cnVlICYmIGRhdGEudmFsaWQgIT09IGZhbHNlO1xuICAgIGNvbnN0IHZhbGlkID0gZGF0YS52YWxpZCAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIHRpdGxlPVwiWnVyw7xja3NldHplblwiXG4gICAgICAgIG9uT2s9e3ZhbGlkID8gdGhpcy5vayA6IG51bGx9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nID8gJ1Byw7xmZSBUb2tlbiAuLi4nIDogZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHt2YWxpZCAmJiAoXG4gICAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcnRcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncGFzc3dvcmQnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0JpdHRlIGRhcyBQYXNzd29ydCBhbmdlYmVuIScgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLmlucHV0KX1cbiAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8RmFTdGFyIHNpemU9ezEwfSAvPn1cbiAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWQgJiYgKFxuICAgICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwicGFzc3dvcmQyXCIgbGFiZWw9XCJXaWVkZXJob2xlblwiIHsuLi5sYXlvdXR9PlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdwYXNzd29yZDInLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQml0dGUgZGFzIHdpZWRlcmhvbHRlIFBhc3N3b3J0IGFuZ2ViZW4hJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCB3aWVkZXJob2xlblwiXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25FbnRlck9rKHRoaXMub2spfVxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiAodGhpcy5pbnB1dCA9IHgpfVxuICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxGYVN0YXIgc2l6ZT17MTB9IC8+fVxuICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIHshdmFsaWQgJiYgKFxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICBEYXMgVG9rZW4gaXN0IHVuZ8O8bHRpZyBvZGVyIGFiZ2VsYXVmZW4uIEJpdHRleycgJ31cbiAgICAgICAgICAgIDxMaW5rIHVwZGF0ZVF1ZXJ5PXt7IGZvcmdvdDogbnVsbCwgcmVzZXQ6IHVuZGVmaW5lZCB9fT5cbiAgICAgICAgICAgICAgYmVhbnRyYWdlbiBTaWUgZGFzIFp1csO8Y2tzZXR6ZW4gZGVzIFBhc3N3b3J0cyBlcm5ldXRcbiAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgb2RlcnsnICd9XG4gICAgICAgICAgICA8TGluayB1cGRhdGVRdWVyeT17eyBmZWVkYmFjazogbnVsbCwgcmVzZXQ6IHVuZGVmaW5lZCB9fT5cbiAgICAgICAgICAgICAga29udGFrdGllcmVuIFNpZSBkZW4gU3VwcG9ydFxuICAgICAgICAgICAgPC9MaW5rPi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxCYXNlLkxpbmtzPlxuICAgICAgICAgIDxMaW5rIHVwZGF0ZVF1ZXJ5PXt7IGxvZ2luOiBudWxsLCByZXNldDogdW5kZWZpbmVkIH19PlxuICAgICAgICAgICAgWnVyIEFubWVsZHVuZ1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CYXNlLkxpbmtzPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
