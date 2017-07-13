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
import ReactFilestack from 'react-filestack';
import { mutateFile } from './gql';
var PageSidebar = (function (_super) {
    __extends(PageSidebar, _super);
    function PageSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSuccess = function (_a) {
            var filesFailed = _a.filesFailed, filesUploaded = _a.filesUploaded;
            var save = _this.props.save;
            filesUploaded.forEach(function (item) {
                if (item.status === 'Stored') {
                    return save(item);
                }
                return false;
            });
        };
        _this.onError = function (error) {
            console.log(error);
        };
        return _this;
    }
    PageSidebar.prototype.render = function () {
        var className = this.props.className;
        return (React.createElement(ReactFilestack, { apikey: process.env.FILESTACK_KEY, onSuccess: this.onSuccess, onError: this.onError, options: {
                lang: 'de',
            }, render: function (_a) {
                var onPick = _a.onPick;
                return (React.createElement("div", { className: className },
                    React.createElement("strong", null, "Find an avatar"),
                    React.createElement("button", { onClick: onPick }, "Pick")));
            } }));
    };
    PageSidebar = __decorate([
        mutateFile
    ], PageSidebar);
    return PageSidebar;
}(Component));
export default PageSidebar;
//# sourceMappingURL=picker.js.map