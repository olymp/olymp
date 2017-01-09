'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

Object.defineProperty(exports, 'Block', {
  enumerable: true,
  get: function get() {
    return _slate.Block;
  }
});
Object.defineProperty(exports, 'Editor', {
  enumerable: true,
  get: function get() {
    return _slate.Editor;
  }
});

var _blockDecorators = require('./block-decorators');

Object.defineProperty(exports, 'useBlockBase', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.useBlockBase;
  }
});
Object.defineProperty(exports, 'useBlockResize', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.useBlockResize;
  }
});
Object.defineProperty(exports, 'useBlockAlign', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.useBlockAlign;
  }
});
Object.defineProperty(exports, 'useBlockToolbar', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.useBlockToolbar;
  }
});
Object.defineProperty(exports, 'useGenericBlock', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.useGenericBlock;
  }
});
Object.defineProperty(exports, 'GenericBlock', {
  enumerable: true,
  get: function get() {
    return _blockDecorators.GenericBlock;
  }
});

var _editorDecorators = require('./editor-decorators');

Object.defineProperty(exports, 'withState', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.withState;
  }
});
Object.defineProperty(exports, 'withSidebar', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.withSidebar;
  }
});
Object.defineProperty(exports, 'withToolbar', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.withToolbar;
  }
});
Object.defineProperty(exports, 'withAutoMarkdown', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.withAutoMarkdown;
  }
});
Object.defineProperty(exports, 'withUniqueId', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.withUniqueId;
  }
});
Object.defineProperty(exports, 'useBlocks', {
  enumerable: true,
  get: function get() {
    return _editorDecorators.useBlocks;
  }
});

var _editor = require('./editor');

Object.defineProperty(exports, 'SlateMate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_editor).default;
  }
});

var _decorators = require('./decorators');

Object.defineProperty(exports, 'withBlockTypes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_decorators).default;
  }
});
Object.defineProperty(exports, 'useBlockTypes', {
  enumerable: true,
  get: function get() {
    return _decorators.useBlockTypes;
  }
});

var _modal = require('./modal');

Object.defineProperty(exports, 'SlateModal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }