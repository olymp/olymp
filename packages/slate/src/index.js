export { Block, Editor, Raw } from 'slate';
export * from './block-decorators';
export * from './editor-decorators';
export * from './decorators';
export {
  default as SlateMate,
  SlateMateFrontend,
  htmlSerializer,
} from './editor';
// export { default as SlateTreeEdit } from './tree';
export { default as createBlockList } from './utils/create-list';
