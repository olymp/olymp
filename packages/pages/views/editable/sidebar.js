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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { slugify, unflatten } from 'olymp-utils';
import { Panel, SectionH } from 'olymp-ui';
import { createComponent, border } from 'olymp-fela';
import { Input, PageType, State, Parent, TagSelect, JsonInput, InputNumber, TextArea, } from '../../edits';
import Tree from './tree';
var PageForm = (function (_super) {
    __extends(PageForm, _super);
    function PageForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleNameChange = function (e) {
            var form = _this.props.form;
            var value = e.target.value;
            form.setFieldsValue({ slug: "/" + slugify(value, true) });
        };
        _this.handleTypeChange = function (e) {
            var form = _this.props.form;
            if (e === 'MENU') {
                form.setFieldsValue({ parentId: null });
            }
        };
        return _this;
    }
    PageForm.prototype.render = function () {
        var _a = this.props, form = _a.form, item = _a.item, items = _a.items, navigation = _a.navigation, tab = _a.tab, onTabClick = _a.onTabClick;
        var tree = unflatten(items.map(function (_a) {
            var id = _a.id, name = _a.name, parentId = _a.parentId;
            return ({
                value: id,
                label: name,
                parent: parentId,
                children: [],
            });
        }), { id: 'value', parentId: 'parent' });
        return (React.createElement(Tabs, { activeKey: tab, onTabClick: onTabClick, size: "small", tabBarStyle: { marginBottom: 0 } },
            React.createElement(TabPane, { tab: "Navigation", key: "0" },
                React.createElement(Panel, null,
                    React.createElement(Tree, { items: navigation, selected: [item.id || item.pathname] }))),
            React.createElement(TabPane, { tab: "Seite", key: "1" },
                React.createElement(Panel, { padding: 16, alignLabel: "left" },
                    React.createElement(Input, { form: form, item: item, field: "name", label: "Name", onChange: this.handleNameChange, rules: ['required'], type: "text", size: "large" }),
                    React.createElement(Input, { form: form, item: item, field: "slug", label: "Slug", type: "text", size: "large" }),
                    React.createElement(TextArea, { form: form, item: item, field: "description", label: "Beschreibung", type: "text", size: "large" }),
                    React.createElement(State, { form: form, item: item, field: "state", label: "Status", rules: ['required'] }),
                    React.createElement(PageType, { form: form, item: item, field: "type", label: "Art", size: "large", onChange: this.handleTypeChange }),
                    (form.getFieldValue('type') || item.type) !== 'MENU' &&
                        React.createElement(Parent, { form: form, treeData: tree, item: item, field: "parentId", label: "Menü", placeholder: "Übergeordnetes Menü", size: "large" }),
                    (form.getFieldValue('type') || item.type) === 'LINK' &&
                        React.createElement(Input, { form: form, item: item, field: "href", label: "Ext. Link", type: "text", size: "large" }),
                    (form.getFieldValue('type') || item.type) === 'ALIAS' &&
                        React.createElement(Parent, { form: form, treeData: tree, item: item, field: "aliasId", label: "Alias", placeholder: "Alias zu..", size: "large" }),
                    React.createElement(SectionH, { title: "Erweitert", description: "Datenanbindung, Sortierung Unterseiten" }),
                    React.createElement(Input, { form: form, item: item, field: "binding.type", placeholder: "typ", label: "Bindungstyp", type: "text", size: "large" }),
                    React.createElement(TagSelect, { form: form, item: item, options: ['id', 'name', 'slug'], field: "binding.fields", placeholder: "+name, -id", label: "Felder", size: "large" }),
                    React.createElement(JsonInput, { form: form, item: item, field: "binding.query", label: "Filter", size: "large" }),
                    React.createElement(TagSelect, { form: form, item: item, options: ['+name', '-name'], field: "sorting", placeholder: "+name, -id", label: "Sortieren", size: "large" }),
                    React.createElement(InputNumber, { form: form, item: item, field: "order", label: "Reihenfolge", size: "large" }))),
            React.createElement(TabPane, { tab: "Collection", key: "2" },
                React.createElement(Panel, { paddingX: 16 }, "Hier kommt bei Bindings quasi der Parent rein"))));
    };
    return PageForm;
}(Component));
PageForm.propTypes = {
    item: PropTypes.object,
    form: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.object),
    navigation: PropTypes.arrayOf(PropTypes.object),
    tab: PropTypes.string,
    onTabClick: PropTypes.func,
};
PageForm.defaultProps = {
    item: {},
    items: [],
    navigation: [],
    tab: '0',
    onTabClick: function (key) { return console.log(key); },
};
export default PageForm;
var TabPane = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.light,
        borderBottom: border(theme),
    });
}, Tabs.TabPane, function (p) { return Object.keys(p); });
//# sourceMappingURL=sidebar.js.map