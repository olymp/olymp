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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';
import { createComponent } from 'olymp-fela';
import { Spin } from 'antd';
import gql from 'graphql-tag';
var Spinner = createComponent(function () { return ({
    center: true,
}); }, function (p) { return React.createElement(Spin, __assign({}, p)); }, function (p) { return Object.keys(p); });
var baseAttributes = 'id, name, email, isAdmin';
var attributes = baseAttributes;
export var auth = function (obj) { return function (WrappedComponent) {
    if (obj && obj.extraAttributes) {
        attributes = baseAttributes + ", " + obj.extraAttributes;
    }
    var inner = function (WrappedComponent) {
        var component = function (props) {
            var auth = __assign({ user: props.data.user, loading: props.data.loading }, authMethods(props.client, props.data.refetch, props.data.user, props.data.loading));
            return React.createElement(WrappedComponent, __assign({ auth: auth }, props));
        };
        return graphql((_a = ["\n        query verify {\n          user: verify {\n            ", "\n          }\n        }\n      "], _a.raw = ["\n        query verify {\n          user: verify {\n            ", "\n          }\n        }\n      "], gql(_a, attributes)), {})(withApollo(component));
        var _a;
    };
    var UserProvider = (function (_super) {
        __extends(UserProvider, _super);
        function UserProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserProvider.prototype.getChildContext = function () {
            return {
                auth: this.props.auth,
            };
        };
        UserProvider.prototype.render = function () {
            if (this.props.auth.loading) {
                return React.createElement(Spinner, null);
            }
            return React.createElement(WrappedComponent, __assign({}, this.props));
        };
        UserProvider.childContextTypes = {
            auth: PropTypes.object,
        };
        return UserProvider;
    }(Component));
    return inner(UserProvider);
}; };
export default function (WrappedComponent) {
    var withUserRenderer = function (props, context) {
        return React.createElement(WrappedComponent, __assign({}, context, props));
    };
    withUserRenderer.contextTypes = {
        auth: PropTypes.object,
    };
    return withUserRenderer;
};
var authMethods = function (client, refetch, user, loading) { return ({
    can: function (method) {
        if (loading) {
            return true;
        }
        if (!user) {
            return false;
        }
        if (user.isAdmin) {
            return true;
        }
        if (!user.features) {
            return false;
        }
        return user.features.includes(method);
    },
    isAuthenticated: function () {
        if (!user) {
            return false;
        }
        return true;
    },
    isAdmin: function () {
        if (!user) {
            return false;
        }
        return user.isAdmin;
    },
    invitation: function (invitation, id) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation invitation($invitation: InvitationInput) {\n          invitation(input: $invitation) {\n            id, name, email\n          }\n        }\n      "], _a.raw = ["\n        mutation invitation($invitation: InvitationInput) {\n          invitation(input: $invitation) {\n            id, name, email\n          }\n        }\n      "], gql(_a)),
            variables: { invitation: invitation },
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.invitation;
        });
        var _a;
    },
    save: function (user, id) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation user($user: UserInput, $id: String) {\n          user(input: $user, id: $id) {\n            ", "\n          }\n        }\n      "], _a.raw = ["\n        mutation user($user: UserInput, $id: String) {\n          user(input: $user, id: $id) {\n            ", "\n          }\n        }\n      "], gql(_a, attributes)),
            variables: { user: user, id: user.id },
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.user;
        });
        var _a;
    },
    logout: function () {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation logout {\n          logout\n        }\n      "], _a.raw = ["\n        mutation logout {\n          logout\n        }\n      "], gql(_a)),
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            if (refetch) {
                refetch({});
            }
        });
        var _a;
    },
    forgot: function (email) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation forgot {\n          forgot(email:\"", "\")\n        }\n      "], _a.raw = ["\n        mutation forgot {\n          forgot(email:\"", "\")\n        }\n      "], gql(_a, email)),
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.forgot;
        });
        var _a;
    },
    reset: function (token, password) {
        if (typeof localStorage === 'undefined') {
            return;
        }
        return client
            .mutate({
            mutation: (_a = ["\n        mutation reset {\n          reset(token:\"", "\", password:\"", "\") {\n            email\n          }\n        }\n      "], _a.raw = ["\n        mutation reset {\n          reset(token:\"", "\", password:\"", "\") {\n            email\n          }\n        }\n      "], gql(_a, token, password)),
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.reset;
        });
        var _a;
    },
    confirm: function (token) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation confirm {\n          confirm(token:\"", "\") {\n            email\n          }\n        }\n      "], _a.raw = ["\n        mutation confirm {\n          confirm(token:\"", "\") {\n            email\n          }\n        }\n      "], gql(_a, token)),
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.confirm;
        });
        var _a;
    },
    login: function (email, password, totp) {
        if (typeof localStorage === 'undefined') {
            return;
        }
        return client
            .mutate({
            mutation: (_a = ["\n        mutation login {\n          user: login(email:\"", "\", password:\"", "\"", ") {\n            ", "\n          }\n        }\n      "], _a.raw = ["\n        mutation login {\n          user: login(email:\"", "\", password:\"", "\"",
                ") {\n            ", "\n          }\n        }\n      "], gql(_a, email, password, totp
                ? ", totp:\"" + totp + "\""
                : '', attributes)),
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            var user = data.user;
            if (refetch) {
                refetch({});
            }
            return user;
        });
        var _a;
    },
    register: function (user, password, token) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation register($user: UserInput, $password: String, $token: String) {\n          register(input: $user, password: $password, token: $token) {\n            ", "\n          }\n        }\n      "], _a.raw = ["\n        mutation register($user: UserInput, $password: String, $token: String) {\n          register(input: $user, password: $password, token: $token) {\n            ", "\n          }\n        }\n      "], gql(_a, attributes)),
            variables: { user: user, password: password, token: token },
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            return data.register;
        });
        var _a;
    },
    checkToken: function (key) {
        return client
            .mutate({
            query: (_a = ["\n        query checkToken {\n          checkToken(token:\"", "\")\n        }\n      "], _a.raw = ["\n        query checkToken {\n          checkToken(token:\"", "\")\n        }\n      "], gql(_a, key)),
        })
            .then(function (_a) {
            var data = _a.data;
            return data.checkToken;
        });
        var _a;
    },
    totpConfirm: function (token, totp) {
        return client
            .mutate({
            mutation: (_a = ["\n        mutation totpConfirm($token: String, $totp: String) {\n          totpConfirm(token: $token, totp: $totp)\n        }\n      "], _a.raw = ["\n        mutation totpConfirm($token: String, $totp: String) {\n          totpConfirm(token: $token, totp: $totp)\n        }\n      "], gql(_a)),
            variables: { token: token, totp: totp },
        })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors) {
                throw errors[0];
            }
            if (!data.totpConfirm) {
                throw new Error('Could not activate TOTP');
            }
            return data.totpConfirm;
        });
        var _a;
    },
}); };
//# sourceMappingURL=with-auth.js.map