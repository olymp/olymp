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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Form, Button } from 'antd';
import { Prompt } from 'olymp-utils';
import { Sidebar, Panel, onError, onSuccess } from 'olymp-ui';
import { InputEdit } from 'olymp-collection';
import { mutateTemplate } from '../gql';
var SelectionSidebar = (function (_super) {
    __extends(SelectionSidebar, _super);
    function SelectionSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, form = _a.form, item = _a.item, mutate = _a.mutate;
            var id = item.id;
            form.validateFields(function (err, input) {
                if (err) {
                    return onError(err);
                }
                mutate({
                    variables: {
                        id: id,
                        input: input,
                    },
                    updateQueries: !id
                        ? {
                            templateList: function (prev, _a) {
                                var mutationResult = _a.mutationResult;
                                return (__assign({}, prev, { items: prev.items.filter(function (item) { return item.id !== id; }).concat([
                                        mutationResult.data.item,
                                    ]) }));
                            },
                        }
                        : undefined,
                })
                    .then(function (_a) {
                    var item = _a.data.item;
                    onSuccess('Gespeichert', 'Das Template wurde gespeichert');
                    form.resetFields();
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    SelectionSidebar.prototype.render = function () {
        var _a = this.props, item = _a.item, form = _a.form, onCancel = _a.onCancel, setText = _a.setText;
        return (React.createElement(Sidebar, { title: item.name || 'Neu', subtitle: item.id ? 'Template bearbeiten' : 'Template erstellen', footer: React.createElement("div", null,
                React.createElement(Button, { onClick: this.ok, type: "primary" }, "Speichern"),
                React.createElement(Button, { onClick: onCancel, disabled: !item.id }, "Abbrechen")), right: true },
            React.createElement(Prompt, { when: form.isFieldsTouched(), message: function (location) { return 'Änderungen verwerfen?'; } }),
            React.createElement(Tabs, { defaultActiveKey: "1", size: "small" },
                React.createElement(Tabs.TabPane, { tab: "Template", key: "1" },
                    React.createElement(Panel, { paddingX: 16, alignLabel: "left" },
                        React.createElement(InputEdit, { form: form, item: item, field: "name", label: "Name", rules: ['required'], type: "text", size: "large" }))),
                React.createElement(Tabs.TabPane, { tab: "Text", key: "2" }, "Text"))));
    };
    SelectionSidebar = __decorate([
        Form.create(),
        mutateTemplate
    ], SelectionSidebar);
    return SelectionSidebar;
}(Component));
SelectionSidebar.propTypes = {
    item: PropTypes.object,
};
export default SelectionSidebar;
//# sourceMappingURL=selection.js.map