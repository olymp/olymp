import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'olymp-utils';
import { Modal } from 'olymp-ui';
import { notification } from 'antd';
var def = function (_a, _b) {
    var copyright = _a.copyright, showLogo = _a.showLogo, isOpen = _a.isOpen, email = _a.email, children = _a.children, title = _a.title, pathname = _a.pathname, onCancel = _a.onCancel, onOk = _a.onOk, cancelText = _a.cancelText, okText = _a.okText, loading = _a.loading, saving = _a.saving;
    var theme = _b.theme;
    return (React.createElement(Modal, { showLogo: showLogo !== false, isOpen: isOpen, title: title, onCancel: onCancel, maskClosable: false, loading: loading },
        children,
        React.createElement(Modal.Footer, null,
            React.createElement(Modal.Button, { onClick: onCancel }, cancelText || 'Abbruch'),
            onOk &&
                React.createElement(Modal.Button, { type: "primary", onClick: onOk, loading: saving }, okText || title)),
        React.createElement(Modal.Copyright, null,
            React.createElement(Link, { to: { pathname: pathname, query: { register: null, login: undefined } } }, theme.copyright || 'made with ❤ by olymp'))));
};
def.contextTypes = {
    theme: PropTypes.object,
};
export default def;
export var onError = function (err) {
    var description;
    if (err && err.message) {
        description = err.message;
    }
    else if (err && typeof err === 'object') {
        description = Object.keys(err)
            .map(function (key) { return err[key].errors.map(function (e) { return e.message; }).join('\n'); })
            .join('\n');
    }
    notification.error({
        message: 'Fehler',
        description: description,
    });
};
export var onSuccess = function (message, description) {
    notification.success({
        message: message,
        description: description,
    });
};
export var layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export var onEnterFocus = function (ref) { return function (e) {
    if (e.key === 'Enter') {
        return ref() && ref().refs && ref().refs.input.focus();
    }
    return false;
}; };
export var onEnterOk = function (onOk) { return function (e) {
    if (e.key === 'Enter') {
        onOk();
    }
}; };
//# sourceMappingURL=base.js.map