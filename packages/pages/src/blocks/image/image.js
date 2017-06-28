import React from 'react';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';

export default {
  key: 'Pages.Media.ImageBlock.Image',
  label: 'Bild',
  category: 'Medien',
  component: ({ getData, setActive, className }) =>
    (<Image
      className={className}
      onClick={setActive}
      width="100%"
      value={getData('value', { url: 'https://lorempixel.com/1000/300/cats/' })}
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
