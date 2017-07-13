var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Button as AntButton, Modal as AntModal } from 'antd';
import { Gateway } from 'react-gateway';
import cn from 'classnames';
import { Spin } from 'antd';
import ReactModal2 from 'react-modal2';
import tinycolor from 'tinycolor2';
import { Transition } from './transitions';
ReactModal2.getApplicationElement = function () { return document.getElementById('app'); };
var ReactModal = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(ReactModal2, __assign({ backdropClassName: className }, props));
};
export var Modal = function (_a, _b) {
    var theme = _b.theme;
    var isOpen = _a.isOpen, showLogo = _a.showLogo, leftButtons = _a.leftButtons, rightButtons = _a.rightButtons, className = _a.className, subtitle = _a.subtitle, onClose = _a.onClose, onCancel = _a.onCancel, okText = _a.okText, cancelText = _a.cancelText, onOk = _a.onOk, title = _a.title, loading = _a.loading, props = __rest(_a, ["isOpen", "showLogo", "leftButtons", "rightButtons", "className", "subtitle", "onClose", "onCancel", "okText", "cancelText", "onOk", "title", "loading"]);
    var copyright = null;
    var links = null;
    var footer = null;
    var children = Children.toArray(props.children).filter(function (child) {
        if (child.type && child.type === component.Copyright) {
            copyright = child;
            return false;
        }
        else if (child.type && child.type === component.Links) {
            links = child;
            return false;
        }
        else if (child.type && child.type === component.Footer) {
            footer = child;
            return false;
        }
        return true;
    });
    return (React.createElement(Gateway, { into: "modal" },
        React.createElement(Transition, { isOpen: isOpen },
            React.createElement(ReactModal, { onClose: onCancel || onClose, closeOnEsc: true, closeOnBackdropClick: true, className: cn('ant-modal-wrap', className), modalClassName: "ant-modal" },
                React.createElement(AntModal, { visible: false }),
                showLogo &&
                    theme.logo &&
                    React.createElement("div", { className: "logo" },
                        React.createElement("img", { src: theme.logo }),
                        React.createElement("h3", null, theme.logoTitle)),
                React.createElement(Spin, { spinning: !!loading, tip: typeof loading === 'string' ? loading : 'Lädt ...' },
                    React.createElement("div", { className: "ant-modal-content" },
                        React.createElement("div", { className: "ant-modal-header" },
                            leftButtons &&
                                React.createElement(TitleButtons, { left: true }, leftButtons),
                            rightButtons &&
                                React.createElement(TitleButtons, { right: true }, rightButtons),
                            React.createElement("div", { className: "ant-modal-title" }, title),
                            subtitle &&
                                React.createElement("div", { className: "ant-modal-subtitle" }, subtitle)),
                        Children.toArray(children).length > 0 &&
                            React.createElement("div", { className: "ant-modal-body" }, children),
                        footer)),
                links &&
                    React.createElement(component.Links, null, links),
                copyright &&
                    React.createElement(component.Copyright, null, copyright)))));
};
Modal.contextTypes = { theme: PropTypes.object };
var component = createComponent(function (_a) {
    var theme = _a.theme, padding = _a.padding, width = _a.width, bottomTransparency = _a.bottomTransparency, topTransparency = _a.topTransparency;
    return ({
        backgroundColor: theme.color,
        background: "linear-gradient(0deg, " + (theme.colorStart ||
            tinycolor(theme.color)
                .darken(6)
                .spin(-6)
                .setAlpha(bottomTransparency || 1)
                .toRgbString()) + ", " + (theme.colorEnd ||
            tinycolor(theme.color)
                .lighten(6)
                .spin(12)
                .setAlpha(topTransparency || 1)
                .toRgbString()) + ")",
        display: 'flex',
        height: '100%',
        '> .ant-modal': {
            top: 0,
            outline: 0,
            width: width || 480,
            margin: 'auto',
            paddingY: theme.space4,
            '> .logo': {
                pointerEvents: 'none',
                margin: 'auto',
                marginBottom: 20,
                marginTop: -140,
                textAlign: 'center',
                '> img': {
                    height: '75px',
                },
                '> h3': {
                    color: theme.light1,
                    fontWeight: 200,
                    fontSize: 40,
                },
            },
            '> div > div': {
                '> .ant-modal-content': {
                    borderRadius: theme.borderRadius,
                    '> .ant-modal-close': {
                        display: 'none',
                    },
                    '> .ant-modal-body': {
                        padding: padding || theme.space2,
                        '> *': {
                            marginY: theme.space3,
                        },
                        '& .ant-input-group-wrapper': {
                            width: '100%',
                        },
                    },
                    '> .ant-modal-header > .ant-modal-title': {
                        color: theme.color,
                        fontSize: 40,
                        fontWeight: 200,
                        padding: 10,
                        lineHeight: '30px',
                        paddingTop: 0,
                    },
                    '> .ant-modal-header': {
                        textAlign: 'center',
                    },
                    '> .ant-modal-footer': {
                        display: 'flex',
                        padding: theme.space1,
                        '> .ant-btn': {
                            flex: '1 1 auto',
                            margin: theme.space1,
                        },
                    },
                },
            },
        },
    });
}, Modal, function (p) { return Object.keys(p); });
component.Copyright = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        bottom: 10,
        textAlign: 'center',
        right: 0,
        left: 0,
        '> a': {
            color: 'white',
            opacity: 0.3,
            onHover: {
                opacity: 1,
            },
        },
    });
}, 'div');
component.Footer = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: cn('ant-modal-footer', className) }, children));
};
component.Button = function (props) { return React.createElement(AntButton, __assign({}, props)); };
component.Links = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginTop: 20,
        textAlign: 'center',
        '> a': {
            display: 'inline-block',
            minWidth: 200,
            padding: '0 9px',
            color: 'white',
            opacity: 0.3,
            onHover: {
                opacity: 1,
            },
        },
        '> div > a': {
            display: 'inline-block',
            minWidth: 200,
            padding: '0 9px',
            color: 'white',
            opacity: 0.3,
            onHover: {
                opacity: 1,
            },
        },
    });
}, 'div');
var TitleButtons = createComponent(function (_a) {
    var theme = _a.theme, left = _a.left, right = _a.right, padding = _a.padding, width = _a.width, showLogo = _a.showLogo;
    return ({
        margin: 0,
        lineHeight: '21px',
        position: 'absolute',
        left: left && 16,
        right: right && 16,
        color: theme.color,
        fontSize: 40,
        fontWeight: 200,
        padding: 10,
        top: 14,
    });
}, 'div', function (_a) {
    var left = _a.left, right = _a.right, p = __rest(_a, ["left", "right"]);
    return p;
});
export default component;
//# sourceMappingURL=modal.js.map