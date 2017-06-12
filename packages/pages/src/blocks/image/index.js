import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const ImageContainer = createComponent(({ width, float }) => ({
  width,
  // float,
  position: 'relative',
}), ({ className, image, showTitle, attributes, children }) => {
  const newChildren = [
    ...children,
    <h1 key={image.caption}>{image.caption}</h1>,
    <div key={image.source}>{image.source}</div>,
  ];

  return (
    <div className={className} {...attributes}>
      <Image contentEditable={false} value={image} alt="" />
      {!showTitle && <Label>{newChildren}</Label>}
    </div>
  );
}, p => Object.keys(p));

const Image = createComponent(() => ({
  width: '100%',
  display: 'block',
}), p => <CloudinaryImage {...p} />, p => Object.keys(p));

const Label = createComponent(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: `${theme.space1} ${theme.space3}`,
  backgroundColor: theme.light2,
  color: theme.light2,
  '& h1, h2, h3, h4, h5, h6': {
    // padding: 0,
    color: theme.light,
  },
  ifSmallDown: {
    position: 'relative',
    padding: theme.space2,
    backgroundColor: theme.dark5,
  },
}), ({ className, children }) => (
  <div className={className}>{children}</div>
), p => Object.keys(p));

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Medien',
  editable: false,
  // Component
  component: ({ getData, ...p }) => (
    <ImageContainer
      {...p}
      image={getData('value', [{ url: 'http://placekitten.com/1000/300', caption: 'Eine Katze', source: 'Der Text hier solange zu sehen bis Beni den Bug mit editable false behebt!' }])[0]}
      showTitle={getData('showTitle')}
      width="100%"
      float="left"
    />
  ),
  // Styles
  styles: {
    width: '100%',
    height: 'auto',
  },
  // Editor Plugins like onKeyDown
  plugin: {},
  // Block decorators like resize
  decorators: [],
  // Actions
  actions: [{
    component: ({ setData, getData, ...p }) => <ImageEdit {...p} onChange={value => setData({ value })} value={getData('value', [])} multi={false} />,
    toggle: () => {},
  },
  {
    label: 'Bildunterschrift',
    toggle: ({ setData, getData }) => setData({ showTitle: !getData('showTitle') }),
    active: ({ getData }) => getData('showTitle'),
  }],
  Label,
};
