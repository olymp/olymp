import React from 'react';
import { Image, ImageEdit } from 'olymp-cloudinary';

export default {
  key: 'Pages.Media.ImageBlock.Image',
  label: 'Bild',
  category: 'Medien',
  component: ({ getData, setActive, className }) =>
    (<Image
      className={className}
      onClick={setActive}
      width="100%"
      xy={console.log(
        getData('value', { url: 'http://placekitten.com/1000/300' })
      )}
      value={getData('value', { url: 'http://placekitten.com/1000/300' })}
    />),
  actions: [
    {
      component: ({ setData, getData, ...p }) =>
        (<ImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', {})}
          multi={false}
        />),
      toggle: () => {},
    },
  ],
};
