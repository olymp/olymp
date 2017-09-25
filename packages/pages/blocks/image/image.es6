import React from 'react';
import { LightboxImage, Image, SimpleImageEdit } from 'olymp-cloudinary';
import { FaAlignLeft, FaAlignRight, FaPlus, FaMinus } from 'olymp-icons';

export default {
  type: 'Pages.Media.ImageBlock.Image',
  isVoid: true,
  kind: 'inline',
  label: 'Bild',
  category: 'Medien',
  component: ({ getData, className, editor, attributes }) => {
    const Img = editor.props.readOnly === true ? LightboxImage : Image;
    return (
      <Img
        attributes={attributes}
        className={className}
        width={`${100 / getData('size', 4)}%`}
        value={getData('value', {
          url: 'https://lorempixel.com/400/300/cats/',
          width: 400,
          height: 300,
        })}
      />
    );
  },
  styles: ({ theme, getData }) => {
    const alignment = getData('float', 'none');
    const normalized = alignment.replace('+', '');
    return {
      float: normalized,
      margin: alignment === 'none' && '0 auto',
      marginTop: alignment === 'none' && theme.space3,
      marginBottom: theme.space3,
      zIndex: 1,
      extend: [
        {
          condition: normalized === 'left',
          style: { marginRight: theme.space3 },
        },
        {
          condition: alignment === 'left+',
          style: { marginLeft: -75 },
        },
        {
          condition: normalized === 'right',
          style: { marginLeft: theme.space3 },
        },
        {
          condition: alignment === 'right+',
          style: { marginRight: -75 },
        },
      ],
    };
  },
  actions: [
    {
      tooltip: getData => `Bild ${getData('value') ? 'wechseln' : 'wählen'}`,
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
    {
      label: <FaAlignLeft />,
      tooltip: 'Links anordnen',
      active: ({ getData }) => getData('float', 'none').indexOf('left') === 0,
      toggle: ({ setData, getData }) => {
        const alignment = getData('float', 'none');
        if (alignment === 'none') {
          setData({ float: 'left' });
        } else if (alignment === 'left') {
          setData({ float: 'left+' });
        } else {
          setData({ float: null });
        }
      },
    },
    {
      label: <FaAlignRight />,
      tooltip: 'Rechts anordnen',
      active: ({ getData }) => getData('float', 'none').indexOf('right') === 0,
      toggle: ({ setData, getData }) => {
        const alignment = getData('float', 'none');
        if (alignment === 'none') {
          setData({ float: 'right' });
        } else if (alignment === 'right') {
          setData({ float: 'right+' });
        } else {
          setData({ float: null });
        }
      },
    },
    {
      label: <FaPlus />,
      tooltip: 'Größer',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Kleiner',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size < 8 ? size + 1 : 8,
        });
      },
    },
  ],
};
