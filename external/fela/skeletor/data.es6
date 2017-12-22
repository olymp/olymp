import { lorem } from 'olymp-utils';

export const id = () =>
  Math.random()
    .toString(36)
    .substring(7);

export const date = () => new Date();

export const color = () => `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

export const string = (length = 1) => lorem(length, 'words');

export const text = (length = 1) => lorem(length);

export const image = (width = 400, height = 300) => ({
  id: id(),
  width,
  height,
  caption: string(),
  source: string(),
});
