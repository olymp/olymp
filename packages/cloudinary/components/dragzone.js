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
import { Upload, Progress as AntProgress } from 'antd';
import { createComponent } from 'olymp-fela';
var Dragger = createComponent(function (_a) {
    var theme = _a.theme, clickable = _a.clickable;
    return ({
        '> .ant-upload': {
            border: 0,
            cursor: clickable ? 'pointer' : 'default',
            height: 'auto',
        },
    });
}, Upload.Dragger, function (_a) {
    var clickable = _a.clickable, p = __rest(_a, ["clickable"]);
    return Object.keys(p);
});
var ProgressWrapper = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'relative',
    });
}, function (_a) {
    var onClick = _a.onClick, children = _a.children, className = _a.className, disabled = _a.disabled, p = __rest(_a, ["onClick", "children", "className", "disabled"]);
    return (React.createElement("div", { className: className, onClick: onClick },
        !disabled && React.createElement(Progress, __assign({}, p)),
        children));
}, function (p) { return Object.keys(p); });
var Progress = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        position: 'absolute',
        zIndex: 1,
        '> .ant-progress': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    });
}, function (_a) {
    var className = _a.className, p = __rest(_a, ["className"]);
    return (React.createElement("div", { className: className },
        React.createElement(AntProgress, __assign({}, p))));
}, function (p) { return Object.keys(p); });
var DragZone = (function (_super) {
    __extends(DragZone, _super);
    function DragZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragZone.prototype.render = function () {
        var _a = this.props, clickable = _a.clickable, uploading = _a.uploading, children = _a.children, rest = __rest(_a, ["clickable", "uploading", "children"]);
        var progress = uploading.reduce(function (a, x) { return a + x.percent * x.size; }, 0);
        var size = uploading.reduce(function (a, x) { return a + x.size; }, 0);
        return (React.createElement(ProgressWrapper, { type: "circle", percent: Math.round(progress / size) || 0, onClick: function (e) { return (clickable ? {} : e.preventDefault()); }, disabled: !uploading.length },
            React.createElement(Dragger, __assign({ clickable: clickable }, rest), children)));
    };
    return DragZone;
}(Component));
DragZone.propTypes = {
    clickable: PropTypes.bool,
    uploading: PropTypes.array,
};
DragZone.defaultProps = {
    clickable: true,
    uploading: [],
};
export default DragZone;
//# sourceMappingURL=dragzone.js.map