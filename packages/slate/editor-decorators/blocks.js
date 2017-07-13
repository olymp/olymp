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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
var getSidebarTypes = function (blockTypes) {
    return Object.keys(blockTypes)
        .filter(function (key) {
        var block = blockTypes[key];
        return block.slate && block.slate.sidebar !== false;
    })
        .map(function (type) { return (__assign({}, blockTypes[type].slate, { type: type })); });
};
export default function (options) {
    if (options === void 0) { options = {}; }
    var marks = options.marks, nodes = options.nodes;
    var blockTypes = options.blockTypes;
    if (!blockTypes) {
        blockTypes = {};
    }
    return function (Editor) { return _a = (function (_super) {
            __extends(SlateBlocksDecorator, _super);
            function SlateBlocksDecorator() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SlateBlocksDecorator.prototype.render = function () {
                var sidebarTypes = this.props.sidebarTypes;
                var newNodes = __assign({}, (nodes || {}), (this.props.nodes || {}), this.props.blockTypes, blockTypes);
                var newMarks = __assign({}, (marks || {}), (this.props.marks || {}));
                var newSidebarTypes = (sidebarTypes || []).concat(getSidebarTypes(blockTypes), getSidebarTypes(this.props.blockTypes));
                return (React.createElement(Editor, __assign({}, this.props, { nodes: newNodes, marks: newMarks, sidebarTypes: newSidebarTypes })));
            };
            return SlateBlocksDecorator;
        }(Component)),
        _a.propTypes = {
            sidebarTypes: PropTypes.array,
            blockTypes: PropTypes.object,
            marks: PropTypes.object,
            onChange: PropTypes.func,
            nodes: PropTypes.object,
            plugins: PropTypes.array,
        },
        _a.defaultProps = {
            plugins: [],
            blockTypes: {},
        },
        _a; var _a; };
};
//# sourceMappingURL=blocks.js.map