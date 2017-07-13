var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import { Form, Input, Checkbox, Popconfirm } from 'antd';
import moment from 'moment';
import { Crop } from '../components';
import { LightboxImage } from '../lightbox';
import { createComponent, ContentLoader } from 'olymp-fela';
var DangerCheckbox = createComponent(function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return ({
        color: checked ? 'red' : 'rgba(0, 0, 0, .65)',
    });
}, Checkbox, function (p) { return Object.keys(p); });
var FormItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { marginBottom: 5 },
};
var FormForAllLayout = {
    wrapperCol: { span: 16, offset: 8 },
    style: { marginBottom: 5 },
};
var FormForFullLayout = {
    wrapperCol: { span: 24, offset: 0 },
    style: { marginBottom: 5 },
};
var MediaDetail = (function (_super) {
    __extends(MediaDetail, _super);
    function MediaDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaDetail.prototype.render = function () {
        var _a = this.props, item = _a.item, patchItem = _a.patchItem, patchItems = _a.patchItems, multi = _a.multi, source = _a.source, tags = _a.tags, editable = _a.editable, rest = __rest(_a, ["item", "patchItem", "patchItems", "multi", "source", "tags", "editable"]);
        return (React.createElement(ContentLoader, { isLoading: !item },
            React.createElement(Form, null,
                React.createElement(Form.Item, __assign({ key: "crop" }, FormForFullLayout), !editable
                    ? React.createElement(Crop, { value: item, onChange: function (crop) { return patchItem({ crop: crop }); } })
                    : React.createElement(LightboxImage, { value: item, width: "100%" })),
                React.createElement(Form.Item, __assign({ key: "id", label: "ID" }, FormItemLayout),
                    React.createElement(Input, { value: item.id, disabled: true, placeholder: "ID" })),
                React.createElement(Form.Item, __assign({ key: "caption", label: "Bezeichnung" }, FormItemLayout),
                    React.createElement(Input, { value: item.caption, onChange: function (event) { return patchItem({ caption: event.target.value }); }, disabled: !editable, placeholder: "Bezeichnung" })),
                React.createElement(Form.Item, __assign({ key: "source", label: "Quelle" }, FormItemLayout),
                    React.createElement(Input, { value: item.source, onChange: function (event) { return patchItem({ source: event.target.value }); }, placeholder: "Quelle", disabled: (source && multi) || !editable })),
                multi && editable
                    ? React.createElement(Form.Item, __assign({ key: "sourceForAll" }, FormForAllLayout), !source
                        ? React.createElement(Popconfirm, { title: "'Quelle' für alle ausgewählten Medien überschreiben?", onConfirm: function () { return patchItems('source', item.source); }, okText: "Ja", cancelText: "Abbrechen" },
                            React.createElement(Checkbox, { checked: source }, "F\u00FCr alle Ausgew\u00E4hlten"))
                        : React.createElement(Checkbox, { checked: source, onChange: function () { return patchItems('source', item.source); } }, "F\u00FCr alle Ausgew\u00E4hlten"))
                    : null,
                React.createElement(Form.Item, __assign({ key: "tags", label: "Schlagworte" }, FormItemLayout),
                    React.createElement(TagsEditor, __assign({}, rest, { value: item.tags || [], onChange: function (val) { return patchItem({ tags: val }); }, disabled: (tags && multi) || !editable, searchPlaceholder: "Suche ...", placeholder: "Schlagworte", style: { width: '100%' } }))),
                multi && editable
                    ? React.createElement(Form.Item, __assign({ key: "tagsForAll" }, FormForAllLayout), !tags
                        ? React.createElement(Popconfirm, { title: "'Schlagworte' für alle ausgewählten Medien überschreiben?", onConfirm: function () { return patchItems('tags', item.tags); }, okText: "Ja", cancelText: "Abbrechen" },
                            React.createElement(Checkbox, { checked: tags }, "F\u00FCr alle Ausgew\u00E4hlten"))
                        : React.createElement(Checkbox, { checked: tags, onChange: function () { return patchItems('tags', item.tags); } }, "F\u00FCr alle Ausgew\u00E4hlte"))
                    : null,
                React.createElement(Form.Item, __assign({ key: "size", label: "Größe" }, FormItemLayout),
                    React.createElement(Input, { disabled: true, placeholder: "Größe", value: item.width + "x" + item.height })),
                React.createElement(Form.Item, __assign({ key: "date", label: "Hinzugefügt" }, FormItemLayout),
                    React.createElement(Input, { disabled: true, placeholder: "Hinzugefügt", value: moment(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss') + " Uhr" })),
                React.createElement(Form.Item, __assign({ key: "format", label: "Format" }, FormItemLayout),
                    React.createElement(Input, { disabled: true, placeholder: "Format", value: item.format })),
                item.format === 'pdf'
                    ? React.createElement(Form.Item, __assign({ key: "pages", label: "Seiten" }, FormItemLayout),
                        React.createElement(Input, { disabled: true, placeholder: "Seiten", value: item.pages }))
                    : undefined,
                React.createElement(Form.Item, __assign({ key: "bytes", label: "Dateigröße" }, FormItemLayout),
                    React.createElement(Input, { disabled: true, placeholder: "Dateigröße", value: item.bytes / 1000 + " kB" })),
                !multi && editable
                    ? React.createElement(Form.Item, __assign({ key: "delete", label: "Löschen" }, FormItemLayout), !item.removed
                        ? React.createElement(Popconfirm, { title: "Datei wirklich löschen?", onConfirm: function () { return patchItem({ removed: true }); }, okText: "Löschen", cancelText: "Abbrechen" },
                            React.createElement(DangerCheckbox, { checked: false }, "Datei wird nicht gel\u00F6scht"))
                        : React.createElement(DangerCheckbox, { onChange: function () { return patchItem({ removed: null }); }, checked: true }, "Datei wird gel\u00F6scht"))
                    : null,
                multi && editable
                    ? React.createElement(Form.Item, __assign({ key: "deleteAll", label: "Alle löschen" }, FormItemLayout), !item.removed
                        ? React.createElement(Popconfirm, { title: "Alle ausgewählten Dateien wirklich löschen?", onConfirm: function () { return patchItems('removed', true); }, okText: "Alle löschen", cancelText: "Abbrechen" },
                            React.createElement(DangerCheckbox, { checked: false }, "Dateien werden nicht gel\u00F6scht"))
                        : React.createElement(DangerCheckbox, { onChange: function () { return patchItems('removed', null); }, checked: true }, "Dateien werden gel\u00F6scht"))
                    : null)));
    };
    MediaDetail = __decorate([
        Form.create()
    ], MediaDetail);
    return MediaDetail;
}(Component));
MediaDetail.propTypes = {
    item: PropTypes.object,
    patchItem: PropTypes.func,
    patchItems: PropTypes.func,
    multi: PropTypes.bool,
    source: PropTypes.bool,
    tags: PropTypes.bool,
    editable: PropTypes.bool,
};
MediaDetail.defaultProps = {
    patchItem: function () { },
    patchItems: function () { },
    multi: false,
    source: false,
    tags: false,
    editable: true,
};
export default MediaDetail;
//# sourceMappingURL=detail.js.map