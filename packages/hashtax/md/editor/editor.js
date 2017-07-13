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
import Slate from 'slate/lib/components/editor';
import createSuggestPlugin from './plugin-suggest';
import createTrailingBlock from './plugin-trailing-block';
var SlateEditor = (function (_super) {
    __extends(SlateEditor, _super);
    function SlateEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.plugins = [
            createTrailingBlock({ type: 'paragraph' }),
            createSuggestPlugin({
                trigger: '+',
                groupBy: function (i) { return i.key.split('-')[0]; },
                fetch: _this.fetch
            })
        ];
        return _this;
    }
    SlateEditor.prototype.fetch = function (value) {
        var _this = this;
        if (!this.props.suggestions)
            return Promise.resolve([]);
        return new Promise(function (yay) {
            yay(_this.props.suggestions.filter(function (x) { return x.key.toLowerCase().indexOf(value.toLowerCase()) !== -1; }));
        });
    };
    SlateEditor.prototype.render = function () {
        var value = this.props.state || this.props.value || Plain.deserialize('');
        return (React.createElement(Slate, __assign({ plugins: this.plugins, state: value }, this.props)));
    };
    return SlateEditor;
}(Component));
export default SlateEditor;
//# sourceMappingURL=editor.js.map