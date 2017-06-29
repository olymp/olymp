import React from 'react';
import { fade } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import Image from './image';

export const ImageStyles = ({ theme, color = theme.color }) => ({
  // overflow: 'hidden',
  position: 'relative',
  overflow: 'hidden',
  '> div:nth-child(1)': {
    '& img': {
      borderBottomRightRadius: 100,
    },
  },
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
  ifMediumUp: {
    borderBottomRightRadius: 100,
    '> div:nth-child(1) > div > img': {
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
    '> div:nth-child(2)': {
      width: 'calc(100% - 2rem)',
      borderRadius: theme.borderRadius,
      margin: theme.space3,
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
  key: 'GZK.Header.ImageBlock',
  label: 'Bild',
  category: 'Kopfleiste',
  editable: true,
  styles: ImageStyles,
  defaultNodes: () => createBlockList([Image, Blocks.ImageBlockLabel]),
  component: ({ className, children, attributes }) =>
    <div className={className} {...attributes}>{children}</div>,
};
