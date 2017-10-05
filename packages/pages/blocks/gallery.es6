import React from 'react';
import { LightboxImage, SimpleImageEdit } from 'olymp-cloudinary';
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
  p => Object.keys(p),
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
  ({ size, ...p }) => Object.keys(p),
);

export default {
  type: 'Pages.Media.Gallery',
  isVoid: true,
  kind: 'block',
  label: 'Galerie',
  category: 'Bilder',
  component: ({ getData, setActive, className, attributes, children }) => (
    <Container {...attributes}>
      {children}
      {getData('value', [
        {
          width: 400,
          height: 300,
        },
        {
          width: 400,
          height: 300,
        },
        {
          width: 400,
          height: 300,
        },
      ]).map((image, i) => (
        <ImageContainer size={getData('size', 3)} key={image.id || i}>
          <LightboxImage className={className} onClick={setActive} width="100%" value={image} />
        </ImageContainer>
      ))}
    </Container>
  ),
  styles: ({ getData }) => ({
    float: getData('float', 'none'),
  }),
  actions: [
    {
      tooltip: getData => `Bilder ${getData('value') ? 'wechseln' : 'wählen'}`,
      component: ({ setData, getData, ...p }) => (
        <SimpleImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi
        />
      ),
      toggle: () => {},
    },
    {
      label: <FaPlus />,
      tooltip: 'Spalte hinzufügen',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 3);
        setData({
          size: size < 8 ? size + 1 : 8,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 3);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
  ],
};
