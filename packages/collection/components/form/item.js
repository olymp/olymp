var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Form } from 'antd';
import { withAuth } from 'olymp-auth';
import { toLabel } from 'olymp';
import { getEditor, getValidationRules, getInitialValue } from './utils';
var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
var formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
export default withAuth(function (props) {
    var field = props.field, clean = props.clean, itemStyle = props.itemStyle, style = props.style, form = props.form;
    var getFieldValue = form.getFieldValue, getFieldError = form.getFieldError;
    var title = field['@'] && field['@'].label
        ? field['@'].label.arg0
        : toLabel(field.name);
    var label = title.replace('-Ids', '').replace('-Id', '');
    var hint = field['@'] && field['@'].hint && field['@'].hint.arg0
        ? field['@'].hint
        : {};
    var value = getFieldValue(field.name);
    var extra = !value && hint.arg1 ? hint.arg1 : hint.arg0;
    var isBool = field.type.name === 'Boolean';
    var errors = (getFieldError(field.name) || []).concat((getFieldError(field['@'] && field['@'].endField && field['@'].endField.name) || [])).join('\n');
    var editor = getEditor({ field: field });
    if (!editor) {
        return null;
    }
    return (React.createElement(Form.Item, __assign({ label: !clean && label, extra: !isBool && extra, validateStatus: errors ? 'error' : '', help: errors, hasFeedback: true, style: __assign({}, itemStyle, style) }, (field.type.name === 'Blocks' || clean
        ? formItemLayout0
        : formItemLayout)), form.getFieldDecorator(field.name, {
        initialValue: getInitialValue(props, field),
        rules: getValidationRules(field),
        valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
    })(editor)));
});
//# sourceMappingURL=item.js.map