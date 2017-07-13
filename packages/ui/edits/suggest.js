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
import { Select } from 'antd';
import { graphql, gql } from 'olymp-utils';
var SuggestionEditor = (function (_super) {
    __extends(SuggestionEditor, _super);
    function SuggestionEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionEditor.prototype.render = function () {
        var suggestions = this.props.data.suggestions || [];
        return (React.createElement(Select, __assign({}, this.props, { mode: "combobox" }), suggestions.map(function (tag) {
            return React.createElement(Select.Option, { key: tag.id }, tag.id);
        })));
    };
    SuggestionEditor = __decorate([
        graphql((_a = ["\n  query suggestions($collection: String, $field: String) {\n    suggestions(collection: $collection, field: $field) {\n      id\n    }\n  }\n"], _a.raw = ["\n  query suggestions($collection: String, $field: String) {\n    suggestions(collection: $collection, field: $field) {\n      id\n    }\n  }\n"], gql(_a)), {
            options: function (_a) {
                var collection = _a.collection, field = _a.field;
                return ({
                    variables: {
                        collection: collection,
                        field: field,
                    },
                });
            },
        })
    ], SuggestionEditor);
    return SuggestionEditor;
}(Component));
export default SuggestionEditor;
var _a;
//# sourceMappingURL=suggest.js.map