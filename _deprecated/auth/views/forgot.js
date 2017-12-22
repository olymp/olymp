import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import FaEnvelope from 'olymp-icons/lib/fa-envelope';

import { onEnterOk, layout, onError, onSuccess } from 'olymp-utils';
import { createForgot } from '../redux';
import Base from './base';

var _ref2 = React.createElement(FaEnvelope, { size: 10 });

var AuthForgot = (_dec = connect(null, function (dispatch) {
  return {
    forgot: createForgot(dispatch)
  };
}), _dec2 = _Form.create(), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(AuthForgot, _Component);

  function AuthForgot() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthForgot);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AuthForgot.__proto__ || Object.getPrototypeOf(AuthForgot)).call.apply(_ref, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          forgot = _this$props.forgot,
          onOk = _this$props.onOk,
          form = _this$props.form;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        forgot({ email: values.email }).then(function () {
          onSuccess('Bitte bestätigen Sie die Zurücksetzung');
          onOk({ email: values.email });
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthForgot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          email = _props.email,
          form = _props.form,
          onClose = _props.onClose;
      var getFieldDecorator = form.getFieldDecorator;


      return React.createElement(
        Base,
        {
          isOpen: isOpen,
          title: 'Zur\xFCcksetzen',
          onOk: this.ok,
          onCancel: onClose
        },
        React.createElement(
          _Form.Item,
          _extends({ hasFeedback: true, key: 'email', label: 'E-Mail' }, layout),
          getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }]
          })(React.createElement(_Input, {
            type: 'email',
            placeholder: 'E-Mail',
            onKeyPress: onEnterOk(this.ok),
            addonAfter: _ref2
          }))
        ),
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            { updateQuery: { login: null, forgot: undefined } },
            'Zur Anmeldung'
          )
        )
      );
    }
  }]);

  return AuthForgot;
}(Component)) || _class) || _class);
export { AuthForgot as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvZm9yZ290LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJMaW5rIiwib25FbnRlck9rIiwibGF5b3V0Iiwib25FcnJvciIsIm9uU3VjY2VzcyIsImNyZWF0ZUZvcmdvdCIsIkJhc2UiLCJBdXRoRm9yZ290IiwiZm9yZ290IiwiZGlzcGF0Y2giLCJjcmVhdGUiLCJvayIsInByb3BzIiwib25PayIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsImVtYWlsIiwidGhlbiIsImNhdGNoIiwiaXNPcGVuIiwib25DbG9zZSIsImdldEZpZWxkRGVjb3JhdG9yIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJsb2dpbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOzs7QUFHQSxTQUFTQyxTQUFULEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUNDLFNBQXJDLFFBQXNELGFBQXREO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixVQUE3QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O1lBNEMwQixvQkFBQyxVQUFELElBQVksTUFBTSxFQUFsQixHOztJQXRDTEMsVSxXQUpwQlIsUUFBUSxJQUFSLEVBQWM7QUFBQSxTQUFhO0FBQzFCUyxZQUFRSCxhQUFhSSxRQUFiO0FBRGtCLEdBQWI7QUFBQSxDQUFkLEMsVUFHQSxNQUFLQyxNQUFMLEU7Ozs7Ozs7Ozs7Ozs7OzhMQUVDQyxFLEdBQUssWUFBTTtBQUFBLHdCQUNzQixNQUFLQyxLQUQzQjtBQUFBLFVBQ0RKLE1BREMsZUFDREEsTUFEQztBQUFBLFVBQ09LLElBRFAsZUFDT0EsSUFEUDtBQUFBLFVBQ2FDLElBRGIsZUFDYUEsSUFEYjs7QUFFVEEsV0FBS0MsY0FBTCxDQUFvQixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbkMsWUFBSUQsR0FBSixFQUFTO0FBQ1AsaUJBQU9iLFFBQVFhLEdBQVIsQ0FBUDtBQUNEO0FBQ0RSLGVBQU8sRUFBRVUsT0FBT0QsT0FBT0MsS0FBaEIsRUFBUCxFQUNHQyxJQURILENBQ1EsWUFBTTtBQUNWZixvQkFBVSx3Q0FBVjtBQUNBUyxlQUFLLEVBQUVLLE9BQU9ELE9BQU9DLEtBQWhCLEVBQUw7QUFDRCxTQUpILEVBS0dFLEtBTEgsQ0FLU2pCLE9BTFQ7QUFNRCxPQVZEO0FBV0QsSzs7Ozs7NkJBRVE7QUFBQSxtQkFDa0MsS0FBS1MsS0FEdkM7QUFBQSxVQUNDUyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTSCxLQURULFVBQ1NBLEtBRFQ7QUFBQSxVQUNnQkosSUFEaEIsVUFDZ0JBLElBRGhCO0FBQUEsVUFDc0JRLE9BRHRCLFVBQ3NCQSxPQUR0QjtBQUFBLFVBRUNDLGlCQUZELEdBRXVCVCxJQUZ2QixDQUVDUyxpQkFGRDs7O0FBSVAsYUFDRTtBQUFDLFlBQUQ7QUFBQTtBQUNFLGtCQUFRRixNQURWO0FBRUUsaUJBQU0saUJBRlI7QUFHRSxnQkFBTSxLQUFLVixFQUhiO0FBSUUsb0JBQVVXO0FBSlo7QUFNRTtBQUFBLGdCQUFNLElBQU47QUFBQSxxQkFBVyxpQkFBWCxFQUF1QixLQUFJLE9BQTNCLEVBQW1DLE9BQU0sUUFBekMsSUFBc0RwQixNQUF0RDtBQUNHcUIsNEJBQWtCLE9BQWxCLEVBQTJCO0FBQzFCQywwQkFBY04sS0FEWTtBQUUxQk8sbUJBQU8sQ0FDTCxFQUFFQyxVQUFVLElBQVosRUFBa0JDLFNBQVMsaUNBQTNCLEVBREs7QUFGbUIsV0FBM0IsRUFNQztBQUNFLGtCQUFLLE9BRFA7QUFFRSx5QkFBWSxRQUZkO0FBR0Usd0JBQVkxQixVQUFVLEtBQUtVLEVBQWYsQ0FIZDtBQUlFO0FBSkYsWUFORDtBQURILFNBTkY7QUFxQkU7QUFBQyxjQUFELENBQU0sS0FBTjtBQUFBO0FBQ0U7QUFBQyxnQkFBRDtBQUFBLGNBQU0sYUFBYSxFQUFFaUIsT0FBTyxJQUFULEVBQWVwQixRQUFRcUIsU0FBdkIsRUFBbkI7QUFBQTtBQUFBO0FBREY7QUFyQkYsT0FERjtBQTZCRDs7OztFQWpEcUMvQixTO1NBQW5CUyxVIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvdmlld3MvZm9yZ290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGYUVudmVsb3BlIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgb25FbnRlck9rLCBsYXlvdXQsIG9uRXJyb3IsIG9uU3VjY2VzcyB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZUZvcmdvdCB9IGZyb20gJy4uL3JlZHV4JztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbkBjb25uZWN0KG51bGwsIGRpc3BhdGNoID0+ICh7XG4gIGZvcmdvdDogY3JlYXRlRm9yZ290KGRpc3BhdGNoKSxcbn0pKVxuQEZvcm0uY3JlYXRlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhGb3Jnb3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZvcmdvdCwgb25PaywgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgZm9yZ290KHsgZW1haWw6IHZhbHVlcy5lbWFpbCB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKCdCaXR0ZSBiZXN0w6R0aWdlbiBTaWUgZGllIFp1csO8Y2tzZXR6dW5nJyk7XG4gICAgICAgICAgb25Payh7IGVtYWlsOiB2YWx1ZXMuZW1haWwgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChvbkVycm9yKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGVtYWlsLCBmb3JtLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIHRpdGxlPVwiWnVyw7xja3NldHplblwiXG4gICAgICAgIG9uT2s9e3RoaXMub2t9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlfVxuICAgICAgPlxuICAgICAgICA8Rm9ybS5JdGVtIGhhc0ZlZWRiYWNrIGtleT1cImVtYWlsXCIgbGFiZWw9XCJFLU1haWxcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2VtYWlsJywge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBlbWFpbCxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgSWhyZSBFLU1haWwgYW4hJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJPayh0aGlzLm9rKX1cbiAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEZhRW52ZWxvcGUgc2l6ZT17MTB9IC8+fVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxCYXNlLkxpbmtzPlxuICAgICAgICAgIDxMaW5rIHVwZGF0ZVF1ZXJ5PXt7IGxvZ2luOiBudWxsLCBmb3Jnb3Q6IHVuZGVmaW5lZCB9fT5cbiAgICAgICAgICAgIFp1ciBBbm1lbGR1bmdcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQmFzZS5MaW5rcz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=
