import Raw from './raw';
function deserialize(string, options) {
    if (options === void 0) { options = {}; }
    var raw = {
        kind: 'state',
        document: {
            kind: 'document',
            nodes: string.split('\n').map(function (line) {
                return {
                    kind: 'block',
                    type: 'paragraph',
                    nodes: [
                        {
                            kind: 'text',
                            ranges: [
                                {
                                    text: line,
                                    marks: [],
                                }
                            ]
                        }
                    ]
                },
                ;
            }),
        }
    };
    return options.toRaw ? raw : Raw.deserialize(raw);
}
function serialize(state) {
    return state.document.nodes
        .map(function (block) { return block.text; })
        .join('\n');
}
export default {
    deserialize: deserialize,
    serialize: serialize
};
//# sourceMappingURL=plain.js.map