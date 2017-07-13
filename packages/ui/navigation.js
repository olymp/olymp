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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withLang } from 'olymp-utils';
import { withAuth } from 'olymp-auth';
import { Menu } from 'antd';
import { createComponent } from 'olymp-fela';
import { GatewayRegistry } from 'react-gateway';
var getInitials = function (name) {
    if (name) {
        var array = name.split(' ');
        switch (array.length) {
            case 1:
                return array[0].charAt(0).toUpperCase();
            default:
                return (array[0].charAt(0).toUpperCase() +
                    array[array.length - 1].charAt(0).toUpperCase());
        }
    }
    return false;
};
var UserIcon = createComponent(function (_a) {
    var theme = _a.theme, name = _a.name;
    return ({
        float: 'left',
        borderRadius: '50%',
        marginY: theme.space2,
        background: "url(https://invatar0.appspot.com/svg/" + getInitials(name) + ".jpg?s=26&bg=" + encodeURIComponent(theme.color) + "&color=" + encodeURIComponent(theme.light) + ") center center no-repeat, " + theme.color,
        onHover: {
            opacity: 0.85,
        },
    });
}, function (p) { return (__assign({}, p)); }, size = { 30:  } /  > , function (p) { return Object.keys(p); });
var VerticalMenu = createComponent(function (_a) {
    var theme = _a.theme, padding = _a.padding;
    return ({
        position: 'relative',
        zIndex: 3,
        backgroundColor: '#404040',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        display: 'flex',
        justifyContent: 'space-between',
        '> ul': {
            zIndex: 3,
            boxShadow: 'inset 0 -10px 10px -10px #000000',
        },
        '> ul > li.ant-menu-item-selected.ant-menu-item': {
            backgroundColor: theme.color,
            '> a': {
                color: theme.light,
            },
        },
        ifSmallDown: {
            display: 'none',
        },
        padding: padding,
    });
}, 'div', function (_a) {
    var padding = _a.padding, p = __rest(_a, ["padding"]);
    return Object.keys(p);
});
var LeftMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'left',
    });
}, function (p) { return (__assign({}, p) /  > ); }, function (p) { return Object.keys(p); });
var Filler = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        flex: '1 1 0%',
    });
}, function (p) { return (__assign({}, p) /  > ); }, function (p) { return Object.keys(p); });
var RightMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right !important',
        '> ul': {
            right: 0,
            left: 'auto !important',
            '> li > ul': {
                left: 'auto !important',
                marginLeft: '0 !important',
                right: '100%',
                marginRight: 4,
            },
        },
    });
}, function (p) { return (__assign({}, p) /  > ); }, function (p) { return Object.keys(p); });
var AntMenu = function (_a) {
    var keys = _a.keys, p = __rest(_a, ["keys"]);
    return theme;
};
"dark";
selectedKeys = { keys: keys };
mode = "horizontal";
{
    p;
}
/>;;
var AntSubMenu = function (_a) {
    var keys = _a.keys, title = _a.title, children = _a.children, p = __rest(_a, ["keys", "title", "children"]);
    return (__assign({}, p) >
        title) = { title:  || type, "bars": />}> };
};
{
    children;
}
/RightMenu>
    < /AntMenu>);;
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.default = "blank" /  >
        ;
        _this.gatewayRegistry = context.gatewayRegistry;
        return _this;
    }
    Navigation.prototype.componentWillMount = function () {
        this.gatewayRegistry.addContainer('toolbar', this);
    };
    Navigation.prototype.componentWillUnmount = function () {
        this.gatewayRegistry.removeContainer('toolbar', this);
    };
    Navigation.prototype.render = function () {
        var _a = this.props, auth = _a.auth, padding = _a.padding, _b = _a.query, query = _b === void 0 ? {} : _b, pathname = _a.pathname, children = _a.children, _c = _a.keys, keys = _c === void 0 ? [pathname] : _c;
        return padding = { padding: padding } >
            keys;
        {
            keys;
        }
         >
            to;
        {
            {
                pathname;
            }
        }
         >
            size;
        {
            33;
        }
        margin = "0 0 -7px 0" /  >
            /Link>
            < /Menu.Item>;
        {
            children;
        }
        /AntMenu>
            < Filler /  >
            name;
        "quick";
        component = { AntMenu: AntMenu } /  >
            name;
        "navigation";
        component = { AntMenu: AntMenu } /  >
            { get: function (auth) { }, 'user':  } && title;
        {
            email;
            {
                auth.user.email;
            }
            name = { auth: .user.name };
        }
    };
    Navigation.contextTypes = {
        gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
    };
    Navigation = __decorate([
        withLang,
        withAuth
    ], Navigation);
    return Navigation;
}(Component));
 >
    key;
"logout" >
    onClick;
{
    auth.logout;
}
href = "javascript:;" >
    type;
"poweroff" /  > Abmelden
    < /a>
    < /Menu.Item>
    < /AntSubMenu>}
    < /div>
    < /VerticalMenu>;
;
Navigation.Item = Menu.Item;
export default Navigation;
//# sourceMappingURL=navigation.js.map