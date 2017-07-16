var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { withRouter } from 'olymp-router';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus, } from './views';
import { AuthInvitations } from './admin';
export default withRouter(function (props) {
    var query = props.query, router = props.router, pathname = props.pathname, register = props.register;
    var texts = {
        forgot: "Wir haben eine E-Mail an " + query['status-forgot'] + " geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.",
        register: "Wir haben eine E-Mail an " + query['status-register'] + " geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschlie\u00DFen.",
    };
    var redirect = function (newQuery) {
        return router.push({ pathname: pathname, query: __assign({}, query, newQuery) });
    };
    var inQuery = function (key) { return query[key] !== undefined; };
    var p = { pathname: pathname, onClose: function () { return router.push(pathname); } };
    console.log(inQuery('login'), query);
    return (React.createElement("div", null,
        "IS OPEN? ",
        inQuery('login') ? 'JA' : 'NEIN',
        React.createElement(AuthInvitations, __assign({}, p, { isOpen: inQuery('invitations') })),
        React.createElement(AuthLogin, __assign({}, p, { isOpen: inQuery('login'), email: query.login, totp: inQuery('totp'), onTotp: function () { return redirect({ totp: null }); } })),
        React.createElement(AuthRegister, __assign({}, p, { isOpen: inQuery('register'), token: query.register, onOk: function (_a) {
                var email = _a.email, token = _a.token;
                return token
                    ? redirect({ register: undefined, login: email })
                    : redirect({ register: undefined, 'status-register': email });
            }, extraFields: register })),
        React.createElement(AuthForgot, __assign({}, p, { isOpen: inQuery('forgot'), email: query.forgot, onOk: function (_a) {
                var email = _a.email;
                return redirect({ forgot: undefined, 'status-forgot': email });
            } })),
        React.createElement(AuthReset, __assign({}, p, { isOpen: inQuery('reset'), token: query.reset, onOk: function (_a) {
                var email = _a.email;
                return redirect({ reset: undefined, login: email });
            } })),
        React.createElement(AuthConfirm, __assign({}, p, { isOpen: inQuery('confirm'), token: query.confirm, onOk: function (_a) {
                var email = _a.email;
                return redirect({ confirm: undefined, login: email });
            } })),
        React.createElement(AuthStatus, __assign({}, p, { isOpen: inQuery('status-forgot'), text: texts.forgot })),
        React.createElement(AuthStatus, __assign({}, p, { isOpen: inQuery('status-register'), text: texts.register }))));
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQXVELElBQ3pEO1FBQ0Ysb0JBQUMsU0FBUyxlQUNKLENBQUMsSUFDTCxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUFFLFVBQUMsRUFBUztvQkFBUCxnQkFBSztnQkFBTyxPQUFBLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQTVDLENBQTRDLElBQ2pFO1FBQ0Ysb0JBQUMsV0FBVyxlQUNOLENBQUMsSUFDTCxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDcEIsSUFBSSxFQUFFLFVBQUMsRUFBUztvQkFBUCxnQkFBSztnQkFBTyxPQUFBLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQTlDLENBQThDLElBQ25FO1FBQ0Ysb0JBQUMsVUFBVSxlQUNMLENBQUMsSUFDTCxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFDbEI7UUFDRixvQkFBQyxVQUFVLGVBQ0wsQ0FBQyxJQUNMLE1BQU0sRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFDbEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQ3BCLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvYXV0aC9yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoUmVnaXN0ZXIsXG4gIEF1dGhMb2dpbixcbiAgQXV0aENvbmZpcm0sXG4gIEF1dGhSZXNldCxcbiAgQXV0aEZvcmdvdCxcbiAgQXV0aFN0YXR1cyxcbn0gZnJvbSAnLi92aWV3cyc7XG5pbXBvcnQgeyBBdXRoSW52aXRhdGlvbnMgfSBmcm9tICcuL2FkbWluJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIHJvdXRlciwgcGF0aG5hbWUsIHJlZ2lzdGVyIH0gPSBwcm9wcztcbiAgY29uc3QgdGV4dHMgPSB7XG4gICAgZm9yZ290OiBgV2lyIGhhYmVuIGVpbmUgRS1NYWlsIGFuICR7cXVlcnlbXG4gICAgICAnc3RhdHVzLWZvcmdvdCdcbiAgICBdfSBnZXNjaGlja3QuIEJpdHRlIGJlZm9sZ2VuIFNpZSBkZW4gQW53ZWlzdW5nZW4gZGFyaW4gdW0gZWluIG5ldWVzIFBhc3N3b3J0IHp1IGVyaGFsdGVuLmAsXG4gICAgcmVnaXN0ZXI6IGBXaXIgaGFiZW4gZWluZSBFLU1haWwgYW4gJHtxdWVyeVtcbiAgICAgICdzdGF0dXMtcmVnaXN0ZXInXG4gICAgXX0gZ2VzY2hpY2t0LiBCaXR0ZSBiZWZvbGdlbiBTaWUgZGVuIEFud2Vpc3VuZ2VuIGRhcmluIHVtIGRpZSBSZWdpc3RyaWVydW5nIGFienVzY2hsaWXDn2VuLmAsXG4gIH07XG4gIGNvbnN0IHJlZGlyZWN0ID0gbmV3UXVlcnkgPT5cbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgLi4ubmV3UXVlcnkgfSB9KTtcbiAgY29uc3QgaW5RdWVyeSA9IGtleSA9PiBxdWVyeVtrZXldICE9PSB1bmRlZmluZWQ7XG4gIGNvbnN0IHAgPSB7IHBhdGhuYW1lLCBvbkNsb3NlOiAoKSA9PiByb3V0ZXIucHVzaChwYXRobmFtZSkgfTtcblxuICBjb25zb2xlLmxvZyhpblF1ZXJ5KCdsb2dpbicpLCBxdWVyeSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIElTIE9QRU4/IHtpblF1ZXJ5KCdsb2dpbicpID8gJ0pBJyA6ICdORUlOJ31cbiAgICAgIDxBdXRoSW52aXRhdGlvbnMgey4uLnB9IGlzT3Blbj17aW5RdWVyeSgnaW52aXRhdGlvbnMnKX0gLz5cbiAgICAgIDxBdXRoTG9naW5cbiAgICAgICAgey4uLnB9XG4gICAgICAgIGlzT3Blbj17aW5RdWVyeSgnbG9naW4nKX1cbiAgICAgICAgZW1haWw9e3F1ZXJ5LmxvZ2lufVxuICAgICAgICB0b3RwPXtpblF1ZXJ5KCd0b3RwJyl9XG4gICAgICAgIG9uVG90cD17KCkgPT4gcmVkaXJlY3QoeyB0b3RwOiBudWxsIH0pfVxuICAgICAgLz5cbiAgICAgIDxBdXRoUmVnaXN0ZXJcbiAgICAgICAgey4uLnB9XG4gICAgICAgIGlzT3Blbj17aW5RdWVyeSgncmVnaXN0ZXInKX1cbiAgICAgICAgdG9rZW49e3F1ZXJ5LnJlZ2lzdGVyfVxuICAgICAgICBvbk9rPXsoeyBlbWFpbCwgdG9rZW4gfSkgPT5cbiAgICAgICAgICB0b2tlblxuICAgICAgICAgICAgPyByZWRpcmVjdCh7IHJlZ2lzdGVyOiB1bmRlZmluZWQsIGxvZ2luOiBlbWFpbCB9KVxuICAgICAgICAgICAgOiByZWRpcmVjdCh7IHJlZ2lzdGVyOiB1bmRlZmluZWQsICdzdGF0dXMtcmVnaXN0ZXInOiBlbWFpbCB9KX1cbiAgICAgICAgZXh0cmFGaWVsZHM9e3JlZ2lzdGVyfVxuICAgICAgLz5cbiAgICAgIDxBdXRoRm9yZ290XG4gICAgICAgIHsuLi5wfVxuICAgICAgICBpc09wZW49e2luUXVlcnkoJ2ZvcmdvdCcpfVxuICAgICAgICBlbWFpbD17cXVlcnkuZm9yZ290fVxuICAgICAgICBvbk9rPXsoeyBlbWFpbCB9KSA9PlxuICAgICAgICAgIHJlZGlyZWN0KHsgZm9yZ290OiB1bmRlZmluZWQsICdzdGF0dXMtZm9yZ290JzogZW1haWwgfSl9XG4gICAgICAvPlxuICAgICAgPEF1dGhSZXNldFxuICAgICAgICB7Li4ucH1cbiAgICAgICAgaXNPcGVuPXtpblF1ZXJ5KCdyZXNldCcpfVxuICAgICAgICB0b2tlbj17cXVlcnkucmVzZXR9XG4gICAgICAgIG9uT2s9eyh7IGVtYWlsIH0pID0+IHJlZGlyZWN0KHsgcmVzZXQ6IHVuZGVmaW5lZCwgbG9naW46IGVtYWlsIH0pfVxuICAgICAgLz5cbiAgICAgIDxBdXRoQ29uZmlybVxuICAgICAgICB7Li4ucH1cbiAgICAgICAgaXNPcGVuPXtpblF1ZXJ5KCdjb25maXJtJyl9XG4gICAgICAgIHRva2VuPXtxdWVyeS5jb25maXJtfVxuICAgICAgICBvbk9rPXsoeyBlbWFpbCB9KSA9PiByZWRpcmVjdCh7IGNvbmZpcm06IHVuZGVmaW5lZCwgbG9naW46IGVtYWlsIH0pfVxuICAgICAgLz5cbiAgICAgIDxBdXRoU3RhdHVzXG4gICAgICAgIHsuLi5wfVxuICAgICAgICBpc09wZW49e2luUXVlcnkoJ3N0YXR1cy1mb3Jnb3QnKX1cbiAgICAgICAgdGV4dD17dGV4dHMuZm9yZ290fVxuICAgICAgLz5cbiAgICAgIDxBdXRoU3RhdHVzXG4gICAgICAgIHsuLi5wfVxuICAgICAgICBpc09wZW49e2luUXVlcnkoJ3N0YXR1cy1yZWdpc3RlcicpfVxuICAgICAgICB0ZXh0PXt0ZXh0cy5yZWdpc3Rlcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiJdfQ==
