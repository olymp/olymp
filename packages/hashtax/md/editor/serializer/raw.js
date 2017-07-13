import Block from 'slate/lib/models/block';
import Character from 'slate/lib/models/character';
import Document from 'slate/lib/models/document';
import Inline from 'slate/lib/models/inline';
import Mark from 'slate/lib/models/mark';
import Selection from 'slate/lib/models/selection';
import State from 'slate/lib/models/state';
import Text from 'slate/lib/models/text';
import isEmpty from 'is-empty';
var Raw = {
    deserialize: function (object, options) {
        return Raw.deserializeState(object, options);
    },
    deserializeBlock: function (object, options) {
        if (options === void 0) { options = {}; }
        if (options.terse)
            object = Raw.untersifyBlock(object);
        return Block.create({
            key: object.key,
            type: object.type,
            data: object.data,
            isVoid: object.isVoid,
            nodes: Block.createList(object.nodes.map(function (node) {
                return Raw.deserializeNode(node, options);
            }))
        });
    },
    deserializeDocument: function (object, options) {
        return Document.create({
            key: object.key,
            data: object.data,
            nodes: Block.createList(object.nodes.map(function (node) {
                return Raw.deserializeNode(node, options);
            }))
        });
    },
    deserializeInline: function (object, options) {
        if (options === void 0) { options = {}; }
        if (options.terse)
            object = Raw.untersifyInline(object);
        return Inline.create({
            key: object.key,
            type: object.type,
            data: object.data,
            isVoid: object.isVoid,
            nodes: Inline.createList(object.nodes.map(function (node) {
                return Raw.deserializeNode(node, options);
            }))
        });
    },
    deserializeMark: function (object, options) {
        return Mark.create(object);
    },
    deserializeNode: function (object, options) {
        switch (object.kind) {
            case 'block': return Raw.deserializeBlock(object, options);
            case 'document': return Raw.deserializeDocument(object, options);
            case 'inline': return Raw.deserializeInline(object, options);
            case 'text': return Raw.deserializeText(object, options);
            default: {
                throw new Error("Unrecognized node kind \"" + object.kind + "\".");
            }
        }
    },
    deserializeRange: function (object, options) {
        if (options === void 0) { options = {}; }
        if (options.terse)
            object = Raw.untersifyRange(object);
        var marks = Mark.createSet(object.marks.map(function (mark) {
            return Raw.deserializeMark(mark, options);
        }));
        return Character.createList(object.text
            .split('')
            .map(function (char) {
            return Character.create({
                text: char,
                marks: marks,
            });
        }));
    },
    deserializeSelection: function (object, options) {
        if (options === void 0) { options = {}; }
        return Selection.create({
            anchorKey: object.anchorKey,
            anchorOffset: object.anchorOffset,
            focusKey: object.focusKey,
            focusOffset: object.focusOffset,
            isFocused: object.isFocused,
        });
    },
    deserializeState: function (object, options) {
        if (options === void 0) { options = {}; }
        if (options.terse)
            object = Raw.untersifyState(object);
        var document = Raw.deserializeDocument(object.document, options);
        var selection;
        if (object.selection != null) {
            selection = Raw.deserializeSelection(object.selection, options);
        }
        return State.create({ document: document, selection: selection }, options);
    },
    deserializeText: function (object, options) {
        if (options === void 0) { options = {}; }
        if (options.terse)
            object = Raw.untersifyText(object);
        return Text.create({
            key: object.key,
            characters: object.ranges.reduce(function (characters, range) {
                return characters.concat(Raw.deserializeRange(range, options));
            }, Character.createList())
        });
    },
    serialize: function (model, options) {
        return Raw.serializeState(model, options);
    },
    serializeBlock: function (block, options) {
        if (options === void 0) { options = {}; }
        var object = {
            data: block.data.toJSON(),
            key: block.key,
            kind: block.kind,
            isVoid: block.isVoid,
            type: block.type,
            nodes: block.nodes
                .toArray()
                .map(function (node) { return Raw.serializeNode(node, options); })
        };
        if (!options.preserveKeys) {
            delete object.key;
        }
        return options.terse
            ? Raw.tersifyBlock(object)
            : object;
    },
    serializeDocument: function (document, options) {
        if (options === void 0) { options = {}; }
        var object = {
            data: document.data.toJSON(),
            key: document.key,
            kind: document.kind,
            nodes: document.nodes
                .toArray()
                .map(function (node) { return Raw.serializeNode(node, options); })
        };
        if (!options.preserveKeys) {
            delete object.key;
        }
        return options.terse
            ? Raw.tersifyDocument(object)
            : object;
    },
    serializeInline: function (inline, options) {
        if (options === void 0) { options = {}; }
        var object = {
            data: inline.data.toJSON(),
            key: inline.key,
            kind: inline.kind,
            isVoid: inline.isVoid,
            type: inline.type,
            nodes: inline.nodes
                .toArray()
                .map(function (node) { return Raw.serializeNode(node, options); })
        };
        if (!options.preserveKeys) {
            delete object.key;
        }
        return options.terse
            ? Raw.tersifyInline(object)
            : object;
    },
    serializeMark: function (mark, options) {
        if (options === void 0) { options = {}; }
        var object = {
            data: mark.data.toJSON(),
            kind: mark.kind,
            type: mark.type
        };
        return options.terse
            ? Raw.tersifyMark(object)
            : object;
    },
    serializeNode: function (node, options) {
        switch (node.kind) {
            case 'block': return Raw.serializeBlock(node, options);
            case 'document': return Raw.serializeDocument(node, options);
            case 'inline': return Raw.serializeInline(node, options);
            case 'text': return Raw.serializeText(node, options);
            default: {
                throw new Error("Unrecognized node kind \"" + node.kind + "\".");
            }
        }
    },
    serializeRange: function (range, options) {
        if (options === void 0) { options = {}; }
        var object = {
            kind: range.kind,
            text: range.text,
            marks: range.marks
                .toArray()
                .map(function (mark) { return Raw.serializeMark(mark, options); })
        };
        return options.terse
            ? Raw.tersifyRange(object)
            : object;
    },
    serializeSelection: function (selection, options) {
        if (options === void 0) { options = {}; }
        var object = {
            kind: selection.kind,
            anchorKey: selection.anchorKey,
            anchorOffset: selection.anchorOffset,
            focusKey: selection.focusKey,
            focusOffset: selection.focusOffset,
            isBackward: selection.isBackward,
            isFocused: selection.isFocused,
        };
        return options.terse
            ? Raw.tersifySelection(object)
            : object;
    },
    serializeState: function (state, options) {
        if (options === void 0) { options = {}; }
        var object = {
            document: Raw.serializeDocument(state.document, options),
            selection: Raw.serializeSelection(state.selection, options),
            kind: state.kind
        };
        if (!options.preserveSelection) {
            delete object.selection;
        }
        var ret = options.terse
            ? Raw.tersifyState(object)
            : object;
        return ret;
    },
    serializeText: function (text, options) {
        if (options === void 0) { options = {}; }
        var object = {
            key: text.key,
            kind: text.kind,
            ranges: text
                .getRanges()
                .toArray()
                .map(function (range) { return Raw.serializeRange(range, options); })
        };
        if (!options.preserveKeys) {
            delete object.key;
        }
        return options.terse
            ? Raw.tersifyText(object)
            : object;
    },
    tersifyBlock: function (object) {
        var ret = {};
        ret.kind = object.kind;
        ret.type = object.type;
        if (object.key)
            ret.key = object.key;
        if (!object.isVoid)
            ret.nodes = object.nodes;
        if (object.isVoid)
            ret.isVoid = object.isVoid;
        if (!isEmpty(object.data))
            ret.data = object.data;
        return ret;
    },
    tersifyDocument: function (object) {
        var ret = {};
        ret.nodes = object.nodes;
        if (object.key)
            ret.key = object.key;
        if (!isEmpty(object.data))
            ret.data = object.data;
        return ret;
    },
    tersifyInline: function (object) {
        var ret = {};
        ret.kind = object.kind;
        ret.type = object.type;
        if (object.key)
            ret.key = object.key;
        if (!object.isVoid)
            ret.nodes = object.nodes;
        if (object.isVoid)
            ret.isVoid = object.isVoid;
        if (!isEmpty(object.data))
            ret.data = object.data;
        return ret;
    },
    tersifyMark: function (object) {
        var ret = {};
        ret.type = object.type;
        if (!isEmpty(object.data))
            ret.data = object.data;
        return ret;
    },
    tersifyRange: function (object) {
        var ret = {};
        ret.text = object.text;
        if (!isEmpty(object.marks))
            ret.marks = object.marks;
        return ret;
    },
    tersifySelection: function (object) {
        return {
            anchorKey: object.anchorKey,
            anchorOffset: object.anchorOffset,
            focusKey: object.focusKey,
            focusOffset: object.focusOffset,
            isFocused: object.isFocused,
        };
    },
    tersifyState: function (object) {
        if (object.selection == null) {
            return object.document;
        }
        return {
            document: object.document,
            selection: object.selection
        };
    },
    tersifyText: function (object) {
        var ret = {};
        ret.kind = object.kind;
        if (object.key)
            ret.key = object.key;
        if (object.ranges.length == 1 && object.ranges[0].marks == null) {
            ret.text = object.ranges[0].text;
        }
        else {
            ret.ranges = object.ranges;
        }
        return ret;
    },
    untersifyBlock: function (object) {
        if (object.isVoid || !object.nodes || !object.nodes.length) {
            return {
                key: object.key,
                data: object.data,
                kind: object.kind,
                type: object.type,
                isVoid: object.isVoid,
                nodes: [
                    {
                        kind: 'text',
                        text: ''
                    }
                ]
            };
        }
        return object;
    },
    untersifyInline: function (object) {
        if (object.isVoid || !object.nodes || !object.nodes.length) {
            return {
                key: object.key,
                data: object.data,
                kind: object.kind,
                type: object.type,
                isVoid: object.isVoid,
                nodes: [
                    {
                        kind: 'text',
                        text: ''
                    }
                ]
            };
        }
        return object;
    },
    untersifyRange: function (object) {
        return {
            kind: 'range',
            text: object.text,
            marks: object.marks || []
        };
    },
    untersifySelection: function (object) {
        return {
            kind: 'selection',
            anchorKey: object.anchorKey,
            anchorOffset: object.anchorOffset,
            focusKey: object.focusKey,
            focusOffset: object.focusOffset,
            isBackward: null,
            isFocused: false
        };
    },
    untersifyState: function (object) {
        if (object.selection || object.document) {
            return {
                kind: 'state',
                document: object.document,
                selection: object.selection,
            };
        }
        return {
            kind: 'state',
            document: {
                data: object.data,
                key: object.key,
                kind: 'document',
                nodes: object.nodes
            }
        };
    },
    untersifyText: function (object) {
        if (object.ranges)
            return object;
        return {
            key: object.key,
            kind: object.kind,
            ranges: [{
                    text: object.text,
                    marks: object.marks || []
                }]
        };
    }
};
export default Raw;
//# sourceMappingURL=raw.js.map