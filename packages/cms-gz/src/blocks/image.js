import { fade } from 'olymp-fela';
import { Blocks } from 'olymp-pages';

export default {
  ...Blocks.ImageBlock,
  key: 'GZK.Header.ImageBlock',
  label: 'Bild',
  category: 'Kopfleiste',
  styles: ({ theme }) => ({
    borderBottomRightRadius: 75,
    overflow: 'hidden',
    position: 'relative',
    '> div:nth-child(1) > div > img': {
      borderBottomRightRadius: 75,
    },
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
      '> div:nth-child(1) > div > img': {
        borderBottomRightRadius: 100,
      },
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
