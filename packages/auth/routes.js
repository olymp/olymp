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
    return (React.createElement("div", null,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUksRUFBRSxVQUFDLEVBQVM7b0JBQVAsZ0JBQUs7Z0JBQU8sT0FBQSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUE1QyxDQUE0QyxJQUNqRTtRQUNGLG9CQUFDLFdBQVcsZUFDTixDQUFDLElBQ0wsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQ3BCLElBQUksRUFBRSxVQUFDLEVBQVM7b0JBQVAsZ0JBQUs7Z0JBQU8sT0FBQSxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUE5QyxDQUE4QyxJQUNuRTtRQUNGLG9CQUFDLFVBQVUsZUFDTCxDQUFDLElBQ0wsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQ2xCO1FBQ0Ysb0JBQUMsVUFBVSxlQUNMLENBQUMsSUFDTCxNQUFNLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQ2xDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxJQUNwQixDQUNFLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFJlZ2lzdGVyLFxuICBBdXRoTG9naW4sXG4gIEF1dGhDb25maXJtLFxuICBBdXRoUmVzZXQsXG4gIEF1dGhGb3Jnb3QsXG4gIEF1dGhTdGF0dXMsXG59IGZyb20gJy4vdmlld3MnO1xuaW1wb3J0IHsgQXV0aEludml0YXRpb25zIH0gZnJvbSAnLi9hZG1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIocHJvcHMgPT4ge1xuICBjb25zdCB7IHF1ZXJ5LCByb3V0ZXIsIHBhdGhuYW1lLCByZWdpc3RlciB9ID0gcHJvcHM7XG4gIGNvbnN0IHRleHRzID0ge1xuICAgIGZvcmdvdDogYFdpciBoYWJlbiBlaW5lIEUtTWFpbCBhbiAke3F1ZXJ5W1xuICAgICAgJ3N0YXR1cy1mb3Jnb3QnXG4gICAgXX0gZ2VzY2hpY2t0LiBCaXR0ZSBiZWZvbGdlbiBTaWUgZGVuIEFud2Vpc3VuZ2VuIGRhcmluIHVtIGVpbiBuZXVlcyBQYXNzd29ydCB6dSBlcmhhbHRlbi5gLFxuICAgIHJlZ2lzdGVyOiBgV2lyIGhhYmVuIGVpbmUgRS1NYWlsIGFuICR7cXVlcnlbXG4gICAgICAnc3RhdHVzLXJlZ2lzdGVyJ1xuICAgIF19IGdlc2NoaWNrdC4gQml0dGUgYmVmb2xnZW4gU2llIGRlbiBBbndlaXN1bmdlbiBkYXJpbiB1bSBkaWUgUmVnaXN0cmllcnVuZyBhYnp1c2NobGllw59lbi5gLFxuICB9O1xuICBjb25zdCByZWRpcmVjdCA9IG5ld1F1ZXJ5ID0+XG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIC4uLm5ld1F1ZXJ5IH0gfSk7XG4gIGNvbnN0IGluUXVlcnkgPSBrZXkgPT4gcXVlcnlba2V5XSAhPT0gdW5kZWZpbmVkO1xuICBjb25zdCBwID0geyBwYXRobmFtZSwgb25DbG9zZTogKCkgPT4gcm91dGVyLnB1c2gocGF0aG5hbWUpIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEF1dGhJbnZpdGF0aW9ucyB7Li4ucH0gaXNPcGVuPXtpblF1ZXJ5KCdpbnZpdGF0aW9ucycpfSAvPlxuICAgICAgPEF1dGhMb2dpblxuICAgICAgICB7Li4ucH1cbiAgICAgICAgaXNPcGVuPXtpblF1ZXJ5KCdsb2dpbicpfVxuICAgICAgICBlbWFpbD17cXVlcnkubG9naW59XG4gICAgICAgIHRvdHA9e2luUXVlcnkoJ3RvdHAnKX1cbiAgICAgICAgb25Ub3RwPXsoKSA9PiByZWRpcmVjdCh7IHRvdHA6IG51bGwgfSl9XG4gICAgICAvPlxuICAgICAgPEF1dGhSZWdpc3RlclxuICAgICAgICB7Li4ucH1cbiAgICAgICAgaXNPcGVuPXtpblF1ZXJ5KCdyZWdpc3RlcicpfVxuICAgICAgICB0b2tlbj17cXVlcnkucmVnaXN0ZXJ9XG4gICAgICAgIG9uT2s9eyh7IGVtYWlsLCB0b2tlbiB9KSA9PlxuICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICA/IHJlZGlyZWN0KHsgcmVnaXN0ZXI6IHVuZGVmaW5lZCwgbG9naW46IGVtYWlsIH0pXG4gICAgICAgICAgICA6IHJlZGlyZWN0KHsgcmVnaXN0ZXI6IHVuZGVmaW5lZCwgJ3N0YXR1cy1yZWdpc3Rlcic6IGVtYWlsIH0pfVxuICAgICAgICBleHRyYUZpZWxkcz17cmVnaXN0ZXJ9XG4gICAgICAvPlxuICAgICAgPEF1dGhGb3Jnb3RcbiAgICAgICAgey4uLnB9XG4gICAgICAgIGlzT3Blbj17aW5RdWVyeSgnZm9yZ290Jyl9XG4gICAgICAgIGVtYWlsPXtxdWVyeS5mb3Jnb3R9XG4gICAgICAgIG9uT2s9eyh7IGVtYWlsIH0pID0+XG4gICAgICAgICAgcmVkaXJlY3QoeyBmb3Jnb3Q6IHVuZGVmaW5lZCwgJ3N0YXR1cy1mb3Jnb3QnOiBlbWFpbCB9KX1cbiAgICAgIC8+XG4gICAgICA8QXV0aFJlc2V0XG4gICAgICAgIHsuLi5wfVxuICAgICAgICBpc09wZW49e2luUXVlcnkoJ3Jlc2V0Jyl9XG4gICAgICAgIHRva2VuPXtxdWVyeS5yZXNldH1cbiAgICAgICAgb25Paz17KHsgZW1haWwgfSkgPT4gcmVkaXJlY3QoeyByZXNldDogdW5kZWZpbmVkLCBsb2dpbjogZW1haWwgfSl9XG4gICAgICAvPlxuICAgICAgPEF1dGhDb25maXJtXG4gICAgICAgIHsuLi5wfVxuICAgICAgICBpc09wZW49e2luUXVlcnkoJ2NvbmZpcm0nKX1cbiAgICAgICAgdG9rZW49e3F1ZXJ5LmNvbmZpcm19XG4gICAgICAgIG9uT2s9eyh7IGVtYWlsIH0pID0+IHJlZGlyZWN0KHsgY29uZmlybTogdW5kZWZpbmVkLCBsb2dpbjogZW1haWwgfSl9XG4gICAgICAvPlxuICAgICAgPEF1dGhTdGF0dXNcbiAgICAgICAgey4uLnB9XG4gICAgICAgIGlzT3Blbj17aW5RdWVyeSgnc3RhdHVzLWZvcmdvdCcpfVxuICAgICAgICB0ZXh0PXt0ZXh0cy5mb3Jnb3R9XG4gICAgICAvPlxuICAgICAgPEF1dGhTdGF0dXNcbiAgICAgICAgey4uLnB9XG4gICAgICAgIGlzT3Blbj17aW5RdWVyeSgnc3RhdHVzLXJlZ2lzdGVyJyl9XG4gICAgICAgIHRleHQ9e3RleHRzLnJlZ2lzdGVyfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIl19
