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
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7S0FDRixDQUFDO0FBdkJhLENBdUJiLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFFRixJQUFNLFlBQVksR0FBRyxlQUFlLENBQ2xDLFVBQUMsRUFBZ0Q7UUFBOUMsZ0JBQUssRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsc0JBQVE7SUFBTyxPQUFBLENBQUM7UUFDckQsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDaEIsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUM7QUFYb0QsQ0FXcEQsRUFDRixLQUFLLEVBQ0wsVUFBQyxFQUFxQjtJQUFuQixJQUFBLGNBQUksRUFBRSxnQkFBSyxFQUFFLGlDQUFJO0lBQU8sTUFHN0IsQ0FINkIsQ0FBQyxDQUFBO0NBQUEsQ0FDN0IsQ0FBQztBQUVGLGVBQWUsU0FBUyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3VpL21vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiwgTW9kYWwgYXMgQW50TW9kYWwgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEdhdGV3YXkgfSBmcm9tICdyZWFjdC1nYXRld2F5JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdE1vZGFsMiBmcm9tICdyZWFjdC1tb2RhbDInO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICcuL3RyYW5zaXRpb25zJztcblxuUmVhY3RNb2RhbDIuZ2V0QXBwbGljYXRpb25FbGVtZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4vLyBpc09wZW49e2lzT3Blbn0gdHJhbnNpdGlvblNwZWVkPXsxMDAwfSBvbj17UmVhY3RNb2RhbH1cbmNvbnN0IFJlYWN0TW9kYWwgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+XG4gIDxSZWFjdE1vZGFsMiBiYWNrZHJvcENsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoXG4gIHtcbiAgICBpc09wZW4sXG4gICAgc2hvd0xvZ28sXG4gICAgbGVmdEJ1dHRvbnMsXG4gICAgcmlnaHRCdXR0b25zLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzdWJ0aXRsZSxcbiAgICBvbkNsb3NlLFxuICAgIG9uQ2FuY2VsLFxuICAgIG9rVGV4dCxcbiAgICBjYW5jZWxUZXh0LFxuICAgIG9uT2ssXG4gICAgdGl0bGUsXG4gICAgbG9hZGluZyxcbiAgICAuLi5wcm9wcyxcbiAgfSxcbiAgeyB0aGVtZSB9XG4pID0+IHtcbiAgbGV0IGNvcHlyaWdodCA9IG51bGw7XG4gIGxldCBsaW5rcyA9IG51bGw7XG4gIGxldCBmb290ZXIgPSBudWxsO1xuICBjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkNvcHlyaWdodCkge1xuICAgICAgY29weXJpZ2h0ID0gY2hpbGQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUgPT09IGNvbXBvbmVudC5MaW5rcykge1xuICAgICAgbGlua3MgPSBjaGlsZDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkZvb3Rlcikge1xuICAgICAgZm9vdGVyID0gY2hpbGQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8R2F0ZXdheSBpbnRvPVwibW9kYWxcIj5cbiAgICAgIDxUcmFuc2l0aW9uIGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBvbkNsb3NlPXtvbkNhbmNlbCB8fCBvbkNsb3NlfVxuICAgICAgICAgIGNsb3NlT25Fc2NcbiAgICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGlja1xuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ2FudC1tb2RhbC13cmFwJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICBtb2RhbENsYXNzTmFtZT1cImFudC1tb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QW50TW9kYWwgdmlzaWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAge3Nob3dMb2dvICYmXG4gICAgICAgICAgICB0aGVtZS5sb2dvICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3RoZW1lLmxvZ299IC8+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDxTcGluXG4gICAgICAgICAgICBzcGlubmluZz17ISFsb2FkaW5nfVxuICAgICAgICAgICAgdGlwPXt0eXBlb2YgbG9hZGluZyA9PT0gJ3N0cmluZycgPyBsb2FkaW5nIDogJ0zDpGR0IC4uLid9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnMgJiZcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgbGVmdD5cbiAgICAgICAgICAgICAgICAgICAge2xlZnRCdXR0b25zfVxuICAgICAgICAgICAgICAgICAgPC9UaXRsZUJ1dHRvbnM+fVxuICAgICAgICAgICAgICAgIHtyaWdodEJ1dHRvbnMgJiZcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIHtyaWdodEJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICA8L1RpdGxlQnV0dG9ucz59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3Bpbj5cbiAgICAgICAgICB7bGlua3MgJiZcbiAgICAgICAgICAgIDxjb21wb25lbnQuTGlua3M+XG4gICAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICAgIDwvY29tcG9uZW50LkxpbmtzPn1cbiAgICAgICAgICB7Y29weXJpZ2h0ICYmXG4gICAgICAgICAgICA8Y29tcG9uZW50LkNvcHlyaWdodD5cbiAgICAgICAgICAgICAge2NvcHlyaWdodH1cbiAgICAgICAgICAgIDwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L0dhdGV3YXk+XG4gICk7XG59O1xuTW9kYWwuY29udGV4dFR5cGVzID0geyB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCB9O1xuXG5jb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBwYWRkaW5nLCB3aWR0aCwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHt0aGVtZS5jb2xvclN0YXJ0IHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5kYXJrZW4oNilcbiAgICAgICAgLnNwaW4oLTYpXG4gICAgICAgIC5zZXRBbHBoYShib3R0b21UcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9LCAke3RoZW1lLmNvbG9yRW5kIHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5saWdodGVuKDYpXG4gICAgICAgIC5zcGluKDEyKVxuICAgICAgICAuc2V0QWxwaGEodG9wVHJhbnNwYXJlbmN5IHx8IDEpXG4gICAgICAgIC50b1JnYlN0cmluZygpfSlgLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgICc+IC5hbnQtbW9kYWwnOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgd2lkdGg6IHdpZHRoIHx8IDQ4MCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlNCxcbiAgICAgICc+IC5sb2dvJzoge1xuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xNDAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICc+IGltZyc6IHtcbiAgICAgICAgICBoZWlnaHQ6ICc3NXB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgJz4gaDMnOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0MSxcbiAgICAgICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICc+IGRpdiA+IGRpdic6IHtcbiAgICAgICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICc+IC5hbnQtbW9kYWwtY2xvc2UnOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nIHx8IHRoZW1lLnNwYWNlMixcbiAgICAgICAgICAgICc+IConOiB7XG4gICAgICAgICAgICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXIgPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXInOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1mb290ZXInOiB7XG4gICAgICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBNb2RhbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuLy8gQ29weXJpZ2h0XG5jb21wb25lbnQuQ29weXJpZ2h0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogMTAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICc+IGEnOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnXG4pO1xuXG5jb21wb25lbnQuRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2FudC1tb2RhbC1mb290ZXInLCBjbGFzc05hbWUpfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PjtcbmNvbXBvbmVudC5CdXR0b24gPSBwcm9wcyA9PiA8QW50QnV0dG9uIHsuLi5wcm9wc30gLz47XG5cbmNvbXBvbmVudC5MaW5rcyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJz4gYSc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWluV2lkdGg6IDIwMCxcbiAgICAgIHBhZGRpbmc6ICcwIDlweCcsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnPiBkaXYgPiBhJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgcGFkZGluZzogJzAgOXB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2Rpdidcbik7XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxlZnQsIHJpZ2h0LCBwYWRkaW5nLCB3aWR0aCwgc2hvd0xvZ28gfSkgPT4gKHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGluZUhlaWdodDogJzIxcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IGxlZnQgJiYgMTYsXG4gICAgcmlnaHQ6IHJpZ2h0ICYmIDE2LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBmb250U2l6ZTogNDAsXG4gICAgZm9udFdlaWdodDogMjAwLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHRvcDogMTQsXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgbGVmdCwgcmlnaHQsIC4uLnAgfSkgPT4gcFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
