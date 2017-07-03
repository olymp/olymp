import React from 'react';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { FaAlignLeft, FaAlignRight, FaPlus, FaMinus } from 'olymp-icons';

export default {
  key: 'Pages.Media.ImageBlock.Image',
  label: 'Bild',
  category: 'Medien',
  component: ({ getData, setActive, className }) =>
    (<Image
      className={className}
      onClick={setActive}
      width={`${100 / getData('size', 4)}%`}
      value={getData('value', {
        url: 'https://lorempixel.com/400/300/cats/',
        width: 400,
        height: 300,
      })}
    />),
  styles: ({ theme, getData }) => ({
    float: getData('float', 'none'),
    margin: getData('float', 'none') === 'none' && '0 auto',
    marginTop: getData('float', 'none') === 'none' && theme.space3,
    marginBottom: theme.space3,
    marginLeft: getData('float', 'none') !== 'left' && theme.space3,
    marginRight: getData('float', 'none') !== 'right' && theme.space3,
    zIndex: 1,
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
      label: <FaAlignLeft />,
      active: ({ getData }) => getData('float', 'none') === 'left',
      toggle: ({ setData, getData }) =>
        setData({
          float: getData('float', 'none') === 'left' ? 'none' : 'left',
        }),
    },
    {
      label: <FaAlignRight />,
      active: ({ getData }) => getData('float', 'none') === 'right',
      toggle: ({ setData, getData }) =>
        setData({
          float: getData('float', 'none') === 'right' ? 'none' : 'right',
        }),
    },
    {
      label: <FaPlus />,
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
    {
      label: <FaMinus />,
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size < 8 ? size + 1 : 8,
        });
      },
    },
  ],
};
