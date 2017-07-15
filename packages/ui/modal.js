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
    if (!isOpen)
        return null;
    return (React.createElement(Gateway, { into: "modal" },
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL21vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3hDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLElBQUksU0FBUyxFQUFFLEtBQUssSUFBSSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBRW5DLFdBQVcsQ0FBQyxxQkFBcUIsR0FBRyxjQUFNLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQztBQUd6RSxJQUFNLFVBQVUsR0FBRyxVQUFDLEVBQXVCO0lBQXJCLElBQUEsd0JBQVMsRUFBRSxpQ0FBUTtJQUN2QyxNQUFNLENBQU4sb0JBQUMsV0FBVyxhQUFDLGlCQUFpQixFQUFFLFNBQVMsSUFBTSxLQUFLLEVBQUksQ0FBQTtDQUFBLENBQUM7QUFFM0QsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLFVBQ25CLEVBZUMsRUFDRCxFQUFTO1FBQVAsZ0JBQUs7SUFmTCxJQUFBLGtCQUFNLEVBQ04sc0JBQVEsRUFDUiw0QkFBVyxFQUNYLDhCQUFZLEVBQ1osd0JBQVMsRUFDVCxzQkFBUSxFQUNSLG9CQUFPLEVBQ1Asc0JBQVEsRUFDUixrQkFBTSxFQUNOLDBCQUFVLEVBQ1YsY0FBSSxFQUNKLGdCQUFLLEVBQ0wsb0JBQU8sRUFDUCw2S0FB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QUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7S0FDRixDQUFDO0FBdkJhLENBdUJiLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFFRixJQUFNLFlBQVksR0FBRyxlQUFlLENBQ2xDLFVBQUMsRUFBZ0Q7UUFBOUMsZ0JBQUssRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsc0JBQVE7SUFBTyxPQUFBLENBQUM7UUFDckQsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDaEIsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUM7QUFYb0QsQ0FXcEQsRUFDRixLQUFLLEVBQ0wsVUFBQyxFQUFxQjtJQUFuQixJQUFBLGNBQUksRUFBRSxnQkFBSyxFQUFFLGlDQUFJO0lBQU8sTUFHN0IsQ0FINkIsQ0FBQyxDQUFBO0NBQUEsQ0FDN0IsQ0FBQztBQUVGLGVBQWUsU0FBUyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3VpL21vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiwgTW9kYWwgYXMgQW50TW9kYWwgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEdhdGV3YXkgfSBmcm9tICdyZWFjdC1nYXRld2F5JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdE1vZGFsMiBmcm9tICdyZWFjdC1tb2RhbDInO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuUmVhY3RNb2RhbDIuZ2V0QXBwbGljYXRpb25FbGVtZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4vLyBpc09wZW49e2lzT3Blbn0gdHJhbnNpdGlvblNwZWVkPXsxMDAwfSBvbj17UmVhY3RNb2RhbH1cbmNvbnN0IFJlYWN0TW9kYWwgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+XG4gIDxSZWFjdE1vZGFsMiBiYWNrZHJvcENsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoXG4gIHtcbiAgICBpc09wZW4sXG4gICAgc2hvd0xvZ28sXG4gICAgbGVmdEJ1dHRvbnMsXG4gICAgcmlnaHRCdXR0b25zLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzdWJ0aXRsZSxcbiAgICBvbkNsb3NlLFxuICAgIG9uQ2FuY2VsLFxuICAgIG9rVGV4dCxcbiAgICBjYW5jZWxUZXh0LFxuICAgIG9uT2ssXG4gICAgdGl0bGUsXG4gICAgbG9hZGluZyxcbiAgICAuLi5wcm9wcyxcbiAgfSxcbiAgeyB0aGVtZSB9XG4pID0+IHtcbiAgbGV0IGNvcHlyaWdodCA9IG51bGw7XG4gIGxldCBsaW5rcyA9IG51bGw7XG4gIGxldCBmb290ZXIgPSBudWxsO1xuICBjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkNvcHlyaWdodCkge1xuICAgICAgY29weXJpZ2h0ID0gY2hpbGQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUgPT09IGNvbXBvbmVudC5MaW5rcykge1xuICAgICAgbGlua3MgPSBjaGlsZDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkZvb3Rlcikge1xuICAgICAgZm9vdGVyID0gY2hpbGQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxHYXRld2F5IGludG89XCJtb2RhbFwiPlxuICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgb25DbG9zZT17b25DYW5jZWwgfHwgb25DbG9zZX1cbiAgICAgICAgY2xvc2VPbkVzY1xuICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGlja1xuICAgICAgICBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtd3JhcCcsIGNsYXNzTmFtZSl9XG4gICAgICAgIG1vZGFsQ2xhc3NOYW1lPVwiYW50LW1vZGFsXCJcbiAgICAgID5cbiAgICAgICAgPEFudE1vZGFsIHZpc2libGU9e2ZhbHNlfSAvPlxuICAgICAgICB7c2hvd0xvZ28gJiZcbiAgICAgICAgICB0aGVtZS5sb2dvICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhlbWUubG9nb30gLz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAge3RoZW1lLmxvZ29UaXRsZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8U3BpblxuICAgICAgICAgIHNwaW5uaW5nPXshIWxvYWRpbmd9XG4gICAgICAgICAgdGlwPXt0eXBlb2YgbG9hZGluZyA9PT0gJ3N0cmluZycgPyBsb2FkaW5nIDogJ0zDpGR0IC4uLid9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAge2xlZnRCdXR0b25zICYmXG4gICAgICAgICAgICAgICAgPFRpdGxlQnV0dG9ucyBsZWZ0PlxuICAgICAgICAgICAgICAgICAge2xlZnRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAge3JpZ2h0QnV0dG9ucyAmJlxuICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7c3VidGl0bGUgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TcGluPlxuICAgICAgICB7bGlua3MgJiZcbiAgICAgICAgICA8Y29tcG9uZW50LkxpbmtzPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvY29tcG9uZW50LkxpbmtzPn1cbiAgICAgICAge2NvcHlyaWdodCAmJlxuICAgICAgICAgIDxjb21wb25lbnQuQ29weXJpZ2h0PlxuICAgICAgICAgICAge2NvcHlyaWdodH1cbiAgICAgICAgICA8L2NvbXBvbmVudC5Db3B5cmlnaHQ+fVxuICAgICAgPC9SZWFjdE1vZGFsPlxuICAgIDwvR2F0ZXdheT5cbiAgKTtcbn07XG5Nb2RhbC5jb250ZXh0VHlwZXMgPSB7IHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0IH07XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHBhZGRpbmcsIHdpZHRoLCBib3R0b21UcmFuc3BhcmVuY3ksIHRvcFRyYW5zcGFyZW5jeSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLmNvbG9yU3RhcnQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmRhcmtlbig2KVxuICAgICAgICAuc3BpbigtNilcbiAgICAgICAgLnNldEFscGhhKGJvdHRvbVRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0sICR7dGhlbWUuY29sb3JFbmQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oNilcbiAgICAgICAgLnNwaW4oMTIpXG4gICAgICAgIC5zZXRBbHBoYSh0b3BUcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9KWAsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gLmFudC1tb2RhbCc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICB3aWR0aDogd2lkdGggfHwgNDgwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2U0LFxuICAgICAgJz4gLmxvZ28nOiB7XG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIG1hcmdpblRvcDogLTE0MCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgJz4gaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogJzc1cHgnLFxuICAgICAgICB9LFxuICAgICAgICAnPiBoMyc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHQxLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJz4gZGl2ID4gZGl2Jzoge1xuICAgICAgICAnPiAuYW50LW1vZGFsLWNvbnRlbnQnOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1jbG9zZSc6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5hbnQtbW9kYWwtYm9keSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmcgfHwgdGhlbWUuc3BhY2UyLFxuICAgICAgICAgICAgJz4gKic6IHtcbiAgICAgICAgICAgICAgbWFyZ2luWTogdGhlbWUuc3BhY2UzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcic6IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWhlYWRlciA+IC5hbnQtbW9kYWwtdGl0bGUnOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWhlYWRlcic6IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgICAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMSxcbiAgICAgICAgICAgICc+IC5hbnQtYnRuJzoge1xuICAgICAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNlMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIE1vZGFsLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG4vLyBDb3B5cmlnaHRcbmNvbXBvbmVudC5Db3B5cmlnaHQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiAxMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJz4gYSc6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2Rpdidcbik7XG5cbmNvbXBvbmVudC5Gb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtjbignYW50LW1vZGFsLWZvb3RlcicsIGNsYXNzTmFtZSl9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+O1xuY29tcG9uZW50LkJ1dHRvbiA9IHByb3BzID0+IDxBbnRCdXR0b24gey4uLnByb3BzfSAvPjtcblxuY29tcG9uZW50LkxpbmtzID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpblRvcDogMjAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAnPiBhJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgcGFkZGluZzogJzAgOXB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgb25Ib3Zlcjoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgICc+IGRpdiA+IGEnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1pbldpZHRoOiAyMDAsXG4gICAgICBwYWRkaW5nOiAnMCA5cHgnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2J1xuKTtcblxuY29uc3QgVGl0bGVCdXR0b25zID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbGVmdCwgcmlnaHQsIHBhZGRpbmcsIHdpZHRoLCBzaG93TG9nbyB9KSA9PiAoe1xuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjFweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogbGVmdCAmJiAxNixcbiAgICByaWdodDogcmlnaHQgJiYgMTYsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgcGFkZGluZzogMTAsXG4gICAgdG9wOiAxNCxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBsZWZ0LCByaWdodCwgLi4ucCB9KSA9PiBwXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
