import { message } from 'antd';
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
    message.error(description, 30);
};
export var onSuccess = function (text, description) {
    message.success(description || text);
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
//# sourceMappingURL=modal-utils.js.map