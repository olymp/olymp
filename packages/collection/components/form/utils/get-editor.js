var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Input, Select, Checkbox, InputNumber } from 'antd';
import { ColorEditor, DateEditor, DateRangeEditor, TimeRangeEditor, TimeRangesEditor, TagsEditor, SuggestEditor, } from 'olymp-ui';
import { FormListEdit, DetailEdit } from '../../../edits';
import { SlateMate } from 'olymp-slate';
import { cn } from 'olymp-utils';
import { ImageEdit } from 'olymp-cloudinary';
var states = {
    PUBLISHED: 'Öffentlich',
    DRAFT: 'Entwurf',
    REMOVED: 'Papierkorb',
};
var edits = [
    function (type) { return type.kind === 'OBJECT' && type.name === 'Image' && ImageEdit; },
];
export default function (_a) {
    var className = _a.className, editorClassName = _a.editorClassName, style = _a.style, editorStyle = _a.editorStyle, field = _a.field, label = _a.label, key = _a.key;
    var _b = field['@'], idField = _b.idField, start = _b.start, suggest = _b.suggest;
    var name = field.name;
    var type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
    var editProps = {
        placeholder: label || null,
        style: __assign({}, editorStyle, style),
        className: cn(editorClassName, className),
        key: key,
    };
    for (var i = 0; i < edits.length; i += 1) {
        var Edit = edits[i](type);
        if (Edit) {
            return React.createElement(Edit, __assign({}, editProps));
        }
    }
    if (idField && idField.type) {
        if (idField.type.kind === 'LIST' && idField.type.ofType) {
            return (React.createElement(DetailEdit, __assign({}, editProps, { tags: true, typeName: idField.type.ofType.name })));
        }
        return React.createElement(DetailEdit, __assign({}, editProps, { typeName: idField.type.name }));
    }
    if (type.kind === 'LIST') {
        if (type.ofType.name === 'TimeRange') {
            return React.createElement(TimeRangesEditor, __assign({}, editProps));
        }
        if (type.ofType.name === 'String') {
            if (name === 'tags') {
                return React.createElement(TagsEditor, __assign({}, editProps, { searchPlaceholder: "Suche ..." }));
            }
            return (React.createElement(Select, __assign({}, editProps, { mode: "tags", searchPlaceholder: "Suche ..." })));
        }
        if (type.ofType.name.indexOf('Nested') === 0) {
            return (React.createElement(FormListEdit, __assign({}, editProps, { typeName: type.ofType.name, type: type })));
        }
        return null;
    }
    if (type.kind === 'OBJECT') {
        return null;
    }
    if (suggest) {
        return (React.createElement(SuggestEditor, __assign({}, editProps, { collection: suggest.arg0, field: suggest.arg1 })));
    }
    if (start) {
        if (type.name === 'Date') {
            return React.createElement(DateRangeEditor, __assign({}, editProps, { format: "DD.MM.YYYY" }));
        }
        if (type.name === 'DateTime') {
            return (React.createElement(DateRangeEditor, __assign({}, editProps, { format: "DD.MM.YYYY HH:mm", showTime: { format: 'HH:mm' } })));
        }
    }
    if (type.kind === 'ENUM' && type.enumValues) {
        var resolveName_1 = function (item) { return item; };
        if (type.name === 'DOCUMENT_STATE') {
            resolveName_1 = function (item) { return states[item]; };
        }
        return (React.createElement(Select, __assign({}, editProps), type.enumValues.map(function (x) {
            return (React.createElement(Select.Option, { key: x.name, value: x.name }, resolveName_1(x.name)));
        })));
    }
    switch (type.name) {
        case 'Blocks':
            return (React.createElement(SlateMate, __assign({}, editProps, { placeholder: label || 'Hier Text eingeben!', style: { borderBottom: '1px solid #e9e9e9' } })));
        case 'Boolean':
            return (React.createElement(Checkbox, __assign({}, editProps), label));
        case 'Date':
            return React.createElement(DateEditor, __assign({}, editProps, { format: "DD.MM.YYYY" }));
        case 'DateTime':
            return (React.createElement(DateEditor, __assign({}, editProps, { format: "DD.MM.YYYY HH:mm", showTime: { format: 'HH:mm' } })));
        case 'Color':
            return React.createElement(ColorEditor, __assign({}, editProps));
        case 'Markdown':
            return React.createElement(Input, __assign({}, editProps, { type: "textarea", autosize: true }));
        case 'Slug':
            return React.createElement(Input, __assign({}, editProps));
        case 'Email':
            return React.createElement(Input, __assign({}, editProps));
        case 'PhoneNumber':
            return React.createElement(Input, __assign({}, editProps));
        case 'Website':
            return React.createElement(Input, __assign({}, editProps));
        case 'Int':
            return React.createElement(InputNumber, __assign({}, editProps, { placeholder: label || 0 }));
        case 'TimeRange':
            return React.createElement(TimeRangeEditor, __assign({}, editProps));
        default:
            return React.createElement(Input, __assign({}, editProps));
    }
};
//# sourceMappingURL=get-editor.js.map