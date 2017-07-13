export default function (options) {
    if (options === void 0) { options = {}; }
    var getMarkdownType = options.getMarkdownType;
    var self = {
        getType: function (chars) {
            if (getMarkdownType && getMarkdownType(chars)) {
                return getMarkdownType(chars);
            }
            switch (chars) {
                case '*':
                case '-':
                case '+':
                    return 'list-item';
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
                default:
                    return null;
            }
        },
        onKeyDown: function (e, data, state) {
            switch (data.key) {
                case 'space':
                    return self.onSpace(e, state);
                case 'backspace':
                    return self.onBackspace(e, state);
                case 'enter':
                    return self.onEnter(e, state);
            }
        },
        onSpace: function (e, state) {
            if (state.isExpanded) {
                return undefined;
            }
            var selection = state.selection;
            var startText = state.startText, startBlock = state.startBlock, startOffset = state.startOffset;
            var chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');
            var type = self.getType(chars);
            if (!type) {
                return undefined;
            }
            if (type === 'list-item' && startBlock.type === 'list-item') {
                return undefined;
            }
            e.preventDefault();
            var transform = state.transform().setBlock(type);
            if (type === 'list-item') {
                transform = transform.wrapBlock('bulleted-list');
            }
            return transform.extendToStartOf(startBlock).delete().apply();
        },
        onBackspace: function (e, state) {
            if (state.isExpanded) {
                return undefined;
            }
            if (state.startOffset !== 0) {
                return undefined;
            }
            var startBlock = state.startBlock;
            if (startBlock.type === 'paragraph') {
                return undefined;
            }
            e.preventDefault();
            var transform = state.transform().setBlock('paragraph');
            if (startBlock.type === 'list-item') {
                transform = transform.unwrapBlock('bulleted-list');
            }
            return transform.apply();
        },
        onEnter: function (e, state) {
            if (state.isExpanded) {
                return undefined;
            }
            var startBlock = state.startBlock, startOffset = state.startOffset, endOffset = state.endOffset;
            if (startOffset === 0 && startBlock.length === 0) {
                return self.onBackspace(e, state);
            }
            if (endOffset !== startBlock.length) {
                return undefined;
            }
            if (startBlock.type !== 'heading-one' &&
                startBlock.type !== 'heading-two' &&
                startBlock.type !== 'heading-three' &&
                startBlock.type !== 'heading-four' &&
                startBlock.type !== 'heading-five' &&
                startBlock.type !== 'heading-six' &&
                startBlock.type !== 'block-quote') {
                return undefined;
            }
            e.preventDefault();
            return state.transform().splitBlock().setBlock('paragraph').apply();
        },
    };
    return self;
};
//# sourceMappingURL=auto-markdown.js.map