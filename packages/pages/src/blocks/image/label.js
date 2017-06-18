import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

const Label = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: `${theme.space1} ${theme.space3}`,
    backgroundColor: theme.light2,
    color: theme.light2,
    '& h1, h2, h3, h4, h5, h6': {
      // color: theme.light,
    },
    ifSmallDown: {
      position: 'relative',
      padding: theme.space2,
      backgroundColor: theme.dark5,
    },
  }),
  ({ className, children }) => <div className={className}>{children}</div>,
  p => Object.keys(p)
);

const ImageWithLabel = createComponent(
  ({ width }) => ({
    width,
    position: 'relative',
  }),
  ({ className, image, showTitle, attributes, children, width }) => {
    const newChildren = [
      ...children,
      <h1 key={image.caption}>{image.caption}</h1>,
      <div key={image.source}>{image.source}</div>,
    ];

    return (
      <div className={className} {...attributes}>
        <Image.Image
          contentEditable={false}
          value={image}
          width={width}
          alt=""
        />
        {showTitle && <Label>{newChildren}</Label>}
      </div>
    );
  },
  p => Object.keys(p)
);

export default {
  ...Image,
  label: 'Bild mit Titel',
  editable: false,
  // Component
  component: ({ getData, ...p }) =>
    (<ImageWithLabel
      {...p}
      image={
        getData('value', [
          {
            url: 'http://placekitten.com/1100/330',
            caption: 'Eine Katze',
            source:
              'Der Text hier solange zu sehen bis Beni den Bug mit editable false behebt!',
          },
        ])[0]
      }
      showTitle={getData('showTitle', true)}
      width="100%"
    />),
  actions: [
    ...Image.actions,
    {
      label: 'Bildunterschrift',
      toggle: ({ setData, getData }) =>
        setData({ showTitle: !getData('showTitle', true) }),
      active: ({ getData }) => getData('showTitle', true),
    },
  ],
  Label,
};
