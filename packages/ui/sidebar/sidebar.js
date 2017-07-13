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
import { Children } from 'react';
import { createComponent } from 'olymp-fela';
var StyledInner = createComponent(function (_a) {
    var theme = _a.theme, padding = _a.padding, paddingX = _a.paddingX, paddingY = _a.paddingY, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, right = _a.right;
    return ({
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: theme.boxShadow,
        zIndex: 2,
        paddingBottom: 0,
        paddingTop: 0,
        '> .ant-modal-content': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            borderRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.01)',
            boxShadow: 'none',
            '> .ant-modal-close': {
                display: 'none',
            },
            '> .ant-modal-body': {
                '> .ant-tabs > .ant-tabs-bar': {
                    marginBottom: 0,
                },
                flex: '1 1 0%',
                overflowY: 'auto',
                paddingLeft: paddingX,
                paddingRight: paddingX,
                paddingTop: paddingY,
                paddingBottom: paddingY,
                padding: padding,
                position: 'relative',
            },
            '> .ant-modal-header': {
                textAlign: 'center',
                position: 'relative',
                backgroundColor: '#FFF',
                padding: 0,
                border: 0,
                borderBottom: '1px solid #eee',
                '& .ant-modal-title': {
                    paddingX: '2.5rem',
                    ellipsis: true,
                },
            },
            '> .ant-modal-footer': {
                backgroundColor: 'rgba(0, 0, 0, 0.015)',
                border: 0,
                borderTop: '1px solid #eee',
                '> div > .ant-btn': {
                    width: 'calc(50% - 4px)',
                    maxWidth: 200,
                },
            },
        },
    });
}, function (_a) {
    var children = _a.children, className = _a.className;
    return className = { className: className } >
        { children: children }
        < /div>),(__assign({ right: right, padding: padding, paddingX: paddingX, paddingY: paddingY, width: width, minWidth: minWidth, maxWidth: maxWidth }, p));
});
Object.keys(p);
;
var Title = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'relative',
        padding: '1rem',
        '> .ant-modal-title': {
            color: theme.color,
            fontSize: 40,
            fontWeight: 200,
            padding: 10,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var TitleButtons = createComponent(function (_a) {
    var left = _a.left, right = _a.right;
    return ({
        margin: 0,
        lineHeight: '21px',
        position: 'absolute',
        left: left && 0,
        right: right && 0,
        fontSize: 40,
        fontWeight: 200,
        padding: '0 1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        '> *': {
            display: 'flex',
        },
    });
}, 'div', function (_a) {
    var left = _a.left, right = _a.right, p = __rest(_a, ["left", "right"]);
    return Object.keys(p);
});
var Sidebar = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, showLogo = _a.showLogo, leftButtons = _a.leftButtons, rightButtons = _a.rightButtons, className = _a.className, subtitle = _a.subtitle, onClose = _a.onClose, onCancel = _a.onCancel, okText = _a.okText, cancelText = _a.cancelText, onOk = _a.onOk, title = _a.title, loading = _a.loading, header = _a.header, footer = _a.footer, props = __rest(_a, ["children", "isOpen", "showLogo", "leftButtons", "rightButtons", "className", "subtitle", "onClose", "onCancel", "okText", "cancelText", "onOk", "title", "loading", "header", "footer"]);
    return isOpen
        ? __assign({}, props) >
            className :  = "ant-modal-content" >
        { leftButtons:  || rightButtons || title || subtitle || header
                ? className :  = "ant-modal-header" >
                { leftButtons:  || rightButtons || title || subtitle
                        ? { leftButtons:  &&
                                left >
                                    { leftButtons: leftButtons }
                                    < /TitleButtons>} }
                        :
                            { rightButtons:  &&
                                    right >
                                        { rightButtons: rightButtons }
                                        < /TitleButtons>}
                                        < div, className: className } } };
};
{
    subtitle &&
        className;
    "ant-modal-subtitle" >
        { subtitle: subtitle }
        < /div>}
        < /Title>;
    null;
}
{
    header;
}
/div>;
null;
{
    Children.toArray(children).length > 0 &&
        className;
    "ant-modal-body" >
        { children: children }
        < /div>};
    {
        footer
            ? className :  = "ant-modal-footer" >
            { footer: footer }
            < /div>;
        null;
    }
    /div>
        < /StyledInner>;
    (__assign({}, props));
    minWidth = { 80:  } >
        className;
    "ant-modal-content" >
        className;
    "ant-modal-header" >
        onClick;
    {
        (function () { });
    }
     >
        type;
    "double-right" /  >
        /Button>
        < /Button.Group>
        < /div>
        < /div>
        < /StyledInner>;;
    Sidebar.defaultProps = { width: 350, minWidth: 350, padding: 0, isOpen: true };
    export default Sidebar;
}
//# sourceMappingURL=sidebar.js.map