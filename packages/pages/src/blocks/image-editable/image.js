import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const component = createComponent(
  () => ({
    width: '100%',
    display: 'block',
  }),
  ({ className, attributes, getData, setActive, children }) =>
    (<CloudinaryImage
      {...attributes}
      className={className}
      onClick={setActive}
      value={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
    />),
  p => Object.keys(p)
);

export default {
  key: 'Pages.ImageText.Image',
  component,
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
