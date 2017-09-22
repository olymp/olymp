import React from 'react';
import { createComponent } from 'olymp-fela';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { renderHelmet } from 'olymp-utils';

const Img = createComponent(
  ({ theme }) => ({
    // marginTop: 0,
  }),
  p => <Image {...p} />,
  p => Object.keys(p),
);

export default {
  key: 'Pages.Template.Columns.Column.Image',
  label: 'Bild',
  component: ({ getData, setActive, image }) => (
    <Img
      onClick={setActive}
      width="100%"
      // width={150}
      ratio={3 / 4}
      maxResolution={45000}
      value={
        image ||
        getData('value', {
          url: 'https://lorempixel.com/360/270/cats/',
          width: 360,
          height: 270,
        })
      }
      // circle
      contentEditable={false}
    >
      {renderHelmet({ image: getData('value') })}
    </Img>
  ),
  editable: true,
  actions: [
    {
      component: ({ setData, getData, ...p }) => (
        <SimpleImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', {})}
          multi={false}
        />
      ),
      toggle: () => {},
    },
  ],
};
