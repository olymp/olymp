var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { Link } from 'olymp-router';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope, FaStar } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess, } from './base';
var AuthLogin = (function (_super) {
    __extends(AuthLogin, _super);
    function AuthLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, form = _a.form, onTotp = _a.onTotp;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                auth
                    .login(values.email, values.password, values.totp)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('Anmeldung erfolgreich', "Wilkommen, " + name);
                    onClose();
                })
                    .catch(function (err) {
                    if (err.message.indexOf('Please provide a totp token') !== -1) {
                        onTotp();
                    }
                    else {
                        onError(err);
                    }
                });
            });
        };
        return _this;
    }
    AuthLogin.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, email = _a.email, form = _a.form, pathname = _a.pathname, onClose = _a.onClose, totp = _a.totp;
        var getFieldDecorator = form.getFieldDecorator;
        return (React.createElement(Base, { isOpen: isOpen, title: "Anmelden", onOk: this.ok, onCancel: onClose },
            React.createElement(Form.Item, __assign({ key: "email", label: "E-Mail" }, layout), getFieldDecorator('email', {
                initialValue: email,
                rules: [
                    { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
                ],
            })(React.createElement(Input, { type: "email", placeholder: "E-Mail", onKeyPress: onEnterFocus(function () { return _this.input; }), size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
            React.createElement(Form.Item, __assign({ key: "password", label: "Passwort" }, layout), getFieldDecorator('password', {
                rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
            })(React.createElement(Input, { type: "password", placeholder: "Password", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.input = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            totp &&
                React.createElement(Form.Item, __assign({ key: "totp", label: "Token" }, layout), getFieldDecorator('totp')(React.createElement(Input, { type: "text", placeholder: "Token", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.totp = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: { register: null, login: undefined, totp: undefined },
                    } }, "Zur Registrierung"),
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: {
                            forgot: form.getFieldValue('email') || null,
                            login: undefined,
                            totp: undefined,
                        },
                    } }, "Passwort vergessen?"))));
    };
    AuthLogin = __decorate([
        withRouter,
        withAuth,
        Form.create()
    ], AuthLogin);
    return AuthLogin;
}(Component));
export default AuthLogin;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvbG9naW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sUUFBUSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLElBQUksRUFBRSxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEdBQ1YsTUFBTSxRQUFRLENBQUM7QUFLaEI7SUFBdUMsNkJBQVM7SUFIaEQ7UUFBQSxxRUFvR0M7UUFoR0MsUUFBRSxHQUFHO1lBQ0csSUFBQSxnQkFBNEMsRUFBMUMsY0FBSSxFQUFFLG9CQUFPLEVBQUUsY0FBSSxFQUFFLGtCQUFNLENBQWdCO1lBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDUixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELElBQUk7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNqRCxJQUFJLENBQUMsVUFBQyxFQUFRO3dCQUFOLGNBQUk7b0JBQ1gsU0FBUyxDQUFD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ZSxFQUN6QixJQUFJLEVBQUMsT0FBTyxFQUNaLFVBQVUsRUFBRSxvQkFBQyxNQUFNLElBQUMsSUFBSSxFQUFFLEVBQUUsR0FBSSxHQUNoQyxDQUNILENBQ1M7WUFDZCxvQkFBQyxLQUFLLENBQUMsS0FBSztnQkFDVixvQkFBQyxJQUFJLElBQ0gsRUFBRSxFQUFFO3dCQUNGLFFBQVEsVUFBQTt3QkFDUixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtxQkFDN0Qsd0JBR0k7Z0JBQ1Asb0JBQUMsSUFBSSxJQUNILEVBQUUsRUFBRTt3QkFDRixRQUFRLFVBQUE7d0JBQ1IsS0FBSyxFQUFFOzRCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUk7NEJBQzNDLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsU0FBUzt5QkFDaEI7cUJBQ0YsMEJBR0ksQ0FDSyxDQUNULENBQ1IsQ0FBQztJQUNKLENBQUM7SUFoR2tCLFNBQVM7UUFIN0IsVUFBVTtRQUNWLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxFQUFFO09BQ08sU0FBUyxDQWlHN0I7SUFBRCxnQkFBQztDQWpHRCxBQWlHQyxDQWpHc0MsU0FBUyxHQWlHL0M7ZUFqR29CLFNBQVMiLCJmaWxlIjoicGFja2FnZXMvYXV0aC92aWV3cy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFFbnZlbG9wZSwgRmFTdGFyIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL3dpdGgtYXV0aCc7XG5pbXBvcnQgQmFzZSwge1xuICBvbkVudGVyRm9jdXMsXG4gIG9uRW50ZXJPayxcbiAgbGF5b3V0LFxuICBvbkVycm9yLFxuICBvblN1Y2Nlc3MsXG59IGZyb20gJy4vYmFzZSc7XG5cbkB3aXRoUm91dGVyXG5Ad2l0aEF1dGhcbkBGb3JtLmNyZWF0ZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF1dGgsIG9uQ2xvc2UsIGZvcm0sIG9uVG90cCB9ID0gdGhpcy5wcm9wcztcbiAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgYXV0aFxuICAgICAgICAubG9naW4odmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQsIHZhbHVlcy50b3RwKVxuICAgICAgICAudGhlbigoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICBvblN1Y2Nlc3MoJ0FubWVsZHVuZyBlcmZvbGdyZWljaCcsIGBXaWxrb21tZW4sICR7bmFtZX1gKTtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdQbGVhc2UgcHJvdmlkZSBhIHRvdHAgdG9rZW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9uVG90cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGVtYWlsLCBmb3JtLCBwYXRobmFtZSwgb25DbG9zZSwgdG90cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIGlzT3Blbj17aXNPcGVufSB0aXRsZT1cIkFubWVsZGVuXCIgb25Paz17dGhpcy5va30gb25DYW5jZWw9e29uQ2xvc2V9PlxuICAgICAgICA8Rm9ybS5JdGVtIGtleT1cImVtYWlsXCIgbGFiZWw9XCJFLU1haWxcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2VtYWlsJywge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBlbWFpbCxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgSWhyZSBFLU1haWwgYW4hJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLmlucHV0KX1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEZhRW52ZWxvcGUgc2l6ZT17MTB9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcnRcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZGFzIFBhc3N3b3J0IGFuZ2ViZW4hJyB9XSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25FbnRlck9rKHRoaXMub2spfVxuICAgICAgICAgICAgICByZWY9e3ggPT4gKHRoaXMuaW5wdXQgPSB4KX1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEZhU3RhciBzaXplPXsxMH0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICB7dG90cCAmJlxuICAgICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwidG90cFwiIGxhYmVsPVwiVG9rZW5cIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndG90cCcpKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2tlblwiXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25FbnRlck9rKHRoaXMub2spfVxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiAodGhpcy50b3RwID0geCl9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8RmFTdGFyIHNpemU9ezEwfSAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+fVxuICAgICAgICA8TW9kYWwuTGlua3M+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICBxdWVyeTogeyByZWdpc3RlcjogbnVsbCwgbG9naW46IHVuZGVmaW5lZCwgdG90cDogdW5kZWZpbmVkIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFp1ciBSZWdpc3RyaWVydW5nXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmb3Jnb3Q6IGZvcm0uZ2V0RmllbGRWYWx1ZSgnZW1haWwnKSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGxvZ2luOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdG90cDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQYXNzd29ydCB2ZXJnZXNzZW4/XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01vZGFsLkxpbmtzPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
