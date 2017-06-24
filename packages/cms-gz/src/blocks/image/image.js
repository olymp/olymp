import React from 'react';
import { Blocks } from 'olymp-pages';
import { fade } from 'olymp-fela';

export default {
  ...Blocks.ImageBlockImage,
  key: 'GZK.Pages.ImageBlock.Image',
  label: undefined,
  category: undefined,
  styles: ({ theme }) => ({
    borderBottomRightRadius: 75,
    overflow: 'hidden',
    '> div:nth-child(2)': {
      backgroundColor: fade('#ffa210', 90),
      color: theme.light,
      borderBottomRightRadius: 75,
      minHeight: 75,
      '> h3': {
        fontWeight: 300,
      },
      '> p': {
        color: theme.light,
      },
    },
    ifMediumUp: {
      borderBottomRightRadius: 100,
      '> div:nth-child(2)': {
        width: '66%',
        left: 'auto',
        right: 0,
        backgroundColor: fade('#ffa210', 90),
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 100,
        minHeight: 100,
        padding: '1rem 2rem',
        fontSize: '125%',
        '> h3': {
          fontSize: '145%',
          lineHeight: 1.25,
        },
      },
    },
  }),
};
