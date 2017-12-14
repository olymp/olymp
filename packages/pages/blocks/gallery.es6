import React from 'react';
import {
  Lightbox,
  LightboxImage,
  EditText,
  LightboxGallery,
  cloudinaryUrl,
} from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { withProps, withPropsOnChange, compose } from 'recompose';
import { FaPlus, FaMinus } from 'olymp-icons';

const getSrcSet = (value, w) =>
  `${cloudinaryUrl(value, {
    w: Math.floor(w),
  })} ${Math.floor(w)}w`;

const Container = createComponent(
  ({ theme }) => ({
    paddingY: theme.space1,
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
      paddingBottom: theme.space1,
      float: 'left',
      width: `${100 / size}%`,
      minWidth: `${100 / size}%`,
      '> span': {
        width: '100%',
        fontSize: 12,
        fontStyle: 'italic',
        display: 'block',
        textAlign: 'center',
        padding: 0,
      },
    };
    style[`:nth-child(${size}n)`] = { paddingRight: 0 };

    return style;
  },
  'div',
  ({ size, ...p }) => Object.keys(p),
);

const enhance = compose(
  withProps(({ getData }) => ({
    items: getData('value', [
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
    ]),
  })),
  withPropsOnChange(['xyz'], ({}) => ({
    id: Math.random()
      .toString(36)
      .substr(2, 9),
  })),
);

export default {
  type: 'Pages.Media.Gallery',
  isVoid: true,
  kind: 'block',
  label: 'Galerie',
  category: 'Bilder',
  component: enhance(
    ({ getData, setActive, className, attributes, children, items, id }) => (
      <LightboxGallery gallery={id}>
        <Container {...attributes} className="gallery-block">
          {children}
          <Lightbox />
          {items.map((image, i) => (
            <ImageContainer size={getData('size', 3)} key={image.id || i}>
              <LightboxImage
                className={className}
                onClick={setActive}
                width="100%"
                value={image}
              />
              {image.caption && <span>{image.caption}</span>}
            </ImageContainer>
          ))}
        </Container>
      </LightboxGallery>
    ),
  ),
  styles: ({ getData }) => ({
    float: getData('float', 'none'),
  }),
  actions: [
    {
      tooltip: getData => `Bilder ${getData('value') ? 'wechseln' : 'wählen'}`,
      component: ({ setData, getData, ...p }) => (
        <EditText
          {...p}
          onChange={value => console.log(value) || setData({ value })}
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
