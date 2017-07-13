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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Gateway } from 'react-gateway';
import { Button } from 'antd';
import { Editor, Html, Plain } from 'slate';
import { withSlateState, withAutoMarkdown, useBlocks, } from './editor-decorators';
import { withBlockTypes } from './decorators';
import { getId } from './utils/get-text';
import './style.less';
import TrailingBlock from 'slate-trailing-block';
import InsertBlockOnEnter from 'slate-insert-block-on-enter';
import ToolbarBlock from './toolbar-block';
import ToolbarText from './toolbar-text';
import ToolbarVoid from './toolbar-void';
import { FaAlignCenter, FaCode, FaListUl, FaListOl, FaIndent, FaHeading, FaLink, FaBold, FaItalic, FaUnderline, } from 'olymp-icons';
import I from './icon';
var getIdByTag = function (children) {
    var id = getId(Children.map(children, function (x) { return x.props.node; }));
    return "" + id;
};
var options = {
    defaultNode: 'paragraph',
    toolbarMarks: [
        { type: 'bold', label: React.createElement(I, { icon: FaBold }) },
        { type: 'italic', label: React.createElement(I, { icon: FaItalic }) },
        { type: 'underlined', label: React.createElement(I, { icon: FaUnderline }) },
        { type: 'center', label: React.createElement(I, { icon: FaAlignCenter }) },
        { type: 'code', label: React.createElement(I, { icon: FaCode }) },
    ],
    toolbarTypes: [
        {
            type: [
                'heading-one',
                'heading-two',
                'heading-three',
                'heading-four',
                'heading-five',
                'heading-six',
            ],
            label: React.createElement(I, { icon: FaHeading }),
            description: [
                'Überschrift 1',
                'Überschrift 2',
                'Überschrift 3',
                'Überschrift 4',
                'Überschrift 5',
                'Überschrift 6',
            ],
        },
        { type: 'block-quote', label: React.createElement(I, { icon: FaIndent }) },
        { type: 'numbered-list', label: React.createElement(I, { icon: FaListUl }) },
        { type: 'bulleted-list', label: React.createElement(I, { icon: FaListOl }) },
    ],
    toolbarActions: [
        {
            type: 'link',
            label: React.createElement(I, { icon: FaLink }),
            description: 'Link',
            onClick: function (_a, isActive) {
                var state = _a.state, onChange = _a.onChange;
                if (isActive) {
                    onChange(state.transform().unwrapInline('link').apply());
                }
                else {
                    var href = window.prompt('URL');
                    if (href) {
                        if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) {
                            href = "http://" + href;
                        }
                        onChange(state
                            .transform()
                            .wrapInline({
                            type: 'link',
                            data: { href: href, target: '_blank' },
                        })
                            .collapseToEnd()
                            .apply());
                    }
                }
            },
            isActive: function (_a) {
                var state = _a.state;
                return state && state.inlines.some(function (inline) { return inline.type === 'link'; });
            },
        },
    ],
    sidebarTypes: [],
    nodes: {
        paragraph: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("p", __assign({}, attributes), children);
        },
        link: function (_a) {
            var node = _a.node, attributes = _a.attributes, children = _a.children;
            return (React.createElement("a", __assign({}, attributes, { href: node.data.get('href'), target: node.data.get('target'), rel: "noopener noreferrer" }), children));
        },
        'block-quote': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("blockquote", __assign({}, attributes), children);
        },
        'bulleted-list': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("ul", __assign({}, attributes), children);
        },
        'numbered-list': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("ol", __assign({}, attributes), children);
        },
        'heading-one': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h1", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'heading-two': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h2", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'heading-three': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h3", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'heading-four': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h4", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'heading-five': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h5", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'heading-six': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("h6", __assign({}, attributes, { id: getIdByTag(children) }), children);
        },
        'bulleted-list-item': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("li", __assign({}, attributes), children);
        },
        'numbered-list-item': function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("li", __assign({}, attributes), children);
        },
    },
    marks: {
        bold: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("strong", __assign({}, attributes), children);
        },
        code: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("code", __assign({}, attributes), children);
        },
        italic: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("em", __assign({}, attributes), children);
        },
        underlined: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("u", __assign({}, attributes), children);
        },
        center: function (_a) {
            var children = _a.children, attributes = _a.attributes;
            return React.createElement("center", __assign({}, attributes), children);
        },
    },
    getMarkdownType: function (chars) {
        switch (chars) {
            case '*':
            case '-':
            case '+':
                return 'bulleted-list-item';
            case '>':
                return 'block-quote';
            case '#':
                return 'heading-one';
            case '##':
                return 'heading-two';
            case '###':
                return 'heading-three';
            case '####':
                return 'heading-four';
            case '#####':
                return 'heading-five';
            case '######':
                return 'heading-six';
            case '1.':
                return 'numbered-list-item';
            default:
                return null;
        }
    },
};
var serializer = new Html({
    rules: [
        {
            deserialize: function (el, next) {
                var types = {
                    p: 'paragraph',
                    li: 'list-item',
                    ul: 'bulleted-list',
                    ol: 'numbered-list',
                    blockquote: 'quote',
                    pre: 'code',
                    h1: 'heading-one',
                    h2: 'heading-two',
                    h3: 'heading-three',
                    h4: 'heading-four',
                    h5: 'heading-five',
                    h6: 'heading-six',
                };
                var block = types[el.tagName];
                if (!block) {
                    return undefined;
                }
                return {
                    kind: 'block',
                    type: block,
                    nodes: next(el.children),
                };
            },
        },
        {
            deserialize: function (el, next) {
                var marks = {
                    strong: 'bold',
                    em: 'italic',
                    u: 'underline',
                    s: 'strikethrough',
                    code: 'code',
                    left: 'left',
                    center: 'center',
                    right: 'right',
                    justify: 'justify',
                };
                var mark = marks[el.tagName];
                if (!mark) {
                    return undefined;
                }
                return {
                    kind: 'mark',
                    type: mark,
                    nodes: next(el.children),
                };
            },
        },
        {
            deserialize: function (el, next) {
                if (el.tagName !== 'pre') {
                    return undefined;
                }
                var code = el.children[0];
                var children = code && code.tagName === 'code'
                    ? code.children
                    : el.children;
                return {
                    kind: 'block',
                    type: 'code',
                    nodes: next(children),
                };
            },
        },
        {
            deserialize: function (el, next) {
                if (el.tagName !== 'a') {
                    return undefined;
                }
                return {
                    kind: 'inline',
                    type: 'link',
                    nodes: next(el.children),
                    data: {
                        href: el.attribs.href,
                    },
                };
            },
        },
    ],
});
export var htmlSerializer = serializer;
var getTopMost = function (blockTypes, state, prev) {
    var next = prev ? state.document.getParent(prev.key) : state.startBlock;
    var nextType = next && next.type;
    var prevType = prev && prev.type;
    var isAtomic = nextType &&
        blockTypes[nextType] &&
        blockTypes[nextType].slate &&
        blockTypes[nextType].slate.isAtomic;
    if (!nextType ||
        !isAtomic ||
        (prevType && prevType.indexOf(nextType) !== 0)) {
        return prev;
    }
    return getTopMost(blockTypes, state, next);
};
function CleanWordHTML(str) {
    var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
    var output = str.replace(stringStripper, ' ');
    var commentSripper = new RegExp('<!--(.*?)-->', 'g');
    var output = output.replace(commentSripper, '');
    var tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
    output = output.replace(tagStripper, '');
    var badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];
    for (var i = 0; i < badTags.length; i++) {
        tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>', 'gi');
        output = output.replace(tagStripper, '');
    }
    var badAttributes = ['style', 'start'];
    for (var i = 0; i < badAttributes.length; i++) {
        var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
        output = output.replace(attributeStripper, '');
    }
    while (output.indexOf('  ') !== -1) {
        output = output.replace('  ', ' ');
    }
    while (output.indexOf('\n ') !== -1) {
        output = output.replace('\n ', '\n');
    }
    return output;
}
var SlateEditor = (function (_super) {
    __extends(SlateEditor, _super);
    function SlateEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plugins = [
            withAutoMarkdown(options),
            TrailingBlock({ type: 'paragraph' }),
            InsertBlockOnEnter({ type: 'paragraph' }),
        ];
        _this.state = { focus: false };
        _this.onPaste = function (e, data, state) {
            if (data.type !== 'html') {
                return undefined;
            }
            var document = serializer.deserialize(CleanWordHTML(data.html)).document;
            return state.transform().insertFragment(document).apply();
        };
        _this.onKeyDown = function (e, data, state) {
            var blockType = getTopMost(_this.props.blockTypes, state);
            if (e.shiftKey && data.key === 'enter') {
                return state.transform().insertText('\n').apply();
            }
            else if (data.key === 'backspace' && blockType) {
                var prev = state.document.getPreviousBlock(blockType.key) || state.document;
                return state
                    .transform()
                    .collapseToEndOf(prev)
                    .removeNodeByKey(blockType.key, { normalize: true })
                    .apply();
            }
            else if (e.metaKey || e.ctrlKey) {
                switch (data.key) {
                    case 'b':
                        return state.transform().toggleMark('bold').apply();
                    case 'u':
                        return state.transform().toggleMark('underlined').apply();
                    case 'i':
                        return state.transform().toggleMark('italic').apply();
                    default:
                        return undefined;
                }
            }
            return undefined;
        };
        _this.render = function () {
            var _a = _this.props, children = _a.children, showUndo = _a.showUndo, onChange = _a.onChange, readOnly = _a.readOnly, marks = _a.marks, nodes = _a.nodes, plugins = _a.plugins, className = _a.className, spellcheck = _a.spellcheck, style = _a.style, blockTypes = _a.blockTypes, rest = __rest(_a, ["children", "showUndo", "onChange", "readOnly", "marks", "nodes", "plugins", "className", "spellcheck", "style", "blockTypes"]);
            var focus = _this.state.focus;
            var value = _this.props.value || Plain.deserialize('');
            var undo = !!value &&
                !!value.history &&
                !!value.history.undos &&
                !!value.history.undos._head &&
                value.history.undos._head.value;
            return (React.createElement("div", { className: className, style: __assign({ position: 'relative' }, style) },
                React.createElement(Gateway, { into: "undo" }, false && undo && undo.length
                    ? React.createElement(Button, { shape: "circle", size: "large", onClick: function () { return onChange(value.transform().undo().apply()); } },
                        React.createElement("i", { className: "fa fa-undo", "aria-hidden": "true" }))
                    : null),
                children,
                readOnly !== true &&
                    React.createElement(ToolbarBlock, { show: focus, state: value, blockTypes: blockTypes, onChange: onChange }),
                readOnly !== true &&
                    React.createElement(ToolbarVoid, { show: focus, state: value, blockTypes: blockTypes, onChange: onChange }),
                readOnly !== true &&
                    React.createElement(ToolbarText, __assign({ show: focus, state: value, onChange: onChange }, options)),
                React.createElement("div", { className: className, style: __assign({ position: 'relative' }, style) },
                    children,
                    React.createElement(Editor, __assign({}, rest, { state: value, spellcheck: spellcheck || false, readOnly: !!readOnly, plugins: _this.plugins, schema: { marks: marks, nodes: nodes }, onChange: onChange, onFocus: function () { return _this.setState({ focus: true }); }, onBlur: function () { return _this.setState({ focus: false }); }, onPaste: _this.onPaste, onKeyDown: _this.onKeyDown, placeholder: !readOnly && 'Hier Text eingeben...', placeholderStyle: { padding: '0 1rem', opacity: 0.33 } })))));
        };
        return _this;
    }
    SlateEditor.propTypes = {
        readOnly: PropTypes.bool,
        showUndo: PropTypes.bool,
        children: PropTypes.node,
        value: PropTypes.object,
        onChange: PropTypes.func,
        marks: PropTypes.object,
        nodes: PropTypes.object,
        autoMarkDownKeyDown: PropTypes.func,
        plugins: PropTypes.array,
        className: PropTypes.string,
    };
    SlateEditor = __decorate([
        withBlockTypes,
        withSlateState({ terse: true }),
        useBlocks(options)
    ], SlateEditor);
    return SlateEditor;
}(Component));
export default SlateEditor;
//# sourceMappingURL=editor.js.map