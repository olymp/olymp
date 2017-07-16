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
import Portal from 'react-portal-minimal';
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
    return !isOpen
        ? null
        : React.createElement(Portal, null,
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
                    React.createElement(component.Copyright, null, copyright)));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,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UCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7S0FDRixDQUFDO0FBdkJhLENBdUJiLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFFRixJQUFNLFlBQVksR0FBRyxlQUFlLENBQ2xDLFVBQUMsRUFBZ0Q7UUFBOUMsZ0JBQUssRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsc0JBQVE7SUFBTyxPQUFBLENBQUM7UUFDckQsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDaEIsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUM7QUFYb0QsQ0FXcEQsRUFDRixLQUFLLEVBQ0wsVUFBQyxFQUFxQjtJQUFuQixJQUFBLGNBQUksRUFBRSxnQkFBSyxFQUFFLGlDQUFJO0lBQU8sTUFHN0IsQ0FINkIsQ0FBQyxDQUFBO0NBQUEsQ0FDN0IsQ0FBQztBQUVGLGVBQWUsU0FBUyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3VpL21vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiwgTW9kYWwgYXMgQW50TW9kYWwgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsLW1pbmltYWwnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0TW9kYWwyIGZyb20gJ3JlYWN0LW1vZGFsMic7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5SZWFjdE1vZGFsMi5nZXRBcHBsaWNhdGlvbkVsZW1lbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vIGlzT3Blbj17aXNPcGVufSB0cmFuc2l0aW9uU3BlZWQ9ezEwMDB9IG9uPXtSZWFjdE1vZGFsfVxuY29uc3QgUmVhY3RNb2RhbCA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT5cbiAgPFJlYWN0TW9kYWwyIGJhY2tkcm9wQ2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gLz47XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9IChcbiAge1xuICAgIGlzT3BlbixcbiAgICBzaG93TG9nbyxcbiAgICBsZWZ0QnV0dG9ucyxcbiAgICByaWdodEJ1dHRvbnMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHN1YnRpdGxlLFxuICAgIG9uQ2xvc2UsXG4gICAgb25DYW5jZWwsXG4gICAgb2tUZXh0LFxuICAgIGNhbmNlbFRleHQsXG4gICAgb25PayxcbiAgICB0aXRsZSxcbiAgICBsb2FkaW5nLFxuICAgIC4uLnByb3BzLFxuICB9LFxuICB7IHRoZW1lIH1cbikgPT4ge1xuICBsZXQgY29weXJpZ2h0ID0gbnVsbDtcbiAgbGV0IGxpbmtzID0gbnVsbDtcbiAgbGV0IGZvb3RlciA9IG51bGw7XG4gIGNvbnN0IGNoaWxkcmVuID0gQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IHtcbiAgICBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuQ29weXJpZ2h0KSB7XG4gICAgICBjb3B5cmlnaHQgPSBjaGlsZDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkxpbmtzKSB7XG4gICAgICBsaW5rcyA9IGNoaWxkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuRm9vdGVyKSB7XG4gICAgICBmb290ZXIgPSBjaGlsZDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuICByZXR1cm4gIWlzT3BlblxuICAgID8gbnVsbFxuICAgIDogPFBvcnRhbD5cbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBvbkNsb3NlPXtvbkNhbmNlbCB8fCBvbkNsb3NlfVxuICAgICAgICAgIGNsb3NlT25Fc2NcbiAgICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGlja1xuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ2FudC1tb2RhbC13cmFwJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICBtb2RhbENsYXNzTmFtZT1cImFudC1tb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QW50TW9kYWwgdmlzaWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAge3Nob3dMb2dvICYmXG4gICAgICAgICAgICB0aGVtZS5sb2dvICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3RoZW1lLmxvZ299IC8+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDxTcGluXG4gICAgICAgICAgICBzcGlubmluZz17ISFsb2FkaW5nfVxuICAgICAgICAgICAgdGlwPXt0eXBlb2YgbG9hZGluZyA9PT0gJ3N0cmluZycgPyBsb2FkaW5nIDogJ0zDpGR0IC4uLid9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnMgJiZcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgbGVmdD5cbiAgICAgICAgICAgICAgICAgICAge2xlZnRCdXR0b25zfVxuICAgICAgICAgICAgICAgICAgPC9UaXRsZUJ1dHRvbnM+fVxuICAgICAgICAgICAgICAgIHtyaWdodEJ1dHRvbnMgJiZcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIHtyaWdodEJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICA8L1RpdGxlQnV0dG9ucz59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3Bpbj5cbiAgICAgICAgICB7bGlua3MgJiZcbiAgICAgICAgICAgIDxjb21wb25lbnQuTGlua3M+XG4gICAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICAgIDwvY29tcG9uZW50LkxpbmtzPn1cbiAgICAgICAgICB7Y29weXJpZ2h0ICYmXG4gICAgICAgICAgICA8Y29tcG9uZW50LkNvcHlyaWdodD5cbiAgICAgICAgICAgICAge2NvcHlyaWdodH1cbiAgICAgICAgICAgIDwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgIDwvUG9ydGFsPjtcbn07XG5Nb2RhbC5jb250ZXh0VHlwZXMgPSB7IHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0IH07XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHBhZGRpbmcsIHdpZHRoLCBib3R0b21UcmFuc3BhcmVuY3ksIHRvcFRyYW5zcGFyZW5jeSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLmNvbG9yU3RhcnQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmRhcmtlbig2KVxuICAgICAgICAuc3BpbigtNilcbiAgICAgICAgLnNldEFscGhhKGJvdHRvbVRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0sICR7dGhlbWUuY29sb3JFbmQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oNilcbiAgICAgICAgLnNwaW4oMTIpXG4gICAgICAgIC5zZXRBbHBoYSh0b3BUcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9KWAsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gLmFudC1tb2RhbCc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICB3aWR0aDogd2lkdGggfHwgNDgwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2U0LFxuICAgICAgJz4gLmxvZ28nOiB7XG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIG1hcmdpblRvcDogLTE0MCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgJz4gaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogJzc1cHgnLFxuICAgICAgICB9LFxuICAgICAgICAnPiBoMyc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHQxLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJz4gZGl2ID4gZGl2Jzoge1xuICAgICAgICAnPiAuYW50LW1vZGFsLWNvbnRlbnQnOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1jbG9zZSc6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5hbnQtbW9kYWwtYm9keSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmcgfHwgdGhlbWUuc3BhY2UyLFxuICAgICAgICAgICAgJz4gKic6IHtcbiAgICAgICAgICAgICAgbWFyZ2luWTogdGhlbWUuc3BhY2UzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcic6IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWhlYWRlciA+IC5hbnQtbW9kYWwtdGl0bGUnOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWhlYWRlcic6IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgICAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMSxcbiAgICAgICAgICAgICc+IC5hbnQtYnRuJzoge1xuICAgICAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNlMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIE1vZGFsLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG4vLyBDb3B5cmlnaHRcbmNvbXBvbmVudC5Db3B5cmlnaHQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiAxMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJz4gYSc6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2Rpdidcbik7XG5cbmNvbXBvbmVudC5Gb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtjbignYW50LW1vZGFsLWZvb3RlcicsIGNsYXNzTmFtZSl9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+O1xuY29tcG9uZW50LkJ1dHRvbiA9IHByb3BzID0+IDxBbnRCdXR0b24gey4uLnByb3BzfSAvPjtcblxuY29tcG9uZW50LkxpbmtzID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpblRvcDogMjAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAnPiBhJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgcGFkZGluZzogJzAgOXB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgICc+IGRpdiA+IGEnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1pbldpZHRoOiAyMDAsXG4gICAgICBwYWRkaW5nOiAnMCA5cHgnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2J1xuKTtcblxuY29uc3QgVGl0bGVCdXR0b25zID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbGVmdCwgcmlnaHQsIHBhZGRpbmcsIHdpZHRoLCBzaG93TG9nbyB9KSA9PiAoe1xuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjFweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogbGVmdCAmJiAxNixcbiAgICByaWdodDogcmlnaHQgJiYgMTYsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgcGFkZGluZzogMTAsXG4gICAgdG9wOiAxNCxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBsZWZ0LCByaWdodCwgLi4ucCB9KSA9PiBwXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
