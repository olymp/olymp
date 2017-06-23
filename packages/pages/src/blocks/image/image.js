import React from 'react';
import { Image, ImageEdit } from 'olymp-cloudinary';

export default {
  key: 'Pages.ImageText.Image',
  label: 'Bild',
  category: 'Medien',
  component: ({ getData, setActive }) =>
    (<Image
      onClick={setActive}
      width="100%"
      value={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
    />),
  actions: [
    {
      component: ({ setData, getData, ...p }) =>
        (<ImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi={false}
        />),
      toggle: () => {},
    },
  ],
};
