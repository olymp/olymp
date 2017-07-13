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
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Select } from 'antd';
import Raw from 'slate/lib/serializers/raw';
import GroupBy from 'lodash/groupBy';
import shortID from 'shortid';
var createP = function () { return Raw.deserializeNode({ kind: 'block', type: 'paragraph', nodes: [{ kind: 'text', text: '', ranges: [] }] }); };
export default function (_a) {
    var fetch = _a.fetch, trigger = _a.trigger, onInsert = _a.onInsert, renderItems = _a.renderItems, renderItem = _a.renderItem, groupBy = _a.groupBy;
    if (!trigger)
        trigger = '@';
    if (!fetch)
        fetch = function (value) { return []; };
    if (!renderItem)
        renderItem = function (item) { return React.createElement(Select.Option, { key: item.key }, item.key); };
    var suggest = (function (_super) {
        __extends(suggest, _super);
        function suggest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                data: [],
                value: '',
            };
            _this.handleKeyDown = function (e) {
                var _a = _this.props, state = _a.state, editor = _a.editor, node = _a.node;
                var isBackspaceAndEmpty = e.keyCode === 8 && !_this.state.value;
                var isEsc = e.keyCode === 27;
                var isUndo = e.ctrlKey && e.keyCode == 90;
                var isUndoMac = e.metaKey && e.keyCode == 90;
                if (isBackspaceAndEmpty || isEsc || isUndo || isUndoMac) {
                    editor.props.onChange(state
                        .transform()
                        .removeNodeByKey(node.key)
                        .apply());
                    e.stopPropagation();
                    e.preventDefault();
                }
            };
            _this.handleSelect = function (value, v2) {
                var _a = _this.props, state = _a.state, editor = _a.editor, node = _a.node;
                var item = _this.state.data.find(function (x) { return x.key === value; });
                var key = item.value || item.key;
                if (onInsert && item) {
                    editor.props.onChange(state
                        .transform()
                        .removeNodeByKey(node.key)
                        .call(onInsert, __assign({}, _this.props, { item: item }))
                        .apply());
                }
                else if (item.type) {
                    var fn = item.kind === 'inline' ? 'insertInline' : 'insertBlock';
                    var transform = state.transform().removeNodeByKey(node.key);
                    if (item.isVoid) {
                        transform[fn]({ isVoid: true, type: item.type, data: { key: key, id: shortID.generate() } })
                            .collapseToStartOfNextText();
                    }
                    else if (item.kind === 'inline') {
                        transform
                            .insertText(key)
                            .extend(0 - key.length)
                            .wrapInline({ type: item.type, data: { key: key, id: shortID.generate() } })
                            .collapseToStartOfNextText();
                    }
                    else {
                        transform
                            .insertText('\n')
                            .move(-1)[fn]({ isVoid: false, type: item.type, nodes: [createP()], data: { key: key, id: shortID.generate() } });
                    }
                    editor.props.onChange(transform.focus().apply());
                }
                else if (item) {
                    editor.props.onChange(state
                        .transform()
                        .removeNodeByKey(node.key)
                        .insertText(key)
                        .collapseToStartOfNextText()
                        .focus()
                        .apply());
                }
            };
            _this.handleChange = function (value) {
                var data = fetch(value);
                if (!data || !data.then) {
                    _this.setState({ value: value, data: data });
                }
                else {
                    _this.setState({ value: value });
                    data.then(function (data) {
                        _this.setState({ data: data });
                    });
                }
            };
            return _this;
        }
        suggest.prototype.componentDidMount = function () {
            var input = ReactDOM.findDOMNode(this.refs.select).getElementsByTagName('input')[0];
            input.focus();
            input.addEventListener('keydown', this.handleKeyDown, false);
        };
        suggest.prototype.render = function () {
            var _a = this.props, node = _a.node, mark = _a.mark, attributes = _a.attributes;
            var data = this.state.data;
            var children;
            if (renderItems) {
                children = renderItems(data);
            }
            else if (groupBy) {
                var groups_1 = GroupBy(data, groupBy);
                children = Object.keys(groups_1).map(function (key) { return (React.createElement(Select.OptGroup, { key: key, label: key }, groups_1[key].map(renderItem))); });
            }
            else {
                children = data.map(renderItem);
            }
            return (React.createElement("span", null,
                React.createElement(Select, __assign({}, attributes, { combobox: true, showArrow: true, dropdownMatchSelectWidth: false, defaultActiveFirstOption: true, value: this.state.value, placeholder: "Suche ...", notFoundContent: "", filterOption: false, onChange: this.handleChange, onSelect: this.handleSelect, ref: "select", style: { minWidth: 180, width: 11 * this.state.value.length } }), children)));
        };
        return suggest;
    }(Component));
    return {
        onBeforeInput: function (e, data, state, editor) {
            if (e.data !== trigger)
                return;
            e.preventDefault();
            return state.transform()
                .insertInline({ type: 'suggest', isVoid: true })
                .apply();
        },
        schema: {
            nodes: {
                suggest: suggest,
            },
        },
    };
};
//# sourceMappingURL=plugin-suggest.js.map