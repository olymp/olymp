import { Blocks } from 'olymp-pages';
import { fade } from 'olymp-fela';

export default {
  ...Blocks.Image,
  styles: ({ theme }) => ({
    '> div': {
      '> div': {
        backgroundColor: fade('#ffa210', 90),
        color: '#FFFFFF',
      },
    },
    ifMediumUp: {
      borderBottomRightRadius: 100,
      overflow: 'hidden',
      '> div': {
        borderBottomRightRadius: 100,
        overflow: 'hidden',
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
            fontWeight: 300,
            lineHeight: 1.25,
            color: theme.light,
          },
          '> p': {
            color: theme.light,
          },
        },
      },
    },
  }),
};
