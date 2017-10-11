import React from 'react';
import renderHelmet from 'olymp-utils/helmet';
import { Image, EditText } from 'olymp-cloudinary';

export default {
  type: 'GZK.Header.ImageBlock.Image',
  component: ({ getData, setActive, className }) => (
    <Image
      className={className}
      onClick={setActive}
      width="100%"
      maxHeight={450}
      maxResolution={500000}
      value={getData('value', {
        width: 1000,
        height: 300,
      })}
    >
      {renderHelmet({ image: getData('value') })}
    </Image>
  ),
  actions: [
    {
      component: ({ setData, getData, ...p }) => (
        <EditText
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
