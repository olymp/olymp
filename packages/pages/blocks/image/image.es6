import React from 'react';
import { LightboxImage, Image, SimpleImageEdit } from 'olymp-cloudinary';
import { onlyUpdateForKeys } from 'recompose';
import { FaAlignLeft, FaAlignRight, FaPlus, FaMinus } from 'olymp-icons';
import { Inline, Block } from 'slate';

export default {
  type: 'image',
  isVoid: true,
  kind: 'block',
  label: 'Bild',
  category: 'Bilder',
  component: ({ getData, className, editor, attributes, children }) => {
    const Img = editor.props.readOnly === true ? LightboxImage : Image;
    return (
      <Img
        attributes={attributes}
        className={className}
        width={`${100 / getData('size', 4)}%`}
        value={getData('value', {
          width: 400,
          height: 300,
        })}
      >
        {children}
      </Img>
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
      toggle: ({ state, onChange, node }) => {
        const alignment = node.data.get('float') || 'none';
        if (alignment === 'none') {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .collapseToStartOfNextBlock()
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'left'),
                }),
              ),
          );
        } else if (alignment === 'left') {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'left+'),
                }),
              ),
          );
        } else {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .insertBlock(
                Block.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', null),
                }),
              ),
          );
        }
      },
    },
    {
      label: <FaAlignRight />,
      tooltip: 'Rechts anordnen',
      active: ({ getData }) => getData('float', 'none').indexOf('right') === 0,
      toggle: ({ state, onChange, node }) => {
        const alignment = node.data.get('float') || 'none';

        if (alignment === 'none') {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'right'),
                }),
              ),
          );
        } else if (alignment === 'right') {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'right+'),
                }),
              ),
          );
        } else {
          onChange(
            state
              .change()
              .removeNodeByKey(node.key)
              .insertBlock(
                Block.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', null),
                }),
              ),
          );
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
