import { Blocks } from 'olymp-pages';
import { fade } from 'olymp-fela';

export default {
  ...Blocks.Image,
  category: 'Kopfleiste',
  styles: ({ theme }) => ({
    borderBottomRightRadius: 75,
    overflow: 'hidden',
    '> div': {
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
      '> div': {
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
