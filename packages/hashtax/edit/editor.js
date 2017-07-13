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
import React, { Component, PropTypes } from 'react';
import Slate from 'slate/lib/components/editor';
import Mark from 'slate/lib/models/mark';
import Raw from './serializer/raw';
import { Popover, Tag } from 'antd';
import { parseComponent } from '../processors';
import { styled } from 'olymp-utils';
var deserialize = function (value) {
    console.log('DESERIALIZE', value);
    return Raw.deserialize(value, { terse: true });
};
var serialize = function (state) {
    console.log('SERIALIZE', state);
    return Raw.serialize(state, { terse: true });
};
var Highlighted = styled(function () { return ({
    fontWeight: 'bold',
}); }, 'span', function (p) { return p; });
var addMarks = function (startChar, closeChar, markType, characters, string) {
    var mark = Mark.create({ type: markType });
    var start = -startChar.length;
    while (true) {
        start = string.indexOf(startChar, start + startChar.length);
        if (start === -1)
            break;
        var end = string.indexOf(closeChar, start + startChar.length) + startChar.length;
        var size = end === 0 ? characters.size : end;
        for (var i = start; i < size; i + 1) {
            var char = characters.get(i);
            var marks = char.marks;
            marks = marks.add(mark);
            char = char.set('marks', marks);
            characters.set(i, char);
        }
        start = size;
    }
    return characters;
};
var decorate = function (text, block) {
    var characters = text.characters.asMutable();
    var string = text.text;
    if (!string)
        return text.characters;
    if (string.indexOf('#') !== -1) {
        addMarks('#', '#', 'hashtax-inline', characters, string);
    }
    if (string.indexOf('{{') !== -1) {
        addMarks('{{', '}}', 'hashtax-inline-var', characters, string);
    }
    else if (string.indexOf('{') !== -1) {
        addMarks('{', '}', 'hashtax-var', characters, string);
    }
    return characters.asImmutable();
};
var SlateEditor = (function (_super) {
    __extends(SlateEditor, _super);
    function SlateEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.getContentEditor = function (propType, val) {
            return val;
        };
        _this.getContent = function (text) {
            var components = _this.context.Hashtax.components;
            var _a = parseComponent(text.split('#').join('')), type = _a.type, args = _a.args, decorators = _a.decorators, raw = _a.raw;
            var component = components[type];
            if (component && component.propTypes) {
                return {
                    content: (React.createElement("div", null, Object.keys(component.propTypes).map(function (key) { return (React.createElement("p", { key: key },
                        React.createElement("b", null,
                            key,
                            ": "),
                        _this.getContentEditor(key, args[key]))); }))),
                    title: type,
                };
            }
            return undefined;
        };
        _this.getSchema = function () { return ({
            marks: {
                'hashtax-inline': function (_a) {
                    var children = _a.children, text = _a.text;
                    var content = _this.getContent(text);
                    var inner = (React.createElement(Highlighted, null, children));
                    if (content) {
                        return (React.createElement(Popover, __assign({}, content), inner));
                    }
                    return inner;
                },
                'hashtax-inline-var': function (_a) {
                    var children = _a.children;
                    return React.createElement(Tag, { color: "blue" }, children);
                },
                'hashtax-var': function (_a) {
                    var children = _a.children;
                    return React.createElement(Tag, { color: "yellow" }, children);
                },
            },
            rules: [{
                    match: function () { return true; },
                    decorate: decorate,
                }]
        }); };
        _this.onChange = function (value) {
            _this.editorState = value;
            _this.setState({}, function () {
                var newValue = serialize(value);
                if (newValue !== _this.value) {
                    _this.value = newValue;
                    _this.props.onChange(newValue);
                }
            });
        };
        _this.onKeyDown = function (e) {
            var key = window.event ? e.keyCode : e.which;
            if (key === 220) {
            }
            else if (key === 56) {
            }
        };
        _this.plugins = [];
        _this.state = {};
        _this.value = props.value || '';
        _this.editorState = deserialize(_this.value);
        return _this;
    }
    SlateEditor.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== this.value) {
            this.value = newProps.value || '';
            this.editorState = deserialize(this.value);
        }
    };
    SlateEditor.prototype.render = function () {
        var editorState = this.editorState;
        return (React.createElement(Slate, __assign({}, this.props, { schema: this.getSchema(), plugins: this.plugins, state: editorState, onChange: this.onChange, onKeyDown: this.onKeyDown })));
    };
    SlateEditor.contextTypes = {
        Hashtax: PropTypes.func,
    };
    return SlateEditor;
}(Component));
export default SlateEditor;
//# sourceMappingURL=editor.js.map