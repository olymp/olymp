import React from 'react';
import { createComponent } from 'react-fela';
import Portal from 'react-portal';
var ModalBackground = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: theme.dark2,
    });
}, 'div', []);
var Modal = createComponent(function (_a) {
    var theme = _a.theme, width = _a.width;
    return ({
        centerX: true,
        width: width || '100%',
        top: theme.space4,
        bottom: theme.space4,
        display: 'flex',
        '> div': {
            marginX: !width && theme.space4,
        },
    });
}, 'div', []);
var Inner = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: '100%',
        backgroundColor: theme.light,
        boxShadow: theme.boxShadow,
        border: "1px solid " + theme.dark1,
        overflowY: 'auto',
        display: 'flex',
        borderRadius: theme.borderRadius,
    });
}, 'div', []);
export default function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose, width = _a.width;
    return (React.createElement(Portal, { isOpened: open, onClose: onClose, closeOnEsc: true, closeOnOutsideClick: true },
        React.createElement(ModalBackground, null,
            React.createElement(Modal, { width: width },
                React.createElement(Inner, null, children)))));
};
//# sourceMappingURL=modal.js.map