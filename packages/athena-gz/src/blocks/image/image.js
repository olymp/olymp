import React from 'react';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';

export default {
  key: 'GZK.Header.ImageBlock.Image',
  component: ({ getData, setActive, className }) =>
    (<Image
      className={className}
      onClick={setActive}
      width="100%"
      maxResolution={500000}
      value={getData('value', {
        url: 'https://lorempixel.com/1000/300/cats/',
        width: 1000,
        height: 300,
      })}
    />),
  actions: [
    {
      component: ({ setData, getData, ...p }) =>
        (<SimpleImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', {})}
          multi={false}
        />),
      toggle: () => {},
    },
  ],
};
