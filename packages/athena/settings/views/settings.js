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
import { Container, Placeholder, Sidebar, SplitView, List } from 'olymp-ui';
var Settings = (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        var _a = this.props, deviceWidth = _a.deviceWidth, pathname = _a.pathname;
        return (React.createElement(SplitView, { deviceWidth: deviceWidth },
            React.createElement(Sidebar, { title: "Einstellungen" },
                React.createElement(List.Item, { to: { pathname: pathname, query: { '@totp': null } }, label: "Profil" }),
                React.createElement(List.Item, { to: { pathname: pathname, query: { '@totp': null } }, label: "Zwei-Faktor-Authentifizierung" })),
            React.createElement(Container, null,
                React.createElement(Placeholder, null, "Einstellungen")),
            React.createElement(Sidebar, { right: true, title: "rechts", subtitle: "rechts" })));
    };
    return Settings;
}(Component));
export default Settings;
//# sourceMappingURL=settings.js.map