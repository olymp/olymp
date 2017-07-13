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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { withRouter } from 'olymp-utils';
import { Prompt } from 'react-router-dom/Prompt';
import { Sidebar, SplitView } from 'olymp-ui';
import { Menu, Button, Form, Icon } from 'antd';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';
import Page from '../page';
var PageSidebar = (function (_super) {
    __extends(PageSidebar, _super);
    function PageSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { tab: 0 };
        _this.componentWillReceiveProps = function (props) {
            if ((props.query['@page'] !== _this.props.query['@page'] ||
                props.query.parent !== _this.props.query.parent) &&
                props.query['@page'] === 'new') {
                _this.setState({ tab: 1 });
            }
            if (props.query['@page'] !== _this.props.query['@page']) {
                _this.props.form.resetFields();
            }
        };
        return _this;
    }
    PageSidebar.prototype.render = function () {
        var _this = this;
        var _a = this.props, form = _a.form, router = _a.router, pathname = _a.pathname, save = _a.save, query = _a.query, binding = _a.binding, bindingId = _a.bindingId, bindingObj = _a.bindingObj, navigation = _a.navigation, flatNavigation = _a.flatNavigation, render = _a.render, deviceWidth = _a.deviceWidth;
        var tab = this.state.tab;
        var item = this.props.item || flatNavigation.find(function (page) { return page.slug === '/'; });
        var value = query['@page'] || item.id;
        if (value === 'new') {
            item = { parentId: query.parent, type: 'PAGE' };
        }
        var title = value === 'new' ? 'Neue Seite' : item.name;
        var description = value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
        var isPage = (form.getFieldValue('type') || item.type || 'PAGE') === 'PAGE';
        var P = form.getFieldDecorator('blocks', {
            initialValue: item.blocks,
        })(React.createElement(Page, { readOnly: !isPage, binding: binding, bindingId: bindingId, bindingObj: bindingObj }));
        return (React.createElement(SplitView, { deviceWidth: deviceWidth, center: true },
            React.createElement(Gateway, { into: "navigation" }, form.isFieldsTouched() && React.createElement(Menu.Item, { key: "save" },
                React.createElement("a", { href: "javascript:;", onClick: save },
                    React.createElement(Button, { type: "primary", style: { margin: '0 -15px' } },
                        React.createElement(Icon, { type: "save" }),
                        " Speichern")))),
            React.createElement(Prompt, { when: form.isFieldsTouched(), message: function () { return 'Änderungen verwerfen?'; } }),
            React.createElement(Sidebar, { isOpen: true, onClose: function () { return router.push(pathname); }, padding: 0, title: title, subtitle: description },
                React.createElement(PageForm, { form: form, item: item, navigation: navigation, items: flatNavigation, tab: "" + tab, onTabClick: function (key) { return _this.setState({ tab: key }); } })),
            render && render(P),
            !render && P));
    };
    PageSidebar = __decorate([
        withRouter,
        queryPage,
        Form.create(),
        mutatePage
    ], PageSidebar);
    return PageSidebar;
}(Component));
export default PageSidebar;
//# sourceMappingURL=editable.js.map