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
      width={getData('float', 'none') === 'none' ? '100%' : '25%'}
      value={getData('value', {
        url: 'https://lorempixel.com/1000/300/cats/',
        width: 1000,
        height: 300,
      })}
    />),
  styles: ({ getData }) => ({
    float: getData('float', 'none'),
  }),
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
    {
      label: 'Links',
      active: ({ getData }) => getData('float', 'none') === 'left',
      toggle: ({ setData, getData }) =>
        setData({
          float: getData('float', 'none') === 'left' ? 'none' : 'left',
        }),
    },
    {
      label: 'Rechts',
      active: ({ getData }) => getData('float', 'none') === 'right',
      toggle: ({ setData, getData }) =>
        setData({
          float: getData('float', 'none') === 'right' ? 'none' : 'right',
        }),
    },
  ],
};
