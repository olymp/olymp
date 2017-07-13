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
var _this = this;
import { Component } from 'react';
import { Prompt, withRouter } from 'olymp-utils';
import { Sidebar } from 'olymp-ui';
import { Form } from 'antd';
import { queryPage, mutatePage } from '../../gql';
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
        _this.binding = { binding: binding };
        _this.bindingId = { bindingId: bindingId };
        _this.bindingObj = { bindingObj: bindingObj }
            /  >
        ;
        return _this;
    }
    PageSidebar.prototype.render = function () {
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
        })(readOnly, {}, isPage);
    };
    ;
    PageSidebar = __decorate([
        withRouter,
        queryPage,
        Form.create(),
        mutatePage
    ], PageSidebar);
    return PageSidebar;
}(Component));
export default PageSidebar;
deviceWidth;
{
    deviceWidth;
}
center >
    into;
"navigation" >
    { form: .isFieldsTouched() && key, "save":  >
            href, "javascript:;": onClick = { save: save } >
            type, "primary": style = {} };
{
    margin: '0 -15px';
}
 >
    type;
"save" /  > Speichern
    < /Button>
    < /a>
    < /Menu.Item>}
    < /Gateway>
    < Prompt;
when = { form: .isFieldsTouched() };
message = {}();
'Änderungen verwerfen?';
/>
    < Sidebar;
isOpen;
onClose = {}();
router.push(pathname);
padding = { 0:  };
title = { title: title };
subtitle = { description: description }
    >
        form;
{
    form;
}
item = { item: item };
navigation = { navigation: navigation };
items = { flatNavigation: flatNavigation };
tab = (_a = ["", ""], _a.raw = ["", ""], {}(_a, tab));
onTabClick = { key: function () { return _this.setState({ tab: key }); } }
    /  >
    /Sidebar>;
{
    render && render(P);
}
{
    !render && P;
}
/SplitView>;
;
var _a;
//# sourceMappingURL=editable.js.map