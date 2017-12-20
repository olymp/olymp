import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _templateObject = _taggedTemplateLiteral(['\n    query totp {\n      totp {\n        qr\n        token\n        enabled\n      }\n    }\n  '], ['\n    query totp {\n      totp {\n        qr\n        token\n        enabled\n      }\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import FaStar from 'olymp-icons/lib/fa-star';

import { onEnterFocus, onError, onSuccess } from 'olymp-utils';

var _ref3 = React.createElement(
  'p',
  null,
  'Scannen Sie diesen QR-Code z.B. mithilfe der',
  ' ',
  React.createElement(
    'a',
    {
      href: 'https://support.google.com/accounts/answer/1066447?hl=de',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    'Google Authenticator'
  ),
  ' ',
  'App. Geben Sie anschlie\xDFend einen generierten Code unten ein um die Nutzung der 2-Faktor Authentifizierung zu best\xE4tigen.'
);

var _ref4 = React.createElement(FaStar, { size: 10 });

var AuthTotp = (_dec = graphql(gql(_templateObject), {
  options: function options(_ref) {
    var isOpen = _ref.isOpen;
    return {
      fetchPolicy: 'network-only',
      skip: !isOpen
    };
  }
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(AuthTotp, _Component);

  function AuthTotp() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthTotp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthTotp.__proto__ || Object.getPrototypeOf(AuthTotp)).call.apply(_ref2, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          auth = _this$props.auth,
          onClose = _this$props.onClose,
          onOk = _this$props.onOk,
          form = _this$props.form,
          data = _this$props.data;

      var enabled = data.totp && data.totp.enabled;
      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        if (enabled) {
          auth.totpConfirm(data.totp.token).then(function () {
            onSuccess('2-Faktor Authentifizierung deaktiviert');
            onClose();
          }).catch(onError);
        } else {
          auth.totpConfirm(data.totp.token, values.token).then(function () {
            onSuccess('2-Faktor Authentifizierung aktiviert');
            onClose();
          }).catch(onError);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthTotp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          form = _props.form,
          data = _props.data;
      var getFieldDecorator = form.getFieldDecorator;

      var qr = data.totp && data.totp.qr;
      var enabled = data.totp && data.totp.enabled;

      return React.createElement(
        'div',
        { style: { marginBottom: 20 } },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: qr } }),
        _ref3,
        React.createElement(
          _Form.Item,
          { key: 'token' },
          getFieldDecorator('token', {
            // rules: [{ required: true, message: 'Bitte geben Sie ein Token an!' }],
          })(React.createElement(_Input, {
            type: 'text',
            placeholder: 'Token',
            onKeyPress: onEnterFocus(function () {
              return _this2.ok;
            }),
            addonAfter: _ref4
          }))
        )
      );
    }
  }]);

  return AuthTotp;
}(Component), _class2.defaultProps = { data: {} }, _temp2)) || _class);
export { AuthTotp as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYWRtaW4vdG90cC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJncWwiLCJncmFwaHFsIiwib25FbnRlckZvY3VzIiwib25FcnJvciIsIm9uU3VjY2VzcyIsIkF1dGhUb3RwIiwib3B0aW9ucyIsImlzT3BlbiIsImZldGNoUG9saWN5Iiwic2tpcCIsIm9rIiwicHJvcHMiLCJhdXRoIiwib25DbG9zZSIsIm9uT2siLCJmb3JtIiwiZGF0YSIsImVuYWJsZWQiLCJ0b3RwIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJ0b3RwQ29uZmlybSIsInRva2VuIiwidGhlbiIsImNhdGNoIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJxciIsIm1hcmdpbkJvdHRvbSIsIl9faHRtbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7OztBQUdBLFNBQVNDLFlBQVQsRUFBdUJDLE9BQXZCLEVBQWdDQyxTQUFoQyxRQUFpRCxhQUFqRDs7WUEwRFE7QUFBQTtBQUFBO0FBQUE7QUFDK0MsS0FEL0M7QUFFRTtBQUFBO0FBQUE7QUFDRSxZQUFLLDBEQURQO0FBRUUsY0FBTyxRQUZUO0FBR0UsV0FBSTtBQUhOO0FBQUE7QUFBQSxHQUZGO0FBUU8sS0FSUDtBQUFBO0FBQUEsQzs7WUFvQmtCLG9CQUFDLE1BQUQsSUFBUSxNQUFNLEVBQWQsRzs7SUEzRExDLFEsV0FqQnBCSixRQUNDRCxHQURELG1CQVVDO0FBQ0VNLFdBQVM7QUFBQSxRQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxXQUFpQjtBQUN4QkMsbUJBQWEsY0FEVztBQUV4QkMsWUFBTSxDQUFDRjtBQUZpQixLQUFqQjtBQUFBO0FBRFgsQ0FWRCxDOzs7Ozs7Ozs7Ozs7Ozs0TEFvQkNHLEUsR0FBSyxZQUFNO0FBQUEsd0JBQ21DLE1BQUtDLEtBRHhDO0FBQUEsVUFDREMsSUFEQyxlQUNEQSxJQURDO0FBQUEsVUFDS0MsT0FETCxlQUNLQSxPQURMO0FBQUEsVUFDY0MsSUFEZCxlQUNjQSxJQURkO0FBQUEsVUFDb0JDLElBRHBCLGVBQ29CQSxJQURwQjtBQUFBLFVBQzBCQyxJQUQxQixlQUMwQkEsSUFEMUI7O0FBRVQsVUFBTUMsVUFBVUQsS0FBS0UsSUFBTCxJQUFhRixLQUFLRSxJQUFMLENBQVVELE9BQXZDO0FBQ0FGLFdBQUtJLGNBQUwsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ25DLFlBQUlELEdBQUosRUFBUztBQUNQLGlCQUFPakIsUUFBUWlCLEdBQVIsQ0FBUDtBQUNEO0FBQ0QsWUFBSUgsT0FBSixFQUFhO0FBQ1hMLGVBQ0dVLFdBREgsQ0FDZU4sS0FBS0UsSUFBTCxDQUFVSyxLQUR6QixFQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWcEIsc0JBQVUsd0NBQVY7QUFDQVM7QUFDRCxXQUxILEVBTUdZLEtBTkgsQ0FNU3RCLE9BTlQ7QUFPRCxTQVJELE1BUU87QUFDTFMsZUFDR1UsV0FESCxDQUNlTixLQUFLRSxJQUFMLENBQVVLLEtBRHpCLEVBQ2dDRixPQUFPRSxLQUR2QyxFQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWcEIsc0JBQVUsc0NBQVY7QUFDQVM7QUFDRCxXQUxILEVBTUdZLEtBTkgsQ0FNU3RCLE9BTlQ7QUFPRDtBQUNGLE9BckJEO0FBc0JELEs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQ2dCLEtBQUtRLEtBRHJCO0FBQUEsVUFDQ0ksSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsSUFEUCxVQUNPQSxJQURQO0FBQUEsVUFFQ1UsaUJBRkQsR0FFdUJYLElBRnZCLENBRUNXLGlCQUZEOztBQUdQLFVBQU1DLEtBQUtYLEtBQUtFLElBQUwsSUFBYUYsS0FBS0UsSUFBTCxDQUFVUyxFQUFsQztBQUNBLFVBQU1WLFVBQVVELEtBQUtFLElBQUwsSUFBYUYsS0FBS0UsSUFBTCxDQUFVRCxPQUF2Qzs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBRVcsY0FBYyxFQUFoQixFQUFaO0FBQ0UscUNBQUsseUJBQXlCLEVBQUVDLFFBQVFGLEVBQVYsRUFBOUIsR0FERjtBQUFBO0FBY0U7QUFBQSxnQkFBTSxJQUFOO0FBQUEsWUFBVyxLQUFJLE9BQWY7QUFDR0QsNEJBQWtCLE9BQWxCLEVBQTJCO0FBQzFCO0FBRDBCLFdBQTNCLEVBR0M7QUFDRSxrQkFBSyxNQURQO0FBRUUseUJBQVksT0FGZDtBQUdFLHdCQUFZeEIsYUFBYTtBQUFBLHFCQUFNLE9BQUtRLEVBQVg7QUFBQSxhQUFiLENBSGQ7QUFJRTtBQUpGLFlBSEQ7QUFESDtBQWRGLE9BREY7QUE2QkQ7Ozs7RUFqRW1DWCxTLFdBQzdCK0IsWSxHQUFlLEVBQUVkLE1BQU0sRUFBUixFO1NBREhYLFEiLCJmaWxlIjoicGFja2FnZXMvYXV0aC9hZG1pbi90b3RwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgb25FbnRlckZvY3VzLCBvbkVycm9yLCBvblN1Y2Nlc3MgfSBmcm9tICdvbHltcC11dGlscyc7XG5cbkBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgdG90cCB7XG4gICAgICB0b3RwIHtcbiAgICAgICAgcXJcbiAgICAgICAgdG9rZW5cbiAgICAgICAgZW5hYmxlZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IGlzT3BlbiB9KSA9PiAoe1xuICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgc2tpcDogIWlzT3BlbixcbiAgICB9KSxcbiAgfSxcbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhUb3RwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgZGF0YToge30gfTtcblxuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF1dGgsIG9uQ2xvc2UsIG9uT2ssIGZvcm0sIGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZW5hYmxlZCA9IGRhdGEudG90cCAmJiBkYXRhLnRvdHAuZW5hYmxlZDtcbiAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgYXV0aFxuICAgICAgICAgIC50b3RwQ29uZmlybShkYXRhLnRvdHAudG9rZW4pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgb25TdWNjZXNzKCcyLUZha3RvciBBdXRoZW50aWZpemllcnVuZyBkZWFrdGl2aWVydCcpO1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKG9uRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXV0aFxuICAgICAgICAgIC50b3RwQ29uZmlybShkYXRhLnRvdHAudG9rZW4sIHZhbHVlcy50b2tlbilcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MoJzItRmFrdG9yIEF1dGhlbnRpZml6aWVydW5nIGFrdGl2aWVydCcpO1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKG9uRXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gZm9ybTtcbiAgICBjb25zdCBxciA9IGRhdGEudG90cCAmJiBkYXRhLnRvdHAucXI7XG4gICAgY29uc3QgZW5hYmxlZCA9IGRhdGEudG90cCAmJiBkYXRhLnRvdHAuZW5hYmxlZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBxciB9fSAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTY2FubmVuIFNpZSBkaWVzZW4gUVItQ29kZSB6LkIuIG1pdGhpbGZlIGRlcnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hY2NvdW50cy9hbnN3ZXIvMTA2NjQ0Nz9obD1kZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR29vZ2xlIEF1dGhlbnRpY2F0b3JcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBBcHAuIEdlYmVuIFNpZSBhbnNjaGxpZcOfZW5kIGVpbmVuIGdlbmVyaWVydGVuIENvZGUgdW50ZW4gZWluIHVtIGRpZVxuICAgICAgICAgIE51dHp1bmcgZGVyIDItRmFrdG9yIEF1dGhlbnRpZml6aWVydW5nIHp1IGJlc3TDpHRpZ2VuLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwidG9rZW5cIj5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Rva2VuJywge1xuICAgICAgICAgICAgLy8gcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZ2ViZW4gU2llIGVpbiBUb2tlbiBhbiEnIH1dLFxuICAgICAgICAgIH0pKFxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2tlblwiXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLm9rKX1cbiAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEZhU3RhciBzaXplPXsxMH0gLz59XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
