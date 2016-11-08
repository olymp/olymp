import injector from 'react-frame-aware-selection-plugin';
injector();

export { useBlockBase, useBlockResize, useBlockAlign, useBlockToolbar } from './block-decorators';
export { withState, withSidebar, withToolbar, withAutoMarkdown, withUniqueId, useBlocks } from './editor-decorators';
export { Block, Editor } from 'slate';
export { default as SlateMate } from './editor';
