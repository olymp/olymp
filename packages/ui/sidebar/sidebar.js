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
import { createComponent } from 'olymp-fela';
import { Icon, Button } from 'antd';
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
            hasFlex: {
                display: 'flex',
                flexDirection: 'column',
            },
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
                    overflowY: 'visible',
                    paddingX: '2.5rem',
                    paddingBottom: theme.space3,
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
    return React.createElement("div", { className: className }, children);
}, function (_a) {
    var right = _a.right, padding = _a.padding, paddingX = _a.paddingX, paddingY = _a.paddingY, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, p = __rest(_a, ["right", "padding", "paddingX", "paddingY", "width", "minWidth", "maxWidth"]);
    return Object.keys(p);
});
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
            hasFlex: {
                display: 'flex',
            },
        },
    });
}, 'div', function (_a) {
    var left = _a.left, right = _a.right, p = __rest(_a, ["left", "right"]);
    return Object.keys(p);
});
var Sidebar = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, showLogo = _a.showLogo, leftButtons = _a.leftButtons, rightButtons = _a.rightButtons, className = _a.className, subtitle = _a.subtitle, onClose = _a.onClose, onCancel = _a.onCancel, okText = _a.okText, cancelText = _a.cancelText, onOk = _a.onOk, title = _a.title, loading = _a.loading, header = _a.header, footer = _a.footer, props = __rest(_a, ["children", "isOpen", "showLogo", "leftButtons", "rightButtons", "className", "subtitle", "onClose", "onCancel", "okText", "cancelText", "onOk", "title", "loading", "header", "footer"]);
    return isOpen
        ? React.createElement(StyledInner, __assign({}, props),
            React.createElement("div", { className: "ant-modal-content" },
                leftButtons || rightButtons || title || subtitle || header
                    ? React.createElement("div", { className: "ant-modal-header" },
                        leftButtons || rightButtons || title || subtitle
                            ? React.createElement(Title, null,
                                leftButtons &&
                                    React.createElement(TitleButtons, { left: true }, leftButtons),
                                rightButtons &&
                                    React.createElement(TitleButtons, { right: true }, rightButtons),
                                React.createElement("div", { className: "ant-modal-title" }, title),
                                subtitle &&
                                    React.createElement("div", { className: "ant-modal-subtitle" }, subtitle))
                            : null,
                        header)
                    : null,
                Children.toArray(children).length > 0 &&
                    React.createElement("div", { className: "ant-modal-body" }, children),
                footer
                    ? React.createElement("div", { className: "ant-modal-footer" }, footer)
                    : null))
        : React.createElement(StyledInner, __assign({}, props, { minWidth: 80 }),
            React.createElement("div", { className: "ant-modal-content" },
                React.createElement("div", { className: "ant-modal-header" },
                    React.createElement(Button.Group, null,
                        React.createElement(Button, { onClick: function () { } },
                            React.createElement(Icon, { type: "double-right" }))))));
};
Sidebar.defaultProps = { width: 350, minWidth: 350, padding: 0, isOpen: true };
export default Sidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3NpZGViYXIvc2lkZWJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FDakMsVUFBQyxFQVNBO1FBUkMsZ0JBQUssRUFDTCxvQkFBTyxFQUNQLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixnQkFBSyxFQUNMLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixnQkFBSztJQUNELE9BQUEsQ0FBQztRQUNMLEtBQUssT0FBQTtRQUNMLFFBQVEsVUFBQTtRQUNSLFFBQVEsVUFBQTtRQUNSLE1BQU0sRUFBRSxNQUFNO1FBQ2QsZUFBZSxFQUFFLDBCQUEwQjtRQUMzQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsTUFBTSxFQUFFLENBQUM7UUFDVCxhQUFhLEVBQUUsQ0FBQztRQUNoQixVQUFVLEVBQUUsQ0FBQztRQUNiLHNCQUFzQixFQUFFO1lBQ3RCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsTUFBTTtnQkFDZixhQUFhLEVBQUUsUUFBUTthQUN4QjtZQUNELE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLENBQUM7WUFDZixlQUFlLEVBQUUscUJBQXFCO1lBQ3RDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLG9CQUFvQixFQUFFO2dCQUNwQixPQUFPLEVBQUUsTUFBTTthQUNoQjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQiw2QkFBNkIsRUFBRTtvQkFDN0IsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixXQUFXLEVBQUUs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Q0FBQyxLQUFLO3dCQUNYLG9CQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsY0FBTyxDQUFDOzRCQUN2QixvQkFBQyxJQUFJLElBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRyxDQUNyQixDQUNJLENBQ1gsQ0FDRixDQUNNLENBQUE7Q0FBQSxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFFL0UsZUFBZSxPQUFPLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdWkvc2lkZWJhci9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uLCBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgU3R5bGVkSW5uZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgdGhlbWUsXG4gICAgcGFkZGluZyxcbiAgICBwYWRkaW5nWCxcbiAgICBwYWRkaW5nWSxcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICByaWdodCxcbiAgfSkgPT4gKHtcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LFxuICAgIHpJbmRleDogMixcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgaGFzRmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxKScsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICc+IC5hbnQtbW9kYWwtY2xvc2UnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICc+IC5hbnQtdGFicyA+IC5hbnQtdGFicy1iYXInOiB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICB9LFxuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdZLFxuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gYm94U2hhZG93OiAnaW5zZXQgMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWhlYWRlcic6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAnJiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgIG92ZXJmbG93WTogJ3Zpc2libGUnLFxuICAgICAgICAgIHBhZGRpbmdYOiAnMi41cmVtJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjZTMsXG4gICAgICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJz4gLmFudC1tb2RhbC1mb290ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wMTUpJyxcbiAgICAgICAgLy8gYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgJz4gZGl2ID4gLmFudC1idG4nOiB7XG4gICAgICAgICAgd2lkdGg6ICdjYWxjKDUwJSAtIDRweCknLFxuICAgICAgICAgIG1heFdpZHRoOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+LFxuICAoeyByaWdodCwgcGFkZGluZywgcGFkZGluZ1gsIHBhZGRpbmdZLCB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCAuLi5wIH0pID0+XG4gICAgT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFRpdGxlID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICAnPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBUaXRsZUJ1dHRvbnMgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGxlZnQsIHJpZ2h0IH0pID0+ICh7XG4gICAgbWFyZ2luOiAwLFxuICAgIGxpbmVIZWlnaHQ6ICcyMXB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiBsZWZ0ICYmIDAsXG4gICAgcmlnaHQ6IHJpZ2h0ICYmIDAsXG4gICAgZm9udFNpemU6IDQwLFxuICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICBwYWRkaW5nOiAnMCAxcmVtJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICc+IConOiB7XG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gdmVyaGluZGVydCB1bnNjaMO2bmVuIEFic3RhbmRcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBsZWZ0LCByaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGNoaWxkcmVuLFxuICBpc09wZW4sXG4gIHNob3dMb2dvLFxuICBsZWZ0QnV0dG9ucyxcbiAgcmlnaHRCdXR0b25zLFxuICBjbGFzc05hbWUsXG4gIHN1YnRpdGxlLFxuICBvbkNsb3NlLFxuICBvbkNhbmNlbCxcbiAgb2tUZXh0LFxuICBjYW5jZWxUZXh0LFxuICBvbk9rLFxuICB0aXRsZSxcbiAgbG9hZGluZyxcbiAgaGVhZGVyLFxuICBmb290ZXIsXG4gIC4uLnByb3BzLFxufSkgPT5cbiAgaXNPcGVuXG4gICAgPyA8U3R5bGVkSW5uZXIgey4uLnByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIHtsZWZ0QnV0dG9ucyB8fCByaWdodEJ1dHRvbnMgfHwgdGl0bGUgfHwgc3VidGl0bGUgfHwgaGVhZGVyXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyB8fCByaWdodEJ1dHRvbnMgfHwgdGl0bGUgfHwgc3VidGl0bGVcbiAgICAgICAgICAgICAgICAgID8gPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlQnV0dG9ucyBsZWZ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlQnV0dG9ucz59XG4gICAgICAgICAgICAgICAgICAgICAge3JpZ2h0QnV0dG9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlQnV0dG9ucyByaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0QnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJ0aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICB7Q2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICB7Zm9vdGVyXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkSW5uZXI+XG4gICAgOiA8U3R5bGVkSW5uZXIgey4uLnByb3BzfSBtaW5XaWR0aD17ODB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZG91YmxlLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZElubmVyPjtcblNpZGViYXIuZGVmYXVsdFByb3BzID0geyB3aWR0aDogMzUwLCBtaW5XaWR0aDogMzUwLCBwYWRkaW5nOiAwLCBpc09wZW46IHRydWUgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ==
