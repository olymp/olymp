import loremIpsum from 'lorem-ipsum';
import moment from 'moment';

export const id = () => Math.random().toString(36).substring(7);

export const date = () => moment();

export const color = () => `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

export const string = (length = 1) =>
  loremIpsum({
    count: length, // Number of words, sentences, or paragraphs to generate.
    units: 'words', // Generate words, sentences, or paragraphs.
  });

export const text = (length = 1) =>
  loremIpsum({
    count: length, // Number of words, sentences, or paragraphs to generate.
    units: 'paragraphs', // Generate words, sentences, or paragraphs.
  });

export const image = (width = 400, height = 300) => ({
  id: id(),
  url: `https://lorempixel.com/${width}/${height}/cats`,
  width,
  height,
  caption: string(),
  source: string(),
});
