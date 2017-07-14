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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3NpZGViYXIvc2lkZWJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FDakMsVUFBQyxFQVNBO1FBUkMsZ0JBQUssRUFDTCxvQkFBTyxFQUNQLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixnQkFBSyxFQUNMLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixnQkFBSztJQUNELE9BQUEsQ0FBQztRQUNMLEtBQUssT0FBQTtRQUNMLFFBQVEsVUFBQTtRQUNSLFFBQVEsVUFBQTtRQUNSLE1BQU0sRUFBRSxNQUFNO1FBQ2QsZUFBZSxFQUFFLDBCQUEwQjtRQUMzQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsTUFBTSxFQUFFLENBQUM7UUFDVCxhQUFhLEVBQUUsQ0FBQztRQUNoQixVQUFVLEVBQUUsQ0FBQztRQUNiLHNCQUFzQixFQUFFO1lBQ3RCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsTUFBTTtnQkFDZixhQUFhLEVBQUUsUUFBUTthQUN4QjtZQUNELE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLENBQUM7WUFDZixlQUFlLEVBQUUscUJBQXFCO1lBQ3RDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLG9CQUFvQixFQUFFO2dCQUNwQixPQUFPLEVBQUUsTUFBTTthQUNoQjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQiw2QkFBNkIsRUFBRTtvQkFDN0IsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixXQUFXLEVBQUUsUUFBUTtnQkFDckIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixhQUFhLEVBQUUsUUFBUTtnQkFDdkIsT0FBTyxTQUFBO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2FBRXJCO1lBQ0QscUJBQXFCLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2dCQUVWLE1BQU0sRUFBRSxDQUFDO2dCQUNULFlBQVksRUFBRSxnQkFBZ0I7Z0JBQzlCLG9CQUFvQixFQUFFO29CQUNwQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNELHFCQUFxQixFQUFFO2dCQUNyQixlQUFlLEVBQUUsc0JBQXNCO2dCQUV2QyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixrQkFBa0IsRUFBRTtvQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsUUFBUSxFQUFFLEdBQUc7aUJBQ2Q7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQTVESSxDQTRESixFQUNGLFVBQUMsRUFBdUI7UUFBckIsc0JBQVEsRUFBRSx3QkFBUztJQUNwQixPQUFBLDZCQUFLLFNBQVMsRUFBRSxTQUFTLElBQ3RCLFFBQVEsQ0FDTDtBQUZOLENBRU0sRUFDUixVQUFDLEVBQXVFO0lBQXJFLElBQUEsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLHNCQUFRLEVBQUUsc0JBQVEsRUFBRSxnQkFBSyxFQUFFLHNCQUFRLEVBQUUsc0JBQVEsRUFBRSw2RkFBSTtJQUNwRSxNQUFNLENBQU4sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUFBLENBQ2pCLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRyxlQUFlLENBQzNCLFVBQUMsRUFBUztRQUFQLGdCQUFLO0lBQU8sT0FBQSxDQUFDO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRixDQUFDO0FBVGEsQ0FTYixFQUNGLEtBQUssRUFDTCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUNsQyxVQUFDLEVBQWU7UUFBYixjQUFJLEVBQUUsZ0JBQUs7SUFBTyxPQUFBLENBQUM7UUFDcEIsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUM7UUFDZixLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUM7UUFDakIsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLE1BQU07YUFDaEI7U0FDRjtLQUNGLENBQUM7QUFoQm1CLENBZ0JuQixFQUNGLEtBQUssRUFDTCxVQUFDLEVBQXFCO0lBQW5CLElBQUEsY0FBSSxFQUFFLGdCQUFLLEVBQUUsaUNBQUk7SUFBTyxNQUFNLENBQU4sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUFBLENBQzFDLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxVQUFDLEVBa0JoQjtJQWpCQyxJQUFBLHNCQUFRLEVBQ1Isa0JBQU0sRUFDTixzQkFBUSxFQUNSLDRCQUFXLEVBQ1gsOEJBQVksRUFDWix3QkFBUyxFQUNULHNCQUFRLEVBQ1Isb0JBQU8sRUFDUCxzQkFBUSxFQUNSLGtCQUFNLEVBQ04sMEJBQVUsRUFDVixjQUFJLEVBQ0osZ0JBQUssRUFDTCxvQkFBTyxFQUNQLGtCQUFNLEVBQ04sa0JBQU0sRUFDTiw2TUFBUTtJQUVSLE1BQU0sQ0FBTixNQUFNO1VBQ0Ysb0JBQUMsV0FBVyxlQUFLLEtBQUs7WUFDcEIsNkJBQUssU0FBUyxFQUFDLG1CQUFtQjtnQkFDL0IsV0FBVyxJQUFJLFlBQVksSUFBSSxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU07c0JBQ3ZELDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7d0JBQzlCLFdBQVcsSUFBSSxZQUFZLElBQUksS0FBSyxJQUFJLFFBQVE7OEJBQzdDLG9CQUFDLEtBQUs7Z0NBQ0gsV0FBVztvQ0FDVixvQkFBQyxZQUFZLElBQUMsSUFBSSxVQUNmLFdBQVcsQ0FDQztnQ0FDaEIsWUFBWTtvQ0FDWCxvQkFBQyxZQUFZLElBQUMsS0FBSyxVQUNoQixZQUFZLENBQ0E7Z0NBQ2pCLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFDN0IsS0FBSyxDQUNGO2dDQUNMLFFBQVE7b0NBQ1AsNkJBQUssU0FBUyxFQUFDLG9CQUFvQixJQUNoQyxRQUFRLENBQ0wsQ0FDRjs4QkFDUixJQUFJO3dCQUVQLE1BQU0sQ0FDSDtzQkFDTixJQUFJO2dCQUVQLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ3BDLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0IsSUFDNUIsUUFBUSxDQUNMO2dCQUVQLE1BQU07c0JBQ0gsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixJQUM5QixNQUFNLENBQ0g7c0JBQ04sSUFBSSxDQUNKLENBQ007VUFDZCxvQkFBQyxXQUFXLGVBQUssS0FBSyxJQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7Z0JBQ2hDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7b0JBQy9CLG9CQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUNYLG9CQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsY0FBTyxDQUFDOzRCQUN2QixvQkFBQyxJQUFJLElBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRyxDQUNyQixDQUNJLENBQ1gsQ0FDRixDQUNNLENBQUE7Q0FBQSxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFFL0UsZUFBZSxPQUFPLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdWkvc2lkZWJhci9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uLCBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgU3R5bGVkSW5uZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgdGhlbWUsXG4gICAgcGFkZGluZyxcbiAgICBwYWRkaW5nWCxcbiAgICBwYWRkaW5nWSxcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICByaWdodCxcbiAgfSkgPT4gKHtcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LFxuICAgIHpJbmRleDogMixcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgaGFzRmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxKScsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICc+IC5hbnQtbW9kYWwtY2xvc2UnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICc+IC5hbnQtdGFicyA+IC5hbnQtdGFicy1iYXInOiB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICB9LFxuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdZLFxuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gYm94U2hhZG93OiAnaW5zZXQgMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWhlYWRlcic6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAnJiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgIHBhZGRpbmdYOiAnMi41cmVtJyxcbiAgICAgICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxNSknLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAnPiBkaXYgPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICB3aWR0aDogJ2NhbGMoNTAlIC0gNHB4KScsXG4gICAgICAgICAgbWF4V2lkdGg6IDIwMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj4sXG4gICh7IHJpZ2h0LCBwYWRkaW5nLCBwYWRkaW5nWCwgcGFkZGluZ1ksIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIC4uLnAgfSkgPT5cbiAgICBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgVGl0bGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogJzFyZW0nLFxuICAgICc+IC5hbnQtbW9kYWwtdGl0bGUnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgbGVmdCwgcmlnaHQgfSkgPT4gKHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGluZUhlaWdodDogJzIxcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IGxlZnQgJiYgMCxcbiAgICByaWdodDogcmlnaHQgJiYgMCxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgZm9udFdlaWdodDogMjAwLFxuICAgIHBhZGRpbmc6ICcwIDFyZW0nLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgJz4gKic6IHtcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCAvLyB2ZXJoaW5kZXJ0IHVuc2Now7ZuZW4gQWJzdGFuZFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGxlZnQsIHJpZ2h0LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBTaWRlYmFyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzT3BlbixcbiAgc2hvd0xvZ28sXG4gIGxlZnRCdXR0b25zLFxuICByaWdodEJ1dHRvbnMsXG4gIGNsYXNzTmFtZSxcbiAgc3VidGl0bGUsXG4gIG9uQ2xvc2UsXG4gIG9uQ2FuY2VsLFxuICBva1RleHQsXG4gIGNhbmNlbFRleHQsXG4gIG9uT2ssXG4gIHRpdGxlLFxuICBsb2FkaW5nLFxuICBoZWFkZXIsXG4gIGZvb3RlcixcbiAgLi4ucHJvcHMsXG59KSA9PlxuICBpc09wZW5cbiAgICA/IDxTdHlsZWRJbm5lciB7Li4ucHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAge2xlZnRCdXR0b25zIHx8IHJpZ2h0QnV0dG9ucyB8fCB0aXRsZSB8fCBzdWJ0aXRsZSB8fCBoZWFkZXJcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2xlZnRCdXR0b25zIHx8IHJpZ2h0QnV0dG9ucyB8fCB0aXRsZSB8fCBzdWJ0aXRsZVxuICAgICAgICAgICAgICAgICAgPyA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAge2xlZnRCdXR0b25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVCdXR0b25zIGxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVCdXR0b25zIHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZUJ1dHRvbnM+fVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgIHtDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgIHtmb290ZXJcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRJbm5lcj5cbiAgICA6IDxTdHlsZWRJbm5lciB7Li4ucHJvcHN9IG1pbldpZHRoPXs4MH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJkb3VibGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkSW5uZXI+O1xuU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAzNTAsIG1pbldpZHRoOiAzNTAsIHBhZGRpbmc6IDAsIGlzT3BlbjogdHJ1ZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19
