import React from 'react';
import { createComponent } from 'olymp-fela';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { renderHelmet } from 'olymp-utils';

const Img = createComponent(
  ({ theme }) => ({
    marginX: 'auto',
    marginBottom: theme.space3,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

export default {
  key: 'Pages.Template.Columns.Column.Image',
  component: ({ getData, setActive }) => (
    <Img
      onClick={setActive}
      width={150}
      ratio={1}
      maxResolution={22500}
      value={getData('value', {
        url: 'https://lorempixel.com/150/150/cats/',
        width: 150,
        height: 150,
      })}
      circle
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
