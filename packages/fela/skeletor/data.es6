import lorem from 'olymp-utils/lorem';
import moment from 'moment';

export const id = () => Math.random().toString(36).substring(7);

export const date = () => moment();

export const color = () => `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

export const string = (length = 1) => lorem(length, 'words');

export const text = (length = 1) => lorem(length);

export const image = (width = 400, height = 300) => ({
  id: id(),
  url: `https://lorempixel.com/${width}/${height}/cats`,
  width,
  height,
  caption: string(),
  source: string(),
});
