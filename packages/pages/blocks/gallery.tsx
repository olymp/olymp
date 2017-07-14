import React from 'react';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { FaPlus, FaMinus } from 'olymp-icons';

const Container = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
    hasFlex: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    clearfix: true,
  }),
  'div',
  p => Object.keys(p)
);

const ImageContainer = createComponent(
  ({ theme, size }) => {
    const style = {
      paddingRight: theme.space3,
      paddingBottom: theme.space3,
      float: 'left',
      width: `${100 / size}%`,
      minWidth: `${100 / size}%`,
      hasFlex: {
        display: 'flex',
      },
    };
    style[`:nth-child(${size}n)`] = { paddingRight: 0 };

    return style;
  },
  'div',
  ({ size, ...p }) => Object.keys(p)
);

export default {
  key: 'Pages.Media.Gallery',
  label: 'Galerie',
  category: 'Medien',
  component: ({ getData, setActive, className, attributes }) =>
    <Container {...attributes}>
      {getData('value', [
        {
          url: 'https://lorempixel.com/400/300/cats/',
          width: 400,
          height: 300,
        },
      ]).map((image, i) =>
        <ImageContainer size={getData('size', 4)} key={image.id || i}>
          <Image
            className={className}
            onClick={setActive}
            width="100%"
            value={image}
          />
        </ImageContainer>
      )}
    </Container>,
  styles: ({ getData }) => ({
    float: getData('float', 'none'),
  }),
  actions: [
    {
      tooltip: getData => `Bilder ${getData('value') ? 'wechseln' : 'wählen'}`,
      component: ({ setData, getData, ...p }) =>
        <SimpleImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi
        />,
      toggle: () => {},
    },
    {
      label: <FaPlus />,
      tooltip: 'Spalte hinzufügen',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size < 8 ? size + 1 : 8,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
  ],
};
