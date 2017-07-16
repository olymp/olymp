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
import Portal from 'react-portal';
import cn from 'classnames';
import { Spin } from 'antd';
import ReactModal2 from 'react-modal2';
import tinycolor from 'tinycolor2';
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
    return (React.createElement(Portal, { isOpen: isOpen },
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
                React.createElement(component.Copyright, null, copyright))));
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
        hasFlex: {
            display: 'flex',
        },
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
                        hasFlex: {
                            display: 'flex',
                        },
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
    return React.createElement("div", { className: cn('ant-modal-footer', className) }, children);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,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T0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO0tBQ0YsQ0FBQztBQXZCYSxDQXVCYixFQUNGLEtBQUssQ0FDTixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUNsQyxVQUFDLEVBQWdEO1FBQTlDLGdCQUFLLEVBQUUsY0FBSSxFQUFFLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLHNCQUFRO0lBQU8sT0FBQSxDQUFDO1FBQ3JELE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLE1BQU07UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1FBQ2hCLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRSxFQUFFO1FBQ1gsR0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDO0FBWG9ELENBV3BELEVBQ0YsS0FBSyxFQUNMLFVBQUMsRUFBcUI7SUFBbkIsSUFBQSxjQUFJLEVBQUUsZ0JBQUssRUFBRSxpQ0FBSTtJQUFPLE1BRzdCLENBSDZCLENBQUMsQ0FBQTtDQUFBLENBQzdCLENBQUM7QUFFRixlQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy91aS9tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24sIE1vZGFsIGFzIEFudE1vZGFsIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3RNb2RhbDIgZnJvbSAncmVhY3QtbW9kYWwyJztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5cblJlYWN0TW9kYWwyLmdldEFwcGxpY2F0aW9uRWxlbWVudCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuLy8gaXNPcGVuPXtpc09wZW59IHRyYW5zaXRpb25TcGVlZD17MTAwMH0gb249e1JlYWN0TW9kYWx9XG5jb25zdCBSZWFjdE1vZGFsID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PlxuICA8UmVhY3RNb2RhbDIgYmFja2Ryb3BDbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKFxuICB7XG4gICAgaXNPcGVuLFxuICAgIHNob3dMb2dvLFxuICAgIGxlZnRCdXR0b25zLFxuICAgIHJpZ2h0QnV0dG9ucyxcbiAgICBjbGFzc05hbWUsXG4gICAgc3VidGl0bGUsXG4gICAgb25DbG9zZSxcbiAgICBvbkNhbmNlbCxcbiAgICBva1RleHQsXG4gICAgY2FuY2VsVGV4dCxcbiAgICBvbk9rLFxuICAgIHRpdGxlLFxuICAgIGxvYWRpbmcsXG4gICAgLi4ucHJvcHMsXG4gIH0sXG4gIHsgdGhlbWUgfVxuKSA9PiB7XG4gIGxldCBjb3B5cmlnaHQgPSBudWxsO1xuICBsZXQgbGlua3MgPSBudWxsO1xuICBsZXQgZm9vdGVyID0gbnVsbDtcbiAgY29uc3QgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4ge1xuICAgIGlmIChjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUgPT09IGNvbXBvbmVudC5Db3B5cmlnaHQpIHtcbiAgICAgIGNvcHlyaWdodCA9IGNoaWxkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuTGlua3MpIHtcbiAgICAgIGxpbmtzID0gY2hpbGQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUgPT09IGNvbXBvbmVudC5Gb290ZXIpIHtcbiAgICAgIGZvb3RlciA9IGNoaWxkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFBvcnRhbCBpc09wZW49e2lzT3Blbn0+XG4gICAgICA8UmVhY3RNb2RhbFxuICAgICAgICBvbkNsb3NlPXtvbkNhbmNlbCB8fCBvbkNsb3NlfVxuICAgICAgICBjbG9zZU9uRXNjXG4gICAgICAgIGNsb3NlT25CYWNrZHJvcENsaWNrXG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ2FudC1tb2RhbC13cmFwJywgY2xhc3NOYW1lKX1cbiAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJhbnQtbW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8QW50TW9kYWwgdmlzaWJsZT17ZmFsc2V9IC8+XG4gICAgICAgIHtzaG93TG9nbyAmJlxuICAgICAgICAgIHRoZW1lLmxvZ28gJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGVtZS5sb2dvfSAvPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDxTcGluXG4gICAgICAgICAgc3Bpbm5pbmc9eyEhbG9hZGluZ31cbiAgICAgICAgICB0aXA9e3R5cGVvZiBsb2FkaW5nID09PSAnc3RyaW5nJyA/IGxvYWRpbmcgOiAnTMOkZHQgLi4uJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnMgJiZcbiAgICAgICAgICAgICAgICA8VGl0bGVCdXR0b25zIGxlZnQ+XG4gICAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgPC9UaXRsZUJ1dHRvbnM+fVxuICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zICYmXG4gICAgICAgICAgICAgICAgPFRpdGxlQnV0dG9ucyByaWdodD5cbiAgICAgICAgICAgICAgICAgIHtyaWdodEJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgPC9UaXRsZUJ1dHRvbnM+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtzdWJ0aXRsZSAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Q2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7Zm9vdGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NwaW4+XG4gICAgICAgIHtsaW5rcyAmJlxuICAgICAgICAgIDxjb21wb25lbnQuTGlua3M+XG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgPC9jb21wb25lbnQuTGlua3M+fVxuICAgICAgICB7Y29weXJpZ2h0ICYmXG4gICAgICAgICAgPGNvbXBvbmVudC5Db3B5cmlnaHQ+XG4gICAgICAgICAgICB7Y29weXJpZ2h0fVxuICAgICAgICAgIDwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICA8L1JlYWN0TW9kYWw+XG4gICAgPC9Qb3J0YWw+XG4gICk7XG59O1xuTW9kYWwuY29udGV4dFR5cGVzID0geyB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCB9O1xuXG5jb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBwYWRkaW5nLCB3aWR0aCwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHt0aGVtZS5jb2xvclN0YXJ0IHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5kYXJrZW4oNilcbiAgICAgICAgLnNwaW4oLTYpXG4gICAgICAgIC5zZXRBbHBoYShib3R0b21UcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9LCAke3RoZW1lLmNvbG9yRW5kIHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5saWdodGVuKDYpXG4gICAgICAgIC5zcGluKDEyKVxuICAgICAgICAuc2V0QWxwaGEodG9wVHJhbnNwYXJlbmN5IHx8IDEpXG4gICAgICAgIC50b1JnYlN0cmluZygpfSlgLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgICc+IC5hbnQtbW9kYWwnOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgd2lkdGg6IHdpZHRoIHx8IDQ4MCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlNCxcbiAgICAgICc+IC5sb2dvJzoge1xuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xNDAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICc+IGltZyc6IHtcbiAgICAgICAgICBoZWlnaHQ6ICc3NXB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgJz4gaDMnOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0MSxcbiAgICAgICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICc+IGRpdiA+IGRpdic6IHtcbiAgICAgICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICc+IC5hbnQtbW9kYWwtY2xvc2UnOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nIHx8IHRoZW1lLnNwYWNlMixcbiAgICAgICAgICAgICc+IConOiB7XG4gICAgICAgICAgICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXIgPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXInOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1mb290ZXInOiB7XG4gICAgICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBNb2RhbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuLy8gQ29weXJpZ2h0XG5jb21wb25lbnQuQ29weXJpZ2h0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogMTAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICc+IGEnOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnXG4pO1xuXG5jb21wb25lbnQuRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2FudC1tb2RhbC1mb290ZXInLCBjbGFzc05hbWUpfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PjtcbmNvbXBvbmVudC5CdXR0b24gPSBwcm9wcyA9PiA8QW50QnV0dG9uIHsuLi5wcm9wc30gLz47XG5cbmNvbXBvbmVudC5MaW5rcyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJz4gYSc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWluV2lkdGg6IDIwMCxcbiAgICAgIHBhZGRpbmc6ICcwIDlweCcsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnPiBkaXYgPiBhJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgcGFkZGluZzogJzAgOXB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2Rpdidcbik7XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxlZnQsIHJpZ2h0LCBwYWRkaW5nLCB3aWR0aCwgc2hvd0xvZ28gfSkgPT4gKHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGluZUhlaWdodDogJzIxcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IGxlZnQgJiYgMTYsXG4gICAgcmlnaHQ6IHJpZ2h0ICYmIDE2LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBmb250U2l6ZTogNDAsXG4gICAgZm9udFdlaWdodDogMjAwLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHRvcDogMTQsXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgbGVmdCwgcmlnaHQsIC4uLnAgfSkgPT4gcFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
