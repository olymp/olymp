import React from 'react';
import { fade } from 'olymp-fela';
import * as Blocks from 'olymp-pages/blocks';
import Image from './image';

export const ImageStyles = ({ theme, color = theme.color }) => ({
  position: 'relative',
  overflow: 'hidden',
  '> div:nth-child(2)': {
    backgroundColor: fade(color, 90),
    color: theme.light,
    '> h1': {
      color: theme.light,
    },
    '> h2': {
      color: theme.light,
    },
    '> h3': {
      color: theme.light,
    },
    '> p': {
      color: theme.light,
    },
  },
  '> div:nth-child(1)': {
    onAfter: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 100,
      height: 100,
      zIndex: 5,
      backgroundImage: 'url(/img/edge.png)',
      backgroundSize: 'cover',
      ifSmallDown: {
        width: 50,
        height: 50,
      },
    },
  },
  ifMediumUp: {
    '> div:nth-child(1) > div > div > img': {
      borderBottomRightRadius: 100,
    },
    '> div:nth-child(2)': {
      width: '66%',
      left: 'auto',
      right: 0,
      backgroundColor: fade(color, 90),
      borderTopLeftRadius: 50,
      borderBottomRightRadius: 100,
      minHeight: 100,
      padding: '1rem 2rem',
    },
  },
  ifSmallDown: {
    paddingX: theme.space2,
    paddingY: theme.space1,
    '> div:nth-child(1) > div > div > img': {
      borderBottomRightRadius: 50,
    },
    '> div:nth-child(2)': {
      width: 'calc(100% - 1rem)',
      borderRadius: theme.borderRadius,
      margin: theme.space2,
      marginBottom: 0,
      padding: theme.space2,
      textAlign: 'center',
      '> h1': {
        fontSize: '1.3rem',
      },
      '> h2': {
        fontSize: '1.3rem',
      },
      '> h3': {
        fontSize: '1.3rem',
      },
    },
  },
});

export default {
  type: 'GZK.Header.ImageBlock',
  label: 'Bild',
  category: 'Kopf',
  isVoid: false,
  kind: 'block',
  styles: ImageStyles,
  defaultNodes: () => [Image, Blocks.ImageBlockLabel],
  component: ({ className, children, attributes }) => (
    <div className={className} {...attributes}>
      {children}
    </div>
  ),
};
