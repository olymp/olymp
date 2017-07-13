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
import { withState } from 'olymp-utils';
import { Container, Placeholder, SplitView } from 'olymp-ui';
import { queryTemplate } from '../gql';
import ListSidebar from './list';
import SelectionSidebar from './selection';
var Templates = (function (_super) {
    __extends(Templates, _super);
    function Templates() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            search: undefined,
        };
        return _this;
    }
    Templates.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, setText = _a.setText, item = _a.item, form = _a.form, deviceWidth = _a.deviceWidth, handleListClick = _a.handleListClick, onClose = _a.onClose;
        var search = this.state.search;
        var text = this.props.text || item.text;
        return (React.createElement(SplitView, { deviceWidth: deviceWidth, background: true },
            React.createElement(ListSidebar, { id: id, onClick: handleListClick, onClose: onClose, search: search, onSearch: function (search) { return _this.setState({ search: search }); } }),
            React.createElement(Container, null,
                React.createElement(Placeholder, null, "Vorschau")),
            React.createElement(SelectionSidebar, { item: item, onCancel: function () { return handleListClick({ id: null }); }, setText: setText })));
    };
    Templates = __decorate([
        withState('text'),
        queryTemplate
    ], Templates);
    return Templates;
}(Component));
export default Templates;
//# sourceMappingURL=templates.js.map